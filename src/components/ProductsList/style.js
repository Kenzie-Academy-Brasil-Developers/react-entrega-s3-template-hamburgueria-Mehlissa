import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  width: 100%;

  overflow-y: auto;

  gap: 20px;

  .listProducts {
    min-width: 300px;

    border: solid 3px var(--grey-100);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .listProducts__divImage {
    background-color: var(--grey-0);

    min-height: 100%;
    margin-bottom: 25px;

    display: flex;
    justify-content: center;
  }

  .listProducts__image {
    width: 180px;
  }

  .listProducts__divMain {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 0px 20px;
    height: 200px;
  }

  .listProducts__divMain--Button {
    background-color: var(--grey-4);
    color: var(--white);

    border: none;

    width: 100px;
    height: 40px;

    border-radius: 8px;
  }

  @media (min-width: 768px) {
    overflow: none;

    gap: 45px;

    flex-wrap: wrap;

    .listProducts:hover {
      border: solid 3px var(--color-primary);
    }

    .listProducts__divMain--Button:hover {
      background-color: var(--color-primary);
    }

    .listProducts__divMain--Button:active {
      background-color: var(--color-primary);
    }
  }
`;
