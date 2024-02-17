"use client";
import { QuestionTitle } from '@/app/utils/questions';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as React from 'react';

export interface RhetoricalsProps {
}

const features = [
    {
        title: "What is this service?",
        id: "what",
        gradient: "from-[#f7f0ff] to-[#a78afe]",
        cardTitle : "Revolutionizing Recruitment",
        cardContent: <p>Dive into the future of hiring with our platform. At the heart of our service lies a sophisticated AI that transforms the way employers connect with potential talent. By seamlessly extracting and analyzing details from resumes, we offer a streamlined match-making process that prioritizes precision and efficiency. Ideal for students and recruiters alike, our platform ensures that every connection is a step towards a successful future</p>,
    },
    {
        title : "Why should I use it?",
        id : "why",
        gradient: "from-[#f5fbff] to-[#addeff]",
        cardTitle: "The Future of Hiring Today",
        cardContent: 
        <div>In a world where time is invaluable, we bring you a solution that saves it. Our platform stands out by offering:
            <ul>
                <li><b>1. Speed</b> - Say goodbye to lengthy screening processes. Our AI quickly identifies the best candidates</li>
                <li><b>2. Accuracy</b> - Advanced machine learning tools ensure matches are based on precise criteria, from GPA to specific skill sets</li>
                <li><b>3. Opportunity</b> - For students, we offer a gateway to being discovered based on your true potential. For employers, access a pool of candidates ready to excel in their roles.</li>
            </ul>
        </div>,

    },
    {
        title : "How can it help me?",
        id: "how",
        gradient: "from-[#fff7f5] to-[#ffd8ad]",
        cardTitle: "Your Path to Perfect Matches",
        cardContent: 
        <div>
            Our platform simplifies recruitment to three easy steps:
            <ol>
                <li><b>1. For Students</b> - Sign up, upload your resume, and answer a few questions. Our AI does the rest, making your profile visible to top recruiters.</li>
                <li><b>2. For Employers</b> - Define your ideal candidate criteria using our intuitive filters. Whether you seek specific skills, experiences, or academic achievements, we've got you covered.</li>
                <li><b>3. Connect</b> - Our system curates a list of candidates that fit your criteria. Review their detailed profiles and connect with your future team members with just a click.</li>
            </ol>
        </div>,

    }
]

const Rhetoricals = () => {
    const [activeFeature, setActiveFeature] = React.useState(features[0].id);
    return (
      <div className='flex w-full gap-20 items-start'>
        <div className='w-full py-[50vh]'>
            <ul>
                {features.map((feature) => (
                    <li key={feature.id} className='flex justify-center p-3 font-heading'>
                        <QuestionTitle id={feature.id} setActiveFeature={setActiveFeature}>
                            {feature.title}
                        </QuestionTitle>
                    </li>
                ))}
            </ul>
        </div>
        <div className='w-full sticky top-0 h-screen flex items-center'>
                <div className='w-1/2 min-w-[460px] relative aspect-square rounded-2xl bg-gray-100 shadow-2xl'>
                    <Card className={cn('absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br', features.find(f => f.id === activeFeature)?.gradient)}>
                        <CardTitle className='pt-5 text-black p-5 text-4xl'>
                            {features.find(f => f.id === activeFeature)?.cardTitle}
                        </CardTitle>
                        <CardContent className=' text-neutral-800'>
                            {features.find(f => f.id === activeFeature)?.cardContent}
                        </CardContent>
                    </Card>
                </div>
        </div>
      </div>
    );
}
export default Rhetoricals;
