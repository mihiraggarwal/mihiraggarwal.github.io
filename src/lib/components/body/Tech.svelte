<script>
    import Language from "$lib/components/Language.svelte";
    import { current } from "$lib/components/body/stores"
    
    let languages = ["Node.js", "Python", "Android", "Vanilla.js", "Svelte", "Flask"]

    let repos = {"mihiraggarwal/select-gpt": "Vanilla.js", "mihiraggarwal/realtio-npm": "Vanilla.js", "mihiraggarwal/rollertoaster": "Node.js", "mihiraggarwal/spotify-permix": "Python", "mihiraggarwal/assist-co": "Android", "techsyndicate/encryptid-21": "Node.js", "mihiraggarwal/toi-notif": "Python", "mihiraggarwal/klear-app": "Android", "mihiraggarwal/quiz-platform": "Node.js", "mihiraggarwal/decipher-backend": "Node.js", "techsyndicate/exun-21": "Node.js", "mihiraggarwal/carboscan": "Flask", "mihiraggarwal/riviore": "Android", "mihiraggarwal/tablot": "Python", "mihiraggarwal/mihiraggarwal.github.io": "Svelte", "mihiraggarwal/mockinv": "Python"}

    $: clang = $current
</script>

<div class="language-container">
    {#each languages as language}
        <Language {language} />
    {/each}
</div>

<div class="repos">
    {#if !clang}
        {#each Object.entries(repos) as [repo, language]}
            <a href="https://github.com/{repo}" target="_blank" rel="noreferrer">
                <img src="https://socialify.git.ci/{repo}/image?description=1&language=1&name=1&owner=1&pattern=Solid&stargazers=1&theme=Dark" alt={repo} />
            </a>
        {/each}
    {:else}
        {#each Object.entries(repos) as [repo, language]}
            {#if language === clang}
                <a href="https://github.com/{repo}" target="_blank" rel="noreferrer">
                    <img src="https://socialify.git.ci/{repo}/image?description=1&language=1&name=1&owner=1&pattern=Solid&stargazers=1&theme=Dark" alt={repo} />
                </a>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .language-container {
        display: flex;
        margin-bottom: 2vh;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1vw;
    }

    .repos {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    a {
        max-width: 49%;
    }

    img {
        max-width: 100%;
        margin-bottom: 2vh;
        border-radius: 5px;
        opacity: 0.85;
    }

    @media screen and (max-width: 768px) {
        a {
            max-width: 100%;
        }
    }
</style>