<script>
    import NavbarLinks from "$lib/NavbarLinks.svelte";
    import { AlignJustify } from 'lucide-svelte';
</script>

<div class="navbar fixed backdrop-blur-2xl z-10">
    <div class="navbar-start">
        <a class="btn btn-ghost text-xl uppercase font-bold tracking-tighter" href="/">Everbuild</a>
    </div>
    <div class="navbar-end">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost 2xl:hidden">
                <AlignJustify class="w-6 h-6" />
            </div>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavbarLinks />
            </ul>
        </div>
        <div class="hidden 2xl:flex">
            <ul class="menu menu-horizontal px-1">
                <NavbarLinks />
            </ul>
        </div>
    </div>
</div>