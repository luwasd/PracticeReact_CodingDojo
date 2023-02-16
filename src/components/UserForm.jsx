import React, { useState } from 'react';


const UserForm = (props) => {

    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    const [datos, setDatos] = useState(initialValues);
    const { username, email, password } = datos;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };

    const handleDatos = (e)=>{
        setDatos({
            ...datos, [e.target.name] : e.target.value,
        });
    }

    const limpiar = (e) => {
        setDatos(initialValues);
    }

    return (
        <form onSubmit={createUser}>
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
