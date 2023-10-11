import { useState } from "react";
import Cards from "../Cards/cards";
import { ArticlesData, articles } from "../../main";
import "./cardlist.css";
import "./search.css";
import Search from "../Search/search.tsx";

const ArticlesModule = (): JSX.Element => {
    const [keyword, setKeyword] = useState("");

    const search = (articles: ArticlesData[], keyword: string): ArticlesData[] => {
        if (!keyword || keyword === "") {
            return articles;
        } 
        
        return articles.filter(article => (
            article.title.toLowerCase().includes(keyword.toLowerCase())))
    }

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
                        <Search keyword={setKeyword}/> 
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="articles">
                    <div id="app">
                        { 
                            articles ? (
                                <Cards articles={search(articles, keyword)}/>
                            ) : "Loading..."
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticlesModule;