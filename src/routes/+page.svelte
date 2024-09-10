<script>
    export let data;
    import linkedin from '$lib/images/linkedin.png';
    import imagefrom from '$lib/images/image.jpg';
    import githublogo from '$lib/images/github-logo.png';
    import button from "./button.svelte";
    import text from './text.svelte';

</script>

<main>
    <div class="grid-container">
        <h1>{data.persons.name}  {data.persons.prefix}  {data.persons.surname}</h1>
        <img class="image" src="{imagefrom}" alt="Dit is mijn foto"/>
<!--        about me section moet een apart component worden-->
        <section class="aboutmesection">
            <h2 class="about-me">Over mij</h2>
            <p class=""> Leeftijd: 20</p>
            <p class=" ">{data.persons.bio}  </p>
            <!--      <p class="vooropleiding ">Mijn vooropleiding:<a href="https://www.regiocollege.nl/mbo-opleiding/softwaredeveloper">-->
            <!--        {data.person.custom} </a></p>-->
            <p class=" ">Op dit moment doe ik de opleiding frontend design en developemnt en zit ik in mijn
                afstudeerjaar</p>
        </section>

<!--        dit deel scoial media moet een apart component worden-->
        <section class="socialmedia"><!--social-media-->
            <h2>Social media</h2>
            <ul class="icons-grid">
                <li>
                    <a href="https://github.com/yujing-student">
                        <!--						<img src="/images/github-logo.png" width="40px">-->
                        <img src={githublogo} alt="GitHub" width="40px"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/yu-jing-van-gerwen-a959431b7/">
                        <img src={linkedin} alt="GitHub" width="40px"/>
                    </a>
                </li>
            </ul>
        </section>

        <button>druk voor meer info
        </button>

    </div>
<!--    todo dit moet een apart componenet worden-->
    <section class="hidden">
        <h2>meer over mij</h2>
        <p>In de sportschool is mijn doel nu om meer spieren op te bouwen </p>
    </section>



</main>

<!--
todo dit toevoegen
dit toevoegen voor anamitatie
https://www.w3schools.com/css/css3_animations.asp

dit is voor het draaien
https://www.w3schools.com/css/css3_3dtransforms.asp zo'n animaite-->


<style>


    main {
        display: grid;
        justify-content: center;
        align-items: center;
        font-family: open sans, Arial, serif;
        line-height: 1.5;
        font-size: 18px;
    }

    .grid-container {
        border-radius: 1em;
        background: #00ff92;
        background: linear-gradient(0deg, rgba(0, 239, 255, 1) 40%, #4fdd51 100%);
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1); /*ronde hoeken met een schadwu*/
        max-width: 450px;

    }

    @media (max-width: 705px) {
        .grid-container {
            max-width: 450px;
            background-color: #ffffff;
            flex-direction: column;
            display: flex;
            padding-left: 2em;
            padding-right: 2em;
            padding-bottom: 2em;
        }

        .image {
            width: 284px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

    }


    h1 {
        color: #000000;
        font-size: 2em;
    }

    h2 {
        font-size: 1.5em;
    }


    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }

    li {
        list-style: none;
    }

    ul {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 4em 1fr;
        padding: 1em 1em 0 0;
        gap: 1em;

        margin-top: -1em;

    }

    button {
        box-shadow: 4px 3px 0px 0px;
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

    button:hover {
        background-color: red;

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
        animation: fadeIn 5s;
        -webkit-animation: fadeIn 5s;
        -moz-animation: fadeIn 5s;
        -o-animation: fadeIn 5s;
        -ms-animation: fadeIn 5s;
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


    /*ipad en desktop*/
    @media (min-width: 705px) {
        .grid-container {
            display: grid;
            grid-template-rows: auto auto auto auto;
            grid-template-columns: auto auto auto;
            max-width: 600px;
            row-gap: 0;
            column-gap: 2em;
            padding: 2em;

        }


        h1 {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
        }


        .image {
            grid-row-start: 2;
            grid-column-start: 1;
            width: 250px;
            display: grid;
            object-fit: cover;
            margin-top: 1.6em;

        }

        .socialmedia {
            grid-row: 3;
            grid-column: 2;
        }
        .hidden{
            grid-row: 5;
            grid-column-start: 1;
            grid-column-end: 3;
        }

        button {
            grid-row: 3;
            grid-column: 1;
            display: grid;
            margin-top: 1em;
        }


    }


</style>
