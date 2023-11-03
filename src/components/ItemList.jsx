import React, { useState, useEffect } from "react";
import Item from "./Item";
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = ( )=> {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(() =>{
        //simulamos una llamada a una promesa
        const fetchData = async () => {
            await new Promise (resolve => setTimeout(resolve, 2000));
            const data = [
                {
                    id: '1',
                    name: 'Producto 1',
                    description: 'Descripción del Producto 1',
                    stock: 10,
                  },
                  {
                    id: '2',
                    name: 'Producto 2',
                    description: 'Descripción del Producto 2',
                    stock: 5,
                  },
            ];
            setProducts (data);
            setLoading(false)
        }

        fetchData()
    }, []);

    const handleItemClick = (product) => {
        //Aqui se manejaria la logica para mostrar detalles
        console.log("producto seleccionado", product);
    };

    if (loading){
        return <div>Cargando productos...</div>
    }

    return (
        <CardGroup>
            {products.map((product) => <Item key={product.id} product={product} onItemClick={handleItemClick} />)}
        </CardGroup>
    )
}

export default ItemList