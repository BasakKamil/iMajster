import React, { Component } from 'react'

export class filter extends Component {
    render() {
        return (
            <div className="row FilterKamil">
                <div className="col-md-4">
                    Znaleziono: {this.props.count} 
                </div>
                <div className="col-md-4">
                    <select className="form-conrol KamilFormContr" value={this.props.sort}
                    onChange={this.props.handleChangeSort}>
                         <option value="">Select</option>
                         <option value="">Lowest to Highest</option>
                         <option value="">Highest to Lowest</option>
                    </select>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default filter
