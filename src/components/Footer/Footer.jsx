import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import linkedinLogo from 'images/footer/linkedinLogo.svg';
import facebookLogo from 'images/footer/facebookLogo.svg';
import instagramLogo from 'images/footer/instagramLogo.svg';
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import logoFooter from 'images/footer/logoFooter.svg';
import translations from 'components/LanguageSelect/translations';
import s from './Footer.module.scss';

const Footer = ({ language, ...props }) => {
  const t = translations.navlink[language];
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerContainer}`}>
        <div className={s.footerContainerDesktop}>
          <div className={s.footerContainerForTablet}>
<RouterLink to="/" className={s.linkLogo}>
            <img className={s.logoFooter} src={logoFooter} alt="logoFooter" />
          </RouterLink>

          <ul className={s.footerSocailMediaList}>
            <li className={s.footerSocailMediaList__item}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/"
              >
                <img
                  className={s.footerSocailMediaList__itemLogo}
                  src={linkedinLogo}
                  alt="linkedinLogo"
                />
              </a>
            </li>
            <li className={s.footerSocailMediaList__item}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/share/15F5iGRTb5/?mibextid=wwXIfr"
              >
                <img
                  className={s.footerSocailMediaList__itemLogo}
                  src={facebookLogo}
                  alt="facebookLogo"
                />
              </a>
            </li>
            <li className={s.footerSocailMediaList__item}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ankona.com.ua?igsh=Zms0Mm5tN3E2ejJy"
              >
                <img
                  className={s.footerSocailMediaList__itemLogo}
                  src={instagramLogo}
                  alt="instagramLogo"
                />
              </a>
            </li>
            <li className={s.footerSocailMediaList__itemTikTok}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@ankona.com.ua?_t=ZM-8vd96jTVLyZ&_r=1"
              >
                <AiFillTikTok className={s.footerSocailMediaList__itemLogoTikTok} alt="tikTokLogo" />
              </a>
            </li>
            <li className={s.footerSocailMediaList__itemYouTube}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com/@ankona-com-ua?si=hAdfgIWRssDhmvht"
              >
                <FaYoutube className={s.footerSocailMediaList__itemLogoYouTube} alt="tikTokLogo" />
              </a>
            </li>
            
          </ul>
          </div>
          

          <nav className={s.footerNavBarList}>
            <ul className={s.footerBarList}>
              <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className={s.footerBarList__item}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                  className={s.footerBarList__itemDescription}
                >
                  {t.about}
                </li>
              </Link>
              <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className={s.footerBarList__item}
                to="goods"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                  className={s.footerBarList__itemDescription}
                >
                  {t.goods}
                </li>
              </Link>
              <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className={s.footerBarList__item}
                to="tradeMarks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                  className={s.footerBarList__itemDescription}
                >
                  {t.tradeMarks}
                </li>
              </Link>
              <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className={s.footerBarList__item}
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                  className={s.footerBarList__itemDescription}
                >
                  {t.team}
                </li>
              </Link>
              <li className={s.footerBarList__item}>
                <RouterLink
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={s.footerBarList__itemDescription}
                  to="/blog"
                >
                 {t.blog}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={s.privacyContainer}>
          <h3 className={s.footerCopyrightTitle}>
            {t.reserved}
          </h3>
          <p className={s.footerCopyrightDescription}>
            {t.reservedDescription}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
