import classNames from "classnames/bind";
import style from "./Crypto.module.scss"
import Plot from 'react-plotly.js';
import { useEffect, useState } from "react";
import Chart from './../../components/Chart.js'

const cx = classNames.bind(style)

function Crypto() {
    console.log(2)

    const x = [154.970001, 156.979996, 155.490005, 155.0, 150.630005, 150.350006, 148.559998, 148.440002, 148.820007, 143.800003, 143.929993, 144.449997, 146.649994, 145.660004, 145.470001, 143.25, 142.470001, 143.660004, 141.899994, 141.759995, 139.490005, 139.470001, 143.059998, 144.029999, 142.270004, 143.229996, 141.240005, 142.110001, 143.770004, 143.449997, 147.009995, 148.699997, 148.809998, 149.690002, 148.679993, 149.330002, 149.360001, 149.820007, 147.220001, 148.990005, 148.660004, 150.389999, 151.580002, 151.889999, 151.410004, 150.199997, 150.020004, 148.960007, 148.429993, 150.369995, 149.940002, 151.0, 153.710007, 157.649994, 161.679993, 161.119995, 160.75, 159.570007, 159.369995, 159.990005, 167.479996, 158.740005, 164.020004, 164.289993, 169.080002, 172.130005, 174.910004, 175.210007, 181.119995, 175.25, 175.110001, 179.279999, 169.929993, 168.279999, 171.559998, 173.039993, 175.850006, 177.089996, 180.160004, 179.330002, 179.470001, 178.089996, 177.830002, 182.630005, 179.610001, 172.699997, 172.889999, 169.080002, 172.320007, 176.119995, 175.779999, 171.339996, 171.509995, 170.0, 166.979996, 164.419998, 160.020004, 158.979996, 163.5, 162.449997]
    const y = ['2021-09-07', '2021-09-08', '2021-09-09', '2021-09-10', '2021-09-13', '2021-09-14', '2021-09-15', '2021-09-16', '2021-09-17', '2021-09-20', '2021-09-21', '2021-09-22', '2021-09-23', '2021-09-24', '2021-09-27', '2021-09-28', '2021-09-29', '2021-09-30', '2021-10-01', '2021-10-04', '2021-10-05', '2021-10-06', '2021-10-07', '2021-10-08', '2021-10-11', '2021-10-12', '2021-10-13', '2021-10-14', '2021-10-15', '2021-10-18', '2021-10-19', '2021-10-20', '2021-10-21', '2021-10-22', '2021-10-25', '2021-10-26', '2021-10-27', '2021-10-28', '2021-10-29', '2021-11-01', '2021-11-02', '2021-11-03', '2021-11-04', '2021-11-05', '2021-11-08', '2021-11-09', '2021-11-10', '2021-11-11', '2021-11-12', '2021-11-15', '2021-11-16', '2021-11-17', '2021-11-18', '2021-11-19', '2021-11-22', '2021-11-23', '2021-11-24', '2021-11-26', '2021-11-29', '2021-11-30', '2021-12-01', '2021-12-02', '2021-12-03', '2021-12-06', '2021-12-07', '2021-12-08', '2021-12-09', '2021-12-10', '2021-12-13', '2021-12-14', '2021-12-15', '2021-12-16', '2021-12-17', '2021-12-20', '2021-12-21', '2021-12-22', '2021-12-23', '2021-12-27', '2021-12-28', '2021-12-29', '2021-12-30', '2021-12-31', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06', '2022-01-07', '2022-01-10', '2022-01-11', '2022-01-12', '2022-01-13', '2022-01-14', '2022-01-18', '2022-01-19', '2022-01-20', '2022-01-21', '2022-01-24', '2022-01-25', '2022-01-26', '2022-01-27']
    
         
    
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
            </div>
            <div className={cx('section')}>
                <div className={cx("card_btc_eth")}>
                    <div className={cx('btc')}>
                        <div className={cx('card_small_btc')}>
                            <div className={cx('card_btc_img')}>
                                <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg" alt="btc"></img>
                                <h1>BitCoin</h1>
                            </div>
                            <div className={cx('card_btc_price')}>
                                <h4>$19339.09</h4>
                            </div>
                        </div>
                        <Chart x={x} y={y} color="#8E806A"/>
                    </div>
                    <div className={cx('cosmos')}>
                        <div className={cx('card_small_btc')}>
                            <div className={cx('card_btc_img')}>
                                <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/atm.svg" alt="btc"></img>
                                <h1>Cosmos</h1>
                            </div>
                            <div className={cx('card_btc_price')}>
                                <h4>$13.81</h4>
                            </div>
                        </div>
                        <Chart x={x} y={y} color="#54BAB9"/>
                    </div>
                    <div className={cx('eth')}>
                        <div className={cx('card_small_btc')}>
                            <div className={cx('card_btc_img')}>
                                <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg" alt="btc"></img>
                                <h1>Ethereum</h1>
                            </div>
                            <div className={cx('card_btc_price')}>
                                <h4>$1634.02</h4>
                            </div>
                        </div>
                        <Chart x={x} y={y} color="#6E85B7"/>
                    </div>
                </div>
                <div className={cx('card')}>
                    <div className={cx('card_title')}>
                        <div className={cx('card_title_img')}>
                            {/* <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"></img>
                            <h1>BitCoin</h1> */}
                        </div>
                        <div className={cx('card_title_price')}>
                            {/* $10k */}
                        </div>
                        
                    </div>
                    <Plot 
                    
                        data={[
                            {
                                name: 'bitcoins',
                                y: x,
                                x: y,
                                type: 'scatter',
                                mode: 'lines',
                                fill: 'tozeroy', //tozeroy toself tonexty
                                marker: {color: '#456268'},
                                hovertemplate: '<i>Price</i>: $%{y:.2f}' +
                                '<br><b>Date</b>: %{x}<br>',
                            },
                        ]}
                        style={{ width: '100%', height: '100%' }}
                        layout={
                            {   
                                margin: {
                                    l: 60,
                                    r: 20,
                                    b: 50,
                                    t: 50,
                                    },
                                autosize: true,
                                title:{
                                    // text: "BTC/USDT                          $10k",
                                    font: {
                                        family: 'Red Hat Text, monospsans-seriface',
                                        size: 30
                                    },
                                },
                                title:'<b>BTC/USDT</b> <br>',
                                xaxis:{
                                    type: 'date',
                                    // range: [
                                    //     y[0],y[4]
                                    // ],
                                    title:{
                                        text: 'Date',
                                        font: {
                                            family: 'Courier New, monospace',
                                            size: 18
                                        }
                                    },
                                    showgrid: false
                                },
                                yaxis:{
                                    range: [
                                        130, 190
                                    ],
                                    title:{
                                        text: "Price($)",
                                        font: {
                                            family: 'Courier New, monospace',
                                            size: 18
                                        }
                                    },
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
                        
                        
                    ></Plot>
                </div>
            </div>
        </div>
     );
}

export default Crypto;


// https://www.coinbase.com/price/javascript-token
// https://codepen.io/diggitydoge/pen/dyyWqGO
// https://www.npmjs.com/package/react-crypto-chart
// http://juliaplots.org/PlotlyJS.jl/stable/examples/line_scatter/
// https://plotly.com/javascript/filled-area-animation/