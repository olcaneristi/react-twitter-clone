import React from "react"
import {
  TimelineProp,
  Media,
  Gif,
  Question,
  Emoji,
  Schedule,
  Loading
} from "../icons"

function Timeline() {
  return (
    <section className="timeline">
      <div className="home-header">
        <img
          className="pic-mobile"
          src="https://pbs.twimg.com/profile_images/1288864030334091264/9QM__Gx__400x400.jpg"
          height="28"
          weight="28"
        />{" "}
        <span>Home</span>
        <div className="propicon">
          <TimelineProp />
        </div>
      </div>
      <div className="tweet-box">
        <div className="tweet-photo">
          <img
            className="tweet-img"
            src="https://pbs.twimg.com/profile_images/1288864030334091264/9QM__Gx__400x400.jpg"
            height="49"
            weight="49"
          />
        </div>
        <div className="tweet-text-body">
          <div className="tweet-area">
            <textarea
              type="text"
              maxLength="280"
              placeholder="What's happening?"
            />
          </div>
          <div className="icons-tweet">
            <div className="import-icon">
              <div className="micon">
                <Media />
              </div>
              <div className="micon">
                <Gif />
              </div>
              <div className="micon3">
                <Question />
              </div>
              <div className="micon">
                <Emoji />
              </div>
              <div className="micon5">
                <Schedule />
              </div>
            </div>
            <button className="smalltweet" type="button">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="post-feed">
        <Loading />
      </div>
    </section>
  )
}

export default Timeline
