import { useState } from "react";

const initialArticles = ["Pasta", "Uova", "Pane", "Latte", "Merenda"];

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Lista prodotti</h1>
          </div>
          <div className="col-12">
            <ul className="list-unstayled list-group">
              {initialArticles.map((article, index) => {
                return (
                  <li className="list-group-item" key={index}>{article}</li>
                )
              })}
            </ul>
          </div>
          <div className="col-12">
            <form>
              <div className="d-flex">
                <input type="text" className="form-control me-2" placeholder="Inserisci articolo" />
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
