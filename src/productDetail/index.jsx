import { useParams } from "react-router";
import { FadeLoader } from "react-spinners";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import useFetch from "../hooks/useFetch.jsx";

export default function ProductDetail() {
  const params = useParams();
  const { data, isLoading } = useFetch(
    `https://dummyjson.com/recipes/${params.id}`,
  );
  console.log(data, isLoading);

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

        <div className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-2xl mb-20">
          <div className=" items-center">
            <div className="flex justify-between">
              <h1 className="text-3xl font-semibold mb-2">{data.name}</h1>
              <p className="font-semibold text-gray-600 mb-4">{data.cuisine}</p>
            </div>
            <div className=" flex items-center gap-1">
              <h2 className="font-semibold text-lg">Difficulty:</h2>
              <p className="text-gray-700">{data.difficulty}</p>
            </div>

            <div className="mb-4 flex items-center gap-1">
              <h2 className="font-semibold text-lg">Calories:</h2>
              <p className="text-gray-700">{data.caloriesPerServing} kcal</p>
            </div>
            <img
              src={data.image}
              alt={data.name}
              className="w-full rounded-2xl"
            />

            <div>
              <p className="text-gray-800 mb-6">{data.description}</p>

              <div className="mb-4">
                <h2 className="font-semibold text-lg mb-1">Ingredients:</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {data.ingredients?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg mb-1">Instructions:</h2>
                {data.instructions?.map((item, index) => (
                  <p key={index} className="my-1">{index + 1}. {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
