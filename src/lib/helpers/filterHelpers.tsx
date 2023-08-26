export function filterNamesBySearchTerm(possibleNames: string[], searchTerm: string) {
	return possibleNames.filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase()));
}
