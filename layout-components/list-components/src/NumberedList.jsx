import React from 'react'

const NumberedList = ({ 
    items,
    resourceName,
    itemComponent: ItemComponent
 }) => {

  return (
    <>
       { items.map((item, i) => (
         <>
            <h3> {i} </h3>
            <ItemComponent key={i} {...{[resourceName]: item}} />
         </>
       )
       )}
    </>
  )
}

export default NumberedList
