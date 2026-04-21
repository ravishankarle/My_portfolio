import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="flex flex-col gap-6 w-full">
             <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex items-center justify-between w-full text-gray-500">
                    <div className="flex items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/ldrp-logo.jpg"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Master of Computer Application
                            </h3>
                            <div>LDRP-ITR (KSV) - Gandhinagar.</div>
                        </div>
                    </div>
                    <div>2024 - 2026</div>
                </div>
                <p className="mt-6 text-gray-500">I am pursuing / have completed my master's degree to deepen my knowledge and gain advanced understanding in my field. This phase has helped me enhance my technical skills, explore modern technologies, and work on more complex projects. It has also improved my analytical thinking, research ability, and overall confidence as a developer.</p>
            </div>

            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex items-center justify-between w-full text-gray-500">
                    <div className="flex items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/logo.png"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Bachelor of Science
                            </h3>
                            <div>Veer Kunwar Singh University</div>
                        </div>
                    </div>
                    <div>2018 - 2022</div>
                </div>
                <p className="mt-6 text-gray-500">I completed my bachelor's degree in a relevant field where I built a strong foundation in programming and web development concepts. During this time, I learned core subjects like databases, software development, and basic web technologies. I also worked on small academic projects, which helped me understand practical implementation and improved my problem-solving skills.</p>
            </div>
            </div>

        </Section>
    );
}
