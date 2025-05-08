import Image from "next/image";
import logo from "@/images/logo.png";
import Burger from "@/component/burger";


export default function Header() {
    return(
        <header className='relative w-full bg-main flex bg-midnight '>
            <Burger/>
            <div className={'flex items-center justify-center grow'}>
                <Image className={'h-16 w-30  '} src={logo} alt='Logo'  objectFit="cover"/>
            </div>
        </header>)

}