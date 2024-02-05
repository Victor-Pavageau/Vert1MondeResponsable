import Countdown from './components/Countdown';
import EventDescription from './components/EventDescription';
import Navbar from './components/Navbar';
import WorkshopsList from './components/WorkshopsList';
import Map from './components/Map';

function App(): JSX.Element {
  return (
    <>
      <div className="h-fit overview-background pb-52">
        <Navbar />
        <div className="flex justify-between lg:mt-20">
          <h1 className="lg:ml-32 lg:max-w-md leading-snug text-[#325C72] main-title select-none">
            Vert un monde plus responsable
          </h1>
          <img className="lg:mr-32 lg:max-h-80 rounded-xl" src='https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg' alt="Illustration de l'évennement" />
        </div>
      </div>
      <Countdown />
      <EventDescription />
      <WorkshopsList />
      <Map />
    </>
  );
}

export default App;
