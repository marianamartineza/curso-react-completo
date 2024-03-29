import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

const heavyStuff = (iterationNumber = 500) => {
    for(let i=0;i<iterationNumber;i++){
        console.log('Ahi vamos...')
    }
    return `${iterationNumber}`
}

export const Memorize = () => {

    const {counter, increment} = useCounter(1);
    const [show, setShow] = useState(false);

  return (
    <>
        <h1>Counter: <Small value={counter}/></h1>
        <hr />

        <h4>{heavyStuff(200)}</h4>

        <button 
            className='btn btn-primary'
            onClick={() => increment()}
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
