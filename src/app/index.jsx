import { useState } from "react";
import useFetch from "../hooks/useFetch.jsx";

function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading } = useFetch();

  if (isLoading) {
    return (
      <>
      </>
    );
  } else {
    return (
      <>
      </>
    );
  }
}

export default App;
