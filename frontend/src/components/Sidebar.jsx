import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from 'lucide-react';
import "../styles/Sidebar.css";

const Sidebar = ({ category }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Dynamic sidebar content based on selected category
  const getSidebarContent = () => {
    switch (category) {
      case "machine-learning":
        return {
          title: "Machine Learning",
          sections: [
            { title: "Explore ML Courses", links: [] },
            { title: "Share Your Experiences", links: [] },
            {
              title: "Machine Learning Basics",
              links: [
                { title: "Machine Learning Tutorial", url: "/machine-learning/tutorial" },
                { title: "Prerequisites for Machine Learning", url: "/machine-learning/prerequisites" },
                { title: "Python for Machine Learning", url: "/machine-learning/python" },
                { title: "SQL for Machine Learning", url: "/machine-learning/sql" },
                { title: "Getting Started with Machine Learning", url: "/machine-learning/getting-started" },
              ],
            },
            {
              title: "Machine Learning Concepts",
              links: [
                {
                  title: "Advantages and Disadvantages of Machine Learning",
                  url: "/machine-learning/advantages-disadvantages",
                },
                { title: "Why ML is Important?", url: "/machine-learning/importance" },
                { title: "Real-Life Examples of Machine Learning", url: "/machine-learning/real-life-examples" },
                {
                  title: "What is the Role of Machine Learning in Data Science",
                  url: "/machine-learning/role-in-data-science",
                },
              ],
            },
            {
              title: "Machine Learning Career",
              links: [
                { title: "Top Machine Learning Careers/Jobs", url: "/machine-learning/careers" },
                {
                  title: "Difference Between Machine Learning and Artificial Intelligence",
                  url: "/machine-learning/ml-vs-ai",
                },
                { title: "Machine Learning Foundations", url: "/machine-learning/foundations" },
              ],
            },
          ],
        };
      case "data-science":
        return {
          title: "Data Science",
          sections: [
            {
              title: "Data Science Basics",
              links: [
                { title: "Data Science Tutorial", url: "/data-science/tutorial" },
                { title: "Introduction to Data Science", url: "/data-science/introduction" },
                { title: "Data Science Tools", url: "/data-science/tools" },
              ],
            },
            // More sections...
          ],
        };
      case "system-design":
        return {
          title: "System Design",
          sections: [
            {
              title: "System Design Basics",
              links: [
                { title: "System Design Tutorial", url: "/system-design/tutorial" },
                { title: "Introduction to System Design", url: "/system-design/introduction" },
                { title: "System Design Principles", url: "/system-design/principles" },
              ],
            },
            // More sections...
          ],
        };
      default:
        return {
          title: "Explore Topics",
          sections: [
            {
              title: "Popular Categories",
              links: [
                { title: "Machine Learning", url: "/machine-learning" },
                { title: "Data Science", url: "/data-science" },
                { title: "System Design", url: "/system-design" },
                { title: "Web Development", url: "/web-development" },
                { title: "DSA", url: "/dsa" },
              ],
            },
          ],
        };
    }
  };

  const sidebarContent = getSidebarContent();

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-title">{sidebarContent.title}</h2>

        {sidebarContent.sections.map((section, index) => (
          <div key={index} className="sidebar-section">
            {section.links.length > 0 ? (
              <>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="sidebar-section-header"
                >
                  {section.title}
                  {expandedSections[section.title] ? (
                    <ChevronDown size={16} className="sidebar-icon" />
                  ) : (
                    <ChevronRight size={16} className="sidebar-icon" />
                  )}
                </button>
                {expandedSections[section.title] && (
                  <ul className="sidebar-links">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="sidebar-link-item">
                        <Link to={link.url} className="sidebar-link">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <div className="sidebar-section-label">{section.title}</div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
