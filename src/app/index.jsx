import { useNavigate } from "react-router";
import { FadeLoader } from "react-spinners";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import useFetch from "../hooks/useFetch.jsx";

function App() {
  const { data, isLoading } = useFetch("https://dummyjson.com/recipes");
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  console.log(data);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:mx-10 gap-4 p-6 md:mx-24 lg:mx-32">
          {data.recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-4 m-3 bg-white rounded-2xl flex flex-col items-center text-center hover:scale-105 transition duration-100 cursor-pointer"
              onClick={() => handleClick(recipe.id)}
            >
              <div className="p-6 text-center items-center flex flex-col">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-52 h-52 object-cover rounded-xl mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {recipe.name}
                </h2>
                <p className="text-sm text-gray-600">{recipe.cuisine}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Difficulty: {recipe.difficulty}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
