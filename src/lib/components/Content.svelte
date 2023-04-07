<script>
    import Home from '$lib/components/body/Home.svelte'
    import Music from '$lib/components/body/Music.svelte'
    import Tech from '$lib/components/body/Tech.svelte'

    export let title

    let final
    $: if (["mihir aggarwal", "mihir", "mihiraggarwal", "home", "hello"].includes(title.toLowerCase())) {
        final = "home"
    }
    else if (title.toLowerCase() === "tech") {
        final = "tech"
    }
    else if (title.toLowerCase() === "music") {
        final = "music"
    }
    else {
        final = "random"
    }
</script>

<div class="content-container">
    {#if final === "home"}
        <Home />
    {:else if final === "music"}
        <Music />
    {:else if final === "tech"}
        <Tech />
    {:else}
        <p>???</p>
    {/if}
</div>
    
<div class='extras'>
    <a href="https://instagram.com/mihiraggarwall" target="_blank" rel="noreferrer">
        <i class="fab fa-instagram" id="instagram"></i>
    </a>
    <a href="https://github.com/mihiraggarwal" target="_blank" rel="noreferrer">
        <i class="fab fa-github" id="github"></i>
    </a>
    <a href="https://instagram.com/mihir_drumzz" target="_blank" rel="noreferrer">
        <i class="fas fa-drum" id="drums"></i>
    </a>
    <a href="https://www.linkedin.com/in/mihir-aggarwal/" target="_blank" rel="noreferrer">
        <i class="fab fa-linkedin" id="linkedin"></i>
    </a>
    <a href="https://open.spotify.com/user/obnhpzgvka1brmhv7wjyismih?si=a2b97169835443f0" target="_blank" rel="noreferrer">
        <i class="fab fa-spotify" id="spotify"></i>
    </a>
    <a href="https://t.me/mihiraggarwal" target="_blank" rel="noreferrer">
        <i class="fab fa-telegram" id="telegram"></i>
    </a>
    <a href="mailto:mihir.aggarwal1000@gmail.com" target="_blank">
        <i class="far fa-envelope" id="gmail"></i>
    </a>

</div>

<style>
    .content-container {
        margin-top: 5vh;
    }

    p {
        font-size: 1.5rem;
        font-family: airbnb-medium;
    }

    .extras {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 7vh;
        margin-bottom: 5vh;
    }

    .extras a {
        margin-right: 2vw;
    }

    .extras i {
        color: #272727;
        font-size: 1.4em;
    }
</style>