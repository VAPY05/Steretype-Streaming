export function login(body) {
    return fetch('http://localhost:3030/user/login',{
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "Application/JSON",
			},
		}).then((res)=>res.json())
}

export function register(body) {
    return fetch('http://localhost:3030/user/register',{
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "Application/JSON",
        },
    }).then(res=>res.json())
}

export function logout(accessToken) {
    return fetch('http://localhost:3030/user/logout',{
        headers: {
            "X-Authorization": accessToken
        }
    })
}