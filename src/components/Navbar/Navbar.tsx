import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHotel, FaPhone } from 'react-icons/fa6';
import { GiHutsVillage } from 'react-icons/gi';
import { MdLocationPin } from 'react-icons/md';

function Navbar(): JSX.Element {
  const location = useLocation();
  const logo = '../../src/assets/logo.png';
  const logoSize = 20;

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
      <img className="h-16 lg:h-24 w-auto float-left ml-5 mt-2" src={logo} alt="Vert un monde responsable logo" />
      <div className="h-full flex justify-evenly md:justify-between align-middle items-center md:mx-40 xl:mx-80">
        <a className="hover-link text-black flex gap-3 items-center" href="#presentation">
          <FaHotel size={logoSize} />
          <div className="hidden lg:flex">
            L'évenement
          </div>
        </a>
        <a className="hover-link text-black flex gap-3 items-center" href="#ateliers">
          <GiHutsVillage size={logoSize + 10} />
          <div className="hidden lg:flex">
            Les ateliers
          </div>
        </a>
        <a className="hover-link text-black flex gap-3 items-center" href="#lieu">
          <MdLocationPin size={logoSize + 5} />
          <div className="hidden lg:flex">
            Le lieu
          </div>
        </a>
        <a className="hover-link text-black flex gap-3 items-center" href="#contact">
          <FaPhone size={logoSize} />
          <div className="hidden lg:flex">
            Contact
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;