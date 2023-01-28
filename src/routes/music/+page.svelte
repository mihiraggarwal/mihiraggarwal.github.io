<script>
    import Title from '$lib/components/Title.svelte';
    import Content from '$lib/components/Content.svelte';
    
    let title = "music"
</script>

<Title {title}/>
<Content {title} />