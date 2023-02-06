<script>
    import { createEventDispatcher } from "svelte";

    const portfolio = [...Array(19).keys()].slice(1)

    let dispatch = createEventDispatcher()
    const showMusic = (_) => {
        dispatch("show-music", _)
    }
</script>

<i class="fa fa-arrow-left" on:click={showMusic}></i>
<div class="modal">
    {#each portfolio as n}
        <div class="img-container">
            <img src="img/portfolio-{n}.jpg" alt="drums-img">
        </div>
    {/each}
</div>

<style>
    .modal {
        display: flex;
        padding: 2vw;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .img-container {
        background-color: #f7f7f7;
        border: 5px solid #272727;
        margin-bottom: 2vh;
        display: flex;
        flex-direction: column;
    }
    
    img {
        width: 320px;
    }

    i {
        font-size: 2vw;
    }

    i:hover {
        cursor: pointer;
    }
</style>