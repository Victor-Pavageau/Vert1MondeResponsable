import { FaRegEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

function Contact(): JSX.Element {
  const logoSize = 35;

  return (
    <div className="mt-24 text-white footer-background">
      <div className="flex justify-center pt-12">
        <h2>
          Nous contacter
        </h2>
      </div>
      <div className="pb-12 mt-10 mx-60 flex justify-evenly">
        <div className="flex gap-3 items-center hover-link hover:text-[#465f2c]">
          <FaRegEnvelope size={logoSize} />
          vert1monderesponsable@gmail.com
        </div>
        <div className="flex gap-3 items-center hover-link hover:text-[#465f2c]">
          <FaInstagram size={logoSize} />
          vert1monderesponsable
        </div>
        <div className="flex gap-3 items-center hover-link hover:text-[#465f2c]">
          <FaLinkedinIn size={logoSize} />
          vert1monderesponsable
        </div>
      </div>
    </div>
  );
}

export default Contact;