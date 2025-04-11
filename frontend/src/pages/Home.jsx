// import { Link } from "react-router-dom"
// import { Search, Database, Code, Server, Brain, FileCode } from "lucide-react"
// import "../../styles/Home.css"

// const Home = () => {
//   const courses = [
//     {
//       id: "system-design",
//       title: "System Design",
//       description: "Learn how to design scalable systems and architecture",
//       icon: Server,
//       color: "blue",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       id: "machine-learning",
//       title: "Machine Learning",
//       description: "Master the fundamentals of ML algorithms and applications",
//       icon: Brain,
//       color: "purple",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       id: "data-science",
//       title: "Data Science",
//       description: "Analyze and visualize data to extract meaningful insights",
//       icon: Database,
//       color: "green",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       id: "sql",
//       title: "SQL",
//       description: "Master database queries and management",
//       icon: Database,
//       color: "yellow",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       id: "html-css",
//       title: "HTML & CSS",
//       description: "Build beautiful and responsive web pages",
//       icon: Code,
//       color: "orange",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       id: "javascript",
//       title: "JavaScript",
//       description: "Create interactive and dynamic web applications",
//       icon: FileCode,
//       color: "red",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//   ]

//   const featuredCourses = courses.slice(0, 3)

//   return (
//     <div className="home">
//       {/* Hero Section with Search */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1 className="hero-title">What do you want to learn today?</h1>
//           <p className="hero-subtitle">Explore our wide range of courses and tutorials to enhance your skills</p>

//           <div className="hero-search">
//             <input type="text" placeholder="What do you want to learn today?" className="hero-search-input" />
//             <button className="hero-search-button">
//               <Search size={24} />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       <section className="featured-courses">
//         <div className="section-container">
//           <h2 className="section-title">Featured Courses</h2>

//           <div className="featured-grid">
//             {featuredCourses.map((course) => (
//               <Link to={`/course/${course.id}`} key={course.id} className="featured-card">
//                 <div className="featured-card-content">
//                   <div className="featured-card-image-container">
//                     <img src={course.image || "/placeholder.svg"} alt={course.title} className="featured-card-image" />
//                     <div className={`featured-card-icon featured-card-icon-${course.color}`}>
//                       <course.icon size={24} />
//                     </div>
//                   </div>
//                   <div className="featured-card-body">
//                     <h3 className="featured-card-title">{course.title}</h3>
//                     <p className="featured-card-description">{course.description}</p>
//                     <div className="featured-card-action">
//                       <span>Start Learning</span>
//                       <svg className="featured-card-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* All Courses */}
//       <section className="all-courses">
//         <div className="section-container">
//           <h2 className="section-title">Explore All Courses</h2>

//           <div className="courses-grid">
//             {courses.map((course) => (
//               <Link to={`/course/${course.id}`} key={course.id} className="course-card">
//                 <div className={`course-card-icon course-card-icon-${course.color}`}>
//                   <course.icon size={24} />
//                 </div>
//                 <div className="course-card-content">
//                   <h3 className="course-card-title">{course.title}</h3>
//                   <p className="course-card-description">{course.description}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="cta">
//         <div className="cta-container">
//           <h2 className="cta-title">Ready to start your learning journey?</h2>
//           <p className="cta-subtitle">Join thousands of students who are already learning with HexaBeta</p>
//           <Link to="/signup" className="cta-button">
//             Get Started for Free
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home


import { Link } from "react-router-dom"
import { Search, Database, Code, Server, Brain, FileCode } from "lucide-react"

