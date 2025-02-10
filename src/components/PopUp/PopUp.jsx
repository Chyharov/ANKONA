import React from 'react';
import s from './PopUp.module.scss';

const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={s.PopUpOverlay} onClick={onClose}>
      <div className={s.PopUpContent} onClick={e => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>Для отримання консультації</h2>
        <p>Заповніть інформацію нижче та ми зв’яжемося з Вами</p>

        <form>
          <label>
            Як до Вас звертатися?
            <input type="text" placeholder="ПІБ" required />
          </label>

          <label>
            Ваш номер телефону
            <input type="tel" placeholder="+38 (000) 000 00 00" required />
          </label>

          <label>
            Ваше повідомлення
            <textarea placeholder="Напишіть коротко про Ваше тваринництво та що Вас цікавить"></textarea>
          </label>

          <button type="submit" className={s.submitButton}>
            Відправити заявку
          </button>
        </form>

        <p className={s.privacyText}>
          Відправляючи свої дані Ви автоматично погоджуєтеся з{' '}
          <a href="/privacy-policy" className={s.privacyLink}>
            політикою конфіденційності
          </a>
        </p>
        <p className={s.teamText}>
          *Для контакту з безпосереднім спеціалістом розгляньте розділ{' '}
          <a href="/team">"Наша команда"</a>
        </p>
      </div>
    </div>
  );
};

export default PopUp;
