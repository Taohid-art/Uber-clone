import React, { createContext } from 'react'
export  const userDataContext = createContext()
const UserContext = ({children}) => {
 
 
   const user = "Prince"
  return (
    <div>
       < userDataContext.Provider value={user}>
          {children}
       </userDataContext.Provider>
    </div>
  )
}

export default UserContext