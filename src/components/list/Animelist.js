// Animelist.js
import React, { useState } from 'react';
import useFetch from '../hook/useFetch';
import './Animelist.css';

export default function Animelist() {
  const [url, setUrl] = useState('http://localhost:3001/animes');
  const { data: Animelist, loading, error } = useFetch(url, { type: 'GET' });

  return (
    <>
    <div className='mainAnimelist'>
      {error && <p className="error-message">{error}</p>}
      {!error && (
        <div className='animelist-container'>
          <div className="button-container">
            <button className='modern-button' onClick={() =>setUrl('https://mocki.io/v1/868215e1-6f7e-445a-8bd3-ad95ee44bf17?"genres":"Action"')}>All</button>
            <button className='modern-button' onClick={() =>setUrl('http://localhost:3001/animes?genres=Action')}>Action</button>
            <button className='modern-button' onClick={() =>setUrl('http://localhost:3001/animes?genres=Advanture')}>Advanture</button>
            <button className='modern-button' onClick={() =>setUrl('http://localhost:3001/animes?genres=Romance')}>Romance</button>
            <button className='modern-button' onClick={() =>setUrl('http://localhost:3001/animes?genres=SciFi')}>Scifi</button>
          </div>
          {loading && <p>Loading...</p>}
          <div className='card-list'>
            {Animelist && Animelist.map((anime) => (
              <div key={anime.id} className='card'>
                <img className="card-img" src={anime.imgUrl} alt={anime.title} />
                <div className='card-content'>
                  <h3 className='title'>{anime.title}</h3>
                  <p className='description'>{anime.description}</p>
                  <button className='modern-button' onClick={() => window.location.href = anime.linkUrl}>Go to Anime</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  );
}
