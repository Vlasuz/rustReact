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
            <Header
                dataInfo={states.dataInfo}
                setAuth={states.setAuth}
            />
            <main className="wrapper">

                <Aside
                    switcherRights={states.switcherRights}
                    onSwitcherRightsChange={states.setSwitcherRights}
                    timeToFly={states.timeToFly}
                    setTimeToFly={states.setTimeToFly}
                    setIsAirdropEnd={states.setIsAirdropEnd}
                    numSwitch={states.numSwitch}
                    setNumSwitch={states.setNumSwitch}
                    setListAirdropsMembers={states.setListAirdropsMembers}
                    setShowTimerToFly={states.setShowTimerToFly}
                />

                <MainRouters/>

                <RightsContainer
                    onCoinsChange={states.setCoins}
                    onCoins={states.coins}
                    dataItems={states.dataItems}
                    switcherRights={states.switcherRights}

                    numSwitch={states.numSwitch}
                    setNumSwitch={states.setNumSwitch}
                    listAirdropsMembers={states.listAirdropsMembers}
                    setListAirdropsMembers={states.setListAirdropsMembers}
                    showTimerToFly={states.showTimerToFly}
                />
            </main>

            <AllPopups
                dataInfo={states.dataInfo}
            />
        </>
    );
}

export default App;
