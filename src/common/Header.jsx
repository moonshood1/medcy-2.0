import { motion } from "framer-motion";

export const openUrl = (url) => {
  window.open(url, "_blank");
};

export function Header() {
  return (
    <section className="flex justify-between items-center px-10">
      <div className="">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1667909496/medcy/Logo_Medcy_gjxwkz.png"
          alt="medcy_logo"
          className="max-h-28 md:max-h-32"
        />
      </div>
      <div className="hidden md:flex text-gray-400 md:text-xl space-x-16">
        <motion.a initial={{ y: 0 }} whileHover={{ y: -5 }} href="/#">
          Accueil
        </motion.a>
        <motion.a
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          onClick={() => openUrl("https://app.medcy.ci/accueil/departement")}
          className="cursor-pointer"
        >
          Services
        </motion.a>
        <motion.a
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          onClick={() => openUrl("https://app.medcy.ci/accueil/contact")}
          className="cursor-pointer"
        >
          Contact
        </motion.a>
      </div>

      <div className="flex gap-10">
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="hidden md:flex btn bg-medBlue text-white drop-shadow-2xl text-lg md:text-lg"
          onClick={() => openUrl("https://app.medcy.ci/accueil/consultation")}
        >
          S'inscrire
        </motion.button>

        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="hidden md:flex btn bg-medBlue text-white drop-shadow-2xl text-lg md:text-lg"
          onClick={() => openUrl("https://app.medcy.ci/login")}
        >
          Se connecter
        </motion.button>
      </div>

      <div className="flex md:hidden">
        <button
          className=" bg-medBlue text-white drop-shadow-xl rounded-lg py-2 px-3 text-sm  cursor-pointer text-center tracking-wider"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>

      <div
        class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header flex items-center justify-between p-4">
          <div className="">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1667909496/medcy/Logo_Medcy_gjxwkz.png"
              alt="medcy_logo"
              className="max-h-28 md:max-h-32"
            />
          </div>
          <button
            type="button"
            className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body p-4 overflow-y-auto">
          <div className="grid grid-cols-1 gap-10">
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="btn bg-medBlue text-white drop-shadow-2xl text-lg md:text-lg"
              onClick={() =>
                openUrl("https://app.medcy.ci/accueil/consultation")
              }
            >
              S'inscrire
            </motion.button>

            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="btn bg-medBlue text-white drop-shadow-2xl text-lg md:text-lg"
              onClick={() => openUrl("https://app.medcy.ci/login")}
            >
              Se connecter
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
