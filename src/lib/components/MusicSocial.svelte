<script>
    export let url;
    export let main_img;
    export let main_alt;
    export let main_title;
    export let main_href;
    export let main_i;
    export let main_id;
</script>

<a href={url} target="_blank" rel="noreferrer">
    <div class="msocials">
        <div class="msocials-one">
            <img class="drums-img" src="img/{main_img}.jpg" alt={main_alt}>
            <div class="msocials-one-inside">
                <div class="msocials-title">{main_title}</div>
                <a href={main_href} target="_blank" rel="noreferrer">
                    <i class={main_i} id={main_id}></i>
                </a>
            </div>
        </div>
    </div>
</a>

<style>
    .msocials {
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
        padding-left: 1.5vh;
        padding-right: 3vh;
        border-radius: 5px;
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

    .msocials-one {
        display: flex;
        width: 100%;
    }
    
    .drums-img {
        border-radius: 50%;
        width: 15%
    }

    .msocials-one {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .msocials-one-inside {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    i {
        color: #f7f7f7
    }

    a {
        text-decoration: none;
        color: #f7f7f7;
    }

    .msocials-one div {
        color: #f7f7f7;
    }

    .msocials-title {
        font-size: 1rem;
        margin-left: 1vw;
    }
</style>