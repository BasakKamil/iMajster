import React from 'react';

const Notifications = (props)=>{
    const {notifications} = props;

    return(
     
        <div className="NotificationsKamcia">
            <div> {notifications && notifications.map(item =>{
                console.log(item);
                return (
                    <div className="NewStat">
                    <ul key={item.id}>
                     <li>
                        {item.user}
                     </li>
                     <li>
                         {item.content}
                     </li>
                     
                    </ul>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Notifications