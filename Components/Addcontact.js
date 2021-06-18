import React from "react";
class Addcontact extends React.Component
{
        state={
            name:"",
            email:""
        }

   add=(e)=>
  {
e.preventDefault();
console.log(this.state)
this.props.addcontacthandler(this.state)
  }
  render(){
      return(
          <div>
              <form onSubmit={this.add}>
              <input type="text" placeholder="enter the name" name="name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
              <input type="email" placeholder="enter the email" name="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} />
              <button>submit</button>
              </form>
             
          </div>
      )
  }
}
export default Addcontact;