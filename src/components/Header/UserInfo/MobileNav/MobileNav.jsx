import { useDispatch } from 'react-redux';
import { FiCornerDownLeft } from "react-icons/fi";
import Burger from "../Burger/Burger";
import { logoutUser } from 'redux/auth/auth-operation';
import s from "./MobileNav.module.scss"

const MobileNav = () => {
  const dispatch = useDispatch();

  return (
    <div className={ s.mobileNav }>
      <button className={ s.btnBack }><FiCornerDownLeft size="25px" /></button>
      <div className={ s.mobileNavInfo }>
        <div className={ s.mobileNavName }>Name</div>
        <button className={ s.btnLogout } type="button" onClick={ () => dispatch(logoutUser()) }>Exit</button>
        <Burger />
      </div>
    </div>
  );
}

export default MobileNav;
