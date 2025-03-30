import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import linkedinLogo from 'images/footer/linkedinLogo.svg';
import facebookLogo from 'images/footer/facebookLogo.svg';
import instagramLogo from 'images/footer/instagramLogo.svg';
import logoFooter from 'images/footer/logoFooter.svg';
import s from './Footer.module.scss';

const Footer = props => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerContainer}`}>
        <div className={s.footerContainerDesktop}>
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
                href="https://www.facebook.com/"
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
                href="https://www.instagram.com/"
              >
                <img
                  className={s.footerSocailMediaList__itemLogo}
                  src={instagramLogo}
                  alt="instagramLogo"
                />
              </a>
            </li>
          </ul>

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
                  Про нас
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
                  Товари
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
                  Торгові марки
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
                  Команда
                </li>
              </Link>
              <li className={s.footerBarList__item}>
                <RouterLink
                  onClick={() => props.isMobile && props.closeMobileMenu()}
                  className={s.footerBarList__itemDescription}
                  to="/blog"
                >
                  Блог
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={s.privacyContainer}>
          <h3 className={s.footerCopyrightTitle}>
            Всі права захищені © ANKONA 2025
          </h3>
          <p className={s.footerCopyrightDescription}>
            Використання матеріалів сайту можливе лише з письмового дозволу
            правовласника та із зазначенням активного посилання на джерело
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
