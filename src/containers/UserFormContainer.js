import Counter from "../components/Counter"
import { UserForm } from '../components/userform/userform'

export default function UserFromContianer(props){
    return (
        <span>
            <Counter></Counter> 
            <Counter></Counter>
          <UserForm></UserForm>   
        </span>
        )
}