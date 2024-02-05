import Countdown from './components/Countdown';
import EventPresentation from './components/EventPresentation';
import Navbar from './components/Navbar';
import WorkshopsList from './components/WorkshopsList';
import Map from './components/Map';
import Contact from './components/Contact';

function App(): JSX.Element {
  return (
    <>
      <div className="h-fit overview-background pb-64">
        <Navbar />
        <div className="flex justify-center w-full lg:justify-between items-center lg:mt-20">
          <h1 className="text-center lg:text-start lg:ml-10 mt-14 lg:mt-0 xl:ml-32 lg:max-w-md xl:max-w-sm leading-snug text-[#325C72] main-title select-none w-full flex justify-center">
            Vert un monde plus responsable
          </h1>
          <img className="mr-10 xl:mr-32 hidden lg:flex lg:max-h-56 xl:max-h-64 rounded-xl" src='https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg' alt="Illustration de l'évennement" />
        </div>
      </div>
      <Countdown />
      <EventPresentation />
      <WorkshopsList />
      <Map />
      <Contact />
    </>
  );
}

export default App;
