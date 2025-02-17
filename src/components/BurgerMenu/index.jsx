import React from 'react'
import styles from "./index.module.css"
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import logo from "./assets/logo.svg"
import slogan from "./assets/slogan.svg"
import icon from "./assets/icon.svg"
import { useNavigate } from 'react-router-dom';
const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate()
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      setIsMenuOpen(false)
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
  return (
    <div className={classNames(styles.sideBar, {
      [styles.slideSideBar]: isMenuOpen
    })}>
      <div className="flex flex-col gap-6 pl-[20%]">
        <Link to="/" className="uppercase" onClick={(e) => handleScrollToSection(e, '#about')}>[о нас]</Link>
        <Link to="/cases" className="uppercase">[кейсы]</Link>
        <Link to="/" className="uppercase" onClick={(e) => handleScrollToSection(e, '#services')}>[услуги]</Link>
        <Link to="/" className="uppercase" onClick={(e) => handleScrollToSection(e, '#footer')}>[контакты]</Link>
      </div>

      <div className="absolute bottom-6 left-5 right-5 flex justify-between items-center">
        <img src={logo} alt="" />
        <img src={slogan} alt="" />
        <img src={icon} alt="" />
      </div>
    </div>
  )
}

export default BurgerMenu

