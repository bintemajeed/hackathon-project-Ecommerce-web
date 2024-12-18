// Button.tsx
'use client'
interface ButtonProps {
    text: string; 
    className?:string // The text that will appear on the button
    // Optional onClick handler
  }
  
  const Button: React.FC<ButtonProps> = ({ className,text }) => {
    return (
      <button
        
        className={`bg-black ${className} text-white font-medium py-2 px-5 rounded-[20px] hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  
