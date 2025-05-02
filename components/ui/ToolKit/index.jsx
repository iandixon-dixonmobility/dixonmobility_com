import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

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
            desc: "We design and implement robust APIs to ensure seamless integration between your systems and third-party services. Our expertise facilitates secure data exchange and enhances application connectivity for streamlined operations."
        },
        {
            icon: ai,
            title: "AI",
            desc: "Leverage the power of Artificial Intelligence to unlock new insights, automate complex processes, and create smarter user experiences. We integrate AI capabilities to drive efficiency and innovation within your applications."
        },
        {
            icon: cloud,
            title: "Cloud",
            desc: "Build and deploy your applications on secure, scalable cloud infrastructure designed for high availability and optimal performance. We utilize leading cloud platforms to provide flexible and cost-effective solutions tailored to your needs."
        },
        {
            icon: mobile,
            title: "Mobile Development",
            desc: "We create high-performance, user-centric mobile applications for both iOS and Android platforms using modern development practices. Our focus is on delivering intuitive and engaging mobile experiences that meet your business objectives."
        },
        {
            icon: automation,
            title: "Automation",
            desc: "Streamline your workflows and increase operational efficiency through intelligent automation solutions. We identify opportunities to automate repetitive tasks, reducing manual effort and freeing up resources for strategic initiatives."
        },
        {
            icon: observability,
            title: "Observability",
            desc: "Gain deep insights into your application performance and system health with comprehensive observability tools. We implement monitoring and logging solutions to ensure reliability, troubleshoot issues quickly, and optimize user experience."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Core Competencies
                    </h2>
                    <p>
                        Here's where we shine
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