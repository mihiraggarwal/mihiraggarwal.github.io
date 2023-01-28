<script>
    export let title

    let content;
    $: if (["mihir aggarwal", "mihir", "mihiraggarwal", "home", "hello"].includes(title.toLowerCase())) {
        let content_p1 = `
        Hi, I'm Mihir, a freshman at Ashoka University. Although currently undeclared, I plan to pursue majors in Economics and Computer Science - an intersection I'm quite intrigued by.
        `
        let content_p2 = `
        I'm fascinated by tech and love using code to develop solutions for problems around me. I'm equally passionate about the latest in tech, and am constantly scouting for tools to experiment with.
        `
        let content_p3 = `
        I've also learnt drums for 8 years and love exploring odd genres to play to like garage rock and jazz fusion. Parallelly, I've developed a taste in music rich in rhythms; I mostly listen to alt rock with the occasional alt indie and crossover jazz.
        `
        let content_p4 = `
        Other than that, I love playing tennis having learnt it for 10 years, and am a sports buff in general. I also really enjoy travelling.
        `
        let content_p5 = `
        Reach out to me on my socials; I'm always up for a chat! 
        `
        content = [content_p1, content_p2, content_p3, content_p4, content_p5]
    }

    else if (title.toLowerCase() === "tech") {
        content = ["tech"]
    }

    else if (title.toLowerCase() === "music") {
        content = ["music"]
    }

    else {
        content = ["???"]
    }

</script>

<div class="content-container">
    {#each content as para}
        <p>{para}</p>
    {/each}
</div>
    
<div class='extras'>
    <a href="https://instagram.com/mihiraggarwall" target="_blank" rel="noreferrer">
        <i class="fab fa-instagram" id="instagram"></i>
    </a>
    <a href="https://github.com/mihiraggarwal" target="_blank" rel="noreferrer">
        <i class="fab fa-github" id="github"></i>
    </a>
    <a href="https://instagram.com/mihir_drumzz" target="_blank" rel="noreferrer">
        <i class="fas fa-drum" id="drums"></i>
    </a>
    <a href="https://www.linkedin.com/in/mihir-aggarwal/" target="_blank" rel="noreferrer">
        <i class="fab fa-linkedin" id="linkedin"></i>
    </a>
    <a href="https://open.spotify.com/user/obnhpzgvka1brmhv7wjyismih?si=a2b97169835443f0" target="_blank" rel="noreferrer">
        <i class="fab fa-spotify" id="spotify"></i>
    </a>
    <a href="https://t.me/mihiraggarwal" target="_blank" rel="noreferrer">
        <i class="fab fa-telegram" id="telegram"></i>
    </a>
    <a href="mailto:mihir.aggarwal1000@gmail.com" target="_blank">
        <i class="far fa-envelope" id="gmail"></i>
    </a>

</div>

<style>
    .content-container {
        margin-top: 7vh;
    }

    p {
        font-size: 1.5rem;
        font-family: airbnb-medium;
    }

    .extras {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 7vh;
    }

    .extras a {
        margin-right: 2vw;
    }

    .extras i {
        color: #272727;
        font-size: 1.4em;
    }
</style>