import { use, useState } from 'react'
import { toast } from 'react-toastify'
import type { Technology } from '../../types/technology'

interface Card1Props {
  technologyPromise: Promise<Technology[]>
}

const Card1 = ({ technologyPromise }: Card1Props) => {
  const technologies = use(technologyPromise)

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([])

  // Add Technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ])

    toast.success(`${technology.name} added to your stack!`)
  }

  // Remove Single Technology
  const handleRemove = (id: number) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    )

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    )

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`)
    }
  }

  // Remove All Technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return
    }

    setSelectedTechnologies([])

    toast.info('All technologies removed from your stack.')
  }

  return (
    <section
      id="technologies"
      className="scroll-mt-20 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl font-extrabold text-[#101828] sm:text-3xl lg:text-4xl">
            Explore the{' '}
            <span className="brand-gradient-text">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px]">

          {/* LEFT SIDE - Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id
              )

              return (
                <div
                  key={technology.id}
                  className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5"
                >

                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-10 w-10 shrink-0 object-contain"
                    />

                    <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Technology Name */}
                  <h3 className="mt-5 text-lg font-bold text-[#101828] sm:text-xl">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-500 sm:min-h-[72px]">
                    {technology.description}
                  </p>

                  {/* Card Bottom */}
                  <div className="mt-auto border-t border-slate-100 pt-4">

                    {/* Information */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">

                      {/* Category */}
                      <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                        {technology.category}
                      </span>

                      {/* Difficulty */}
                      <span className="text-slate-500">
                        {technology.difficulty}
                      </span>

                      {/* Rating */}
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <span className="text-yellow-400">
                          ★
                        </span>

                        {technology.rating}
                      </span>

                    </div>

                    {/* Add To Stack Button */}
                    <button
                      onClick={() => handleAddToStack(technology)}
                      disabled={isAdded}
                      className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition ${
                        isAdded
                          ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                          : 'brand-gradient text-white hover:opacity-90'
                      }`}
                    >
                      {isAdded
                        ? '✓ Added to Stack'
                        : 'Add to Stack'}
                    </button>

                  </div>
                </div>
              )
            })}

          </div>


          {/* RIGHT SIDE - Your Stack */}
          <aside className="h-fit w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-24">

            {/* Stack Heading */}
            <h3 className="text-xl font-bold text-[#101828]">
              Your Stack
            </h3>

            {/* Selected Count */}
            <p className="mt-1 text-sm text-slate-400">
              {selectedTechnologies.length === 0
                ? 'No technologies selected yet.'
                : `${selectedTechnologies.length} ${
                    selectedTechnologies.length === 1
                      ? 'Technology Selected'
                      : 'Technologies Selected'
                  }`}
            </p>


            {/* Empty Stack */}
            {selectedTechnologies.length === 0 ? (
              <div className="mt-4 flex min-h-[90px] items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 text-center">
                <p className="text-sm text-slate-400">
                  Your stack is empty.
                </p>
              </div>
            ) : (

              /* Stack Items */
              <div className="mt-4 flex flex-col gap-2">

                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
                  >

                    {/* Technology */}
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 shrink-0 object-contain"
                      />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#101828]">
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
                      className="shrink-0 text-xl text-slate-400 transition hover:text-red-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>

                  </div>
                ))}

                {/* Remove All */}
                <button
                  onClick={handleRemoveAll}
                  className="mt-6 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
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