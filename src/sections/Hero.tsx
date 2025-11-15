import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Landingimage } from "../components/Landingimage"
import { Subheading } from "../components/Subheading"



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
            <Button variant="secondary" className="text-[#ffffff] shadow-brand ">Start your free trial</Button>
            <Button variant="primary" >View role based demos</Button>
            </div>

            <Landingimage></Landingimage>
        </div>
    </section>
  )
}
