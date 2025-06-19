import logo from "@/images/logo.png";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import triangle from "@/images/triangle1.png";
import circle from "@/images/circle.png"
import rectangle from '@/images/rectangle.png'
import portrait from '@/images/portrait.jpg'


export default function AboutMe() {
    return (
        <div className="bg-cc flex flex-col md:flex-row md:h-[calc(100vh-64px)] overflow-x-hidden overflow-y-hidden ">
            <section className="flex-1 flex items-center justify-center mt-32 md:mt-0 mb-8 md:mb-0">
                <div className="relative flex items-center justify-center ">

                    <Image src={circle} alt="circle" className="absolute -bottom-20 -left-25 w-50 h-50 z-0" />
                    <Image src={rectangle} alt="rectangle" className="absolute -top-20 -right-25 w-50 h-50 z-0" />

                    <div className="bg-midnight h-120 w-80 rounded-2xl flex flex-col items-center justify-center relative z-10">

                        <Image src={portrait} alt="portrait" className="w-2/3 h-2/3 object-cover rounded-2xl" />
                        <h1 className="text-white text-2xl font-bold mt-5">Michael Stefanoski</h1>
                        <ul className={'flex gap-2 mt-5'}>

                            <li>
                                <a href="https://github.com/michi-mk-zh/michi-mk-zh">
                                    <Github className="text-cc hover:text-white" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/michael-stefanoski-b2a229354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Linkedin className="text-cc hover:text-white" /></a>

                            </li>
                            <li>
                                <a href="mailto:stefanoski2007@gmail.com?subject=subject text"><Mail className="text-cc hover:text-white" /></a>

                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className="flex-1 flex items-center justify-center mb-8 ">
                <div className="relative flex items-center justify-center">
                    <Image src={triangle} alt="triangle" className="absolute w-70 h-50 z-0 -bottom-10 -left-30" />
                    <div className="max-w-100 text-black mt-20 md:mt-0 sm:mt-20 md:bottom-10 rounded-2xl relative z-10 backdrop-blur-xs">

                        <h1 className="text-6xl font-bold text-center ">Willkommen auf meinem Portfolio!</h1><br />
                        <p className="text-xl text-center">Mein Name ist Michael Stefanoski, ich bin 17 Jahre alt und studiere an der Kantonsschule Hottingen (KSH) im IMS-Zweig. Technik und Informatik faszinieren mich seit Jahren – besonders Softwareentwicklung, Webdesign und alles rund um IT-Systeme.
                            Auf dieser Website finden Sie meine Projekte, Fähigkeiten und Erfahrungen in der Informatikwelt.</p>

                    </div>
                </div>



            </section>

        </div>
    )
}

