import { MoreVert } from "@material-ui/icons";
import React from "react";
import { Users } from "../../dummyData";
import "./post.css";

const Post = ({ post }) => {
    const user = Users.filter((u) => u.id === post.userId);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={user[0].profilePicture}
                            alt=""
                        />
                        <span className="postUsername">{user[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
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
