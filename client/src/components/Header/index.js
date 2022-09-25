import React, { useState } from 'react';
import AddParticipantModal from '../AddParticipantModal';
import './style.css';

const Header = ({ user, setUser, loggedIn }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [addParticipantModal, setAddParticipantModal] = useState(false);


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedIn');

        document.location.replace('/');
    };

    const openModal = () => {
        setAddParticipantModal(!addParticipantModal)
    }


    return (
        <nav className={'navbar navbar-expand-lg navbar-dark'} style={{ backgroundColor: 'black' }}>
            <div className={'container-fluid'}>
                <a className={'navbar-brand'} href="/">
                    Kata Tournament
                </a>
                <button
                    className={'navbar-toggler'}
                    type={'button'}
                    data-bs-toggle={'collapse'}
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className={'navbar-toggler-icon'}></span>
                </button>
                <div className={'collapse navbar-collapse'} id="navbarNav">
                    <ul className={'navbar-nav'}>
                        <li className={'nav-item'}>
                            <a className={'nav-link'} href="/calculator">
                                calculator
                            </a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link'} href="/divisions">
                                Divisions
                            </a>
                        </li>
                        {loggedIn ? (
                            <li className={'nav-item'}>
                                <button onClick={openModal}> Add Participant</button>
                                <AddParticipantModal addParticipantModal={addParticipantModal} setAddParticipantModal= { setAddParticipantModal} />
                            </li>
                        ) : (
                            ''
                        )}
                    </ul>
                </div>
            </div>

            {loggedIn ? (
                <div className={'login'}>
                    <div className={'collapse navbar-collapse'} classID={'navbarNav'}>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item'}>
                                <a className={'nav-link'} href="/user">
                                    User
                                </a>
                            </li>

                            <li onClick={logout} className={'nav-item'}>
                                <a className={'nav-link'} href="/" classID={'logout'}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className={'login'}>
                    <div className={'collapse navbar-collapse'} classID={'navbarNav'}>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item'}>
                                <a className={'nav-link'} href={'/login'}>
                                    Login
                                </a>
                            </li>
                            <li className={'nav-item'}>
                                <a className={'nav-link'} href={'/signup'}>
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
