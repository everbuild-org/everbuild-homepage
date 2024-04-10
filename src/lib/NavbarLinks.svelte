<script>
    import {Translate} from "phosphor-svelte";
    import {locale, t} from "svelte-i18n";
</script>

<li><a href="/">{$t("nav.home")}</a></li>
<li><a href="/about">{$t("nav.about")}</a></li>
<div class="dropdown dropdown-hover">
    <div tabindex="0" role="button" class="my-2 m-1">{$t("nav.products")}</div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-fit">
        <li><a href="https://asorda.app" target="_blank">Asorda</a></li>
        <li><a href="https://github.com/everbuild-org/noted" target="_blank">Noted</a></li>
    </ul>
</div>
<li><a href="/contact">{$t("nav.contact")}</a></li>
<div class="dropdown dropdown-end dropdown-hover">
    <div class="m-1 text-xl my-2" tabindex="0" role="button"><Translate/></div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-fit">
        <li><a on:click={()=> $locale="en"}>English</a></li>
        <li><a on:click={()=> $locale="de"}>Deutsch</a></li>
    </ul>
</div>