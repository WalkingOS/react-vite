import { useState } from "react";
import Cards from "../Cards/cards";
import { ArticlesData } from "../../main";
import "./cardlist.css";
import "./search.css";
import Search from "../Search/search.tsx";
import useFetchArticles from "../../utils/useFetch.tsx";

const ArticlesModule = (): JSX.Element => {
    const [keyword, setKeyword] = useState("");
    const {articles, isLoading} = useFetchArticles("https://api.jsonbin.io/v3/qs/6526ac7012a5d376598a57fe");

    const search = (articles: ArticlesData[], keyword: string): ArticlesData[] => {
        if (!keyword && articles) {
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
                        <Search onKeywordChange={setKeyword}/> 
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="articles">
                        {
                            (!isLoading && articles) ? (
                                <Cards articles={search(articles, keyword)}/>
                            ) : <div className="articles-loading">Loading...</div>
                        }
                </div>
            </div>
        </>
    )
}

export default ArticlesModule;