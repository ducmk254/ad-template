import React from 'react';
import "./wigetInfoSm.css";
import {Visibility} from "@material-ui/icons";
const WigetInfoSm = () => {
    return (
        <div className="wigetInfoSm">
            <h3 className="wigetInfoSmTitle">
                new Join Members
            </h3>
            <ul className="wigetInfoSmList">
                <li className="wigetInfoSmItem">
                    <img src="https://picsum.photos/id/237/200/300" alt="hihi" />
                    <div className="wigetInfoSmContent">
                        <span className="wigetInfoSmName">Anna Keller</span>
                        <span className="wigetInfoSmLabel">Business Analytic</span>
                    </div>
                    <span className="wigetInfoSmVisible"><Visibility className="wigetInfoSmBtn"/>Dispay</span>
                </li>
                <li className="wigetInfoSmItem">
                    <img src="https://picsum.photos/id/237/200/300" alt="hihi" />
                    <div className="wigetInfoSmContent">
                        <span className="wigetInfoSmName">Anna Keller</span>
                        <span className="wigetInfoSmLabel">Business Analytic</span>
                    </div>
                    <span className="wigetInfoSmVisible"><Visibility className="wigetInfoSmBtn"/>Dispay</span>
                </li>
                <li className="wigetInfoSmItem">
                    <img src="https://picsum.photos/id/237/200/300" alt="hihi" />
                    <div className="wigetInfoSmContent">
                        <span className="wigetInfoSmName">Anna Keller</span>
                        <span className="wigetInfoSmLabel">Business Analytic</span>
                    </div>
                    <span className="wigetInfoSmVisible"><Visibility className="wigetInfoSmBtn"/>Dispay</span>
                </li>
                <li className="wigetInfoSmItem">
                    <img src="https://picsum.photos/id/237/200/300" alt="hihi" />
                    <div className="wigetInfoSmContent">
                        <span className="wigetInfoSmName">Anna Keller</span>
                        <span className="wigetInfoSmLabel">Business Analytic</span>
                    </div>
                    <span className="wigetInfoSmVisible"><Visibility className="wigetInfoSmBtn"/>Dispay</span>
                </li>
                <li className="wigetInfoSmItem">
                    <img src="https://picsum.photos/id/237/200/300" alt="hihi" />
                    <div className="wigetInfoSmContent">
                        <span className="wigetInfoSmName">Anna Keller</span>
                        <span className="wigetInfoSmLabel">Business Analytic</span>
                    </div>
                    <span className="wigetInfoSmVisible"><Visibility className="wigetInfoSmBtn"/>Dispay</span>
                </li>
            </ul>
        </div>
    );
};

export default WigetInfoSm ;