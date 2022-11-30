import { motion } from "framer-motion";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

function Carousel() {
  return (
    <>
      <section className="hidden md:block w-full mt-0.5 px-1">
        <OwlCarousel
          className="owl-theme"
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          }}
          autoplay
          autoplayTimeout={5000}
          loop
          autoplaySpeed={4000}
        >
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669157215/medcy/2_bzsskt.jpg"
              alt="doctor_reading"
              className="min-w-full"
            />

            <div className="absolute left-0  md:top-40 px-10 py-2 h-1/2 bg-medBlue opacity-80">
              <p className="mt-2 md:text-6xl font-bold text-white opacity-100 tracking-wide">
                Le soulagement d'accéder <br /> à un medecin, en quelques
                minutes <br />
                sans se déplacer
              </p>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="btn mt-5 md:mt-32 bg-white text-medBlue drop-shadow-2xl text-lg md:text-lg"
              >
                Prendre un RDV
              </motion.button>
            </div>
          </div>

          <div className="relative backdrop-contrast-100">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669159759/medcy/1_64668197_omfgz4.png"
              alt="client_reading"
              className="min-w-full"
            />

            <div className="absolute left-0  md:top-40  px-10 py-2 h-1/2 bg-medBlue opacity-80">
              <p className="mt-2 md:text-6xl font-bold text-white opacity-100 tracking-wide">
                Avec Medcy, les consultations <br /> se font en un clic et à
                distance <br />
                Finis les soucis de deplacement <br /> et de commodités
              </p>

              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="btn hidden md:flex md:mt-32  bg-white text-medBlue text-lg md:text-lg"
              >
                Prendre un RDV
              </motion.button>
            </div>
          </div>
        </OwlCarousel>
      </section>
      <section className="block md:hidden w-full mt-0.5 px-1">
        <OwlCarousel
          className="owl-theme"
          dots={false}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          }}
          autoplay
          autoplayTimeout={5000}
          loop
          autoplaySpeed={4000}
        >
          <div className="">
            <div className="w-full">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669157215/medcy/2_bzsskt.jpg"
                alt="img"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-medBlue opacity-80">
                <p className="my-2 text-lg text-white">
                  Le soulagement d'accéder <br /> à un medecin, en quelques
                  minutes sans se déplacer
                </p>
                <button className="btn bg-white text-medBlue text-sm mt-5">
                  Prendre un RDV
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-full">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669159759/medcy/1_64668197_omfgz4.png"
                alt="img_alt"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-medBlue opacity-80">
                <p className="my-1 text-lg text-white">
                  Avec Medcy, les consultations se font en un clic et à distance
                  Finis les soucis de deplacement et de commodités
                </p>
                <button className="btn bg-white text-medBlue text-sm mt-5">
                  Prendre un RDV
                </button>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </>
  );
}

function Telemedecine() {
  return (
    <section className="hidden md:content md:flex md:py-2 md:px-48">
      <img
        src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669550421/medcy/sick-afro-woman-wrapped-in-blanket-blowing-her-run-2021-08-29-10-14-46-utc_1_jhpnyq.jpg"
        alt=""
        style={{ maxHeight: "700px" }}
      />
      <div className="ml-10 mt-auto mb-auto">
        <h1 className="text-black text-3xl md:text-5xl mt-10 font-bold">
          La Télémedecine
        </h1>
        <p className="text-gray-400 text-sm md:text-lg mt-10">
          Il s’agit d’une consultation à distance, entre un médecin et un
          patient (seul ou assisté d’un professionnel de santé). Tout médecin
          libéral ou salarié d’un établissement de santé peut effectuer une
          téléconsultation, qu’il facture au tarif d’une consultation en
          présentiel. Toutes les situations médicales peuvent donner lieu à une
          téléconsultation.
        </p>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="btn bg-medBlue text-white mt-10 text-lg md:text-lg"
        >
          S'inscrire
        </motion.button>
      </div>
    </section>
  );
}

function AutoMedecine() {
  return (
    <section className="mx-2 mt-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 text-white gap-0">
        <div className="px-4 bg-gray-800 pb-3">
          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            L’automédication Facilite la{" "}
            <span className="text-red-600"> Mort</span>
          </h1>
          <p className="mt-5 text-sm md:text-lg">
            Pourquoi se soigner seul peut s’avérer dangereux ?{" "}
          </p>

          <p className="text-sm md:text-lg">
            Risques dus au médicament lui-même : <br /> Méconnaissance des
            composants du médicament ; Toxicité méconnue ; Date de péremption du
            médicament.{" "}
          </p>

          <p className="mt-5 text-sm md:text-lg">
            Risques liés à la prise : <br /> Interactions médicamenteuses ;
            Erreur de posologie ; Méconnaissance des effets secondaires ; Non
            prise en compte des éventuelles allergies.{" "}
          </p>

          <p className="mt-5 text-sm md:text-lg">
            Difficultés pour le corps médical : <br />
            <br />
            Retard de diagnostic , La prise de médicaments dans le cadre d’une
            automédication peut masquer certains symptômes , Fausser
            l’interprétation des résultats biologiques , Se soigner seul, avec
            des médicaments non appropriés, peut entrainer d’autres maladies ,
            Aggravation des maux.
          </p>

          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="btn bg-medBlue text-white mt-5 md:mt-32 text-lg md:text-lg"
          >
            Prendre un RDV
          </motion.button>
        </div>
        <div>
          <img
            alt="sick_man"
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669162791/medcy/5_1_hislxt.png"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export function MainPage() {
  return (
    <>
      {" "}
      <Carousel />
      <Telemedecine /> <AutoMedecine />
    </>
  );
}
