import React from "react";

class Like extends React.Component {
    style = {
        cursor : "pointer" ,
        fontSize : 25
    }
  render() {
      let classes = "fa-heart" ;
        if(this.props.liked) classes = "fas fa-heart"
        else classes = "far fa-heart"
    return(
        <i style = {this.style} onClick = {this.props.onToggle} className = {classes}></i>
    )
  }
}

export default Like;
