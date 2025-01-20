import { Link } from 'react-router-dom';
import s from './ComponentForMainPage.module.scss';


const componentForMainPage = () => {

  return (
    <section className={s.sectioncomponentForMainPage}>
      <div className={'container ' + s.componentForMainPage__container}>
        <h1 className={s.componentForMainPageTitle}>componentForMainPage</h1>
        <Link className={s.header__linkBack} to="/SecondPage">to SecondPage</Link>
      </div>
    </section>
  )
};

export default componentForMainPage;
