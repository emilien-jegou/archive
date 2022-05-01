/* emilien <emilien@emilien-lx>, 2021 */

export const _set = (key, value) => {
	if (!process.browser)
		return undefined;
	return window.localStorage.setItem(key, JSON.stringify(value));
}

export const _get = key => {
	if (!process.browser)
		return undefined;
	let x = window.localStorage.getItem(key);
	if (!x) return undefined;
	return JSON.parse(x);
};
