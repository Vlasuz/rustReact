import React from 'react';

const HistoryItemStats = (props) => {

    const status = () => {
        let className,
            image,
            title;
        switch (props.status) {
            case "sended":
                className = 'item__status item__status_good';
                image = 'images/green-check.svg';
                title = 'Отправлен';
                break;
            case "activated":
                className = 'item__status item__status_good';
                image = 'images/green-check.svg';
                title = 'Активирован';
                break;
            case "in process":
                className = 'item__status item__status_grey';
                image = 'images/status-progress.svg';
                title = 'В обработке';
                break;
            case "cancel":
                className = 'item__status item__status_grey';
                image = 'images/status-error.svg';
                title = 'Отменен';
                break;
        }

        return {
            className,
            image,
            title
        }
    }

    return (
        <div className={status().className}>
            <span>{status().title}</span>
            <img className={props.status === 'cancel' ? 'hover-to-error' : ''} src={status().image} alt="Ico"/>
            {
                props.status === 'cancel' &&
                <p className="error-sms">
                    Lorem ipsum dolor sit amet. sit amet.
                </p>
            }
        </div>
    );
};

export default HistoryItemStats;