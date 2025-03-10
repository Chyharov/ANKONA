import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerContainer}`}>
        <h2>Footer</h2>
      </div>
    </footer>
  );
};

export default Footer;
