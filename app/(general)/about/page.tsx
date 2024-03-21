import type {Metadata} from "next"

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ["aboutpage", "about", "page"]
};


export default function AboutPage() {
  return (
    <>
      <span className='text-7xl'>AboutPage</span>
    </>
  )
}
