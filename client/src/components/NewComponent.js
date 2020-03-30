import React from 'react'

class NewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Atem'
        }
    }

    render() {
        const {name} = this.state
        return (
            <div className="App">
                <header className="App-header">
                <div>Welcome to the GOOD VIBES ON AIR by  {name}.</div>
                </header>
            </div>
        );
    }
}

export default NewComponent;