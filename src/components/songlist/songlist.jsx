import React, { Component } from "react";
import{connect} from "react-redux";
import {SelectedSong} from "../../action/index.js"
class Songlist  extends Component{
    
    render(){
        return(
            <div className="container">
                <div className="row">
                        <h1>Song List:</h1>
                        {
                            this.props.list.map(data=>(
                                <div className="col-md-12" key={data.id}>
                                    <h1>{data.name}</h1>
                                    <p>{data.duration}</p>
                                    <button type="button" className="btn btn-danger btn-md" 
                                onClick={() => this.props.SelectedSong(data)}
                                >view more</button>
                                </div>
                                
                            ))
                        }
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {list:state.Songlist}
}
export default  connect (mapStateToProps,{SelectedSong})(Songlist);