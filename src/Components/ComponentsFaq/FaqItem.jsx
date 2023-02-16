import React from 'react';

const FaqItem = ({item}) => {

    return (
        <>
            {
                item.faqs.map(question =>
                    <div key={question.id} className="section-faq__item">
                        <div
                            className="item__head"
                            onClick={e => e.target.closest('.section-faq__item').classList.toggle('section-faq__item_active')}
                        >
                            <h2>
                                {question.title}
                            </h2>
                            <div className="arr">
                                <img src="../images/faq-arr.svg" alt="Arr"/>
                            </div>
                        </div>
                        <div className="item__body">
                            <p>
                                {question.text}
                            </p>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default FaqItem;