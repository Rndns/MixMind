const API_BASE_URL = "http://127.0.0.1:8082/mixmind";

export async function musicRecommend(emotions) {
	const MixMindApiUrl = `${API_BASE_URL}/musicRecom/`;

	return fetch(MixMindApiUrl, {
		method: "post",
        body: JSON.stringify({
			emotions,
		}),
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json());
}

export async function musicInfoList() {
	const MixMindApiUrl = `${API_BASE_URL}/musicList/`;
	
	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json());
} 

export async function genreList() {
	const MixMindApiUrl = `${API_BASE_URL}/genreList/`;

	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json())
}

export async function genreSelect() {
	const MixMindApiUrl = `${API_BASE_URL}/genreSelect/`;
	
	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json())
}

export async function genreSelectInfo({genre}) {
	console.log(3);
	console.log(genre);
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`;
	const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/search/?genre=${genre}`;

	return fetch(MixMindApiUrl, {
		method: "get",
        // body: JSON.stringify({
		// 	genre,
		// }),
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json());
}