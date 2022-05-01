/* emilien <emilien@emilien-lx>, 2021 */

import axios from 'axios';

const baseURL = 'http://54.90.178.170/';

/**
 * Get user emails list from server.
 */
export const fetchEmails = ({ id }) => {
	let headers = new Headers();

	console.log('DOING FETCH WITH ID:', id);
	headers.append('Authorization', `Custom-0 ${id}`);

	return fetch(`${baseURL}list-mail`, {
		method: 'GET',
		headers,
	})
		.then(response => response.json())
		.then(res => {
			console.log(res);
			return res;
		})
};

/**
 * Login a user to the server.
 */
export const loginUser = ({ name, mail, password, mail_provider }) => {
	let data = new FormData();

	data.append('name', name);
	data.append('mail', mail);
	data.append('password', password);
	data.append('mail_provider', mail_provider);

	return fetch(`${baseURL}login`, {
		method: 'POST',
		body: data,
	}).then(response => response.json());
};
