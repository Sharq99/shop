import pds from '../products';

function Product(props){
    return (
      <div>
        <img className = "img-size font-specs" src={props.img} alt="burger img"/>
        <p className = "font-specs">{props.name}</p>
        <p className = "font-specs">{props.price}</p>
      </div>
    );
  }

  export default Product;