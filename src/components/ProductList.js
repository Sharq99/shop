import pds from '../products';
import Product from './ProductItem';

function Productslist(props){
    const items = pds.map(product => <Product name={product.name} price={product.price} img={product.img}/>);
    return (
      <div className="pds App">
        {items}
      </div>
    );
  }

  export default Productslist;