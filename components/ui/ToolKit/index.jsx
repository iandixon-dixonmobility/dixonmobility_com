import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
// import wordpress from "../../../public/icons/wordpress.svg"
// import nextjs from "../../../public/icons/nextjs.svg"
// import tailwind from "../../../public/icons/tailwind.svg"
// import nodejs from "../../../public/icons/nodejs.svg"
// import vercel from "../../../public/icons/vercel.svg"
// import figma from "../../../public/icons/figma.svg"

import api from "../../../public/icons/005-computer.svg"
import cloud from "../../../public/icons/024-cloud.svg"
import observability from "../../../public/icons/029-warning.svg"
import ai from "../../../public/icons/041-robot.svg"
import mobile from "../../../public/icons/059-mobile.svg"
import automation from "../../../public/icons/088-batch.svg"

const ToolKit = () => {

    const features = [
        {
            icon: api,
            title: "API",
            desc: "WordPress is an open-source content management system (CMS)."
        },
        {
            icon: ai,
            title: "AI",
            desc: "Next.js is a React framework that gives you building blocks to create web apps."
        },
        {
            icon: cloud,
            title: "Cloud",
            desc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building UIs."
        },
        {
            icon: mobile,
            title: "Mobile Development",
            desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment."
        },
        {
            icon: automation,
            title: "Automation",
            desc: "Vercel is a cloud platform that enables developers to host web apps."
        },
        {
            icon: observability,
            title: "Observability",
            desc: "Figma is a web-based graphics editing and user interface design app."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Work with the best toolkit
                    </h2>
                    <p>
                        These are a few of our favourite things
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit