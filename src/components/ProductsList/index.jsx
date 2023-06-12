import axios from "axios";
import { useEffect, useState } from "react";
import { StyledList } from "./style";

export const ProductsList = ({ inputSearch, setButtonAdd }) => {
  const [products, setProducts] = useState([]);

  const filterProducts = products.filter((product) =>
    product.name.toUpperCase().includes(inputSearch.toUpperCase())
  );

  useEffect(() => {
    const productList = async () => {
      const response = await axios.get(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      setProducts(response.data);
    };

    productList();
  }, []);

  return (
    <StyledList>
      {filterProducts.map((product) => (
        <li className="listProducts" key={product.id}>
          <div className="listProducts__divImage">
            <img
              className="listProducts__image"
              src={product.img}
              alt="Image Products"
            />
          </div>
          <div className="listProducts__divMain">
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>R$ {product.price},00</p>
            <button
              onClick={() => setButtonAdd(product.id)}
              className="listProducts__divMain--Button"
            >
              Adicionar
            </button>
          </div>
        </li>
      ))}
    </StyledList>
  );
};
