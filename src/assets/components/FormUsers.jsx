import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({ createUser, userUpdate, updateUser, setModal, setUserUpdate }) => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();




    const submitForm = (data) => {
        if (userUpdate) {
            updateUser(userUpdate.id, data)
            setUserUpdate();
        } else {
            createUser(data);
        }

        console.log('reset');
        reset(defaultValues);
        setModal(false);
    }

    const handleClose = () => {
        setUserUpdate();
        reset(defaultValues);
        setModal(false);
    }

    const validationEmail = {
        required: true,
        pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'Error'
        }
    }

    const validationPassword = {
        required: true,
        minLength: 5
    }

    const validationName = {
        required: true,
        pattern: {
            value: /[A-Za-z]/,
            message:
                "Error"
        }
    }

    useEffect(() => {
        if (userUpdate) {
            reset(userUpdate);
        }
    }, [userUpdate])

    return (
        <div className='form__container'>
            <div className="form__header">
                <h3>
                    {
                        !userUpdate ? 'New User' : 'Update User'
                    }
                </h3>
                <button onClick={handleClose}>X</button>

            </div>

            <form onSubmit={handleSubmit(submitForm)}>
                <div className='form__content'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder='Email'
                        id='email'
                        className={`${errors.email && 'input__error'}`}
                        {...register('email', validationEmail)}
                    />
                </div>
                <div className='form__content'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        id='password'
                        className={`${errors.password && 'input__error'}`}
                        {...register('password', validationPassword)}
                    />
                </div>
                <div className='form__content'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        placeholder='First Namme'
                        id='firstName'
                        className={`${errors.first_name && 'input__error'}`}
                        {...register('first_name', validationName)}
                    />
                </div>
                <div className='form__content'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        placeholder='Last Name'
                        id='lastName'
                        className={`${errors.last_name && 'input__error'}`}
                        {...register('last_name', validationName)}
                    />
                </div>
                <div className='form__content'>
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        id='birthday'
                        className={`${errors.birthday && 'input__error'}`}
                        {...register('birthday', {required: true})}
                    />
                </div>
                <button
                    type='submit'
                    className='add__user__button'
                >
                    {
                        !userUpdate ? 'Add User' : 'Update User'
                    }
                </button>
            </form>
        </div>

    )
}

export default FormUsers