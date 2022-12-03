import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Method } from "./SecondPage";

const Card = ({ name, text, imgUrl }) => {
  return (
    <>
      <div className="bg-white rounded-lg block">
        <img src={imgUrl} alt="test" className="rounded-t-lg" />
        <div className="p-5">
          <h3 className="font-bold text-black text-xl">{name}</h3>
          <p className="my-3 font-normal text-medDarkGray dark:text-gray-400 italic">
            {`"${text}"`}
          </p>
        </div>
      </div>
    </>
  );
};

function Testimony() {
  return (
    <section className="w-full mt-0.5 px-2 md:px-48 my-4 py-8">
      <h1 className="text-3xl font-bold md:text-4xl text-black">
        Ils / Elles parlent de nous
      </h1>

      <OwlCarousel
        className="owl-theme mt-4"
        margin={20}
        loop
        autoplay
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }}
        autoplayTimeout={5000}
        autoplaySpeed={4000}
        // navSpeed={2000}
      >
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1670069605/medcy/client_1_mrcxb9.jpg"
            }
            text={
              "Très bonne application franchement , qualité , rapidité et efficacité"
            }
            name={"Vincent Kouamé"}
          />
        </div>
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1670069605/medcy/client_2_lxg3zf.jpg"
            }
            text={
              " Je suis tres surpris par cette application , je ne pensais pas que je pouvais faire une consultation directement en ligne .Très bonne application franchement "
            }
            name={"Carole Amani"}
          />
        </div>
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1670069605/medcy/client_3_geyan4.jpg"
            }
            text={
              "Application 100% ivoirienne , pour plus de santé à coeur et au coeur de l'humain  Un service client rapide et courtois"
            }
            name={"Maxime N'cho"}
          />
        </div>
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1670069605/medcy/doc_q9my7a.jpg"
            }
            text={
              "En téléconsultation, les médecins peuvent prescrire une ordonnance en ligne pour des médicaments, des examens médicaux ou des séances chez certains praticiens."
            }
            name={"Dr Irma Adepo"}
          />
        </div>
      </OwlCarousel>
    </section>
  );
}

function Research() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full mt-0.5 py-4 md:my-10">
      <div className="relative md:col-span-2">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1670093728/medcy/locau_de_medcy_metnrz.jpg"
          alt="medcy_local"
        />

        <div className="absolute mb-4 bottom-0 right-0 left-0 flex items-center rounded-lg shadow-xl bg-white w-96 p-3 mx-auto cursor-pointer">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1670101250/medcy/Capture_d_e%CC%81cran_2022-12-03_a%CC%80_20.59.48_dcpdqz.png"
            alt="doctors_icon"
            className="w-20 h-20 mx-3"
          />
          <div>
            <h1 className="font-bold text-2xl uppercase">+ 17</h1>
            <p className="text-medDarkGray">Participants</p>
          </div>
        </div>
      </div>
      <div className="bg-medDark text-white px-4 pt-5 md:pt-20 md:y-10">
        <h1 className="text-3xl uppercase">Nos recherches</h1>
        <div className="md:mt-10">
          <Method text={"Centre de recherche médicale"} />
          <Method text={"Centre de recherche technologique"} />
        </div>
      </div>
    </section>
  );
}

export function FourthPage() {
  return (
    <>
      {" "}
      <Testimony />
      <Research />
    </>
  );
}
