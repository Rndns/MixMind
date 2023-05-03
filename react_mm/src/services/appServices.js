import { API } from "../config";

const API_BASE_URL = API.MAIN;
const API_USER_URL = API.USER;

export async function musicRecommend(emotions) {
	const MixMindApiUrl = `${API_BASE_URL}/musicRecom/`;

	return fetch(MixMindApiUrl, {
		method: "post",
		headers:{
			'Content-Type': "application/json"
		},
        body: JSON.stringify({
			emotions,
		}),
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

export async function login(email, password) {
	const MixMindApiUrl = `${API_USER_URL}/login/`;

	return fetch(MixMindApiUrl, {
		method: "post",
		headers:{
			'Content-Type': "application/json"
		},
		body:{
			email,
			password,
		},
	}).then(resp => {
		try {
			document.cookie = `token=${resp.data.token}`;
			resp.json();
		} catch (error) {
			// alert
		}
	})
}

// export async function 

export async function titleCollect() {
	const MixMindApiUrl = `${API_BASE_URL}/entireTitle/`;
	
	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json())
}

export async function titleSelect(clickedItem) {
	console.log(3);
	console.log(clickedItem);
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`;
	// const MixMindApiUrl = `${API_BASE_URL}/autoTitleInfo/search/?title=${clickedItem}`;
	const MixMindApiUrl =`${API_BASE_URL}/titleSelect?title=${clickedItem}`

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