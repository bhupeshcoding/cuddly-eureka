// import styles from "./jobs.module.css";

// // const jobs = [
// //   {
// //     title: "Senior Software Engineer (Java)",
// //     experience: "5 years",
// //     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
// //     company: "Tech Co.",
// //   },
// //   {
// //     title: "Java Developer",
// //     experience: "1 year",
// //     skills: ["Java"],
// //     company: "Dev Solutions",
// //   },
// //   {
// //     title: "Java Developer (M.Tech)",
// //     experience: "2 years",
// //     skills: ["Java", "HTML", "CSS"],
// //     company: "Web Technologies",
// //   },
// //   {
// //     title: "Senior Developer (Java/Spring Boot)",
// //     experience: "8 years",
// //     skills: ["Java", "Spring Boot"],
// //     company: "Innovative Solutions",
// //   },
// //   {
// //     title: "Software Engineer",
// //     experience: "2 years",
// //     skills: ["Java"],
// //     company: "Google",
// //   },
// //   {
// //     title: "Senior Software Engineer",
// //     experience: "10 years",
// //     skills: ["Java", "Spring"],
// //     company: "Amazon",
// //   },
// //   {
// //     title: "Java Developer",
// //     experience: "3 years",
// //     skills: ["Java"],
// //     company: "google",
// //   },
// // ];
// const jobs = [
//   {
//     title: "Senior Software Engineer (Java)",
//     experience: "5 years",
//     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
//     company: "Tech Co.",
//     applyLink: "https://apply.techco.com/senior-software-engineer-java",
//   },
//   {
//     title: "Java Developer",
//     experience: "1 year",
//     skills: ["Java"],
//     company: "Dev Solutions",
//     applyLink: "https://apply.devsolutions.com/java-developer",
//   },
//   {
//     title: "Java Developer (M.Tech)",
//     experience: "2 years",
//     skills: ["Java", "HTML", "CSS"],
//     company: "Web Technologies",
//     applyLink: "https://apply.webtechnologies.com/java-developer-mtech",
//   },
//   {
//     title: "Senior Developer (Java/Spring Boot)",
//     experience: "8 years",
//     skills: ["Java", "Spring Boot"],
//     company: "Innovative Solutions",
//     applyLink:
//       "https://apply.innovativesolutions.com/senior-developer-java-spring-boot",
//   },
//   {
//     title: "Software Engineer",
//     experience: "2 years",
//     skills: ["Java"],
//     company: "Google",
//     applyLink: "https://apply.google.com/software-engineer",
//   },
//   {
//     title: "Senior Software Engineer",
//     experience: "10 years",
//     skills: ["Java", "Spring"],
//     company: "Amazon",
//     applyLink: "https://apply.amazon.com/senior-software-engineer",
//   },
//   {
//     title: "Java Developer",
//     experience: "3 years",
//     skills: ["Java"],
//     company: "Google",
//     applyLink: "https://apply.google.com/java-developer",
//   },
// ];

// // const Jobs = () => {
// //   return (
// //     <div className={styles.jobsContainer}>
// //       <h1 className={styles.title}>Available Job Opportunities</h1>
// //       <div className={styles.jobList}>
// //         {jobs.map((job, index) => (
// //           <div className={styles.jobCard} key={index}>
// //             <h2 className={styles.jobTitle}>{job.title}</h2>
// //             <p className={styles.jobExperience}>
// //               Experience Required: {job.experience}
// //             </p>
// //             <p className={styles.jobSkills}>Skills: {job.skills.join(", ")}</p>
// //             <p className={styles.jobCompany}>Company: {job.company}</p>
// //             <button className={styles.applyButton}>Apply Now</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// const Jobs = () => {
//   return (
//     <div className={styles.jobsContainer}>
//       <h1 className={styles.title}>Available Job Opportunities</h1>
//       <div className={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div className={styles.jobCard} key={index}>
//             <h2 className={styles.jobTitle}>{job.title}</h2>
//             <p className={styles.jobExperience}>
//               Experience Required: {job.experience}
//             </p>
//             <p className={styles.jobSkills}>Skills: {job.skills.join(", ")}</p>
//             <p className={styles.jobCompany}>Company: {job.company}</p>
//             {/* Use an anchor tag for Apply Now button */}
//             <a
//               href={job.applyLink}
//               className={styles.applyButton}
//               target="_blank" // Opens link in new tab
//               rel="noopener noreferrer" // Security improvement for opening in new tab
//             >
//               Apply Now
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

