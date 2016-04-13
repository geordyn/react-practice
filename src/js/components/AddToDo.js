import React from 'react';

import ToDo from './ToDo';

//components: basic is a function that returns some jsx
//sort of like a template url with no logic or ctrl

// export default function AddToDo() { // needs to start with capital letter
//
//     return (
//
//         <h1> Testerrrrr </h1>
//
//     );
// //end exp default
// }


export default class AddToDo extends React.Component { // classes. think of this as constructor function
    constructor( props ){
        super( props ); // you have to do this before you can use the this keyword

        this.state = {//tracks all the data that we need to track inside of this component
            newToDoName: 'initial state',
            toDos: [],
            lastId: 0

        };
    }

// METHODS BELOW //

handleChange( field, event ) { // this handles allllllll fields on change by using field
    this.setState({ [field]: event.target.value });
};

createToDo() {
    this.setState({ lastId: ++this.state.lastId }) //makes ids, janky af
    let newToDo = {
        name: this.state.newToDoName,
        complete: false,
        id: this.state.lastId
    }

    this.setState({ toDos: [ newToDo, ...this.state.toDos ], newToDoName: '' }) //creates a new array that has all the pieces of the previous array, and adds our new stuff, then clears input
    console.log(this.state) //check to see if its working
}




//any class react component needs first is render
    render(){
        const style = this.getStyles(); //assigning styles to the get Styles func
        let toDos = this.state.toDos.map( toDo =>  <ToDo key={ toDo.id } { ...toDo } /> ); //every property in that to do object, we want to pass the data down
        console.log(toDos);

        return( //this is where it goes to get whatever youre supposed to display
            //can only return one top level element at a time. so you'll usually always need a wrapper div
            //value={ this.state.newToDoName } binds this value to the state
            //onChange is binded because we still want it to be referring to AddToDo
            //
            <div>

            <label style={ style.label }>Add To do</label>
            <input style={ style.input } type="text" value={ this.state.newToDoName } onChange={ this.handleChange.bind( this, 'newToDoName' ) }></input>

            <button style={ style.button } onClick={ this.createToDo.bind( this )}>
                Submit
            </button>

            <ul>
            { toDos }
            </ul>

            </div>
        );
    }

    getStyles() {
        return{
            label: {
                fontSize: 30,

            },
            button: {
                margin: 10
            },
            input: {
                fontSize: 12,
                padding: 5,
                marginLeft: 5
            }
        }

    //end getStyles
    }

//end class
}
