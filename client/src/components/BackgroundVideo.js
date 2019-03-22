import React, {Component} from 'react';


class BackgroundVideo extends Component {


    componentDidMount() {

    }

    render() {






        return (
            <div className="backGroundVid">
                <video data-keepplaying preload="yes" playsInline autoPlay loop muted id="video" className="backGroundVid__video">

                    <source src={process.env.PUBLIC_URL + 'video/thiscity.mp4'} type="video/mp4" />
                    <source src={process.env.PUBLIC_URL + 'video/thiscity.webm'}  type="video/webm" />
                    </video>


            </div>
        );
    }
}

export default BackgroundVideo;