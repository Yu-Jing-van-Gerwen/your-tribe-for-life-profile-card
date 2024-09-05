<script>
    export let data

    import linkedin from '$lib/images/linkedin.png';
    import imagefrom from '$lib/images/image.jpg';
    import t from '$lib/images/image.jpg';
    import githublogo from '$lib/images/github-logo.png';


</script>

<main>
    <div class="grid-container">

        <h1>{data.person.name}  {data.person.prefix}  {data.person.surname}</h1>
        <img class="image" src="{imagefrom}" alt="Dit is mijn foto"/>
        <section class="aboutmesection">

            <h2 class="about-me">Over mij</h2>
            <p class=""> Leeftijd: 20</p>
            <p class=" "> Bio:{data.person.bio}  </p>
            <!--      <p class="vooropleiding ">Mijn vooropleiding:<a href="https://www.regiocollege.nl/mbo-opleiding/softwaredeveloper">-->
            <!--        {data.person.custom} </a></p>-->
            <p class=" ">Op dit moment doe ik de opleiding frontend design en developemnt en zit ik in mijn
                afstudeerjaar</p>
        </section>

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
        <button >druk voor meer info</button>

    </div>

</main>

<style>


    main {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: open sans, Arial, serif;
        line-height: 1.5;
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
            width: 265px;
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

    .about-me {
        font-size: 1.5em;
    }

    section {
        display: flex;
        flex-direction: column;
    }

    p {
        line-height: 1.5;
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
    .icons-grid{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 4em 1fr;

        padding: 1em;
    }

    button{
        box-shadow: none;
        background: #fff ;
        font-weight: normal;
        height: 44px ;
        width: 13em;
        border-radius: 0.25rem ;
        padding: 0.5rem 1.5rem ;
        margin-right: 12px;
        margin-top: 12px ;
        color: var(--funda-blue) ;
        background-color: white;
        transform: scale(1.1);
    }


    /*ipad en desktop*/
    @media (min-width: 705px) {

        main {
            display: flex;
            align-items: center;
        }

        .grid-container {
            display: grid;


            grid-template-rows: auto auto auto auto;
            grid-template-columns: auto auto auto;
            max-width: 600px;
            gap: 2em;
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

        }

        .aboutmesection {
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 2;
            grid-column-end: 4;
            display: grid;
        }

        .socialmedia {
            grid-row: 3;
            grid-column: 2;
        }


        section {
            display: block;

        }

    }

</style>
