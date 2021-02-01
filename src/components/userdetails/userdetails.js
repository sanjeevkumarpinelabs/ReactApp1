import { connect } from "react-redux"

function UserDetails(props){
    return (
        <span> First Name: {props.data.user.fname}</span>
        //<span> First Name: "abcd" </span>

    )
}

const MapStateToProps = function(storeState){
    console.log('MapStateToProps called with store state=', storeState);
    return storeState;

}

export default connect(MapStateToProps,null)(UserDetails)


