import { NavLink } from "react-router";
import { useSelector } from "react-redux";

import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";

export default function About() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      <Navbar />
      <div className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 ${theme === "dark" ? "" : ""}`}>
        <div className={`max-w-3xl rounded-2xl p-8 text-center ${theme === "dark" ? "bg-[#1e1e2e]" : "bg-white "}`}>
          <h1 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-800  "}`}>About Us</h1>
          <p className="mb-6">
            Selamat datang di{" "}
            <span className="font-semibold text-[#7287fd]">
              List of Recipes
            </span>{" "}
            — platform sederhana untuk menemukan berbagai resep makanan lezat
            dari seluruh dunia. Kami percaya bahwa memasak bukan hanya tentang
            makanan, tetapi juga tentang pengalaman, kreativitas, dan
            kebersamaan.
          </p>

          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fringilla dictum tellus, vel commodo mauris gravida ac. Maecenas
            suscipit, sem nec interdum pulvinar, elit dui ornare nunc, et
            venenatis mi ipsum sit amet dolor. Integer est dui, facilisis in
            viverra ac, elementum non urna. Maecenas dapibus odio nec nisi
            consequat, ac porta tellus mattis. Duis id turpis ac enim vulputate
            pretium laoreet venenatis nibh. Morbi cursus, eros nec condimentum
            egestas, augue massa porttitor massa, nec vestibulum sapien tellus
            sed quam. Duis fringilla et ex nec aliquam. Suspendisse ligula orci,
            fermentum eu porta vel, sodales id velit. Nullam dolor eros,
            sagittis in accumsan eget, lacinia nec eros
          </p>

          <p>
            Terima kasih telah berkunjung! Kami harap Anda menemukan inspirasi
            baru untuk hidangan berikutnya
          </p>

          <div className="mt-8">
            <NavLink to="/" end>
              <div className="inline-block bg-[#7287fd] text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                Kembali ke Beranda
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
