import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './assets/components/FormUsers'
import UserCard from './assets/components/UserCard'
import UserDeleted from './assets/components/UserDeleted'

const BASE_URL = 'https://users-crud.academlo.tech/'

function App() {
  const [users, setUsers] = useState();
  const [userUpdate, setUserUpdate] = useState();
  const [modal, setModal] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [userDeleted, setUserDeleted] = useState();

  //OBTIENE TODOS LOS USUARIOS
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`;

    axios.get(URL)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => console.log(err))
  }

  //CREA UN USUARIO
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`;

    axios.post(URL, data)
      .then(({ data }) => {
        getAllUsers();
      })
      .catch((err) => console.log(err))
  }

  //ELIMINAR UN USUARIO
  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`;

    axios.delete(URL)
      .then(({ data }) => {
        console.log(data);
        getAllUsers();
      })
      .catch((err) => console.log(err))
  }

  //ACTUALIZA UN USUARIO
  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`;

    axios.put(URL, data)
      .then(({ data }) => {
        console.log(data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllUsers();
  }, []);


  return (
    <div className="App">
      <div className="elements__container">
        <h1>Usuarios</h1>
        <button className='add__button' onClick={() => setModal(true)}>
          <ion-icon name="add-outline"></ion-icon>
          Crear nuevo usuario
        </button>
      </div>

      {
        modal
        &&
        <section className='form__section'>
          <FormUsers
            createUser={createUser}
            userUpdate={userUpdate}
            setUserUpdate={setUserUpdate}
            updateUser={updateUser}
            setModal={setModal}
          />
        </section>
      }

      {
        !modalError
          ?
          <section className='user__section'>
            {
              users?.map(user => <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setUserUpdate={setUserUpdate}
                setModal={setModal}
                setModalError={setModalError}
                setUserDeleted={setUserDeleted}
              />)
            }
          </section>
          :
          <UserDeleted
            setModalError={setModalError}
            userDeleted={userDeleted} 
          />

      }



    </div>
  )
}

export default App
