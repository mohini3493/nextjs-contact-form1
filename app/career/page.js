'use client'
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link";
import JobSearchBar from '@/components/sections/JobSearchBar';
import JobGrid from '@/components/sections/JobGrid';

export default function Home() {
    const [filters, setFilters] = useState({ keyword: '', location: '' });

    // Sample job data
    const jobs = [
        { id: 1, title: 'Frontend Developer', location: 'New York', description: 'React and Next.js experience.' },
        { id: 2, title: 'Backend Engineer', location: 'San Francisco', description: 'Node.js and MongoDB expert.' },
        { id: 3, title: 'DevOps Engineer', location: 'Remote', description: 'AWS and CI/CD pipelines.' },
        { id: 4, title: 'Fullstack Developer', location: 'London', description: 'Fullstack developer with MERN stack knowledge.' },
        { id: 5, title: 'UI/UX Designer', location: 'Toronto', description: 'Figma, Adobe XD, and design experience.' },
    ];

    const handleSearch = (filters) => {
        setFilters(filters);
    };

    return (
        <>
            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Career">
                
                <div className="section-padding5">
                <div className="container">
                    <div className="row">
                        <JobSearchBar onSearch={handleSearch} />
                        <JobGrid jobs={jobs} filters={filters} />                        
                    </div>
                </div>
                </div>
            </Layout>
        </>
    )
}