import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campus Layout & Infrastructure Plan | Durga Dulari Textile Skill Development Institute',
  description:
    'Complete campus layout, space allocation, infrastructure specifications, and room-by-room design for the Durga Dulari Textile Skill Development Institute — Centre of Excellence for Spinning, Maintenance & Automation.',
};

export default function SchoolServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
