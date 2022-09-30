import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         address: "Hoi dan IT",
//         age: ""
//     };

//     handleClick(event) {
//         console.log(">>> Click me my button");
//         console.log("My name is ", this.state.name);
//         this.setState({
//             name: "Leo Messi"
//         })
//     }

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })

//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();

//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm from {this.state.address}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     <button>Submit</button>

//                     <label>Your age: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//                 I'm child
//             </div>
//         )
//     }
// }
const AddUserInfor = (props) => {
    // state = {
    //     name: "",
    //     address: "Hoi dan IT",
    //     age: ""
    // };
    const [name, setName] = useState("");
    const [address, setAddress] = useState("Đồng Nai");
    const [age, setAge] = useState("");

    // handleClick(event) {
    //     console.log(">>> Click me my button");
    //     console.log("My name is ", this.state.name);
    //     this.setState({
    //         name: "Leo Messi"
    //     })
    // }

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
        // this.setState({
        //     name: event.target.value
        // })

    }

    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name}, I'm {age} and I'm from {address}.
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <button>Submit</button>

                <label>Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
            I'm child
        </div>
    )
}
export default AddUserInfor;