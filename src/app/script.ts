"use client";

import { useEffect } from 'react';

export default function YourComponent() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                const sections = document.querySelectorAll<HTMLElement>('section');
                const navLinks = document.querySelectorAll<HTMLElement>('header nav a');
                const menuIcon = document.querySelector<HTMLElement>('.menu-icon');
                const navbar = document.querySelector<HTMLElement>('.navbar');
                const header = document.querySelector<HTMLElement>('header');

                sections.forEach((sec) => {
                    const top = window.scrollY;
                    const offset = sec.offsetTop - 100;
                    const height = sec.offsetHeight;
                    const id = sec.getAttribute('id');

                    if (top >= offset && top < offset + height) {
                        navLinks.forEach(links => {
                            links.classList.remove('active');
                            const targetLink = document.querySelector<HTMLElement>(`header nav a[href*='${id}']`)?.classList.add('active');
                            // targetLink?.classList.add('active');
                        });
                    }
                });

                if (header) {
                    header.classList.toggle('sticky', window.scrollY > 100);
                }

                menuIcon?.classList.remove('bx-x');
                navbar?.classList.remove('active');
            };
        }
    }, []);

    // return (
    //     // Your component's JSX
    // );
}