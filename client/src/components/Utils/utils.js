export function validate(input) {
	let errors = {}
	
	if (input.senasa_id && input.senasa_id.length > 16) {
		errors.name = 'ID SENASA must be a 16-character alphanumeric string.'
	} else {
		if (input.dispositivo_nro && input.dispositivo_nro.length > 8) {
			errors.name = 'Device Number must be a 8-character alphanumeric string.'
		}
	}

	return errors;
}