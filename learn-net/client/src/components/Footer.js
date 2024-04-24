import "../styles/Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <p>&copy;{year} CTRL-ALT-ELITE</p>
    </div>
  );
};

export default Footer;
