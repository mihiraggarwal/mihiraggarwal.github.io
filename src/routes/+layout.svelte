<svelte:head>
    <script src="https://kit.fontawesome.com/b755d8149c.js" crossorigin="anonymous"></script>
    <title>Mihir Aggarwal</title>
    <meta name="author" content="Mihir Aggarwal">
    <meta name="description" content="Loose attempt at a portfolio website">
</svelte:head>

<div class="main">
    <div class="left-container">
        <img src="img/pfp.jpg" alt="pfp">
        <div class='other_sites'>
            <div class='sites' id='top'>
                <a href='/'>
                    Home
                </a>
            </div>
            <hr />
            <div class='sites' id='top'>
                <a href='/music'>
                    Music
                </a>
            </div>
            <hr />
            <div class='sites'>
                <a href='/tech'>
                    Tech
                </a>
            </div>
            <hr />
            <div class='sites' id='top'>
                <a href="#">
                    Resumé
                </a>
            </div>
            <hr />
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
        font-size: 8.5rem;
    }
    
    .right-container {
        background-color: #f7f7f7;
        flex: 3
    }

    img {
        border-radius: 50%;
        width: 12vw;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-top: 6vh;
        margin-bottom: 10vh
    }

    a {
        text-decoration: none;
        color: #f7f7f7;
        display: block;
        padding-left: 0.25vw;
        padding-right: 0.25vw;
    }

    .sites {
        margin-left: 2.25vw;
        margin-right: 2.25vw;
        margin-bottom: 0.5vh;
        color: #f7f7f7
    }

    hr {
        margin-left: 2.25vw;
        margin-right: 2.25vw;
        margin-top: 0;
        margin-bottom: 4vh;
        border: none;
        background-color: #f7f7f7;
        height: 0.5px;
        opacity: 0.4;
    }

</style>
