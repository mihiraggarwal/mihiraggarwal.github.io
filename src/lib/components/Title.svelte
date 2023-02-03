<script>
    import { hamburger } from "$lib/components/body/stores"
    export let title;
    
    const showHam = (_) => {
        hamburger.update(c => !c)
    }
</script>

<div class="title-container">
    <div contenteditable="true" class="title" bind:innerHTML={title}>{title}</div>
    <i class="fa fa-bars" on:click={showHam}></i>
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

    i {
        visibility: hidden;
        width: 0
    }

    @media screen and (max-width: 768px) {
        i {
            width: auto;
            visibility: visible;
        }

        .title-container {
            padding-left: 2vw;
            padding-right: 5vw;
        }
    }
</style>