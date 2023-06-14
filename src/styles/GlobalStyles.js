import { createGlobalStyle } from "styled-components";
import image from "../assets/warningImg.png";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --grey-4: #BDBDBD;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;
        --white: #ffffff;

    }

    .toast__add {
        background-color: var(--information);
        color: var(--white);
        z-index: 1000;

        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 10px;

        position: fixed;
        left: 30%;
        right: 30%;
        top: 0;

        max-width: 50vw;
        height: 10%;
        padding: 30px;

        border-radius: 8px;
        border: solid 10px var(--warning);

        animation: appearFromRight 0.2s linear;
        animation-fill-mode: forwards;
    }

    .toast__remove {
        animation: desapearFromRight 0.2s linear;
        animation-fill-mode: forwards;
    }

    .imgWarning {
        width: 50px;
    }

    .imageContainer {
        height:100%;

        display: flex;
        align-items: center;

        background-color:var(--warning);

        border-radius: 8px 0px 0px 8px;
    }

    .text {
       display: flex;
       align-items: center;

       height: 100%;

       gap: 10px;
    }

    @keyframes appearFromRight {
        0% {
            transform: translatey(-20%);
        }

        100% {
            transform: translatey(0%);
        }
    }

    @keyframes desapearFromRight {
        0% {
            opacity: 100%;
            transform: translatey(0%);
        }

        100% {
            opacity: 50%;
            transform: translatey(-20%);
        }
    }
    
`;

export const toast = (message, color) => {
  const main = document.querySelector(".Main");
  const container = document.createElement("div");
  const imageContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");

  container.style.backgroundColor = color;
  img.src = image;
  text.innerText = message;

  container.classList.add("toast__container", "toast__add");
  img.className = "imgWarning";
  imageContainer.className = "imageContainer";
  textContainer.className = "text";

  container.appendChild(textContainer);
  textContainer.appendChild(imageContainer);
  imageContainer.appendChild(img);
  textContainer.appendChild(text);
  main.appendChild(container);

  setTimeout(() => {
    container.classList.add("toast__remove");
  }, 3000);

  setTimeout(() => {
    main.removeChild(container);
  }, 3200);
};
