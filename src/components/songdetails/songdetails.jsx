import React from "react";
import {connect} from "react-redux";
const Songdetails=(props)=>{
    
    if (!props.details) { return null};
     console.log(props)
        return(
            <div className="container">
                <div className="row">
                        <h1>Song Details:</h1>
                        <h1>{props.details.name}</h1>
                        <p>{props.details.duration}</p>
                </div>
            </div>
        )
    }

const mapStateToProps=state=>{
    console.log(state);
    return {details:state.details};
    
}
export default connect(mapStateToProps) (Songdetails);