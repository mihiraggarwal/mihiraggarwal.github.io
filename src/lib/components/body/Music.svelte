<script>
    import { createEventDispatcher } from "svelte";
    import MusicSocial from "$lib/components/MusicSocial.svelte";

    let dispatch = createEventDispatcher()
    const showModal = (_) => {
        dispatch('show-modal', _)
    }
</script>

<p>Drummer / Audio engineer / Keyboardist</p>
<div class="container">
    <div class="inner">
        <div class="upper">
            <div class="upper-title">Qualifications</div>
            <ul class="upper-list">
                <li>Rockschool Drums Diploma Level 4 - Merit</li>
                <li>Rockschool Drums Grade 8 - Distinction</li>
                <li>Trinity Keyboard Grade 3 - Cleared</li>
                <li>Graduate, Performers Collective School of Music</li>
            </ul>
        </div>
        <div class="lower">
            <div class="lower-title">Notable performances</div>
            <ul class="lower-list">
                <li>Various TEDx Events from 2016 to 2019</li>
                <li>Indian Institute of Management Ahmedabad, 2016</li>
                <li>Indo-Chine Resort, Phuket Thailand, New Year's Eve 2019</li>
            </ul>
        </div>
    </div>
    <div class="outer">
        <MusicSocial url={"https://instagram.com/mihir_drumzz"} main_img={"drums"} main_alt={"drums"} main_title={"@mihir_drumzz"} main_href={"http://instagram.com/mihir_drumzz"} main_i={"fab fa-instagram"} main_id={"insta"}/>
        
        <div class="msocials" on:click={showModal}>
            <div class="msocials-one">
                <div class="msocials-title">Portfolio</div>
            </div>
            <div class="msocials-pics">
                <div class="msocials-two">
                    <img src="img/pfp.jpg" alt="pfp">
                    <img src="img/pfp.jpg" alt="pfp">
                    <img src="img/pfp.jpg" alt="pfp">
                </div>
                <div class="msocials-three">
                    <img src="img/pfp.jpg" alt="pfp">
                    <img src="img/pfp.jpg" alt="pfp">
                    <img src="img/pfp.jpg" alt="pfp">
                </div>
            </div>
        </div>

        <MusicSocial url={"https://www.youtube.com/channel/UCZ4MHhniF3FYdVzS-MsQ89w"} main_img={"drums-2"} main_alt={"drums"} main_title={"Mihir Aggarwal"} main_href={"https://www.youtube.com/channel/UCZ4MHhniF3FYdVzS-MsQ89w"} main_i={"fab fa-youtube"} main_id={"youtube"}/>
    </div>
</div>

<style>
    div, p {
        font-size: 1.5rem;
        font-family: airbnb-medium;
    }
    
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .inner {
        display: flex;
        flex-direction: row;
    }
    
    ul {
        margin-top: 0
    }

    .lower-list, .lower-list li {
        margin-bottom: 0;
    }
    
    .outer {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2vh;
    }

    .msocials {
        height: 12em;
        padding: 1vh;
        width: 13em;
        background-color: #272727;
        border: 1px solid #272727;
    }

    .msocials {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
    }

    .msocials-one, .msocials-two, .msocials-three {
        display: flex;
        width: 100%;
    }

    .msocials-pics {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .msocials-one {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 23%
    }

    .msocials-one div {
        color: #f7f7f7;
    }

    .msocials-two {
        margin-bottom: 1vh;
    }

    .msocials-two, .msocials-three {
        justify-content: space-between;
    }

    .msocials-title {
        font-size: 1.5rem;
        display: block;
        margin: auto;
    }

    img {
        width: 32%;
    }

    .msocials:hover {
        cursor: pointer;
    }
</style>