import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Item = (  { product, onItemClick } ) => {
    
    return (
        <CardGroup>
        <Card className="text-center p-1 m-2" style={{ width: '15rem'}}>
         <Card.Img  className="rounded mx-auto img-fluid " variant="top" src={product.img} />
         <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.subtitle}</Card.Text>
            <Card.Text>Medidas: {product.size}</Card.Text> 
            <Card.Text>Precio : $ {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="bg-secondary">
            <Button variant="secondary" onClick={() => onItemClick(product)} >Ver mas</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
     )
    }

export default Item