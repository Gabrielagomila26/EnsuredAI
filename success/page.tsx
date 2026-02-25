// @ts-nocheck

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-slate-900/70">
        {/* Accent gradient */}
        <div className="pointer-events-none absolute -top-32 -right-10 h-52 w-52 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-10 h-52 w-52 rounded-full bg-brand-800/40 blur-3xl" />

        <section className="relative px-6 py-8 sm:px-8 sm:py-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-100 ring-1 ring-brand-400/40">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-300" />
            Payment confirmed
          </div>

          <div className="mt-5 space-y-3">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Thank you for your purchase.
            </h1>
            <p className="text-sm text-slate-300 sm:text-base">
              Your payment was processed successfully and your receipt has been sent to your
              email. You now have full access to your assessment results and next-step
              resources.
            </p>
          </div>

          <div className="mt-6 space-y-4 rounded-2xl bg-slate-900/70 p-4 text-sm text-slate-200">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-slate-100">What happens next?</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-brand-300" />
                <span>
                  You&apos;ll receive an email confirmation with a summary of your purchase.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-brand-300" />
                <span>
                  Your upgraded access is available immediately—no additional setup required.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-brand-300" />
                <span>
                  If you booked a consultation, you&apos;ll also receive a calendar invite
                  shortly.
                </span>
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
            <a
              href="/results"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-900/50 transition hover:bg-brand-400"
            >
              View my results
            </a>
          </div>

          <p className="mt-4 text-[0.7rem] text-slate-500">
            Need help with your purchase?{" "}
            <a href="mailto:support@example.com" className="text-slate-200 underline-offset-4 hover:underline">
              Contact our support team
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

