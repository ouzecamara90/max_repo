//importer les modules
import React from 'react';
import {BrowserRouter as Router,Route,Link} from react-router-dom;

//Définir le composant FilmCard qui affiche les informations de chaque film
const FilmCard = ({film}) =>{
  return (
      <div className="film-card">
          <h2>{film.title}</h2>
            <p>{film.description}</p>
              <Link to={'/films/${film.id}'}>Voir plus</Link>
      </div>
  );
  
};
//Définir le compasant  FilmDetails qui affiche la description  et la bande-annonce du film selectionné
const FilmDetails = ({films,match}) => {
  const film = film.find(f=>f.id === parseInt(match.params.id));
  return (
      <div className="filmDetails">
        <h2>{film.title}</h2>
        <p>{film.description}</p>
          <iframe width="540" height="315" src={film.trailer} title={film.title} allowFullScreen></iframe>
              <Link to="/">Retour a la page d'acceuil </Link>
          </div>

); 
}
  //Définir le composant App qui affiche la liste des films et gère la navigation entres les vues
  const App = ({ films }) => {
    return (
        <Router>
            <div>
                <h1>Ma collection des films</h1>
                  <Route exact path="/" render={() => (
                      <div className="film-list">
                        {films.map(film =>(
                          <FilmCard key={film.id} film={film}/>
                        ))}
                      </div>
                  )}/>
                      <Route path="/films/:id" render={(props) => (
                       <FilmDetails {...props} films={films} />
                      )}/>
                      </div>
        </Router>
    );
  };     
  //Définirf la liste des films
  const films = [
    {
      id:1,
      title : "Baiser mortel du Dragon: Jet Lee",
      description: "Jet Lee a Paris pour une mission",
      trailer:"https://www.youtube.com/watch?v=gJlodw4w1BA&list=RDgJlodw4w1BA&start_radio=1",
    
      id:2,
      title : "The Last Kingdom: Bienvenu dans le royaume du wessex",
      description: "Bataille entre saxon et viking pour l'accession du royaume de la Mercy (ex empire britanique)",
      trailer:"https://www.youtube.com/watch?v=gJlodw4w1BA&list=RDgJlodw4w1BA&start_radio=1",
    } 
  ];
  //Rendre l'application
   ReactDom.render(
      <App films = {films}/>,
      document.getElementById('root')
   );
export default App;
