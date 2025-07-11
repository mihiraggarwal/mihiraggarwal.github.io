<script>
    import Language from "$lib/components/Language.svelte";
    import { current } from "$lib/components/body/stores"
    
    let languages = ["Python", "Express.js", "Next.js", "Android", "Flutter", "Svelte", "Vanilla.js",  "Flask"]

    let repos = {"mihiraggarwal/game-practical": ["Svelte", "Python"], "mihiraggarwal/greenlight": ["Python", "Next.js"], "mihiraggarwal/smokescreen": ["Next.js"], "mihiraggarwal/decision-experiment": ["Next.js", "Flask"], "mihiraggarwal/select-gpt": ["Vanilla.js"], "mihiraggarwal/memora": ["Flutter"], "mihiraggarwal/dialect": ["Express.js"], "mihiraggarwal/realtio-npm": ["Vanilla.js"], "mihiraggarwal/nullity": ["Python"], "mihiraggarwal/rollertoaster": ["Express.js"], "mihiraggarwal/spotify-permix": ["Python"], "mihiraggarwal/assist-co": ["Android"], "techsyndicate/encryptid-21": ["Express.js"], "mihiraggarwal/decipher-backend": ["Express.js"], "rchtgpt/ctrl_freaks": ["Flutter"], "mihiraggarwal/toi-notif": ["Python"], "mihiraggarwal/klear-app": ["Android"], "mihiraggarwal/quiz-platform": ["Express.js"], "techsyndicate/exun-21": ["Express.js"], "mihiraggarwal/carboscan": ["Flask"], "mihiraggarwal/riviore": ["Android"], "Autumn-of-Code-Ashoka/roommate_matching": ["Next.js"], "mihiraggarwal/tablot": ["Python"], "mihiraggarwal/mihiraggarwal.github.io": ["Svelte"], "mihiraggarwal/mockinv": ["Python"]}

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
                <img src="https://socialify.git.ci/{repo}/image?description=1&language=1&name=1&owner=1&pattern=Solid&theme=Dark" alt={repo} />
            </a>
        {/each}
    {:else}
        {#each Object.entries(repos) as [repo, language]}
            {#if language.includes(clang)}
                <a href="https://github.com/{repo}" target="_blank" rel="noreferrer">
                    <img src="https://socialify.git.ci/{repo}/image?description=1&language=1&name=1&owner=1&pattern=Solid&theme=Dark" alt={repo} />
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