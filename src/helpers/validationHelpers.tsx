export function validateNumberValue(value: number | null, min: number, max: number): boolean {
	return value !== null && (isNaN(value) || value < min || value > max);
}

export function checkForValidValues(weight: number | null, reps: number | null) {
	return (
		validateNumberValue(weight, 1, 999) ||
		validateNumberValue(reps, 1, 999) ||
		weight === null ||
		reps === null
	);
}
