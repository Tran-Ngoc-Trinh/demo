import classNames from "classnames/bind";
import style from './Home.module.scss';
import image_amongus from './../../assets/images/amongus.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(style)

function Home(){
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content1')}>
                    <div>
                        <label>WELCOME TO MY SITE</label>
                    </div>
                    <div>
                        <br/>
                        <p>The page will reload when you make changes.
                        You may also see any lint errors in the console. The page will reload when you make changes.
                        You may also see any lint errors in the console. The page will reload when you make changes.
                        You may also see any lint errors in the console. The page will reload when you make changes.
                        You may also see any lint errors in the console.
                        </p>
                        <br/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} className={cx('icons')}/>
                        <FontAwesomeIcon icon={faInstagram} className={cx('icons')}/>
                        <FontAwesomeIcon icon={faYoutube} className={cx('icons')}/>
                        <FontAwesomeIcon icon={faGithub} className={cx('icons')}/>
                    </div>
                </div>
                <div className={cx('content2')}>
                    <img src={image_amongus} alt="Among us"></img>
                </div>
            </div>
        </div>
    )
}
export default Home;