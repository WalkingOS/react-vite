import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import Cardlist from './components/Cardlist/cardlist.tsx';

export interface ArticlesData {
  id: string, 
  author: string,
  title: string,
  dateAdded: string,
  image: { url: string, },
}

export const articles: ArticlesData[] = [
  {
    id: "f4op3r2",
    author: "John Doe",
    title: "New Article",
    dateAdded: "2023-06-23",
    image: {
      url: "https://picsum.photos/300/150?random=1",
    },
  },
  {
    id: "e8tz2y1",
    author: "Jane Smith",
    title: "Exciting News",
    dateAdded: "2023-06-22",
    image: {
      url: "https://picsum.photos/300/150?random=2",
    },
  },
  {
    id: "g6qo9p4",
    author: "David Johnson",
    title: "Incredible Discoveries",
    dateAdded: "2023-06-21",
    image: {
      url: "https://picsum.photos/300/150?random=3",
    },
  },
  {
    id: "u2mw5v3",
    author: "Emily Davis",
    title: "Latest Research",
    dateAdded: "2023-06-20",
    image: {
      url: "https://picsum.photos/300/150?random=4",
    },
  },
  {
    id: "r1ek7s9",
    author: "Michael Wilson",
    title: "Breaking News",
    dateAdded: "2023-06-19",
    image: {
      url: "https://picsum.photos/300/150?random=5",
    },
  },
  {
    id: "t4zn6x5",
    author: "Sarah Thompson",
    title: "Insightful Article",
    dateAdded: "2021-06-18",
    image: {
      url: "https://picsum.photos/300/150?random=6",
    },
  },
  {
    id: "k9bg3h2",
    author: "Christopher Adams",
    title: "Current Trends",
    dateAdded: "2023-06-17",
    image: {
      url: "https://picsum.photos/300/150?random=7",
    },
  },
  {
    id: "j7er2u4",
    author: "Olivia Brown",
    title: "Thought-provoking Ideas",
    dateAdded: "2023-06-16",
    image: {
      url: "https://picsum.photos/300/150?random=8",
    },
  },
  {
    id: "p2ln9a3",
    author: "Daniel Miller",
    title: "Exploring New Horizons",
    dateAdded: "2022-06-15",
    image: {
      url: "https://picsum.photos/300/150?random=9",
    },
  },
  {
    id: "o6ts5e1",
    author: "Sophia Lee",
    title: "Innovative Solutions",
    dateAdded: "2023-06-14",
    image: {
      url: "https://picsum.photos/300/150?random=10",
    },
  },
  {
    id: "m3cv8b2",
    author: "James Green",
    title: "The Future of Technology",
    dateAdded: "2023-06-13",
    image: {
      url: "https://picsum.photos/300/150?random=11",
    },
  },
  {
    id: "n5dy1f3",
    author: "Mia Anderson",
    title: "Inspiring Stories",
    dateAdded: "2022-06-12",
    image: {
      url: "https://picsum.photos/300/150?random=12",
    },
  },
];

// initializes a React application and renders the App component into an HTML element with the id "root."
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)

ReactDOM.createRoot(document.getElementById("article__app")!).render(
  <Cardlist />
)