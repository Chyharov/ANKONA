import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import translations from "components/LanguageSelect/translations";
import s from './NavBar.module.scss';

const NavLinks = ({ language, ...props }) => {
  const t = translations.navlink[language];
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className={s.bgShadow}>
      <div className={'container ' + s.menuList__container}>
        <ul className={s.menu__list}>
          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.05 }}
              className={s.menu__list_item}
            >
              {t.about}
            </motion.li>
          </Link>

          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="goods"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.1 }}
              className={s.menu__list_item}
            >
              {t.goods}
            </motion.li>
          </Link>

          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="tradeMarks"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
              className={s.menu__list_item}
            >
              {t.tradeMarks}
            </motion.li>
          </Link>

          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.3 }}
              className={s.menu__list_item}
            >
              {t.team}
            </motion.li>
          </Link>

          <RouterLink
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="/blog"
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.4 }}
              className={s.menu__list_item}
            >
              {t.blog}
            </motion.li>
          </RouterLink>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
