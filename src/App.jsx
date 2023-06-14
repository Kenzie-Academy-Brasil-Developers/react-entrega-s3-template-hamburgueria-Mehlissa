import { useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyles, toast } from "./styles/GlobalStyles";
import { Reset } from "./styles/Reset";
import { ProductsList } from "./components/ProductsList";
import { StyledMain } from "./styles/Main";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [newList, setNewList] = useState([]);

  const addProducts = (product) => {
    // if (product.id === product.id) {
    //   console.log(product);
    // }
    setNewList([...newList, product]);
  };

  const teste = (productId) => {
    {
      newList.map((list) => {
        if (productId === list.id) {
          setNewList((newList) =>
            newList.filter((product) => product.id !== productId)
          );
          toast("Porfavor selecione apenas um de cada produto!");
        }
      });
    }
  };

  return (
    <>
      <Reset />
      <GlobalStyles />

      <Header
        setInputSearch={setInputSearch}
        products={products}
        newList={newList}
        setNewList={setNewList}
      ></Header>

      <StyledMain className="Main">
        <ProductsList
          products={products}
          setProducts={setProducts}
          inputSearch={inputSearch}
          addProducts={addProducts}
          teste={teste}
        />
      </StyledMain>
    </>
  );
}

export default App;
