import Header from "./Components/ComponentsHeader/Header";
import Aside from "./Components/ComponentsAside/Aside";
import RightsContainer from "./Components/ComponentsRights/RightsContainer";
import AllPopups from "./Components/Popups/AllPopups";
import './styles.css'
import States from "./States";
import MainRouters from "./Components/MainRouters";

function App() {

    function closeModal(block, button, e) {
        if(e.target.closest("."+block) === null && e.target.closest("."+button) === null){
            if(document.querySelector("."+button+"_active")) document.querySelector("."+button).classList.remove(button+"_active")
            document.querySelectorAll("."+block).forEach(item => {
                item.classList.remove(block+"_active")
            })
        }
    }
    document.addEventListener('click', function (e) {
        closeModal('header__lang', 'lang__button', e)
        closeModal('burger__menu', 'header__burger', e)
        closeModal('item__dropdown', 'item__menu', e)
        closeModal('section-right__smiles', 'smiles', e)
        closeModal('section-right__rules', 'resources__button', e)
    })

    const states = States()


    return (
        <>
            <Header states={states}/>
            <main className="wrapper">
                <Aside states={states}/>
                <MainRouters states={states}/>
                <RightsContainer states={states}/>
            </main>

            <AllPopups states={states}/>
        </>
    );
}

export default App;
