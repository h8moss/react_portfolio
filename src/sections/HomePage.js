import Description from "../components/Description";
import BackgroundImage from "../components/BackgroundImage";
import StyledButton from "../components/StyledButton";

export default function HomePage(props) {
    return (
        <div className='h-screen w-full flex flex-col overflow-hidden m-0' id='home'>
            <div className=" flex flex-col text-center h-full w-full">
                <div className="flex-1 flex justify-center flex-col">
                    <h1 className="text-5xl quicksand-font ">
                        My name is Daniel Armenta
                    </h1>
                </div>
                <div className="flex-1">
                    <Description />
                </div>
                <div className="flex-1 h-max justify-items-start flex flex-col">
                    <div className="flex flex-row justify-around">
                        <StyledButton extraClass='hover:text-red-500' href='#portfolio'>See what I've built</StyledButton>
                        <StyledButton extraClass='hover:text-purple-500'>Contact me</StyledButton>
                        <StyledButton extraClass='hover:text-blue-500'>Check out my socials</StyledButton>
                    </div>
                </div>
            </div>


        </div>
    );
}