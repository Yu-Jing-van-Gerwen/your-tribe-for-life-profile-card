<!--https://dev.to/webdeasy/top-20-css-buttons-animations-f41-->
<!--https://codepen.io/twhite96/embed/brryVq?height=600&default-tab=result&embed-version=2#result-box-->

<!--de span is noodzakelijk vanege de tekst-->

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
<!--    <a  class="moreinfo" href="#moreinfo"><span>druk voor meer info</span></a>-->
<a href="#info" on:click={showmore} class="moreinfo pulse">
    <span>druk voor meer info</span>
</a>




<style>

    /*@media (max-width: 704px) {*/
    /*    .moreinfo {*/
    /*        margin: 0em 0 0 0em;*/
    /*        border-radius: 4px;*/
    /*        padding: 16px;*/

    /*        width: 150px;*/
    /*        font-size: 16px;*/
    /*        height: 44px;*/


    /*        grid-row: 3;*/
    /*        grid-column: 1;*/
    /*        display: grid;*/
    /*        margin-top: 1em;*/
    /*        line-height: 40px;*/

    /*        font-family: sans-serif;*/
    /*        text-decoration: none;*/
    /*        color: #333;*/
    /*        letter-spacing: 2px;*/
    /*        text-align: center;*/
    /*        position: relative;*/
    /*        transition: all .35s;*/

    /*    }*/
    /*}*/
    /*@media (min-width: 705px) {*/
    /*    .moreinfo {*/
    /*        margin: 0em 0 0 0em;*/
    /*        border-radius: 4px;*/
    /*        padding: 16px;*/

    /*        width: 196px;*/
    /*        font-size: 18px;*/
    /*        height: 44px;*/


    /*        grid-row: 3;*/
    /*        grid-column: 1;*/
    /*        display: grid;*/
    /*        margin-top: 1em;*/
    /*        line-height: 40px;*/

    /*        font-family: sans-serif;*/
    /*        text-decoration: none;*/
    /*        color: #333;*/
    /*        letter-spacing: 2px;*/
    /*        text-align: center;*/
    /*        position: relative;*/
    /*        transition: all .35s;*/
    /*    }*/
    /*}*/
    /*.moreinfo {*/
    /*    margin: 0em 0 0 0em;*/
    /*    border-radius: 4px;*/
    /*    padding: 16px;*/

    /*    width: 196px;*/
    /*    font-size: 18px;*/
    /*    height: 44px;*/


    /*    grid-row: 3;*/
    /*    grid-column: 1;*/
    /*    display: grid;*/
    /*    margin-top: 1em;*/
    /*    line-height: 40px;*/

    /*    font-family: sans-serif;*/
    /*    text-decoration: none;*/
    /*    color: #333;*/
    /*    letter-spacing: 2px;*/
    /*    text-align: center;*/
    /*    position: relative;*/
    /*    transition: all .35s;*/
    /*    background: #fff;*/
    /*    font-weight: normal;*/


    /*}*/

    .moreinfo {
       margin: 0 0 0 1em;
        border-radius: 4px;
        padding: 16px;
        display: grid;
        grid-row: 3;
        grid-column: 1;
        margin-top: 1em;
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
        /*background: linear-gradient(0deg, #baff73 40%, #4f91dd 100%);*/
        background-color: orange;
        transition: all .35s;
    }


    a:hover:after{
        width: 100%;
    }

</style>