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

                    <div className="flex items-center justify-left bg-black py-6 px-4 text-white">
                        <div className="flex flex-wrap p-5">
                            <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="p-4 m-3 rounded-l-md text-base bg-[#2b2b2b] outline-none placeholder-gray-400" />
                            <Button
                                text="Subscribe"
                                className={`${"btn-orange"} text-base p-2 m-5 rounded-r-md`} />
                        </div>
                        <span className="text-gray-400">OR</span>
                        <div className="gap-2 px-5 py-3">
                            <Button
                                icon={<img src="src/assets/whatsapplogo.png" alt="Whatsapp Logo" className="text-white text-lg" />}
                                text="Join on Whatsapp"
                                className={`${"btn-black"} text-base flex items-center gap-2 px-5 py-3`}
                            />
                        </div>
                    </div>
                </div >
            </section >
    )
}

export default JoinOurCommunity;