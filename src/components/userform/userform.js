import React from 'react'
import './userform.css'
// export function UserForm(props){
//     return (
//         <input placeholder={props.label} style={{backgroundColor: props.color}}/>
//     )
// }
export class UserForm extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            user :{
            fname:"Sanjeev",
            lname:'Kumar',
            salary:5000
            },
            users: [{fname:"Ramesh" , lname:"Kumar",salary:10000}, {fname: "Dinesh" , lname: "Sinha",salary:11000}]
        }
    }

    //normal function this was undefined.
    //once changed to the arrow function , it started to print name.
    save =  (event) => {
        this.setState({
             users : [...this.state.users,Object.assign({},this.state.user)]
        })
    }

    handleEvent = (event) => {
        //const propertyName = event.target.name;
        this.setState({
            //property name can not have dots hence angled bracket is a must
           // user: {...this.state.user,[event.target.name]: event.target.value}
            //propertyName :event.target.value 

            user: Object.assign(this.state.user,{[event.target.name]: event.target.value})
        });
        console.log(`name = ${event.target.name} and the value = ${event.target.value}`)
    }

    deleteUser = (index) => {
        console.log(this);
        console.log(index);
        console.log("Delete button clicke/pressed !!");
        //remove 1 element at the index
        this.state.users.splice(index,1);
        //now render using setstate
        this.setState({
            users: this.state.users
        });
    }
    render(){
        const userModel = this.state.user;
        return (
            <div>
                
                <label>
                    First Name:    
                <input value = {userModel.fname} name= "fname" onChange = {this.handleEvent}
                placeholder={this.props.label} style={{backgroundColor: this.props.color}}/>
            
                </label>
                <br/> <br/>
                <label>
                    Last Name:
                    <input value = {userModel.lname} name= "lname" onChange = {this.handleEvent} 
                    placeholder='last name' style={{backgroundColor: this.props.color}}/>
                </label>
                <br/>

                <br/> <br/>
                <label>
                    Salary:
                    <input value = {userModel.salary} name= "salary" onChange = {this.handleEvent} 
                    placeholder='Salary' style={{backgroundColor: this.props.color}}/>
                </label>
                <br/>
                <button onClick ={this.save}>SaveNew </button>
                <br/> <br/>
                <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.state.users.map((user,index) => {
                               console.log(index);
                              return <tr> 
                                        <td> {user.fname} </td>
                                        <td> {user.lname} </td> 
                                        <td> {user.salary} </td> 
                                        <td> <button onClick={this.deleteUser.bind(this,index)}>Delete</button> </td>
                                    </tr>

                               // return <tr>test</tr>;
                           })}

                        </tbody>
                </table>
            </div>
            )
    }
}