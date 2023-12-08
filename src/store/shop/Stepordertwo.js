import React, { Component } from 'react'

export class Stepordertwo extends Component {

    realize = () =>{
        this.props.order()
    }
    render() {
        const {items} = this.props;
        const {profile} = this.props;
        
        console.log(profile);
       
        return (
            <div className="NiceBasket">
                Podsumowanie!
                <table className="Sum">
                <tbody>
                <tr><td>Nazwa:</td><td>Szt</td></tr>
                {items.map((item,index)=>{
                return <tr key={index}>
                                 <td>{item.name}</td>
                                 <td> </td>
                      </tr>
                      
                })}
                </tbody>
             
                </table>
                <b className="AdressSend"> Adres do Wysyłki: </b>
                <table>
                    <tbody>
                        <tr>
                            <td>Imie i nazwisko:</td>
                             <td>{profile.name} {profile.surname}</td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={this.props.prevStep} className="btn btn-secondary">Cofnij</button>
                <button onClick={this.props.nextStep} className="btn btn-danger">Zamawiam!</button>
            </div>
        )
    }
}

export default Stepordertwo
