import { styled } from "styled-components";

export const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;

  z-index: 2;

  .modalController {
    background-color: var(--white);

    min-width: 90vw;
    height: 55vh;

    border-radius: 5px;

    position: fixed;
    top: 50%;
    right: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modalController__container {
    padding: 25px 25px;
    height: 65%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .modalController__container--Header {
    background-color: var(--color-primary);
    color: var(--white);

    height: 15px;
    padding: 25px 25px;

    border-radius: 5px 5px 0px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .modalController__container--button {
    background-color: var(--color-primary);
    color: rgba(255, 255, 255, 0.5);

    border: none;
  }

  .ListProductsCart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .ListProductsCart__container {
    display: flex;
    flex-direction: row;
  }

  .ListProductsCart__container--divimage {
    background-color: var(--grey-100);

    margin-right: 10px;
  }

  .ListProductsCart__container--image {
    width: 50px;
  }

  .footer {
    border-top: solid 2px var(--grey-100);
  }

  .divFooterContainer {
    margin-top: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .buttonFooter {
    background-color: var(--grey-100);

    margin-top: 20px;
    width: 100%;
    height: 53px;

    border: none;
    border-radius: 8px;
  }

  .ButtonTrash {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .modalController {
      min-width: 500px;
    }
  }
`;
