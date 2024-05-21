import Link from "next/link";

const CoverSection = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-5 relative z-10 w-full text-center">
                <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Harmonize Your Journey: Master the Symphony of Music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Immerse Yourself in Our All-Encompassing Music Courses and Elevate Your Musical Voyage Today. Whether You're Just Starting Out or Seeking to Hone Your Expertise, Join Us to Unleash Your True Potential.</p>
                <div className="mt-4">
                    <Link href='/courses'>Explore Us</Link>

                </div>
                
            </div>
        </div>
    );
};

export default CoverSection;