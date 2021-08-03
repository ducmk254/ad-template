import React from 'react';
import './Sidebar.css';
import {Apps,AttachMoney,BarChart,CreditCard,DynamicFeed,Error,MailOutline,Message,PersonOutline,Storefront,Timeline,TrendingUp} from '@material-ui/icons';
function Siderbar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Dashboard</span>
                <ul className="sidebarList">
                    <li className="sidebarItem active">
                        <Apps className="negotion" />
                        Home
                    </li>
                    <li className="sidebarItem">
                        <Timeline  className="negotion "/>
                        Analytics
                    </li>
                    <li className="sidebarItem">
                        <TrendingUp className="negotion " />
                        Home
                    </li>
                </ul>
            </div>
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Quick Menu</span>
                <ul className="sidebarList">
                    <li className="sidebarItem active">
                        <PersonOutline className="negotion" />
                        Users
                    </li>
                    <li className="sidebarItem">
                        <Storefront  className="negotion "/>
                        Products
                    </li>
                    <li className="sidebarItem">
                        <AttachMoney className="negotion " />
                        Transactions
                    </li>
                    <li className="sidebarItem">
                        <BarChart className="negotion " />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Notification</span>
                <ul className="sidebarList">
                    <li className="sidebarItem active">
                        <MailOutline className="negotion" />
                        Mail
                    </li>
                    <li className="sidebarItem">
                        <DynamicFeed  className="negotion "/>
                        Feedback
                    </li>
                    <li className="sidebarItem">
                        <Message className="negotion " />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Staff</span>
                <ul className="sidebarList">
                    <li className="sidebarItem active">
                        <CreditCard className="negotion" />
                        Manage
                    </li>
                    <li className="sidebarItem">
                        <Timeline  className="negotion "/>
                        Analytics
                    </li>
                    <li className="sidebarItem">
                        <Error className="negotion " />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Siderbar;