import "./VideoPlayer.css"

export const VideoPlayer = () => {
    return (
        <div className="video-player-box">
            <video width="1280" height="720" autoPlay controls >
                <source src="https://www.dropbox.com/s/c9o0q04hrcfvcm6/%D0%9B%D1%8F%D1%82%D0%BD%D0%BE%D1%82%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%9B%D1%83%D0%BA%D0%B0%20%282021%29%20%D0%A2%D1%80%D0%B5%D0%B9%D0%BB%D1%8A%D1%80%20%D1%81%20%D0%91%D0%93%20%D0%B0%D1%83%D0%B4%D0%B8%D0%BE.mp4?raw=1" type="video/mp4"/>
            </video>
        </div>
    )
}