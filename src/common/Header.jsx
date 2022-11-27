export function Header() {
  return (
    <div className="h-24 md:h-28 bg-gray-100 w-full md:grid md:grid-cols-3">
      <div className="">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1667909496/medcy/Logo_Medcy_gjxwkz.png"
          alt="medcy_logo"
          className="max-h-28 md:max-h-32 ml-5 md:ml-24"
        />
      </div>
      <div className="hidden md:flex text-gray-400 md:text-xl md:space-x-11 mt-auto mb-auto">
        <a href="/#">Home</a>
        <a href="/#">Services</a>
        <a href="/#">Contact</a>
      </div>
      <div className="hidden md:flex md:ml-32 mt-auto mb-auto">
        <button className="btn bg-medBlue text-white">
          S'inscrire maintenant{" "}
        </button>
      </div>
    </div>
  );
}
