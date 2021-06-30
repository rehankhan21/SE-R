import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
          <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="container-fluid">
            <Link to="/" className="navbar-brand" a>Translate</Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                  <Link to="/AnimeList" className="nav-link active" aria-current="page" a><li>Anime Search</li></Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/TopAnime" className="nav-link active" aria-current="page" a><li>Top Anime List</li></Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/SavedWords" className="nav-link active" aria-current="page" a><li>Saved Words</li></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}

export default Nav
