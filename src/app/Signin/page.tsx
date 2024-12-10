
import Image from "next/image"
import logo2 from "@/images/logo2.png"
import Button from "@/components/ui/Button"
import InputField from "@/components/ui/input"
import Checkbox from "@/components/ui/MyCheckbox"
import SelectCountry from "@/components/ui/SelectCountry"
import GenderSelector from "@/components/ui/GenderSelecter"
import Link from "next/link"

function   Signin(){
    return(
        <main>
        <div className="w-[93%] mx-auto">
            <div className="min-h-[490px]  h-[auto] w-[380px] mx-auto my-10">

            <div className="w-[95%] mx-auto text-center">
                <div className="flex justify-center">
                <Image className="mb-[30px]"
                 src={logo2}
                alt={"logo"}
                width={40}
                height={20}/></div>
                <h1 className="text-2xl font-semibold">BECOME A NIKE MEMBER</h1>
                <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                  <InputField  type="email" placeholder="Enter Email" className="w-[100%] " />
               <InputField type="password" placeholder="Enter Password" className="w-[100%]" />
               <InputField type="text" placeholder="First Name" className="w-[100%]" />
               <InputField type="text" placeholder="Last Name" className="w-[100%]" />
               <InputField type="text" placeholder="Date Of Birth" className="w-[100%]" />

               <p className="text-[#757575]"> Get a Nike Member Reward every year on your Birthday.</p>

    <SelectCountry/>
    <GenderSelector />
    <Checkbox label="Sign up for emails to get updates from Nike on products, offers and your Member benefits" id="one" 
   className="my-4 " />
    
    
    
     <Button text="Join Us" className="rounded-[5px] w-[100%]"/>
     <p className="text-[#757575]">Already a Member? <Link href="/Login" className="underline text-black">Sign In</Link></p>
</div>
            </div>
             </div>
             </main>
    )
}
export default Signin