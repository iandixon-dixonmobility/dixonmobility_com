import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Let's talk
                </h2>
                <p className="mt-3 text-gray-600">
                    We would love to hear about your project, whether you're bringing an app directly to market or need a partner to support a complex client engagement.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-sky-800 hover:bg-sky-700 active:bg-sky-900"
                >
                    Contact Us
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA