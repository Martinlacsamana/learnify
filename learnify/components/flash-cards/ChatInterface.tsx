"use client"
import {useState, useEffect, useRef} from 'react';

interface Message {
    id: string,
    content: string,
    sender: 'assistant' | 'user'
    timeStamp: Date
}

interface Props {
    topic: string
}

const ChatInterface = ( {topic}: Props) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    // Last message ref to ensure it's in view
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() 
    }

    // Load chat with an assistant welcome message
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: 'welcome',
                    content: 'What do you want now?',
                    sender: 'assistant',
                    timeStamp: new Date()
                }
            ])
        }

    }, [isOpen])




    if (!isOpen) {
        return (
            <div>This is the dropdown thing</div>
        )
    }


    return (
        <div>

        </div>
    )

}

export default ChatInterface
