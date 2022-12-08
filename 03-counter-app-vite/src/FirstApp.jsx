//obligar 
import PropTypes from 'prop-types';


//import {Fragment} from 'react';

const newMessage = {
    message: 'Hola mundo',
    title: 'Mariana'
};

const getSaludo = (nombre) => {
    return `Hola ${nombre}`;
}

// const saludo = getSaludo('Mariana');
// console.log(saludo);

// if(!title){
//     throw new Error('El title no existe');
// }

export const FirstApp = ({title,subTitle}) => {

    // console.log(props);

    return (
    //<Fragment>
    <>
        <h1>{title}</h1>
        {/* <h1>{getSaludo('Mariana')}</h1> */}
        {/* <h1>Hola Mundo</h1> */}
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <p>{subTitle + 1}</p>
        <p>Mariana Martinez</p>
    </>
    //</Fragment>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

// snnipet rafc 

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Mariana Martinez',
}
