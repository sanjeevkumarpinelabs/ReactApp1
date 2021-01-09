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
            fname:"Sanjeev",
            lname:'Kumar'
        }
    }

    //normal function this was undefined.
    //once changed to the arrow function , it started to print name.
    save =  event => {
        //console.log(event);
      //  console.log(this.props);
        console.log(this.state.fname);
        console.log(this);

        this.setState({
            lname:this.state.fname 
        });
    }

    handleEvent = (event) => {
        //const propertyName = event.target.name;
        this.setState({
            //property name can not have dots hence angled bracket is a must
            [event.target.name]: event.target.value
            //propertyName :event.target.value 
        });
        console.log(`name = ${event.target.name} and the value = ${event.target.value}`);
    }
    render(){
        // return (
        //     <div>
                
        //         <label>
        //             First Name:    
        //         <input value = {this.state.fname} onChange={(event) => {
        //             console.log(this.state.fname);
        //            //this.state.fname = event.target.value;
        //             this.setState({
        //                 fname:event.target.value
        //             });
        //             console.log(event);
        //         }}
        //         placeholder={this.props.label} style={{backgroundColor: this.props.color}}/>
            
        //         </label>
                
        //         <input value = {this.state.lname} onChange={(event)=> {
        //             this.setState({
        //                 lname:event.target.value
        //             });
        //             console.log(`last name is ${this.state.lname}`);
        //             // console.log(`current state value is ${this.state}`);
        //             }} placeholder='first name copy' style={{backgroundColor: this.props.color}}/>
        //         {/* <button onClick = {(event)=>{
        //             console.log(event);
        //         }}>Save </button> */}
        //         <button onClick ={this.save}>SaveNew </button>
        //     </div>
        //     )

        return (
            <div>
                
                <label>
                    First Name:    
                <input value = {this.state.fname} name= "fname" onChange = {this.handleEvent}
                placeholder={this.props.label} style={{backgroundColor: this.props.color}}/>
            
                </label>
                <br/> <br/>
                <label>
                    Last Name:
                    <input value = {this.state.lname} name= "lname" onChange = {this.handleEvent} 
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
                            <tr>
                                    <td>Sanjeev</td>
                                    <td>Kumar</td>
                            </tr>
                            <tr>
                                    <td>Sneh</td>
                                    <td>Mishra</td>
                            </tr>

                        </tbody>
                </table>
            </div>
            )
    }
}