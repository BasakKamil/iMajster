import React from "react";
import { useTranslation } from "react-i18next";

const Steporderone = (props) => {

    const { t } = useTranslation();
    

    return (
        <div className="NiceBasket">
                  
        <table>
            <tbody>
                <tr className='een'>
                    <th></th>
                    <th>Nazwa:</th>
                    <th>Cena:</th>
                </tr>
                {props.items.map((item,index) => {
                    return <tr key={index}>
                        <td>
                            <button  className="btn btn-dark" onClick={()=>props.removeFromCart(index)}>Usun</button>
                        </td>
                         <td>{props.item.name}</td>
                         <td>{props.item.price} zł</td>
                    </tr>
                })}
            </tbody>
        </table>
        <br/>
                <p className="TotalBasket">
                    <b>  Wszystko : {props.total()} zł</b>
                </p>
                <p className='Aantal'>
                    <b> Ilosc: {props.items.length}</b>
                </p>
                <button className="btn btn-danger" onClick={props.nextStep}>Kup !</button>

    </div>

    )
}

export default Steporderone