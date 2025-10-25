import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice.js";
import { useNavigate } from "react-router";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickAbout = () => {
    navigate(`/about`);
  };

  return (
    <>
      <nav className="border-b-slate-300 border-b py-4 px-2">
        <div className="flex justify-between mx-5">
          <p className="text-[#7287fd] font-bold">~List of Recipes</p>
          <div className="flex items-center gap-5">
            <p
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => handleClickAbout()}
            >
              about
            </p>
            <MdOutlineLightMode
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => dispatch(toggleTheme())}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
