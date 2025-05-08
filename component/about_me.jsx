import logo from "@/images/logo.png";
import Image from "next/image";
import {Github, Linkedin, Mail} from "lucide-react";
import trianglet from "@/images/triangle1.png";


export default function AboutMe() {
    return (
        <div className={'bg-cc h-screen h-screen flex relativ'}>

            <Image className={'absolute top-0 left-10 w-50 h-40'} src={trianglet} alt={'triangle'}/>




            <div className="flex flex-col justify-center items-center w-1/2 h-center">

                <div className="bg-midnight w-[360px] h-[480px] rounded-2xl flex flex-col p-6">
                    {/* Obere Hälfte mit zentriertem Logo */}
                    <div className="flex-1 flex items-center justify-center">
                    <Image className="h-16 w-30" src={logo} alt="Logo"/>
                    </div>

                    {/* Mittlerer Bereich mit Name */}
                    <div className="flex justify-center mb-4">
                        <h1 className="text-cc text-3xl">Michael Stefanoski</h1>
                    </div>

                    {/* Untere Hälfte mit zentrierten Icons */}
                    <div className="flex-1 flex items-center justify-center">
                        <ul className="flex gap-4">
                            <li>
                                <a href="https://github.com/michi-mk-zh/michi-mk-zh">
                                    <Github className="text-cc hover:text-white w-9 h-9"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/michael-stefanoski-b2a229354">
                                    <Linkedin className="text-cc hover:text-white w-9 h-9"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:stefanoski2007@gmail.com?subject=subject text">
                                    <Mail className="text-cc hover:text-white w-9 h-9"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div>
                <p>text</p>
            </div>

        </div>
    )
}

