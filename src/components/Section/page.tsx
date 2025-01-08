"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

type SectionProps = {
    title?: string;
    link?: string;
    hasChildren?: boolean;
};

const Section = (props: SectionProps) => {
    const { title, link, hasChildren } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <motion.div
            whileHover={{ y: -3 }}
            className="mx-auto max-w-screen-lg px-3"
        >
            <div className="text-center">
                {title && link && (
                    <p
                        className="font-bold text-white cursor-pointer flex justify-center items-center"
                        onClick={toggleExpand}
                    >
                        <Link href={link}>{title}</Link>
                        {hasChildren && (
                            <i
                                className={`fas ml-1 transition-all duration-300 fa-angle-down ${isExpanded ? 'rotate-180' : ''}`}
                            />
                        )}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default Section;
