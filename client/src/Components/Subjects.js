import React, { useState, useEffect} from 'react';
import axios from 'axios'

function Subjects() {
  const [player, setPlayer] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = ()=>{
    setIdFromButtonClick(id)
  }

  useEffect(()=> {
    axios
    .get(`http://localhost:5000/api/players/${idFromButtonClick}`)
      .then(res =>{
        console.log(res)
        setPlayer(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    },[idFromButtonClick])
     
      return (<div className='player-list'>
        <input type='text' value={id}onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Find Player</button>
        <div>{player.id}</div>
        {/* <ul>
          {player.map(player=>(
            <li key={player.id}>
             Name: {player.name} | Country: {player.country} | Searches: {player.searches}            
             </li>
          ))};
          }
        </ul> */}
  </div>
      );

    }
  

export default Subjects;