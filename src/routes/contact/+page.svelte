<script lang="ts">
    import type {ActionData} from './$types'
    import {t} from "$lib/i18n";

    export let form: ActionData;
</script>

<svelte:head>
    <title>{$t("head.title.contact")}</title>
    <meta name="description" content="Everbuild | Contact">
</svelte:head>

<div class="flex min-h-[calc(100vh-100px)] flex-wrap">
    <div class="flex justify-center items-center flex-[3] flex-wrap">
        <div class="pt-20 px-2 md:px-20 flex-1 pb-40">
            <h1 class="text-5xl tracking-tight font-bold dark:text-white">{$t("contact.text.title")}</h1>
            <p class="max-w-[35ch] pt-8 pb-4">{$t("contact.text.text")}</p>
            <p class="leading-loose pb-16"><a href="mailto:contact@everbuild.org">contact@everbuild.org</a><br>
                <a href="https://everbuild.asorda.app" target="_blank">{$t("contact.text.subtitle")}</a></p>
            <div class="w-full justify-between flex gap-4 flex-wrap">
                <div class="">
                    <h2 class="text-2xl font-bold dark:text-white">{$t("contact.text.text1.title")}</h2>
                    <p class="max-w-[35ch]">{$t("contact.text.text1.text")}</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold dark:text-white">{$t("contact.text.text2.title")}</h2>
                    <p class="max-w-[35ch]">{$t("contact.text.text2.text")}</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold dark:text-white">{$t("contact.text.text3.title")}</h2>
                    <p class="max-w-[35ch]">{$t("contact.text.text3.text")}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-[2] flex justify-center items-center">
        <div class="card w-full md:mx-16 bg-base-300 dark:bg-neutral shadow-xl max-w-[calc(100vw-50px)]">
            <form method="POST" class="card-body">
                <h2 class="text-2xl font-bold">{$t("contact.form.title")}</h2>
                {#if form?.formError}
                    <div class="alert alert-error mt-4">{form.formError}</div>
                {/if}
                {#if form?.formSuccess}
                    <div class="alert alert-success mt-4">{form.formSuccess}</div>
                {/if}
                <label class="input input-bordered flex items-center gap-2">
                    {$t("contact.form.name")}
                    <input type="text" class="grow border-0" placeholder="Name" name="name"/>
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    {$t("contact.form.email")}
                    <input type="text" class="grow border-0" placeholder="hi@everbuild.org" name="email"/>
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    {$t("contact.form.phone")}
                    <input type="text" class="grow border-0" placeholder="+49 ..." name="phone"/>
                </label>
                <textarea class="textarea textarea-bordered min-h-64" placeholder={$t("contact.form.message")} name="text"></textarea>
                <div class="card-actions justify-center flex-col">
                    <button class="btn btn-primary flex-1 w-full">{$t("contact.form.submit")}</button>
                    <span class="text-sm text-center block w-full">
                            {$t("contact.form.policy1")} <a href="/privacy" class="link">{$t("contact.form.policy2")}</a> {$t("contact.form.policy3")} <a
                            href="/terms" class="link">AGBs</a> {$t("contact.form.policy4")}
                        </span>
                </div>
            </form>
        </div>
    </div>
</div>