// import { useState, useEffect } from "react";
// import styles from "./jobs.module.css";

// // Initial static jobs data
// const initialJobs = [
//   {
//     title: "Senior Software Engineer (Java)",
//     experience: "5 years",
//     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
//     company: "Tech Co.",
//     applyLink: "https://apply.techco.com/senior-software-engineer-java",
//   },
//   {
//     title: "Java Developer",
//     experience: "1 year",
//     skills: ["Java"],
//     company: "Dev Solutions",
//     applyLink: "https://apply.devsolutions.com/java-developer",
//   },
//   {
//     title: "Java Developer (M.Tech)",
//     experience: "2 years",
//     skills: ["Java", "HTML", "CSS"],
//     company: "Web Technologies",
//     applyLink: "https://apply.webtechnologies.com/java-developer-mtech",
//   },
//   {
//     title: "Senior Developer (Java/Spring Boot)",
//     experience: "8 years",
//     skills: ["Java", "Spring Boot"],
//     company: "Innovative Solutions",
//     applyLink:
//       "https://apply.innovativesolutions.com/senior-developer-java-spring-boot",
//   },
//   {
//     title: "Software Engineer",
//     experience: "2 years",
//     skills: ["Java"],
//     company: "Google",
//     applyLink: "https://apply.google.com/software-engineer",
//   },
//   {
//     title: "Senior Software Engineer",
//     experience: "10 years",
//     skills: ["Java", "Spring"],
//     company: "Amazon",
//     applyLink: "https://apply.amazon.com/senior-software-engineer",
//   },
//   {
//     title: "Java Developer",
//     experience: "3 years",
//     skills: ["Java"],
//     company: "Google",
//     applyLink: "https://apply.google.com/java-developer",
//   },
// ];

// const Jobs = () => {
//   const [jobs, setJobs] = useState(initialJobs);

//   useEffect(() => {
//     // Check if there's a saved jobs array in local storage
//     const storedJobs = JSON.parse(localStorage.getItem("jobs"));
//     if (storedJobs) {
//       setJobs(storedJobs);
//     }
//   }, []);

//   const handleSavePdf = (job) => {
//     // Convert the job to a PDF (mock example)
//     const doc = new jsPDF();
//     doc.text(`Job Title: ${job.title}`, 10, 10);
//     doc.text(`Experience Required: ${job.experience}`, 10, 20);
//     doc.text(`Skills: ${job.skills.join(", ")}`, 10, 30);
//     doc.text(`Company: ${job.company}`, 10, 40);

//     // Save the job PDF to localStorage (simulating a file save)
//     const pdfBlob = doc.output("blob");
//     const pdfDataUrl = URL.createObjectURL(pdfBlob);

//     // Store PDF URL in localStorage
//     localStorage.setItem("jobPdf", pdfDataUrl);
//     alert("Job details PDF saved successfully!");
//   };

//   const addNewJob = (newJob) => {
//     const updatedJobs = [...jobs, newJob];
//     setJobs(updatedJobs);
//     // Save the updated jobs to local storage
//     localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//   };

