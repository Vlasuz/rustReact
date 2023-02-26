import React, {useEffect, useState} from 'react';
import FaqTop from "../Components/ComponentsFaq/FaqTop";
import FaqCatalog from "../Components/ComponentsFaq/FaqCatalog";
import FaqItem from "../Components/ComponentsFaq/FaqItem";
import axios from "axios";
import GlobalLink from "../Hooks/GlobalLink";

const FaqPage = () => {

    const [faq, setFaq] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {

        axios.get("https://"+GlobalLink()+'/api/base/faq/').then(res => {
            setFaq(res.data)
            setError(false)
        }).catch(error => setError(true))

    }, [])



    return (
        <section className="section-faq">
            <FaqTop/>

            <div className="section-faq__content">
                <FaqCatalog faq={faq} error={error}/>
                <hr/>

                <div className="section-faq__switcher">
                    {
                        !error && faq.map((item, itemNum) =>
                            <div key={itemNum}
                                className={itemNum === 0 ? "section-faq__block section-faq__block_active section-faq__block_show" : "section-faq__block"}>

                                <FaqItem item={item}/>

                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default FaqPage;