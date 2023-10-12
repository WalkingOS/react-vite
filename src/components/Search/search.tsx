import React, { useRef } from "react";
// import { ArticlesData, articles } from "../../main";

const Search = ({onKeywordChange}: {onKeywordChange: (x: string) => void}) => {
    const textInputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    const handleReset = () => {
        if(textInputRef.current) textInputRef.current.value = "";
        onKeywordChange("");
    }

    return <>
        <form id="actionBar__search" onSubmit={handleSubmit}>
            <label htmlFor="search__field">Artikel durchsuchen</label>
            <input type="text" id="search__field" placeholder="Suchbegriff eingeben" ref={textInputRef} onChange={(event) => onKeywordChange(event?.target.value)}/>
            <input type="button" id="search__reset" value="Zur&uuml;cksetzen" onClick={handleReset}/>
        </form>
    </>
}

export default Search;