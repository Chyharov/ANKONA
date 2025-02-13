import React, { useEffect } from 'react';
import closeIcon from 'images/hero/closeIcon.svg';
import s from './PopUp.module.scss';

const PopUp = ({ isOpen, onClose }) => {
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
        <h2 className={s.popUpTitle}>Для отримання консультації</h2>
        <p className={s.popUpDescription}>
          Заповніть інформацію нижче та ми зв’яжемося з Вами
        </p>
        <div className={s.popUpDescription__border}></div>

        <form>
          <label>
            <p className={s.labelTitle}>Як до Вас звертатися?</p>
            <input
              className={s.popUplabel}
              type="text"
              placeholder="ПІБ"
              required
            />
          </label>

          <label>
            <p className={s.labelTitle}>Ваш номер телефону</p>
            <input
              className={s.popUplabel}
              type="tel"
              placeholder="+38 (000) 000 00 00"
              required
            />
          </label>

          <label>
            <p className={s.labelTitle}>Ваше повідомлення</p>
            <textarea
              className={s.popUplabel}
              style={{ minHeight: '96px', marginBottom: '16px' }}
              placeholder="Напишіть коротко про Ваше тваринництво та що Вас цікавить"
            ></textarea>
          </label>

          <button
            className={s.submitButton}
            type="submit"
            aria-label="Відправити заявку"
          >
            Відправити заявку
          </button>
        </form>

        <div className={s.privacyContainer}>
          <p className={s.privacyText} style={{marginBottom: '8px'}}>
            Відправляючи свої дані Ви автоматично погоджуєтеся з{' '}
            <a className={s.privacyLink} href="/privacy-policy">
              політикою конфіденційності
            </a>
          </p>
          <p className={s.privacyText}>
            *Для контакту з безпосереднім спеціалістом розгляньте розділ{' '}
            <a className={s.privacyLink} href="/team">
              "Наша команда"
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
