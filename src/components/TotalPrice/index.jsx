import { TextButtonCart, ValueCart } from "../Modal/typograph";
import { StyledTotalPrice } from "./style";

export const TotalPriceCount = ({ newList, setNewList }) => {
  if (newList.length >= 1) {
    const TotalPrice = newList.reduce((accPrice, product) => {
      return accPrice + parseInt(product.price);
    }, 0);

    return (
      <StyledTotalPrice className="footer">
        <div className="divFooterContainer">
          <p>Total</p>
          <ValueCart>R$ {TotalPrice},00</ValueCart>
        </div>
        <TextButtonCart className="buttonFooter" onClick={() => setNewList([])}>
          Remover todos
        </TextButtonCart>
      </StyledTotalPrice>
    );
  }

  return (
    <StyledTotalPrice className="footer">
      <div className="divFooterContainer">
        <p>Total</p>
        <ValueCart>R$ 0,00</ValueCart>
      </div>
      <TextButtonCart className="buttonFooter">Remover todos</TextButtonCart>
    </StyledTotalPrice>
  );
};
