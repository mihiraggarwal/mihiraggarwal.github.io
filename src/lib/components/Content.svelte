<script>
    import Home from '$lib/components/body/Home.svelte'
    import Music from '$lib/components/body/Music.svelte'
    import Tech from '$lib/components/body/Tech.svelte'

    export let title

    const sbar = {
        "home": ["mihir aggarwal", "mihir", "mihiraggarwal", "home", "hello", "me"],
        "tech": ["tech"],
        "music": ["music"],
        "resume": ["resume", "cv", "resumé"],
        "friends": ["friends"],
        "insta": ["ig", "insta", "instagram"],
        "github": ["gh", "github", "code"],
        "linkedin": ["linkedin"],
        "spotify": ["spotify"],
        "telegram": ["tg", "telegram"],
        "mail": ["mail", "gmail", "email"]
    }

    let final
    let flag;

    $: for (const k in sbar) {
        flag = 0
        if (sbar[k].includes(title.toLowerCase())) {
            flag = 1
            final = k
            break
        }
    }; 

    $: if (!flag) final = "random"

    const rdr = (link) => {
        window.open(link, "_blank")
        return "Redirecting..."
    }
</script>

<div class="content-container">
    {#if final === "home"}
        <Home />
    {:else if final === "music"}
        <Music />
    {:else if final === "tech"}
        <Tech />
    {:else if final === "friends"}
        <p>lol</p>
    {:else if final === "resume"}
        <p>{rdr("https://drive.google.com/file/d/1tNOujH84bdQ_IUFzH06oEEnXA8NGb4la/view?usp=sharing")}</p>
    {:else if final === "insta"}
        <p>{rdr("https://instagram.com/mihiraggarwall")}</p>
    {:else if final === "github"}
        <p>{rdr("https://github.com/mihiraggarwal")}</p>
    {:else if final === "linkedin"}
        <p>{rdr("https://www.linkedin.com/in/mihir-aggarwal/")}</p>
    {:else if final === "spotify"}
        <p>{rdr("https://open.spotify.com/user/obnhpzgvka1brmhv7wjyismih?si=a2b97169835443f0")}</p>
    {:else if final === "telegram"}
        <p>{rdr("https://t.me/mihiraggarwal")}</p>
    {:else if final === "mail"}
        <p>{rdr("mailto:mihir.aggarwal1000@gmail.com")}</p>
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