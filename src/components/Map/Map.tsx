function Map(): JSX.Element {
  return (
    <div className="mt-24 lg:mx-32 mx-10 ">
      <div className="flex justify-center">
        <h2 id="lieu" className="text-center">
          Venez nous rendre visite
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.1566811383864!2d-0.5622191345273478!3d44.849534628333735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55278f7241363f%3A0x5cc17e265bd8fae7!2sSHOP%20SAUVAGES%20-%20Organic%20Dealers%20-%20DARWIN!5e0!3m2!1sfr!2sfr!4v1707138399988!5m2!1sfr!2sfr"
        width="600"
        height="450"
        title='Event Map'
        className="border-0 border-none w-full mt-10"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

export default Map;