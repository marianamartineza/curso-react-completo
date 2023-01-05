
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

   const {images, isLoading} = useFetchGifs(category);
    
  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
          { 
          images.map((image) => (
              // <li key={id}>{title}</li>
              <GifItem 
              key={image.id}
              {...image}
              />   
          ))
          }
        </div>
    </>
  )
}
