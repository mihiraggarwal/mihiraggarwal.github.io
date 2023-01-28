<script>
    export let title;
</script>

<div class="title-container">
    <div contenteditable="true" class="title" bind:innerHTML={title}>{title}</div>
</div>

<style>
    .title-container {
        box-shadow: 0 3px 1vw rgba(0, 0, 0, 0.1);
        border: none;
        border-radius: 7.5px;
        height: 10vh;
        font-size: 2.25rem;
        padding-left: 1.25vw;
        padding-right: 1.25vw;
        display: flex;
        align-items: center;
    }

    .title {
        width: 100%;
    }
</style>