<script lang="ts">
    import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
    import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
    import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';
    import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
    import TiktokLogo from 'phosphor-svelte/lib/TiktokLogo';
    import Headset from 'phosphor-svelte/lib/Headset';

    const socials = [
        {
            name: 'Discord',
            url: 'https://discord.com/invite/aK8KD2VVhH',
            icon: DiscordLogo
        },
        {
            name: 'GitHub',
            url: 'https://github.com/everbuild-org',
            icon: GithubLogo
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@everbuild_org',
            icon: YoutubeLogo
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/everbuild_org/',
            icon: InstagramLogo
        },
        {
            name: 'TikTok',
            url: 'https://www.tiktok.com/@everbuild_org',
            icon: TiktokLogo
        },
        {
            name: 'TeamSpeak',
            url: 'ts3server://everbuild.org',
            icon: Headset
        }
    ];

    export let showMargin = true;
</script>

<footer class="flex min-h-[33vh] w-full flex-col justify-between bg-stone-950 p-4" class:mt-6={showMargin}>
    <div class="flex w-full flex-col justify-between lg:flex-row">
        <div class="prose flex flex-grow flex-col" style="order: 1;">
            <h3>Legal</h3>
            <div class="flex gap-2">
                <a href="/imprint">Imprint</a>
                <span>&bull;</span>
                <a href="/privacy">Privacy</a>
            </div>
        </div>
        <div class="prose flex flex-grow flex-col text-right" style="order: 2;">
            <h3>Social Media</h3>
            <div class="flex flex-row justify-end items-center">
                {#each socials as social}
                    <a href={social.url} target="_blank" rel="noopener noreferrer"
                       class="ml-4 transition-allx hover:text-info">
                        <svelte:component this={social.icon} class="w-6 h-6"/>
                    </a>
                {/each}
            </div>
        </div>
    </div>
    <div class="text-center ">
        &copy; 2023 - {new Date().getFullYear()} Everbuild.org. All rights reserved.
    </div>
</footer>