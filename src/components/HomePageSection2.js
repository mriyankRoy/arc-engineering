import React from "react";

const HomePageSection2 = () => {
  return (
    <div>
      <section className="bg-[#0E1117] text-white px-6 py-20 rounded-4xl m-2">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left Panel: Chat Simulation */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">
                About Us
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                Customer outreach has never been easier.
              </h2>
            </div>

            <div className="bg-[#1A1D24] rounded-2xl p-6 shadow-lg text-gray-300">
              <p className="mb-4 text-sm">
                I got your details from Megan Dunfold and she mentioned Vandelay
                was looking for an AST. I think we've got the best AST on the
                market right now and would love to chat about it.
              </p>

              <div className="flex gap-4 items-start mb-4">
                <img
                  src="https://i.pravatar.cc/40?img=10"
                  alt="Doug Jacobs"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-sm space-y-1">
                  <p className="font-semibold text-white">
                    Doug Jacobs · CSO at Vandelay Industries
                  </p>
                  <p>
                    <span className="text-red-400">
                      I'm actually on vacation this week{" "}
                    </span>
                    <span className="bg-yellow-600 text-xs rounded px-1 ml-1">
                      lie detected
                    </span>
                  </p>
                  <p>
                    <span className="text-yellow-300">
                      I'm not sure what my availability is
                    </span>
                    <span className="bg-orange-500 text-xs rounded px-1 ml-1">
                      unlikely
                    </span>
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <input
                  type="text"
                  placeholder="Write message..."
                  className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Your bot is typing...
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Integration Cloud */}
          <div className="bg-[#1A1D24] rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Integrations
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Meet leads where they are
              </h3>
              <p className="text-sm text-gray-400">
                With thousands of integrations, no one will be able to escape
                your cold outreach.
              </p>
            </div>

            <div className="relative mt-6 h-[300px] bg-dotted-pattern rounded-xl flex flex-wrap justify-center items-center gap-4 p-4">
              {[
                "Gmail",
                "Microsoft Teams",
                "Google Calendar",
                "Discord",
                "Slack",
                "Adobe Creative Cloud",
                "Zoom",
              ].map((tool, i) => (
                <span
                  key={i}
                  className="text-sm bg-[#2C2F36] text-white px-3 py-1 rounded-full shadow"
                >
                  {tool}
                </span>
              ))}
              <div className="absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xl">
                ●
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageSection2;
