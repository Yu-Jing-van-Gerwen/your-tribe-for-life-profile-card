import fetchJson from "$lib/fetch-json"

export async function load({params}) {
  console.log('PARAMS', params)
  const url = `https://fdnd.directus.app/items/person/${params.id}`

  const person = await fetchJson(url)

  // const customData = JSON.parse(person);
  return {
    person: person.data,

    // customData: customData.data
  }
}

