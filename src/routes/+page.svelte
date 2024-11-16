<script>

    export let data;
    import Moreinfo from '$lib/MoreInfo.svelte';
    import ActionButton from '$lib/button.svelte';
    import SocialMedia from '$lib/Socialmedia.svelte';



</script>

<main>


        <div>
            <h1>{data.persons.name}  {data.persons.prefix}  {data.persons.surname}</h1>
            <picture>
                <source
                        srcset="{data.persons.avatar}?format=webp"
                        type="image/webp"

                />
                <source
                        srcset="{data.persons.avatar}?format=avif"
                        type="image/avif"
                />

                <img  src={data.persons.avatar} alt="foto van mij"/>
            </picture>
            <section class="animationfade">
                <h2>Over mij</h2>
                <p> Leeftijd: 20</p>
                <p>{data.persons.bio}  </p>
                <p>Op dit moment doe ik de opleiding frontend design en development en zit ik in mijn
                    afstudeerjaar</p>
            </section>
            <SocialMedia/>
            <ActionButton/>
            <Moreinfo/>
        </div>

</main>


<style>
    main {
        font-family: open sans, Arial, serif;
        line-height: 1.5;
        font-size: 16px;
        scroll-behavior: smooth;
    }

    div:nth-child(1)  {
        border-radius: 1em;
        background: #c0dfd1 ;
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1);
        padding: 2em;
        position: absolute;

        grid-row: 1;

    }
    h1 {
        color: #000000;
        font-size: 2em;
    }

    h2 {
        font-size: 1.5em;
    }


    section {
        background: #fff;
        font-weight: normal;
        border-radius: 0.25rem;
        padding: 0.5rem 1.5rem;
        display: grid;
        margin-top: 1.5em;
    }


    @media (max-width: 400px) {


        div:nth-child(1) {
            animation: slideInLeftMobile 5s forwards;
            /*min-width: 200px;*/
            width: 300px;
        }
        @keyframes slideInLeftMobile {
            0% {
                top: -100%;
            }
            100% {
                top: 0;
                left: 5%;
            }
        }


        img {
            min-width: 200px;
            max-width: 260px;
            object-fit: cover;
        }



    }


    @media (min-width: 400px) {


        div:nth-child(1) {
            animation: slideInLeftMobile 5s forwards;
            min-width: 300px;
            max-width: 400px;
        }
        @keyframes slideInLeftMobile {
            0% {
                top: -100%;
            }
            100% {
                top: 0;
                left: 5%;
            }
        }


        img {
            min-width: 200px;
            max-width: 260px;
            object-fit: cover;
        }
        section{
            width: 260px;
        }



    }



    /*ipad en desktop*/
    @media (min-width: 705px) {
        div:nth-child(1)  {
            display: grid;
            grid-template-rows: 4em auto auto auto;
            grid-template-columns: auto auto auto;
            max-width: 600px;
            row-gap: 1em;
            column-gap: 3em;
            padding: 2em;
            min-width: 450px;

            animation: slideInDesktop 5s forwards;

        }
        section{
            width: 13em;
        }



        @keyframes slideInDesktop {
            0% {
                left: -100%;
                top: 5%;
            }
            100% {
                left: 5%;
            }
        }



        h1 {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
        }


        img {
            grid-row-start: 2;
            grid-column-start: 1;
            width: 250px;
            display: grid;
            object-fit: cover;
            margin-top: 1.6em;
            height: 25em;

        }

    }

    @media (min-width: 1200px) {
        div:nth-child(1) {
            animation: slideInDesktop1200px 5s forwards;
        }

        @keyframes slideInDesktop1200px {
            0% {
                left: -100%;
                top: 5%;
            }
            100% {
                left: 15%;
            }
        }
    }
    @media (min-width: 1200px) {
        div:nth-child(1) {
            animation: slideInDesktop1400px 5s forwards;
        }

        @keyframes slideInDesktop1400px {
            0% {
                left: -100%;
                top: 5%;
            }
            100% {
                left: 20%;
            }
        }
    }

    .animationfade {
        animation: fadeIntest 12s;
        -webkit-animation: fadeIntest 10s;
        -moz-animation: fadeIntest 12s;
        -o-animation: fadeIntest 12s;
    }

    @keyframes fadeIntest {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIntest {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIntest {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-o-keyframes fadeIntest {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-ms-keyframes fadeIntest {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
