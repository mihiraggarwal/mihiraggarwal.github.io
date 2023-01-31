<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher()
    const showMusic = (_) => {
        dispatch("show-music", _)
    }
</script>

<i class="fa fa-arrow-left" on:click={showMusic}></i>
<div class="modal">
    <img src="img/pfp.jpg" alt="img">
    <img src="img/pfp.jpg" alt="img">
    <img src="img/pfp.jpg" alt="img">
    <img src="img/pfp.jpg" alt="img">
    <img src="img/pfp.jpg" alt="img">
    <img src="img/pfp.jpg" alt="img">
</div>

<style>
    .modal {
        display: flex;
        padding: 2vw;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }

    img {
        width: 32%;
        margin-bottom: 2vh;
    }

    i {
        font-size: 2vw;
    }

    i:hover {
        cursor: pointer;
    }
</style>