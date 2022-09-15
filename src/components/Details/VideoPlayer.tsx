import { FC } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import { ResultMedia, subtitlingList } from "../../models/details";
import { subtitleProxy } from "../../utils/contants";

interface VideoPlayerProps {
  data: { result: ResultMedia[]; subtitle: subtitlingList[] };
}

const VideoPlayer: FC<VideoPlayerProps> = ({ data }) => {
  return (
    <Player
      src={data.result.map((item: any) => ({
        quality: item.quanlity,
        url: item.mediaUrl,
      }))}
      subtitles={data.subtitle.map((item) => ({
        lang: item.languageAbbr,
        language: item.language,
        url: subtitleProxy(item.subtitlingUrl),
      }))}
      primaryColor="#3B82F6"
      keyboardShortcut={{
        pause: false,
        forward: true,
        rewind: false,
        fullScreen: false,
        mute: false,
        subtitle: false,
      }}
      playerKey={String(data?.result[0]?.episodeId)}
    >
      {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} />}
    </Player>
  );
};

export default VideoPlayer;
