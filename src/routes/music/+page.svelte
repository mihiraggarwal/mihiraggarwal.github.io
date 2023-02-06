<script>
    import Title from '$lib/components/Title.svelte';
    import Content from '$lib/components/Content.svelte';
    import Modal from '$lib/components/Modal.svelte';
    
    let title = "music"

    let modal = false
    $: modal

    const showModal = (_) => {
        modal = true
    }

    const showMusic = (_) => {
        modal = false
    }
</script>

{#if !modal}
    <Title bind:title={title}/>
    <Content {title} on:show-modal={showModal} />
{:else}
    <Modal on:show-music={showMusic}/>
{/if}
