import axios from "axios";

const Url = 'https://amazon-digital-prod.azurewebsites.net/api/user/'



const register = (email, user, password) => {
    return axios.post(Url + '/registerUser',
    {email: email, userName: user, password: password},
    {headers: {'Content-Type' : 'application/json'}},
    )
}

const login = async (email, password) => {
    return await axios.post(Url + '/login',
    { email: email, password: password },
    )
    .then((response) => {
        if(response.data.jwt) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    })
}

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout
}

export default authService;