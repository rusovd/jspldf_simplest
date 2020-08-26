import React, {useState} from 'react';
import './App.css';
import generatePDFTableReport from './utils/generatePDFTableReport';
import {movieList} from './data';

function App() {
  const headers = [
    {key: 'title', display: 'Title'},
    {key: 'release_date', display: 'Release'},
    {key: 'overview', display: 'Overview'},
    {key: 'vote_average', display: 'Vote Average'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => generatePDFTableReport({data: movieList, headers, action:'save'})}>
          Download PDF
        </button>
        <button onClick={() => generatePDFTableReport({data: movieList, headers, action:'show'})}>
          Show PDF
        </button>
        <button onClick={() => generatePDFTableReport({data: movieList, headers, action:'getBlob'})}>
          Get Blob
        </button>
      </header>
    </div>
  );
}

export default App;
