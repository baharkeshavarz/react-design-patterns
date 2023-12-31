import React from 'react'

function UserInfo({ user }) {
   if (user === null) return;
   const { name, age, hairColor, hobbies } = user;
 
   return (
    <>
      { user ? <>
                <h3>{name}</h3>
                <p>Age: {age} years</p>
                <p>Hari Color: {hairColor}</p>
                <h3>Hobbies:</h3>
                <ul>
                  { hobbies.map(hobby => <li key={hobby}>{hobby}</li>) }
                </ul>
             </> 
            : ''
     }
    </>
  )
}

export default UserInfo
