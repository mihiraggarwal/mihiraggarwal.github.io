<script>
    import MusicSocial from "$lib/components/MusicSocial.svelte";
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
                <li>The Piano Man Jazz Club Gurgaon, 2023</li>
                <li>Indo-Chine Resort, Phuket Thailand, New Year's Eve 2019</li>
            </ul>
        </div>
    </div>
    <div class="outer">
        <MusicSocial url={"https://instagram.com/mihir_drumzz"} main_img={"drums"} main_alt={"drums"} main_title={"@mihir_drumzz"} main_href={"http://instagram.com/mihir_drumzz"} main_i={"fab fa-instagram"} main_id={"insta"}/>
        <MusicSocial url={"https://drive.google.com/drive/folders/1Vwh1mL6XjV82xHEDyclJoHiAbAGWySIX?usp=sharing"} main_img={"bob-8-1"} main_alt={"drums"} main_title={"Portfolio Shots"} main_id={"shots"}/>
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
        flex-wrap: wrap;
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
        justify-content: flex-start;
        margin-top: 2vh;
        flex-wrap: wrap;
        gap: 2vh
    }
</style>