import React, { useState } from 'react';
import "./users.css";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {Link} from "react-router-dom";
import {userRow} from "../../components/dummyData";


const UserList = () => {
    // console.log("hihi :" + userRow);
    const [userData,setUserData] = useState(userRow);
    const handleDeleteRow = (id)=>{
        setUserData(userData.filter( (item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'User',
          width: 400,
          renderCell: (params)=>{
              return (
                  <div className="userListName" >
                      <img src={params.row.avatar} alt={params.row.username} />
                      {params.row.username}
                  </div>
              );
          },
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          editable: true,
        },
        {
          field: 'point',
          headerName: 'Point',
          sortable: true,
          width: 150,
          type: 'number'
        },
        {
            field:"action",
            headerName:"Action",
            width:200,
            renderCell: (params) =>{
                return (
                    <>
                        <Link to={"/users/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={()=>handleDeleteRow(params.row.id)} className="userListDelete"/>
                    </>
                );
            },
        },
      ];
    return (
        <div className="userList">
            <h3 className="userListTitle">Users list</h3>
            <DataGrid rows={userData} columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick>

            </DataGrid>
        </div>
    );
};
export default UserList;