import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/dc_app_scene.png"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Leader In Public Transit
                        </h2>
                        <p className="mt-3 text-gray-600">
                        Since 2012, Dixon Mobility has been delivering exceptional public transit apps trusted by millions of riders. With over <b>5 million downloads</b> across the Apple App Store and Google Play Store, we've established ourselves as a leading innovator in mobile transit technology. Each of our apps is thoughtfully designed and customized to meet the specific needs of its local market and the distinct characteristics of each transit system. By managing the complete technology stack—from development to infrastructure—we ensure our apps are reliable, intuitive, and available exactly when riders depend on them most.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-sky-800 hover:bg-sky-700 active:bg-sky-900"
                        >
                            Learn More
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA