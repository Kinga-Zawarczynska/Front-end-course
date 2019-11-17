import React from 'react';

class Input extends React.Component {
    constructor () {
    super();
    this.state = {firstName:'', lastName:''}
    }
    render () {
        return (
        <div>
        <input value={this.state.firstName} onInput="{this.state.setFirstName.bind(this)}" />
        <output>{this.state.firstName}</output>

        <input value="{this.state.lastName}" onInput="{this.state.setLastName.bind(this)}" />
        <output>{this.state.lastName}</output>
        </div>
    
    );
    }

    setFirstName(e){
        this.setState({
        firstName: e.target.value
        });
        }
        
        
    setLastName(e){
        this.setState({
        lastName: e.target.value
        });
        }
}
    
    export default Input;