import React from 'react';
import "./wigetInfoLg.css"
function WigetInfoLg(props) {
    const Button = ({type})=>{
        return <button className={"wigetInfoLgStatus " + type} >{type}</button>
    }
    return (
        <div className="wigetInfoLg">
            <h3 className="wigetInfoLgTitle">
                Latest Transactions
            </h3>
            <table width="100%" className="wigetInfoLgTable" cellSpacing="10px">
                <tr className="wigetInfoLgTr">
                    <th className="wigetInfoLgTh">Customer</th>
                    <th className="wigetInfoLgTh">Date</th>
                    <th className="wigetInfoLgTh">Amount</th>
                    <th className="wigetInfoLgTh">Status</th>
                </tr>
                <tr>
                    <td className="wigetInfoAvatar">
                        <img  src="https://picsum.photos/id/237/200/300" alt="ahihi"/>
                        <span>Susan Carol</span>
                    </td>
                    <td>02 jul 2021</td>
                    <td>$210</td>
                    <td><Button type="approved" /></td>
                </tr>
                <tr>
                    <td className="wigetInfoAvatar">
                        <img  src="https://picsum.photos/id/237/200/300" alt="ahihi"/>
                        <span>Susan Carol</span>
                    </td>
                    <td>02 jul 2021</td>
                    <td>$210</td>
                    <td><Button type="pending" /></td>
                </tr>
                <tr>
                    <td className="wigetInfoAvatar">
                        <img  src="https://picsum.photos/id/237/200/300" alt="ahihi"/>
                        <span>Susan Carol</span>
                    </td>
                    <td>02 jul 2021</td>
                    <td>$210</td>
                    <td><Button type="approved" /></td>
                </tr>
                <tr>
                    <td className="wigetInfoAvatar">
                        <img  src="https://picsum.photos/id/237/200/300" alt="ahihi"/>
                        <span>Susan Carol</span>
                    </td>
                    <td>02 jul 2021</td>
                    <td>$210</td>
                    <td><Button type="declined" /></td>
                </tr>
                <tr>
                    <td className="wigetInfoAvatar">
                        <img  src="https://picsum.photos/id/237/200/300" alt="ahihi"/>
                        <span>Susan Carol</span>
                    </td>
                    <td>02 jul 2021</td>
                    <td>$210</td>
                    <td><Button type="pending" /></td>
                </tr>
            </table>

        </div>
    );
}

export default WigetInfoLg;