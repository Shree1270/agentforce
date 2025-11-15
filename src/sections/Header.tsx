import { IconLayoutSidebar, IconX } from "@tabler/icons-react"
import { Button } from "../components/Button"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const navLinks = [
    {
        name: "Features",
        href: "#features"
    },
    {
        name: "Product",
        href: "#product"
    },
    {
        name: "Socials",
        href: "#social"
    },
    {
        name: "Pricing",
        href: "#pricing"
    },
]

export const Header = () => {
    return (
        <header className="border-b border-gray-400/20 shadow-sm ">
            <DesktpNavbar />
            <MobileMenu />
        </header>
    )
}

export const MobileMenu = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className=" flex md:hidden px-4 py-2 relative justify-between">
            <div className="flex gap-2">
                <img src="src/assets/Logo.svg" alt="logo" />
                <div>Agentforce</div>
            </div>
            <button
                onClick={() => setOpen(!open)}
            >
                <IconLayoutSidebar className="size-6" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            backdropFilter: "blur(15px)"
                        }}
                        exit={{
                            opacity: 0,
                            backdropFilter: "blur(0px)"
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className="fixed inset-0 h-full w-full z-50 px-4 py-2">
                        <div className="flex gap-2">
                            <img src="src/assets/Logo.svg" alt="logo" />
                            <div>Agentforce</div>
                        </div>
                        <button className="absolute top-2 right-10"
                            onClick={() => setOpen(false)}
                        >
                            <IconX />
                        </button>

                        <div className="flex flex-col gap-6 my-10">
                            {navLinks.map(({ name, href }, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -4 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0
                                    }}
                                    transition={{
                                        duration: 0.1,
                                        delay: index * 0.1
                                    }}
                                    key={href + name}>
                                    <a href={href} key={name} className="text-2xl text-netural-600">
                                        {name}
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <Button variant="primary"  className="text-netural-600">Log In</Button>
                            <Button variant="secondary" className="text-[#ffffff]">Sign Up</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const DesktpNavbar = () => {
    return (
        <div className="container justify-between items-center hidden lg:flex">
            <div className="flex gap-2">
                <img src="src/assets/Logo.svg" alt="logo" />
                <div>Agentforce</div>
            </div>
            <nav className="flex items-center gap-6">
                {navLinks.map(({ name, href }) => (
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
    )
}