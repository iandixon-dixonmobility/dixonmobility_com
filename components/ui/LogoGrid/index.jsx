import Image from 'next/image'
import freshbooks from '../../../public/logos/freshbooks.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import layers from '../../../public/logos/layers.svg'
import adobe from '../../../public/logos/adobe.svg'

import aws from '../../../public/logos/amazonwebservices-original-wordmark.svg'
import angular from '../../../public/logos/angular-original.svg'
import docker from '../../../public/logos/docker-original.svg'
import grafana from '../../../public/logos/grafana-original.svg'
import kotlin from '../../../public/logos/kotlin-original.svg'
import nestjs from '../../../public/logos/nestjs-original.svg'
import nodejs from '../../../public/logos/nodejs-original.svg'
import swift from '../../../public/logos/swift-original.svg'

const logos = [
    {
        src: swift,
        alt: "swift"
    },
    {
        src: kotlin,
        alt: "kotlin"
    },
    {
        src: nodejs,
        alt: "node.js"
    },
    {
        src: nestjs,
        alt: "nest.js"
    },
    {
        src: angular,
        alt: "angular"
    },
    {
        src: docker,
        alt: "docker"
    },
    {
        src: grafana,
        alt: "grafana"
    },
    {
        src: aws,
        alt: "aws"
    }
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            {/* <h2 className="font-semibold text-sm text-gray-600 text-center">
                TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h2> */}
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} width={60} height={60}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid