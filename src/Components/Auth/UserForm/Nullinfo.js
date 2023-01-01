import React, { Component } from 'react'

export class Nullinfo extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <React.Fragment>
            <div className="Null">Nie uzupełniłeś któregoś pola!
            </div>
            <button 
            onClick={this.back}
            className="btn-success Kamcio"
            >
            Wróć!</button>
            </React.Fragment>

        )
    }
}

export default Nullinfo
