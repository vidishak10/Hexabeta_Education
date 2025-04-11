import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Calendar, Share2, Edit, MoreVertical } from 'lucide-react';
import "../../styles/CoursePage.css";

const CoursePage = () => {
  const { courseId } = useParams();

  // Mock data for the course content
  const getCourseContent = () => {
    switch (courseId) {
      case "machine-learning":
        return {
          title: "Machine Learning Tutorial",
          lastUpdated: "26 Mar, 2025",
          content: `
            <h1>Machine Learning Tutorial</h1>
            <p>Machine learning is a subset of Artificial Intelligence (AI) that enables computers to learn from data and make predictions without being explicitly programmed. If you're new to this field, this tutorial will provide a comprehensive understanding of machine learning, its types, algorithms, tools, and practical applications.</p>
            
            <h2>Module 1: Introduction to Machine Learning</h2>
            <p>Machine learning teaches computers to recognize patterns and make decisions automatically using data and algorithms.</p>
            <p>It can be broadly categorized into three types:</p>
            <ul>
              <li><strong>Supervised Learning</strong>: Trains models on labeled data to predict or classify new, unseen data.</li>
              <li><strong>Unsupervised Learning</strong>: Finds patterns or groups in unlabeled data, like clustering or dimensionality reduction.</li>
              <li><strong>Reinforcement Learning</strong>: Learns through trial and error to maximize rewards, ideal for decision-making tasks.</li>
            </ul>
            
            <p>In addition these categories, there are also Semi-Supervised Learning and Self-Supervised Learning.</p>
            <ul>
              <li><strong>Semi-Supervised Learning</strong> uses a mix of labeled and unlabeled data, making it helpful when labeling data is costly or time-consuming.</li>
              <li><strong>Self-Supervised Learning</strong> creates its own labels from raw data, allowing it to learn patterns without needing labeled examples.</li>
            </ul>
          `,
        };
      case "data-science":
        return {
          title: "Data Science Tutorial",
          lastUpdated: "20 Mar, 2025",
          content: `
            <h1>Data Science Tutorial</h1>
            <p>Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data.</p>
            
            <h2>Module 1: Introduction to Data Science</h2>
            <p>Data Science combines multiple fields, including statistics, scientific methods, and data analysis, to extract value from data.</p>
            <p>The Data Science lifecycle typically includes:</p>
            <ul>
              <li><strong>Data Collection</strong>: Gathering data from various sources</li>
              <li><strong>Data Cleaning</strong>: Preparing and cleaning the data for analysis</li>
              <li><strong>Data Analysis</strong>: Exploring and analyzing the data to find patterns</li>
              <li><strong>Data Visualization</strong>: Creating visual representations of the data</li>
              <li><strong>Model Building</strong>: Creating predictive models using machine learning</li>
              <li><strong>Deployment</strong>: Implementing the models in real-world applications</li>
            </ul>
          `,
        };
        case "python":
  return {
    title: "Python Tutorial",
    lastUpdated: "10 Apr, 2025",
    content: `
      <h1>Python Tutorial</h1>
      <p>Python is a high-level, interpreted programming language known for its simplicity and versatility. It's widely used in web development, data science, automation, and more.</p>
      
      <h2>Module 1: Getting Started with Python</h2>
      <p>Python was created by Guido van Rossum and first released in 1991. It emphasizes code readability and uses significant indentation.</p>
      
      <h3>Why Learn Python?</h3>
      <ul>
        <li><strong>Easy to Learn</strong>: Python's syntax is straightforward and readable.</li>
        <li><strong>Versatile</strong>: Used in web development, data science, AI, automation, and more.</li>
        <li><strong>Large Community</strong>: Tons of libraries and frameworks available.</li>
        <li><strong>Cross-platform</strong>: Works on Windows, Mac, and Linux.</li>
      </ul>

      <h2>Module 2: Python Basics</h2>
      <p>Key fundamentals to get started:</p>
      <ul>
        <li><strong>Variables & Data Types</strong>: int, float, string, boolean</li>
        <li><strong>Operators</strong>: Arithmetic, Comparison, Logical</li>
        <li><strong>Control Structures</strong>: if, else, elif, for, while</li>
        <li><strong>Functions</strong>: Defining and calling functions with <code>def</code></li>
        <li><strong>Data Structures</strong>: Lists, Tuples, Sets, Dictionaries</li>
      </ul>

      <h2>Module 3: Working with Libraries</h2>
      <p>Popular libraries to explore:</p>
      <ul>
        <li><strong>NumPy</strong>: For numerical operations</li>
        <li><strong>Pandas</strong>: For data manipulation and analysis</li>
        <li><strong>Matplotlib</strong>: For data visualization</li>
        <li><strong>Flask/Django</strong>: For web development</li>
      </ul>

      <h2>Next Steps</h2>
      <p>Once you're comfortable with the basics, try building small projects like a calculator, to-do app, or a weather scraper using APIs. Continue exploring Python through frameworks, automation, and data science tools!</p>
    `,
  };

      default:
        return {
          title: "Course Tutorial",
          lastUpdated: "15 Mar, 2025",
          content: "<p>Course content is being prepared. Please check back later.</p>",
        };
    }
  };

  const courseContent = getCourseContent();

  return (
    <div className="course-page">
      {/* Sidebar */}
      <Sidebar category={courseId} />

      {/* Main Content */}
      <main className="course-content">
        <div className="course-container">
          {/* Course Header */}
          <div className="course-header">
            <h1 className="course-title">{courseContent.title}</h1>
            <div className="course-meta">
              <div className="course-date">
                <Calendar size={16} />
                <span>Last Updated: {courseContent.lastUpdated}</span>
              </div>
              <div className="course-actions">
                <button className="course-action-button">
                  <Share2 size={18} />
                </button>
                <button className="course-action-button">
                  <Edit size={18} />
                </button>
                <button className="course-action-button">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="course-body" dangerouslySetInnerHTML={{ __html: courseContent.content }} />

          {/* Related Topics */}
          <div className="related-topics">
            <h3 className="related-title">Related Topics</h3>
            <div className="related-grid">
              <a href="#" className="related-card">
                <h4 className="related-card-title">Introduction to Neural Networks</h4>
                <p className="related-card-description">Learn about the building blocks of deep learning</p>
              </a>
              <a href="#" className="related-card">
                <h4 className="related-card-title">Practical Machine Learning Projects</h4>
                <p className="related-card-description">Hands-on projects to apply your ML knowledge</p>
              </a>
              <a href="#" className="related-card">
                <h4 className="related-card-title">Machine Learning with Python</h4>
                <p className="related-card-description">Using Python libraries for ML implementation</p>
              </a>
              <a href="#" className="related-card">
                <h4 className="related-card-title">Data Preprocessing Techniques</h4>
                <p className="related-card-description">Essential steps before applying ML algorithms</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
