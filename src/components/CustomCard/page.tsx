'use client'

import { motion } from 'framer-motion';

export const Direction = {
    col: "col",
    row: "row",
};

type DirectionType = keyof typeof Direction;

type CustomCardProps = {
    direction: DirectionType;
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
    textLeft?: boolean;
    bgIconColor?: string;
    borderIconColor?: string;
    iconWidth?: number;
};

const CustomCard = (props: CustomCardProps) => {
    const { direction, icon, title, description, link, textLeft, bgIconColor, borderIconColor, iconWidth } = props;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex ${direction === Direction.col ? "flex-col" : "flex-row items-start"
                } p-4 hover:shadow-md`}
        >
            {/* Icon */}
            <div
                className={`flex ${textLeft ? 'justify-start' : 'justify-center'} items-start ${direction === Direction.row ? 'xl:mr-5 mr-3' : 'mb-5'}`}
            >
                <div
                    className="p-3 rounded-[16px] shadow-sm"
                    style={{
                        backgroundColor: bgIconColor,
                        border: `1px solid ${borderIconColor}`
                    }}
                >
                    <div className="border-2 border-dashed border-[#9a9a9a] p-1">
                        <div
                            className=" flex items-center justify-center"
                            style={{
                                width: iconWidth
                            }}
                        >
                            {icon}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={`${textLeft ? 'text-left' : 'text-center'}`}>
                <h3 className="text-[20px] font-semibold text-[#183B56] mb-2">{title}</h3>
                <p className="text-[16px] text-[#5A7184]">{description}</p>

                {/* Optional Link */}
                {link && (
                    <a
                        href={link}
                        className="text-[18px] font-bold text-[#1565D8] mt-3 flex justify-center items-center gap-2 hover:gap-4 transition-all duration-300"
                    >
                        Learn more
                        <i className="fas fa-arrow-right" />
                    </a>
                )}
            </div>
        </motion.div>

    );
};

export default CustomCard;
