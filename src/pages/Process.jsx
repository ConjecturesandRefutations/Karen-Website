import { useRef } from "react";

/* import onea from "../assets/images/Process/1/1A.jpg";
import oneb from "../assets/images/Process/1/1B.jpg"; */
/* import sevena from "../assets/images/Process/7/7A.png";
import sevenb from "../assets/images/Process/7/7B.jpg"; */
import twoa from "../assets/images/Process/2/2A.PNG";
import twob from "../assets/images/Process/2/2B.jpg";
import threea from "../assets/images/Process/3/3A.jpg";
import threeb from "../assets/images/Process/3/3B.jpg";
import foura from "../assets/images/Process/4/4A.JPEG";
import fourb from "../assets/images/Process/4/4B.jpg";
import fivea from "../assets/images/Process/5/5A.JPEG";
import fiveb from "../assets/images/Process/5/5B.JPEG";
import sixa from "../assets/images/Process/6/6A.JPG";
import sixb from "../assets/images/Process/6/6B.jpg";
import eighta from "../assets/images/Process/8/8A.jpg";
import eightb from "../assets/images/Process/8/8B.jpg";
import ninea from "../assets/images/Process/9/9A.jpg";
import nineb from "../assets/images/Process/9/9B.jpg";
import elevena from "../assets/videos/process-hover.mp4";
import elevenb from "../assets/images/Process/11/11B.png";

export default function Process() {
  const videoRefs = useRef({});

  const gridSlots = [
    { id: 1, isFilled: true, imgA: twoa, imgB: twob, alt: "Process 2" },
    { id: 2, isFilled: true, imgA: threea, imgB: threeb, alt: "Process 3" },
    { id: 3, isFilled: true, imgA: foura, imgB: fourb, alt: "Process 4" },
    { id: 4, isFilled: true, imgA: fivea, imgB: fiveb, alt: "Process 5" },
    { id: 5, isFilled: true, imgA: sixa, imgB: sixb, alt: "Process 6" },
    { id: 6, isFilled: true, imgA: eighta, imgB: eightb, alt: "Process 8" },
    { id: 7, isFilled: true, imgA: ninea, imgB: nineb, alt: "Process 9" },
    { id: 8, isFilled: true, videoA: elevena, imgB: elevenb, alt: "Process 10" },
    { id: 9, isFilled: false },
  ];

  const handleEnter = (id) => {
    const v = videoRefs.current[id];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const handleLeave = (id) => {
    const v = videoRefs.current[id];
    if (v) v.pause();
  };

  return (
    <div className="process-page">
      <h1 className="process-title">Hover over each image to see the 'before' state:</h1>
      <div className="process-grid-container">
        {gridSlots.map((slot) => (
          <div
            key={slot.id}
            className="grid-slot"
            onMouseEnter={() => handleEnter(slot.id)}
            onMouseLeave={() => handleLeave(slot.id)}
          >
            {slot.isFilled ? (
              <div className="image-swap-container">
                {/* B image (Displays initially) */}
                <img src={slot.imgB} alt={`${slot.alt} After`} className="img-default" />

                {/* A: video or image (Displays on hover) */}
                {slot.videoA ? (
                  <video
                    src={slot.videoA}
                    className="img-hover"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={`${slot.alt} Before`}
                    ref={(el) => {
                      if (el) videoRefs.current[slot.id] = el;
                    }}
                  />
                ) : (
                  <img src={slot.imgA} alt={`${slot.alt} Before`} className="img-hover" />
                )}
              </div>
            ) : (
              <div className="placeholder-slot">
                <span>Coming soon</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}