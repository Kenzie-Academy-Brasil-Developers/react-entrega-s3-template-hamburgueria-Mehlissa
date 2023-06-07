import { useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Reset } from "./styles/Reset";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Reset />
      <GlobalStyles />

      <Header></Header>

      <main></main>
    </>
  );
}

export default App;
