import { useEffect, useState } from "react";
import Cards from "../Cards/cards";
import { ArticlesData } from "../../main";
import "./cardlist.css";
import "./search.css";
import Search from "../Search/search.tsx";

const ArticlesModule = (): JSX.Element => {
    const [keyword, setKeyword] = useState("");
    const [articles, setArticles] = useState<ArticlesData[] | null>(null);
    const [loading, setLoading] = useState(true);

    const search = (articles: ArticlesData[], keyword: string): ArticlesData[] => {
        if (!keyword && articles) {
            return articles;
        } 
        
        return articles.filter(article => (
            article.title.toLowerCase().includes(keyword.toLowerCase())))
    }

    useEffect(() => {
        const fetchArticles = async (url: string) => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                const articlePromise = result.record;
                setArticles(articlePromise.record);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching articles: ", error);
            }
        }

        fetchArticles("https://api.jsonbin.io/v3/qs/6526ac7012a5d376598a57fe");
    }, [])

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
                            (!loading && articles) ? (
                                <Cards articles={search(articles, keyword)}/>
                            ) : <div className="articles-loading">Loading...</div>
                        }
                </div>
            </div>
        </>
    )
}

export default ArticlesModule;