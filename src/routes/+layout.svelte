<script>
    import NavElement from "$lib/components/NavElement.svelte";
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/b755d8149c.js" crossorigin="anonymous"></script>
    <title>Mihir Aggarwal</title>
    <meta name="author" content="Mihir Aggarwal">
    <meta name="description" content="Loose attempt at a portfolio website">
</svelte:head>

<div class="main">
    <div class="left-container">
        <img src="img/pfp.jpg" alt="pfp">
        <div class='sites-nav'>
            <NavElement text="home" anchor="/" />
            <NavElement text="tech" anchor="/tech" />
            <NavElement text="music" anchor="/music" />
            <NavElement text="resumé" anchor="#" />
        </div>
    </div>

    <div class="right-container">
        <slot />
    </div>
</div>

<style>

    @font-face {
        src: url(font/AirbnbCerealBold.ttf);
        font-family: "airbnb"
    }

    .main {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        font-family: "airbnb";
    }

    .left-container {
        background-color: #272727;
        color: #f7f7f7;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-top: 6vh;
        font-size: 8.5rem;
    }
    
    .right-container {
        background-color: #f7f7f7;
        flex: 3;
        padding-left: 2.25vw;
        padding-right: 2.25vw;
        padding-top: 6vh;
    }

    img {
        border-radius: 50%;
        width: 12vw;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10vh
    }

</style>