//   return (
//     <div className={styles.jobsContainer}>
//       <h1 className={styles.title}>Available Job Opportunities</h1>
//       <div className={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div className={styles.jobCard} key={index}>
//             <h2 className={styles.jobTitle}>{job.title}</h2>
//             <p className={styles.jobExperience}>
//               Experience Required: {job.experience}
//             </p>
//             <p className={styles.jobSkills}>Skills: {job.skills.join(", ")}</p>
//             <p className={styles.jobCompany}>Company: {job.company}</p>
//             <div className={styles.buttons}>
//               {/* Apply button */}
//               <a
//                 href={job.applyLink}
//                 className={styles.applyButton}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Apply Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <button
//         className={styles.addJobButton}
//         onClick={() => {
//           const newJob = {
//             title: "New Java Developer",
//             experience: "3 years",
//             skills: ["Java", "Spring Boot"],
//             company: "New Tech",
//             applyLink: "https://apply.newtech.com/java-developer",
//           };
//           addNewJob(newJob);
//         }}
//       >
//         Add New Job
//       </button> */}
//     </div>
//   );
// };

// export default Jobs;

// import { useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import styles from "./jobs.module.css";

// const initialJobs = [
//   {
//     title: "Senior Software Engineer (Java)",
//     experience: "5 years",
//     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
//     company: "Tech Co.",
//     applyLink: "https://apply.techco.com/senior-software-engineer-java",
//   },
//   {
//     title: "Java Developer",
//     experience: "1 year",
//     skills: ["Java"],
//     company: "Dev Solutions",
//     applyLink: "https://apply.devsolutions.com/java-developer",
//   },
// ];

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);

//   // Load jobs from local storage or use initial jobs
//   useEffect(() => {
//     const storedJobs = JSON.parse(localStorage.getItem("jobs"));
//     if (storedJobs) {
//       setJobs(storedJobs);
//     } else {
//       setJobs(initialJobs);
//       localStorage.setItem("jobs", JSON.stringify(initialJobs));
//     }
//   }, []);

//   // Add a new job dynamically
//   const addJob = () => {
//     const newJob = {
//       title: "New Java Developer",
//       experience: "3 years",
//       skills: ["Java", "Spring Boot"],
//       company: "New Tech",
//       applyLink: "https://apply.newtech.com/java-developer",
//     };

//     const updatedJobs = [...jobs, newJob];
//     setJobs(updatedJobs);
//     localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//   };

//   // Delete a job
//   const deleteJob = (index) => {
//     const updatedJobs = jobs.filter((_, i) => i !== index);
//     setJobs(updatedJobs);
//     localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//   };

//   // Generate PDF for a job
//   const generatePDF = (job) => {
//     const pdf = new jsPDF();
//     pdf.text(`Job Title: ${job.title}`, 10, 10);
//     pdf.text(`Experience Required: ${job.experience}`, 10, 20);
//     pdf.text(`Skills: ${job.skills.join(", ")}`, 10, 30);
//     pdf.text(`Company: ${job.company}`, 10, 40);
//     pdf.save(`${job.title}.pdf`);
//   };

//   return (
//     <div className={styles.jobsContainer}>
//       <h1 className={styles.title}>Available Job Opportunities</h1>
//       <button onClick={addJob} className={styles.addJobButton}>
//         Add Job
//       </button>
//       <div className={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div className={styles.jobCard} key={index}>
//             <h2 className={styles.jobTitle}>{job.title}</h2>
//             <p>Experience Required: {job.experience}</p>
//             <p>Skills: {job.skills.join(", ")}</p>
//             <p>Company: {job.company}</p>
//             <div className={styles.buttons}>
//               <a
//                 href={job.applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.applyButton}
//               >
//                 Apply Now
//               </a>
//               <button
//                 onClick={() => generatePDF(job)}
//                 className={styles.pdfButton}
//               >
//                 Save as PDF
//               </button>
//               <button
//                 onClick={() => deleteJob(index)}
//                 className={styles.deleteButton}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

// import { useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import styles from "./jobs.module.css";

