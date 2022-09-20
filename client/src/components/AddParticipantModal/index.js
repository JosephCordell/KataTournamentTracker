import React, { useState } from 'react';
import './style.css';


const AddParticipantModal = ({ addParticipantModal, setAddParticipantModal }) => {


    return (
        <div>
            {addParticipantModal ? (
                <>
                    <div className='modal-container'>
                        <div className='center-modal'>
                            <div className='modal-info'>
                                <form className=''> 
                                
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