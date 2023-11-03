import ItemList from "./ItemList"

export const ItemListContainer = ( {title = "Programador Full Stack"} ) => {
    return (
        <>
        <h2> { title } </h2>
        <ItemList />
        </>
    )
} 

export default ItemListContainer