// const initialJobs = [
//   {
//     title: "Senior Software Engineer (Java)",
//     experience: "5+ years",
//     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
//     company: "Tech Innovators Inc.",
//     applyLink: "https://apply.techco.com/senior-software-engineer-java",
//   },
//   {
//     title: "Java Developer",
//     experience: "1-2 years",
//     skills: ["Java", "SQL"],
//     company: "Dev Solutions Pvt Ltd",
//     applyLink: "https://apply.devsolutions.com/java-developer",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "3-5 years",
//     skills: ["JavaScript", "React", "Node.js", "Java"],
//     company: "CodeCraft Technologies",
//     applyLink: "https://apply.codecraft.com/full-stack-developer",
//   },
//   {
//     title: "Backend Engineer",
//     experience: "2-4 years",
//     skills: ["Java", "Spring Boot", "Hibernate"],
//     company: "NextGen Softwares",
//     applyLink: "https://apply.nextgen.com/backend-engineer",
//   },
//   {
//     title: "Cloud Engineer",
//     experience: "4+ years",
//     skills: ["Java", "AWS", "Docker", "Kubernetes"],
//     company: "CloudWorks Ltd.",
//     applyLink: "https://apply.cloudworks.com/cloud-engineer",
//     number: 8996555788,
//   },
//   {
//     title: "AI/ML Engineer",
//     experience: "5+ years",
//     skills: ["Java", "Python", "Machine Learning", "Deep Learning"],
//     company: "AI Prodigy Systems",
//     applyLink: "https://apply.aiprodigy.com/ai-ml-engineer",
//   },
// ];

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);

//   // Load jobs from local storage or use initial jobs
//   useEffect(() => {
//     const storedJobs = JSON.parse(localStorage.getItem("jobs"));
//     if (storedJobs) {
//       setJobs(storedJobs);
//     } else {
//       setJobs(initialJobs);
//       localStorage.setItem("jobs", JSON.stringify(initialJobs));
//     }
//   }, []);

//   // Add a new job dynamically
//   const addJob = () => {
//     const newJob = {
//       title: "Junior Frontend Developer",
//       experience: "0-1 year",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       company: "StartUp Hub",
//       applyLink: "https://apply.startuphub.com/frontend-developer",
//     };

//     const updatedJobs = [...jobs, newJob];
//     setJobs(updatedJobs);
//     localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//   };

//   // Delete a job
//   const deleteJob = (index) => {
//     const updatedJobs = jobs.filter((_, i) => i !== index);
//     setJobs(updatedJobs);
//     localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//   };

//   // Generate PDF for a job
//   const generatePDF = (job) => {
//     const pdf = new jsPDF();
//     pdf.text(`Job Title: ${job.title}`, 10, 10);
//     pdf.text(`Experience Required: ${job.experience}`, 10, 20);
//     pdf.text(`Skills: ${job.skills.join(", ")}`, 10, 30);
//     pdf.text(`Company: ${job.company}`, 10, 40);
//     pdf.save(`${job.title}.pdf`);
//   };

//   return (
//     <div className={styles.jobsContainer}>
//       <h1 className={styles.title}>Available Job Opportunities</h1>
//       <button onClick={addJob} className={styles.addJobButton}>
//         Add Job
//       </button>
//       <div className={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div className={styles.jobCard} key={index}>
//             <h2 className={styles.jobTitle}>{job.title}</h2>
//             <p>Experience Required: {job.experience}</p>
//             <p>Skills: {job.skills.join(", ")}</p>
//             <p>Company: {job.company}</p>
//             <div className={styles.buttons}>
//               <a
//                 href={job.applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.applyButton}
//               >
//                 Apply Now
//               </a>
//               <button
//                 onClick={() => generatePDF(job)}
//                 className={styles.pdfButton}
//               >
//                 Save as PDF
//               </button>
//               <button
//                 onClick={() => deleteJob(index)}
//                 className={styles.deleteButton}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

// import { useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import styles from "./jobs.module.css";

