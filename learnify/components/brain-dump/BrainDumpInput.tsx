"use client"
import * as React from 'react'
import {useState, useEffect} from 'react'


const BrainDumpInput = () => {

    const [input, setInput] = useState('');
    const [isWord, setIsWord] = useState(false);

    const wordCount = input.trim().split(' ').filter(word => word.length > 0).length;

   

    return (
        <div className="col-span-2 border border-semi-gray rounded-md px-4 p-3">
            <div className="flex gap-2 text-[14px] font-bold">
                <p className="border border-semi-gray px-1.5  rounded-lg">{wordCount} words</p>
                <p className="border border-semi-gray px-1.5 font-semibold rounded-lg">{input.length} characters</p>
            </div>

            <textarea onChange={(e) => setInput(e.target.value)} className="w-full border border-semi-gray rounded-md min-h-[350px] mt-4 mb-1 px-3 py-2 font-sm text-white "></textarea>
            <button className="border border-semi-gray my-2 py-2 px-4 rounded-md bg-custom-purple float-right text-base font-semibold">Generate Flashcards</button>
        </div>


    )
}


export default BrainDumpInput