const Home = () => {
  const courses = [
    {
      id: "system-design",
      title: "System Design",
      description: "Learn how to design scalable systems and architecture",
      icon: Server,
      color: "blue",
      image: "https://cdn.prod.website-files.com/6529762860f5d2796d4eb495/65e859ddcc41d9e6f8a7ef7b_What%20is%20system%20design-system%20design%20in%20SDLC-grorapidlabs.jpeg",
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Master the fundamentals of ML algorithms and applications",
      icon: Brain,
      color: "purple",
      image: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/07/what-is-machine-learning.jpg",
    },
    
    {
      id: "data-science",
      title: "Data Science",
      description: "Analyze and visualize data to extract meaningful insights",
      icon: Database,
      color: "green",
      image: "https://wallpapers.com/images/featured/data-science-xe1pmo7wm4jcokpd.jpg",
    },
    {
      id: "sql",
      title: "SQL",
      description: "Master database queries and management",
      icon: Database,
      color: "yellow",
      image: "https://static.tildacdn.one/tild6262-6661-4034-b164-383063636462/What_is_SQL_Database.png",
    },
    {
      id: "html-css",
      title: "HTML & CSS",
      description: "Build beautiful and responsive web pages",
      icon: Code,
      color: "orange",
      image: "https://img-c.udemycdn.com/course/750x422/5396030_f3ee_5.jpg",
    },
    {
      id: "javascript",
      title: "JavaScript",
      description: "Create interactive and dynamic web applications",
      icon: FileCode,
      color: "red",
      image: "https://wpengine.com/wp-content/uploads/2021/07/jsheader.png",
    },
  ]

  const featuredCourses = courses.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search */}
      <section
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "white",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            What do you want to learn today?
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "2rem",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Explore our wide range of courses and tutorials to enhance your skills
          </p>

          <div
            style={{
              position: "relative",
              maxWidth: "32rem",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              placeholder="What do you want to learn today?"
              style={{
                width: "100%",
                padding: "1rem 4rem 1rem 1.5rem",
                borderRadius: "9999px",
                border: "none",
                fontSize: "1.125rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
              }}
            />
            <button
              style={{
                position: "absolute",
                right: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "9999px",
                padding: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Search size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section
        style={{
          padding: "5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              color: "#111827",
              textAlign: "center",
              marginBottom: "2.5rem",
              position: "relative",
            }}
          >
            Featured Courses
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {featuredCourses.map((course) => (
              <Link
                to={`/course/${course.id}`}
                key={course.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "block",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "12rem",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor:
                          course.color === "blue"
                            ? "#3b82f6"
                            : course.color === "purple"
                              ? "#8b5cf6"
                              : course.color === "green"
                                ? "#10b981"
                                : course.color === "yellow"
                                  ? "#f59e0b"
                                  : course.color === "orange"
                                    ? "#f97316"
                                    : "#ef4444",
                      }}
                    >
                      <course.icon size={24} />
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: "1",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {course.title}
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                        marginBottom: "1.5rem",
                        lineHeight: "1.5",
                        flexGrow: "1",
                      }}
                    >
                      {course.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#16a34a",
                        fontWeight: "600",
                        marginTop: "auto",
                      }}
                    >
                      <span>Start Learning</span>
                      <svg
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          marginLeft: "0.5rem",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "#f9fafb",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              color: "#111827",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            Explore All Courses
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {courses.map((course) => (
              <Link
                to={`/course/${course.id}`}
                key={course.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: "1.25rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginRight: "1rem",
                    flexShrink: "0",
                    backgroundColor:
                      course.color === "blue"
                        ? "#3b82f6"
                        : course.color === "purple"
                          ? "#8b5cf6"
                          : course.color === "green"
                            ? "#10b981"
                            : course.color === "yellow"
                              ? "#f59e0b"
                              : course.color === "orange"
                                ? "#f97316"
                                : "#ef4444",
                  }}
                >
                  <course.icon size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6b7280",
                      lineHeight: "1.4",
                    }}
                  >
                    {course.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Ready to start your learning journey?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#e5e7eb",
              marginBottom: "2rem",
            }}
          >
            Join thousands of students who are already learning with HexaBeta
          </p>
          <Link
            to="/signup"
            style={{
              display: "inline-block",
              backgroundColor: "#16a34a",
              color: "white",
              fontWeight: "600",
              padding: "1rem 2rem",
              borderRadius: "9999px",
            }}
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
