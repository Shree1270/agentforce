import { Button } from "../components/Button"


const navLinks = [
    {
        name : "Features",
        href : "#features"
    },
    {
        name : "Product",
        href : "#product"
    },
    {
        name : "Socials",
        href : "#social"
    },
    {
        name : "Pricing",
        href : "#pricing"
    },
]

export const Header = () => {
  return (
    <header className="border-b border-gray-400/20 shadow-sm ">
        <div className="container flex justify-between items-center ">
            
                <div>Agentforce</div>
                <nav className="flex items-center gap-6">
                {navLinks.map(({name, href})=>(
                   <a href={href} key={name} className="text-netural-600">
                    {name}
                   </a> 
                ))}
                </nav>

                <div className="flex gap-4">
                <Button variant="primary" className="text-netural-600">Log In</Button>
                <Button variant="secondary" className="text-[#ffffff]">Sign Up</Button>
                </div>
        </div>
    </header>
  )
}
