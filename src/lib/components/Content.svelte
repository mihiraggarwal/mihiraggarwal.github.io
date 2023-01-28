<script>
    export let title

    let content;
    $: if (["mihir aggarwal", "mihir", "mihiraggarwal", "home", "hello"].includes(title.toLowerCase())) {
        let content_p1 = `
        Hi, I'm Mihir. I'm currently a freshman at Ashoka University. Although undeclared, I plan to pursue majors in Economics and Computer Science - an intersection I'm quite intrigued by.
        `
        let content_p2 = `
        I'm fascinated by tech and love using code to develop solutions for problems around me. I'm equally passionate about the latest in tech, and am constantly scouting tools to experiment with.
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

<style>
    .content-container {
        margin-top: 7vh;
    }

    p {
        font-size: 1.5rem;
        font-family: airbnb-medium;
    }
</style>