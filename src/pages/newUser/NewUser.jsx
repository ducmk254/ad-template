import React from 'react';
import './newuser.css';
const NewUser = () => {
    return (
        <div className="newUser flexRight">
            <h3 className="newUserTitle">New User</h3>
            <div className="newUserWrapper">
                <form action="" method="post" className="newUserForm">
                    <div className="newUserRow">
                        <label  className="newUserLabel">username</label>
                        <input type="text" className="newUserInput" placeholder="john" />
                    </div>
                    <div className="newUserRow">
                        <label  className="newUserLabel">full name</label>
                        <input type="text" className="newUserInput" placeholder="john Mr" />
                    </div>
                    <div className="newUserRow">
                        <label  className="newUserLabel">email</label>
                        <input type="text" className="newUserInput" placeholder="john@gmail.com" />
                    </div>
                    <div className="newUserRow">
                        <label  className="newUserLabel">Password</label>
                        <input type="password" className="newUserInput" placeholder="password" />
                    </div>
                    <div className="newUserRow">
                        <label  className="newUserLabel">phone</label>
                        <input type="text" className="newUserInput" placeholder="0968182113" />
                    </div>
                    <div className="newUserRow">
                        <label  className="newUserLabel">address</label>
                        <input type="text" className="newUserInput" placeholder="Hà Đông, Hà Nội" />
                    </div>
                    <div className="newUserRow">
                        <label  className="newUserLabel ">Gender</label>
                        <div className="newUserGender">
                            <input type="radio" name="gender" value="Nam" className="newUserInput" />Nam
                            <input type="radio" name="gender" value="Nữ" className="newUserInput" />Nữ
                            <input type="radio" name="gender" value="Khác" className="newUserInput" />Khác
                        </div>
                        
                    </div>
                    <div className="newUserRow">
                        <label  className="newUserLabel" htmlFor="active">Active</label>
                        <select name="active" id="active" className="newUserActive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="newUserRow">
                        <button className="newUserBtn">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewUser;