import { useState } from "react"

function App() {

  // array articoli
  const articlesArray = [
    { id: 1, titolo: 'Come evitare le truffe in viaggio' },
    { id: 2, titolo: 'Come trovare cucina locale autentica' },
    { id: 3, titolo: 'Trucchi per risparmiare in viaggio' },
    { id: 4, titolo: 'Migliori destinazioni estive 2026' }
  ];
  // Variabile di stato per gestire lista articoli
  const [articles, setArticles] = useState(articlesArray);
  // Variabile di stato per gestire input utente
  const [userArticles, setUserArticles] = useState('');

  // Funzione per aggiungere un articolo alla lista
  const addArticle = e => {
    e.preventDefault();

    // Se il campo input è vuoto, non fare nulla
    if (userArticles === '') return;

    // Array che comprende sia i titoli iniziali che quelli inseriti nel form dall'utente
    const updateArticles = [...articles, { titolo: userArticles }];

    // Aggiorno il valore della variabile di stato iniziale con il nuovo array
    setArticles(updateArticles);

    // Pulisco campo input dopo l'invio del form
    setUserArticles('');
  }

  // Funzione per rimuovere un articolo dalla lista
  const removeArticle = i => {
    const updateArticles = articles.filter((article) => {
      return article.id !== i
    })
    setArticles(updateArticles);
  }


  return (
    <>
      <div className="articles-container">
        <h1 className="m-5">Articoli del blog</h1>
        <ul className="articles-list">
          {articles.map((article) => (
            <li key={article.id}>
              {article.titolo}
              <div
                role="button"
                className="ms-2 d-inline"
                onClick={() =>
                  removeArticle(article.id)}>
                &#9830;
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Form che permette all'user di inserire un articolo alla lista*/}
      <form onSubmit={addArticle} className="m-5">
        <label htmlFor="user-input" className="d-flex">
          Inserisci un nuovo articolo!
        </label>
        <input
          id="user-input"
          type="text"
          placeholder="Inserisci un articolo"
          value={userArticles}
          onChange={e => { setUserArticles(e.target.value) }}
        />
        <button>AGGIUNGI</button>
      </form>
    </>
  )
}

export default App
