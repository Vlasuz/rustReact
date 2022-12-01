import React, {useEffect} from 'react';

const FaqCatalog = (props) => {

    const switchCatalog = (e, itemNum) => {

        document.querySelector('.section-faq__block_show')?.classList.remove('section-faq__block_show')
        document.querySelector('.section-faq__block_active')?.classList.add('section-faq__block_hide')

        setTimeout(() => {
            document.querySelector('.section-faq__block_hide')?.classList.remove('section-faq__block_hide')
            document.querySelector('.section-faq__block_active')?.classList.remove('section-faq__block_active')
            document.querySelectorAll('.section-faq__block')[itemNum].classList.add('section-faq__block_active')
            setTimeout(() => {
                document.querySelectorAll('.section-faq__block')[itemNum].classList.add('section-faq__block_show')
            }, 100)
        }, 300)

        document.querySelector('.catalog__item_active')?.classList.remove('catalog__item_active')
        e.target.closest('button').classList.add('catalog__item_active')
    }

    return (
        <div className="section-faq__catalog">

            {
                props.listOfQuestions.map((item, itemNum) =>
                    <button
                        key={itemNum}
                        className={itemNum == 0 ? "catalog__item catalog__item_active" : "catalog__item"}
                        onClick={e => switchCatalog(e, itemNum)}
                    >
                        <img src={item.icon} alt="Ico"/>
                        <h2>
                            {item.catalog_title}
                        </h2>
                    </button>
                )
            }

        </div>
    );
};

export default FaqCatalog;