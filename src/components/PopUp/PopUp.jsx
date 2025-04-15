import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import emailjs from '@emailjs/browser';
import closeIcon from 'images/hero/closeIcon.svg';
import translations from 'components/LanguageSelect/translations';
import s from './PopUp.module.scss';

const PopUp = ({ isOpen, onClose, isMobile, closeMobileMenu, language }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

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

  const handleScrollToTeam = () => {
    scroller.scrollTo('team', {
      smooth: true,
      offset: -70,
      duration: 500,
    });
    if (isMobile) closeMobileMenu();
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_ieq508t',
        'template_s8hk2um',
        {
          name,
          phone,
          message,
        },
        '2o-9qTjArOmik1Uyz'
      )
      .then(() => {
        setStatus('success');
        setName('');
        setPhone('');
        setMessage('');
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const t = translations.popup[language];
  if (!isOpen) return null;

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
        <p className={s.popUpDescription}>{t.description}</p>
        <div className={s.popUpDescription__border}></div>

        <form className={s.popUpForm} onSubmit={handleSubmit}>
          <label>
            <p className={s.labelTitle}>{t.phnametitle}</p>
            <input
              className={s.popUplabel}
              type="text"
              placeholder={t.phname}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>

          <label>
            <p className={s.labelTitle}>{t.phphonetitle}</p>
            <input
              className={s.popUplabel}
              type="tel"
              placeholder="+38 (000) 000 00 00"
              value={phone}
              onChange={e => {
                let value = e.target.value;
                if (!value.startsWith('+')) {
                  value = '+' + value.replace(/[^0-9]/g, '');
                }
                setPhone(value);
              }}
              required
            />
          </label>

          <label>
            <p className={s.labelTitle}>{t.phmessagetitle}</p>
            <textarea
              className={s.popUplabel}
              style={{ minHeight: '96px', marginBottom: '16px' }}
              placeholder={t.phmessage}
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </label>

          <button className={s.submitButton} type="submit" disabled={isSending}>
            {isSending ? t.btnsend : t.btnsubmit}
          </button>

          {status === 'success' && <p className={s.success}>{t.responsok}</p>}
          {status === 'error' && <p className={s.error}>{t.responsbad}</p>}
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
