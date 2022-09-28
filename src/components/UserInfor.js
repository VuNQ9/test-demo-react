import React from "react";

class UserInfor extends React.Component {
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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }

    handleOnChangeAge = (event) => {
        this.setState({
            name: event.target.age
        })

    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
                I'm child
            </div>
        )
    }
}

export default UserInfor;