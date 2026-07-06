import FloatingCard from '@/components/FloatingCard/FloatingCard.jsx';

function PhoneMockup() {
  return (
    <div className="relative">

      {/* Blue Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
    <div className="h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl"></div>
  </div>
  {/* Floating Notification */}
  <FloatingCard
    icon="🔔"
    title="Queue Update"
    subtitle="Your turn in 12 mins"
    className="-top-6 -right-24"
  />

  {/* Floating Coffee */}
  <FloatingCard
    icon="☕"
    title="Relax"
    subtitle="Grab a coffee nearby"
    className="bottom-20 -left-24"
  />

  {/* Floating Location */}
  <FloatingCard
    icon="📍"
    title="Nearby"
    subtitle="5 mins away"
    className="bottom-6 -right-24"
  />
      {/* Phone */}
     <div className="h-[650px] w-[340px] overflow-hidden rounded-[42px] border-[10px] border-slate-900 bg-white shadow-2xl">
        {/* Dynamic Island */}
        <div className="flex justify-center pt-3">
          <div className="h-6 w-28 rounded-full bg-black"></div>
        </div>

        {/* Screen */}
       <div className="px-6 py-6">

  {/* Hospital Info */}
  <div className="space-y-1">
    <p className="text-xs text-slate-500">Welcome Back</p>

    <h2 className="text-xl font-bold">
      Apollo Hospital
    </h2>

    <p className="text-sm text-slate-500">
      General Consultation
    </p>
  </div>

  {/* Token Card */}
  <div className="mt-6 rounded-3xl bg-blue-600 p-8 text-center text-white shadow-lg">

    <p className="text-sm uppercase tracking-widest">
      Token
    </p>

    <h1 className="mt-2 text-6xl font-black">
      A042
    </h1>

  </div>

  {/* 👇 INSERT GRID HERE */}
  <div className="mt-6 grid grid-cols-2 gap-4">

    <div className="rounded-2xl bg-slate-100 p-4">
      <p className="text-xs text-slate-500">People Ahead</p>
      <h3 className="text-2xl font-bold">4</h3>
    </div>

    <div className="rounded-2xl bg-slate-100 p-4">
      <p className="text-xs text-slate-500">ETA</p>
      <h3 className="text-2xl font-bold">12 mins</h3>
    </div>

    <div className="rounded-2xl bg-slate-100 p-4">
      <p className="text-xs text-slate-500">Counter</p>
      <h3 className="text-2xl font-bold">3</h3>
    </div>

    <div className="rounded-2xl bg-slate-100 p-4">
      <p className="text-xs text-slate-500">Status</p>
      <h3 className="text-lg font-bold text-green-600">
     <span className="rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm font-semibold">
Waiting
</span>
      </h3>
    </div>

  </div>

  {/* QR Placeholder */}
  <div className="mt-6 flex justify-center rounded-2xl bg-slate-100 p-6">
    QR CODE
  </div>

</div>
      </div>

    </div>
  );
}

export default PhoneMockup;