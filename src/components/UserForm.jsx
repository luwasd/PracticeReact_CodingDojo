import React, { useState } from 'react';


const UserForm = (props) => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        hasBeenSubmitted: (false)
    }

    const [datos, setDatos] = useState(initialValues);
    const { username, email, password, hasBeenSubmitted } = datos;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setDatos({
            ...datos, hasBeenSubmitted: (true),
        });
    };

    const handleDatos = (e) => {
        setDatos({
            ...datos, [e.target.name]: e.target.value,
        });
    }

    const limpiar = (e) => {
        setDatos(initialValues);
    }

    return (
        <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>Username: </label>
                <input value={username} name="username" type="text" onChange={handleDatos} />
            </div>
            <div>
                <label>Email Address: </label>
                <input value={email} name="email" type="text" onChange={handleDatos} />
            </div>
            <div>
                <label>Password: </label>
                <input value={password} name="password" type="text" onChange={handleDatos} />
            </div>
            <input type="submit" value="Create User" />
            <button type='button' onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UserForm;
