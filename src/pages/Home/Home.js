import classNames from "classnames/bind";
import style from './Home.module.scss';
import meter1 from "./../../assets/images/meter1.svg";
import meter2 from "./../../assets/images/meter2.svg";
import meter3 from "./../../assets/images/meter3.svg";
import image_card_selenium from './../../assets/images/maxresdefault.jpg'
import image_card_nlp from './../../assets/images/nlp.jpg'
import image_card_yolo from './../../assets/images/yolo.png'
import image_card_cnn from './../../assets/images/cnn.png'
import bird from './../../assets/images/giphy.gif'


const cx = classNames.bind(style)

function Home(){

    const list_background = ['https://wallpaperaccess.com/full/1223823.jpg', 
        'https://wallpaperaccess.com/full/4460881.jpg',
        'https://wallpaperaccess.com/full/5014467.jpg',
        'https://wallpaperaccess.com/full/3827724.jpg',
        'https://wallpaperaccess.com/full/5014469.jpg'
    ]
    let count = 0
    setInterval(() => {
        if (count == 5)
            count = 0
        let pointer =  "url(" + list_background[count].toString() + ")";
        document.getElementById('home_background').style.backgroundImage = pointer;
        count += 1
    }, 3000);

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
            <div className={cx('inner_home')} id="home_background">
                <div className={cx('home')}>
                    <div className={cx('home_row_1')}>
                        <img src={bird} alt="bird"></img>
                    </div>
                    <div className={cx('home_row_2')}>
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
                        <h2>Projects</h2>
                    </div>
                    <div>
                        <div>
                            <img alt="card" src={image_card_yolo}></img>
                            <div className={cx("hover_card")}>
                                <p className={cx("hover_card_text")}>Traffic Sign Recognition</p>
                            </div>
                        </div>
                        <div >
                            <img alt="card" src={image_card_nlp}></img>
                            <div className={cx("hover_card")}>
                                <p className={cx("hover_card_text")}>Restaurant reviews on Foody</p>
                            </div>
                        </div>
                        <div>
                            <img alt="card" src={image_card_cnn}></img>
                            <div className={cx("hover_card")}>
                                <p className={cx("hover_card_text")}>Image Classification</p>
                            </div>
                        </div>
                        <div >
                            <img alt="card" src={image_card_selenium}></img>
                            <div className={cx("hover_card")}>
                                <p className={cx("hover_card_text")}>Craping data from website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;