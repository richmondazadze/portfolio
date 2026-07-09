import Reveal from './Reveal';
import { capabilities } from '../data/site';

/**
 * 12-column capabilities section. Left column: labelled list with a line prefix
 * that extends on hover. Right column: large light heading with italic accents.
 * `variant` switches between the light-gray and navy palettes.
 */
export default function Capabilities({ variant = 'light' }) {
  const dark = variant === 'dark';
  const bg = dark ? 'bg-navy' : 'bg-[#fafafa]';
  const heading = dark ? 'text-white' : 'text-navy';
  const line = dark ? 'bg-sage' : 'bg-navy';
  const listText = dark ? 'text-sage' : 'text-navy';

  return (
    <section className={`${bg} px-8 py-28 md:px-12 md:py-40`}>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Columns 1-4: list */}
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-xs uppercase tracking-widest-xl text-taupe">
              Capabilities
            </span>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {capabilities.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`group flex items-center gap-4 text-lg ${listText}`}
              >
                <span
                  className={`h-px w-10 ${line} transition-all duration-500 ease-fluid group-hover:w-16`}
                />
                {item}
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Columns 5-12: heading */}
        <div className="lg:col-span-8">
          <Reveal>
            <h2
              className={`font-sans text-3xl font-light leading-tight ${heading} sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              I help ambitious teams build{' '}
              <em className="italic text-taupe">intelligent</em> digital products
              that balance <em className="italic text-taupe">craft</em> with
              measurable outcomes.
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
