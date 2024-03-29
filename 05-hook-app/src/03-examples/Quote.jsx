import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({author,quote}) => {

    const pRef = useRef();
    
    const [boxSize,setBoxSize] = useState({width:0, height:0});

    useLayoutEffect(() => {
        // console.log(pRef.current.getBoundingClientRect());
        const {width,height} = pRef.current.getBoundingClientRect();
        setBoxSize({width,height});
    }, [quote])

  return (
    <>
        <blockquote 
            className="blockquote text-end"
            style={{display: 'flex'}}
        > 
            <p 
                className="mb-1"
                ref={pRef}
            >
                    {quote}
            </p>
            <footer className="blockquote-footer mb-1">{author}</footer>
        </blockquote>

        <h5>{JSON.stringify(boxSize)}</h5>
    </>
  )
}


Quote.propTypes = {
    author:PropTypes.string.isRequired,
    quote:PropTypes.string.isRequired
}