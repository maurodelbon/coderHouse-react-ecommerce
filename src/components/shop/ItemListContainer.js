import React from 'react'
import ItemCount from '../counter/ItemCount'

const handleCount=(cant)=>{
    alert(`Tienes ${cant} productos nuevos en tu carrito`)
}

export default function ItemListContainer() {
    return (
        <div>
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
        </div>
    )
}
