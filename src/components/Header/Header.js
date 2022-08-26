import style from './Header.module.scss';
import logo from './../../assets/images/logo.jpg';
import classNames from 'classnames/bind';

const cx = classNames.bind(style)

function Header(){
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('flex')}>
                    <img src={logo} className={cx('logo')}></img>
                    <h2>TheThem</h2>
                </div>
                <div>menu</div>
            </div>
        </header>

    )
}

export  default Header;