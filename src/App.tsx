import Countdown from './components/Countdown';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  const logo = 'src/assets/logo.png';

  return (
    <>
      <div className="h-fit overview-background pb-52">
        <Navbar />
        <div className="flex justify-between lg:mt-20">
          <h1 className="lg:ml-32 lg:max-w-md leading-snug text-[#3a4d27]">
            Vert un monde plus responsable
          </h1>
          <img className="lg:mr-32 lg:max-h-80 rounded-xl" src={logo} alt="Illustration de l'évennement" />
        </div>
      </div>
      <Countdown />
    </>
  );
}

export default App;
