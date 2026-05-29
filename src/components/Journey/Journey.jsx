import "./Journey.css";

const experiences = [
  {
    period: "2024 – 2026",
    role: "Full-Stack Software Engineering Student",
    company: "TripleTen Software Engineering Program",
    description:
      "Completed a full-stack program focused on JavaScript, React, Node.js, Express, MongoDB, REST APIs, authentication, testing, and deployment. Built and deployed multiple full-stack applications while developing problem-solving and software development skills.",
    tag: "Graduate",
    tagType: "gold",
    emphasis: "featured",
  },
  {
    period: "Aug 2022 – Aug 2024",
    role: "Commissions Coordinator",
    company: "The Corcoran Group · New York, NY",
    description:
      "Managed real estate commission transactions for one of New York's largest residential brokerages. Audited commission payments, resolved discrepancies, maintained financial records, and coordinated with agents, attorneys, and internal teams to ensure accurate and timely processing.",
    tag: "Top-5 NYC brokerage",
    tagType: "gold",
    emphasis: "featured",
  },
  {
    period: "2025 – Present",
    role: "Kids Jiu-Jitsu Instructor",
    company: "Smash Flow BJJ",
    description:
      "Assist in coaching three youth Brazilian Jiu-Jitsu programs ranging from ages 4–15. Help students develop technical skills, discipline, confidence, and sportsmanship while maintaining a structured and engaging learning environment.",
    tag: "Current",
    tagType: "green",
    emphasis: "featured",
  },
  {
    period: "Aug 2025 – Present",
    role: "Front Desk / Operations Associate",
    company: "Redefine Meals",
    description:
      "Manage front-desk operations for a high-volume meal preparation company. Handle customer interactions, process transactions, and support daily business operations.",
    tag: "Current",
    tagType: "blue",
    emphasis: "supporting",
  },
  {
    period: "Seasonal · Multiple Summers",
    role: "Account Manager",
    company: "Growing Greener Landscaping · Southampton / The Hamptons",
    description:
      "Assisted a family-owned landscaping business with property maintenance, customer service, scheduling, and field operations across high-end residential properties.",
    tag: null,
    tagType: null,
    emphasis: "supporting",
  },
  {
    period: "Feb 2022 – Jul 2022",
    role: "Small Business Funding Specialist",
    company: "Clara Capital · Syosset, NY",
    description:
      "Worked with small business owners to evaluate financing options and support funding applications. Communicated directly with clients, reviewed business information, and helped facilitate funding solutions in a fast-paced sales environment.",
    tag: null,
    tagType: null,
    emphasis: "supporting",
  },
];

function Journey() {
  const featured = experiences.filter((e) => e.emphasis === "featured");
  const supporting = experiences.filter((e) => e.emphasis === "supporting");

  return (
    <section className="journey" id="experience">
      <div className="journey__inner">
        <p className="journey__section-label">Professional Experience</p>
        <p className="journey__intro">
          A business, operations, and leadership background that now supports my transition into software engineering.
        </p>

        <div className="journey__featured">
          {featured.map((exp, i) => (
            <div className="journey__item journey__item_type_featured" key={i}>
              <div className="journey__item-header">
                <div className="journey__item-meta">
                  <h3 className="journey__role">{exp.role}</h3>
                  <p className="journey__company">{exp.company}</p>
                </div>
                <div className="journey__item-right">
                  {exp.tag && (
                    <span className={`journey__tag journey__tag_type_${exp.tagType}`}>
                      {exp.tag}
                    </span>
                  )}
                  <span className="journey__period">{exp.period}</span>
                </div>
              </div>
              <p className="journey__description">{exp.description}</p>
            </div>
          ))}
        </div>

        <p className="journey__supporting-label">Additional Experience</p>
        <div className="journey__supporting">
          {supporting.map((exp, i) => (
            <div className="journey__item journey__item_type_supporting" key={i}>
              <div className="journey__item-header">
                <div className="journey__item-meta">
                  <h3 className="journey__role journey__role_size_small">{exp.role}</h3>
                  <p className="journey__company">{exp.company}</p>
                </div>
                <div className="journey__item-right">
                  {exp.tag && (
                    <span className={`journey__tag journey__tag_type_${exp.tagType}`}>
                      {exp.tag}
                    </span>
                  )}
                  <span className="journey__period">{exp.period}</span>
                </div>
              </div>
              <p className="journey__description journey__description_size_small">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
