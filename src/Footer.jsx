export default function Footer() {
  return (
    <div>
      <div
        className="footer bg-slate-900 py-5 mx-auto"
        style={{ zIndex: 100, position: "relative" }}
      >
        <p className="footer-tagline text-white font-medium text-center">
          Connect with me
        </p>

        <ul className="socials-container flex gap-x-4 justify-center my-3">
          <li>
            <a href="mailto:tanishqsoni0309@gmail.com" target="_blank">
              <i className="fa-solid fa-envelope socials-icon text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/tanishqsoni24" target="_blank">
              <i className="fa-brands fa-github socials-icon  text-white"></i>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/tanishqsoni/" target="_blank">
              <i className="fa-brands fa-linkedin socials-icon  text-white"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/TanishqSoni__" target="_blank">
              <i className="fa-brands fa-twitter socials-icon  text-white"></i>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/aa_tanishq_03/" target="_blank">
              <i className="fa-brands fa-instagram socials-icon  text-white"></i>
            </a>
          </li>
        </ul>

        <hr className="horizontal-line"></hr>
        <p className="copyright text-gray-400 text-center text-xs mt-4 mb-2">
          Copyright &copy;2024 Tanishq Soni
        </p>
      </div>
    </div>
  );
}
