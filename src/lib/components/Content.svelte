<script>
    export let content
</script>

<div class="content-container">
    {#each content as para}
        <p>{para}</p>
    {/each}
</div>

<style>
    .content-container {
        margin-top: 7vh;
    }

    p {
        font-size: 6rem;
        font-family: airbnb-medium;
    }
</style>