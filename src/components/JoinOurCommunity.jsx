import Button from '../components/Button';

const JoinOurCommunity = () => {
    return (
        <section className="bg-black text-white py-10 px-4 relative absolute bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("src/assets/Community-bg.png")' }}>
            <div className="absolute opacity-30"></div>
            <div className="relative z-10">
                <h2 className="text-4xl ml-8 mb-4 text-left font-bricolage font-[400] text-red-500">Join our community</h2>
                <p className="mx-auto font-[100] text-[20px] ml-8 text-left text-base leading-relaxed mb-2">
                    Be part of a growing network turning Ado-Ekiti into a beacon of innovation and possibility.
                    <br />
                    We’re connecting dreamers, doers, and disruptors from deep roots to distant horizons.
                    <br />
                    If you believe transformation can start anywhere, start here.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4 bg-black py-6 px-4 w-full max-w-3xl text-white">
                    {/* Email Input + Subscribe Button */}
                    <div className="relative w-full md:w-[400px]">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full bg-[#1f1f1f] text-gray-300 placeholder-gray-400 rounded md:rounded-lg py-4 px-5 pr-10 focus:outline-none" />
                        <div className="absolute top-1/2 right-2 -translate-y-1/2">
                            <Button
                                text="Subscribe"
                                className={`${"btn-orange"} text-base p-2 m-5 rounded-r-md`} />
                        </div>
                    </div>
                    {/* OR */}
                    <span className="text-gray-400 font-semibold">OR</span>

                    {/* WhatsApp Button */}
                    <div className="gap-2 px-5 py-3">
                        <Button
                            icon={<img src="src/assets/whatsapplogo.png" alt="Whatsapp Logo" className="text-white text-lg" />}
                            text="Join on Whatsapp"
                            className={`${"btn-black"} text-base flex items-center gap-2 px-5 py-3`}
                            link="https://chat.whatsapp.com/Bx1o5wDPuXY5tSEpMKbUMR"
                        />
                    </div>
                </div>
            </div >
        </section >
    )
}

export default JoinOurCommunity;