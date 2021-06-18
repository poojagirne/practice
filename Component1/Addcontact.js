import { Component } from "react";
import React  from "react";
class Addcontact extends React.Component{
  state={
      name:"",
      email:""
  };
   
  add=(e)=>
    {
        e.preventDefault();
        this.props.addContactHandler(this.state);
        console.log(this.state);
        this.setState({name:" ",email:" "})
        console.log(this.props)
        this.props.history.push("/");
    }
render(){
    return(
        <div>
              <form onSubmit={this.add}>
            <input type="text" placeholder="enter your name" name="name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/><br/>
            <input type="email" placeholder="enter your email" name="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
            <button>add</button>
          </form>

        </div>
    )
}
}
export default Addcontact;