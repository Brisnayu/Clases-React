export const socialLogos = [
  { link: "http://www.facebook.com", src: "facebook", alt: "facebook" },
  { link: "http://github.com", src: "github", alt: "github" },
];

const Footer = () => {
  return (
    <footer>
      <ul>
        {socialLogos.map((logo, idx) => (
          <li key={idx}>
            <a href={logo.link}>
              <img src={logo.src} alt={logo.alt} />
            </a>
          </li>
        ))}
      </ul>
      <p>Creado con amor por Brisna Paez <span rol="img">😀</span></p>
    </footer>
  );
};

export default Footer;