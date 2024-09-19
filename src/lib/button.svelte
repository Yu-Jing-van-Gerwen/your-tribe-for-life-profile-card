<script>
    let buttonMore;
    let div;
    function showmore() {
        buttonMore = document.querySelector('.moreinfo');
        div = document.querySelector('.nonvisible');
        div.classList.toggle("hidden");
        div.classList.add("nonvisible-open");

        buttonMore.scrollIntoView('.nonvisible-open')
        buttonMore.disabled = true;
        buttonMore.classList.remove("pulse");

    }
</script>
<a href="#info" on:click={showmore} class="moreinfo pulse">
    <span>druk voor meer info</span>
</a>

<style>

    .moreinfo {
        border-radius: 4px;
        padding: 16px;
        display: grid;
        grid-row: 3;
        grid-column: 1;
        margin: 1em 0 0 1em;
        line-height: 40px;
        font-family: sans-serif;
        text-decoration: none;
        color: #333;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
        background: #fff;
        font-weight: normal;

        @media (max-width: 704px) {
            width: 180px;
            font-size: 16px;
            height: 44px;
        }

        @media (min-width: 705px) {
            width: 196px;
            font-size: 18px;
            height: 44px;
        }
    }


    /*https://www.florin-pop.com/blog/2019/03/css-pulse-effect/*/
    .pulse{
        animation: pulse 2s infinite;
        box-shadow: 14px 13px 0 0;
    }
    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        50% {
            transform: scale(1.25);
            box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
        }

        100% {
            transform: scale(1.3);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }


    a span{
        position: relative;
        z-index: 2;
        color: black;
    }

    a:after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: orange;
        transition: all .35s;
    }


    a:hover:after{
        width: 100%;
    }

</style>