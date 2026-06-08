import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {formatNumber} from '../utils/formatNumber';

const CardPizza = ({name, price, ingredients, img}) => {
  return (
    <Card className="w-100">
      <Card.Img 
  variant="top" 
  src={img} 
  style={{ height: '200px', objectFit: 'cover' }} 
/>
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <hr />

        <Card.Text className="text-center">
          <span style= {{ fontSize: '18px', fontWeight: 'bold'}}>Ingredientes:</span>
          <br />
          <ul style= {{ listStyle: 'none', padding: 0, fontSize: '12px'}}>
            {ingredients.map((ingredient, index) =>(<li key={index}>🍕 {ingredient}</li>
          ))}
          </ul>
          </Card.Text>

          <hr />
          <Card.Text className="text-center">
            <strong>Precio: ${formatNumber(price)}</strong>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="outline-dark">Ver Más 👀</Button>
            <Button variant= "dark">Añadir 🛒 </Button>
          </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

