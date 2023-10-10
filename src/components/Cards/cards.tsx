import { ArticlesData } from "../../main";

const Cards = ({articles}: {articles: ArticlesData[]}): JSX.Element => {
    return <>
        {
            articles ? (
                articles.map((article: ArticlesData) => {
                    return <Card {...article} key={article.id} />;
                })
            ) : "Loading..."
        }
    </>
}

const Card = (props: ArticlesData): JSX.Element => {
    const {author, image, dateAdded, title} = props;

    return (
    <div className="card">
    <img className="card__image" src={image.url}/>
    <div className="card__info">
        <div className="card__container">
            <div className="info__initials">
                <p>{author.charAt(0)}{author.charAt(1)}</p>
            </div>
            <div className="card__container">
                <div className="info__author">
                    <p>{author}</p>
                </div>
                <div className="info__date">
                    <p>{dateAdded}</p>
                </div>
            </div>
        </div>
        <div className="info__title">
            <p>{title}</p>
        </div>
    </div>
</div>
    )
}

export default Cards;