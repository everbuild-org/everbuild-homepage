<script>
    import {Translate} from "phosphor-svelte";
    import {locale} from "svelte-i18n";
</script>

<li><a href="/">Home</a></li>
<li><a href="/about">About us</a></li>
<li><a href="/products">Products</a></li>
<li><a href="/contact">Contact</a></li>
<div class="dropdown dropdown-end dropdown-hover">
    <div class="m-1 text-xl my-2" tabindex="0" role="button"><Translate/></div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-32">
        <li><a on:click={()=> $locale="en"}>English</a></li>
        <li><a on:click={()=> $locale="de"}>Deutsch</a></li>
    </ul>
</div>