// const initialJobs = [
//   {
//     title: "Senior Software Engineer (Java)",
//     experience: "5+ years",
//     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
//     company: "Tech Innovators Inc.",
//     applyLink: "https://apply.techco.com/senior-software-engineer-java",
//     contactNumber: "123-456-7890",
//   },
//   {
//     title: "Java Developer",
//     experience: "1-2 years",
//     skills: ["Java", "SQL"],
//     company: "Dev Solutions Pvt Ltd",
//     applyLink: "https://apply.devsolutions.com/java-developer",
//     contactNumber: "987-654-3210",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "3-5 years",
//     skills: ["JavaScript", "React", "Node.js", "Java"],
//     company: "CodeCraft Technologies",
//     applyLink: "https://apply.codecraft.com/full-stack-developer",
//     contactNumber: "555-123-4567",
//   },
//   {
//     title: "Backend Engineer",
//     experience: "2-4 years",
//     skills: ["Java", "Spring Boot", "Hibernate"],
//     company: "NextGen Softwares",
//     applyLink: "https://apply.nextgen.com/backend-engineer",
//     contactNumber: "444-789-1234",
//   },
//   {
//     title: "Cloud Engineer",
//     experience: "4+ years",
//     skills: ["Java", "AWS", "Docker", "Kubernetes"],
//     company: "CloudWorks Ltd.",
//     applyLink: "https://apply.cloudworks.com/cloud-engineer",
//     contactNumber: "888-999-0000",
//   },
//   {
//     title: "AI/ML Engineer",
//     experience: "5+ years",
//     skills: ["Java", "Python", "Machine Learning", "Deep Learning"],
//     company: "AI Prodigy Systems",
//     applyLink: "https://apply.aiprodigy.com/ai-ml-engineer",
//     contactNumber: "666-777-8888",
//   },
// ];

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);

//   // Load jobs from local storage or use initial jobs
//   useEffect(() => {
//     const storedJobs = JSON.parse(localStorage.getItem("jobs"));
//     if (storedJobs) {
//       setJobs(storedJobs);
//     } else {
//       setJobs(initialJobs);
//       localStorage.setItem("jobs", JSON.stringify(initialJobs));
//     }
//   }, []);

//   // Add a new job dynamically
//   const addJob = () => {
//     const newJob = {
//       title: "Junior Frontend Developer",
//       experience: "0-1 year",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       company: "StartUp Hub",
//       applyLink: "https://apply.startuphub.com/frontend-developer",
//       contactNumber: "333-444-5555",
//     };

//     const updatedJobs = [...jobs, newJob];
//     setJobs(updatedJobs);
//     localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//   };

//   // Delete a job
//   const deleteJob = (index) => {
//     const updatedJobs = jobs.filter((_, i) => i !== index);
//     setJobs(updatedJobs);
//     localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//   };

//   // Generate PDF for a job
//   const generatePDF = (job) => {
//     const pdf = new jsPDF();
//     pdf.text(`Job Title: ${job.title}`, 10, 10);
//     pdf.text(`Experience Required: ${job.experience}`, 10, 20);
//     pdf.text(`Skills: ${job.skills.join(", ")}`, 10, 30);
//     pdf.text(`Company: ${job.company}`, 10, 40);
//     pdf.text(`Contact Number: ${job.contactNumber}`, 10, 50);
//     pdf.text(`Apply Link:`, 10, 60);
//     pdf.text(job.applyLink, 10, 70, { maxWidth: 180 });
//     pdf.save(`${job.title}.pdf`);
//   };

//   return (
//     <div className={styles.jobsContainer}>
//       <h1 className={styles.title}>Available Job Opportunities</h1>
//       <button onClick={addJob} className={styles.addJobButton}>
//         Add Job
//       </button>
//       <div className={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div className={styles.jobCard} key={index}>
//             <h2 className={styles.jobTitle}>{job.title}</h2>
//             <p>Experience Required: {job.experience}</p>
//             <p>Skills: {job.skills.join(", ")}</p>
//             <p>Company: {job.company}</p>
//             <p>Contact: {job.contactNumber}</p>
//             <div className={styles.buttons}>
//               <a
//                 href={job.applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.applyButton}
//               >
//                 Apply Now
//               </a>
//               <button
//                 onClick={() => generatePDF(job)}
//                 className={styles.pdfButton}
//               >
//                 Save as PDF
//               </button>
//               <button
//                 onClick={() => deleteJob(index)}
//                 className={styles.deleteButton}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

