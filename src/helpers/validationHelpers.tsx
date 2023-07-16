export function validateNumberValue(value: number | null, min: number, max: number): boolean {
	return value !== null && (isNaN(value) || value < min || value > max);
}
