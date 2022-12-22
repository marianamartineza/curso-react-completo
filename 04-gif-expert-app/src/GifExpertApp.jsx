import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  
  const onAddCategory = () => {

    // categories.push('Valorant');
    // console.log('Valorant');
    // setCategories([ ...categories, 'Valorant']);

    setCategories([ 'Valorant', ...categories]);
    
  }

  console.log(categories)
  
    return (
   <>
        {/* titulo */}
        <h1>GiftExpertApp</h1>

        {/* input */}
        <AddCategory setCategories = {setCategories}/>

        {/* listado de Gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}



        <ol> 
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
           
            {/* gif item */}
   </>
  )
}
