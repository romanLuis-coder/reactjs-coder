import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {ItemCount} from '../ItemCount';


export const ItemListContainer = ({greeting,user}) => {

  const onAdd = (count) => {
    alert(`Has agregado ${count} productos al carrito`)
}    

    return (
        <>

<h1>¡Hola {user},{greeting}</h1>
<ol className="list-group list-group-numbered">
  <li className="list-group-item">Bebidas blancas</li>
  <li className="list-group-item">Cervezas</li>
  <li className="list-group-item">Aperitivos</li>
</ol>
<ItemCount  onAdd={onAdd} stock={10} initial={1} item={"whisky"} />


</>
    )
};

