import bannerImage from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* Text */}
        <div className="text-center lg:text-left">

          <h1 className="text-4xl font-extrabold leading-tight text-[#101828] sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-[#EB388C] to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-[#EB388C] px-6 py-3 font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-slate-200 px-6 py-3 text-slate-600">
              Learn More
            </button>

          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[430px]"
          />
        </div>

      </div>
    </section>
  )
}

export default Banner