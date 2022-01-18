export default function ProjectDescription({ children }) {
    return (
        <div className={"border-2 border-purple-400 rounded-xl m-5 bg-gray-700 transition-all " + children ? 'flex-grow' : 'h-0'}>
            <div className="m-5">
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
}