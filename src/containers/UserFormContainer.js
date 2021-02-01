import Counter from "../components/Counter"
import  UserForm  from '../components/userform/userform'
import UserDetails from '../components/userdetails/userdetails'

export default function UserFormContainer(props){
    return (
        <span>
            <Counter></Counter>
            <UserForm></UserForm>  
            <UserDetails></UserDetails> 
        </span>
        )
}