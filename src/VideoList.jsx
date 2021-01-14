import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {

    return (
        <div >
            {
                props.propVideoList.map(videoList => {
                    return (
                        <VideoItem 
                            image={videoList.node.field_photo_image_section}
                            title={videoList.node.title}    
                            uniqueKey={videoList.node.nid}
                            path={videoList.node.path}
                        />
                    );
                })
            }   
        </div>
    )
}

export default VideoList;