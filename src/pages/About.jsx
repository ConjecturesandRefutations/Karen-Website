import profileImage from "../assets/images/default-profile.jpg";

export default function About() {

  return (
    <div className="about">
      <div className="about-left-half">
          <h1 className="about-title">About Me</h1>
          <p className="about-intro-text">I am an interdisciplinary architect with over twelve years of experience in museum and exhibition design. I have worked for some of the most renowned companies in the multimedia creativity field and museums in Mexico City. 
I lead and collaborate with multidisciplinary teams across all design phases, bringing clarity, visual appeal, and conceptual depth to each project. Currently based in Berlin, my work operates at the intersection of art, architecture, and technology, creating immersive and meaningful spatial experiences.
          </p>
      </div>
      <div className="about-right-half">
        <img className="profile-photo" src={profileImage} alt="profile image" />
      </div>
    </div>
  );
}