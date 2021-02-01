import React from 'react'
import './userform.css'
import {BackendService} from './../../backend-service'
import Counter from './../../components/Counter'
import { connect , dispatch } from 'react-redux';
import updateCountAction from "../../redux-store/action"
// export function UserForm(props){
//     return (
//         <input placeholder={props.label} style={{backgroundColor: props.color}}/>
//     )
// }
 class UserForm extends React.Component{
    //roles = ["Progammer" , "Lead" , "Manager"];
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            user :{
                fname:"Sanjeev",
                lname:'Kumar',
                salary:5000,
                gender: "Male",
               skills:[]
            },
            users: [{fname:"Ramesh" , lname:"Kumar",salary:10000}, {fname: "Dinesh" , lname: "Sinha",salary:11000}],
            roles: [],
            sortOrder:true
            
        }
    }

    //normal function this was undefined.
    //once changed to the arrow function , it started to print name.
    save =  (event) => {
        BackendService.saveUser(this.state.user,(successCallback) =>{
       // this.state.user.id = successCallback.id;
            this.setState({
                users : [...this.state.users,successCallback]
                
              //  users : [...this.state.users,Object.assign({},this.state.user)]
            
            })

           this.props.udpateCount({type:"UPDATE_COUNT",
           payload:this.state.users.length});
            }).fail((error) => {
                window.alert("Somethig went wrong, please retry... !");
                console.log("Failed to post the user data to backend");
            })
            
        
    }

    // handleEvent = (event) => {
    //     //const propertyName = event.target.name;
    //     if(this.event.target.type == "checkbox") {
    //         this.state.c
    //     }
    //     this.setState({
    //         //property name can not have dots hence angled bracket is a must
    //        // user: {...this.state.user,[event.target.name]: event.target.value}
    //         //propertyName :event.target.value 

    //         user: Object.assign(this.state.user,{[event.target.name]: event.target.value})
    //     });
    //     console.log(`name = ${event.target.name} and the value = ${event.target.value}`)
    // }

    handleEvent = (event) => {
        if(event.target.type == 'checkbox'){       
            // if(this.state.user.hasOwnProperty(event.target.name) == false){
            //     this.setState({  
            //         user: Object.assign(this.state.user, { [event.target.name]: [] })
            //     });
            // }
            if(event.target.checked){
                //add values here
                this.state.user.skills.push(event.target.value);
            }else{
                //remove basis value       
                let i = -1;
                this.state.user.skills.map( (value, index)=> {
                    if(value == event.target.value){
                        i = index;
                    }
                });
                if(i>-1){
                    this.state.user.skills.splice(i, 1);
                }                
            }            
            this.setState({  
                user: this.state.user
            });           

        } else{

                this.setState({
                //property name can not have dots hence angled bracket is a must
            // user: {...this.state.user,[event.target.name]: event.target.value}
                //propertyName :event.target.value 

                user: Object.assign(this.state.user,{[event.target.name]: event.target.value})
            });

         console.log(`name = ${event.target.name} and the value = ${event.target.value}`)
        }
    }

    userClickData = (user) =>{
        console.log("User row clicked");
        console.log(user);
        console.log(user.fname);
        this.props.udpateUserData({type:"UPDATE_USER",
                payload:user});
    }
    deleteUser = (index,userid) => {

        const bVal = window.confirm(`Do you want to delete the user ${this.state.users[index].fname} ?`);
        console.log(this);
        console.log(index);
        console.log("Delete button clicke/pressed !!");
        console.log(bVal);
        //remove 1 element at the index
        
        if(bVal){
            const promise = BackendService.deleteUser(userid);
            console.log(promise);
            promise.done((response) => {
                this.state.users.splice(index,1);
                //now render using setstate
                this.setState({
                    users: this.state.users
                });
            
                //this.props.updateCount({ type: updateCountAction, payload: this.state.users.length });
             this.props.udpateCount({type:"UPDATE_COUNT",
                payload:this.state.users.length});
            })
            promise.fail((error) => {
                alert("Deletion failed")
            });
            
        }else{
        console.log("User did not confirm");
     }
    }
    componentDidMount(){
        const promise = BackendService.getUsers();
        promise.done((response) => {
            this.setState({
                users: response
            })
        })
        promise.fail((error) =>{
            alert('Faile to load th data during application load');
            console.log("GET: Failed to fetch the data from back end.")
        })


        const promiseRoles = BackendService.getRoles();
        promiseRoles.done((response) => {
            this.setState({
                roles: response
            })
        })
        promiseRoles.fail((error) =>{
            alert('Faile to load the role master');
            console.log("GET: Failed to fetch role master.")
        })
    }

    sortSalary = (event) => {
        console.log("sort Salary");
        let sortOrder = this.state.sortOrder;
        sortOrder = !sortOrder;
        if(sortOrder){
           
            this.state.users.sort((user1,user2)=>{
            return (user1.salary-user2.salary );
            });
         }else{
            this.state.users.sort((user1,user2)=>{
                return (user2.salary-user1.salary );
                });
         }
        
        this.setState({
            users:this.state.users,
            sortOrder: sortOrder
        })
    }

    filterName = (event) => {
        const filterPromise = BackendService.getFilteredUsers(event.target.value);
        filterPromise.done((response) => {
            this.setState({
                users: response
            })
        })
        filterPromise.fail((error) =>{
            alert('failed to get the filter data');
        })
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
            
                    <input type='radio' value = 'Male' onChange= {this.handleEvent} name= 'gender' checked="True"/>Male
                    <input type='radio' value = "Female" onChange= {this.handleEvent} name= 'gender' />Female

        
                    {this.state.roles.map((role) => {
                       return  <div>
                            <input type='radio' value = {role} onChange= {this.handleEvent} name ='role'/>
                            {role}
                        </div>
                    })}

                <input name= "skills" onChange= {this.handleEvent} type= 'checkbox' value='JavaScript' />JavaScript
                <input name= "skills" onChange= {this.handleEvent} type= 'checkbox' value='React' />React
                <input name= "skills" onChange= {this.handleEvent} type= 'checkbox' value='ReactNative' />ReactNative
                <input name= "skills" onChange= {this.handleEvent} type= 'checkbox' value='Java' />Java
                <input name= "skills" onChange= {this.handleEvent} type= 'checkbox' value='C/C++' />C/C++

                <br/>
              

                <button onClick ={this.save}>SaveNew </button>
                <br/> <br/>
                <Counter count = {this.state.users.length}> </Counter>
                <table>
                        <thead>
                            <tr>
                                <th>First Name <div><input onChange= {this.filterName}></input></div></th>
                                <th>Last Name</th>
                                <th onClick = {this.sortSalary}> Salary</th>
                                <th>Programmer</th>
                                <th>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.state.users.map((user,index) => {
                               console.log(index);
                               let skillsList = " ";
                               if(user["skills[]"]){
                                skillsList = user["skills[]"].map((skill) => skill +",")
                               }
                              return <tr onClick={this.userClickData.bind(this,user)}>  

                                        <td> {user.fname}</td>
                                        <td> {user.lname} </td> 
                                        <td> {user.salary} </td> 
                                        <td> {user.role} </td>
                                        <td> {skillsList}</td>                                           
                                        <td> <button onClick={this.deleteUser.bind(this,index,user.id)}>Delete</button> </td>
                                        
                                    </tr>

                               // return <tr>test</tr>;
                           })}

                        </tbody>
                </table>
            </div>
            )
    }
}

const MapDispatchToProps = function(dispatch){
    return (
        {
            udpateCount: (action) => dispatch(action),
            udpateUserData: (action) => dispatch(action)
    });
}

export default connect(null,MapDispatchToProps)(UserForm);