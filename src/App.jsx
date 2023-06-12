import { useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Reset } from "./styles/Reset";
import { ProductsList } from "./components/ProductsList";
import { StyledMain } from "./styles/Main";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [buttonAdd, setButtonAdd] = useState("");

  return (
    <>
      <Reset />
      <GlobalStyles />

      <Header setInputSearch={setInputSearch} buttonAdd={buttonAdd}></Header>

      <StyledMain>
        <ProductsList inputSearch={inputSearch} setButtonAdd={setButtonAdd} />
      </StyledMain>
    </>
  );
}

export default App;
