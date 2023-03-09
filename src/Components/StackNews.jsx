import React from 'react';
import Card from '../Components/Card.jsx';
import { newsData } from '../newsapi.js';

export default function StackNews() {
  return (
    <div className="flex flex-wrap space-x-20 > * + *">
      {newsData.map((news, index) => {
        <Card data={news} key={index} />;
      })}
    </div>
  );
}
