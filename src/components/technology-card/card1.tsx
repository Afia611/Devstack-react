import { use } from 'react'
import type { Technology } from '../../types/technology'

interface Card1Props {
  technologyPromise: Promise<Technology[]>
}

const Card1 = ({ technologyPromise }: Card1Props) => {
  const technologies = use(technologyPromise)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-[#101828]">
            Explore the{' '}
            <span className="bg-gradient-to-r from-[#EB388C] to-[#B53CDC] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon + Badge */}
              <div className="flex items-center justify-between">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />

                <span className="rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-xs font-medium text-[#EB388C]">
                  {technology.badge}
                </span>
              </div>

              {/* Technology Name */}
              <h3 className="mt-5 text-lg font-bold text-[#101828]">
                {technology.name}
              </h3>

              {/* Description */}
              <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                {technology.description}
              </p>

              {/* Bottom Section */}
              <div className="mt-auto border-t border-slate-100 pt-4">

                {/* Category + Difficulty + Rating */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                    {technology.category}
                  </span>

                  <span className="text-slate-500">
                    {technology.difficulty}
                  </span>

                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <span className="text-yellow-400">★</span>
                    {technology.rating}
                  </span>
                </div>

                {/* Add to Stack Button */}
                <button className="mt-4 w-full rounded-lg bg-[#07101F] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#172033]">
                  Add to Stack
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Card1