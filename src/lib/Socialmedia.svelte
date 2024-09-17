<script>
    // import githublogo from "../../static/images/github-logo.png";
    // import linkedin from "../..//static/images/linkedin.jpg";

    import linkedin from "$lib/images/linkedin.jpg";
    import githublogo from "$lib/images/github-logo.png";

    export let data;
</script>
<section class="socialmedia"><!--social-media-->
    <h2>Social media</h2>
    <ul class="icons-grid">
        <li>
            <a href="https://github.com/yujing-student">
                <!--						<img src="/images/github-logo.png" width="40px">-->
                <picture>
                    <source
                            srcset="{githublogo}?format=avif"
                            type="image/avif"
                    />
                    <source
                            srcset="{githublogo}?format=webp"
                            type="image/webp"
                    />
                    <img class="logo" src={githublogo} alt="GitHub"/>
                </picture>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/yu-jing-van-gerwen-a959431b7/">
<!--                <picture>-->

<!--                    <source-->
<!--                            srcset="{linkedin}?format=webp"-->
<!--                            type="image/webp"-->
<!--                    />-->
<!--                    <source-->
<!--                            srcset="{linkedin}?format=avif"-->
<!--                            type="image/avif"-->
<!--                    />-->
                    <img class="logo" src={linkedin} alt="linkedin"/>
<!--                </picture>-->
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
    .logo{
        width: 40px;
    }
</style>