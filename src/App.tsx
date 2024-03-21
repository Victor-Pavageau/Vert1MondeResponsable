import { Link } from 'react-router-dom';
import { Contact, Countdown, EventPresentation, Navbar, WorkshopsList, Map } from './components';
import { IoIosArrowDown } from 'react-icons/io';

function App(): JSX.Element {
  return (
    <>
      <div className="overview-background h-screen flex flex-col">
        <Navbar />
        <div className="flex justify-center w-full lg:justify-between items-center lg:mt-20">
          <h1 className="text-center lg:text-start lg:ml-10 mt-14 lg:mt-0 xl:ml-32 lg:max-w-md xl:max-w-sm main-title w-full flex justify-center">
            Vert un monde responsable
          </h1>
          <img
            className="mr-10 xl:mr-32 hidden lg:flex lg:max-h-56 xl:max-h-64 rounded-xl"
            src='https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg'
            alt="Illustration de l'évennement" />
        </div>
        <h2 className='mt-auto mb-10 w-full text-center'>
          Mercredi 17 avril à 14h00 à Darwin
        </h2>
        <div className='mb-28'>
          <Link to='#presentation' className='text-[#465f2c]'>
            <div className='w-full flex gap-2 text-center align-middle justify-center'>
              <IoIosArrowDown size={25} className='animate-bounce mt-2' />
              <h4>
                En savoir plus
              </h4>
              <IoIosArrowDown size={25} className='animate-bounce mt-2' />
            </div>
          </Link>
        </div>
      </div>
      <EventPresentation />
      <Countdown />
      <WorkshopsList />
      <Map />
      <Contact />
    </>
  );
}

export default App;
