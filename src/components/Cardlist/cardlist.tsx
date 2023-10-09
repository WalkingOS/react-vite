import Cards from "../Cards/cards";
import Search from "../Search/search";
import "./cardlist.css";

const Cardlist = (): JSX.Element => {
    return (
        <>
            <div className="top">
                <div className="container">
                    <h1 className="top__headline">Artikel</h1>
                </div>
            </div>

            <div className="container">
                <div className="actionBar">
                    <div className="actionBar-container">
                        <Search />
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="articles">
                    <div id="app">
                        <Cards/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardlist;