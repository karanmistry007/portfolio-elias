import type { EducationItem } from '../types';

import NutanSchoolLogo from '../assets/images/nutan_school.jpg';
import LJLogo from '../assets/images/lj.jpg';

// ─── Education Data (most recent first) ──────────────────────────────
export const EDUCATION_DATA: EducationItem[] = [
    {
        image: LJLogo,
        year: '2019 — 2023',
        degree: 'Electronics and Communication Engineering',
        link: 'https://ljku.edu.in/program/engineering-b-e-m-e-10',
        institution: 'L.J. Institute of Engineering and Technology',
        description:
            'Graduated with a Bachelor of Engineering in Electronics and Communication Engineering, strengthening programming skills in Python and JavaScript through projects.',
    },
    {
        image: NutanSchoolLogo,
        year: '2018 — 2019',
        degree: 'Higher Secondary School Certificate',
        link: 'https://nutanvv.schoolofgujarat.com/',
        institution: 'Nutan Vidhya Vihar Higher Secondary School',
        description:
            'Achieved Higher Secondary School Certificate from Gujarat Secondary and Higher Secondary Education Board in 2019.',
    },
    {
        image: NutanSchoolLogo,
        year: '2017 — 2018',
        degree: 'Secondary School Certificate',
        link: 'https://nutanvv.schoolofgujarat.com/',
        institution: 'Nutan Vidhya Vihar Higher Secondary School',
        description:
            'Completed Secondary School Certificate under Gujarat Secondary and Higher Secondary Education Board in 2018.',
    },
];
