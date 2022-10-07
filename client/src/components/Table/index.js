import React, { useState } from 'react';
import EditScoreModal from '../EditScoreModal';
import './style.css';


export default function Table({ participants, weapons = false }) {
  const [editScoreModal, setEditScoreModal] = useState(false);
  const [id, setId] = useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [weaponsScore, setWeaponScore] = useState()
  const [emptyScore, setEmptyScore] = useState()
  const [parData, setParData] = useState({})



  const loggedIn = localStorage.getItem('loggedIn')
  const openModal = (id, firstName, lastName, weaponScore, emptyScore, weapons) => {
    console.log(id, firstName, lastName, weaponScore, emptyScore, weapons);
    setParData({ 
      'id': id, 
      'firstName': firstName, 
      'lastName': lastName, 
      'weaponScore': weaponScore, 
      'emptyScore': emptyScore, 
      'weapons': weapons })

    console.log('partydata', parData);
    console.log(editScoreModal, 'TEST');
    setEditScoreModal(!editScoreModal)
  }
  return (
    <div>
      <EditScoreModal editScoreModal={editScoreModal} parData={parData} weapons={weapons}  setEditScoreModal={setEditScoreModal} />
      <table className={'container'}>
        <thead>
          <tr>
            <th >
              First &nbsp;
              <i className="fas fa-sort" />{' '}
            </th>
            <th >
              Last &nbsp; <i className="fas fa-sort" />
            </th>
            {weapons ?
              <th >
                Rank &nbsp; <i className="fas fa-sort" />
              </th>
              : ''}
            <th >
              Score &nbsp; <i className="fas fa-sort" />
            </th>
            {loggedIn ?
              <th >
                Edit &nbsp; <i className="fas fa-sort" />
              </th>
              : ''}
          </tr>
        </thead>
        <tbody>
          {participants && participants.length > 0 ? (
            participants.map((participant, index) => (
              <tr
                key={participant.id}
                className={index % 2 === 0 ? 'odd' : 'even'}
              >
                <td>{participant.first_name}</td>
                <td>{participant.last_name}</td>
                {weapons ? (
                  <>
                    <td>{participant.belt_color}</td>
                    <td>{participant.weapon_score}</td>
                  </>
                ) :
                  <td>{participant.empty_score}</td>
                }
                {loggedIn ? (
                  <>
                    <td onClick={() => openModal(participant.id, participant.first_name, participant.last_name, participant.weapon_score, participant.empty_score, weapons)} className={'hover'}> EDIT </td>
                  </>
                ) :
                  ''
                }
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className={'noResults'}>
                No Results Found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
