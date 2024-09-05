<script>
  export let data

</script>

<main>
  <h1>Squad 1D</h1>
  <h2>{data.persons[2].name}</h2>

</main>

<style>
  ul {
    list-style: none;
    padding:0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2em;
    gap: 2em;

  }
  a {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:.5rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    border:1px solid var(--primary);
    overflow:hidden;
    padding:0 0 .25rem;
    color: black;
    text-decoration:none;
  }

  img {
    max-width:100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
  li{
    /*background-color: orange;*/
    width: 200px;
    padding: 1rem;

    box-shadow: 0 0 5px 0 rgba(210, 34, 34, 0.65);
  }




  @media (min-width: 705px) {

  }

</style>
