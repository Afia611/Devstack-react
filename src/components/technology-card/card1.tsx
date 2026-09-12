import { use, useState } from 'react'
import type { Technology } from '../../types/technology'

interface Card1Props {
  technologyPromise: Promise<Technology[]>
}

const Card1 = ({ technologyPromise }: Card1Props) => {
  const technologies = use(technologyPromise)

  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`)
      return
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology
    ])
  }

  // Remove single technology
  const handleRemove = (id: number) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    )
  }

  // Remove everything
  const handleRemoveAll = () => {
    setSelectedTechnologies([])
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
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

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">

          {/* LEFT SIDE - Technology Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id
              )

              return (
                <div
                  key={technology.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between">

                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-10 w-10 object-contain"
                    />

                    <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
                      {technology.badge}
                    </span>

                  </div>

                  {/* Name */}
                  <h3 className="mt-5 text-xl font-bold text-[#101828]">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                    {technology.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-auto border-t border-slate-100 pt-4">

                    {/* Info Row */}
                    <div className="flex items-center justify-between gap-2 text-xs">

                      <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                        {technology.category}
                      </span>

                      <span className="text-slate-500">
                        {technology.difficulty}
                      </span>

                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <span className="text-yellow-400">
                          ★
                        </span>

                        {technology.rating}
                      </span>

                    </div>

                    {/* Add Button */}
                    <button
                      onClick={() => handleAddToStack(technology)}
                      disabled={isAdded}
                      className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition
                        ${
                          isAdded
                            ? 'cursor-not-allowed bg-slate-300 text-slate-600'
                            : 'bg-[#07101F] text-white hover:bg-[#172033]'
                        }
                      `}
                    >
                      {isAdded
                        ? '✓ Added to Stack'
                        : 'Add to Stack'
                      }
                    </button>

                  </div>

                </div>
              )
            })}

          </div>


          {/* RIGHT SIDE - Your Stack */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

            {/* Stack Heading */}
            <h3 className="text-xl font-bold text-[#101828]">
              Your Stack
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {selectedTechnologies.length === 0
                ? 'No technologies selected yet.'
                : `${selectedTechnologies.length} ${
                    selectedTechnologies.length === 1
                      ? 'Technology'
                      : 'Technologies'
                  } Selected`
              }
            </p>


            {/* Empty Stack */}
            {selectedTechnologies.length === 0 ? (

              <div className="mt-4 flex min-h-[72px] items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 text-center">
                <p className="text-sm text-slate-400">
                  Your stack is empty.
                </p>
              </div>

            ) : (

              /* Selected Technologies */
              <div className="mt-4 flex flex-col gap-2">

                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5"
                  >

                    {/* Stack Item Left */}
                    <div className="flex items-center gap-3">

                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                      />

                      <div>
                        <p className="text-sm font-semibold text-[#101828]">
                          {technology.name}
                        </p>

                        <p className="text-[10px] text-slate-400">
                          {technology.category}
                        </p>
                      </div>

                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(technology.id)}
                      className="text-2xl font-light text-slate-400 transition hover:text-red-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>

                  </div>
                ))}


                {/* Remove All */}
                <button
                  onClick={handleRemoveAll}
                  className="mt-8 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                  Remove All
                </button>

              </div>

            )}

          </aside>

        </div>

      </div>
    </section>
  )
}

export default Card1