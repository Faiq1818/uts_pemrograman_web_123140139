import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice.js";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="border-b-slate-300 border-b py-4 px-2">
        <div className="flex justify-between mx-5">
          <p className="text-[#7287fd] font-bold">~List of Recipes</p>
          <div className="flex items-center gap-5">
            <MdOutlineLightMode onClick={() => dispatch(toggleTheme())} />
            <p>by Faiq Ghozy Erlangga</p>
          </div>
        </div>
      </nav>
    </>
  );
}
