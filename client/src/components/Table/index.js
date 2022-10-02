import './style.css';


export default function Table({ participants, weapons = false }) {
  return (
    <div>
      <table className={'container'}>
        <thead>
          <tr>
            <th className={'hover'}>
              First &nbsp;
              <i className="fas fa-sort" />{' '}
            </th>
            <th className={'hover'}>
              Last &nbsp; <i className="fas fa-sort" />
            </th>
            {weapons ?
              <th className={'hover'}>
                Rank &nbsp; <i className="fas fa-sort" />
              </th>
              : ''}
            <th className={'hover'}>
              Score &nbsp; <i className="fas fa-sort" />
            </th>
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
                  ): 
                  <td>{participant.empty_score}</td>
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
