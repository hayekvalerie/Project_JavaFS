import React from 'react';

import UserService from '../services/UserServices';

class UserComponent extends React.Component{

    constructor(){
        super();
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response)=>{
            this.setState({users:response.data})
        });
    }

    render(){
        return(
            <div>

                <h1 className="text-center">Users List
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Name</td>
                            <td>User date</td>
                        </tr>


                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Date}</td>
                                </tr>
                            )
                            }
                    </tbody>
                    
                    
                    </table></h1>

            </div>
        )
    }

}


export default UserComponent