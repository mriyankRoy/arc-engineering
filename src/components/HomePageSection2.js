import React from "react";

const HomePageSection2 = () => {
  return (
    <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8">
      <section className="bg-[#0E1117] text-white px-6 m-2 relative rounded-3xl sm:rounded-4xl isolate overflow-hidden py-24 sm:py-32 shadow-xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left Panel: Chat Simulation */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">
                About Us
              </p>
              <h2 className="text-4xl font-bold leading-tight pt-5">
                Art GenPower Solutions Limited Your Partner for Containerized
                Power Solutions in the UK & Europe
              </h2>
            </div>

            {/* <div className="bg-[#1A1D24] rounded-2xl p-6 shadow-lg text-gray-300">
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
            </div> */}
            <div className="bg-[#1A1D24] rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Company Overview
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Bringing Global Manufacturing Excellence to Your Local Power Needs.
              </h3>
              <p className="text-lg text-gray-400">
                Art GenPower Solutions Limited is a dynamic, UK-based specialist
                in the supply and distribution of customized containers for
                generators, E-houses, and E-Pods across the United Kingdom and
                throughout Europe. We leverage strong strategic partnerships
                with leading manufacturers, Ace Crane and Engineering and ESI
                Engineering. Their manufacturing facilities are based in the
                UAE, India, and several other global locations. This unique
                collaboration allows us to combine their world-class
                manufacturing capabilities with our dedicated local expertise in
                sales, logistics, and technical support, providing our clients
                with robust, cost-effective, and rapidly deployable power
                solutions.
              </p>
            </div>
          </div>
          </div>

          {/* Right Panel: Integration Cloud */}
          <div className="bg-[#1A1D24] rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Company Overview
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Bringing Global Manufacturing Excellence to Your Local Power Needs.
              </h3>
              <p className="text-lg text-gray-400">
                Art GenPower Solutions Limited is a dynamic, UK-based specialist
                in the supply and distribution of customized containers for
                generators, E-houses, and E-Pods across the United Kingdom and
                throughout Europe. We leverage strong strategic partnerships
                with leading manufacturers, Ace Crane and Engineering and ESI
                Engineering. Their manufacturing facilities are based in the
                UAE, India, and several other global locations. This unique
                collaboration allows us to combine their world-class
                manufacturing capabilities with our dedicated local expertise in
                sales, logistics, and technical support, providing our clients
                with robust, cost-effective, and rapidly deployable power
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageSection2;
