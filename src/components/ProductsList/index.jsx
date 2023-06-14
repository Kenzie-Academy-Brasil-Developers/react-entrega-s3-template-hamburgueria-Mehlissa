import axios from "axios";
import { useEffect, useState } from "react";
import { SubTitle, Title, Value } from "../../styles/typography";
import { StyledList } from "./style";

export const ProductsList = ({
  inputSearch,
  products,
  addProducts,
  setProducts,
  teste,
}) => {
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
            <Title>{product.name}</Title>
            <SubTitle>{product.category}</SubTitle>
            <Value>R$ {product.price},00</Value>
            <button
              onClick={() => {
                addProducts(product);
                teste(product.id);
              }}
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
