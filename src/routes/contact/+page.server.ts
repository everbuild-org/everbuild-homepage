import type {Actions} from './$types';
import {env} from "$env/dynamic/private";
import {building} from "$app/environment";

interface TokenValidateResponse {
    'error-codes': string[];
    success: boolean;
    action: string;
    cdata: string;
}

async function validateToken(token: string | null, secret: string) {
    if (building) return false;
    if (!token) return false;

    const response = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                response: token,
                secret: secret,
            }),
        },
    );

    const data: TokenValidateResponse = await response.json();

    return {
        // Return the status
        success: data.success,

        // Return the first error if it exists
        error: data['error-codes']?.length ? data['error-codes'][0] : null,
    };
}

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const text = formData.get('text');
        const token = formData.get('cf-turnstile-response') as string | null;
        if (!await validateToken(token, env.CF_TURNSTILE_SECRET)) {
            return {
                formError: 'Please fill in all fields'
            }
        }

        if (!name || !email || !text) {
            return {
                formError: 'Please fill in all fields'
            }
        }
        const webhook = env.WEBHOOK_URL!;
        const payload = {
            "username": "Everbuild Website",
            "avatar_url": "",
            "content": null,
            "embeds": [
                {
                    "title": name,
                    "description": text,
                    "color": 2733589,
                    "author": {
                        "name": email + " | " + phone
                    },
                    "footer": {
                        "text": "Sent from contact form on the everbuild homepage"
                    }
                }
            ],
            "attachments": []
        }
        await fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        return {
            formSuccess: 'Your message has been sent'
        }
    }
} satisfies Actions;
