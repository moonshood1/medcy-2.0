import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

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
        loop
        autoplaySpeed={4000}
        // navSpeed={2000}
      >
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1669719788/medcy/2_kxisw1.jpg"
            }
            text={
              "Très bonne application franchement , qualité , rapidité et efficacité"
            }
            name={"Lucas Paqueta"}
          />
        </div>
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1669719786/medcy/1_nhj3dz.jpg"
            }
            text={
              " Je suis tres surpris par cette application , je ne pensais pas que je pouvais faire une consultation directement en ligne .Très bonne application franchement "
            }
            name={"Carole Quitaine"}
          />
        </div>
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1669719788/medcy/3_mhe2y5.jpg"
            }
            text={
              "Application 100% ivoirienne , pour plus de santé à coeur et au coeur de l'humain  Un service client rapide et courtois"
            }
            name={"Julien Chiaise"}
          />
        </div>
        <div>
          <Card
            imgUrl={
              "https://res.cloudinary.com/dhc0siki5/image/upload/v1660729348/medcy/smiling-afro-muslim-female-doctor-with-clipboard-p-2021-08-30-02-25-18-utc_ntqj4i.jpg"
            }
            text={
              "En téléconsultation, les médecins peuvent prescrire une ordonnance en ligne pour des médicaments, des examens médicaux ou des séances chez certains praticiens."
            }
            name={"Kratos"}
          />
        </div>
      </OwlCarousel>
    </section>
  );
}

function Research() {
  return <section className="w-full mt-0.5 py-4"></section>;
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
