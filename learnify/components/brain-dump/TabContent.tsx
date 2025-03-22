import Tip from "./Tip"

const TabContent = () => {

    return (
        <div className="flex flex-col space-y-4 mt-4">
            <Tip label="Free Write" tip="Don't worry about grammar or organization. Just get your thoughts out."/>
            <Tip label="Use the timer" tip="Try the Pomodoro technique - 25 minutes of focused writing."/>
            <Tip label="Ask questions" tip="Write down questions you have about the topic."/>
            <Tip label="Make connections" tip="How does this topic relate to things you already know?"/>
            <Tip label="Generate flashcards" tip="Don't worry about grammar or organization. Just get your thoughts out."/>
        </div>
    )

}

export default TabContent