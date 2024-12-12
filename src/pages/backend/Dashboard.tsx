import BackLayout from "@/components/layouts/BackLayout"

function Dashboard() {

    document.title = 'Dashboard'

    return (
        <BackLayout>
            <section className="text-gray-600 mb-4">
                <div className="container mx-auto flex px-5 pt-8 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-4xl mb-4 font-medium text-gray-900">
                            Dashboard
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan heirloom
                        </p>

                    </div>
                </div>
            </section>
        </BackLayout>
    )
}

export default Dashboard