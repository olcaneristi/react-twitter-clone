import React from "react"
import { Search, Settings, ArrowBottom } from "../icons"

function Explore() {
  return (
    <section className="explore">
      <div className="search-bar">
        <input type="search" placeholder="Search Twitter" />
        <Search />
      </div>

      <div className="trends">
        <div className="trend-header">
          <span>Turkey trends</span>

          <button type="button">
            {" "}
            <Settings />{" "}
          </button>
        </div>

        <div className="trend-list">
          <a className="trend-category">
            <span>1 · Politics · Trending</span>{" "}
            <button type="button">
              <ArrowBottom />
            </button>
          </a>
          <p>#dolar</p>
          <span>33.2K Tweets</span>
        </div>
        <div className="trend-list">
          <a className="trend-category">
            <span>2 · Technology · Trending</span>

            <button type="button">
              <ArrowBottom />
            </button>
          </a>
          <p>GPT-3</p>
          <span>4,513 Tweets</span>
        </div>
        <div className="trend-list">
          <a className="trend-category">
            <span> 3 · Entertainment · Trending</span>

            <button type="button">
              <ArrowBottom />
            </button>
          </a>
          <p>#HarryPotter</p>
          <span>3,645 Tweets</span>
        </div>
        <div className="trend-more">
          <a href="/#">Show more</a>
        </div>
      </div>
      <div className="who-follow">
        <div className="follow-header">
          <span>Who to follow</span>
        </div>
        <div className="follow-list">
          <div className="follow-pic">
            <img
              className="picture-small"
              src="https://pbs.twimg.com/profile_images/1309954136125865990/-KFHwCjo_400x400.jpg"
              height="49"
              weight="49"
            />
          </div>
          <div className="follow-username">
            <p className="name-class">oğulcan erişti</p>
            <p className="username-class">@ogulcaanX</p>
          </div>
          <button type="button" className="follow-button">
            Follow
          </button>
        </div>
        <div className="follow-list">
          <div className="follow-pic">
            <img
              className="picture-small"
              src="https://pbs.twimg.com/profile_images/1309954136125865990/-KFHwCjo_400x400.jpg"
              height="49"
              weight="49"
            />
          </div>
          <div className="follow-username">
            <p className="name-class">oğulcan erişti</p>
            <p className="username-class">@ogulcaanX</p>
          </div>
          <button type="button" className="follow-button">
            Follow
          </button>
        </div>
        <div className="follow-more">
          <a href="/#">Show more</a>
        </div>
      </div>
    </section>
  )
}

export default Explore
