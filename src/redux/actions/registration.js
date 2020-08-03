import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
const GET_USER_LOGIN = 'GET_USER_LOGIN';
const REGISTER_USER = 'REGISTER_USER';

const getUserLogin = (payload) => {
    return { type: GET_USER_LOGIN, payload };
};

const registerUser = (payload) => {
    return { type: REGISTER_USER, payload };
};

const userLogin = (formData, history) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/user/login`;
        const options = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json',
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();
        const token = await jwt_decode(result.result);
        if (response.status === 200) {
            Swal.fire({
                title: 'Login Success!',
                text: '',
                icon: 'success',
                confirmButtonText: 'Cool',
            });
            localStorage.setItem('token', result.result);
            dispatch(getUserLogin(result));
            history.push('/user/member');
        } else if (response.status === 403) {
            localStorage.clear();
        }
    } catch (error) {
        Swal.fire({
            title: 'Email or Password Incorrect!',
            text: '',
            icon: 'error',
            confirmButtonText: 'Cool',
        });
    }
};

const register = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/register`;
    const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
        },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(response.status);
    if (response.status === 200) {
        Swal.fire({
            title: 'Your Email Successfuly Register!',
            text: '',
            icon: 'success',
            confirmButtonText: 'Cool',
        });
        history.push('/user/login');
    } else {
        Swal.fire({
            title: 'Email already registered',
            text: '',
            icon: 'error',
            confirmButtonText: 'Cool',
        });
    }
    dispatch(registerUser(result));
};

export {
    getUserLogin,
    GET_USER_LOGIN,
    userLogin,
    REGISTER_USER,
    register,
    registerUser,
};