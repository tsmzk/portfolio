import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}
