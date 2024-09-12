<script>
    export let data;
    import linkedin from '$lib/images/linkedin.png';
    import imagefrom from '$lib/images/image.jpg';
    import githublogo from '$lib/images/github-logo.png';
    import Moreinfo from './MoreInfo.svelte';
    import ActionButton from './button.svelte';
    import SocialMedia from './Socialmedia.svelte';
    import { fade } from 'svelte/transition';

    import { onMount } from 'svelte';

    onMount(() => {
        const buttonMore = document.querySelector('.moreinfo');
        const div = document.querySelector('.nonvisible');

        div.classList.add("nonvisible-open");

        buttonMore.addEventListener('click', () => {
            div.classList.toggle("hidden");
        });
    });

    // let visible = true;
</script>

<main>
    <div class="grid-container">
        <h1>{data.persons.name}  {data.persons.prefix}  {data.persons.surname}</h1>
        <img class="image" src="{data.persons.avatar}" alt="Dit is mijn foto"/>
<!--        about me section moet een apart component worden-->
        <section class="aboutmesection">
            <h2 class="about-me">Over mij</h2>
            <p class=""> Leeftijd: 20</p>
            <p class=" ">{data.persons.bio}  </p>
            <!--      <p class="vooropleiding ">Mijn vooropleiding:<a href="https://www.regiocollege.nl/mbo-opleiding/softwaredeveloper">-->
            <!--        {data.person.custom} </a></p>-->
            <p class=" ">Op dit moment doe ik de opleiding frontend design en development en zit ik in mijn
                afstudeerjaar</p>
        </section>
       <SocialMedia/>
        <ActionButton />
    </div>
    <Moreinfo/>


<!--    <label>-->
<!--        <input type="checkbox" bind:checked={visible} />-->
<!--        visible-->
<!--    </label>-->
<!--    {#if visible}-->
<!--        <p transition:fade> <Moreinfo /></p>-->
<!--    {/if}-->

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

    }
/*    aantekeningen les
feature dtecking
scroll-snap-type
@support

https://github.com/joostf/squadpage-sveltekit/tree/creative-coding-csr
voorbeeld van de les

svelte intelligence visual studio code

  @supports (animation-timeline: scroll()) {
    ul li {
        view-timeline-name: --happy-scroller;
        view-timeline-axis: inline;
        view-timeline-inset: -10% -10%;
        animation-range: 25% 25%;

        animation: linear appear both;
        animation-timeline: --happy-scroller;
    }

    ul li a {
        animation: linear appear both;
        animation-timeline: --happy-scroller;
    }

    @keyframes appear {
        0% {
            rotate:-10deg;
            opacity:.1;
            scale:.5;
        }
        50% {
            opacity:1;
            scale:1;
            rotate:0;
        }
        100% {
            opacity: .1;
            scale:.5;
            rotate: 10deg;
        }
    }
  }

*/

    /*onmount gebruiken sveltekit */

    /*bij csr = false de animatie werkt niet*/

/*    als de csr false is dan word de static map niet gebruikt
 als csr true is dan word svelte.js onderwater naar de server


 */


/*



*/

</style>
