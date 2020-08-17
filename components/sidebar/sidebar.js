import React from "react"

import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
  ArrowBottom,
  Tweet,
  Search
} from "../icons"

function Sidebar({ active }) {
  return (
    <section className="sidebar">
      <nav className="navigation-bar">
        <a className="twitter-logo" href="/#">
          <Twitter />
        </a>
        <a className="nav-home" href="/#">
          <Home />
          <p>Home</p>
        </a>
        <a className="nav-search" href="/#">
          <Search />
        </a>
        <a className="nav-explore" href="/#">
          <Explore />
          <p>Explore</p>
        </a>
        <a className="nav-notification" href="/#">
          <Notification />
          <p>Notifications</p>
        </a>
        <a className="nav-messages" href="/#">
          <Messages />
          <p>Messages</p>
        </a>
        <a className="nav-book" href="/#">
          <Bookmark />
          <p>Bookmarks</p>
        </a>
        <a className="nav-lists" href="/#">
          <Lists />
          <p>Lists</p>
        </a>
        <a className="nav-profile" href="/#">
          <Profile />
          <p>Profile</p>
        </a>
        <a className="nav-more" href="/#">
          <More />
          <p>More</p>
        </a>
      </nav>
      <div className="tweet-bar">
        <button type="button" className="send-tweet">
          <div className="tweet-body">
            {" "}
            <Tweet />
            <span>Tweet</span>
          </div>
        </button>
      </div>
      <div className="profile-bar">
        <button type="button" className="profile-button">
          <div className="profile-pic">
            <img
              className="pic-small"
              src="https://pbs.twimg.com/profile_images/1288864030334091264/9QM__Gx__400x400.jpg"
              height="39"
              weight="39"
            />
          </div>
          <div className="profile-name">
            <p className="name-class">oğulcan erişti</p>
            <p className="username-class">@ogulcaanX</p>
          </div>
          <div className="arrow-button">
            <ArrowBottom />
          </div>
        </button>
      </div>
    </section>
  )
}

export default Sidebar
