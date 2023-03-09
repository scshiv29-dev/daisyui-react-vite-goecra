import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none"></div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">News</a>
      </div>
      <div className="flex-none">
        <a className="btn btn-ghost normal-case text-xl">News</a>
        <a className="btn btn-ghost normal-case text-xl">Features</a>
        <a className="btn btn-ghost normal-case text-xl">SignUp</a>
        <a className="btn btn-ghost normal-case text-xl">About</a>
      </div>
    </div>
  );
}
