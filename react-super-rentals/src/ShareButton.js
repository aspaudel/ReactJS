import React from "react";

export default function ShareButton(props) {
  const TWEET_INTENT = "https://twitter.com/intent/tweet";

  function getCurrentUrl() {
    return window.location.href;
  }

  let url = new URL(TWEET_INTENT);
  url.searchParams.set("url", getCurrentUrl);
  if (props.text) {
    url.searchParams.set("text", props.text);
  }
  if (props.hashtags) {
    url.searchParams.set("hashtags", props.hashtags);
  }
  if (props.via) {
    url.searchParams.set("via", props.via);
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="external nofollow noopener noreferrer"
      className="share button"
    >
      Share on Twitter
    </a>
  );
}
