import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import Agentforce from "../assets/4.webp"


export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32">
        <div className="container">
            <Heading as="h1">
                Agents that do the work <br/> Approvals that keep you safe.
            </Heading>

            <Subheading className="py-8">
                Deploy AI agent that plan, act through your tools, and report outcome-without changinh how your team works.
            </Subheading>

            <div className="flex items-center gap-4">
            <Button variant="secondary" className="text-[#ffffff] shadow-brand">Start your free trial</Button>
            <Button variant="primary" >View role based demos</Button>
            </div>

            <div className="relative min-h-140 w-full pt-8">
                <img src={Agentforce} alt="agentforce" className="absolute inset-0 mask-r-from-50% mask-b-from-50%"/>
            </div>
        </div>
    </section>
  )
}
