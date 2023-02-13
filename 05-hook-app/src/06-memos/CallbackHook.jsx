import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter((c) => c + value);
      },
      [],
    );
    

    console.log('me volvi a generar :(');

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>

    </>
  )
}
