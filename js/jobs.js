/* ==========================================================
   CAREERS: edit this file to add, change or remove job openings.
   The Careers page reads it automatically. No other file needs to change.
   ========================================================== */

/* The "Apply now" button opens an email to this address. Change it to the HR email. */
window.HR_EMAIL = 'careers@alameeri.com';

/* One block per job. To close a job set active: false (or delete the block).
   Jobs marked (sample) are examples: replace or delete them before publishing.
   Optional fields (location, type, careerLevel, deadline, lists) can be left empty and are then hidden. */
window.JOBS = [
  {
    id: 'AAG-001',                        // reference shown to candidates (must be unique)
    active: true,
    title: 'Sales Executive (sample)',
    company: 'Seas & Deserts',            // which company is hiring
    department: 'Sales',
    location: 'Al Rai, Kuwait',
    type: 'Full-time',
    experience: '2 to 4 years',
    careerLevel: 'Mid level',      // optional
    deadline: '2026-12-15',        // optional, YYYY-MM-DD
    posted: '2026-11-10',                 // YYYY-MM-DD
    description: 'Sample text. Replace this with a short summary of the role, the team and what success looks like.',
    responsibilities: [
      'Meet and advise walk-in and corporate customers',
      'Prepare quotations and follow up on enquiries',
      'Reach monthly sales targets'
    ],
    qualifications: [
      "Bachelor's degree in business or a related field"
    ],
    skills: [
      'Fluent English and Arabic',
      'Valid Kuwait driving licence',
      'Customer-focused and well presented'
    ],
    benefits: [
      'Sample benefit: replace or delete this list'
    ]
  },
  {
    id: 'AAG-002',
    active: true,
    title: 'Marine Technician (sample)',
    company: 'Marine Yard',
    department: 'Technical',
    location: 'Salmiya, Kuwait',
    type: 'Full-time',
    experience: '3+ years',
    posted: '2026-11-08',
    description: 'Sample text. Replace this with the real role description.',
    responsibilities: [
      'Carry out maintenance and repairs on yachts and boats',
      'Keep job records and report to the workshop supervisor'
    ],
    qualifications: [
      'Technical diploma in marine or mechanical engineering'
    ],
    skills: [
      'Hands-on experience with outboard and inboard engines',
      'Able to work shifts'
    ],
    benefits: []
  },
  {
    id: 'AAG-003',
    active: true,
    title: 'Accountant (sample)',
    company: 'Al Ameeri Group Holding',
    department: 'Finance',
    location: 'Al Rai, Kuwait',
    type: 'Full-time',
    experience: '3 to 5 years',
    posted: '2026-11-05',
    description: 'Sample text. Replace this with the real role description.',
    responsibilities: [
      'Maintain accounts payable and receivable',
      'Prepare monthly reports and reconciliations'
    ],
    qualifications: [
      "Bachelor's degree in accounting or finance"
    ],
    skills: [
      'Strong Excel skills',
      'Experience with accounting software'
    ],
    benefits: []
  }
];
