import React from 'react';
import Translate from "../../Hooks/Translate";

const HistoryItemStats = ({ data }) => {

    const status = () => {
        let className,
            image,
            title;
        switch (data.status) {
            case "success":
                className = 'item__status item__status_good';
                image = 'images/green-check.svg';
                title = <Translate>history_status_sent</Translate>;
                break;
            case "activate":
                className = 'item__status item__status_good';
                image = 'images/green-check.svg';
                title = <Translate>history_status_active</Translate>;
                break;
            case "waiting":
                className = 'item__status item__status_grey';
                image = 'images/status-progress.svg';
                title = <Translate>history_status_process</Translate>;
                break;
            case "error":
                className = 'item__status item__status_grey';
                image = 'images/status-error.svg';
                title = <Translate>history_status_cancel</Translate>;
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
            <img className={data.status === 'error' ? 'hover-to-error' : ''} src={status().image} alt="Ico"/>
            {
                data.status === 'error' &&
                <p className="error-sms">
                    Lorem ipsum dolor sit amet. sit amet.
                </p>
            }
        </div>
    );
};

export default HistoryItemStats;