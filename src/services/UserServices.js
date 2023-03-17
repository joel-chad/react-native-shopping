import axios from "axios";
import endpointNames from "../configs/serverUrls";
import AsyncStorage from '@react-native-async-storage/async-storage'

const userUrl = endpointNames.user

// let token = JSON.parse(AsyncStorage.getItem("token"))
let headers

//login function
const login = async (data) => {
    let response
    await axios.post(userUrl + '/login', data).then((r) => {
        console.log("response ", r.data.token)
        response = r.data;
        AsyncStorage.setItem('token', r.data.token)
    })
    .catch(err => {
        response = err;
    });

    return response;
};

//change password
const changePassword = async (request) => {
    let response;
    await axios.post(userUrl + '/changePassword', request)
        .then(res => {
            console.log(res);
            response = res;
        }).catch(err => {
            console.log(err);
            response = err;
        });

    return response;
}

//save password
const savePassword = async (request) => {
    let response;
    await axios.post(userUrl + '/savePassword', request)
        .then(res => {
            console.log(res);
            response = res;
        }).catch(err => {
            console.log(err);
            response = err;
        });

    return response;
}

//reset password
const resetPassword = async (request) => {
    let response;
    await axios.post(userUrl + '/resetPassword?email=' + request)
        .then(res => {
            console.log(res);
            response = res;
        })
        .catch(err => {
            console.log(err.response.data.message);
            response = err.response.data.message;
        });
    return response;
}

//logout
const logout = () => {
    localStorage.removeItem('user');
    localStorage.setItem('loggedIn', 'inactive')
    console.log('Logged Out')
};


//get currentUser
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};



const storeUser = async (request) => {

    let response;
    console.log(request)

   await axios.post(userUrl, request)
      .then((res) => {
        // console.log(response);
        response = res
      })
      .catch((error) => {
        response = error
        //   console.log(error);
        
      });

    return response;
}

const editUser = async (request) => {
   
    console.log(request);
    // let data = {

    //     "firstName": request.firstName,
    //     "lastName": request.lastName,
    //     "username": request.username,
    //     "email": request.email,
    //     "password": request.password,
    //     "agentId": 1,
    //     "clientId": 0,
    //     "roleId": 1
    // }

    let response;
    await axios.put(userUrl + '/edit-user' + '/' + request.id,  request)
        .then(res => {
            console.log(res);
            response = res;
        })
        .catch(err => {
            console.log(err);
            response = err;
        });

    return response;
}

const getAllUsers = async ()=>{
    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
          }
      }
    let response;
    await axios.get(usersUrl + '/admin/0/100', options)
        .then(res => {
            response = res;
        })
        .catch(err => {
            console.log(err.response.data.message);
            response = err.response.data.message;
        });
    return response;
}

const getAllRoles = async ()=>{
    let response
        await axios.get(userUrl + "/roles", {
            headers
        })
        .then(res => {
            console.log(res);
            response = res;
        })
        .catch(err => {
            console.log(err.response.data.message);
            response = err.response.data.message;
        });
    return response;
}


const getUserById = async (id) => {
    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
          }
      }
    let response;
    await axios.get(usersUrl  + id, options)
        .then(res => {
            console.log(res);
            response = res
        })
        .catch(err => {
            console.log(err);
            response = err;
        });

    return response;
}

//sign up
const addAddress = async (id, data) => {
    const options = {
        headers : {'Authorization': `Bearer ${token}`,
            //   'Content-Type': 'application/x-www-form-urlencoded',
          }
      }
    let response;

    await axios.post(userUrl + `/address/${id}`, data, options)
        .then(res => {
            console.log(res);
            response = res.data;
        })
        .catch(err => {
            console.log(err);
            response = err
        })

    return response;
}

const activate = async (id)=>{
    let response;

    await axios.put(userUrl + `/activate/${id}`)
        .then(res => {
            console.log(res);
            response = res;
        })
        .catch(err => {
            console.log(err);
            response = err
        })

    return response;
}

const deactivate = async (id)=>{
    let response;

    await axios.put(userUrl + `/deactivate/${id}`)
        .then(res => {
            console.log(res);
            response = res;
        })
        .catch(err => {
            console.log(err);
            response = err
        })

    return response;
}

export default {
    login, changePassword, resetPassword, logout, getCurrentUser, activate, deactivate,
    storeUser, savePassword, getAllUsers, getAllRoles, editUser, getUserById, register, addAddress

}