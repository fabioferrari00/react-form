import { useState } from "react";

const initialArticles = [
  {
    id: 1,
    title: "Pasta"
  },
  {
    id: 2,
    title: "Uova"
  },
  {
    id: 3,
    title: "Pane"
  },
  {
    id: 4,
    title: "Latte"
  },
  {
    id: 5,
    title: "Gelati"
  },
];

function App() {
  const [newArticle, setNewArticle] = useState("");
  const [articles, setArticles] = useState(initialArticles);

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: articles[articles.length - 1].id + 1,
      title: newArticle
    }

    setArticles([...articles, obj]);
    setNewArticle("");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Lista prodotti</h1>
          </div>
          <div className="col-12">
            <ul className="list-unstayled list-group">
              {articles.map((article) => {
                return (
                  <li className="list-group-item" key={article.id}>{article.title}</li>
                )
              })}
            </ul>
          </div>
          <div className="col-12">
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="d-flex">
                <input type="text" className="form-control me-2" placeholder="Inserisci articolo" value={newArticle} onChange={(e) => setNewArticle(e.target.value)} />
                <button className="btn btn-success">Inserisci</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
