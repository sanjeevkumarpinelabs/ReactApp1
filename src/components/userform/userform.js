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
            lname:'Kumar'
            },
            users: [{fname:"Ramesh" , lname:"Kumar"}, {fname: "Dinesh" , lname: "Sinha"}]
        }
    }

    //normal function this was undefined.
    //once changed to the arrow function , it started to print name.
    save =  event => {
        //console.log(event);
      //  console.log(this.props);
        console.log(this.state.user.fname);
        console.log(this);

        // this.setState({
        //     lname:this.state.fname 
        // });
    }

    handleEvent = (event) => {
        //const propertyName = event.target.name;
        this.setState({
            //property name can not have dots hence angled bracket is a must
            user: {[event.target.name]: event.target.value}
            //propertyName :event.target.value 
        });
        console.log(`name = ${event.target.name} and the value = ${event.target.value}`);
    }
    render(){
        return (
            <div>
                
                <label>
                    First Name:    
                <input value = {this.state.user.fname} name= "fname" onChange = {this.handleEvent}
                placeholder={this.props.label} style={{backgroundColor: this.props.color}}/>
            
                </label>
                <br/> <br/>
                <label>
                    Last Name:
                    <input value = {this.state.user.lname} name= "lname" onChange = {this.handleEvent} 
                    placeholder='first name copy' style={{backgroundColor: this.props.color}}/>
                </label>
                <br/>
                <button onClick ={this.save}>SaveNew </button>
                <br/> <br/>
                <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.state.users.map(user => {
                              // console.log(user);
                              return <tr> <td> {user.fname} </td> <td> {user.lname} </td> </tr>

                               // return <tr>test</tr>;
                           })}

                        </tbody>
                </table>
            </div>
            )
    }
}