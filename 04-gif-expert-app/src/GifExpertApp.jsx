import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  
  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    // categories.push(newCategory);
    // console.log('Valorant');
    // setCategories([ ...categories, newCategory]);

    setCategories([ newCategory, ...categories]);
    
  }

  console.log(categories)
  
    return (
   <>
        {/* titulo */}
        <h1>GiftExpertApp</h1>

        {/* input */}
        <AddCategory 
        // setCategories = {setCategories}
            onNewCategory={(value) => onAddCategory(value)}
        />

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
