import Link from "next/link";

type SectionProps = {
    title?: string;
    link?: string;
    children?: SectionProps[];
}

const Section = (props: SectionProps) => {
    const { title, link, children } = props;

    return (
        <div className="mx-auto max-w-screen-lg px-3">
            <div className="text-center">
                {title && link && (
                    <p className="font-bold text-white">
                        <Link href={link}>
                            {title}
                        </Link>
                    </p>
                )}
            </div>
        </div>
    )
}
export default Section;