import { Navbar } from "../components/Navbar";
// import { Intro } from "../components/HeroSection";

export const LandingPage=()=>{
    return <>
        <div className="w-full">
        <div className="w-full h-16">
            <Navbar />
        </div>

        <div className="w-full h-[calc(100vh-4rem)] border-2 rounded-xl">
            {/* <Intro /> */}
        </div>
        </div>
    
    
    
    
    </>
}