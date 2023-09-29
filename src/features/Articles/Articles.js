import { useGetTodosQuery } from "../api/apiSlice";
import "../../App.css";
import Post from "../postExcerpt/Post";
import "bootstrap/dist/css/bootstrap.css";

function Articles() {
  const { data, error, isLoading } = useGetTodosQuery();
  if (isLoading) {
  return  <p> Loading.... </p>;
  }

  if (error) {
    console.log(error);
  }
  if (data) {
    const arrayOfArticles = data.articles;
    return (
      <div>
        {arrayOfArticles.map((item) => (
          <li className="list">
            {" "}
            <Post item={item} />{" "}
          </li>
        ))}
      </div>
    );
  }
  return null;
}

export default Articles;