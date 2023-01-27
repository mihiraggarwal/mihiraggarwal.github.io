<script>
    import Title from '$lib/components/Title.svelte';
    import Content from '$lib/components/Content.svelte';
    
    let title = "mihir aggarwal"

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
    let content = [content_p1, content_p2, content_p3, content_p4, content_p5]

</script>

<Title bind:title={title}/>
<Content {content} />