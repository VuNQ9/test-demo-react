//class component
//function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    //JSX
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
                <DisplayInfor></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;