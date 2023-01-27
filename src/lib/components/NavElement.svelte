<script>
    export let text;
    export let anchor;
</script>

<div class='sites'>
    <a href={anchor}>
        {text}
    </a>
</div>
<hr />

<style>

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