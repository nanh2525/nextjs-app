
type FooterCardProps = {
    title: string;
    itemList: string[];
}

const FooterCard = (props: FooterCardProps) => {
    const { title, itemList } = props;

    return (
        <div className="space-y-4 text-left">
            <div className="text-[#183B56] font-bold text-[18px]">
                {title}
            </div>
            <div className="flex flex-col gap-2 space-y-4">
                {itemList?.map((item, index) => (
                    <div key={index} className="text-[#183B56] text-[16px]">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FooterCard;