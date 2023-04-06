const API_BASE_URL = "http://localhost/API";

export async function musicRecommend(searchWord) {
	const boardApiUrl = `${API_BASE_URL}/search/${searchWord}`;

	return fetch(boardApiUrl, {
		method: "get",
	}).then(resp => resp.json());
}