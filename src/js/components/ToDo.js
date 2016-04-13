import React from 'react';

export default class ToDo extends React.Component {

    constructor( props ){
        super( props )
    }

    render() {
        //passing the props down from the parent component
        return(
            <div>
                <li>{ this.props.name }</li>


            </div>
        );
    }

}
