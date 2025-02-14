import JobCard from "./JobCard";
import data from "./jobData";
import "./Job.css";
export default function Job() {
  return (
    <div className="jobs-container">
      {data.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}
