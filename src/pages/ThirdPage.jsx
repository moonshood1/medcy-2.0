import { motion } from "framer-motion";
function Doctor() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 my-20">
      <div className="px-3 md:px-0">
        <h1 className="text-4xl mt-10">
          Medecins, proposez la téléconsultation
        </h1>
        <p className="mt-5 md:mt-10 text-medDarkGray text-lg">
          Vous êtes médecin ou professionnel de la santé à la recherche d’une
          solution de téléconsultation, qui vous permettrait d’optimiser votre
          organisation, vos revenus et d’assurer le suivi de vos patients à
          distance ?
        </p>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="btn bg-medBlue text-white mt-10 text-lg md:text-lg"
        >
          S'inscrire
        </motion.button>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669571067/medcy/portrait-of-smiling-doctor-looking-at-camera-sitti-2022-02-22-06-28-33-utc_c3qhsm.jpg"
          alt="doctor_smile"
          className="hidden md:flex rounded-lg"
        />
      </div>
    </section>
  );
}

function Pharmacy() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 my-20">
      <div>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669571525/medcy/team-of-two-smiling-apothecaries-in-pharmacy-stand-2022-01-28-05-33-18-utc_nxvxik.jpg"
          alt="doctor_smile"
          className="rounded-lg"
        />
      </div>
      <div className="px-3 md:px-0">
        <h1 className="text-4xl">
          L’ordonnance en ligne est valable en pharmacie
        </h1>
        <p className="mt-2 text-medDarkGray text-lg">
          En téléconsultation, les médecins peuvent prescrire une ordonnance en
          ligne pour des médicaments, des examens médicaux ou des séances chez
          certains praticiens. Les ordonnances de médicaments, obtenues en ligne
          ou en cabinet, sont valables dans les pharmacie. Les patients peuvent
          la télécharger et l’imprimer, ou l’envoyer directement à leur
          pharmacie en et aller récupérer leurs médicaments par la suite. Le
          renouvellement d’ordonnance médicale est également possible via la
          téléconsultation. Le patient peut consulter le médecin qui a fait la
          prescription initiale ou demander le renouvellement auprès d’un autre
          médecin. Le délai de validité d’une ordonnance en ligne est similaire
          à celui d’une ordonnance classique, soit trois mois en général.
        </p>
      </div>
    </section>
  );
}
export function ThirdPage() {
  return (
    <div className="md:px-48">
      <Doctor />
      <Pharmacy />
    </div>
  );
}
