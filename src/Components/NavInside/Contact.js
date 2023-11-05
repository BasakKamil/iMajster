import React, { Component } from 'react';
import Map from '../Layaut/Map';
import { connect } from 'react-redux';
import Weather from '../API/Weather';

export class Contact extends Component {


    render() {
        
        return (
            <div className="ContactPage">
               
                <div className="map container">
                <div className="Paper row">
                    <div className="Check col">
                            <h2>Jak się ze mną Skontaktować ?</h2>
                            <div>Tel. 796 895 079<br/>
                            E-Mail: Bastric91@gmail.com<br/>
                            </div>
                            <div><h2>Gdzie mnie Szukać ?</h2>
                           Wraszawa - Wawer - Radość
                           lub 
                           ROTTERDAM
                    
                           </div>

                    </div>
                    
                    <div className="AllMap col">
                         <Map/>
                    </div>
                    </div>
                    <div>
                        <Weather/>
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Contact)
