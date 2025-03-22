"use client"
import { useState } from 'react'
import TabContent from './TabContent';
import SavedNotesContent from './SavedNotesContent';


const BrainDumpTabs = () => {
    const [isDefaultTab, setIsDefaultTab] = useState(true);   // 'Tips' tab

    // Switch here -> render either one of the 
    const renderTabContent = () => {
        if (isDefaultTab) {
            return <TabContent/>
        }
        return <SavedNotesContent/>
    }


    return (
        <div className="col-span-1 w-[100%] border border-semi-gray rounded-md px-4 py-3">
            {/* TABS */}
            <div className="grid grid-cols-2 bg-semi-gray rounded-md text-center text-[16px] font-semibold p-1">
                <p onClick={() => setIsDefaultTab(true)} className={`${isDefaultTab ? 'bg-black' : '' } rounded-md py-2 cursor-pointer `}>Tips</p>
                <p onClick={() => setIsDefaultTab(false)} className={`${!isDefaultTab ? 'bg-black' : '' } rounded-md py-2 cursor-pointer `}>Saved Notes</p>
            </div>

            {renderTabContent()}
        </div>


    )
}


export default BrainDumpTabs