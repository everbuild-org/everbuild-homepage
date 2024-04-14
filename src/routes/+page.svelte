<script>
    import {t} from "$lib/i18n";
    import Wave from "../assets/wave-haikei.svg";
    import Wave2 from "../assets/wave2-haikei.svg";
    import Undraw from "../assets/undraw_dev_productivity_re_fylf.svg";
    import Undraw2 from "../assets/undraw_make_it_rain_re_w9pc.svg";
    import Coding from "../assets/fatos-bytyqi-Agx5_TLsIf4-unsplash.jpg";
    import Data from "../assets/jordan-harrison-40XgDxBfYXM-unsplash.jpg";
    import Center from "../assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg";
    import RightFrom from "phosphor-svelte/lib/ArrowRight";
</script>

<svelte:head>
    <title>{$t("head.title.main")}</title>
    <meta name="description" content="Everbuild | Homepage">
</svelte:head>

<div class="h-[calc(100vh-100px)] relative">
    <img src="{Wave}" class="absolute bottom-0 w-full dark:invert-0 invert" alt="wave"/>
    <div class="absolute inset-0 flex max-w-[100vw]">
        <div class="flex-1">
            <div class="flex flex-col justify-center items-center h-full max-w-[100vw]">
                <h1 class="text-5xl text-gray-900 dark:text-white font-bold text-center tracking-tight max-w-[100vw] block break-words"><span class="block max-w-[30ch]">{$t("home.title")}</span></h1>
                <p class="text-gray-900 dark:text-white text-center max-w-[65ch] my-4">{$t("home.subtitle")}</p>
                <div class="flex gap-4">
                    <a href="/about" class="btn btn-primary mt-4">{$t("home.cta")}</a>
                    <a href="/contact" class="btn btn-outline btn-neutral mt-4">{$t("home.cta2")}
                        <RightFrom class="w-4 h-4"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex-1 hidden md:flex justify-center">
            <img src="{Undraw}" class="w-1/2" alt="undraw"/>
        </div>
    </div>
</div>
<div class="bg-[#e6e1db] dark:bg-base-200">
    <div class="container mx-auto py-16">
        <div class="text-center tracking-tight font-semibold">{$t("home.abt2.subheader")}</div>
        <h2 class="text-3xl font-bold text-center">{$t("home.abt2.title")}</h2>
        <p class="text-center max-w-[65ch] mx-auto mt-4">{$t("home.abt2.subtitle")}</p>
    </div>
</div>
<div class="relative pointer-events-none">
    <img src="{Wave2}" class="absolute top-0 w-full dark:invert-0 invert" alt="wave"/>
    <div class="pointer-events-auto">
        <div class="flex flex-wrap justify-center gap-4 pt-8">
            <div class="card w-96 bg-base-300 dark:bg-neutral shadow-xl">
                <figure><img src={Coding} alt="Shoes" class="h-48 object-cover w-full"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{$t("home.abt3.card1.title")}</h2>
                    <p>{$t("home.abt3.card1.text")}</p>
                    <div class="card-actions justify-end">
                        <a href="/contact" class="btn btn-primary">{$t("home.abt3.card1.cta")}</a>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-300 dark:bg-neutral shadow-xl">
                <figure><img src={Data} alt="Shoes" class="h-48 object-cover w-full"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{$t("home.abt3.card2.title")}</h2>
                    <p>{$t("home.abt3.card2.text")}</p>
                    <div class="card-actions justify-end">
                        <a href="/contact" class="btn btn-primary">{$t("home.abt3.card1.cta")}</a>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-300 dark:bg-neutral shadow-xl">
                <figure><img src={Center} alt="Shoes" class="h-48 object-cover w-full"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{$t("home.abt3.card3.title")}</h2>
                    <p>{$t("home.abt3.card3.text")}</p>
                    <div class="card-actions justify-end">
                        <a href="/about" class="btn btn-primary">{$t("home.abt3.card1.cta")}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-32 pointer-events-none">
        <img src={Undraw2} class="w-[300px] mb-[-6.95rem] mx-auto pointer-events-none" alt="Man"/>
    </div>
</div>
