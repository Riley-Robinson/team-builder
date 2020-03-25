import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';


const thePeople = [
    { id: uuid(), name: 'Roland', email: 'Roland@gmail.com', role: 'Frontend Developer', },
    { id: uuid(), name: 'Liz', email: 'Liz@gmail.com', role: 'Backend Developer', },
]

function PeopleMembers (){
    const [People, setPeople] = useState(thePeople)
    const [PeopleValues, setPeopleValues] = useState({
        name: '', 
        email: '',
        role: '', 
      })

      const inputChange = event => {
          const changeName = event.target.name;
          const changeValue = event.target.value;
          setPeopleValues ({
                ...PeopleValues,
                [changeName]: changeValue,
          })
      }

      const formSubmit = event => {
          event.preventDefault();

          const newMember = {
              id: uuid(),
              name:PeopleValues.name,
              email:PeopleValues.email,
              role:PeopleValues.role,        
          }
          setPeople([...People, newMember]) 
      }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label>
                    'Name'
                    <input 
                    onChange={inputChange}
                    value={PeopleValues.name}
                    name="name"
                     />

                </label>

                <label>
                    'Email'
                    <input 
                    onChange={inputChange}
                    value={PeopleValues.email}
                    name="email"
                     />

                </label>

                <label>
                    'Role'
                    <input 
                    onChange={inputChange}
                    value={PeopleValues.role}
                    name="role"
                     />

                </label>
                <input 
        type='submit'
        /> 
            </form>
            <h3>List of friends:</h3>
      {
        People.map(fr => <div key={fr.id}>{fr.name} {fr.email} {fr.role}</div>)
      }
        </div>
    )
}

export default PeopleMembers 