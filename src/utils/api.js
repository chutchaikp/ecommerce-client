import axios from "axios";



export const fetchDataFromApi = async (url) => {
	try {
		// debugger;
		// import.meta.env.VITE_KEY
		const params = {
			headers: {
				// Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
				Authorization: "bearer " + import.meta.env.VITE_STRAPI_TOKEN_KEY,
			},
		};

		const { data } = await axios.get(
			import.meta.env.VITE_SERVER_URL + url,
			params
		);
		return data;
	} catch (err) {
		debugger;
		console.log(err);
		return err;
	}
};

// export const makePaymentRequest = axios.create({
//     baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
//     headers: {
//         Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
//     },
// });