import React from 'react'
import './newcollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../item/item';
function NewCollections() {
  return (
    <div className='new-collections'>
     <h1>New COLLECTIONS</h1>
     <hr/>
     <div className="collections">
       {new_collections.map((item,i)=>(
         <Item Key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
       ))}
     </div>
    </div>
  )
}

export default NewCollections