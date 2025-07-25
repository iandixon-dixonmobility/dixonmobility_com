import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                Custom Mobile Apps for Transit and Beyond
                </h1>
                <p className="max-w-xl mx-auto">
                AI First, iOS apps, Android apps, APIs, Web Transit-Focused Tech
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    {/* <NavLink
                        href="/get-started"
                        className="text-white bg-sky-800 hover:bg-sky-700 active:bg-sky-900 "
                    >
                        Start building
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Learn more
                    </NavLink> */}
                </div>
            </div>
        </div>
    </section>
)

export default Hero