<script>
    import Title from '$lib/components/Title.svelte';
    import Content from '$lib/components/Content.svelte';
    
    let title = "mihir aggarwal"
</script>

<Title bind:title={title}/>
<Content {title} />