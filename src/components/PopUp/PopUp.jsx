import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import closeIcon from 'images/hero/closeIcon.svg';
import translations from 'components/LanguageSelect/translations';
import s from './PopUp.module.scss';

const PopUp = ({ isOpen, onClose, isMobile, closeMobileMenu, language }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(s.noScroll);
    } else {
      document.body.classList.remove(s.noScroll);
    }

    return () => {
      document.body.classList.remove(s.noScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleScrollToTeam = () => {
    scroller.scrollTo('team', {
      smooth: true,
      offset: -70,
      duration: 500,
    });
    if (isMobile) closeMobileMenu();
  };

  const t = translations.popup[language];

  return (
    <div className={s.popUpOverlay} onClick={onClose}>
      <div className={s.popUpContent} onClick={e => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          <img
            className={s.closeIcon}
            src={closeIcon}
            alt="closeIcon"
            aria-label="закрити заявку"
          />
        </button>
        <h2 className={s.popUpTitle}>{t.title}</h2>
        <p className={s.popUpDescription}>
          {t.description}
        </p>
        <div className={s.popUpDescription__border}></div>

        <form className={s.popUpForm}>
          <label>
            <p className={s.labelTitle}>{t.phnametitle}</p>
            <input
              className={s.popUplabel}
              type="text"
              placeholder={t.phname}
              required
            />
          </label>

          <label>
            <p className={s.labelTitle}>{t.phphonetitle}</p>
            <input
              className={s.popUplabel}
              type="tel"
              placeholder="+38 (000) 000 00 00"
              required
            />
          </label>

          <label>
            <p className={s.labelTitle}>{t.phmessagetitle}</p>
            <textarea
              className={s.popUplabel}
              style={{ minHeight: '96px', marginBottom: '16px' }}
              placeholder={t.phmessage}
            ></textarea>
          </label>

          <button
            className={s.submitButton}
            type="submit"
            aria-label="Відправити заявку"
          >
            {t.btnsubmit}
          </button>
        </form>

        <div className={s.privacyContainer}>
          <p className={s.privacyText} style={{ marginBottom: '8px' }}>
            {t.privacymessage}{' '}
            <RouterLink
              to="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={s.privacyLink}
            >
              {t.privacymessagelink}
            </RouterLink>
          </p>
          <p className={s.privacyText}>
            {t.contactwithteam}{' '}
            <span className={s.privacyLink} onClick={handleScrollToTeam}>
              {t.contactwithteamspan}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;