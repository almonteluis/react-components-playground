/* eslint-disable react/prop-types */
import { formatCurrency, formatDate } from "../../utils/helper";

/* CHALLENGE ENHANCEMENTS:
 * 1. Time-ago format:
 *    - For posts less than 7 days old, show "X days ago" instead of the date
 *    - Create a new helper function: formatTimeAgo(date)
 *    - Example: "Posted: 2 days ago" or "Posted: Today"
 *
 * 2. Action Buttons:
 *    - Add a "Save Job" button that toggles between saved/unsaved
 *    - Add an "Apply Now" button that links to application
 *    - Add a useState hook to track saved state
 *    - Add onClick handlers for the buttons
 *
 * 3. Experience Level Badge:
 *    - Add a new badge next to the remote badge showing experience.level
 *    - Color code it based on level (junior/mid/senior)
 *    - Use a new CSS class: "experience-badge"
 *
 * 4. Deadline Urgency:
 *    - Add a colored indicator based on how close the deadline is
 *    - Red: less than 3 days
 *    - Yellow: less than 7 days
 *    - Green: more than 7 days
 *    - Create helper function: getDeadlineColor(deadline)
 *
 * 5. Application Counter:
 *    - Add applicant count if available in the job-meta section
 *    - Show "Be the first to apply!" if count is 0
 *    - Add new property to data: applicantCount
 */

export default function JobCard(props) {
  const senior = props.experience.level === "Senior";
  const mid = props.experience.level === "Mid-Level";
  const junior = props.experience.level === "Junior";
  return (
    <div className="job-card">
      {/* Urgent Hiring Badge */}
      {props.isUrgentHiring && (
        <div className="urgent-badge">Urgent Hiring</div>
      )}

      {/* Company Header */}
      <div className="company-header">
        <img className="company-logo" src="logo-url" alt="company logo" />
        <div className="company-info">
          <h3>{props.company.employees}</h3>
          <div className="company-meta">
            <div className="company-rating">★ {props.company.rating}</div>
            <span>Company Size</span>
          </div>
        </div>
      </div>

      {/* Position and Experience Level */}
      <div className="position-header">
        <h2 className="position">{props.position}</h2>
        <span
          className={
            (senior && "experience-senior") ||
            (mid && "experience-mid") ||
            (junior && "experience-junior")
          }
        >
          {props.experience.level} Level
        </span>
      </div>

      {/* Location */}
      <div className="location-info">
        <span>
          {props.company.location.city}, {props.company.location.country}
        </span>
        {props.remote && <span className="remote-badge">Remote</span>}
      </div>

      {/* Application Status */}
      {props.applicationStatus && (
        <div className="application-status">
          <span className="status-spots">
            {props.applicationStatus.remainingSpots} spots remaining
          </span>
          <span className="applicant-count">
            {props.applicationStatus.totalSpots} applicants
          </span>
        </div>
      )}

      {/* Salary Range */}
      <div className="salary-range">
        <div className="salary-label">Salary Range</div>
        <div className="salary-amount">
          {formatCurrency(props.salary.min)} -{" "}
          {formatCurrency(props.salary.max)}/year
        </div>
      </div>

      {/* Skills */}
      <div className="skills-section">
        <h4>Required Skills</h4>
        <div className="skills-list">
          {props.skills.map((skill, i) => (
            <span key={i} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="description">{props.description}</p>

      {/* Responsibilities */}
      <section className="responsibilities">
        <h4>Key Responsibilities</h4>
        <ul className="responsibilities-list">
          {props.responsibilities.map((respond, i) => (
            <li key={i}>{respond}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <div className="benefits">
        <h4>Benefits</h4>
        <div className="benefits-list">
          {props.benefits.map((benefit, i) => (
            <span key={i} className="benefit-tag">
              {benefit}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <section className="action-buttons">
        <button className="save-button">Save Job</button>
        <a className="apply-button" href="#">
          Apply Now
        </a>
      </section>

      {/* Job Meta Info with Deadline Indicator */}
      <section className="job-meta">
        <span>
          <span className="deadline-indicator"></span>
          Posted: {formatDate(props.postedDate)}
        </span>
        <span>Apply by: {formatDate(props.applicationDeadline)}</span>
      </section>
    </div>
  );
}
