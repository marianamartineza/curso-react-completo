import PropTypes from 'prop-types';

export const Quote = ({author,quote}) => {
  return (
    <blockquote className="blockquote text-end"> 
        <p className="mb-1">{quote}</p>
         <footer className="blockquote-footer mb-1">{author}</footer>
    </blockquote>
  )
}


Quote.propTypes = {
    author:PropTypes.string.isRequired,
    quote:PropTypes.string.isRequired
}