import { useEffect, useState } from "react";
import { ArticlesData } from "../main";

export default function useFetchArticles(url: string) {
    const [articles, setArticles] = useState<ArticlesData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (url: string) => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setArticles(result.record.record);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching articles: ", error);
            }
        }
        
        fetchData(url);
    }, [url])

    return {articles, isLoading};
}