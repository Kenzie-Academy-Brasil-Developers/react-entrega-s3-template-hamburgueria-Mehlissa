import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--grey-0);

  position: absolute;

  width: 100%;
  top: 0%;

  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 18px 15px;
  }

  .headerContainer__logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .headerContainer__DivCart {
    /* display: flex;
    flex-direction: row-reverse; */
  }

  .headerContainer__logo--Card {
    cursor: pointer;
  }

  .headerContainer__CountCart {
    background-color: var(--color-primary);
    color: var(--white);

    height: 22px;
    width: 17px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    position: 10px;

    margin-left: 20px;
    margin-top: -10px;

    border-radius: 7px;

    cursor: pointer;
  }

  .headerContainer__search {
    display: flex;
    flex-direction: column;
  }

  .headerContainer__search--div {
    background-color: var(--white);

    display: flex;
    justify-content: space-between;
    align-items: center;

    min-width: 100%;
    height: 60px;
    margin-top: 15px;

    border-radius: 8px;
    border: solid 2px var(--grey-100);
  }

  .headerContainer__search--input {
    width: 100%;
    height: 100%;
    padding: 0px 14px;

    cursor: text;
    outline: none;

    border: none;
    border-radius: 8px;
  }

  .headerContainer__search--buttonSubmit {
    background-color: var(--color-primary);

    height: 35px;
    width: 60px;
    margin-right: 7px;

    border-radius: 8px;
    border: none;
  }

  @media (min-width: 768px) {
    .headerContainer {
      padding: 18px 5%;
    }
  }
`;
