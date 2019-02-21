import React, { Component } from 'react';
import './style.css';
import RenderTaks from '../renderTasks/RenderTasks';

class ShellApp extends Component {
  render() {
    const nameLocalSt = localStorage.getItem('name');
    const nameUser = nameLocalSt === ' ' || nameLocalSt === null ? "User" : nameLocalSt;

    return (
      <div>
        <section className="block-header mb-4">
          <div className="container">
            <h2>Hello {nameUser}!</h2>
            <p>Be successful! To arrange your tasks.</p>
          </div>
        </section>
        <section className="block-content mb-5">
          <div className="container">
            <RenderTaks />
          </div>
        </section>
      </div>
    );
  }
}

export default ShellApp;
