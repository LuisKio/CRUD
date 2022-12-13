import React from 'react'

const UserDeleted = ({setModalError, userDeleted}) => {
    const handleDeleted = () => {
        setModalError(false);
    }

    return (
        <article className='form__section'>
            <div className="form__container">
                <div className="card__header">
                    <h3>Deleted User</h3>
                    <button onClick={handleDeleted}>X</button>
                </div>
                <div className='card__content'>
                    <p>The user <span>{userDeleted}</span> has been deleted    .</p>
                </div>

                <button className='add__user__button card__button' onClick={handleDeleted}>Aceptar</button>
            </div>

        </article>
    )
}

export default UserDeleted