import Button from "./Button";
import { handlePlay, handleStop } from "./Handle";
import sampleVideo from "../assets/sample.mp4";

export default function Toolbar() {
  return (
    <>
      <nav>
        <Button message="videoPlayer" handle={handlePlay}>
          Play
        </Button>
        &nbsp;
        <Button message="videoPlayer" handle={handleStop}>
          Stop
        </Button>
      </nav>
      <br />
      <section>
        <video id="videoPlayer" src={sampleVideo} controls width="350" />
      </section>
    </>
  );
}