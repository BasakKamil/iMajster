import React, { Component } from 'react';
import {connect} from 'react-redux';

export class History extends Component {
    render() {
        return (
            <div className="history-controls">
                <button className="btn btn-secondary KamilABut" onClick={this.props.undo}>Cofnij</button>
                <button className="btn btn-secondary KamilABut" onClick={this.props.redo}>Przywróć</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        undo: () => dispatch({type:'UNDO'}),
        redo: () => dispatch({type:'REDO'}),
    }
}
export default connect(null,mapDispatchToProps)(History)
