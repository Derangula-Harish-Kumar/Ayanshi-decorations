import { Link } from 'react-router-dom';

export function ImagesShow(){
    const categories = [
        {
            title: "Mandapam Decoration",
            bgColor: "#D2FCED",
            path: "/mandapam-decoration",
            image: "/portfolio-images/mandapam-1.jpeg"
        },
        {
            title: "Wedding Decorations",
            bgColor: "#FEE5EC",
            path: "/wedding-decorations",
            image: "/portfolio-images/wedding-1.jpeg"
        },
        {
            title: "Haldi Decoration",
            bgColor: "#FEF7C3",
            path: "/haldi-decoration",
            image: "/portfolio-images/wedding-2.jpeg"
        },
        {
            title: "Pandiri Designs",
            bgColor: "#c8eaf8",
            path: "/pandiri-designs",
            image: "/portfolio-images/mandapam-2.jpeg"
        },
        {
            title: "Birthday Partys",
            bgColor: "#77aba4",
            path: "/birthday-partys",
            image: "/main-images/baloon.jpeg"
        }
    ];

    return(
        <>
        <div className='flex flex-wrap items-center content-center w-full mt-[3vw] p-5 lg:p-15 space-y-8 '> {/* Added space-y-8 for vertical gap */}
            {categories.map((category, index) => (
                <Link to={category.path} key={index} className="w-full"> {/* Removed mb-[3vw] */}
                    <div
                        className={`relative flex flex-col justify-center items-center w-[100%] shadow-lg p-4 py-10 rounded-2xl bg-cover bg-center h-64`}
                        style={{ backgroundImage: `url(${category.image})` }}
                    >
                        <div className={`absolute inset-0 bg-black/50 rounded-2xl`}></div> {/* Overlay for readability */}
                        <p className="relative z-10 text-white text-center font-bold font-Charm sm:text-xl md:text-3xl lg:text-6xl drop-shadow-lg">
                            {category.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
}