import { useState } from "react";
import ProjectDescription from "../components/ProjectDescription";
import ProjectTitle from "../components/ProjectTitle";

const projects = [
    { title: 'Portfolio website', description: 'I taught myself how to build websites with React and javascript in order to build this website I believe ' },

];

function Portfolio(props) {

    let [project, setProject] = useState(null);

    const selectedProject = project === null ? null : projects[project];

    const projectComponents = projects.map((project, index) => <button onClick={() => setProject(index)}>{project.title}</button>)

    let hasProject = selectedProject !== null;

    return (
        <div className='h-screen w-full flex' id="portfolio">
            <div className="flex flex-row m-8 flex-grow">
                <div className={"flex flex-col transition-all "
                    + (hasProject ? 'flex-1 flex-grow' : 'w-0')}
                >
                    <h2 className={"text-center text-3xl transition-all duration-1000 "
                        + (hasProject ? 'text-white' : 'text-transparent')}
                    >
                        {selectedProject?.title}
                    </h2>
                    <div className="flex-grow relative">
                        <div className={"rounded-xl transition-all overflow-clip "
                            + "border-purple-400 border-2 m-4 bg-black bg-opacity-20 "
                            + "delay-500 duration-1000 "
                            + (hasProject ? 'h-[97%]' : 'h-0')}
                        >
                            {/* TODO: Fix that h-[97%] bs */}
                            <p className={"m-4 transition-all duration-1000 "
                                + (hasProject ? 'text-white' : 'text-transparent')}
                            >
                                {selectedProject?.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-500 flex-grow flex-col flex flex-1">
                    {projectComponents}
                    <button onClick={() => setProject(null)}>NONE</button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio