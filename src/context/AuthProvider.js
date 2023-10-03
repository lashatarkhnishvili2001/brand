// import axios from "axios";
// import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children}) => {
//     const [auth, setAuth] = useState({});
//     const [user, setUser] = useState([]);

//     const navigate = useNavigate()

//     const userData = async () => {
//         try{
//             const response = await axios.post('https://amazon-digital-prod.azurewebsites.net/api/user/getByEmail',
//             {
//                 email: auth.email
//             },
//             {headers: {'Content-Type' : 'appLication/json'}}
//             )
//             setUser(response.data[0])
//         }catch(error) {
//             return error
//         }
//     }

//     const signOut = () => {
//         setAuth({});
//         navigate('/')
//     }

//     return (
//         <AuthContext.Provider value={{auth, setAuth, user, userData, signOut}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext