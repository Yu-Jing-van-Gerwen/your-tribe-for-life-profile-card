<script>
  export let data
  import Component from './component.svelte';
  function checkAvatarImage (avatar) {
    if (avatar.includes('https')) {
      return true
    } 

    return false
  }
</script>

<main>
  <h1>Squad 1D</h1>

  <ul>
    {#each data.persons as person}
      <li>
        <a href="/{person.id}">
          <span class="avatar">
            {#if person.avatar.length > 0 && checkAvatarImage (person.avatar)}
              <img src="{person.avatar}" alt="Avatar van {person.name}">
            {:else if person.avatar.length > 0 || checkAvatarImage (person.avatar)}
              {person.avatar}
            {:else}
              <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Avatar van {person.name}">
            {/if}
          </span>

          {person.name}
        </a>
      </li>
    {/each}
  </ul>

  <Component message="Custom message" />
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
