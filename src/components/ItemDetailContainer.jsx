import React, { useState,useEffect } from "react"
import CardGroup from "react-bootstrap/esm/CardGroup";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    const llamadaAsinc = async () => {
        await new Promise (resolve => setTimeout(resolve,2000))
        const data1 = [
            {
                id: '1',
                name: 'Producto 1',
                price: 100,
                description: 'Descripción del Producto 1',
                stock: 10,
              },
              {
                id: '2',
                name: 'Producto 2',
                price: 100,
                description: 'Descripción del Producto 2',
                stock: 5,
              },            
        ]
        setItems (data1)
        setLoading(false)
    }

    llamadaAsinc()
  }, []);

  if (loading) {
    return <div> Cargandooo</div>
    }

return(
    <CardGroup>
        {items.map((item) => <ItemDetail key= {item.id} item= {item}/>)}
    </CardGroup>
)
}

export default ItemDetailContainer