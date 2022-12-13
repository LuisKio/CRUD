import React, { useState } from 'react'

const UserCard = ({ user, deleteUser, setUserUpdate, setModal, setModalError, setUserDeleted }) => {
  const handleUpdate = () => {
    setUserUpdate(user);
    setModal(true);
  }

  const handleDeleted = () => {
    setModalError(true);
    deleteUser(user.id)
    setUserDeleted(`${user.first_name} ${user.last_name}`);
  }

  return (
    <article className='user__card'>
      <h2 className='border__card'>{`${user.first_name} ${user.last_name}`}</h2>

      <ul className='border__card'>
        <li><span>Email</span> {user.email}</li>
        <li><span>Birthday</span> {user.birthday}</li>
      </ul>

      <div className="buttons">
        <button onClick={handleDeleted}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        <button onClick={handleUpdate}>
          <ion-icon name="create-outline"></ion-icon>
        </button>
      </div>
    </article>
  )
}

export default UserCard