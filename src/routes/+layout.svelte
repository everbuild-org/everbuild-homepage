<script>
    import "../app.pcss";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Navbar/>
<div class="min-h-screen pt-20">
    <slot></slot>
</div>

<Footer/>