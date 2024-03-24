import { FaRegEnvelope, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa6';

function Contact(): JSX.Element {
  const logoSize = 35;

  return (
    <div className="mt-24 text-white footer-background flex flex-col items-center">
      <div className="flex justify-center pt-12">
        <h2 id="contact" className="text-center">
          Nous contacter
        </h2>
      </div>
      <div className="pb-12 mt-10 flex justify-evenly w-full">
        <a className="flex justify-center gap-3 items-center hover-link text-white hover:text-[#465f2c]" href="mailto:vert1monderesponsable@gmail.com" rel="noopener noreferrer" target="_blank">
          <FaRegEnvelope size={logoSize} />
          <div className="hidden xl:flex">
            vert1monderesponsable@gmail.com
          </div>
        </a>
        <a className="flex justify-center gap-3 items-center hover-link text-white hover:text-[#465f2c]" href="https://www.instagram.com/vert1monderesponsable/" rel="noopener noreferrer" target="_blank">
          <FaInstagram size={logoSize} />
          <div className="hidden xl:flex">
            vert1monderesponsable
          </div>
        </a>
        <a className="flex justify-center gap-3 items-center hover-link text-white hover:text-[#465f2c]" href="https://www.linkedin.com/company/vert-un-monde-responsable/" rel="noopener noreferrer" target="_blank">
          <FaLinkedinIn size={logoSize} />
          <div className="hidden xl:flex">
            vert1monderesponsable
          </div>
        </a>
        <a className="flex justify-center gap-3 items-center hover-link text-white hover:text-[#465f2c]" href="https://www.facebook.com/vert.un.monde.responsable" rel="noopener noreferrer" target="_blank">
          <FaFacebookF size={logoSize} />
          <div className="hidden xl:flex">
            Vert un monde responsable
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;