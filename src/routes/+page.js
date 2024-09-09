import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		tribes: await directus.request(readItems('tribe')),
		squads: await directus.request(readItems('squad', {
			sort: ['name'],
		})),
		people: await directus.request(readItems('person')),
	};
}
