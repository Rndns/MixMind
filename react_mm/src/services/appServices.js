import { API } from "../config";

const API_BASE_URL = API.MAIN;
const API_USER_URL = API.USER;
const API_CMMT_URL = API.COMMUNITY;
const API_PLLI_URL = API.PLAYLIST;

export async function musicRecommend(emotions) {
    const MixMindApiUrl = `${API_BASE_URL}/musicRecom/`;

    const response = await fetch(MixMindApiUrl, {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            emotions,
        }),
    });

    const data = await response.json();

    return {
        original_results: data.original_results,
        filtered_results: data.filtered_results
    };
}


export async function song2vecRecommend(jwtToken) {
	const token = jwtToken.split('=')[1];
	const MixMindApiUrl = `${API_BASE_URL}/musicRecom/`;

	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
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
	console.log(clickedItem);
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`;
	const MixMindApiUrl = `${API_BASE_URL}/titleInfo/search/?title=${clickedItem}`;
	// const MixMindApiUrl =`${API_BASE_URL}/titleInfo/?title=${clickedItem}`

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

export async function InputComment(comment, musicId) {
	const MixMindApiUrl = `${API_CMMT_URL}/collectComment/`;
	const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));
	const token = jwtToken.split('=')[1];
	// const MixMindApiUrl = `${API_CMMT_URL}/collectComment/search/?comment=${comment}`;
	

	return fetch(MixMindApiUrl, {
		method: "post",
		headers:{
			'Content-Type': "application/json",
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			comment,
			musicId
		}),
	}).then(resp => resp.json());
}

export async function loadComment(musicId) {
	const MixMindApiUrl = `${API_CMMT_URL}/collectComment/?musicId=${musicId}`;
	
	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json",
		},
		
	}).then(resp => resp.json());
}

export async function updateComment(commentId, newContent) {
	const MixMindApiUrl = `${API_CMMT_URL}/updatecmt/${commentId}/`;
	
	return fetch(MixMindApiUrl, {
		method: "put",
		headers:{
			'Content-Type': "application/json"
		},
		body: JSON.stringify({
			commentId,
			newContent
		})
	})
}

export async function deleteComment(commentId) {
	const MixMindApiUrl = `${API_CMMT_URL}/deletecmt/${commentId}/`;
	
	return fetch(MixMindApiUrl, {
		method: "delete",
		headers:{
			'Content-Type': "application/json"
		},
		body: commentId
	}).then(resp => resp.json())
}

export async function loadPlayGroup(jwtToken) {
	const token = jwtToken.split('=')[1];
	
	const MixMindApiUrl = `${API_PLLI_URL}/group/`;

	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
	}).then(resp => resp.json());
}

export async function editPlayGroup(jwtToken, group, name) {
	const token = jwtToken.split('=')[1];
	const MixMindApiUrl = `${API_PLLI_URL}/group/?id=${group.id}`;

	return fetch(MixMindApiUrl, {
		method: "put",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
		body:{
			name,
		},
	}).then(resp => resp.json());
}

export async function createPlayGroup(jwtToken, name) {
	const token = jwtToken.split('=')[1];
	
	const MixMindApiUrl = `${API_PLLI_URL}/group`;

	return fetch(MixMindApiUrl, {
		method: "post",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
		body:{
			name,
		},
	}).then(resp => resp.json());
}

export async function delPlayGroup(jwtToken, group) {
	const token = jwtToken.split('=')[1];
	
	const MixMindApiUrl = `${API_PLLI_URL}/group/?id=${group.id}`;

	return fetch(MixMindApiUrl, {
		method: "delete",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
	}).then(resp => resp.json());
}

export async function loadPlayList(GroupId) {

	const MixMindApiUrl = `${API_PLLI_URL}/list/${GroupId}/`;

	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json",
		},
	}).then(resp => resp.json());
}

export async function editPlayList(jwtToken, list, name) {
	const token = jwtToken.split('=')[1];
	const MixMindApiUrl = `${API_PLLI_URL}/list/?id=${list.id}`;

	return fetch(MixMindApiUrl, {
		method: "put",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
		body:{
			name,
		},
	}).then(resp => resp.json());
}

export async function createPlayList(jwtToken, name) {
	const token = jwtToken.split('=')[1];
	
	const MixMindApiUrl = `${API_PLLI_URL}/list`;

	return fetch(MixMindApiUrl, {
		method: "post",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
		body:{
			name,
		},
	}).then(resp => resp.json());
}

export async function delPlayList(jwtToken, list) {
	const token = jwtToken.split('=')[1];
	
	const MixMindApiUrl = `${API_PLLI_URL}/list/?id=${list.id}`;

	return fetch(MixMindApiUrl, {
		method: "delete",
		headers:{
			'Content-Type': "application/json",
			Authorization: `Bearer ${token}`,
		},
	}).then(resp => resp.json());
}
