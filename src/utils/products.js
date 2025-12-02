export const products = [
  /* --------------------------------------------------------------------------
     CATEGORY 1 — INSTRUMENT & GENERATOR PACKAGE ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Instrument & Generator Package Accessories",
    slug: "instrument-generator-accessories",
    items: [
      {
        id: "Level Switch",
        name: "Level Switch",
        image: "https://res.cloudinary.com/dc912sjxj/image/upload/v1764170355/cld-sample-5.jpg",
        shortDescription:
          "High-precision level switch used to monitor fluid or fuel levels with exceptional reliability in industrial systems.",
        description:
          "A Level Switch is a precision point-level detection device engineered to sense the presence or absence of liquid at specific preset positions within tanks. Built with advanced technologies such as float-type mechanisms, capacitive sensing, and conductive probes, it offers instant and accurate switching to protect equipment from dry-run, cavitation, or overflow conditions. Its rugged industrial build enables stable performance even in high-temperature, high-vibration, or chemically reactive environments. These switches are essential safety components in generator day tanks, hydraulic reservoirs, chemical reactors, and large industrial fuel farms. They help ensure automated control, prevent environmental accidents, and maintain the longevity of expensive machinery by ensuring the fluid levels remain within safe operating limits.",
        uses: [
          "Point-level monitoring in diesel day tanks for generator systems",
          "High and low-level safety interlocks for industrial fuel storage",
          "Process tanks in manufacturing plants (water, chemicals, oils)",
          "Safety automation in pumping systems to prevent dry-run",
          "Municipal water treatment level control",
          "Marine and offshore vessel tank monitoring",
          "HVAC system condensate and coolant level detection"
        ],
        pdfLink: "https://res.cloudinary.com/dc912sjxj/image/upload/v1764507267/AGP_Profile_-_2025_drozrg.pdf"
      },
      {
        name: "Level Transmitter",
        image: "https://res.cloudinary.com/dc912sjxj/image/upload/v1764170349/samples/man-portrait.jpg",
        shortDescription:
          "Advanced continuous-level measurement device providing real-time monitoring for industrial tanks.",
        description:
          "A Level Transmitter is a continuous-level measurement instrument designed to monitor fluid levels with high precision and transmit real-time data to industrial control systems. Using ultrasonic, radar, differential pressure, magnetostrictive, or hydrostatic sensing technologies, level transmitters provide stable and accurate readings regardless of fluid characteristics, temperature fluctuations, or tank geometry. They eliminate manual gauging, reduce human error, and support predictive maintenance. Essential in mission-critical operations, they ensure uninterrupted generator function, maintain precise chemical dosing, and support remote monitoring through SCADA, PLC, and IIoT-based automatic control systems.",
        uses: [
          "Continuous monitoring of generator fuel tanks",
          "Real-time tank level integration with PLC/SCADA systems",
          "Industrial chemical processing plants for precise dosing",
          "Municipal water supply and wastewater management",
          "Fuel farms and bulk liquid storage terminals",
          "Oil & gas upstream and downstream tank farms",
          "Remote tank monitoring for telecom and data center generators"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "OPV – Overfill Protection Valve",
        image: "/images/opv.jpg",
        shortDescription:
          "Mechanical safety valve designed to prevent tank overfilling and accidental spills.",
        description:
          "The Overfill Protection Valve (OPV) is a critical safety mechanism engineered to automatically shut off incoming liquid flow once a tank reaches its maximum safe capacity. It prevents fuel spills, environmental contamination, and costly mechanical failures. Designed for reliability, OPVs operate mechanically without requiring electrical power—making them ideal for remote or hazardous environments. Constructed using corrosion-resistant alloys, they are suitable for diesel, aviation fuel, lubricant oils, and various industrial liquids. OPVs are mandatory in many international fuel handling safety standards, ensuring facility compliance and operational safety.",
        uses: [
          "Automatic shutoff during diesel tank refilling for generator systems",
          "Environmental protection in industrial fuel farms",
          "Petroleum terminals and fuel distribution centers",
          "Chemical processing storage tanks",
          "Remote mining, oilfield, and construction site fuel storage",
          "Aviation fuel handling and airport fuel farms",
          "Marine bunkering tanks and offshore storage"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Flame Arrestor, Vent and Desiccant Breather",
        image: "/images/flame-arrestor.jpg",
        shortDescription:
          "Flame arrestors and breathing vents that prevent explosions while enabling safe tank ventilation.",
        description:
          "Flame Arrestors and Desiccant Breathers form an essential safety system for fuel and chemical storage tanks. Flame arrestors stop flame propagation by absorbing heat and extinguishing flames before they enter the tank—preventing catastrophic explosions. Vent valves regulate internal tank pressure during thermal expansion and liquid transfer. Desiccant breathers eliminate moisture, dust, and airborne contaminants, ensuring the tank receives only clean, dry air. Combined, these components dramatically enhance tank safety, extend fuel shelf life, and protect critical industrial systems from ignition hazards, corrosion, and microbial contamination.",
        uses: [
          "Explosion prevention in diesel and chemical tanks",
          "Safe ventilation during tank filling and draining",
          "Moisture and particulate filtration for fuel quality protection",
          "Hazardous-area installations (ATEX-certified environments)",
          "Oil & gas refineries and petrochemical facilities",
          "Pharmaceutical and food-grade liquid storage",
          "Marine storage tanks and offshore platforms"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Tank Alarm",
        image: "/images/tank-alarm.jpg",
        shortDescription:
          "Electronic alarm system providing high/low level alerts for industrial liquid storage.",
        description:
          "A Tank Alarm System is an intelligent monitoring device that provides audio, visual, and remote alerts when tank levels reach critical high or low points. It integrates sensors, control circuitry, industrial-grade indicators, and communication interfaces to ensure safe and uninterrupted operation. Tank alarms prevent spills, pump dry-run, fuel shortages, and unauthorized fuel usage. Advanced systems may include GSM notifications, IoT cloud integration, and compatibility with BMS or SCADA platforms. These alarms are vital for facilities where fuel reliability, safety, and compliance are non-negotiable.",
        uses: [
          "High/low-level alerts for generator fuel tanks",
          "Avoiding diesel spillage in industrial facilities",
          "Fuel theft or tamper monitoring in remote sites",
          "Chemical and water treatment process monitoring",
          "BMS/SCADA integration for centralized monitoring",
          "Commercial building backup generator systems",
          "Marine fuel tanks and ship engine rooms"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Fuel Shutoff Actuators",
        image: "/images/fuel-shutoff.jpg",
        shortDescription:
          "Automatic actuators that shut down fuel flow during emergencies or abnormal conditions.",
        description:
          "Fuel Shutoff Actuators are precision-engineered electromechanical devices that ensure instant isolation of fuel flow in emergency shutdown scenarios. Activated through fire detection systems, temperature sensors, manual triggers, or automated safety circuits, they play a vital role in industrial hazard prevention. Built with high-torque motors, corrosion-resistant bodies, and rapid response mechanisms, these actuators protect generator engines, fuel lines, and equipment from runaway fuel flow. They are essential in safety-critical industries where fire protection and environmental integrity are required.",
        uses: [
          "Emergency fuel cutoff for diesel and gas generators",
          "Fire protection systems interfaced with fuel supply lines",
          "Industrial ESD (Emergency Shutdown) systems",
          "Oil & gas facilities requiring rapid isolation",
          "Automated safety interlocks in industrial plants",
          "Marine engine fuel line protection",
          "Hazardous-area compliant generator installations"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Fuel Polisher",
        image: "/images/fuel-polisher.jpg",
        shortDescription:
          "High-efficiency system that filters, cleans, and conditions diesel fuel to ensure generator readiness.",
        description:
          "A Fuel Polisher is an advanced diesel cleaning system designed to remove water, sludge, microbial growth, and particulates that accumulate during storage. Diesel fuel naturally degrades over time, especially in warm or humid conditions. Contaminants can clog filters, damage injectors, and cause generator failure during emergency start-up. Fuel polishers use multi-stage filtration, water separation, and circulation technology to maintain fuel purity and extend its shelf life. Ideal for mission-critical facilities, they reduce maintenance downtime and ensure seamless generator operation during power outages.",
        uses: [
          "Diesel purification for standby generator tanks",
          "Fuel maintenance in data centers and hospitals",
          "Long-term fuel storage in industrial and military facilities",
          "Preventing microbial growth ('diesel bug')",
          "Reducing engine wear and injector clogging",
          "Bulk fuel storage terminals and fuel distribution systems",
          "Marine diesel tank fuel polishing"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      }
    ]
  },

  /* --------------------------------------------------------------------------
     CATEGORY 2 — ELECTRICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Electrical Items and Accessories",
    slug: "electrical-items-accessories",
    items: [
      {
        name: "Load Bank",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UXHne8Iwx5h6Kk0KwkfOaHthuEX1pfQ4VQ&s",
        shortDescription:
          "Industrial load bank used for testing and commissioning generators and UPS systems.",
        description:
          "A Load Bank is an essential electrical testing device designed to simulate real electrical loads for verifying the performance of generators, UPS systems, and power distribution equipment. By applying controlled loads, load banks help identify issues such as improper voltage regulation, fuel system inefficiencies, unstable frequency output, and cooling system faults. They are indispensable for periodic generator exercising, commissioning new power systems, and preventing wet stacking in diesel engines. Load banks can be resistive, inductive, capacitive, or a combination, offering tailored testing solutions for industrial, commercial, and data center environments.",
        uses: [
          "Commissioning testing of new generator installations",
          "Routine maintenance and exercising of standby generators",
          "UPS discharge testing for battery performance validation",
          "Preventing wet stacking in diesel engines",
          "Load testing for data centers and telecom facilities",
          "Testing power quality in industrial plants",
          "Training facilities for electrical engineering simulations"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Transformer",
        image:
          "https://t3.ftcdn.net/jpg/04/97/30/98/240_F_497309808_aw53b7UXBfKeLrCLTWv2mBiDzjEKaCW2.jpg",
        shortDescription:
          "Reliable transformer for stepping voltage up or down in commercial and industrial grids.",
        description:
          "Industrial Transformers are electrical devices engineered to efficiently transfer energy between circuits through electromagnetic induction. They adjust voltage levels to meet system requirements—either stepping up for long-distance transmission or stepping down for safe distribution. Built with high-grade core materials and advanced cooling systems, transformers ensure consistent performance, reduced losses, and operational reliability. They are vital for industrial plants, backup power systems, commercial facilities, and renewable energy installations. Modern transformers also incorporate protection relays, fire-resistant oils, and monitoring systems for enhanced safety and longevity.",
        uses: [
          "Voltage step-up/step-down in industrial power distribution",
          "Grid-to-generator synchronization",
          "Power supply for commercial buildings and data centers",
          "Renewable energy systems such as solar and wind farms",
          "Oil & gas plant electrical distribution",
          "Industrial automation equipment",
          "Large HVAC and motor-driven systems"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Battery Isolation Switch",
        image:
          "https://t4.ftcdn.net/jpg/18/04/46/35/240_F_1804463589_O8SJcu3Ur0YAvXkyH6g6pM0auU0PHl2e.jpg",
        shortDescription:
          "Switch that safely isolates batteries from electrical circuits during maintenance.",
        description:
          "A Battery Isolation Switch is a critical safety component that enables complete disconnection of a battery from its electrical circuit. It helps prevent accidental short circuits, electrical fires, and damage during maintenance or emergencies. Built with high ampacity and durable contact materials, it ensures reliable operation even in harsh conditions such as high vibration, moisture exposure, or heavy industrial usage. These switches are widely used in generator starter systems, industrial vehicles, telecom backup systems, and solar battery banks to ensure safe electrical management.",
        uses: [
          "Isolating generator starter batteries during servicing",
          "Preventing electrical hazards in industrial machines",
          "Telecommunication battery backup systems",
          "Marine and automotive battery disconnect applications",
          "Solar and renewable energy battery banks",
          "Emergency shutdown systems",
          "Construction and mining equipment electrical safety"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Cable Gland and Cable Grommet",
        image: "https://images.pexels.com/photos/858598/pexels-photo-858598.jpeg",
        shortDescription:
          "Durable cable entry solutions offering sealing, strain relief, and protection from moisture.",
        description:
          "Cable Glands and Grommets are mechanical fittings designed to securely route and protect electrical cables entering enclosures, panels, or machinery. They provide strain relief, environmental sealing, and mechanical protection to ensure electrical integrity in demanding applications. Manufactured using brass, stainless steel, nylon, or polymer composites, these glands prevent moisture ingress, mechanical stress, dust entry, and cable damage. They are essential in environments where cables are exposed to vibration, heat, oil, chemicals, or outdoor conditions.",
        uses: [
          "Sealing cable entries in generator control panels",
          "Industrial automation panels and junction boxes",
          "Outdoor electrical installations exposed to weather",
          "Marine and offshore electrical systems",
          "Hazardous locations requiring explosion-proof glands",
          "Data center cable routing and protection",
          "Telecom installations with armored cable entries"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "LED Lights & Emergency Exit Lights",
        image: "https://images.pexels.com/photos/845265/pexels-photo-845265.jpeg",
        shortDescription:
          "Energy-efficient LED and emergency exit lighting systems for industrial and commercial safety.",
        description:
          "LED Lights and Emergency Exit Lights provide efficient, long-lasting illumination for both normal operations and emergency scenarios. Industrial-grade LED lighting offers superior brightness, low energy consumption, and long service life, while emergency exit lights ensure safe evacuation during power failures. These lights often incorporate battery backup systems, photoluminescent signage, high-output LED modules, and fire-resistant housings. Essential in ensuring safety compliance, they support visibility in hazardous environments, industrial workshops, powerhouses, and commercial buildings.",
        uses: [
          "Factory and warehouse lighting solutions",
          "Emergency lighting for commercial buildings",
          "Backup illumination for generator rooms and electrical areas",
          "Outdoor pathway and perimeter lighting",
          "Safety exit routes in malls, hospitals, and offices",
          "Marine and offshore platforms emergency lighting",
          "Data centers and industrial control rooms"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      }
    ]
  },

  /* --------------------------------------------------------------------------
     CATEGORY 3 — MECHANICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Mechanical Items and Accessories",
    slug: "mechanical-items-accessories",
    items: [
      {
        name: "Door Closure and Control",
        image: "/images/door-closure.jpg",
        shortDescription:
          "Heavy-duty door closure systems designed for controlled, smooth, and secure operation.",
        description:
          "Door Closures and Control Systems are engineered to ensure smooth, controlled, and safe door movement in industrial enclosures. These closers prevent slamming, increase door life, reduce noise, and improve operator safety. With hydraulic damping, adjustable speed control, corrosion-resistant bodies, and heavy-duty arms, they are designed to function reliably in the harshest industrial environments—including generator housings, pump rooms, and outdoor enclosures exposed to weather. They provide fire safety compliance, access control, and enhanced system durability.",
        uses: [
          "Generator and acoustic enclosure door mechanisms",
          "Industrial building fire-rated doors",
          "Pump rooms and equipment housings",
          "HVAC access panels and mechanical cabinets",
          "Marine and offshore steel doors",
          "Commercial facility access doors",
          "Security infrastructure requiring controlled access"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Door Hinges and Door Stoppers",
        image: "/images/door-hinges.jpg",
        shortDescription:
          "Heavy-duty hinges and stoppers engineered to support industrial doors reliably.",
        description:
          "Industrial Door Hinges and Stoppers are precision-machined mechanical components designed to withstand heavy loads, frequent usage, vibration, and outdoor conditions. Built from stainless steel, galvanized steel, or heavy-duty alloys, these components ensure smooth rotation, stability, and long life. Door stoppers protect walls and equipment from impact damage, while high-quality hinges prevent sagging and ensure secure alignment. These are essential for generator enclosures, E-houses, pump skids, and industrial machinery housings.",
        uses: [
          "Heavy steel door support for generator enclosures",
          "Industrial building access door assemblies",
          "Marine-rated enclosures and ship engine room doors",
          "Electrical control room and substation panel doors",
          "Mechanical equipment housings and pump skids",
          "Outdoor machinery cabinets",
          "High-load industrial access doors"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Exhaust Flexible and Bellows",
        image: "/images/exhaust-bellows.jpg",
        shortDescription:
          "Flexible exhaust solutions designed to absorb vibration, thermal expansion, and mechanical stress.",
        description:
          "Exhaust Flexibles and Bellows are engineered to absorb vibration, thermal expansion, and mechanical displacement in generator and industrial exhaust systems. Constructed using stainless steel multilayer mesh, corrugated bellows, and braided reinforcement, they prevent cracks, pipe misalignment, and excessive stress on engine manifolds. These components are essential for enhancing exhaust system longevity, reducing noise transfer, and minimizing maintenance downtime. They are widely used in applications subject to high heat, vibration, and dynamic movement.",
        uses: [
          "Exhaust systems of diesel and gas generators",
          "Industrial boiler exhaust lines",
          "Marine engines and ship exhaust systems",
          "HVAC and ventilation duct vibration isolation",
          "Automotive and heavy machinery exhaust assemblies",
          "Chemical plant exhaust pipelines",
          "Power plant turbine exhaust flexibility management"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      }
    ]
  },

  /* --------------------------------------------------------------------------
     CATEGORY 4 — GENERATOR ENCLOSURES, PUMP SKIDS, E-HOUSE / E-POD
  --------------------------------------------------------------------------- */
  {
    category: "Generator Enclosures, Pump Skids, E-House/E-POD",
    slug: "generator-systems",
    items: [
      {
        name: "Generator Acoustic Enclosure",
        image: "/images/acoustic-enclosure.jpg",
        shortDescription:
          "Acoustic enclosure designed to reduce generator noise while providing full weather protection.",
        description:
          "A Generator Acoustic Enclosure is a specialized housing designed to significantly reduce noise generated by industrial diesel or gas generators. Manufactured using sound-absorbing materials, thermal insulation panels, and high-strength steel structures, these enclosures ensure compliance with noise regulations in residential, commercial, and industrial locations. They provide weatherproofing, ventilation control, fire resistance, and security while ensuring optimal airflow to maintain generator performance. Acoustic enclosures are essential in sensitive or urban environments where operational noise must be minimized without compromising equipment safety and reliability.",
        uses: [
          "Noise reduction for generators in residential areas",
          "Backup power installations in hospitals, schools, and offices",
          "Outdoor generator protection from weather elements",
          "Telecom tower generator housings",
          "Industrial and commercial standby power systems",
          "Data center noise-regulated generator installations",
          "Construction site power equipment enclosures"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Gas Genset Enclosure",
        image: "/images/gas-genset.jpg",
        shortDescription:
          "Durable enclosure built specifically for gas-powered generator systems.",
        description:
          "Gas Genset Enclosures are purpose-built protective structures designed for housing gas-powered generators. They ensure safe operation by providing proper ventilation, explosion-proof construction options, gas detection systems, and weatherproof protection. Made from corrosion-resistant steel, these enclosures safeguard sensitive engine components from environmental hazards, extend equipment lifespan, and enhance site safety. They also help maintain stable generator operating temperatures, protect against unauthorized access, and comply with industrial safety standards for gas-powered equipment.",
        uses: [
          "Gas generator protection for industrial plants",
          "Backup power systems in commercial facilities",
          "Remote power installations in oil & gas operations",
          "Temperature and access-controlled generator rooms",
          "Outdoor gas genset installations for utilities",
          "Mining and construction camp power systems",
          "Critical infrastructure needing reliable gas-based backup"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "E-House Module",
        image: "/images/e-house.jpg",
        shortDescription:
          "Modular electrical house providing secure housing for switchgear and control systems.",
        description:
          "An E-House (Electrical House) is a modular, factory-built electrical substation designed to house medium-voltage switchgear, control panels, VFDs, batteries, SCADA systems, and other mission-critical electrical components. E-Houses offer rapid deployment, cost savings, and reduced on-site construction time compared to traditional buildings. Constructed with fire-resistant panels, climate control systems, and heavy-duty steel frames, they protect sensitive electrical infrastructure from dust, moisture, vibration, and extreme weather. They are widely used in oil & gas fields, mining operations, renewable energy farms, and industrial facilities requiring portable or expandable power distribution systems.",
        uses: [
          "Portable electrical substations for oil & gas operations",
          "Temporary or permanent electrical rooms for mining sites",
          "Data center auxiliary electrical infrastructure",
          "Renewable energy grid integration systems",
          "Industrial automation and power distribution control rooms",
          "Construction sites needing rapid electrical deployment",
          "Remote site power management and distribution"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      },
      {
        name: "Battery Compartment",
        image: "/images/battery-compartment.jpg",
        shortDescription:
          "Secure housing for industrial batteries, protecting them from environmental exposure and ensuring safe operation.",
        description:
          "Industrial Battery Compartments are engineered enclosures designed to safely store and protect batteries used in generator systems, UPS units, telecom equipment, and renewable energy installations. Built with fire-retardant materials, ventilation systems, cable entry provisions, and corrosion-resistant coatings, they maintain optimal operating conditions for batteries. These compartments shield batteries from heat, dust, moisture, and physical damage while enabling organized and secure installation. They also support maintenance operations by providing easy access and compliance with safety standards for battery storage.",
        uses: [
          "Generator starter battery housing",
          "Battery storage for solar and renewable energy systems",
          "UPS room battery banks",
          "Telecom tower battery enclosures",
          "Industrial power backup infrastructure",
          "Marine and offshore battery storage",
          "Electric utility substation battery banks"
        ],
        pdfLink: "/pdfs/level-switch.pdf" // <-- add this
      }
    ]
  }
];
