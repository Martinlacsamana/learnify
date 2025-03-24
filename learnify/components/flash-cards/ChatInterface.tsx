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
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    // Last message ref to ensure it's in view
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() 

        // Ensure valid input (check whitespaces)
        if (!input.trim()) {
            return;
        }

        // Add our message to messages
        const userMessage: Message = {
            id: Date.now().toString(),
            content: input,
            sender: 'user',
            timeStamp: new Date()
        }

        setMessages((prev) => [...prev, userMessage])
        setInput('') // reset user input
        setIsLoading(true);

        try {
            const response = 'Here it is'
            console.log(response);

        } catch (err) {
            console.error(err);
        }


        // Call our OPENAI endpoint (sample below)
        const returnedMessage: Message = {
            id: 'welcome',
            content: 'What do you want now?',
            sender: 'assistant',
            timeStamp: new Date()
        }

        // Include the new message in our messages
        const updatedMessages = [...messages, returnedMessage]
        setMessages(updatedMessages);

        setIsLoading(false)
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
