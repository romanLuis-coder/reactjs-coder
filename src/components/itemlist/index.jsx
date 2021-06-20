import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {ItemCount} from '../itemcount/index';


export const ItemListContainer = (props) => {



    return (
        <>

<h1>¡Hola {props.user},{props.greeting}</h1>
<ol className="list-group list-group-numbered">
  <li className="list-group-item">Bebidas blancas</li>
  <li className="list-group-item">Cervezas</li>
  <li className="list-group-item">Aperitivos</li>
</ol>
<ItemCount stock={10} initial={1} item={"whisky"}/>
</>
    )
};

