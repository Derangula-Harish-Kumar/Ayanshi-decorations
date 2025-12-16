import { Link } from 'react-router-dom';

export function ImagesShow(){
    const categories = [
        {
            title: "Mandapam Decoration",
            bgColor: "#D2FCED",
            path: "/decorations/mandapam-decoration"
        },
        {
            title: "Wedding Decorations",
            bgColor: "#FEE5EC",
            path: "/decorations/wedding-decorations"
        },
        {
            title: "Haldi Decoration",
            bgColor: "#FEF7C3",
            path: "/decorations/haldi-decoration"
        },
        {
            title: "Pandiri Designs",
            bgColor: "#c8eaf8",
            path: "/decorations/pandiri-designs"
        },
        {
            title: "Birthday Partys",
            bgColor: "#77aba4",
            path: "/decorations/birthday-partys"
        }
    ];

    return(
        <>
        <div className='fle flex-wrap items-center content-center w-full mt-[3vw] p-5 lg:p-15  '>
            {categories.map((category, index) => (
                <Link to={category.path} key={index} className="w-full mb-[3vw]">
                    <div className={`relative text-center flex items-center w-[100%] shadow-lg p-4 py-10 bg-[${category.bgColor}] rounded-2xl`}>
                        <p className="pl-5 font-bold font-Charm sm:text-lg md:text-xl lg:text-5xl">{category.title}</p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
}