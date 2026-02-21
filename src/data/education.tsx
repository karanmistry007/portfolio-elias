import type { EducationItem } from '../types';

import NutanSchoolLogo from '../assets/images/nutan_school.jpg';
import LJLogo from '../assets/images/lj.jpg';

// ─── Education Data ──────────────────────────────────────────────────
export const EDUCATION_DATA: EducationItem[] = [
    {
        image: NutanSchoolLogo,
        icon: (
            <svg
                width="24"
                height="24"
                className="scale-[1.2]"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <path d="M12.5 17.52c1.415-1.054 3.624-1.846 5.5-2v6.479c-1.739.263-3.755 1.104-5.5 2v-6.479zm-1 0c-1.415-1.054-3.624-1.846-5.5-2v6.479c1.739.263 3.755 1.104 5.5 2v-6.479zm-6.5 2.917c-2.049-.674-2.996-1.437-2.996-1.437l-.004-2.025c-.008-2.127.088-3.344 2.648-3.909 2.805-.619 5.799-1.317 4.241-3.521-3.901-5.523-.809-9.545 3.111-9.545 3.921 0 6.996 3.991 3.11 9.545-1.529 2.185 1.376 2.888 4.242 3.521 2.57.568 2.657 1.791 2.647 3.934l-.003 2s-.947.763-2.996 1.437v-6.003l-1.082.089c-2.054.169-4.36 1.002-5.918 2.128-1.559-1.126-3.863-1.959-5.918-2.128l-1.082-.089v6.003z" />
            </svg>
        ),
        year: '2017-2018',
        degree: 'Secondary School Certificate',
        link: 'https://nutanvv.schoolofgujarat.com/',
        institution: 'NUTAN VIDHYA VIHAR HIGHER SECONDARY SCHOOL',
        description:
            'Completed Secondary School Certificate under Gujarat Secondary and Higher Secondary Education Board in 2018.',
    },
    {
        image: NutanSchoolLogo,
        icon: (
            <svg
                width="24"
                height="24"
                className="scale-[1.2]"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
            >
                <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z"></path>
            </svg>
        ),
        year: '2018-2019',
        degree: 'Higher Secondary School Certificate',
        link: 'https://nutanvv.schoolofgujarat.com/',
        institution: 'NUTAN VIDHYA VIHAR HIGHER SECONDARY SCHOOL',
        description:
            'Achieved Higher Secondary School Certificate from Gujarat Secondary and Higher Secondary Education Board in 2019.',
    },
    {
        image: LJLogo,
        icon: (
            <svg
                width="24"
                height="24"
                className="scale-[1.2]"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z"></path>
            </svg>
        ),
        year: '2019-2023',
        degree: 'Electronics and Communication Engineering',
        link: 'https://ljku.edu.in/program/engineering-b-e-m-e-10',
        institution: 'L.J. INSTITUTE OF ENGINEERING AND TECHNOLOGY',
        description:
            'Graduated with a Bachelor of Engineering in Electronics and Communication Engineering, strengthening programming skills in Python and JavaScript through projects.',
    },
];
