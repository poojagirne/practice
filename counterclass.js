import { Component } from "react";
import React  from "react";
class Classcounter extends React.Component{
constructor(props)
{
    super(props)

    console.log("constructor")
    this.state={
        value:0,
    };
}

componentWillMount()
{
    console.log("componentWillMount")
    console.log(this.state)

}
componentDidMount()
{
    console.log("componentDidMount");
    console.log(this.state)

}
render()
{
    return(
        <div><p>{this.state.value}</p>
            <button onClick={()=>this.setState({value:this.state.value+1})}> +</button>
            <button onClick={()=>this.setState({value:this.state.value-1})}> -</button>

        </div>
    )
}

shouldComponentUpdate(nextProps, nextState)
{
    console.log("shouldComponentUpdate");
    console.log(this.state)
    console.log(this.nextProps)
    console.log(this.nextState)
    return true;
}
componentWillUpdate()
{
    console.log("componentWillUpdate");
    console.log(this.state)
}
componentDidUpdate()
{
    console.log("componentDidUpdate");
    console.log(this.state)
}
componentWillUnmount()
{
    console.log("componentWillUnmount");
    console.log(this.state)
}
}
export default Classcounter;
