import React from 'react';
import FaqTop from "../Components/ComponentsFaq/FaqTop";
import FaqCatalog from "../Components/ComponentsFaq/FaqCatalog";
import FaqItem from "../Components/ComponentsFaq/FaqItem";

const FaqPage = () => {

    const listOfQuestions = [
        {
            'icon': "images/cat-ico-1.svg",
            'catalog_title': 'Режим «Аирдроп»',
            'block_answers': [
                {
                    'title': 'Question 1 TT 1',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                },
                {
                    'title': 'Question 2 TT 1',
                    'text': 'Lorem adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                }
            ],
        },
        {
            'icon': "images/cat-ico-2.svg",
            'catalog_title': 'Режим «Схватка»',
            'block_answers': [
                {
                    'title': 'Question 1 TT 2',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                },
                {
                    'title': 'Question 4 TT 2',
                    'text': 'Lorem adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                }
            ],
        },
        {
            'icon': "images/cat-ico-3.svg",
            'catalog_title': 'Баланс',
            'block_answers': [
                {
                    'title': 'Question 1',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                },
                {
                    'title': 'Question 2',
                    'text': 'Lorem adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                }
            ],
        },
        {
            'icon': "images/cat-ico-4.svg",
            'catalog_title': 'Трейды',
            'block_answers': [
                {
                    'title': 'Question 1',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                },
                {
                    'title': 'Question 2',
                    'text': 'Lorem adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                }
            ],
        },
        {
            'icon': "images/header__coins.svg",
            'catalog_title': 'Валюта сайта',
            'block_answers': [
                {
                    'title': 'Question 1',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                },
                {
                    'title': 'Question 2',
                    'text': 'Lorem adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                }
            ],
        },
        {
            'icon': "images/cat-ico-5.svg",
            'catalog_title': 'Другое',
            'block_answers': [
                {
                    'title': 'Question 1',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                },
                {
                    'title': 'Question 2',
                    'text': 'Lorem adipisicing elit. Blanditiis iure maiores maxime nihil pariatur porro provident quas quis quos soluta.'
                }
            ],
        },
    ]

    return (
        <section className="section-faq">
            <FaqTop/>

            <div className="section-faq__content">
                <FaqCatalog listOfQuestions={listOfQuestions}/>
                <hr/>

                <div className="section-faq__switcher">
                    {
                        listOfQuestions.map((item, itemNum) =>
                            <div
                                key={itemNum}
                                className={itemNum === 0 ? "section-faq__block section-faq__block_active section-faq__block_show" : "section-faq__block"}
                            >
                                <FaqItem item={item.block_answers}/>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default FaqPage;