import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import Articles from "./components/Articles";
import "./styles.css";

const articles = [
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2011-11-23"
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-23"
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-10-21"
  },
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2019-10-22"
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2018-04-01"
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2017-01-21"
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 83,
    date: "2020-02-22"
  }
];

export default function App() {
  const [filter, setFilter] = useState(articles);

  const mostUpvoted = useCallback(() => {
    setFilter(
      articles.concat().sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1))
    );
  }, []);

  const mostRecent = useCallback(() => {
    setFilter(
      articles.concat().sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return aDate > bDate ? -1 : 1;
      })
    );
  }, []);

  return (
    <div className="App">
      <h1>Articles HackerRank</h1>
      <h2>Sort Articles!</h2>
      <Button onClick={() => mostUpvoted()} variant="contained">
        Most Upvoted
      </Button>
      <Button onClick={() => mostRecent()} variant="contained">
        Most Recent
      </Button>

      <Articles articles={filter} />
    </div>
  );
}
