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
                <br></br>
                <DisplayInfor name="Hỏi dan IT" age="30"></DisplayInfor>
                <hr></hr>
                <DisplayInfor name="Eric" age="26"></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;