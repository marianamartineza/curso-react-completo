import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);

    const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {author, quote} = !!data && data[0];

    console.log({data,isLoading,hasError});

    // if(isLoading){
    //   return(
    //     <h1>Cargando...</h1>
    //   )
    // }

    // //no pueden colocarse hooks 

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
          isLoading ? (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          ): 
          (
            <blockquote className="blockquote text-end"> 
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer mb-1">{author}</footer>
            </blockquote>
          )
        }

        <button 
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => increment()}>
            Next Quote
        </button>

    </>
  )
}
