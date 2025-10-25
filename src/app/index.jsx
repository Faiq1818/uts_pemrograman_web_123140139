import { useNavigate } from "react-router";
import { FadeLoader } from "react-spinners";

import Navbar from "../components/navbar.jsx";
import useFetch from "../hooks/useFetch.jsx";

function App() {
  const { data, isLoading } = useFetch("https://dummyjson.com/recipes");
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  console.log(data)

  if (isLoading) {
    return (
      <>
        <Navbar />

        <div className="fixed inset-0 flex justify-center items-center">
          <FadeLoader color="#7287fd" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 min-h-screen">
          {data.recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl p-4 flex flex-col items-center text-center hover:scale-105 transition duration-100 cursor-pointer"
              onClick={() => handleClick(recipe.id)}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-40 h-40 object-cover rounded-xl mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {recipe.name}
              </h2>
              <p className="text-sm text-gray-600">{recipe.cuisine}</p>
              <p className="text-sm text-gray-500 mt-1">
                Difficulty: {recipe.difficulty}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
