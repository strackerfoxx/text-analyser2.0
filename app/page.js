"use client"
import Link from "next/link"

export default function Home() {
  return (
    <>
        <main>
          <section id="section-1">
            <h1 className="text-pop-up-top">
              Text Analyser
            </h1>
            <div >
              <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/feelings `} className="icon">😀</Link>
              <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/summary`} className="icon">📄</Link>
              <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/scan`} className="icon">🖨️</Link>
            </div>
            <a href="#section-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </section>

          <section id="section-2">
            <img src="https://cdn.leonardo.ai/users/b409b65d-045e-428d-9c53-1157e2d9ebe1/generations/625ca4c1-5871-47dc-9d25-3b3fc35890c0/variations/Default_logo_moderno_tech_code_letter_T_high_quality_8k_high_r_3_625ca4c1-5871-47dc-9d25-3b3fc35890c0_0.png" alt="logo" />
            <h2>Introducing Text Analyser</h2>
            <p> Power your text analysis with our advanced online tool. Detect emotions, summarize long texts instantly. Simplify understanding of content and comments.</p>
            <p>You can also scan and extract text from files for quick analysis. Experience the efficiency of text analysis with our innovative platform today!</p>
          </section>

          <section id="section-3">
            <div id="card-container">
              <div className="card">
                <h3 className="icon">😀</h3>
                <p>analyze feels</p>
                <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/feelings`} className="btn">Analyze Text</Link>
              </div>
              <div className="card">
                <h3 className="icon">📄</h3>
                <p>summarizes text</p>
                <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/summary`} className="btn">Analyze Text</Link>
              </div>
              <div className="card">
                <h3 className="icon">🖨️</h3>
                <p>scan text</p>
                <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/scan`} className="btn">Analyze Text</Link>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}