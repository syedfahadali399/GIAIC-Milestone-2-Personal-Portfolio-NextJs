"use client";

import { useEffect } from 'react';

export default function YourComponent() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('header nav a');
                const menuIcon = document.querySelector('.menu-icon');
                const navbar = document.querySelector('.navbar');
                const header = document.querySelector('header');

                sections.forEach((sec) => {
                    const top = window.scrollY;
                    const offset = sec.offsetTop - 100;
                    const height = sec.offsetHeight;
                    const id = sec.getAttribute('id');

                    if (top >= offset && top < offset + height) {
                        navLinks.forEach((links) => {
                            links.classList.remove('active');
                            const targetLink = document.querySelector(`header nav a[href*='${id}']`).classList.add('active')
                            // if (targetLink) targetLink.classList.add('active');
                        });
                    }
                });

                if (header) {
                    header.classList.toggle('sticky', window.scrollY > 100);
                }

                if (menuIcon) menuIcon.classList.remove('bx-x');
                if (navbar) navbar.classList.remove('active');
            };
        }
    }, []);

    // return (
    //     // Your component's JSX goes here
    // );
}