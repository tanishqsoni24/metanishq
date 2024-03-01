import profileImg from "./assets/1000027331-01.jpg";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between  py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Tanishq Soni <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Hello, I'm Tanishq Soni, a seasoned full-stack developer with expertise in HTML, CSS, JavaScript and frameworks/libraries such as MERN stack with the salt of python frameworks like : Flask, and Django. I've honed my skills in cloud technologies, AWS, and data structures, providing valuable solutions for clients.
            <br />
            <br />
            Currently in my 3rd year of B.Tech CSE at GLA University Mathura, my journey started with offline market freelancing, where I digitized businesses. Proficient in React Js and deployment using Nginx and Gunicorn, I excel in operating systems, computer networking, and deep database concepts.
            <br />
            <br />
            Having ventured into the MERN Stack with Cohort 2.0, I'm delving into Docker and eyeing the world of Devops as the next target.I am open to collaborative opportunities in the tech space.

            Let's connect! Feel free to reach out to me at tanishqsoni0309@gmail.com for discussions or collaborations.
          </p>
        </div>
        <img
          src="https://i.postimg.cc/wMVYcKsg/My-Pic-Square.png"
          alt="saumya-gupta-img"
          className=" text-white img-saumya"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "25rem",
            // height: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
