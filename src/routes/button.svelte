<!--https://dev.to/webdeasy/top-20-css-buttons-animations-f41-->

<button class="">
    <a href=""><span>druk voor meer info</span></a>
</button>

<style>
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


    button{
        display: block;
        width: 271px;
        height: 58px;
        line-height: 40px;
        font-size: 18px;
        font-family: sans-serif;
        text-decoration: none;
        color: #333;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
    }

    a span{
        position: relative;
        z-index: 2;
        color: black;
    }

    a:after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #ff003b;
        transition: all .35s;
    }

    a:hover{
        color: #fff;
    }

    a:hover:after{
        width: 100%;
    }

</style>