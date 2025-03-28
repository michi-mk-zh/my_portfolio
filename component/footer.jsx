'use client'
import {Instagram} from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import {useState} from "react";



export default function Footer() {

    return (
        <footer className='bg-midnight'>
            <p className='border-b-1 border-white mx-4 pt-4'>. </p>
            <div className={'flex justify-between'}>
                <p className='px-4 py-4  decoration-white text-white'>© {new Date().getFullYear()} Meine
                    Website. Alle Rechte vorbehalten.</p>
                <ul className={'flex mx-4 pt-4 gap-2'}>
                    <li>
                        <Instagram
                            className="text-cc hover:text-white"/>
                    </li>
                    <li>
                        <Github className="text-cc hover:text-white"/>
                    </li>
                    <li>
                        <Linkedin className="text-cc hover:text-white"/>
                    </li>
                    <li>
                        <Mail className="text-cc hover:text-white"/>
                    </li>
                </ul>
            </div>

        </footer>
    )
}
