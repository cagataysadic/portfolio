import "./MainPage.css"


function MainPage() {
  return (
    <div className="main-container">
      <div className="background-image"></div>
      <div className="links-container">
        <h1 className="projects-header">My Projects</h1>
        <a href="https://cryptoway.onrender.com/" className="link">
          Crypto market values app
          <div className="link-preview">
            <img src="http://localhost:3001/cryptoway.jpg" alt="Cryptoway app preview" />
          </div>
          <div className="cable"></div>
        </a>
        <a href="https://bookvaley.onrender.com/" className="link">
          A website where you can find or save your books
          <div className="link-preview">
            <img src="http://localhost:3001/bookvaley.jpg" alt="Bookvaley app preview" />
          </div>
          <div className="cable"></div>
        </a>
        <a href="https://progressdocs.onrender.com/" className="link">
          A website where you can create projects and document your progress
          <div className="link-preview">
            <img src="http://localhost:3001/progressdocs.jpg" alt="ProgressDocs app preview" />
          </div>
          <div className="cable"></div>
        </a>
      </div>
      <div className="skills-container">
        <h1 className="skill-header">My Skills</h1>
        <h2 className="skill">JavaScript</h2>
        <h2 className="skill">HTML</h2>
        <h2 className="skill">CSS</h2>
        <h2 className="skill">React</h2>
        <h2 className="skill">Git</h2>
        <h2 className="skill">Node.js</h2>
        <h2 className="skill">Express</h2>
        <h2 className="skill">MongoDB</h2>
        <h2 className="skill">JWT</h2>
      </div>
      <ul className="list">
        <li className="list-item">Full-stack JS/React JS developer.</li>
        <li className="list-item">Passionate about developing solutions to daily problems.</li>
        <li className="list-item">Graduated from Kocaeli University, Department of Mechanical Engineering in 2023.</li>
      </ul>
      <div className="logo">
        <a href="https://github.com/cagataysadic">
          <img src="http://localhost:3001/github.png" alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/%C3%A7a%C4%9Fatay-sad%C4%B1%C3%A7-5835a0231/">
          <img src="http://localhost:3001/Ln.png" alt="LinkedIn logo" />
        </a>
      </div>
    </div>
  );
}

export default MainPage;
