import style from './Header.module.scss';
import logo from './../../assets/images/logo192.png'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faRightToBracket, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faThemeco } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';

const cx = classNames.bind(style)

function Header(){
    // menu
    const menu = ['Home','About','Themes','Login']
    const li = menu.map((menu, index) => {
        return <li key={index}>
            <Link to="/">
                <FontAwesomeIcon icon={index===0 ? faHouse : index===1 ? faAddressCard : index===2 ? faThemeco : faRightToBracket }>
                </FontAwesomeIcon>
                &nbsp;{menu}
                {menu==='Themes' ? <FontAwesomeIcon icon={faAngleDown}/> : null }
            </Link>
        </li>
    })

    // show icon menu
    const ref = useRef(false)
    const show = () => {
        if (ref.current){
            document.getElementById('show-menu').style.display = 'none';
            ref.current = false;
        }
        else{
            document.getElementById('show-menu').style.display = 'block';
            ref.current = true;
        }
    }

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="logo" className={cx('logo')}></img>
                        <h3>TheThem</h3>
                    </div>
                    <div className={cx('menu')}>
                        <ul>
                           {li}
                        </ul>
                    </div>
                    <div className={cx('icon-menu')} onClick={show}>
                        <FontAwesomeIcon icon={faBars } className={cx('icon')}/>
                    </div>
                </div>
            </header>
            <div className={cx('show-menu')} id='show-menu'>
                <ul>
                    {li}
                </ul>
            </div>
        </>

    )
}

export  default Header;