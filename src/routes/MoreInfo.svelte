<div class="nonvisible">

<section class="hidden">
    <h2>meer over mij</h2>
    <p>In de sportschool is mijn doel nu om meer spieren op te bouwen </p>
</section>
</div>

<style>
    .nonvisible{
        display: none;
    }
    .nonvisible-open{
        display: block;
    }
    .hidden{
        border-radius: 1em;
        background: #00ff92;
        background: linear-gradient(0deg, rgba(0, 239, 255, 1) 40%, #4fdd51 100%);
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1); /*ronde hoeken met een schadwu*/
        max-width: 450px;
        padding: 2em;
    }
    .hidden{
        border-radius: 1em;
        background: #00ff92;
        background: linear-gradient(0deg, rgba(0, 239, 255, 1) 40%, #4fdd51 100%);
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1); /*ronde hoeken met een schadwu*/
        max-width: 450px;
        padding: 2em;
        display: grid;
    }

    /*animatie*/

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