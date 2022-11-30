import { motion } from "framer-motion";

const buttonVariant = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Description = ({ imgUrl, title, text }) => {
  return (
    <motion.article
      initial={{ x: 1 }}
      whileHover={{ x: 10 }}
      className="hidden md:content md:flex md:py-2 mt-10 cursor-pointer"
    >
      <img src={imgUrl} alt="" className="w-28 h-28" />
      <div className="ml-10">
        <h1 className="text-black text-2xl font-bold mt-5">{title}</h1>
        <p className="text-gray-400 text-sm md:text-lg mt-2">{text}</p>
      </div>
    </motion.article>
  );
};

const Method = ({ text }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      whileHover={{ x: 10 }}
      className="flex my-3 gap-3 items-center"
    >
      <div className="h-10 w-10 bg-medBlue rounded-full text-white grid place-content-center">
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
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <p className="text-lg text-medDarkGray">{text}</p>
    </motion.div>
  );
};

function Procedure() {
  return (
    <section className="hidden md:content md:flex md:py-2 mt-10">
      <img
        src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669550421/medcy/sick-afro-woman-wrapped-in-blanket-blowing-her-run-2021-08-29-10-14-46-utc_zthnnj.jpg"
        alt=""
        style={{ maxHeight: "700px" }}
      />
      <div className="ml-10">
        <h1 className="text-black text-3xl md:text-5xl mt-10 font-bold">
          Comment ça marche ?
        </h1>
        <Description
          imgUrl={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1669550409/medcy/Capture_d_e%CC%81cran_2022-11-27_a%CC%80_11.35.22_k8pinc.png"
          }
          title={"Décrivez votre mal"}
          text={
            "Le patient fait une demande de soins en remplissant un formulaire"
          }
        />

        <Description
          imgUrl={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1669550410/medcy/Capture_d_e%CC%81cran_2022-11-27_a%CC%80_11.35.32_pwz2zf.png"
          }
          title={"Trouvez un Docteur"}
          text={
            "Medcy met en relation le professionnel de la santé avec le patient."
          }
        />

        <Description
          imgUrl={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1669550410/medcy/Capture_d_e%CC%81cran_2022-11-27_a%CC%80_11.35.41_ar3xcm.png"
          }
          title={"Commencez la consultation"}
          text={
            "En 5 minutes , le docteur est a votre écoute, et vous recevrez votre ordonnance après la consultation"
          }
        />
      </div>
    </section>
  );
}

function Treatment() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-10 my-20">
      <article className="bg-medDark p-3">
        <h1 className="text-white text-4xl uppercase my-5 text-center">
          Les maladies traitees
        </h1>
        <div className="px-10">
          <Method text={"Inflammations"} />
          <Method text={"Infection sexuelles"} />
          <Method text={"Infection oculaires "} />
          <Method text={"Santé de l’homme/ Femme "} />
          <Method text={"Affections de la peau "} />
          <Method text={"Maladies digestives"} />
          <Method text={"Douleurs et Affections diverses"} />
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="btn bg-medBlue text-white mt-10 text-lg md:text-lg"
          >
            Voir tous les services
          </motion.button>
        </div>
      </article>
      <article className="hidden md:flex mt-auto">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669567341/medcy/african-american-young-pretty-female-doctor-standi-2021-12-09-05-57-34-utc_1_zmxmlu.jpg"
          alt="doctor_lady"
        />
      </article>
    </section>
  );
}

function Statistiques() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-32 my-5">
      <motion.div
        variants={buttonVariant}
        whileHover="hover"
        className="flex items-center rounded-lg drop-shadow-xl bg-white w-96 p-3 mx-auto cursor-pointer"
      >
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669568815/medcy/Capture_d_e%CC%81cran_2022-11-27_a%CC%80_17.05.43_ggvvuk.png"
          alt="doctors_icon"
          className="w-32 h-32"
        />
        <div>
          <h1 className="font-bold text-2xl uppercase">+ 1 M</h1>
          <p className="text-medDarkGray">Patients satisfaits</p>
        </div>
      </motion.div>
      <motion.div
        variants={buttonVariant}
        whileHover="hover"
        className="flex items-center rounded-lg drop-shadow-xl bg-white w-96 p-3 mx-auto cursor-pointer"
      >
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669568815/medcy/Capture_d_e%CC%81cran_2022-11-27_a%CC%80_17.05.43_ggvvuk.png"
          alt="doctors_icon"
          className="w-32 h-32"
        />
        <div>
          <h1 className="font-bold text-2xl uppercase">+ 50</h1>
          <p className="text-medDarkGray">
            Docteurs Généralistes / Spécialistes
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export function SecondPage() {
  return (
    <div className="md:px-48">
      {" "}
      <Procedure /> <Treatment /> <Statistiques />{" "}
    </div>
  );
}
