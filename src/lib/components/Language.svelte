<script>
    import { current } from '$lib/components/body/stores'
    export let language;
    
    $: cr = $current
    let click = false

    $: if (cr !== language) {
        click = false
    }

    const filterLang = (_) => {
        click = !click
        if (!cr || cr !== language) {
            current.update((c) => language)
        } else {
            current.update((c) => false)
        }
    }
</script>

<div class="language" class:click={click}>
    <div on:click={filterLang}>{language}</div>
</div>

<style>
    .language {
        border-radius: 3px;
        border: 1px solid #272727;
        width: auto;
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-left: 1vw;
        padding-right: 1vw;
    }

    .language div {
        color: #272727;
        font-size: 1rem;
    }

    .language:hover {
        cursor: pointer;
    }

    .click {
        background-color: #272727;
    }

    .click div {
        color: #f7f7f7
    }
</style>