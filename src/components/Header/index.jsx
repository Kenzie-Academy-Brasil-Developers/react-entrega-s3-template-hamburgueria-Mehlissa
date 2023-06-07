import imageSearch from "../../assets/search.png";
import imagecart from "../../assets/cart.svg";
import imageLogo from "../../assets/logo.svg";

import { StyledHeader } from "./style";

export const Header = () => {
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
            />
          </div>
        </div>

        <div className="headerContainer__search">
          <div className="headerContainer__search--div">
            <input
              className="headerContainer__search--input"
              placeholder="Digitar Pesquisa"
              type="text"
            />
            <button className="headerContainer__search--buttonSubmit">
              <img src={imageSearch} alt="" />
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
