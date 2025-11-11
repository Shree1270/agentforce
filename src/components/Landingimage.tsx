import Agentforce from "../assets/4.webp"
import Agentforce2 from "../assets/4.webp"
import { motion } from "motion/react"

export const Landingimage = () => {
  return (
    <div className="relative min-h-140 w-full pt-20">
      <motion.div className="prespective-[4000px] transform-3d"
      initial = {{
        opacity : 0,
        y : -100
      }}
      animate = {{
        opacity : 1,
        y : 0
      }}
      transition={{
        duration : 0.5,
        ease : "easeOut"
      }}
      >
        <img src={Agentforce} 
        alt="agentforce" 
        width={1080}
        height={1920}
        className="absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-10% shadow-2xl"
        style={{
          transform : "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
        }}
        />
      
      </motion.div>

      <motion.div className="prespective-[4000px] translate-x-20 -translate-y-40"
      initial = {{
        opacity : 0,
        y : -400
      }}
      animate = {{
        opacity : 1,
        y : 50
      }}
      transition={{
        duration : 0.5,
        ease : "easeOut",
        delay : 0.1
      }}
      >
        <img src={Agentforce2} 
        alt="agentforce" 
        width={1080}
        height={1920}
        className="absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl"
        style={{
          transform : "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
        }}
        />
      </motion.div>
    </div>
  )
}
