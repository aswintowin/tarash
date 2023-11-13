const customHeaders = {
	'Content-Type': 'application/json',
	'x-api-key': 'bMcBEErFtb5QMGKddu2kb9kHJPpZHJQna8PBiLcO'
};

const baseUrl = 'https://jnicr20m23.execute-api.us-east-1.amazonaws.com/v1/contact';

const submitContact = async (/** @type {any} */ body) => {
	const res = await fetch(baseUrl, {
		method: 'POST',
		headers: customHeaders,
		body: JSON.stringify(body)
	});

	const json = await res.json();
	return JSON.stringify(json);
};

export default submitContact;
