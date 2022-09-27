//class component
//function component
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "VuNQ",
        address: "Hoi dan IT",
        age: 26
    };

    handleClick(event) {
        console.log(">>> Click me my button");
        console.log("My name is ", this.state.name);
        this.setState({
            name: "Leo Messi"
        })
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from  {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;