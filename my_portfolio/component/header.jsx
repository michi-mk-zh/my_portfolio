import Image from "next/image";
import logo from "@/images/logo.png";
import Burger from "@/component/burger";


export default function Header() {
    return(
        <header className='relative w-full bg-main flex'>
            <Burger/>
            <Image className={'h-20 w-24'} src={logo} alt='Logo'  objectFit="cover"/>
        </header>)

}