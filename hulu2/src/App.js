import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import './requests';
import requests from "./requests";
import './nav.css'
const API_KEY = "32f21cfa647f7c3b7282a6473a7cfdc4";

function App() {
  const [movies, setMovies] = useState([]);

 
  const baseUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres`

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(res =>setMovies(res.data.results))
  },[])

   
   

  const getGenre =(id)=> {
    axios.get( `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`)
    .then(res => setMovies(res.data.results))
  }

  console.log("Movies", movies);
  return (
    <div className="App">
      
       
      
      {requests.map (r=> {
        return(
          <div className = 'nav-div'>
          <h4
           onClick={()=> getGenre(r.num)   }
          
         
          
          
          
          >{r.genre} </h4>
          </div>
        )

      })}
      

      {movies.map((m) => {
        return (
          <>
            <h2>{m.title}</h2>
          </>
        );
      })}
    </div>
  );
}

export default App;
