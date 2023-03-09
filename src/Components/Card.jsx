import React from 'react';

export default function Card({ data }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={data.urlToImage} alt="News Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read Full News</button>
          <div className="badge badge-outline">{data.author}</div>
        </div>
      </div>
    </div>
  );
}
