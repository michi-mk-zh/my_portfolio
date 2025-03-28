'use client'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';




export default function Footer() {

    return (
        <footer className='bg-midnight'>
            <p className='border-b-1 border-white mx-4 pt-4'>. </p>
            <div className={'flex justify-between'}>
                <p className='px-4 py-4  decoration-white text-white'>© {new Date().getFullYear()} Meine
                    Website. Alle Rechte vorbehalten.</p>
                <ul className={'flex mx-4 pt-4 gap-2'}>

                    <li>
                        <a href="https://github.com/michi-mk-zh/michi-mk-zh">
                            <Github className="text-cc hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/michael-stefanoski-b2a229354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Linkedin className="text-cc hover:text-white"/></a>

                    </li>
                    <li>
                        <a href="mailto:stefanoski2007@gmail.com?subject=subject text"><Mail className="text-cc hover:text-white"/></a>

                    </li>
                </ul>
            </div>

        </footer>
    )
}
