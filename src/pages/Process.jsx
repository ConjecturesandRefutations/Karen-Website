import onea from "../assets/images/Process/1/1A.jpg";
import oneb from "../assets/images/Process/1/1B.jpg";
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
import sevena from "../assets/images/Process/7/7A.png";
import sevenb from "../assets/images/Process/7/7B.jpg";

export default function About() {
  // Define the 9 grid slots. 4 are filled with your before/after images, 5 are placeholders.
  const gridSlots = [
    { id: 1, isFilled: true, imgA: onea, imgB: oneb, alt: "Process 1" },
    { id: 2, isFilled: true, imgA: twoa, imgB: twob, alt: "Process 2" },
    { id: 3, isFilled: true, imgA: threea, imgB: threeb, alt: "Process 3" },
    { id: 4, isFilled: true, imgA: foura, imgB: fourb, alt: "Process 4" },
    { id: 5, isFilled: true, imgA: fivea, imgB: fiveb, alt: "Process 5" },
    { id: 6, isFilled: true, imgA: sixa, imgB: sixb, alt: "Process 6" },
    { id: 7, isFilled: true, imgA: sevena, imgB: sevenb, alt: "Process 7"   },
    { id: 8, isFilled: false },
    { id: 9, isFilled: false },
  ];

  return (
    <div className="process-page">
        <h1 className="process-title">Hover over each image to see the 'before' state:</h1>
        <div className="process-grid-container">
        {gridSlots.map((slot) => (
            <div key={slot.id} className="grid-slot">
            {slot.isFilled ? (
                <div className="image-swap-container">
                {/* B image (Displays initially) */}
                <img src={slot.imgB} alt={`${slot.alt} After`} className="img-default" />
                {/* A image (Displays on hover) */}
                <img src={slot.imgA} alt={`${slot.alt} Before`} className="img-hover" />
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