import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello React ! My name is {this.props.name}</p>
            </div>
        )
    }
}
export default Hello;