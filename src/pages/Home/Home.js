import classNames from "classnames/bind";
import style from './Home.module.scss';
import meter1 from "./../../assets/images/meter1.svg";
import meter2 from "./../../assets/images/meter2.svg";
import meter3 from "./../../assets/images/meter3.svg";
import image_amongus from './../../assets/images/amongus_233_300.png';
import image_card from './../../assets/images/maxresdefault.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(style)

function Home(){
    const slide_image = [{
            'image': meter1,
            'content': "Reactjs"
        },
        {
            'image': meter2,
            'content': "Django Rest Framework"
        },
        {
            'image': meter3,
            'content': "Dash Plotly"
        },
        {
            'image': meter2,
            'content': "Selenium"
        }
    ]

    const slide = slide_image.map((slide, index) => {
        return <div key={index}>
            <img src={slide.image} alt="slide"></img>
            <p>{slide.content}</p>
        </div>  
    })

    const progress_data = [
        {'title': "Python",
         'value': '85'
        },
        {'title':'JavaScript',
         'value' : '80'
        },
        {'title':'SQL server',
         'value' : '65'
        },
        {'title':'Microsoft Azure',
         'value' : '70'
        },
        {'title':'Git',
         'value' : '90'
        }
    ]
    const Progress = progress_data.map((progress, index) => {
        return <div className={cx('progress_bar')} key={index}>
            <label>{progress.title}</label>
            <div>
                <div style={{width: progress.value+"%"}}>{progress.value + "%"}</div>
            </div>
        </div>
    } )

    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner_home')}>
                <div className={cx('home')}>
                    <div className={cx('home__content')}>
                        <div>
                            <label>Trần Ngọc Trinh</label>
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
                    <div className={cx('home__image')}>
                        <img src={image_amongus} alt="Among us"></img>
                    </div>
                </div>
            </div>

            <div className={cx('inner_skill')}>
                <div className={cx('skills')}>
                    <div>
                        <label>Skills</label>
                        <p>The page will reload when you make changes. You may also see any lint errors in the console. The page will reload when you make changes. You may also see any lint errors in the console. </p>
                        <div className={cx('skills_slide')}>{slide}</div>
                        {Progress}
                    </div>
                </div>
            </div>

            <div className={cx('inner_project')}>
                <div className={cx('project')}>
                    <div>
                        <div>
                            <label>Project</label>
                        </div>
                        <div>
                            <div>
                                <img alt="card" src={image_card}></img>
                                <img alt="card" src={image_card}></img>
                            </div>
                            <div >
                                <img alt="card" src={image_card}></img>
                                <img alt="card" src={image_card}></img>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;