import "./Skills.css";

const columns = [
  {
    label: "Frontend",
    type: "standard",
    items: [
      "React · React Router",
      "JavaScript · HTML5 · CSS3",
      "Responsive Design",
      "Vite · Figma",
    ],
    note: "Comfortable",
  },
  {
    label: "Backend",
    type: "standard",
    items: [
      "Node.js · Express",
      "MongoDB · REST APIs",
      "JWT · Auth flows",
      "Debugging",
    ],
    note: "Comfortable",
  },
  {
    label: "Deployment",
    type: "gold",
    items: ["Google Cloud · Nginx", "PM2 · GitHub Pages", "Git · GitHub"],
    note: "Differentiator",
  },
  {
    label: "Business",
    type: "green",
    items: [
      "Salesforce CRM",
      "Financial Analysis",
      "Bilingual EN / ES",
      "Client Communication",
    ],
    note: "Rare for devs",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <p className="skills__section-label">Skills</p>
        <div className="skills__grid">
          {columns.map((col) => (
            <div
              className={`skills__column skills__column_type_${col.type}`}
              key={col.label}
            >
              <h3 className="skills__column-label">{col.label}</h3>
              <ul className="skills__list">
                {col.items.map((item) => (
                  <li className="skills__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
