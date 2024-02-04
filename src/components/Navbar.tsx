function Navbar(): JSX.Element {
  const logo = 'src/assets/logo.png';

  return (
    <div className="w-full h-20 text-black">
      <img className="h-16 w-auto float-left ml-5 mt-2" src={logo} alt="Vert un monde responsable logo" />
      <div className="h-full flex justify-between align-middle items-center lg:mx-80">
        <div className="hover:bg-white p-2 rounded-xl cursor-pointer">
          L'évenement
        </div>
        <div className="hover:bg-white p-2 rounded-xl cursor-pointer">
          Les ateliers
        </div>
        <div className="hover:bg-white p-2 rounded-xl cursor-pointer">
          Le lieu
        </div>
        <div className="hover:bg-white p-2 rounded-xl cursor-pointer">
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;