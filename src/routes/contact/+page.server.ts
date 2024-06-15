import type {Actions} from './$types';
import {env} from "$env/dynamic/private";
import {building} from "$app/environment";

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const text = formData.get('text');
        if (!name || !email || !text) {
            return {
                formError: 'Please fill in all fields'
            }
        }
        if (!building) {
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
        }
        return {
            formSuccess: 'Your message has been sent'
        }
    }
} satisfies Actions;
