import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ROICalculator } from "@/components/roi-calculator"
import { ProcessTimeline } from "@/components/process-timeline"
import { CaseStudies } from "@/components/case-studies"
import { CompanyCredibility } from "@/components/company-credibility"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ROICalculator />
        <ProcessTimeline />
        <CaseStudies />
        <CompanyCredibility />
      </main>
      <Footer />
    </div>
  )
}
