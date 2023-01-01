import React, { Component } from 'react';
import Weather from '../API/Weather';
import Map from '../Layaut/Map';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import Title from '../Animate/Title';

export class Contact extends Component {


    render() {
        // const {auth} = this.props;
        // if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="ContactPage">
                {/* <Title lineContent="Witaj w" lineContent2="O Mnie"/> */}
                <Weather/>
                <div className="map">
                <div className="Paper">
                    <div className="Check">
                            <h2>Jak się ze mną Skontaktować ?</h2>
                            <div>Tel. 796 895 079<br/>
                            E-Mail: Bastric91@gmail.com<br/>
                            </div>

                    </div>
                    <div><h2>Gdzie mnie Szukać ?</h2>
                    Wraszawa - Wawer - Radość
                    lub 
                    Holandia:
                    
                    </div>
                    </div>
                    <div className="AllMap">
                    <Map/>
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
