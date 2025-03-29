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
        <RouterLink to="/">
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

        <nav>
          <ul className={s.footerNavBarList}>
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.footerNavBarList__item}
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
                className={s.footerNavBarList__itemDescription}
              >
                Про нас
              </li>
            </Link>
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.footerNavBarList__item}
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
                className={s.footerNavBarList__itemDescription}
              >
                Товари
              </li>
            </Link>
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.footerNavBarList__item}
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
                className={s.footerNavBarList__itemDescription}
              >
                Торгові марки
              </li>
            </Link>
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.footerNavBarList__item}
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
                className={s.footerNavBarList__itemDescription}
              >
                Команда
              </li>
            </Link>
            <li className={s.footerNavBarList__item}>
              <RouterLink
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className={s.footerNavBarList__itemDescription}
                to="/blog"
              >
                Блог
              </RouterLink>
            </li>
          </ul>
        </nav>

        <h3 className={s.footerCopyrightTitle}>
          Всі права захищені © ANKONA 2025
        </h3>
        <p className={s.footerCopyrightDescription}>
          Використання матеріалів сайту можливе лише з письмового дозволу
          правовласника та із зазначенням активного посилання на джерело
        </p>
      </div>
    </footer>
  );
};

export default Footer;
