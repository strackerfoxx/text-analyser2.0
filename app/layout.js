import './index.css'
import './spinner.css'
import './text-animations.css'
import Link from 'next/link'

export const metadata = {
  title: 'Text Analyser',
  description: 'Power your text analysis with our advanced online tool. Detect emotions, summarize long texts instantly. Simplify understanding of content and comments. You can also scan and extract text from files for quick analysis. Experience the efficiency of text analysis with our innovative platform today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <aside>
            <Link href={process.env.NEXT_PUBLIC_PAGE_URL}><img src="https://cdn.leonardo.ai/users/b409b65d-045e-428d-9c53-1157e2d9ebe1/generations/625ca4c1-5871-47dc-9d25-3b3fc35890c0/variations/Default_logo_moderno_tech_code_letter_T_high_quality_8k_high_r_3_625ca4c1-5871-47dc-9d25-3b3fc35890c0_0.png" alt="logo" /></Link>
            <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/feelings`} className="icon">😀 <span> analyze feels</span></Link>
            <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/summary`} className="icon">📄 <span>summarizes text</span></Link>
            <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/mode/scan`} className="icon">🖨️ <span>scan text</span></Link>
          </aside>
          {children}
        </div>
        
      </body>
    </html>
  )
}
