import "./VideoPlayer.css"

export const VideoPlayer = (props) => {
    return (
        <div className="video-player-box">
            <video width="1280" height="720" autoPlay controls controlsList="nodownload">
                <source src={props.url} type="video/mp4"/>
            </video>
        </div>
    )
}