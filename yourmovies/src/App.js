import React, {useEffect, useState} from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import API from './API';
import MovieRow from './components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await API.getHomeList();
      setMovieList(list);

      let series = list.filter(i=> i.slug === 'series');
      let randomSerie = Math.floor(Math.random()*(series[0].items.results.length-1));
      let serie = series[0].items.results[randomSerie];
      let serieInfo = await API.getMovieInfo(serie.id, 'tv');
      console.log(serie)
      setFeaturedData(serieInfo);
    }

    loadAll();
  }, []);

  return(
  <div className="page">

    {featuredData &&
      <FeaturedMovie item={featuredData}/>
    }

    <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow key={key} title={item.title} items ={item.items}/>
      ))}
    </section>
  </div>
  )
}