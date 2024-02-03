function Navbar(): JSX.Element {
  const logo = 'src/assets/logo.png';

  return (
    <div className="w-screen h-20 text-black">
      <img className="h-16 w-auto float-left ml-5 mt-2" src={logo} alt="Vert un monde responsable logo" />
      <div className="h-full flex justify-between align-middle items-center lg:mx-80">
        <div>
          L'évennement
        </div>
        <div>
          Le lieu
        </div>
        <div>
          Les ateliers
        </div>
        <div>
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;