const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content bg-primary text-white text-center">
      <div>
        <p>
          Copyright © {year} -
          <span className="inline-block">
            All right reserved by Tsuku
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
