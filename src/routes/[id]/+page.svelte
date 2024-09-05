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
    <section class="">
      <img class="image" src="{imagefrom}"  alt="Dit is mijn foto" />
      <h2 class="about-me">Over mij</h2>
      <p> Leeftijd: 20</p>
      <p class="bio"> Bio:{data.person.bio}  </p>
      <p class="vooropleiding">Mijn vooropleiding:<a href="https://www.regiocollege.nl/mbo-opleiding/softwaredeveloper">
        {data.person.custom} </a></p>
      <p class="squad">Ik zit in mijn afstudeerjaar</p>
    </section>

    <section class=""><!--social-media-->
      <h2>Social media</h2>
      <ul>
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
    <button>druk voor meer info</button>

  </div>
</main>

<style>


  main {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: open sans, Arial, serif;
  }

  .grid-container {
    justify-items: center;
    align-items: center;
    border-radius: 1em;
    background: #00ff92;
    background: linear-gradient(0deg, rgba(0, 239, 255, 1) 40%, #4fdd51 100%);
    box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1); /*ronde hoeken met een schadwu*/
    max-width: 450px;

  }

  @media (min-width: 10em) and (max-width: 25em) {
    .grid-container {
      max-width: 450px;
      background-color: #ffffff;
      justify-items: center;
      align-items: center;
    }

    .image {
      width: 217px;
    }

  }

  @media (min-width: 25em) {

    .image {
      width: 250px;
      display: block;
      object-fit: cover;

    }

    p {
      margin: 0 3em 1.6em 3em;
      line-height: 1.5;
    }

  }

  h1 {
    color: #000000;
    font-size: 2em;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-me {
    font-size: 1.5em;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0 2em 1.6em 2em;
    line-height: 1.5;
  }

  .bio, .vooropleiding, .squad {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
    align-items: center;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    margin: 0 3em 1em 1em;
    text-align: center;
    display: flex;
    flex-direction: row;
  }

  li {
    list-style: none;
    margin: 1em 1em 1em 1em;
  }

</style>
