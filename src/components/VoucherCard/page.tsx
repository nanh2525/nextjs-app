import Image from "next/image";
import Button from "../Button/page";
import { motion } from 'framer-motion';

type VoucherCardProps = {
    type: string;
    color: string;
    amount: string;
    description: string;
    desList: string[];
    additionalClassNameButton?: string;
    buttonColor: string;
    buttonBg: string;
    buttonBorderColor: string;
};

const VoucherCard = (props: VoucherCardProps) => {
    const { type, color, amount, description, desList, additionalClassNameButton, buttonColor, buttonBg, buttonBorderColor } = props;

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-white text-left rounded-[8px] relative pb-28"
            style={{
                boxShadow: '0px 10px 35px 0px #00000008',
                borderTop: `3px solid ${color}`
            }}
        >
            <div className="relative">
                <div className="space-y-4 mb-8">
                    <div>
                        <span style={{ color: color }} className="text-[40px] font-bold">
                            {amount}
                        </span>
                        <span className="text-[#5A7184] text-[16px]">{" "}/month</span>
                    </div>
                    <div className="text-[#183B56] text-[24px] font-bold">{type}</div>
                    <div className="text-[#5A7184] text-[16px]">{description}</div>
                </div>
                <div className="border-t border-[#E5EAF4] mb-8"></div>
                <div className="flex flex-col gap-2 space-y-4">
                    {desList?.map((des, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Image src="/assets/icons/check.svg" alt="check icon" width={24} height={24} />
                            <span className="text-[#5A7184] text-[16px]">{des}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full px-5 pb-8">
                <Button
                    title="Get Started"
                    color={buttonColor}
                    bgColor={buttonBg}
                    borderColor={buttonBorderColor}
                    icon={<i className="fas fa-arrow-right" />}
                    additionalClassName={additionalClassNameButton}
                />
            </div>
        </motion.div >
    );
};

export default VoucherCard;
