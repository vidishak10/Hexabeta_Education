import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Moon, X } from 'lucide-react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const mainCategories = [
    { name: "Courses", link: "/courses", hasDropdown: true },
    // { name: "Placement", link: "/placement", hasDropdown: true },
    // { name: "Data Science", link: "/data-science", hasDropdown: true, highlight: true },
    // { name: "GATE", link: "/gate", hasDropdown: true },
    { name: "Practice", link: "/practice", hasDropdown: true },
  ];

  const trendingTopics = [
    { name: "Trending Now", link: "/trending" },
    { name: "DSA", link: "/dsa" },
    { name: "Web Tech", link: "/web-tech" },
    { name: "Foundational Courses", link: "/foundational-courses" },
    { name: "Data Science", link: "/data-science" },
    { name: "Practice Problem", link: "/practice-problem" },
    { name: "Python", link: "/python" },
    { name: "Machine Learning", link: "/machine-learning" },
    { name: "JavaScript", link: "/javascript" },
    { name: "System Design", link: "/system-design" },
    { name: "Django", link: "/django" },
    { name: "DevOps Tutorial", link: "/devops" },
    { name: "Java", link: "/java" },
    { name: "C", link: "/c" },
    { name: "C++", link: "/cpp" },
    { name: "ReactJS", link: "/reactjs" },
    { name: "NodeJS", link: "/nodejs" },
    { name: "CP Live", link: "/cp-live" },
    { name: "Aptitude", link: "/aptitude" },
    { name: "Puzzles", link: "/puzzles" },
    { name: "Projects", link: "/projects" },
  ];

  return (
    <header className="navbar">
      {/* Main Navbar */}
      <div className="navbar-main">
        {/* Left side - Categories */}
        <div className="navbar-categories">
          {mainCategories.map((category) => (
            <div key={category.name} className="navbar-category">
              <Link
                to={category.link}
                className={`navbar-category-link ${category.highlight ? "navbar-category-highlight" : ""}`}
              >
                {category.name}
                {category.hasDropdown && (
                  <svg className="navbar-dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Center - Logo */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-circle">HB</div>
        </Link>

        {/* Right side - Search and Actions */}
        <div className="navbar-actions">
          {/* Search Bar */}
          <div className={`navbar-search ${showSearch ? "navbar-search-show" : ""}`}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="navbar-search-input"
            />
            <Search className="navbar-search-icon" size={18} />
            {showSearch && (
              <button onClick={() => setShowSearch(false)} className="navbar-search-close">
                <X size={18} />
              </button>
            )}
          </div>
          <button onClick={() => setShowSearch(true)} className="navbar-search-toggle">
            <Search size={20} />
          </button>
          <button className="navbar-action-button">
            <Moon size={20} />
          </button>
          <button className="navbar-action-button navbar-notification">
            <Bell size={20} />
            <span className="navbar-notification-badge">1</span>
          </button>
          {/* <Link to="/signin" className="navbar-signin">
            Sign In
          </Link> */}
        </div>
      </div>

      {/* Trending Topics Bar */}
      <div className="navbar-trending">
        <div className="navbar-trending-arrow navbar-trending-left">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </div>
        <div className="navbar-trending-topics">
          {trendingTopics.map((topic) => (
            <Link key={topic.name} to={topic.link} className="navbar-trending-topic">
              {topic.name}
            </Link>
          ))}
        </div>
        <div className="navbar-trending-arrow navbar-trending-right">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
