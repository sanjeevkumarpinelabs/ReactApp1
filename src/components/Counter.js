import { connect } from "react-redux"

function Counter(props){
    return (
        <span id= 'mycount'> Count: {props.data.count}</span>
    )

}

const MapStateToProps = function(storeState){
    return storeState;

}

export default connect(MapStateToProps,null)(Counter)