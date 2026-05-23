import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Pizza {name}</Card.Title>
          <hr />
          
         
          <Card.Text className="text-center">
           
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Ingredientes:</span>
            <br />
            <span style={{ fontSize: '12px' }}>🍕 {ingredients.join(', ')}</span>
          </Card.Text>
          <hr />
          <Card.Text className="text-center">
            <strong>Precio: ${price.toLocaleString('es-CL')}</strong>
          </Card.Text>

          <div className="d-flex justify-content-between">
            <Button variant="outline-dark">Ver Más 👀</Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;