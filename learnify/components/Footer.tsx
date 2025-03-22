import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" py-12">
    
       
        <div className="border-t border-custom-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center  md:mb-0">
            <span className="text-xl font-bold mr-2 pb-1">
                
              Learn<span className="text-custom-purple text-sm">ify</span>
            </span>
            <span className="text-sm text-zinc-500">© 2025 Learnify, Inc. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            {["Link 1", "Link 2", "Link 3", "Link 4"].map((social, i) => (
              <Link key={i} href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
 
    </footer>
  )
}

export default Footer