import { useEffect, useState } from "react";
import "./search.css"
import { ArticlesData, articles } from "../../main";

const Search = () => {
    const [keyword, setKeyword] = useState("");

    const searchArticles = (articles: ArticlesData[], keyword: string) => {
        if (!keyword) {
            return articles;
        }
                
        return articles.filter(article => (
                    article.title.toLowerCase().includes(keyword.toLowerCase())))
                    // .filter(element => {
                    //     if (element !== undefined) 
                    //         return element;
                    
    }

    useEffect( () => {
        searchArticles(articles, keyword);
    }, [keyword]);

    return <>
        <form id="actionBar__search" >
            <label htmlFor="search__field">Artikel durchsuchen</label>
            <input type="text" id="search__field" placeholder="Suchbegriff eingeben" onChange={ (e) => { setKeyword(e.target.value); } }/>
            <input type="submit" id="search__submit" value="Suchen" />
        </form>
    </>
}

export default Search;

console.log(keyword);
