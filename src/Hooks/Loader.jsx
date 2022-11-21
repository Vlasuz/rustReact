import React from 'react';
import {useEffect, useState} from "react";

const Loader = () => {
    const [loader, isLoader] = useState(true)
    useEffect(() => {
        isLoader(false)
    })
    if(loader) {
        return(
            <section>
                <div className="loading">
                    <div className="load">
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default Loader;