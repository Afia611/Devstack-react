import bannerImage from '../assets/banner-stack.png'

const Banner = () => {
  return (
 <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

    {/* Left side */}
    <div>
    {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#111827] md:text-6xl">Build Your Ideal
            <br />
        <span className="
        bg-gradient-to-r
         from-[#ff5a1f]
         via-[#eb388c]
         to-[#9333ea] 
         bg-clip-text text-transparent">
            Development Stack
        </span>
        </h1>

    {/* Description */}
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600"> Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project. </p>
    
    {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">

            <button className="
                rounded-lg
                bg-gradient-to-r
                from-[#ff6a1a]
                via-[#f04479]
                to-[#e73894]
                px-5
                py-3
                font-semibold
                text-white
                shadow-sm
                transition
                hover:opacity-90"
            >
              Explore Technologies
            </button>

            <button className="
                rounded-lg
                border
                border-slate-200
                bg-white
                px-8
                py-3
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50"
            >
              Learn More
            </button>

          </div>
        </div>

    {/* Right side */}
        <div className="flex items-center justify-center lg:justify-end">
          <img src={bannerImage} alt="Development technology stack" className="w-full max-w-420px object-contain" />
        </div>
      </div>
    </section>
  )
}


export default Banner;