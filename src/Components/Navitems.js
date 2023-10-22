const Navitems = () => {
    const items = [
        {
            id: 0,
            link: "Home",
            to:"/"
        },
        {
            id: 1,
            link: "About",
            to:"#about"
        },
        {
            id: 2,
            link: "Services",
            to:"#services"
        },
        {
            id: 3,
            link: "Projects",
            to:"#projects"
        },
        {
            id: 4,
            link: "Experience",
            to:"#experience"
        },
    ]

    return { items}
}
 
export default Navitems;