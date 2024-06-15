import React from 'react';

interface Props{
    HandleClick:()=>void
}

const NotificationSuccess = (props:Props) => {
    return (
        <div className="overlay">
            <div className="center">

            </div>
        </div>
    );
};

export default NotificationSuccess;