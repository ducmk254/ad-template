import './home.css';
import Features from '../../components/features/Features';
import Chart from '../../components/chart/Chart';
import {userData} from "../../components/dummyData";
import WigetInfoSm from '../../components/wigetInfoSm/WigetInfoSm';
import WigetInfoLg from "../..//components/wigetInfoLg/WigetInfoLg";
const home = () => {
    return (
        <div className="homepage">
            <Features />
            <Chart data={userData} grid title="User Analytics" dataKey="Active users" />
            <div className="wigetInfo">
                <WigetInfoSm/>
                <WigetInfoLg/>
            </div>
        </div>
    );
};

export default home;