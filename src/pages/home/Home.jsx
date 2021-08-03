import './home.css';
import Features from '../../components/features/Features';
import Chart from '../../components/chart/Chart';
import {userData} from "../../components/dummyData";
const home = () => {
    return (
        <div className="homepage">
            <Features />
            <Chart data={userData} grid title="User Analytics" dataKey="Active users" />
        </div>
    );
};

export default home;