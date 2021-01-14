import React from 'react';

const VideoItem = (props) => {

    const domain = 'http://www.pinkvilla.com';

    const { image, title, path} = props;
    return(
        <div>
            <div className="card mb-3" style={{maxWidth: "800px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={domain + image} alt={title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">
                                <a className="text-reset text-decoration-none" href={domain + path}  target="_blank"  rel="noreferrer">
                                    {title}
                                </a>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default VideoItem;