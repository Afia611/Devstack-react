import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Nav from './components/Nav'
import Banner from './components/banner'
import Card1 from './components/technology-card/card1'
import Footer from './components/footer'

const technologyFetch = async () => {
  const res = await fetch('/data.json')

  if (!res.ok) {
    throw new Error('Failed to fetch technologies')
  }

  return res.json()
}

const technologyPromise = technologyFetch()

function Loading() {
  return (
    <div className="flex min-h-50 items-center justify-center">
      <div className="flex flex-col items-center gap-3">

        <div className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-[#EB388C]" />

        <p className="text-sm text-slate-500">
          Loading technologies...
        </p>

      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<Loading />}>
        <Card1 technologyPromise={technologyPromise} />
      </Suspense>

      <Footer />

      {/* React Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App