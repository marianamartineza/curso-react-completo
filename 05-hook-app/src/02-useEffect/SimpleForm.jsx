import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'm@gmail.com',
    });

    const {username,email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        // console.log({name, value});
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    // Las dependencias de useEffect son las que permiten controlar cuando se va adispara el evento deseado
    useEffect(() => {
        console.log('useEffect called!');
    },[]);

    useEffect(() => {
        console.log('formState changed!');
    },[formState]);

    useEffect( () => {
        console.log('email changed!');
    },[email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="marianamartinezaraque2021@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}
