import React from 'react';
import "./edituser.css";
import {Link} from 'react-router-dom'
import {PersonOutline,Event, PhoneIphone,MailOutline,LocationSearching,Publish} from '@material-ui/icons';
const EditUser = () => {
    return (
        <div className="editUser">
            <div className="editUserWrapperTitle">
                <h3 className="editUserTitle">
                    Edit User
                </h3>
                <Link to="/new-user">
                    <button className="editUserBtn">Create</button>
                </Link>
            </div>
            <div className="editUserWrapperInfo">
                <div className="editUserShow">
                    <div className="editUserShowHeader">
                        <img src="https://picsum.photos/seed/picsum/300/300" alt="avatar"/>
                        <span className="editUserWrapperName">
                            <span className="editUserName">Kim Văn Chuẩn</span>
                            <span className="esitUserlabel">Chuyên viên IT</span>
                        </span>
                    </div>
                    <div className="editUserDetail">
                        <h4 className="editUserDetailTitle">
                            Account details
                        </h4>
                        <ul className="editUserDetailList">
                            <li className="editUserDetailItem">
                                <PersonOutline className="editUserDetailIcon"/> annarkala
                            </li>
                            <li className="editUserDetailItem">
                                <Event className="editUserDetailIcon" /> 02/11/1990
                            </li>
                        </ul>
                    </div>
                    <div className="editUserDetail">
                        <h4 className="editUserDetailTitle">
                            Contact details
                        </h4>
                        <ul className="editUserDetailList">
                            <li className="editUserDetailItem">
                                <PhoneIphone className="editUserDetailIcon"/> +84 96 81 82 113
                            </li>
                            <li className="editUserDetailItem">
                                <MailOutline className="editUserDetailIcon" /> chuankv@mutosi.com
                            </li>
                            <li className="editUserDetailItem">
                                <LocationSearching className="editUserDetailIcon" /> Hà Đông, Hà Nội
                            </li>
                        </ul>
                    </div>
                </div>
                
                    <div className="editUserForm">
                        <h3 className="editUserFormTitle">
                            Edit
                        </h3>
                        <div className="editUserFormContent">
                            <div className="editUserFormLeft">
                                <form action="" method="post" className="editUserFormInput">
                                    <label >Username</label>
                                    <input type="text" placeholder="chuankv" />
                                    <label >Fullname</label>
                                    <input type="text"placeholder="Kim Văn Chuẩn" />
                                    <label >Email</label>
                                    <input type="text" placeholder="chuankv@mutosi.com" />
                                    <label >Phone</label>
                                    <input type="text" placeholder="+84968182113"/>
                                    <label >Address</label>
                                    <input type="text" placeholder="Hà Đông, Hà Nội" />
                                </form>
                            </div>
                            <div className="editUserFormRight">
                                <form action=""  className="editUserUpload">
                                    <img src="https://picsum.photos/seed/picsum/300/300" alt="name"/>
                                    <input type="file" id="image-upload" hidden/>
                                    <label htmlFor="image-upload" className="editUserUploadBtn">
                                        <Publish/>
                                    </label>
                                </form>
                                <button className="editUserFormBtn">Update</button>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default EditUser;