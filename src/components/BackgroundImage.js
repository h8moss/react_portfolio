import space from '../assets/space.jpg';

export default function BackgroundImage(props) {
    return (
        <div>
            < div style={{ backgroundImage: `url(${space})` }}
                className='absolute top-0 left-0 
            w-full h-full bg-fixed bg-cover'
            />
            <div className='fixed bottom-1 right-1'>
                <p className="text-xs ">
                    Background by <a
                        className="font-bold"
                        href="https://www.pexels.com/@alberlan?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
                        target='_blank'
                        rel="noreferrer"
                    >Alberlan Barros
                    </a> from <a
                        href="https://www.pexels.com/photo/space-telescope-galaxy-exploration-7311920/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
                        className="font-bold"
                        target='_blank'
                        rel="noreferrer"
                    >Pexels</a>
                </p>
            </div>
        </div>
    );
}