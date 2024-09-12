<script>
    import githublogo from "$lib/images/github-logo.png";
    import linkedin from "$lib/images/linkedin.png";

    export let data;
</script>
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
</style>