import fetchJson from "$lib/fetch-json.js"

export async function load() {
	// const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":5}'
	const url = 'https://fdnd.directus.app/items/person/9'
	// mijn eigen url https://fdnd.directus.app/items/person/55

	const persons = await fetchJson(url)

	return {
		persons: persons.data
	}
}