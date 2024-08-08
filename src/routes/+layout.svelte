<script>
    import { hamburger } from "$lib/components/body/stores.js"
    import NavElement from "$lib/components/NavElement.svelte";

    $: ham = $hamburger
</script>

<svelte:head>
    <title>Mihir Aggarwal</title>
    <meta name="author" content="Mihir Aggarwal">
    <meta name="description" content="Loose attempt at a portfolio website">
</svelte:head>

<div class="main">
    <div class="left-container" class:left-hamburger={ham}>
        <img src="img/pfp.jpg" alt="pfp">
        <div class='sites-nav'>
            <NavElement text="home" anchor="/" />
            <NavElement text="tech" anchor="/tech" />
            <NavElement text="music" anchor="/music" />
            <NavElement text="resumé" anchor="https://drive.google.com/file/d/1tNOujH84bdQ_IUFzH06oEEnXA8NGb4la/view?usp=sharing" target={true} />
        </div>
    </div>

    <div class="right-container" class:right-hamburger={ham}>
        <slot />
    </div>
</div>

<style>

    @font-face {
        src: url(../../../font/AirbnbCerealBold.ttf);
        font-family: "airbnb-bold"
    }

    @font-face {
        src: url(../../../font/AirbnbCerealMedium.ttf);
        font-family: "airbnb-medium"
    }

    .main {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        font-family: "airbnb-bold";
    }

    .left-container {
        background-color: #272727;
        color: #f7f7f7;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-top: 10vh;
        font-size: 2.125rem;
        overflow-y: hidden;
    }
    
    .right-container {
        background-color: #f7f7f7;
        flex: 3;
        padding-left: 2.25vw;
        padding-right: 2.25vw;
        padding-top: 10vh;
        overflow-y: scroll;
    }

    img {
        border-radius: 50%;
        width: 12vw;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10vh
    }

    @media screen and (max-width: 768px) {
        .left-container {
            flex: 0;
        }

        .right-container {
            padding-top: 5vh;
            padding-left: 5vw;
            padding-right: 5vw;
        }

        .left-hamburger {
            flex: 3
        }

        .right-hamburger {
             flex: 0;
             width: 100%;
             display: none;
             visibility: hidden;
        }

        img {
            width: 35vw;
        }
    }

</style>
