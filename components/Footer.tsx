import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSkype } from "react-icons/fa";
import './ui/footer.css'

const Footer = () => {
  return (
    <footer className="footer section relative mt-40">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="footer-container container grid z-10">
        <div className="footer-text-content">
          <a
            href="#"
            className="footer-logo"
          >
            <span className="text-purple">LSOYS</span> Apps & Games
          </a>
          <p className="footer-description">
            We Bring Your Vision to Life, <br />
            Contact Us Today.
          </p>
          <p className="footer-description footer-description-contact">
                    Phone: <a href="tel:9977880066">9977 880066</a> <br />
                    Email: <a href="mailto:at@lsoysapps.com">at@lsoysapps.com</a>
                </p>
        </div>

        <div className="footer-content">
          <div>
            <h3 className="footer-title">Links</h3>
            <ul className="footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Survices</h3>
            <ul className="footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Web Dev
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  App Dev
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Game Dev
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Career</h3>
            <ul className="footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Opening 1
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Opening 2
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Opening 3
                </a>
              </li>
            </ul>
          </div>

          <div className="grid">
            <h3 className="footer-title social-footer-title">
              Follow Us
            </h3>
            
            <ul className="footer-social">
              <li className="footer-social-link">
                <a href="#" target="_blank">
                  <FaFacebookSquare />
                </a>
              </li>
              <li className="footer-social-link">
                <a href="#" target="_blank">
                  <FaLinkedin />
                </a>
              </li>
              <li className="footer-social-link">
                <a href="#" target="_blank">
                  <FaSquareXTwitter />
                </a>
              </li>
            </ul>

            <ul className="footer-social">
              <li className="footer-social-link">
                <a href="#" target="_blank">
                  <BiLogoInstagramAlt />
                </a>
              </li>
              <li className="footer-social-link">
                <a href="#" target="_blank">
                  <IoLogoYoutube />
                </a>
              </li>
              <li className="footer-social-link">
                <a href="#" target="_blank">
                  <FaSkype />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="footer-info container">
          <p className="footer-copy">
            © 2024 LSOYS. All rights reserved.
          </p>
          <div className="footer-privacy">
            <a
              href="#"
              className=""
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className=""
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
