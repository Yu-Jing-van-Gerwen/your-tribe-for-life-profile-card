<!--https://dev.to/webdeasy/top-20-css-buttons-animations-f41-->
<!--https://codepen.io/twhite96/embed/brryVq?height=600&default-tab=result&embed-version=2#result-box-->

<!--de span is noodzakelijk vanege de tekst-->

<script>
    import {onMount} from "svelte";
    let buttonMore;
    let div;
    function showmore() {
        buttonMore = document.querySelector('.moreinfo');
        div = document.querySelector('.nonvisible');
        div.classList.toggle("hidden");
        div.classList.add("nonvisible-open");

        buttonMore.scrollIntoView('.nonvisible-open')
        buttonMore.disabled = true;
    }
</script>
<!--    <a  class="moreinfo" href="#moreinfo"><span>druk voor meer info</span></a>-->
<a href="#info" on:click={showmore} class="moreinfo">
    <span>druk voor meer info</span>
</a>




<style>
    .moreinfo {
        box-shadow: 8px 9px 0px 0px;
        background: #fff;
        font-weight: normal;
        height: 44px;
        width: 13em;
        border-radius: 0.25rem;
        padding: 0.5rem 1.5rem;
        font-size: 1em;
        grid-row: 3;
        grid-column: 1;
        display: grid;
        margin-top: 1em;


    }


    .moreinfo{
        display: block;
        width: 200px;
        line-height: 40px;
        font-size: 18px;
        font-family: sans-serif;
        text-decoration: none;
        color: #333;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
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
        background: linear-gradient(0deg, #00EFEF 40%, #4FDD51 100%);
        transition: all .35s;
    }

    a:hover{
        color: #fff;
    }

    a:hover:after{
        width: 100%;
    }

</style>