import { JobCard } from "./JobCard";
import jobData from "./jobData";
import "./Job.css";
export default function Job() {
  return (
    <div className="jobs-container">
      {jobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}
