import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchPutBasicUser, fetchGetMember } from '../../redux/actions';
import { Link } from 'react-router-dom';

function EditProfile() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetMember());
    }, []);
    const member = useSelector((state) => state.getmember);
    console.log(member, 'di edit profile member');
    const [form, setForm] = useState({
        username: member.username || '',
        email: member.email || '',
        password: member.password || '',
        address: member.address || '',
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchPutBasicUser(form, history));
    };
    return (
        <div>
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active">
                        <Link to="/profile/edit">Profile</Link>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="columns" style={{ minHeight: '80vh' }}>
                    <div className="column"></div>
                    <div className="column is-half">
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="New Username"
                                    value=""
                                    id="username"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input "
                                    type="email"
                                    placeholder="Email input"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left ">
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="New Password"
                                    id="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Address</label>
                            <div className="control has-icons-left ">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="New Address"
                                    id="address"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
