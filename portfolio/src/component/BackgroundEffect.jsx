
import { useState , useEffect} from 'react';

const BackgroundEffect = () => {

    const [stars,setStars] = useState([])
    const [meteor,setMeteors] = useState([])




     useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleresize = () => {
            generateStars();  
        }
        window.addEventListener('resize',handleresize)
        return () => {
            window.removeEventListener('resize',handleresize)
        }

     },[])  

    const generateStars = ()=>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight )/ 8000;
  
const newStars  = [];
for(let i=0;i< numberOfStars ;i++){

    newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 4 + 2,
    })
    } 
    setStars(newStars) 
}

    const generateMeteors = ()=>{
        const numberOfMeteors = 4

        const newMeteors  = [];
        for(let i=0;i< numberOfMeteors ;i++){

    newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        //delay: Math.random() ,
        duration: Math.random() * 3+3,
    })
    } 
    setMeteors(newMeteors) 
}
  return (

    <div className='fixed inset-0  overflow-hidden pointer-events-none z-0 '>
{stars.map((star)=>(
<div key = {star.id } className="star animation-pulse-subtle"
style={{
    width: star.size + "px",
    height: star.size + "px",
    left: star.x + "%",
    top: star.y + "%",
    opacity: star.opacity,
    animationDuration: star.duration + "s"
}}/>
))}

{meteor.map((meteor)=>(
<div key = {meteor.id } 
className="meteor animate-meteor"
style={{
    width: meteor.size *50+ "px",
    height: meteor.size * 3+ "px",
    left: meteor.x + "%",
    top: meteor.y + "%",
    animationDelay: meteor.delay + "s",
    animationDuration: meteor.duration + "s"
}}
/>
))}
    </div>
  )
}

export default BackgroundEffect