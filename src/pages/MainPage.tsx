import { Link } from 'react-router-dom';
import { Contact, Countdown, Credit, EventPresentation, Navbar, WorkshopsList, Map } from '../components';
import { IoIosArrowDown } from 'react-icons/io';

function MainPage(): JSX.Element {
  return (
    <>
      <div className="overview-background h-screen flex flex-col">
        <Navbar />
        <div className="flex justify-center w-full lg:justify-between items-center lg:mt-20">
          <h1 className="text-center lg:text-start lg:ml-10 mt-14 lg:mt-0 xl:ml-32 lg:max-w-md xl:max-w-sm main-title w-full flex justify-center">
            Vert un monde responsable
          </h1>
          <img
            className="mr-10 xl:mr-32 hidden lg:flex lg:h-64 xl:h-72 rounded-xl"
            src='./assets/event_illustration.webp'
            alt="Illustration de l'évennement" />
        </div>
        <h2 className='mt-auto mb-7 w-full text-center text-3xl lg:text-5xl'>
          Mercredi 17 avril
        </h2>
        <h2 className='mb-12 w-full text-center text-3xl lg:text-4xl'>
          De 14h00 à 18h30
        </h2>
        <div className='mb-10'>
          <Link to='#presentation' className='text-[#465f2c] deconone'>
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
      <Credit />
    </>
  );
}

export default MainPage;
