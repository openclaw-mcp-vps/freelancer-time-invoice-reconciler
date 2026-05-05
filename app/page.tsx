export default function Page() {
  const faqs = [
    {
      q: "Which time tracking and invoicing tools are supported?",
      a: "TimeSync connects to Toggl, Harvest, and Clockify for time tracking, and QuickBooks, FreshBooks, and Wave for invoicing — with more integrations on the roadmap."
    },
    {
      q: "How does the reconciliation work?",
      a: "We sync your time entries and invoices via webhooks and APIs, then automatically flag any hours that haven't been billed and any invoice amounts that don't match your tracked time."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Invoice Reconciliation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Losing Money to{" "}
          <span className="text-[#58a6ff]">Unbilled Hours</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TimeSync automatically matches your time tracking data with invoices — flagging missed billables and discrepancies before they cost you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Feature pills */}
      <section className="flex flex-wrap justify-center gap-3 mb-20">
        {["Toggl", "Harvest", "Clockify", "QuickBooks", "FreshBooks", "Wave"].map((tool) => (
          <span key={tool} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">
            {tool}
          </span>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited time entry syncs",
              "Connect all 6 integrations",
              "Real-time discrepancy alerts",
              "Webhook-based auto-sync",
              "Unbilled hours dashboard",
              "Email digest reports"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started — $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} TimeSync. All rights reserved.
      </footer>
    </main>
  );
}
