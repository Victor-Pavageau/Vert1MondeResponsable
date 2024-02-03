import Navbar from './components/Navbar';

function App(): JSX.Element {
  const logo = 'src/assets/logo.png';

  return (
    <div className="h-screen w-screen overview-background">
      <Navbar />
      <div className="flex justify-between lg:mt-20">
        <h1 className="lg:ml-32 lg:max-w-md leading-relaxed text-[#334225]">
          Vert un monde plus responsable
        </h1>
        <img className="lg:mr-32 lg:max-w-md leading-relaxed text-[#334225] rounded-xl" src={logo} alt="Illustration de l'évennement" />
      </div>
    </div>
  );
}

export default App;
