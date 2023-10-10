import { useEffect, useRef, useState } from "react";
import Cards from "../Cards/cards";
import { ArticlesData, articles } from "../../main";
import "./cardlist.css";
import "./search.css";

const Cardlist = (): JSX.Element => {
    const [keyword, setKeyword] = useState("");
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const inputTextRef = useRef<HTMLInputElement | null>(null);
    
    const handleInputChange = () => {
        inputTextRef.current ? setKeyword(inputTextRef.current.value) : setKeyword("");
    }
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleInputChange();
    }

    const handleReset = () => {
        if (inputTextRef.current) {
            inputTextRef.current.value = "";
            setKeyword("");
        }
    }

    const search = (articles: ArticlesData[], keyword: string): ArticlesData[] => {
        if (!keyword) {
            return articles;
        } 
        
        return articles.filter(article => (
            article.title.toLowerCase().includes(keyword.toLowerCase())))
    }

    useEffect( () => {
        setFilteredArticles(search(articles, keyword));
    }, [keyword]);

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
                        <form id="actionBar__search" onSubmit={handleSubmit}>
                            <label htmlFor="search__field">Artikel durchsuchen</label>
                            <input type="text" id="search__field" placeholder="Suchbegriff eingeben" ref={inputTextRef} onChange={handleInputChange}/>
                            <input type="button" id="search__reset" value="Zur&uuml;cksetzen" onClick={handleReset}/>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="articles">
                    <div id="app">
                        <Cards articles={filteredArticles}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardlist;