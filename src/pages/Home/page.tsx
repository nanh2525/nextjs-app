'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
import { useMemo } from "react";

const Section = dynamic(() => import('@/components/Section/page'), {
    loading: () => <div>Loading...</div>,
});
const Button = dynamic(() => import('@/components/Button/page'), {
    loading: () => <div>Loading...</div>,
});
const VoucherCard = dynamic(() => import('@/components/VoucherCard/page'), {
    loading: () => <div>Loading...</div>,
});
const CustomCard = dynamic(() => import('@/components/CustomCard/page'), {
    loading: () => <div>Loading...</div>,
});
const FooterCard = dynamic(() => import('@/components/FooterCard/page'), {
    loading: () => <div>Loading...</div>,
});

const HomePage = () => {

    const featuresList = useMemo(() => [
        {
            icon: "/assets/icons/house.svg",
            title: 'Easy customization',
            description: 'No matter what kind of home you have to share, you can increase your earnings.'
        },
        {
            icon: "/assets/icons/path.svg",
            title: 'Secure and fast',
            description: 'No matter what kind of home you have to share, you can increase your earnings.'
        },
        {
            icon: "/assets/icons/workflow.svg",
            title: 'Powerful dashboard',
            description: 'No matter what kind of home you have to share, you can increase your earnings.'
        },
        {
            icon: "/assets/icons/copy.svg",
            title: 'Cloud upload',
            description: 'No matter what kind of home you have to share, you can increase your earnings.'
        },
        {
            icon: "/assets/icons/global.svg",
            title: 'Proven Technology',
            description: 'No matter what kind of home you have to share, you can increase your earnings.'
        },
        {
            icon: "/assets/icons/like.svg",
            title: '98.99% satisfaction',
            description: 'No matter what kind of home you have to share, you can increase your earnings.'
        },
    ], [])

    return (
        <div className="w-full h-full bg-[#FFFFFF] pb-20">
            {/* Header Section */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/assets/images/bg1.png')`,
                }}
            >
                {/* Navbar */}
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between items-center w-full px-32 py-5"
                >
                    <Image src="/assets/icons/logo.svg" alt="logo" width={90} height={28} />
                    <div className="flex items-center space-x-8">
                        <Section title="Home" link="/" />
                        <Section
                            title="Landings"
                            link="/"
                            hasChildren={true}
                        />
                        <Section title="Pages" link="/" hasChildren={true} />
                        <Section title="Docs" link="/" />
                        <Section title="Help" link="/" />
                        <Button title="Get it now" borderColor="white" />
                    </div>
                </motion.nav>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center text-center items-center"
                >
                    <div className="flex flex-col items-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-[56px] font-bold leading-tight max-w-[645px] mt-20"
                        >
                            Powerful analytics tools for your business
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-lg leading-relaxed max-w-[732px] mt-6"
                        >
                            An awesome & powerful tool for your business, increase business revenue with enterprise-grade links built to acquire and engage customers.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex gap-4 mt-8"
                        >
                            <Button title="Get Started" color="#1565D8" bgColor="#FFFFFF" borderColor="#FFFFFF" icon={<i className="fas fa-arrow-right" />} />
                            <Button title="Watch Demo" color="#FFFFFF" bgColor="#1565D8" borderColor="#FFFFFF" icon={<i className="fas fa-arrow-right" />} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="mt-20 flex justify-center"
                        >
                            <Image
                                src="/assets/images/laptop.png"
                                alt="laptop"
                                width={755}
                                height={451}
                                className="w-[60vw] h-auto"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.header>

            {/* Solutions Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="py-20"
            >
                <div className="container mx-auto lg:px-8 md:px-16 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-[14px] font-bold text-[#1565D8] bg-[#e9efff] py-3 px-6 rounded-full shadow-sm inline-block mb-5"
                    >
                        FEATURES
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-[#183B56] font-bold text-[32px] lg:text-[36px] mb-3"
                    >
                        Our solution for your business
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-[#5A7184] text-[16px] lg:text-[18px] max-w-[700px] leading-relaxed"
                    >
                        We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
                    </motion.p>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2">
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/pie_cart.svg" alt="pie_cart" width={40} height={40} loading="lazy" />}
                            title="Analyze your data"
                            description="Create reports with an easy to use drag-and-drop designer."
                            link="#"
                            bgIconColor="#F2F5FF"
                        />
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/path.svg" alt="pie_cart" width={40} height={40} loading="lazy" />}
                            title="Collaborate securely"
                            description="Share/publish your reports with your colleagues."
                            link="#"
                            bgIconColor="#F2F5FF"
                        />
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/line_chart.svg" alt="pie_cart" width={40} height={40} loading="lazy" />}
                            title="Embedded analytics"
                            description="Get a powerful analytics tool in your own brand name."
                            link="#"
                            bgIconColor="#F2F5FF"
                        />
                        <CustomCard
                            direction="col"
                            icon={<Image src="/assets/icons/workflow.svg" alt="pie_cart" width={40} height={40} loading="lazy" />}
                            title="Easy and Intuitive"
                            description="Easily converse with your data using everyday language."
                            link="#"
                            bgIconColor="#F2F5FF"
                        />
                    </div>
                </div>
            </motion.section>

            <div>
                <Image src={'/assets/images/bg2.png'} alt="bg2" width={1440} height={175} className="w-[100vw] h-auto" />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                    background: 'linear-gradient(180deg, #F8FBFF 0%, rgba(250, 251, 251, 0.0001) 100%)',
                }}
            >
                {/* Analytics Section */}
                <motion.section
                    className="py-5 px-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src="/assets/images/streamline.svg"
                                alt="streamline"
                                width={1000}
                                height={632}
                                className="w-[35vw] h-auto mx-auto"
                                loading="lazy"
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-4 xl:w-[80%]"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-[#36B37E] font-semibold uppercase">Analytics</div>
                            <h3 className="text-[#183B56] text-[36px] font-bold">
                                Analyze your data with our analyze tools.
                            </h3>
                            <p className="text-[#5A7184] text-[18px]">
                                Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
                            </p>
                            <div className="grid grid-cols-2">
                                <CustomCard
                                    direction="col"
                                    icon={<Image src="/assets/icons/workflow.svg" alt="workflow" width={40} height={40} loading="lazy" />}
                                    title="Powerful dashboard"
                                    description="Combine multiple reports into a single beautiful dashboard."
                                    bgIconColor="#F2F5FF"
                                />
                                <CustomCard
                                    direction="col"
                                    icon={<Image src="/assets/icons/sync.svg" alt="sync" width={40} height={40} loading="lazy" />}
                                    title="Always in Sync"
                                    description="Don’t worry about the data, always be synchronized"
                                    bgIconColor="#F2F5FF"
                                />
                            </div>
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="absolute inset-0 flex items-center z-0 left-32">
                                    <Image
                                        src={'/assets/images/combined_shape.png'}
                                        alt="combined_shape"
                                        width={86}
                                        height={102}
                                        className="w-auto h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="relative z-10 flex items-center">
                                    <Button
                                        title="Try it out free"
                                        color="#FFFFFF"
                                        bgColor="#1565D8"
                                        borderColor="#FFFFFF"
                                        icon={<i className="fas fa-arrow-right" />}
                                        boxShadowColor="0px 15px 35px 0px #142D4126"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Features Section */}
                <motion.section
                    className="pt-40 px-8 text-center flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="lg:w-[90%]">
                        <div className="space-y-4 mb-10">
                            <div className="text-[#36B37E] font-semibold text-[14px]">FEATURES</div>
                            <h3 className="text-[#183B56] font-bold text-[36px]">
                                Explore about our awesome features
                            </h3>
                            <p className="text-[#5A7184] text-[18px]">
                                An awesome & powefull JavaScript library for building user interfaces. Independent of any third-party libraries or frameworks.
                            </p>
                        </div>

                        <motion.div
                            className="grid lg:grid-cols-3 md:grid-cols-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.2 }}
                        >
                            {featuresList.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <CustomCard
                                        direction="row"
                                        icon={<Image src={feature.icon} alt="icon" width={40} height={40} loading="lazy" />}
                                        title={feature.title}
                                        description={feature.description}
                                        textLeft={true}
                                        borderIconColor="#D1DDFC"
                                        iconWidth={24}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        <div
                            className="py-10"
                            style={{
                                borderBottom: '1px solid #E5EAF4',
                            }}
                        ></div>
                    </div>
                </motion.section>
            </motion.div>

            {/* Collaboration Section */}
            <section className="pt-10 px-8 text-center flex justify-center">
                <div className="lg:w-[90%] grid grid-cols-2 items-center relative pb-8">
                    <motion.div
                        className="space-y-4 text-start pr-5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[#36B37E] font-semibold">COLLABORATE</div>
                        <h3 className="text-[#183B56] font-bold text-[36px]">
                            Collaborate with your team anytime, anywhere.
                        </h3>
                        <p className="text-[#5A7184] text-[18px]">
                            See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.
                        </p>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 ">
                            {['Organize your data', 'Always in sync', 'Work with any team', 'Embedded analytics', 'Business analytics'].map((text, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-3 py-2 pr-5"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <Image src={'/assets/icons/check.svg'} alt="check_icon" width={24} height={24} loading="lazy" />
                                    <p className="text-[#183B56] text-[16px]">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image src={'/assets/images/human.png'} alt="human" width={478} height={571} className="relative z-10" loading="lazy" />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-0 flex items-center z-0 left-[76%]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={'/assets/images/combined_shape.png'}
                            alt="combined_shape"
                            width={86}
                            height={102}
                            className="w-auto h-auto"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="pt-32 px-8 text-center flex justify-center relative">
                <motion.div
                    className="absolute space-y-4 z-10 xl:w-[40vw] lg:w-[50vw] w-[55vw] top-[43%]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-[#36B37E] xl:text-[1vw] lg:text-[2vw] text-[3vw] font-semibold">
                        INTEGRATION
                    </div>
                    <h3 className="text-[#183B56] font-bold xl:text-[2vw] lg:text-[3vw] text-[4vw]">
                        Seamless integrations with other analytics tools
                    </h3>
                    <p className="text-[#5A7184] xl:text-[1vw] lg:text-[1.5vw] text-[2vw]">
                        Polygon absolutely works great with tools in your other existing platform.
                    </p>
                </motion.div>
                <motion.div
                    className="xl:w-[60vw] z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src={'/assets/images/integration.png'} alt="integration_bg" width={967} height={650} className="w-full" loading="lazy" />
                </motion.div>
            </section>

            {/* Feedback Section */}
            <section className="pt-32 px-8 text-center flex justify-center relative">
                <motion.div
                    className="w-[90%] space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="text-[#183B56] font-bold text-[24px]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Trusted by the world’s largest business
                    </motion.div>
                    <motion.div
                        className="w-full flex justify-center py-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image src={'/assets/images/logo_list.png'} alt="logo_list" width={1140} height={33} loading="lazy" />
                    </motion.div>
                    <motion.div
                        className="w-full flex justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="xl:w-[60%] lg:w-[60%] w-[90%] grid grid-cols-2">
                            <motion.div
                                style={{ borderRight: '1px solid #E5EAF4' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image src={'/assets/icons/airbnb_logo.svg'} alt="airbnb_logo" width={102} height={32} loading="lazy" />
                                <p className="text-[#183B56] text-[18px] text-left pt-10 pr-16 pb-5">
                                    I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality.
                                </p>
                                <div className="flex gap-3">
                                    <Image src={'/assets/icons/user1.svg'} alt="user1" width={40} height={40} loading="lazy" />
                                    <div className="text-start">
                                        <div className="text-[#183B56] font-semibold text-[16px]">Bryan Arnoldy</div>
                                        <div className="flex gap-2">
                                            <Image src={'/assets/icons/check.svg'} alt="check_icon" width={16} height={16} loading="lazy" />
                                            <div className="text-[#5A7184] italic">Verified customer</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="pl-16"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image src={'/assets/icons/amazon_logo.svg'} alt="amazon_logo" width={102} height={32} loading="lazy" />
                                <p className="text-[#183B56] text-[18px] text-left pt-10 pb-5">
                                    I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality.
                                </p>
                                <div className="flex gap-3">
                                    <Image src={'/assets/icons/user2.svg'} alt="user2" width={40} height={40} loading="lazy" />
                                    <div className="text-start">
                                        <div className="text-[#183B56] font-semibold text-[16px]">Bryan Arnoldy</div>
                                        <div className="flex gap-2">
                                            <Image src={'/assets/icons/check.svg'} alt="check_icon" width={16} height={16} loading="lazy" />
                                            <div className="text-[#5A7184] italic">Verified customer</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Pricing Section */}
            <section
                className="mt-20 text-center ml-10"
                style={{
                    background: 'linear-gradient(180deg, #F8FBFF 0%, #FCFEFF 100%)',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Image src={'/assets/images/bg3.png'} alt="bg3" width={967} height={650} className="w-full" loading="lazy" />
                </motion.div>
                <motion.div
                    className="pt-32 space-y-4 xl:px-40 lg:px-20 px-8"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-[14px] font-bold text-[#1565D8] bg-[#e9efff] py-3 px-6 rounded-full shadow-sm inline-block mb-5">
                        OUR PRICING
                    </div>
                    <h3 className="text-[#183B56] font-bold text-[32px] lg:text-[36px] mb-3">
                        Choose the plan that’s right for your business
                    </h3>
                    <div className="text-[#183B56] text-[18px]">
                        <span className="font-semibold">
                            Start with the Free plan {""}
                        </span>
                        <span className="text-[#5A7184]">
                            to try out our platform for an unlimited period of time. {""}
                        </span>
                        <span className="font-semibold text-[#1565D8]">
                            Get started
                            <i className="fas fa-arrow-right ml-2" />
                        </span>
                    </div>
                    <motion.div
                        className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-10"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <VoucherCard
                            type="Standard"
                            color="#183B56"
                            amount="$39"
                            description="All the basics for businesses that are just getting started."
                            desList={["Single project use", "Basic dashboard", "All components included"]}
                            additionalClassNameButton="w-full justify-between"
                            buttonColor="#1565D8"
                            buttonBg="#FFFFFF"
                            buttonBorderColor="#1565D8"
                        />
                        <VoucherCard
                            type="Essentials"
                            color="#36B37E"
                            amount="$99"
                            description="Better for growing businesses that want more customers."
                            desList={["Unlimited project use", "Advanced dashboard", "All components included", "Advanced insight"]}
                            additionalClassNameButton="w-full justify-between"
                            buttonColor="#1565D8"
                            buttonBg="#FFFFFF"
                            buttonBorderColor="#1565D8"
                        />
                        <VoucherCard
                            type="Premium"
                            color="#1565D8"
                            amount="$339"
                            description="Advanced features for pros who need more customization."
                            desList={["Unlimited project use", "Advanced dashboard", "Multivariate components", "Phone Support"]}
                            additionalClassNameButton="w-full justify-between"
                            buttonColor="#FFFFFF"
                            buttonBg="#1565D8"
                            buttonBorderColor="#1565D8"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer Section */}
            <footer className="mt-32 xl:mx-32 lg:mx-20 mx-10">
                <motion.div
                    className="flex xl:flex-row lg:flex-row flex-col gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="text-left space-y-4 xl:w-[30%] lg:w-[30%] w-full pr-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <Image src={"/assets/icons/logo_dark.svg"} alt="logo_dark" width={90} height={28} loading="lazy" />
                        <div className="text-[#5A7184] text-[16px]">
                            Build a modern and creative website with crealand
                        </div>
                        <div className="flex gap-2">
                            <motion.div
                                className="bg-[#EFF1F4] rounded-full w-[42px] h-[40px] flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image
                                    src={"/assets/icons/google_logo.svg"}
                                    alt="Google Logo"
                                    width={16}
                                    height={18}
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div
                                className="bg-[#EFF1F4] rounded-full w-[42px] h-[40px] flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image
                                    src={"/assets/icons/twitter_logo.svg"}
                                    alt="Twitter Logo"
                                    width={16}
                                    height={18}
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div
                                className="bg-[#EFF1F4] rounded-full w-[42px] h-[40px] flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image
                                    src={"/assets/icons/instagram_logo.svg"}
                                    alt="Instagram Logo"
                                    width={14}
                                    height={18}
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div
                                className="bg-[#EFF1F4] rounded-full w-[42px] h-[40px] flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image
                                    src={"/assets/icons/linkedin_logo.svg"}
                                    alt="Linkedin Logo"
                                    width={14}
                                    height={18}
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 xl:w-[70%] lg:w-[70%] w-full gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <FooterCard
                            title="Product"
                            itemList={["Landingpage", "Features", "Documentation", "Referral Program", "Pricing"]}
                        />
                        <FooterCard
                            title="Services"
                            itemList={["Documentation", "Design", "Themes", "Illustrations", "UI Kit"]}
                        />
                        <FooterCard
                            title="Company"
                            itemList={["About", "Terms", "Privacy Policy", "Careers"]}
                        />
                        <FooterCard
                            title="More"
                            itemList={["Documentation", "License", "Changelog"]}
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                >
                    <Image src="/assets/icons/heart.svg" alt="heart" width={56} height={56} loading="lazy" />
                    <p className="text-[#5A7184] font-semibold text-[16px] mt-5">
                        Copyright © 2019. Crafted with love.
                    </p>
                </motion.div>
            </footer>
        </div>
    );
};

export default HomePage;
