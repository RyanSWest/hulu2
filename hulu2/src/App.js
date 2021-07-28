import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import './requests';
import requests from "./requests";
import Results  from "./components/Results";
import './nav.css';
import Header from './components/Header';
const API_KEY = "32f21cfa647f7c3b7282a6473a7cfdc4";

function App() {
  const [movies, setMovies] = useState([]);

 
  const baseUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres`

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(res =>setMovies(res.data.results))
  },[])

   
   

  const getGenre =(id)=> {
    axios.get( `${baseUrl}${API_KEY}&with_genres=${id}`)
    .then(res => setMovies(res.data.results))
  }

   return (
    <div className="App">
      <Header/>
      
       
      <div className = 'nav' >
                  
      {requests.map (r=> {
        return(

          
          <div className = 'nav-div'>
          <h4
           onClick={()=> getGenre(r.num)   }
          
         
          
          
          
          >{r.genre} </h4>
          </div>
        )

      })}
      </div>

      <Results
      movies = {movies}
      
      />

      
    </div>
  );
}

export default App;
