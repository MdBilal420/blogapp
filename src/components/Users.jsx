import React from 'react'
import useUsers from '../query-hooks/useUsers'

function Users() {

    const users = useUsers()
    console.log(users)
  return (
    <div>Users list</div>
  )
}

export default Users