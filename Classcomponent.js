import { Component } from "react";
import React  from "react";
class Classcomponent extends React.Component{
constructor(props)
{
    super(props)

    console.log("constructor")
    this.state={
        hello:"pooja"
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
changestate()
{
    this.setState({hello:"poo"});

}

render()
{
    return(
        <div><p>{this.state.hello}</p>
            <button onClick={this.changestate.bind(this)}>click here </button>
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
export default Classcomponent;
