import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';

// const editprofile = (formData) => async (dispatch) => {
//     const decoded = jwt_decode(localStorage.getItem('token'));
//     const id = decoded.id;
//     const url = `${process.env.REACT_APP_API_URL}/user/update/${id}`;
//     for (let key in formData) {
//         if (formData[key] === '') {
//             delete formData[key];
//         }
//     }
//     const options = {
//         method: 'PUT',
//         body: JSON.stringify({ ...formData }),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     };

//     const response = await fetch(url, options);
//     await response.json();

//     if (response.status === 200) {
//         Swal.fire({
//             title: 'Profile Berhasil Diperbarui',
//             text: '',
//             icon: 'success',
//         });
//     }
// };

const editbank = (formData, history) => async (dispatch) => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const id = decoded.id;
    const url = `${process.env.REACT_APP_API_URL}/user/register/account/${id}`;
    for (let key in formData) {
        if (formData[key] === '') {
            delete formData[key];
        }
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify({ ...formData }),
        headers: {
            'Content-type': 'application/json',
        },
    };

    const response = await fetch(url, options);
    await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Akun Bank Berhasil Diperbarui',
            text: '',
            icon: 'success',
        });
        history.push('/profile');
    }
};

export { editbank };
