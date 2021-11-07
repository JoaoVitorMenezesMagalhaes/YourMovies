import React, {useEffect, useState} from 'react';
import './App.css';
import API from './API';
import MovieRow from './components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await API.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
  <div className="name">
    <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow key={key} title={item.title} items ={item.items}/>
      ))}
    </section>
  </div>
  )
}