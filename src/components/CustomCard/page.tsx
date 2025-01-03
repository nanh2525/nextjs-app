export const Direction = {
    col: "col",
    hoz: "hoz",
};

type DirectionType = keyof typeof Direction;

type CustomCardProps = {
    direction: DirectionType;
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
};

const CustomCard = (props: CustomCardProps) => {
    const { direction, icon, title, description, link } = props;

    return (
        <div
            className={`flex ${direction === Direction.col ? "flex-col" : "flex-row items-center"
                } p-4 hover:shadow-md`}
        >
            {/* Icon */}
            <div className="flex justify-center items-center mb-5">
                <div className="p-3 bg-[#F2F5FF] rounded-[16px] shadow-sm">
                    <div className="border-2 border-dashed border-[#9a9a9a] p-1">
                        {icon}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div>
                <h3 className="text-[20px] font-semibold text-[#183B56] mb-2">{title}</h3>
                <p className="text-[16px] text-[#5A7184]">{description}</p>

                {/* Optional Link */}
                {link && (
                    <a
                        href={link}
                        className="text-[18px] font-bold text-[#1565D8] mt-3 inline-block hover:underline"
                    >
                        Learn more
                        <i className="fas fa-arrow-right ml-2" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default CustomCard;
