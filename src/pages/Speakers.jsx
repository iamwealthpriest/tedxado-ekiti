import SpeakersList from '../constants/SpeakersList';
import ProfileCard from "../components/ProfileCard";
import { teamMembers } from "../constants/team";
import JoinOurCommunity from '../components/JoinOurCommunity';

const Speakers = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen w-full bg-black text-white relative">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/src/assets/backdrop.png')" }}
                ></div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-24">
                    <h3 className="text-4xl md:text-5xl m-[80px] text-[48px] font-bold font-bricolage">
                        Meet the Voices
                    </h3>
                    <p className="text-gray-300 text-base text-[24px] font-[100] leading-relaxed space-y-4">
                        For years, Ekiti has been called quiet. Remote. Passed over.
                        But we see it differently. We see a seedbed.
                        <br />
                        We believe ideas don’t only come from capital cities. That brilliance isn’t bound by traffic lights or skyscrapers.
                        That the places we come from still hold the power to shape where we are going.
                        <br />
                        TEDxAdoEkiti is more than an event. It is a signal. A shift.
                        A chance to make the world look again. At Ekiti. At overlooked places.
                        At people who stayed.
                    </p>
                    <p className="text-red-500 font-medium text-base text-[24px] mt-8">
                        Because here in this dry land, something fertile is rising
                    </p>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="bg-black px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Title with red underline */}
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-bricolage inline-block">Our Speakers</h2>
                        <div className="w-80 h-1 bg-red-600 mt-2"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {SpeakersList.map((speaker, index) => (
                            <div
                                key={index}
                                className="relative group rounded overflow-hidden aspect-[3/4] bg-black"
                            >
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-fit h-fit object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition duration-300 ease-in-out"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-3">
                                    <p className="font-semibold text-sm">{speaker.name}</p>
                                    <p className="text-xs text-gray-300">{speaker.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Our Panelists Section */}
            <section>
                <div className="bg-black py-10 sm:px-4">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-bricolage inline-block">Our Panelists</h2>
                        <div className="w-80 h-1 bg-red-600 mt-2"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-5">
                        {teamMembers.map((member, index) => (
                            <ProfileCard
                                key={index}
                                image={member.image}
                                name={member.name}
                                role={member.role}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join our community Section */}
            <JoinOurCommunity />
        </>
    );
};

export default Speakers;