// import { useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import styles from "./jobs.module.css";

// const initialJobs = [
//   {
//     title: "Senior Software Engineer (Java)",
//     experience: "5+ years",
//     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
//     company: "Tech Innovators Inc.",
//     applyLink: "https://apply.techco.com/senior-software-engineer-java",
//     contactNumber: "123-456-7890",
//   },
//   {
//     title: "Java Developer",
//     experience: "1-2 years",
//     skills: ["Java", "SQL"],
//     company: "Dev Solutions Pvt Ltd",
//     applyLink: "https://apply.devsolutions.com/java-developer",
//     contactNumber: "987-654-3210",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "3-5 years",
//     skills: ["JavaScript", "React", "Node.js", "Java"],
//     company: "CodeCraft Technologies",
//     applyLink: "https://apply.codecraft.com/full-stack-developer",
//     contactNumber: "555-123-4567",
//   },
//   {
//     title: "Backend Engineer",
//     experience: "2-4 years",
//     skills: ["Java", "Spring Boot", "Hibernate"],
//     company: "NextGen Softwares",
//     applyLink: "https://apply.nextgen.com/backend-engineer",
//     contactNumber: "444-789-1234",
//   },
//   {
//     title: "Cloud Engineer",
//     experience: "4+ years",
//     skills: ["Java", "AWS", "Docker", "Kubernetes"],
//     company: "CloudWorks Ltd.",
//     applyLink: "https://apply.cloudworks.com/cloud-engineer",
//     contactNumber: "888-999-0000",
//   },
//   {
//     title: "AI/ML Engineer",
//     experience: "5+ years",
//     skills: ["Java", "Python", "Machine Learning", "Deep Learning"],
//     company: "AI Prodigy Systems",
//     applyLink: "https://apply.aiprodigy.com/ai-ml-engineer",
//     contactNumber: "666-777-8888",
//   },
// ];

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);

//   // Log jobs and load from localStorage or use initial jobs
//   useEffect(() => {
//     const storedJobs = JSON.parse(localStorage.getItem("jobs"));
//     if (storedJobs) {
//       console.log("Jobs loaded from localStorage:", storedJobs);
//       setJobs(storedJobs);
//     } else {
//       console.log("Using initial jobs:", initialJobs);
//       setJobs(initialJobs);
//       localStorage.setItem("jobs", JSON.stringify(initialJobs));
//     }
//   }, []);

//   // Validate job data before adding it
//   const validateJob = (job) => {
//     return (
//       job.title &&
//       job.experience &&
//       job.skills &&
//       job.company &&
//       job.contactNumber &&
//       job.applyLink
//     );
//   };

//   // Add a new job dynamically
//   const addJob = () => {
//     const newJob = {
//       title: "Junior Frontend Developer",
//       experience: "0-1 year",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       company: "StartUp Hub",
//       applyLink: "https://apply.startuphub.com/frontend-developer",
//       contactNumber: "333-444-5555",
//     };

//     if (validateJob(newJob)) {
//       const updatedJobs = [...jobs, newJob];
//       setJobs(updatedJobs);
//       localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//     } else {
//       console.error("Invalid job data:", newJob);
//     }
//   };

//   // Generate PDF for a job
//   const generatePDF = (job) => {
//     const pdf = new jsPDF();
//     pdf.text(`Job Title: ${job.title}`, 10, 10);
//     pdf.text(`Experience Required: ${job.experience}`, 10, 20);
//     pdf.text(`Skills: ${job.skills.join(", ")}`, 10, 30);
//     pdf.text(`Company: ${job.company}`, 10, 40);
//     pdf.text(`Contact Number: ${job.contactNumber}`, 10, 50);
//     pdf.text(`Apply Link:`, 10, 60);
//     pdf.text(job.applyLink, 10, 70, { maxWidth: 180 });
//     pdf.save(`${job.title}.pdf`);
//   };

