import HistoryItem from "./HistoryItem";

const HistoryList = ({ transactions, changeHistoryList }) => {

    return (
        <div className="section-history__block">

            {
                transactions
                    ?.filter(item => item.type !== changeHistoryList.switcher_which)
                    ?.filter(item => changeHistoryList.switcher_type ? item.pay_type === changeHistoryList.switcher_type : item)
                    ?.sort((a, b) =>
                        changeHistoryList.switcher_sort === "date" ?
                            Date.parse(b.created_at.slice(0, b.created_at.indexOf(" ")).split("-").reverse().join("-") + "T" + b.created_at.slice(b.created_at.indexOf(" ")).replace(" ", '')) -
                            Date.parse(a.created_at.slice(0, a.created_at.indexOf(" ")).split("-").reverse().join("-") + "T" + a.created_at.slice(a.created_at.indexOf(" ")).replace(" ", ''))
                            :
                            b.value - a.value
                    )
                    .map(item =>
                        <HistoryItem
                            key={item.id}
                            data={item}
                        />
                    )
            }


        </div>
    );
};

export default HistoryList;