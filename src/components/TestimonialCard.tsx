
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  className,
}) => {
  return (
    <div className={cn("bg-white p-6 rounded-2xl shadow-md flex flex-col", className)}>
      <div className="mb-4">
        {/* Quote Icon */}
        <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8v6a6 6 0 01-6 6H4v4h4a10 10 0 0010-10V8h-8zm18 0v6a6 6 0 01-6 6h-2v4h4a10 10 0 0010-10V8h-6z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
