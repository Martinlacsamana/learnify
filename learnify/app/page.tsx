import Image from "next/image";
import { BookOpenCheck, Video, Brain, Flashlight, Compass, BadgeCheck } from "lucide-react";
import BrainAnimation from "@/components/landing/BrainAnimation";
import FeatureSummary from "@/components/landing/FeatureSummary";
import Feature from "@/components/landing/Feature";
import FAQs from "@/components/landing/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-black">

      {/* SECTION 1 */}
      <div className="mb-[5%]">
        {/* HEADER */}
        <div className="flex flex-col w-full justify-center items-center mt-[8%] space-y-8">
          <h1 className="text-center font-bold text-7xl text-white">
            Master any subject <br></br>
            with <span className="text-custom-purple">Learnify</span>
          </h1>
          <p className="w-2/3 text-xl text-center text-gray-300">
            The ultimate learning platform that adapts to your syle. Brain dump
            your thoughts, create interactive flashcards, and explore new concepts.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center items-center gap-4">
            <button className="flex space-x-2 bg-custom-purple px-5 py-2.5 rounded-md font-semibold hover:bg-custom-purple/80 cursor-pointer">
              <BookOpenCheck />
              <p>Start learning now </p>
            </button>
            
            <button className="flex space-x-2 bg-custom-gray hover:bg-custom-gray/80 px-5 py-2.5 rounded-md font-semibold cursor-pointer">
              <Video />
              <p>Watch demo</p>
            </button>
          </div>
        </div>

        {/* GRAPHIC */}
        <div className="flex w-4/5 mx-auto border border-semi-gray rounded-md min-h-[250px] mt-[6%]">
          {/* BULLET POINTS */}
          <div className="flex flex-col justify-center space-y-6 w-full px-6 py-2 bg-zinc-800 float-left bg-gradient-to-br from-zinc-900/50 via-zinc-900 to-zinc-900/8">
            <p className="text-white font-semibold text-lg"> <span className="text-custom-purple font-bold text-xl">1.</span> Brainrot on your own terms.</p>
            <p className="text-white font-semibold text-lg"> <span className="text-custom-purple font-bold text-xl">2.</span> Actively Learn concepts.</p>
            <p className="text-white font-semibold text-lg"> <span className="text-custom-purple font-bold text-xl">3.</span> Explore educational fields.</p>
          </div>

          {/* Brain animation */}
          <div className="w-full px-4 py-8 bg-gradient-to-tr from-zinc-950/80 via-zinc-950 to-custom-teal/20">
               <BrainAnimation/>

          </div>
        </div>

      </div>
        
      {/* SECTION 2 */}
      <div className="w-full bg-zinc-950 pb-[5%]">
        <div className="w-4/5 flex flex-col mx-auto text-center mt-[5%]">
          {/* HEADER */}
          <div className="flex flex-col space-y-4 ">
            <h1 className="text-4xl font-bold">Three powerful ways to learn</h1>
            <p className="text-lg text-gray-300">Learnify combines multiple learning approaches to help your master any subject efficiently.</p>
          </div>

          {/* FEATURE SUMMARIES */}
          <div className="grid grid-cols-3 mt-[4%] mb-[10%] gap-6">
            <FeatureSummary 
              icon={Brain} 
              color="purple" 
              feature="Brain Dump" 
              summary="Quickly capture your thoughts and ideas in a structured format. Our AI helps organize and connect related concepts"
            />
            <FeatureSummary 
              icon={Flashlight} 
              color="teal" 
              feature="Brain Dump" 
              summary="Quickly capture your thoughts and ideas in a structured format. Our AI helps organize and connect related concepts"
            />
            <FeatureSummary 
              icon={Compass} 
              color="purple" 
              feature="Brain Dump" 
              summary="Quickly capture your thoughts and ideas in a structured format. Our AI helps organize and connect related concepts"
            />
          </div>

          {/* FEATURE IN-DEPTHS */}
          <div className="flex flex-col w-full gap-16">
            <Feature 
              feature="Brain Dump" 
              description="Capture your thoughts in a structured way. Our AI-powered system helps you organize and connect related concepts, making it easier to understand complex topics"
              items={["Quick note-taking", "AI-powered organization", "Concept mapping", "Searchable knowledge base"]}
              reverse={false}
              color="purple"
            />
            <Feature 
              feature="Brain Dump" 
              description="Capture your thoughts in a structured way. Our AI-powered system helps you organize and connect related concepts, making it easier to understand complex topics"
              items={["Quick note-taking", "AI-powered organization", "Concept mapping", "Searchable knowledge base"]}
              reverse={true}
              color="teal"
            />
            <Feature 
              feature="Brain Dump" 
              description="Capture your thoughts in a structured way. Our AI-powered system helps you organize and connect related concepts, making it easier to understand complex topics"
              items={["Quick note-taking", "AI-powered organization", "Concept mapping", "Searchable knowledge base"]}
              reverse={false}
              color="purple"
            />

          </div>

          
        </div>

      </div>
      

      {/* SECTION 3 */}
      <div className="w-4/5 flex flex-col text-center mt-[5%]">
        <FAQs/>
      </div>
        
      

      <div className="w-4/5 flex flex-col mt-[4%]">
        <Footer/>

      </div>
      

    </div>
  );
}
