import "./Stack.css";

function Stack() {
  const stackItems = [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "REST API",
    "JWT",
    "Google Cloud",
    "Nginx",
    "PM2",
  ];

  return (
    <section className="stack">
      <div className="stack__inner">
        <div className="stack__content">
          <h2 className="stack__title">Stack</h2>
          <ul className="stack__list">
            {stackItems.map((item) => {
              const isDeployment = ["Google Cloud", "Nginx", "PM2"].includes(
                item,
              );

              return (
                <li
                  className={`stack__pill ${
                    isDeployment ? "stack__pill_type_deployment" : ""
                  }`}
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Stack;
