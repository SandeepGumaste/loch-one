import React,{useState,useRef,useEffect} from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonialsData=[
  {
    name:"Jack F",
    designation:"Ex Blackrock PM",
    review: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name:"Yash P",
    designation:"Research, 3poch Crypto Hedge Fund",
    review: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",

  },
  {
    name:"Shiv S",
    designation:"Co-Founder Magik Labs",
    review: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    

  }
]

const TestimonialCards=()=>{
return testimonialsData.map((data,index)=>{
  const {name,designation,review} = data
  return (
    <motion.div key={name+index} className="item">
      <TestimonialCard  name={name} designation={designation} review={review}/>
    </motion.div>
  )
})
}

const TestimonialsLayout:React.FC<{testimonialsContainer:React.RefObject<HTMLDivElement>
}> = ({testimonialsContainer}) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement|null>(null)

  useEffect(() => {
    if(carousel.current && testimonialsContainer.current){
      setWidth(carousel.current?.scrollWidth - testimonialsContainer.current?.offsetWidth)
    }

  }, [testimonialsContainer])
  
  return (
    <div className="w-[calc(100% - 80px)] overflow-visible">

      <motion.div ref={carousel}
        className="hidden md:flex flex-col md:flex-row gap-4 items-start justify-between min-w-max h-36 backdrop-blur-[2px] cursor-grab overflow-visible"
      >
        <motion.div drag="x" dragConstraints={{right:0, left:-width}} className="flex gap-4">
          <TestimonialCards/>
        </motion.div>
      </motion.div>
      
      <div className="flex md:hidden flex-col gap-4 pt-10">
        <TestimonialCards/>
      </div>
    </div>
  );
};

export default TestimonialsLayout;