//   return (
//     <div className={styles.jobsContainer}>
//       <h1 className={styles.title}>Available Job Opportunities</h1>
//       <button onClick={addJob} className={styles.addJobButton}>
//         Add Job
//       </button>
//       <div className={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div className={styles.jobCard} key={index}>
//             <h2 className={styles.jobTitle}>{job.title}</h2>
//             <p>Experience Required: {job.experience}</p>
//             <p>Skills: {job.skills.join(", ")}</p>
//             <p>Company: {job.company}</p>
//             <p>Contact: {job.contactNumber || "Not Available"}</p>{" "}
//             {/* Fallback message */}
//             <div className={styles.buttons}>
//               <a
//                 href={job.applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.applyButton}
//               >
//                 Apply Now
//               </a>
//               <button
//                 onClick={() => generatePDF(job)}
//                 className={styles.pdfButton}
//               >
//                 Save as PDF
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

// import { useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import styles from "./jobs.module.css";

// const initialJobs = [
//   {
//     title: "Senior Software Engineer (Java)",
//     experience: "5+ years",
//     skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
//     company: "Tech Innovators Inc.",
//     applyLink: "https://apply.techco.com/senior-software-engineer-java",
//     contactNumber: "123-456-7890",
//   },
//   // Add more job listings here...
// ];

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);

//   // Load jobs from localStorage or use initial data
//   useEffect(() => {
//     try {
//       const storedJobs = JSON.parse(localStorage.getItem("jobs"));
//       if (storedJobs) {
//         setJobs(storedJobs);
//       } else {
//         setJobs(initialJobs);
//         localStorage.setItem("jobs", JSON.stringify(initialJobs));
//       }
//     } catch (error) {
//       console.error("Error loading jobs from localStorage:", error);
//       setJobs(initialJobs);
//     }
//   }, []);

//   const validateJob = (job) => {
//     return (
//       job.title &&
//       job.experience &&
//       job.skills?.length > 0 &&
//       job.company &&
//       job.contactNumber &&
//       job.applyLink
//     );
//   };

//   const addJob = () => {
//     const newJob = {
//       title: "Junior Frontend Developer",
//       experience: "0-1 year",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       company: "StartUp Hub",
//       applyLink: "https://apply.startuphub.com/frontend-developer",
//       contactNumber: "333-444-5555",
//     };

//     if (validateJob(newJob)) {
//       const updatedJobs = [...jobs, newJob];
//       setJobs(updatedJobs);
//       localStorage.setItem("jobs", JSON.stringify(updatedJobs));
//     } else {
//       console.error("Invalid job data:", newJob);
//     }
//   };

//   const generatePDF = (job) => {
//     try {
//       const pdf = new jsPDF();
//       pdf.setFont("helvetica", "bold");
//       pdf.text("Job Details", 10, 10);
//       pdf.setFont("helvetica", "normal");
//       pdf.text(`Title: ${job.title}`, 10, 20);
//       pdf.text(`Experience: ${job.experience}`, 10, 30);
//       pdf.text(`Skills: ${job.skills.join(", ")}`, 10, 40);
//       pdf.text(`Company: ${job.company}`, 10, 50);
//       pdf.text(`Contact: ${job.contactNumber}`, 10, 60);
//       pdf.text(`Apply Link: ${job.applyLink}`, 10, 70, { maxWidth: 180 });
//       pdf.save(`${job.title.replace(/\s+/g, "_")}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <div className={styles.jobsContainer}>
//       <h1 className={styles.title}>Available Job Opportunities</h1>
//       <button onClick={addJob} className={styles.addJobButton}>
//         Add Job
//       </button>
//       <div className={styles.jobList}>
//         {jobs.map((job, index) => (
//           <div className={styles.jobCard} key={index}>
//             <h2 className={styles.jobTitle}>{job.title}</h2>
//             <p>Experience Required: {job.experience}</p>
//             <p>Skills: {job.skills.join(", ")}</p>
//             <p>Company: {job.company}</p>
//             <p>Contact: {job.contactNumber || "Not Available"}</p>
//             <div className={styles.buttons}>
//               <a
//                 href={job.applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.applyButton}
//               >
//                 Apply Now
//               </a>
//               <button
//                 onClick={() => generatePDF(job)}
//                 className={styles.pdfButton}
//               >
//                 Save as PDF
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import styles from "./jobs.module.css";

