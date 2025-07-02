<script>
    // import githublogo from "../../static/images/github-logo.png";
    // import linkedin from "../..//static/images/linkedin.jpg";

    import linkedin from "$lib/images/linkedin.jpg";
    import githublogo from "$lib/images/github-logo.png";


</script>
<section class="socialmedia whitebackground animationfade">
    <h2>Social media</h2>
    <ul>
        <li>
            <a href="https://github.com/Yu-Jing-van-Gerwen">
                <picture>
                    <source
                            srcset="{githublogo}?format=avif"
                            type="image/avif"
                    />
                    <source
                            srcset="{githublogo}?format=webp"
                            type="image/webp"
                    />
                    <img src={githublogo} alt="GitHub"/>
                </picture>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/yu-jing-van-gerwen-a959431b7/">

                    <img  src={linkedin} alt="linkedin"/>
            </a>
        </li>
    </ul>
</section>
<style>
    .socialmedia {
        grid-row: 3;
        grid-column: 2;
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
    img{
        width: 40px;
    }
    .whitebackground{
        /*box-shadow: 14px 13px 0px 0px;*/
        background: #fff;
        font-weight: normal;
        /*width: 13em;*/
        border-radius: 0.25rem;
        padding: 0.5rem 1.5rem;
        display: grid;
        margin-top: 1em;
        margin-bottom: 2em;
    }
    .animationfade {
        animation: fadeIntest 12s;
        -webkit-animation: fadeIntest 10s;
        -moz-animation: fadeIntest 12s;
        -o-animation: fadeIntest 12s;
        -ms-animation: fadeIntest 12s;
    }

    @keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-moz-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-webkit-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-o-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-ms-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>