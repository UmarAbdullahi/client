import React from 'react';

import '../../../assets/css/Home.css';

function Cari() {
    return (
        <div>
            <div className="section-light about-me" id="about-me">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5" data-aos="fade-right">
                            <figure className="image is-4by3">
                                <img
                                    src="https://img.vim-cn.com/37/ad36a0d5e295ab7d81bcbb4ab24c4c52a5247f.png"
                                    alt="Description"
                                ></img>
                            </figure>
                        </div>
                        <div
                            className="column is-6 is-offset-1"
                            data-aos="fade-left"
                        >
                            <h1 className="title is-2">
                                Help you find the best digital talent that match
                                your needs!
                            </h1>
                            <h1 className="subtitle">
                                Temukan Penawaran dari Talenta Digital Kami
                            </h1>
                            <br />
                            <p>
                                <a
                                    className="button is-medium is-info is-outlined"
                                    href="/catalog"
                                >
                                    <i
                                        className="fas fa-search"
                                        aria-hidden="true"
                                    ></i>
                                    Cari disini
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cari;
