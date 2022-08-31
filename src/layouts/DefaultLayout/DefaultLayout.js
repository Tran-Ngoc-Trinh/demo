import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';

const cx = classNames.bind(styles)

function DefaultLayout({children}){
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;