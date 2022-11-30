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
            Company
          </h1>
          <div className="text-medDarkGray text-sm mt-5">
            <ul>
              <li className="my-2">About us</li>
              <li className="my-2">Blog</li>
              <li className="my-2">Services</li>
              <li className="my-2">Contact us</li>
            </ul>
          </div>
        </div>

        <div className="">
          <h1 className="hidden md:block text-white font-bold md:text-lg">
            Services
          </h1>
          <div className="text-medDarkGray text-sm mt-5">
            <ul>
              <li className="my-2">Career counseling</li>
              <li className="my-2">Relationship issues</li>
              <li className="my-2">Relationships</li>
              <li className="my-2">Sleep and insomnia</li>
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
            <button className="btn bg-medBlue text-white drop-shadow-2xl text-sm mt-5">
              Souscrire
            </button>
          </div>
        </div>
      </article>
      <article className="flex justify-between items-center mt-10 md:px-10  bottom-0">
        <div className="flex">
          <div className="mx-2 items-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <div className="h-6 w-6 bg-medBlue rounded-full text-white grid place-content-center">
                <img
                  src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669766739/medcy/59439_o6giof.png"
                  alt="facebook_link"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </div>
          <div className="mx-2 items-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <div className="h-6 w-6 bg-medBlue rounded-full text-white grid place-content-center">
                <img
                  src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669766890/medcy/logo-ig-instagram-icon-download-icons-12_cszstc.png"
                  alt="instagram_link"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </div>
          <div className="mx-2 items-center">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <div className="h-6 w-6 bg-medBlue rounded-full text-white grid place-content-center">
                <img
                  src="https://res.cloudinary.com/dhc0siki5/image/upload/v1669766954/medcy/733635_chidya.png"
                  alt="twitter_link"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </div>
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
