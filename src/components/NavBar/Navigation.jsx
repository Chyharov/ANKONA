import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'

const Navigation = ({language}) => {
    return ( 
        <nav className={s.navigation}>
            <NavLinks language={language}/>
        </nav>
        
     );
}
 
export default Navigation;