import Section from "@/components/Section/page";
import Button from "@/components/Button/page";
import Image from "next/image";
import CustomCard from "@/components/CustomCard/page";

const HomePage = () => {
    return (
        <div className="w-full h-full bg-[#FFFFFF]">
            {/* Header Section */}
            <header
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/assets/images/bg1.png')`,
                }}
            >
                {/* Navbar */}
                <nav className="flex justify-between items-center w-full px-32 py-5">
                    <Image src="/assets/icons/logo.svg" alt="logo" width={90} height={28} />
                    <div className="flex items-center space-x-8">
                        <Section title="Home" link="/" />
                        <Section title="Landings" link="/" />
                        <Section title="Pages" link="/" />
                        <Section title="Docs" link="/" />
                        <Section title="Help" link="/" />
                        <Button title="Get it now" borderColor="white" />
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="flex justify-center text-center items-center">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[56px] font-bold leading-tight max-w-[645px] mt-20">
                            Powerful analytics tools for your business
                        </h2>
                        <p className="text-lg leading-relaxed max-w-[732px] mt-6">
                            An awesome & powerful tool for your business, increase business revenue with enterprise-grade links built to acquire and engage customers.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <Button
                                title="Get Started"
                                color="#1565D8"
                                bgColor="#FFFFFF"
                                borderColor="#FFFFFF"
                                icon={<i className="fas fa-arrow-right" />}
                            />
                            <Button
                                title="Watch Demo"
                                color="#FFFFFF"
                                bgColor="#1565D8"
                                borderColor="#FFFFFF"
                                icon={<i className="fas fa-arrow-right" />}
                            />
                        </div>
                        <div className="mt-20 flex justify-center">
                            <Image
                                src="/assets/images/laptop.png"
                                alt="laptop"
                                width={755}
                                height={451}
                                className="w-[60vw] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Solutions Section */}
            <section className="py-20">
                <div className="container mx-auto lg:px-8 md:px-16 flex flex-col items-center text-center">
                    {/* Tiêu đề FEATURES */}
                    <div className="text-[14px] font-bold text-[#1565D8] bg-[#e9efff] py-3 px-6 rounded-full shadow-sm inline-block mb-5">
                        FEATURES
                    </div>

                    {/* Tiêu đề chính */}
                    <h3 className="text-[#183B56] font-bold text-[32px] lg:text-[36px] mb-3">
                        Our solution for your business
                    </h3>

                    {/* Mô tả */}
                    <p className="text-[#5A7184] text-[16px] lg:text-[18px] max-w-[700px] leading-relaxed">
                        We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
                    </p>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2">
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/pie_cart.svg" alt="pie_cart" width={40} height={40} />}
                            title="Analyze your data"
                            description="Create reports with an easy to use drag-and-drop designer. "
                            link="#"
                        />
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/path.svg" alt="pie_cart" width={40} height={40} />}
                            title="Analyze your data"
                            description="Create reports with an easy to use drag-and-drop designer. "
                            link="#"
                        />
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/line_chart.svg" alt="pie_cart" width={40} height={40} />}
                            title="Analyze your data"
                            description="Create reports with an easy to use drag-and-drop designer. "
                            link="#"
                        />
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/workflow.svg" alt="pie_cart" width={40} height={40} />}
                            title="Analyze your data"
                            description="Create reports with an easy to use drag-and-drop designer. "
                            link="#"
                        />
                    </div>
                </div>
            </section>

            <div>
                <Image src={'/assets/images/bg2.png'} alt="bg2" width={1440} height={175} className="w-[100vw] h-auto" />
            </div>

            {/* Analytics Section */}
            <section className="py-20">

            </section>
        </div>
    );
};

export default HomePage;
