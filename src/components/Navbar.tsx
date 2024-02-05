function Navbar(): JSX.Element {
  const logo = 'src/assets/logo.png';

  return (
    <div className="w-full h-20 text-black">
      <img className="h-24 w-auto float-left ml-5 mt-2" src={logo} alt="Vert un monde responsable logo" />
      <div className="h-full flex justify-between align-middle items-center lg:mx-80">
        <div className="hover-link">
          L'évenement
        </div>
        <div className="hover-link">
          Les ateliers
        </div>
        <div className="hover-link">
          Le lieu
        </div>
        <div className="hover-link">
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;