// @ts-nocheck

export const metadata = {
  title: "MatchWorks – Precision Job Matching Platform",
  description:
    "MatchWorks is a modern job-matching platform that uses a science-backed assessment to connect candidates with roles that fit their strengths, personality, and career goals. Take the assessment, view tailored career paths, and match with employers who are hiring for your profile.",
  openGraph: {
    title: "MatchWorks – Precision Job Matching Platform",
    description:
      "Discover careers that truly fit you. MatchWorks analyzes your strengths, interests, and work style to match you with roles and environments where you can actually thrive.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

