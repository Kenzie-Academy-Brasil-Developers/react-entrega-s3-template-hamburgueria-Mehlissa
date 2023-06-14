import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { StyledModal } from "./style";

import trashImage from "../../assets/trash.svg";
import { TextButtonCart, TitleCart, ValueCart } from "./typograph";
import { TotalPriceCount } from "../TotalPrice";
import { StyledMainModal } from "../../styles/MainModal";

export const Modal = ({ isOpen, setOpenModal, newList, setNewList }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setOpenModal();
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);
  useEffect(() => {
    const handlekeydown = (event) => {
      if (event.key === "Escape") {
        setOpenModal();
      }
    };

    window.addEventListener("keydown", handlekeydown);

    return () => {
      window.removeEventListener("keydown", handlekeydown);
    };
  }, []);

  const RemoveProduct = (productId) => {
    setNewList((newList) =>
      newList.filter((product) => product.id !== productId)
    );
  };

  if (isOpen) {
    return (
      <StyledModal>
        <div>
          <div ref={modalRef} className="modalController">
            <header className="modalController__container--Header">
              <h3>Carrinho de compras</h3>
              <button
                className="modalController__container--button"
                ref={buttonRef}
                onClick={() => setOpenModal()}
              >
                X
              </button>
            </header>
            <div className="modalController__container">
              <StyledMainModal>
                {newList.map((product) => (
                  <li key={product.id} className="ListProductsCart">
                    <div className="ListProductsCart__container">
                      <div className="ListProductsCart__container--divimage">
                        <img
                          className="ListProductsCart__container--image"
                          src={product.img}
                          alt="Image Product Card"
                        />
                      </div>
                      <TitleCart>{product.name}</TitleCart>
                    </div>
                    <div
                      className="ButtonTrash"
                      onClick={() => RemoveProduct(product.id)}
                    >
                      <img src={trashImage} alt="" />
                    </div>
                  </li>
                ))}
              </StyledMainModal>
              <TotalPriceCount newList={newList} setNewList={setNewList} />
            </div>
          </div>
        </div>
      </StyledModal>
    );
  }

  return null;
};
