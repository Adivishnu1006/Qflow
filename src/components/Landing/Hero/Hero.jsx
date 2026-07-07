import PhoneMockup from '@/components/Landing/PhoneMockup/PhoneMockup.jsx';
function Hero() {
  const industries = [
    "Hospitals",
    "Banks",
    "Government",
    "Restaurants",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-12 xl:px-20">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Smart Digital Queue Platform
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                Your Time Is Too Valuable
                <br />
                to <span className="text-blue-600">Wait</span> in Queues.
              </h1>

              <p className="text-lg leading-8 text-slate-600">
                Join queues remotely, track your turn in real time,
                and arrive exactly when youre needed.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700">
                Join Queue
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-50">
                For Businesses
              </button>
            </div>

            {/* Industry Tags */}
            <div className="flex flex-wrap gap-3">
              {industries.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex items-center justify-center">
            <div className="flex h-[620px] w-[340px] items-center justify-center rounded-[32px] border border-slate-200 bg-white shadow-xl">
              <p className="text-center text-slate-500">
                
                <PhoneMockup />
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;