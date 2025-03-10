import linkedinLogo from 'images/footer/linkedinLogo.svg';
import facebookLogo from 'images/footer/facebookLogo.svg';
import instagramLogo from 'images/footer/instagramLogo.svg';
import logoFooter from 'images/footer/logoFooter.svg';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerContainer}`}>
        <img className={s.logoFooter} src={logoFooter} alt="logoFooter" />
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
            <li className={s.footerNavBarList__item}>
              <p className={s.footerNavBarList__itemDescription}>Про нас</p>
            </li>
            <li className={s.footerNavBarList__item}>
              <p className={s.footerNavBarList__itemDescription}>Товари</p>
            </li>
            <li className={s.footerNavBarList__item}>
              <p className={s.footerNavBarList__itemDescription}>Партнери</p>
            </li>
            <li className={s.footerNavBarList__item}>
              <p className={s.footerNavBarList__itemDescription}>Контакти</p>
            </li>
            <li className={s.footerNavBarList__item}>
              <p className={s.footerNavBarList__itemDescription}>Блог</p>
            </li>
          </ul>
              </nav>
              
              <h3 className={s.footerCopyrightTitle}>Всі права захищені © ANKONA 2025</h3>
              <p className={s.footerCopyrightDescription}>Використання матеріалів сайту можливе лише з письмового дозволу правовласника та із зазначенням активного посилання на джерело</p>
      </div>
    </footer>
  );
};

export default Footer;
