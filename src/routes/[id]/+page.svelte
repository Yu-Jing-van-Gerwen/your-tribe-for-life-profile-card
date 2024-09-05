<script>
  export let data


</script>

<main>
  <h1>{data.person.name}  {data.person.prefix}      {data.person.surname}</h1>
  <ul>

    <li>
      {data.person.website}
    </li>
<!--    todo de custom moet geparsed worden-->
    <li>
      {data.person.custom}
    </li>
  </ul>

</main>

<style>
  

</style>
