import React, {useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTranslation } from "react-i18next";
import Logo from '../../Assets/Images/logo.png'
import { ThemeContext } from "../../Context/ThemeContext";

export const NavBar = () => {

  const { t, i18n } = useTranslation();
  const { theme, activeTheme, setActiveTheme } = useContext(ThemeContext);
  
  return (

    <Navbar variant="dark" bg={theme.backgroundColor === "black" ? "dark" : "light"} className="mb-5">
      <Navbar.Brand to="/"> <img src={Logo} alt="logo" className="logo"></img> </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <ButtonGroup>
          <DropdownButton as={ButtonGroup} title={t('ChangeLanguage')} variant="secondary">
            <Dropdown.Item eventKey="1" onClick={() => i18n.changeLanguage("es")}> {t('Spanish')}</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => i18n.changeLanguage("en")}>{t('English')}</Dropdown.Item>
          </DropdownButton>
          <Button variant={theme.backgroundColor === "black" ? "light" : "dark"} onClick={() => setActiveTheme(!activeTheme)}>{t('Theme')}</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Navbar>

  )
}
