import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Hotel Room Booking System",
            description:"Built a dynamic hotel booking application that allows users to search, book rooms, and make online payments.Designed an admin panel to manage rooms, users, and generate booking reports and invoices.",
            image: "/assets/project-1.png",
        },
        {
            title: "Health Care System",
            description: "The Healthcare system project is a software solution that provides sepra login function for patients,doctors,and administrators.",
            image: "/assets/project-2.png",
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center items-stretch gap-4 mr-auto">
                {projects.map((project) => (
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 w-75 border border-gray-200 rounded-xl">
                        <img
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}