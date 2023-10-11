import authApi from "../Api/axios";
// const authApi = 'https://amazon-digital-prod.azurewebsites.net/api/'

const register = (email, user, password) => {
    return authApi.post('/user/registerUser',
    {email: email, userName: user, password: password},
    {headers: {'Content-Type' : 'application/json'}},
    )
}

const login = async (email, password) => {
    return await authApi.post('User/LogIn',
    { email: email, password: password },
    {headers: {'Content-Type' : 'application/json'}},
    )
    .then((response) => {
        if(response.data.jwt) {
            localStorage.setItem('userToken', JSON.stringify(response.data));
        }
        return response.data;
    })
}

const logout = () => {
    localStorage.removeItem('userToken');
};

const authService = {
    register,
    login,
    logout
}

export default authService;