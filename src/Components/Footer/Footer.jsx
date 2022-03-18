export const Footer = () => {
  return (
    <div class="footer flex-center-column">
      <div class="message fnt-1-2 text-center">
        Made By <span class="theme-color">Ashish</span> Kumar
      </div>
      <div class="social-links mar-t-1 flex-center-row gap-1-5">
        <button class="fnt-2">
          <a
            href="https://www.linkedin.com/in/ashish-kumar-41a205163/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="footer-icon fab fa-linkedin"></i>
          </a>
        </button>
        <button class="fnt-2">
          <a
            href="https://twitter.com/ASHISHK15345275"
            target="_blank"
            rel="noreferrer"
          >
            <i class="footer-icon fab fa-twitter"></i>
          </a>
        </button>
        <button class="fnt-2">
          <a
            href="https://github.com/ashishnnnnn/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="footer-icon fab fa-github"></i>
          </a>
        </button>
      </div>
    </div>
  );
};
