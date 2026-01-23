"use client";

import Image from "next/image";

interface Props {
  header: string;
  p: string;
  btnText: string;
  imgPath: string;
}

export default function CallToAction({ header, p, btnText, imgPath }: Props) {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0  -z-10 bg-linear-to-b from-black/10 via-[#500790] to-black/10 blur-3xl" />

      <div className="mx-auto md:w-[65%] max-w-screen-2xl rounded-2xl border border-white/10 bg-white/15 backdrop-blur-2xl p-6">
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-stretch">
    
    {/* LEFT */}
    <div className="flex h-full flex-col justify-center">
      <h3 className="text-4xl font-semibold pr-16 text-white">
        {header}
      </h3>

      <p className="mt-3 max-w-md text-base">
        {p}
      </p>

      <form className="mt-8 space-y-2">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <input
          type="text"
          placeholder="Project Type"
          className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />

        <input
          type="text"
          placeholder="Budget"
          className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />

        <textarea
          placeholder="Message"
          rows={3}
          className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 to-fuchsia-600 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          {btnText}

          <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendMode: "screen" }}>
              <rect
                x="31.8071"
                width="15.2675"
                height="31.8072"
                transform="rotate(90 31.8071 0)"
                fill="url(#pattern0)"
              />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#image0"
                  transform="matrix(0.0127564 -0.00722969 0.0150618 0.00612309 -0.849119 0.572321)"
                />
              </pattern>
              <image
                id="image0"
                width="100"
                height="100"
                preserveAspectRatio="none"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAA..."
              />
            </defs>
          </svg>
        </button>
      </form>
    </div>

    {/* RIGHT */}
    <div className="relative flex items-center justify-center">
      <Image
        src={imgPath}
        alt="cta"
        width={760}
        height={820}
        className="rounded-lg"
      />
    </div>

  </div>
</div>

    </section>
  );
}
