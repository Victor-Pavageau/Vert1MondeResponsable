import { FaRegEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

function Contact(): JSX.Element {
  const logoSize = 35;

  return (
    <div className="mt-24 text-white footer-background">
      <div className="flex justify-center pt-12">
        <h2 id="contact">
          Nous contacter
        </h2>
      </div>
      <div className="pb-12 mt-10 mx-60 flex justify-evenly">
        <a className="flex gap-3 items-center hover-link text-white hover:text-[#465f2c]" href="mailto:vert1monderesponsable@gmail.com" rel="noopener noreferrer" target="_blank">
          <FaRegEnvelope size={logoSize} />
          vert1monderesponsable@gmail.com
        </a>
        <a className="flex gap-3 items-center hover-link text-white hover:text-[#465f2c]" href="https://www.instagram.com/vert1monderesponsable/" rel="noopener noreferrer" target="_blank">
          <FaInstagram size={logoSize} />
          vert1monderesponsable
        </a>
        <a className="flex gap-3 items-center hover-link text-white hover:text-[#465f2c]" href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
          <FaLinkedinIn size={logoSize} />
          vert1monderesponsable
        </a>
      </div>
    </div>
  );
}

export default Contact;