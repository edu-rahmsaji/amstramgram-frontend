<script>
    import Navbar from "$lib/Navbar/Navbar.svelte";
    import "../app.css";
</script>

<div class="relative w-full h-full flex flex-col">
    <main class="relative w-full flex-grow flex flex-col">
        <slot />
    </main>
    <Navbar />
</div>