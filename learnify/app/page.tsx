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
          <p className="w-3/5 text-xl text-center text-gray-300">
            Whether you're a student, self-learner, or developer, Learnify helps you learn more efficiently by encouraging deep, active engagement with what you're studying.
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
              summary="Freely write out everything you remember about a topic. Our AI helps organize your thoughts and highlight key ideas that serve as the foundation for your learning journey."
            />
            <FeatureSummary 
              icon={Flashlight} 
              color="teal" 
              feature="Interactive Flashcards" 
              summary="Scroll through flashcards like a feed and engage with each one using a built-in AI assistant that helps you dig deeper into topics, with coding practice coming soon."
            />
            <FeatureSummary 
              icon={Compass} 
              color="purple" 
              feature="Mindmap Visualization" 
              summary="Visualize your knowledge in a dynamic, node-based graph. Get a bird's eye view of what you know and what you might be missing, making connections intuitive."
            />
          </div>

          {/* FEATURE IN-DEPTHS */}
          <div className="flex flex-col w-full gap-16">
            <Feature 
              feature="Brain Dump" 
              description="Learning starts with what you know. With our Brain Dump feature, you can freely write out everything you remember about a topic-no pressure, no structure required. From there, our AI helps organize your thoughts and highlight the key ideas."
              items={["Mental whiteboard, evolved", "No structure required", "AI-powered organization", "Foundation for learning"]}
              reverse={false}
              color="purple"
              photo="https://learnify-static-images.s3.us-west-1.amazonaws.com/Learnify-Braindump.png"
            />
            <Feature 
              feature="Flashcards, Reimagined" 
              description="Instead of static Q&A, our flashcards are designed to be interactive. Scroll through them like a feed, and engage with each one using a built-in AI assistant that helps you dig deeper into the topic."
              items={["Interactive learning", "Built-in AI assistance", "In-card coding practice (coming soon)", "Instant feedback"]}
              reverse={true}
              color="teal"
              photo="https://learnify-static-images.s3.us-west-1.amazonaws.com/Learnify-Flashcards.png"
            />
            <Feature 
              feature="Visualize Your Understanding" 
              description="Once your ideas are organized, our Mindmap feature allows you to visualize your knowledge in a dynamic, node-based graph. Each node represents a concept you've touched on, giving you a bird's-eye view of your knowledge."
              items={["Dynamic node-based graphs", "Visual concept connections", "Identify knowledge gaps", "Intuitive reorganization"]}
              reverse={false}
              color="purple"
              photo="https://learnify-static-images.s3.us-west-1.amazonaws.com/Learnify-Flashcards.png"
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
