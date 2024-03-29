import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../components/CommentContainer";
import LiveChat from "../components/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-col w-full h-[75%]">
      <div className="flex">
        <div className=" w-3/4 h-screen rounded-2xl">
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="MERN Full Stack Project: Build a Blog App with Dashboard using MERN (jwt, redux toolkit)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/4 h-screen">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
