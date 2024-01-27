import React from 'react';
import CountUp from "react-countup";
// eslint-disable-next-line
const CounterBox = ({title,number}) => {
    return (
                <div className="counter__content">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__text">
                                    <img src="img/icons/ci-1.png" alt=""/>
                                    <h2><CountUp duration={15} end={number}/></h2>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default CounterBox;