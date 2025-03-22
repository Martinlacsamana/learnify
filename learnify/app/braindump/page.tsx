"use client"
import * as React from 'react'
import BrainDumpInput from '@/components/brain-dump/BrainDumpInput'
import BrainDumpTabs from '@/components/brain-dump/BrainDumpTabs'
import { Brain } from 'lucide-react'


const BrainDump = () => {


    return (
        <div className="w-[85%] h-full mx-auto">
            {/* HEADER SECTION */}
            <div className="">
                <div className="flex items-center gap-2 mb-3">
                    <Brain size={32} color="rgb(124 58 237 / 0.9)" />
                    <h1 className="text-3xl font-semibold">Brain Dump</h1>
                </div>
                <p className="text-gray-400">Dump your thoughts about a topic to organize your learning and generate flashcards.</p>
            </div>

            {/* TOPIC INPUT */}
            <div className="mt-[1rem] w-full">
                <input 
                placeholder='Enter a topic (e.g., React Hooks, Machine Learning, PHP Proxies'
                className="w-full border border-semi-gray rounded-md px-4 py-2 placeholder:text-sm"
                >
                </input>
            </div>

            {/* BODY */}
            <div className="w-full min-h-[400px] grid grid-cols-3 gap-6 mt-6">
                {/* TEXTAREA CONTAINER */}
                <BrainDumpInput />

                {/* TIPS & SAVED NOTES */}
                <BrainDumpTabs />


            </div>

            
            

        </div>
    )
}

export default BrainDump;

