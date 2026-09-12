import { Suspense } from 'react';
import Nav from './components/Nav';
import Banner from './components/banner';
import Card1 from './components/technology-card/card1';
import Footer from './components/footer';

const technologyFetch = async () => {
  const res = await fetch('/data.json')

  if (!res.ok) {
    throw new Error('Failed to fetch technologies')
  }

  const data = await res.json()

  return data
}

const technologyPromise = technologyFetch()

function App() {
  
  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<div className="text-center"> Loading...</div>}>
       <Card1 technologyPromise={technologyPromise} />
      </Suspense>

      <Footer />        
    </>
  )
}

export default App
