<script>
    import linkedin from "$lib/images/linkedin.png";

    export let data;
    import Moreinfo from '$lib/MoreInfo.svelte';
    import ActionButton from '$lib/button.svelte';
    import SocialMedia from '$lib/Socialmedia.svelte';
    import { fade } from 'svelte/transition';

    import { onMount } from 'svelte';

    onMount(() => {
        const buttonMore = document.querySelector('.moreinfo');
        const div = document.querySelector('.nonvisible');

        div.classList.add("nonvisible-open");

        buttonMore.addEventListener('click', () => {
            div.classList.toggle("hidden");
            buttonMore.scrollIntoView('.nonvisible-open')
            buttonMore.disabled='true';
        });
    });



</script>

<main>
    <div class="grid-container">
        <h1>{data.persons.name}  {data.persons.prefix}  {data.persons.surname}</h1>
<!--        <img class="image" src="{data.persons.avatar}" alt="Dit is mijn foto"/>-->
        <picture>
            <source
                    srcset="{data.persons.avatar}?format=avif"
                    type="image/avif"
            />
            <source
                    srcset="{data.persons.avatar}?format=webp"
                    type="image/webp"

            />
            <img class="image" src={data.persons.avatar} alt="foto van mij"/>
        </picture>
<!--        about me section moet een apart component worden-->
        <section class="aboutmesection">
            <h2 class="about-me">Over mij</h2>
            <p class=""> Leeftijd: 20</p>
            <p class=" ">{data.persons.bio}  </p>
            <p class=" ">Op dit moment doe ik de opleiding frontend design en development en zit ik in mijn
                afstudeerjaar</p>
        </section>
       <SocialMedia/>
        <ActionButton />
    </div>
    <Moreinfo/>
</main>


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
        /*background: linear-gradient(0deg, rgba(0, 239, 255, 1) 40%, #4fdd51 100%);*/
        background: linear-gradient(0deg, #00EFEF 40%, #4FDD51 100%);
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1); /*ronde hoeken met een schadwu*/
        max-width: 450px;
        padding: 2em;

    }

    @media (max-width: 400px) {
        .grid-container {
            min-width: 180px;
        }
        .image {
            min-width:170px;
            max-width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }


    @media (max-width: 705px) {
        .grid-container {
            /*max-width: 450px;*/
            background-color: #ffffff;
            flex-direction: column;
            display: flex;
            padding-left: 2em;
            padding-right: 2em;
            padding-bottom: 2em;
        }
        .image{
            min-width:200px;
            max-width: 250px;
        }


    }


    h1 {
        color: #000000;
        font-size: 2em;
    }

    h2 {
        font-size: 1.5em;
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
</style>
