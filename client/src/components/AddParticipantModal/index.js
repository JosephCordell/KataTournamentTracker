// import { response } from 'express';
import React, { useState } from 'react';
import './style.css';


const AddParticipantModal = ({ addParticipantModal, setAddParticipantModal }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [ageGroup, setAgeGroup] = useState('Kids')
    const [rank, setRank] = useState('White Belt')
    const [hideModal, setHideModal] = useState(true);


    const addParticipant = (e) => {
        e.preventDefault();
        const participantDetails = {
            first_name: firstName,
            last_name: lastName,
            age_group: ageGroup,
            rank: rank,
        }
        console.log(JSON.stringify(participantDetails));
        const fetchData = async () => {
            await fetch('/api/tournament/addParticipant', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(participantDetails),
            })
                .then((response) => {
                    setHideModal(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData()
    }

    return (
        <div>
            <div>
                <div id="myModal" className={hideModal ? 'modal hide' : 'modal'}>
                    <div className={'modal-content'}>
                        <div className={'modal-header'}>
                            <span id="modal-close" className={'close'} onClick={() => setHideModal(true)}>
                                &times;
                            </span>
                            <h2>Participant Successfully Added</h2>
                        </div>
                        <div className={'modal-body'}>
                            <p>Participant has been added</p>
                        </div>
                    </div>
                </div>
            </div>
            {addParticipantModal ? (
                <>
                    <div className='modal-container'>
                        <div className='center-modal'>
                            <div className='modal-info'>
                                <form className='' onSubmit={(e) => addParticipant(e)}>
                                    <div className='form-group'>
                                        <label className='form-label'>
                                            First Name:
                                        </label>
                                        <input
                                            id='name'
                                            className='form-input'
                                            placeholder='First Name'
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label'>
                                            Last Name:
                                        </label>
                                        <input
                                            id='name'
                                            className='form-input'
                                            placeholder='Last Name'
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label'>
                                            Rank:
                                        </label>
                                        <select
                                            value={rank}
                                            onChange={(e) => setRank(e.target.value)}
                                        >
                                            <option value='White Belt'> White Belt </option>
                                            <option value='Yellow Belt'> Yellow Belt </option>
                                            <option value='Blue Belt'> Blue Belt </option>
                                            <option value='Green Belt'> Green Belt </option>
                                            <option value='Brown Belt'> Brown Belt </option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label'>
                                            Age Group:
                                        </label>
                                        <select
                                            value={ageGroup}
                                            onChange={(e) => setAgeGroup(e.target.value)}
                                        >
                                            <option value='Kids'> Kids </option>
                                            <option value='Adult/Teens'> Adult/Teens </option>
                                        </select>
                                    </div>
                                    <button className={'btn btn-primary'} type="submit">
                                        Add Participant
                                    </button>
                                </form>

                                <button className="close-btn-text" onClick={() => setAddParticipantModal(!setAddParticipantModal)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )
                :
                null
            }
        </div>
    )
}

export default AddParticipantModal