const initialJobs = [
  {
    title: "Senior Software Engineer (Java)",
    experience: "5+ years",
    skills: ["Java", "Spring", "Spring Boot", "Microservices", "Concurrency"],
    company: "Tech Innovators Inc.",
    applyLink: "https://apply.techco.com/senior-software-engineer-java",
    contactNumber: "123-456-7890",
  },
  // Add more job listings here...
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  // Load jobs from localStorage or use initial data
  useEffect(() => {
    try {
      const storedJobs = JSON.parse(localStorage.getItem("jobs"));
      if (storedJobs) {
        setJobs(storedJobs);
      } else {
        setJobs(initialJobs);
        localStorage.setItem("jobs", JSON.stringify(initialJobs));
      }
    } catch (error) {
      console.error("Error loading jobs from localStorage:", error);
      setJobs(initialJobs);
    }
  }, []);

  const validateJob = (job) => {
    return (
      job.title &&
      job.experience &&
      Array.isArray(job.skills) &&
      job.skills.length > 0 &&
      job.company &&
      job.contactNumber &&
      job.applyLink
    );
  };

  const addJob = () => {
    const newJob = {
      title: "Ai Ml Developer",
      experience: "5 year",
      skills: ["Ml", "PYTorch", "Python", "SeaBorn"],
      company: "StartUp Hub",
      applyLink: "https://apply.startuphub.com/frontend-developer",
      contactNumber: "333-444-5555",
    };

    if (validateJob(newJob)) {
      const updatedJobs = [...jobs, newJob];
      setJobs(updatedJobs);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    } else {
      console.error("Invalid job data:", newJob);
    }
  };

  const generatePDF = (job) => {
    try {
      const pdf = new jsPDF();
      pdf.setFont("helvetica", "bold");
      pdf.text("Job Details", 10, 10);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Title: ${job.title}`, 10, 20);
      pdf.text(`Experience: ${job.experience}`, 10, 30);
      const skillsText = Array.isArray(job.skills)
        ? job.skills.join(", ")
        : "Not specified";
      pdf.text(`Skills: ${skillsText}`, 10, 40);
      pdf.text(`Company: ${job.company}`, 10, 50);
      pdf.text(`Contact: ${job.contactNumber}`, 10, 60);
      pdf.text(`Apply Link: ${job.applyLink}`, 10, 70, { maxWidth: 180 });
      pdf.save(`${job.title.replace(/\s+/g, "_")}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className={styles.jobsContainer}>
      <h1 className={styles.title}>Available Job Opportunities</h1>
      <button onClick={addJob} className={styles.addJobButton}>
        Add Job
      </button>
      <div className={styles.jobList}>
        {jobs.map((job, index) => (
          <div className={styles.jobCard} key={index}>
            <h2 className={styles.jobTitle}>{job.title}</h2>
            <p>Experience Required: {job.experience}</p>
            <p>
              Skills:{" "}
              {Array.isArray(job.skills)
                ? job.skills.join(", ")
                : "Not specified"}
            </p>
            <p>Company: {job.company}</p>
            <p>Contact: {job.contactNumber || "Not Available"}</p>
            <div className={styles.buttons}>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.applyButton}
              >
                Apply Now
              </a>
              <button
                onClick={() => generatePDF(job)}
                className={styles.pdfButton}
              >
                Save as PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
