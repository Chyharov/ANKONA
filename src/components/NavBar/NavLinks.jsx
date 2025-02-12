import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import s from './NavBar.module.scss';

const NavLinks = props => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 767) {
      return 'mobile';
    } else if (width >= 768 && width <= 1359) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  const getOffsetByDeviceType = () => {
    const deviceType = getDeviceType();
    if (deviceType === 'mobile') {
      return -90;
    } else if (deviceType === 'tablet') {
      return -160;
    } else {
      return -180;
    }
  };

  return (
    <div className={s.bgShadow}>
      <div className={'container ' + s.menuList__container}>
        <ul className={s.menu__list}>
          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="/"
            spy={true}
            smooth={true}
            offset={getOffsetByDeviceType()}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.05 }}
              className={s.menu__list_item}
            >
              Про нас
            </motion.li>
          </Link>

          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="/about"
            spy={true}
            smooth={true}
            offset={getOffsetByDeviceType()}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.1 }}
              className={s.menu__list_item}
            >
              Товари
            </motion.li>
          </Link>

          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="/ritualgoods"
            spy={true}
            smooth={true}
            offset={getOffsetByDeviceType()}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
              className={s.menu__list_item}
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              Торгові марки
            </motion.li>
          </Link>

          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="/ritualtransport"
            spy={true}
            smooth={true}
            offset={getOffsetByDeviceType()}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.3 }}
              className={s.menu__list_item}
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              Команда
            </motion.li>
          </Link>

          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className={s.menu__list_link}
            to="/ritualservices"
            spy={true}
            smooth={true}
            offset={getOffsetByDeviceType()}
            duration={500}
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.4 }}
              className={s.menu__list_item}
            >
              Блог
            </motion.li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
