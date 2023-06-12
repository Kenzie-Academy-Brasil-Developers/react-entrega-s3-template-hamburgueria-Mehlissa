import imageSearch from "../../assets/search.png";
import imagecart from "../../assets/cart.svg";
import imageLogo from "../../assets/logo.svg";

import { StyledHeader } from "./style";
import { Modal } from "../Modal";
import { useState } from "react";

export const Header = ({ setInputSearch, buttonAdd }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledHeader>
      <div className="headerContainer">
        <div className="headerContainer__logo">
          <img src={imageLogo} alt="" />
          <div className="headerContainer__DivCart">
            <div className="headerContainer__CountCart">
              <p>0</p>
            </div>
            <img
              className="headerContainer__logo--Card"
              src={imagecart}
              alt=""
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        <div>
          <Modal
            buttonAdd={buttonAdd}
            isOpen={openModal}
            setOpenModal={() => setOpenModal(!openModal)}
          />
        </div>

        <div className="headerContainer__search">
          <form
            className="headerContainer__search--div"
            onSubmit={handleSubmit}
          >
            <input
              className="headerContainer__search--input"
              placeholder="Digitar Pesquisa"
              type="text"
              onChange={(event) => setInputSearch(event.target.value)}
            />
            <button className="headerContainer__search--buttonSubmit">
              <img src={imageSearch} alt="" />
            </button>
          </form>
        </div>
      </div>
    </StyledHeader>
  );
};
