import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { name, age } = this.props;//object;
        // props => viet tat properties
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        );
    }
}

export default DisplayInfor;