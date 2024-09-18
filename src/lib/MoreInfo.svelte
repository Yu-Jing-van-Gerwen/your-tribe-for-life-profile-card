<div class="nonvisible">

<section class="hidden" id="moreinfo">
    <h2>meer over mij</h2>
    <p>In de sportschool is mijn doel nu om meer spieren op te bouwen </p>
</section>
</div>

<style>
    .nonvisible{
        display: none;
    }
    /*dit word met javascript gebruikt dus noodzakelijk*/
    .nonvisible-open{
        /*display: grid;*/
        /*grid-column: 1;*/
        /*grid-row: 5;*/
        display: block;
        background-color: #ffffff;
    }

    .hidden{
        border-radius: 1em;
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1); /*ronde hoeken met een schadwu*/
        /*max-width: 450px;*/
        padding: 2em;
        display: grid;
        z-index: 10;
        background-color: yellow;
        grid-row: 6;
    }

    /*animatie*/
    /*https://codepen.io/hubspot/embed/ExWxByR?height=384.6151123046875&theme-id=39533&default-tab=css%2Cresult&slug-hash=ExWxByR&editable=true&user=hubspot&name=cp_embed_2#result-box*/

    .hidden {
        animation: fadeIn 2s;
        -webkit-animation: fadeIn 2s;
        -moz-animation: fadeIn 2s;
        -o-animation: fadeIn 2s;
        -ms-animation: fadeIn 2s;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-moz-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-webkit-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-o-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-ms-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }


</style>