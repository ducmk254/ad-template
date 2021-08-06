import React from 'react';
import './Sidebar.css';
import {Apps,AttachMoney,BarChart,CreditCard,DynamicFeed,Error,MailOutline,Message,PersonOutline,Storefront,Timeline,TrendingUp} from '@material-ui/icons';
import  {NavLink} from 'react-router-dom';
function Siderbar(props) {
    return (
        <div className="sidebar flexLeft">
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Dashboard</span>
                <ul className="sidebarList">
                    <NavLink to="/">
                        <li className="sidebarItem active">
                            <Apps className="negotion" />
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/analytics">
                        <li className="sidebarItem">
                            <Timeline  className="negotion "/>
                            Analytics
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="sidebarItem">
                            <TrendingUp className="negotion " />
                            Home
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Quick Menu</span>
                <ul className="sidebarList">
                    <NavLink to="/users">
                        <li className="sidebarItem">
                                <PersonOutline className="negotion" />
                                Users
                        </li>
                    </NavLink>
                    <NavLink to="/products">
                        <li className="sidebarItem">
                            <Storefront  className="negotion "/>
                            Products
                        </li>
                    </NavLink>
                    <NavLink to='/transactions'>
                        <li className="sidebarItem">
                            <AttachMoney className="negotion " />
                            Transactions
                        </li>
                    </NavLink>
                    <NavLink to="/reports">
                        <li className="sidebarItem">
                            <BarChart className="negotion " />
                            Reports
                        </li>
                    </NavLink>
                    
                </ul>
            </div>
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Notification</span>
                <ul className="sidebarList">
                    <NavLink to="/mails">
                        <li className="sidebarItem ">
                            <MailOutline className="negotion" />
                            Mail
                        </li>
                    </NavLink>
                    <NavLink to="/feedback">
                        <li className="sidebarItem">
                            <DynamicFeed  className="negotion "/>
                            Feedback
                        </li>
                    </NavLink>
                    <NavLink to="/messages">
                        <li className="sidebarItem">
                            <Message className="negotion " />
                            Messages
                        </li>
                    </NavLink>
                    
                </ul>
            </div>
            <div className="sidebarWrapper">
                <span className="sidebarTitle">Staff</span>
                <ul className="sidebarList">
                    <NavLink to="/manages">
                        <li className="sidebarItem ">
                            <CreditCard className="negotion" />
                            Manage
                        </li>
                    </NavLink>
                    <NavLink to='/analytics'>
                        <li className="sidebarItem">
                            <Timeline  className="negotion "/>
                            Analytics
                        </li>
                    </NavLink>
                    <NavLink to="/reports">
                        <li className="sidebarItem">
                            <Error className="negotion " />
                            Reports
                        </li>
                    </NavLink>                   
                </ul>
            </div>
        </div>
    );
}

export default Siderbar;