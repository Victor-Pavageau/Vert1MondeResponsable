function Map(): JSX.Element {
  return (
    <div className="mt-32 mx-32">
      <h2>
        Venez nous rendre visite
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727.8519078909577!2d-0.560802983108519!3d44.849366757590204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527d6c96fcb75%3A0x2cf11b39e4213f57!2sEcocycle%20Darwin!5e0!3m2!1sfr!2sfr!4v1707137631071!5m2!1sfr!2sfr"
        width="600"
        height="450"
        className="border-0 border-none w-full mt-10"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

export default Map;