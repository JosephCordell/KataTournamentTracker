import React, { useState } from 'react';
import './style.css';
import ScoreCalculator from '../ScoreCalculator'

const EditScoreModal = ({ editScoreModal, setEditScoreModal, parData, weapons}) => {
    const [hideModal, setHideModal] = useState(true);
    


    return (
        <div>
            <div>
                <div id="myModal" className={hideModal ? 'modal hide' : 'modal'}>
                    <div className={'modal-content'}>
                        <div className={'modal-header'}>
                            <span id="modal-close" className={'close'} onClick={() => setHideModal(true)}>
                                &times;
                            </span>
                            <h2>Score Successfully Updated</h2>
                        </div>
                        <div className={'modal-body'}>
                            <p>Score Successfully Updated</p>
                        </div>
                    </div>
                </div>
            </div>
            {editScoreModal ? (
                <>
                    <div className='modal-container'>
                        <div className='center-modal'>
                            <div className='modal-info'>

                                <h1 className='fairwoodTitle'> {weapons? ('Weapons score for ' ): ('Empty hand score for ' )} {parData.firstName} {parData.lastName} </h1>
                                <ScoreCalculator /> 

                                <button className="close-btn-text" onClick={() => setEditScoreModal(!setEditScoreModal)}>
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

export default EditScoreModal