import { MoreVert } from "@material-ui/icons";
import React from "react";
import "./post.css";

const Post = ({ post }) => {
    console.log(post);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src="/assets/person/1.jpeg"
                            alt=""
                        />
                        <span className="postUsername">Zero Doe</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src="/assets/post/3.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className="likeIcon"
                            src="/assets/like.png"
                            alt=""
                        />
                        <img
                            className="likeIcon"
                            src="/assets/heart.png"
                            alt=""
                        />
                        <span className="postLikeCounter">
                            {post.like} others liked it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommonText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
