import React from 'react'

interface IChatSmilesProps {
    isOpenSmiles: any
}

export const ChatSmiles: React.FC<IChatSmilesProps> = ({isOpenSmiles}) => {

    return (
        <>
            <div className={"section-right__smiles" + (isOpenSmiles ? " section-right__smiles_active" : "")}>
                <div className="smiles__inner">
                    <div className="smiles__block">
                        <ul>
                            <li>
                                <button>
                                    <img src="img/Bitmap-0.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-1.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-2.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-3.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-4.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-5.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-0.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-1.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-2.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-3.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-4.png" alt="Smile" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="img/Bitmap-5.png" alt="Smile" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="smiles__switches">
                    <ul>
                        <li>
                            <button>Смайлики</button>
                        </li>
                        <li className="li_active">
                            <button>Стикеры «Фермер»</button>
                        </li>
                        <li>
                            <button>«Стикеры Грибник»</button>
                        </li>
                        <li>
                            <button>Смайлики</button>
                        </li>
                        <li>
                            <button>Стикеры «Фермер»</button>
                        </li>
                        <li>
                            <button>«Стикеры Грибник»</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
