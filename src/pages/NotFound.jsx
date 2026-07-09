import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-8 text-center">
      <p className="font-display text-[28vw] leading-none text-outline">404</p>
      <p className="mt-6 text-xs uppercase tracking-widest-xl text-taupe">
        This page could not be found.
      </p>
      <Link
        to="/"
        className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl text-sage"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-500 ease-fluid group-hover:-translate-x-1"
        />
        Back Home
      </Link>
    </div>
  );
}
