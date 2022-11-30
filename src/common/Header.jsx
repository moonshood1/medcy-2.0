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
        <a href="/#">Home</a>
        <a href="/#">Services</a>
        <a href="/#">Contact</a>
      </div>

      <div className="">
        <button className="hidden md:flex btn bg-medBlue text-white drop-shadow-2xl text-lg md:text-lg">
          S'inscrire maintenant{" "}
        </button>
      </div>

      <div className="flex md:hidden">
        <button className=" bg-medBlue text-white drop-shadow-xl rounded-lg py-2 px-3 text-sm  cursor-pointer text-center tracking-wider">
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
    </section>
  );
}
