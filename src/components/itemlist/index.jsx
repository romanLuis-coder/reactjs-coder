import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export const ItemListContainer = (props) => {

    return (
        <>
<h1>¡Hola,bienvenido a la tienda! {props.greeting}</h1>
<ol className="list-group list-group-numbered">
  <li className="list-group-item">Bebidas blancas</li>
  <li className="list-group-item">Cervezas</li>
  <li className="list-group-item">Aperitivos</li>
</ol>
</>
    )




};

