<script>
    let repos = ["mihiraggarwal/select-gpt", "mihiraggarwal/realtio-npm", "mihiraggarwal/rollertoaster", "mihiraggarwal/spotify-permix", "mihiraggarwal/assist-co", "techsyndicate/encryptid-21", "mihiraggarwal/toi-notif", "mihiraggarwal/klear-app", "mihiraggarwal/quiz-platform", "techsyndicate/exun-21", "mihiraggarwal/riviore", "mihiraggarwal/tablot", "mihiraggarwal/mihiraggarwal.github.io", "mihiraggarwal/mockinv"]
</script>

<div class="repos">
    {#each repos as repo}
        <a href="https://github.com/{repo}" target="_blank" rel="noreferrer">
            <img src="https://socialify.git.ci/{repo}/image?description=1&language=1&name=1&owner=1&pattern=Solid&stargazers=1&theme=Dark" alt={repo} />
        </a>
    {/each}
</div>

<style>
    .repos {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    img {
        max-width: 530px;
        margin-bottom: 2vh;
        border-radius: 5px;
        opacity: 0.85;
    }
</style>