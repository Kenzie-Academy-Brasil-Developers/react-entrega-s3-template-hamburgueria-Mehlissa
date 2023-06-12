import { useEffect, useState } from "react";
import axios from "axios";
import { StyledModal } from "./style";

import trashImage from "../../assets/trash.svg";

export const Modal = ({ isOpen, setOpenModal, buttonAdd }) => {
  const [products, setProducts] = useState([]);
  const [productCarts, setProductCarts] = useState([]);

  useEffect(() => {
    const productList = async () => {
      const response = await axios.get(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      setProducts(response.data);
    };

    productList();
  }, []);

  useEffect(() => {
    const filterProducts = products.filter((product) => {
      if (product.id == buttonAdd) {
        setProductCarts(product);
      }
    });
    filterProducts;
  });

  if (isOpen) {
    return (
      <StyledModal>
        <div>
          <div className="modalController">
            <header className="modalController__container--Header">
              <h3>Carrinho de compras</h3>
              <button
                className="modalController__container--button"
                onClick={setOpenModal}
              >
                X
              </button>
            </header>
            <div className="modalController__container">
              <main>
                {[productCarts].map((produto) => (
                  <li key={productCarts.id}>
                    <img src={productCarts.img} alt="" />
                    <h3>{productCarts.name}</h3>
                    <img src={trashImage} alt="" />
                  </li>
                ))}
              </main>
            </div>
          </div>
        </div>
      </StyledModal>
    );
  }

  return null;
};
