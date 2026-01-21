import Image from "next/image";

const ContactUs = () => {
  return (
    <div>
      <Image
        src={"/images/contact-us/Rectangle.png"}
        alt="bg"
        width={1500}
        height={1500}
        className="absolute z-20 top-0 w-screen  left-0  object-cover"
      />
      <Image
        src={"/images/contact-us/grad.png"}
        alt="bg"
        width={1200}
        height={1200}
        className="absolute z-10 top-0 w-screen  left-0  object-cover"
      />
      <div className="max-w-screen-2xl mx-auto relative py-20 z-20">
        <h1 className="text-3xl md:text-6xl md:w-[40%] w-full mx-auto text-center font-bold">
          Wondering if Dexnive is the right fit?
        </h1>
        <p className="text-base md:w-[40%]  w-[95%] pt-4 mx-auto text-center">
          Talk to our team today and make your decision. Because the best
          partnerships start with the right questions, not rushed decisions.
        </p>
        <form className="w-[50%] mx-auto space-y-2 mt-24">
          <div className="flex gap-4">
            <div className="w-full space-y-2">
              <label className="text-sm font-medium text-white">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-[#840ECD] bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <div className="w-full space-y-2">
              <label className="text-sm font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-[#840ECD] bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full space-y-2">
              <label className="text-sm font-medium text-white">
                Project Type
              </label>
              <input
                type="text"
                placeholder="Project Type"
                className="w-full rounded-lg border border-[#840ECD] bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <div className="w-full space-y-2">
              <label className="text-sm font-medium text-white">Budget</label>
              <input
                type="text"
                placeholder="Budget"
                className="w-full rounded-lg border border-[#840ECD] bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Message</label>
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full rounded-lg border border-[#840ECD] bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="
              mt-1
    h-4 w-10
    appearance-none
    rounded
    border-2 border-purple-600
    bg-transparent
    checked:bg-purple-600
    checked:before:content-['✓']
    checked:before:text-white
    checked:before:text-[12px]
    checked:before:font-bold
    checked:before:flex
    checked:before:items-center
    checked:before:justify-center
    checked:before:w-full
    checked:before:h-full
    checked:before:absolute
    relative
    focus:outline-none
    focus:ring-0
    outline-none
    focus:ring-purple-500
  "
            />

            <label htmlFor="terms" className="text-sm text-white/70">
              By checking this box, I agree to receive SMS from LaunchBox Global
              at the phone number provided. Msg & data rates may apply. Msg
              frequency varies. For help, reply HELP or email us at
              hello@launchboxglobal.com. You can opt out at any time by replying
              STOP. Privacy & Policy & Terms and Conditions.
            </label>
          </div>

          <button
            type="submit"
            className="flex mx-auto px-8 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#840ECD] to-[#53029B] py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore the Possibilities
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
