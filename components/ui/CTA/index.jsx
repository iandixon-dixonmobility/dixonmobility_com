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
                            We have been publishing public transit apps for riders since 2012, and with over <b>5 million downloads</b> in the Apple App Store and Google Play Store, Dixon Mobility is a proven leader in mobile public transit. Our success is built around tailoring each app for the market it serves and the unique characteristics of the transit system. We build and run the entire stack to ensure availability for riders when they need it most.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-sky-800 hover:bg-sky-700 active:bg-sky-900"
                        >
                            Get started
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA