// import axios from "axios";

// const Url = 'https://amazon-digital-prod.azurewebsites.net/api/'



// const register = (email, user, password) => {
//     return axios.post(Url + 'user/registerUser',
//     {email: email, userName: user, password: password},
//     {headers: {'Content-Type' : 'application/json'}},
//     )
// }

// const login = async (email, password) => {
//     return await axios.post(Url + 'User/LogIn',
//     { email: email, password: password },
//     )
//     .then((response) => {
//         if(response.data.jwt) {
//             localStorage.setItem('User', JSON.stringify(response.data));
//         }
//         return response.data;
//     })
// }

// const logout = () => {
//     localStorage.removeItem('User');
// };

// const authService = {
//     register,
//     login,
//     logout
// }

// export default authService;