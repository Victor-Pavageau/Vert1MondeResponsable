import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar(): JSX.Element {
  const logo = 'src/assets/logo.png';
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="w-full h-20 text-black">
      <img className="h-24 w-auto float-left ml-5 mt-2" src={logo} alt="Vert un monde responsable logo" />
      <div className="h-full flex justify-between align-middle items-center lg:mx-80">
        <a className="hover-link text-black" href="#presentation">
          L'évenement
        </a>
        <a className="hover-link text-black" href="#ateliers">
          Les ateliers
        </a>
        <a className="hover-link text-black" href="#lieu">
          Le lieu
        </a>
        <a className="hover-link text-black" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;