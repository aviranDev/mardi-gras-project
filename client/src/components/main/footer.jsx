const Footer = () => {
  return (
    <footer className="footer container-fluid bg-dark text-white text-center py-2">
      <span>
        Mardi Gras Shop
        <img className="logo-img" src="./img/logo.png" alt="" />
      </span>
      <span className="ms-2">&copy;</span>

      <span className="ms-2">{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
