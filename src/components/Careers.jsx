import { useState } from 'react';
import Section from "./Section.jsx";
import ApplyModal from "./ApplyModal.jsx";

const jobs = [
  { title: "Senior React Developer", type: "Full-time", location: "Remote / Salem" },
  { title: "Full Stack Engineer (Node.js)", type: "Full-time", location: "Chennai / Hybrid" },
  { title: "UI/UX Designer", type: "Contract", location: "Remote" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote / Salem" },
];

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      <Section id="careers" title="Join Our Team">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 md:mt-2">Why work with us?</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Remote-first culture with flexible working hours.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Regular skill-building workshops and certifications.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Competitive health insurance and wellness benefits.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Opportunity to work on global projects with cutting-edge tech.
              </li>
            </ul>
            <p className="mt-10 text-neutral-700 font-semibold italic">
              Don't see a role? Send your resume anyway to <br />
              <span className="text-yellow-400">careers@pandiyan.dev</span>
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-neutral-100 border border-neutral-200 hover:border-yellow-400/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-xl font-bold text-neutral-900 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">{job.title}</h4>
                  <div className="flex gap-4 mt-2 text-sm text-neutral-500">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="px-6 py-2 bg-neutral-200 hover:bg-yellow-400 hover:text-black text-neutral-900 rounded-full font-bold text-sm transition-all border border-neutral-300 hover:border-yellow-400"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob}
      />
    </>
  );
}


