import Plot from 'react-plotly.js';
import style from "./../pages/Crypto/Crypto.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(style)

function Chart(props) {
    return ( 
        <Plot 
    className={cx('plot')}
    data={[
        {
            name: 'bitcoins',
            y: props.x,
            x: props.y,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy', //tozeroy toself tonexty
            marker: {
                color: props.color,
            },
        },
    ]}
    style={{ width: '100%', height: '100%' }}
    layout={
        {   
            
            hovermode: false,
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0,
                pad: 200
                },
            autosize: true,
            xaxis:{
                type: 'date',
                visible: false,
                showgrid: false
            },
            yaxis:{
                range: [
                    130, 190
                ],
                visible: false,
                showgrid: false
            },
            images:[
                {
                    source:"https://raw.githubusercontent.com/cldougl/plot_images/add_r_img/vox.png",
                    x: 0.43,
                    y: 1.16,
                    sizex: 0.1,
                    sizey: 0.1,
                    xanchor: "right",
                    xref: "paper",
                    yanchor: "bottom",
                    yref: "paper"
                }
            ],
        }
    }
    config={
        {
            displayModeBar: false
        }
    }  
    ></Plot>
     );
}

export default Chart;