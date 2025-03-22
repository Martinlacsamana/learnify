"use client"
import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

interface Connection {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    duration: number;
  }

// DISCLAIMER TO ANYONE READING THIS -> I DID NOT BUILD THIS COMPONENT!

const BrainAnimation = () => {
    const [pulse, setPulse] = useState(false)
    const [rotate, setRotate] = useState(0)
    const [connections, setConnections] = useState<Connection[]>([])
  
    useEffect(() => {
      // Pulse animation
      const pulseInterval = setInterval(() => {
        setPulse((prev) => !prev)
      }, 2000)
  
      // Rotation animation
      const rotateInterval = setInterval(() => {
        setRotate((prev) => (prev + 1) % 360)
      }, 50)
  
      // Generate random connections
      const generateConnections = () => {
        const newConnections = []
        for (let i = 0; i < 8; i++) {
          newConnections.push({
            x1: Math.random() * 100,
            y1: Math.random() * 100,
            x2: Math.random() * 100,
            y2: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 3 + 2,
          })
        }
        setConnections(newConnections)
      }
  
      generateConnections()
      const connectionsInterval = setInterval(generateConnections, 5000)
  
      return () => {
        clearInterval(pulseInterval)
        clearInterval(rotateInterval)
        clearInterval(connectionsInterval)
      }
    }, [])
  
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Neural connections */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((conn, i) => (
            <line
              key={i}
              x1={`${conn.x1}%`}
              y1={`${conn.y1}%`}
              x2={`${conn.x2}%`}
              y2={`${conn.y2}%`}
              stroke="rgb(124 58 237)"
              strokeWidth="1"
              opacity={conn.opacity}
              className="animate-pulse"
              style={{ animationDuration: `${conn.duration}s` }}
            />
          ))}
        </svg>
  
        {/* Brain icon with animations */}
        <div
          className={`relative transform ${pulse ? "scale-110" : "scale-100"} transition-transform duration-1000`}
          style={{ transform: `rotate(${rotate / 20}deg)` }}
        >
          <div className="absolute -inset-4 bg-custom-purple/20 rounded-full blur-md animate-pulse"></div>
          <Brain className="h-32 w-32 text-custom-purple relative z-10" />
        </div>
  
        {/* Pulsing circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-40 h-40 rounded-full bg-custom-purple/5 animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-custom-teal/5 animate-ping" style={{ animationDuration: "4s" }}></div>
        </div>
      </div>
    )
  }

  export default BrainAnimation