<script>
    import {t} from "$lib/i18n";
    import fruehling from "/src/assets/Frühling.jpg";
    import sommer from "/src/assets/Sommer.jpg";
    import herbst from "/src/assets/Herbst.jpg";
    import winter from "/src/assets/Winter.jpg";
    import asorda from "/src/assets/asorda.png";
    import noted from "/src/assets/noted.png";
    import undraw from "/src/assets/undraw_engineering_team_a7n2.svg";
    import User from "phosphor-svelte/lib/UserFocus";
    import Flag from "phosphor-svelte/lib/Flag";
    import CompassTool from "phosphor-svelte/lib/CompassTool";

    function chooseImage() {
        const date = new Date();
        const month = date.getMonth();
        if (month >= 2 && month <= 4) {
            return fruehling;
        } else if (month >= 5 && month <= 7) {
            return sommer;
        } else if (month >= 8 && month <= 10) {
            return herbst;
        } else {
            return winter;
        }
    }

</script>

<svelte:head>
    <title>{$t("head.title.about")}</title>
    <meta name="description" content="Everbuild | About Us">
</svelte:head>

<div>
    <div class="mt-10 flex justify-center tracking-tight text-sm font-semibold"><p>{$t("about.title")}</p></div>
    <div class="flex justify-center text-4xl font-bold"><h1 class="text-center">{$t("about.title.main")}</h1></div>
    <div class="flex justify-center text-center text-lg font-light px-10 mt-5 max-w-[65ch] mx-auto">
        <p>{$t("about.title.text")}</p>
    </div>
    <div class="flex justify-center mt-16 gap-6 flex-wrap">
        <div class="card w-96 bg-base-300 dark:bg-neutral shadow-xl">
            <figure><img class="h-64 object-cover" src={noted} height="598" width="796" alt="Noted!"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    Noted!
                </h2>
                <p class="leading-relaxed">{$t("about.card1.text")}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-info">Open Source</div>
                    <div class="badge badge-primary">{$t("about.card.badges.services")}</div>
                    <div class="badge badge-success">{$t("about.card.badges.products")}</div>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-base-300 dark:bg-neutral shadow-xl">
            <figure><img class="h-64 object-cover" src={asorda} height="951" width="1900" alt="Asorda"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    Asorda
                </h2>
                <p class="leading-relaxed">{$t("about.card2.text")}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-primary">{$t("about.card.badges.services")}</div>
                    <div class="badge badge-success">{$t("about.card.badges.products")}</div>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-base-300 dark:bg-neutral shadow-xl">
            <figure><img class="h-64 object-cover" src={chooseImage()} height="951" width="1900" alt="Asorda"/></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {$t("about.card3.title")}
                </h2>
                <p class="leading-relaxed">{$t("about.card3.text")}</p>
            </div>
        </div>
    </div>

    <div class="pt-20 flex justify-center tracking-tight text-sm font-semibold"><p>{$t("about.section.subtitle")}</p>
    </div>
    <div class="flex justify-center text-3xl font-bold"><h2 class="text-center">{$t("about.section.title")}</h2></div>
    <div class="flex justify-center text-center text-lg font-light px-10 mt-5 max-w-[65ch] mx-auto">
        <p>{$t("about.section.text")}</p>
    </div>

    <div class="flex max-w-[1200px] mx-auto w-full gap-6 justify-around mt-20 mb-40 flex-wrap">
        <div class="max-w-[30ch] text-center flex flex-col items-center min-w-64">
            <div class="m-4 p-1 bg-primary bg-opacity-75 rounded-lg">
                <Flag class="w-12 h-12"/>
            </div>
            <div>
                <h3 class="text-2xl font-bold tracking-tighter">{$t("about.values.value1.title")}</h3>
                <p>{$t("about.values.value1.text")}</p>
            </div>
        </div>
        <div class="max-w-[30ch] text-center flex flex-col items-center min-w-64">
            <div class="m-4 p-1 bg-error bg-opacity-75 rounded-lg">
                <User class="w-12 h-12"/>
            </div>
            <div>
                <h3 class="text-2xl font-bold tracking-tight">{$t("about.values.value2.title")}</h3>
                <p>{$t("about.values.value2.text")}</p>
            </div>
        </div>
        <div class="max-w-[30ch] text-center flex flex-col items-center min-w-64">
            <div class="m-4 p-1 bg-info bg-opacity-75 rounded-lg">
                <CompassTool class="w-12 h-12"/>
            </div>
            <div>
                <h3 class="text-2xl font-bold tracking-tight">{$t("about.values.value3.title")}</h3>
                <p>{$t("about.values.value3.text")}</p>
            </div>
        </div>
    </div>
    <img src={undraw} alt="Engineering Team" class="w-full h-auto object-cover max-w-[600px] mx-auto mb-10"/>
</div>