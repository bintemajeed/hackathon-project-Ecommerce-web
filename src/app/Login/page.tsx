
import Image from "next/image"
import logo2 from "@/images/logo2.png"
import Button from "@/components/ui/Button"
import InputField from "@/components/ui/input"
import Checkbox from "@/components/ui/MyCheckbox"
import Link from "next/link"
function   Login(){
    return(
        <main>
        <div className="w-[93%] mx-auto">
            <div className="h-[490px] w-[380px] mx-auto my-10">

            <div className="w-[95%] mx-auto text-center">
                <div className="flex justify-center">
                <Image className="mb-[30px]"
                 src={logo2}
                alt={"logo"}
                width={40}
                height={20}/></div>
                <h1 className="text-2xl font-semibold">YOUR ACCOUNT  <br /> FOR EVERYTHING <br /> NIKE</h1>
                  <InputField  type="email" placeholder="Enter Email" className="w-[100%] my-3" />
               <InputField type="password" placeholder="Enter Password" className="w-[100%]" />
               <div className="flex justify-between py-7">
               <Checkbox label="Keep me logged in" id="login" className=""/>
               <p className="text-sm text-[#757575] cursor-pointer">Forgotten Your Password?</p>
               </div>
               <p className="text-[#757575]">By logging in, you agree to Nike's <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Use</a>.</p>
     <Button text="Sign In" className="rounded-[5px] w-[100%]"/>
     <p className="text-[#757575]">Not a Member? <Link href="/Signin" className="underline text-black">Join Us</Link></p>
</div>
            </div>
             </div>
             </main>
    )
}
export default Login