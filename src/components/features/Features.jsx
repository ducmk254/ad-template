import React from 'react';
import './features.css';
import { ArrowDownward, ArrowUpward } from  '@material-ui/icons';
const Features = () => {
    return (
        <div className="feature">
            <div className="featureWrapper">
                <div className="featureItem">
                    <h2 className="featureTitle">Revance</h2>
                    <div className="featureBag">
                    <span className="featureMoney">$2,345</span>
                    <span className="featureRate">-11.5</span>
                    <span className="featureRank">
                        <ArrowDownward className="featureRankRate" />
                    </span>
                    </div>
                    <p className="featureCompare">Compared to last month</p>
                </div>
                <div className="featureItem">
                    <h2 className="featureTitle">Sales</h2>
                    <div className="featureBag">
                    <span className="featureMoney">$4,555</span>
                    <span className="featureRate">+2.5</span>
                    <span className="featureRank ">
                        <ArrowUpward className="featureRankRate neoPoint" />
                    </span>
                    </div>
                    <p className="featureCompare">Compared to last month</p>
                </div>
                <div className="featureItem">
                    <h2 className="featureTitle">Cost</h2>
                    <div className="featureBag">
                    <span className="featureMoney">$2,045</span>
                    <span className="featureRate">-11.5</span>
                    <span className="featureRank">
                        <ArrowDownward className="featureRankRate" />
                    </span>
                    </div>
                    <p className="featureCompare">Compared to last month</p>
                </div>
                
            </div>
           
        </div>
    );
};

export default Features;