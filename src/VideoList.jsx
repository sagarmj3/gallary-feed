import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {

    return (
        <div >
            {

                props.propVideoList.map(videoList => {
                    return (
                        <div key={videoList.node.nid}>
                        <VideoItem 
                            image={videoList.node.field_photo_image_section}
                            title={videoList.node.title}
                            path={videoList.node.path}
                        />
                        </div>
                    );
                })
            }   
        </div>
    )
}

export default VideoList;