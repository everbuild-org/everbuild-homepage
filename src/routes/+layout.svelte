<script>
    import "../app.pcss";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
    <title>Everbuild.org</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
</svelte:head>

<Navbar/>
<div class="min-h-screen">
    <slot></slot>
</div>

<Footer/>