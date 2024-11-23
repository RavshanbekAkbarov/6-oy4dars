function Home() {
  return (
    <div>
      <div className="continer">
        <div className="resume">
          <div className="resume-title">
            <h1>Hi, I am John, Creative Technologist</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="resume-btn">Download Resume</button>
          </div>
          <div className="resume-img">
            <img src="../image.png" alt="" />
          </div>
        </div>
        {/* Posts qism */}
        <div className="posts">
          <div className="posts-title">
            <h3>Recent posts</h3>
            <p>View all</p>
          </div>
          {/* Design qism */}
          <div className="design">
            <div className="pattern">
              <h2>Making a design system from scratch</h2>
              <div className="years">
                <h4>12 Feb 2020</h4>
                <div className="chiziqcha"></div>
                <h4>Design, Pattern</h4>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="figma">
              <h2>Creating pixel perfect icons in Figma</h2>
              <div className="years">
                <h4>12 Feb 2020</h4>
                <div className="chiziqcha"></div>
                <h4>Figma, Icon Design</h4>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="work">
          <h3>Featured works</h3>
          <div className="Dashboard">
            <div className="works-img">
              <img src="../avatar2.png" alt="" />
            </div>
            <div className="dashboard-title">
              <h2>Designing Dashboards</h2>
              <div className="dashboard-year">
                <h4>2020</h4>
                <h3>Dashboard</h3>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <hr />
          <div className="Illustration">
            <div className="works-img">
              <img src="../avatar3.png" alt="" />
            </div>
            <div className="dashboard-title">
              <h2>Vibrant Portraits of 2020</h2>
              <div className="dashboard-year">
                <h4>2020</h4>
                <h3>Illustration</h3>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <hr />
          <div className="Typography">
            <div className="works-img">
              <img src="../avatar4.png" alt="" />
            </div>
            <div className="dashboard-title">
              <h2>36 Days of Malayalam type</h2>
              <div className="dashboard-year">
                <h4>2020</h4>
                <h3>Typography</h3>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Home;
