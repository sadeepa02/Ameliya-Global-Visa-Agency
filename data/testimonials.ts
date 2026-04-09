// ─── testimonials.ts ──────────────────────────────────────────────────────────
// Central data store for all testimonials shown on the website.
// Add, remove, or edit entries here — the UI picks up changes automatically.

export interface Testimonial {
  id: number;
  name: string;
  university: string;         // University the student attends in Russia
  course: string;             // Field / degree
  location: string;           // City in Russia
  year: string;               // "2nd Year", "Final Year", etc.
  avatar: string;             // Unsplash URL or local path
  rating: number;             // 1 – 5
  text: string;               // The review body
  tag: string;                // Short badge, e.g. "Medicine", "Engineering"
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kavindu Perera",
    university: "Yakovlev Chuvash State Pedagogical University",
    course: "MBBS (Medicine)",
    location: "Russia",
    year: "3rd Year",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Amelia Global made my dream of studying medicine in Russia a reality. They handled every document, guided me through the visa process step by step, and even helped me find a great dormitory before I arrived. I genuinely could not have done this without their team.",
    tag: "Medicine",
  },
  {
    id: 2,
    name: "Dilhani Jayawardena",
    university: "Yakovlev Chuvash State Pedagogical University",
    course: "Engineering",
    location: "Moscow",
    year: "2nd Year",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The pre-departure orientation was incredibly helpful. I knew exactly what clothes to pack for the Russian winter, how to use the metro, and what to expect on campus. The support didn't stop at the airport — they check in with me regularly even now.",
    tag: "Engineering",
  },
  {
    id: 3,
    name: "Tharindu Silva",
    university: "Samara National Research University",
    course: "Computer Science",
    location: "Samara City",
    year: "Final Year",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "I was nervous about studying so far from home, but Amelia Global connected me with Sri Lankan students already in St. Petersburg before I even left Colombo. Their community network is something no other agency offers. Truly a 10/10 experience.",
    tag: "Computer Science",
  },
  {
    id: 4,
    name: "Nimesha Fernando",
    university: "Samara National Research University",
    course: "Dentistry",
    location: "Samara City",
    year: "1st Year",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Getting my documents attested and translated was something I was really worried about. The team at Amelia handled everything precisely and on time. My admission letter arrived weeks before the deadline. Stress-free from start to finish.",
    tag: "Dentistry",
  },
  {
    id: 5,
    name: "Ashen Rajapaksa",
    university: "Ural Federal University",
    course: "Petroleum Engineering",
    location: "Yekaterinburg",
    year: "2nd Year",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "The university selection process was thorough. They asked about my grades, my budget, and what field I wanted. Within a week I had three universities shortlisted with pros and cons for each. I felt informed, not pressured. Highly recommend.",
    tag: "Engineering",
  },
  {
    id: 6,
    name: "Sachini Bandara",
    university: "Yaroslavl State Technical University",
    course: "Pharmacy",
    location: "Yaroslavl",
    year: "3rd Year",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "My parents were hesitant about me going to Russia alone. Amelia Global arranged a call with them, explained every detail of the process, and put their minds at ease. That kind of personal care is rare. My family trusts them completely now.",
    tag: "Pharmacy",
  },
];

// ─── Helper: tag colour mapping ───────────────────────────────────────────────
export const tagColors: Record<string, { bg: string; text: string }> = {
  Medicine:         { bg: "rgba(34,211,238,0.15)", text: "#22D3EE" },
  Engineering:      { bg: "rgba(251,191,36,0.15)",  text: "#FBD024" },
  "Computer Science": { bg: "rgba(167,139,250,0.15)", text: "#A78BFA" },
  Dentistry:        { bg: "rgba(52,211,153,0.15)",  text: "#34D399" },
  Pharmacy:         { bg: "rgba(251,113,133,0.15)", text: "#FB7185" },
};