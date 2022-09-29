//class component
//function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "VuNQ9", age: 27 },
            { id: 2, name: "VuNQ1", age: 28 },
            { id: 3, name: "VuNQ2", age: 16 },
            { id: 4, name: "VuNQ3", age: 15 },
        ]
    }

    handleAddNewUser = (userObject) => {
        console.log(">>> Check data from ", userObject);
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }
    //JSX
    render() {
        const test = "VuNQ9999"
        return (
            <>
                {test}
                <br />
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        );
    }
}

export default MyComponent;