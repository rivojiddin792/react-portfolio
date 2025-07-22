import { useState } from "react";

function Portfolio() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const projects = [
    {
      title: "News Homepage",
      img: "662Y5W94/Screenshot-2025-07-22-101712.png",
      code: "https://github.com/rivojiddin792/news-home",
      live: "https://react-simple-news-homepage.netlify.app/",
    },
    {
      title: "Simple React Clock",
      img: "2yDbD7kw/Screenshot-2025-07-22-102115.png",
      code: "https://github.com/rivojiddin792/time-react",
      live: "https://time-simple-react.netlify.app/",
    },
    {
      title: "weather-react-app",
      img: "wTWvfpmF/Screenshot-2025-07-22-102454.png",
      code: "https://github.com/rivojiddin792/weather-react-app",
      live: "https://weather-simple-react.netlify.app/",
    },
    {
      title: "react age calculator",
      img: "Y0GX5kSg/Screenshot-2025-07-22-102843.png",
      code: "https://github.com/rivojiddin792/react-age-calculator",
      live: "https://react-age-calcutor.netlify.app/",
    },
    {
      title: "simple react menu",
      img: "k5GhQxdf/Screenshot-2025-07-22-103038.png",
      code: "https://github.com/rivojiddin792/react-menu",
      live: "https://simple-react-recipe-page.netlify.app/",
    },
    {
      title: "react Faqs",
      img: "5NkzHvnx/Screenshot-2025-07-22-103201.png",
      code: "https://github.com/rivojiddin792/time-faq",
      live: "https://react-simple-acc.netlify.app/",
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-container bd-grid">
        {projects.map((project, index) => (
          <div className="portfolio-img" key={index}>
            <img
              src={`https://i.postimg.cc/${project.img}`}
              alt={project.title}
            />
            <div className="portfolio-link">
              <a
                href={project.live}
                className="portfolio-link-name"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
              {project.code ? (
                <a
                  href={project.code}
                  className="portfolio-link-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              ) : (
                <button
                  onClick={() =>
                    setVisibleIndex(visibleIndex === index ? null : index)
                  }
                  className="portfolio-link-name"
                >
                  View Code
                </button>
              )}
            </div>
            {visibleIndex === index && !project.code && (
              <pre className="code-preview">
                {`<img src="https://i.postimg.cc/${project.img}" alt="${project.title}" />`}
              </pre>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
