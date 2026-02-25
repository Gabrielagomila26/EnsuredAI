// @ts-nocheck

export default function PaymentCancelledPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-slate-900/70">
        {/* Accent gradient */}
        <div className="pointer-events-none absolute -top-32 -right-10 h-52 w-52 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-10 h-52 w-52 rounded-full bg-brand-900/40 blur-3xl" />

        <section className="relative px-6 py-8 sm:px-8 sm:py-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/80">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
            Checkout cancelled
          </div>

          <div className="mt-5 space-y-3">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Your payment wasn&apos;t completed.
            </h1>
            <p className="text-sm text-slate-300 sm:text-base">
              It looks like you closed the window or went back a step before finishing your
              purchase. No charges were made.
            </p>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl bg-slate-900/70 p-4 text-sm text-slate-200">
            <p className="font-medium text-slate-100">You can:</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-brand-300" />
                <span>Try your payment again if you still want access.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-brand-300" />
                <span>Return to your results or home page to keep exploring.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-brand-300" />
                <span>Reach out to our team if something didn&apos;t work as expected.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Back to home
            </a>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/results"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                View my results
              </a>
              <a
                href="/pay"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-900/50 transition hover:bg-brand-400"
              >
                Return to checkout
              </a>
            </div>
          </div>

          <p className="mt-4 text-[0.7rem] text-slate-500">
            Think this was a mistake or need help completing your payment?{" "}
            <a
              href="mailto:support@example.com"
              className="text-slate-200 underline-offset-4 hover:underline"
            >
              Contact our support team
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
