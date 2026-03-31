"use client";

import React, { useState } from "react";
import { formatCurrency, formatDate } from "../../utils/helper";
import { Card } from "../atoms/Card";
import { Badge } from "../atoms/Badge";
import { Tag } from "../atoms/Tag";
import { Section } from "../atoms/Section";
import { Button } from "../atoms/Button";
import { CompanyLogo } from "../atoms/CompanyLogo";

interface Company {
  name: string;
  logo: string;
  rating: number;
  location: {
    city: string;
    country: string;
  };
}

interface Experience {
  level: "Junior" | "Mid-Level" | "Senior";
}

interface Salary {
  min: number;
  max: number;
}

interface ApplicationStatus {
  remainingSpots: number;
  totalSpots: number;
}

interface JobCardProps {
  position: string;
  company: Company;
  experience: Experience;
  remote: boolean;
  salary: Salary;
  skills: string[];
  description: string;
  responsibilities: string[];
  benefits: string[];
  applicationStatus?: ApplicationStatus;
  postedDate: string;
  applicationDeadline: string;
  isUrgentHiring: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({
  position,
  company,
  experience,
  remote,
  salary,
  skills,
  description,
  responsibilities,
  benefits,
  applicationStatus,
  postedDate,
  applicationDeadline,
  isUrgentHiring,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const getExperienceVariant = (
    level: Experience["level"]
  ): "danger" | "warning" | "success" | "primary" => {
    switch (level) {
      case "Senior":
        return "danger";
      case "Mid-Level":
        return "warning";
      case "Junior":
        return "success";
      default:
        return "primary";
    }
  };

  const getDeadlineVariant = (
    deadline: string
  ): "danger" | "warning" | "success" => {
    const daysUntilDeadline = Math.ceil(
      (new Date(deadline).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    );
    if (daysUntilDeadline <= 3) return "danger";
    if (daysUntilDeadline <= 7) return "warning";
    return "success";
  };

  return (
    <Card className="job-card">
      {isUrgentHiring && (
        <Badge text="Urgent Hiring" variant="danger" className="mb-4" />
      )}

      <CompanyLogo
        src={company.logo}
        alt={`${company.name} logo`}
        name={company.name}
        rating={company.rating}
        className="mb-4"
      />

      <Section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{position}</h2>
          <Badge
            text={`${experience.level} Level`}
            variant={getExperienceVariant(experience.level)}
          />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-600">
            {company.location.city}, {company.location.country}
          </span>
          {remote && <Badge text="Remote" variant="info" />}
        </div>
      </Section>

      {applicationStatus && (
        <Section>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-600">
              {applicationStatus.remainingSpots} spots remaining
            </span>
            <span className="text-gray-600">
              {applicationStatus.totalSpots} applicants
            </span>
          </div>
        </Section>
      )}

      <Section>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Salary Range</div>
          <div className="text-lg font-semibold text-gray-900">
            {formatCurrency(salary.min)} - {formatCurrency(salary.max)}/year
          </div>
        </div>
      </Section>

      <Section title="Required Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Tag key={i} text={skill} />
          ))}
        </div>
      </Section>

      <Section>
        <p className="text-gray-600">{description}</p>
      </Section>

      <Section title="Key Responsibilities">
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {responsibilities.map((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </ul>
      </Section>

      <Section title="Benefits">
        <div className="flex flex-wrap gap-2">
          {benefits.map((benefit, i) => (
            <Tag key={i} text={benefit} />
          ))}
        </div>
      </Section>

      <div className="flex gap-4 mt-6">
        <Button
          variant={isSaved ? "secondary" : "outline"}
          onClick={() => setIsSaved(!isSaved)}
        >
          {isSaved ? "Saved" : "Save Job"}
        </Button>
        <Button href="#" variant="primary">
          Apply Now
        </Button>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mt-6">
        <div className="flex items-center gap-2">
          <Badge
            text="Posted"
            variant={getDeadlineVariant(postedDate)}
            className="text-xs"
          />
          <span>{formatDate(postedDate)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            text="Apply by"
            variant={getDeadlineVariant(applicationDeadline)}
            className="text-xs"
          />
          <span>{formatDate(applicationDeadline)}</span>
        </div>
      </div>
    </Card>
  );
};
