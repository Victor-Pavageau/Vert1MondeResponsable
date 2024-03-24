function EventPresentation(): JSX.Element {
  return (
    <>
      <div className="flex justify-center mt-24">
        <h2 id="presentation" className="text-center">
          Présentation de l'évenement
        </h2>
      </div>
      <div className="mt-10 mx-10 lg:mx-60 text-sm lg:text-base flex flex-col gap-5 justify-center text-justify">
        <div className='font-bold text-xl'>
          🌿 Vert un monde responsable
        </div>
        <div>
          Vingt étudiants en dernière année d'un parcours d'ingénieur généraliste et informatique dans l'école CESI du campus de Bordeaux, se sont lancés le défi d'organiser un évènement de A à Z autour de l'ingénierie durable et des thématiques du monde de demain.
          Les étudiants proposent des ateliers sur différents thèmes avec des activités pratiques et ludiques dont la devise est d'apprendre en s'amusant !
        </div>
        <div className='font-bold text-xl'>
          🌍 Qu'est ce que l'ingénierie durable ?
        </div>
        <div>
          L'ingénierie durable est bien plus qu'une discipline, c'est une philosophie qui vise à créer des solutions innovantes tout en préservant notre planète. C'est l'art de concevoir, construire et innover tout en respectant les équilibres naturels. L'ingénierie durable façonne un monde où la technologie et la nature coexistent harmonieusement.
          Cette rencontre entre étudiants et le public permettra d'engager des discussions stimulantes sur l'avenir de l'ingénierie et son impact sur notre planète.
          Ensemble, faisons de l'ingénierie un moteur de changement positif pour notre planète. 🌏💙
        </div>
      </div>
    </>
  );
}

export default EventPresentation;