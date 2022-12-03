import { motion } from "framer-motion";

export function Footer() {
  return (
    <section className="p-10 h-auto bg-medDark w-full">
      <article className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="px-0 md:px-10">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669764127/medcy/Logo_Medcy_gjxwkz_hlrsmc.png"
            alt="medcy_logo"
            className="max-h-20"
          />
          <p className="text-medDarkGray text-sm">
            Medcy enregistre un large réseau de professionnels sanitaires
            répartis à travers tout le pays
          </p>
        </div>
        <div className="">
          <h1 className="hidden md:block text-white font-bold md:text-lg">
            Compagnie
          </h1>
          <div className="text-medDarkGray text-sm mt-5">
            <ul>
              <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                <a href="/#"> A propos de Medcy </a>{" "}
              </motion.li>
              <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                <a href="/#"> Blog </a>{" "}
              </motion.li>
              <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                <a href="/#"> Services </a>{" "}
              </motion.li>
              <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                <a href="/#">Contactez nous </a>{" "}
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="">
          <h1 className="hidden md:block text-white font-bold md:text-lg">
            Services
          </h1>
          <div className="text-medDarkGray text-sm mt-5">
            <ul>
              <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                {" "}
                <a href="/#">Service client : </a>{" "}
              </motion.li>
              <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                <a href="/#">(225) 0101831415</a>
              </motion.li>
              {/* <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                <a href="/#">Relationships</a>
              </motion.li>
              <motion.li
                initial={{ x: 1 }}
                whileHover={{ x: 5 }}
                className="my-2"
              >
                <a href="/#">Sleep and insomnia</a>
              </motion.li> */}
            </ul>
          </div>
        </div>
        <div>
          <h1 className="hidden md:block text-white font-bold md:text-lg">
            Newsletter
          </h1>
          <div className="text-medDarkGray text-sm mt-5">
            <p>
              Veuillez entrer votre adresse email dans le champ ci-dessous pour
              souscrire a notre newsletter
            </p>
            <input
              type="text"
              id="email"
              className="bg-medDark border-b-2 border-gray-300 text-medDarkGray text-sm block w-full outline-none mt-4"
              placeholder="Votre email"
            />
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="btn bg-medBlue text-white drop-shadow-2xl text-sm mt-5"
            >
              Souscrire
            </motion.button>
          </div>
        </div>
      </article>
      <article className="flex justify-between items-center mt-10 md:px-10  bottom-0">
        <div className="flex">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="mx-2 items-center"
          >
            <a
              href="https://www.facebook.com/Medcy-108780835274082"
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-6 w-6 bg-medBlue rounded-full text-white grid place-content-center">
                <img
                  src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669766739/medcy/59439_o6giof.png"
                  alt="facebook_link"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="mx-2 items-center"
          >
            <a
              href="https://www.linkedin.com/company/medcysant%C3%A9/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-6 w-6 bg-medBlue rounded-full text-white grid place-content-center">
                <img
                  src="https://res.cloudinary.com/dhc0siki5/image/upload/v1670070251/medcy/174857_uomkgj.png"
                  alt="linkedin_link"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="mx-2 items-center"
          >
            <a
              href="https://www.instagram.com/medcy077/?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-6 w-6 bg-medBlue rounded-full text-white grid place-content-center">
                <img
                  src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669766890/medcy/logo-ig-instagram-icon-download-icons-12_cszstc.png"
                  alt="ig_link"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </motion.div>
        </div>
        <div>
          <p className="text-medDarkGray text-xs"> Copyright © 2022 medcy</p>
        </div>
        <div>
          <p className="text-medDarkGray text-xs">
            {" "}
            HELP & SUPPORT | PRIVACY POLICY
          </p>
        </div>
      </article>
    </section>
  );
}
