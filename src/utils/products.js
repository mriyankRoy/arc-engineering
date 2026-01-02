export const products = [
  /* --------------------------------------------------------------------------
     CATEGORY 1 — INSTRUMENT & GENERATOR PACKAGE ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Instrument & Generator Package Accessories",
    slug: "instrument-generator-accessories",
    categoryId: "CAT-ACC",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767037334/AGP_Instrument_Generator_Package_Accessories_dye6xo.png",
      alt: "Close-up of industrial sensors and manometers on a pipeline.",
    },
    description:
      "Sensors, gauges, and monitoring systems for continuous fluid level, gas, and temperature control within generator and plant packages.",
    items: [
      {
        id: "CP5340",
        name: "Hydrostatic Level Transmitter",
        manufacturerPartNumber: "CP5340",
        AGPPartNumber: "AGP-ACC-001",
        Make: "Hitec",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Hitec_Hydrostatic_Level_Transmitter_sorctl.png",
        ],
        shortDescription:
          "High-precision 316L SS hydrostatic transmitter for heating oil, gasoline, and hydrocarbons.",
        description:
          "The CP5340 uses piezoresistive technology to measure differential pressure between the liquid surface and the submerged transmitter. Built with a 316L stainless steel body and PA6 polyamide ends, it features a 2-conductor FEP cable with an integrated capillary for atmospheric reference. Designed for immersion in harsh hydrocarbons, it supports pendulum suspension or flat-bottom tank mounting. Note: Do not press on the protective 316L membrane to avoid damage.",
        uses: [
          "Level measurement of heating oil, gasoline, and hydrocarbons",
          "Continuous monitoring in 316L/PA6/FEP compatible liquids",
          "Diesel day tank and industrial fluid monitoring",
          "Remote inventory via 4-20mA loop (4mA = 0m, 20mA = Full Scale)",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1765811657/Datasheet_-_GB_CP5340_xdizgc.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1765811714/Manual_-_CP5340_1_gdlfje.pdf",
          },
        ],
        details: {
          PowerSupply: "6-38V DC (at transmitter terminals)",
          OutputSignal: "4-20mA (2-wire loop)",
          MeasurementRange: "0-5m H2O (Customizable)",
          Accuracy: "±0.5% F.S.",
          Materials: "316L Stainless Steel, PA6 Polyamide, FEP Cable Sheath",
          CableType: "2 conductors + capillary under shielding",
          Dimensions: "22mm Diameter x 180mm Height",
          Weight: "170g (including standard 5m cable)",
          ProtectionRating: "IP68 (Submersible)",
        },
      },
      {
        id: "GMS-4-xx-EUR-x",
        name: "Gasmaster 4 Control Panel",
        manufacturerPartNumber: "GMS-4-xx-EUR-x",
        AGPPartNumber: "AGP-ACC-002",
        Make: "Crowcon",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765717438/Crowcon_Gasmaster_4_Control_Panel_ugauxx.jpg",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767105487/Crowcon_Gasmaster_4_Control_Panel_02_his9ko.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767105942/Crowcon_Gasmaster_4_Control_Panel_03_turyyt.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767121718/Crowcon_Gasmaster_4_Control_Panel_04_kolg7j.png",
        ],
        shortDescription:
          "High-versatility 4-channel control hub for integrated gas, fire, and flame detection with Modbus connectivity.",
        description:
          "The Gasmaster 4 is a compact yet powerful wall-mounted control system designed for centralized safety management. It features a large, multi-lingual LCD that provides simultaneous real-time data from up to four detectors, including 4-20mA, mV pellistor, and fire zones. Engineered for seamless integration, it offers RS-485 Modbus for DCS/PLC/SCADA interfacing alongside dual-stage independent alarms per channel. The intuitive front-panel interface facilitates rapid re-calibration and system testing without specialized tools, while a time-stamped event log ensures full traceability of alarm and fault histories.",
        uses: [
          "Centralized monitoring of gas, smoke, and flame detectors in a single hub",
          "Automated industrial safety via 8A non-inductive double-pole relay outputs",
          "Integration into plant-wide SCADA/PLC networks via RS-485 Modbus RTU",
          "Remote safety management through inhibit and re-set command facilities",
          "High-reliability deployment using internal 1.2Ah battery backup for power redundancy",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767102451/Gasmaster-Datasheet-12_2025_nzqots.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767102454/M070010-Gasmaster-III-Manual-Issue-2-UK_nmjcgs.pdf",
          },
        ],
        details: {
          Dimensions: "288 x 278 x 110mm (4.5kg Chassis)",
          Enclosure: "IP65 Rated Cast Aluminium with Flame-Retardant ABS",
          PowerSupply: "Global Compatibility: 90-264Vac or 20-30Vdc",
          EmergencyBackup: "Internal 1.2Ah Lead-Acid Battery Reserve",
          InputCapacity:
            "4-Channel Flex (4-20mA / mV Pellistor / Fire Loops / ESU)",
          RelayOutputs: "8A 250Vac DPCO Contacts (Alarm 1, Alarm 2, Fault)",
          Communication: "RS-485 Modbus RTU & Digital Event Upload",
          DataLogging: "300 Event Capacity (Alarms, Faults & Interventions)",
          UserInterface:
            "Multi-Lingual LCD (8 Languages) with 85dB Integral Sounder",
          Standards: "ATEX Certified, EMC: EN50270, EN60945, FCC Part 15",
          ThermalRange: "-10°C to +50°C (14°F to 122°F)",
        },
      },
      {
        id: "XG2-xx-xx-xx",
        name: "Xgard Type 5 Gas Detector (H2)",
        manufacturerPartNumber: "XG2-xx-xx-xx",
        AGPPartNumber: "AGP-ACC-003",
        Make: "Crowcon",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Crowcon_Xgard_Type_5_Gas_Detector_l5pyt9.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767125731/Crowcon_Xgard_02_lcxcoj.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767125872/Crowcon_Xgard_03_qiyjsm.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767126074/Crowcon_Xgard_04_gjqdg2.png",
        ],
        shortDescription:
          "Flameproof (Exd) electrochemical detector for toxic gases and Oxygen monitoring with 2-wire 4-20mA output.",
        description:
          "The Xgard Type 2 is a high-reliability, flameproof (Exd) gas detector specifically designed for the monitoring of Oxygen and a wide spectrum of toxic gases. Combining an advanced electrochemical sensor with an integrated amplifier/transmitter, it delivers a precise 2-wire 4-20mA signal. Housed in a rugged, polyester-coated aluminium or 316 stainless steel enclosure, the Type 2 is optimized for easy maintenance with plug-in sensors and versatile mounting options, ensuring functional safety in harsh industrial environments like water treatment and power facilities.",
        uses: [
          "Toxic gas monitoring and Oxygen depletion detection in industrial plant rooms",
          "Safety deployment in hazardous areas (Exd Flameproof) requiring SIL 1-3 validation",
          "Water treatment and research facility hazardous atmosphere surveillance",
          "Integration into legacy 2-wire control systems via 4-20mA current loops",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767122046/Xgard-Datasheet-2025_Aug_aqwtwy.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767123554/Manual-M071038-Xgard-Consolidated-Issue-1-June-18_tfnl8z.pdf",
          },
        ],
        details: {
          SensorTechnology: "Poison-Resistant Catalytic Bead",
          SignalOutput: "3-Wire 4-20mA (Configurable Sink or Source)",
          DetectionRange: "0-100% LEL (Lower Explosive Limit)",
          PhysicalDimensions: "156 x 166 x 111 mm",
          UnitWeight: "Aluminium: 1kg | Stainless Steel: 3.1kg",
          HousingMaterial:
            "Corrosion-Resistant Aluminium or 316 Stainless Steel",
          EnvironmentalRating: "IP65 Ingress Protection",
          OperationalVoltage: "10-30V DC",
          PowerConsumption: "50mA @ 24V DC (1.2W)",
          ThermalTolerance: "-40°C to +55°C (-40°F to +131°F)",
          HumidityRange: "0-99% RH (Non-condensing)",
          ResponseTime: "T90 < 15 Seconds (Typical)",
          CableInterface: "M20 or 1/2” NPT Entry (Right-side)",
          WiringTerminals: "0.5 to 2.5mm² Cross-section",
          Compliance:
            "ATEX/IECEx II 2 GD (Ex db IIC T6/T4), UL Class I Div 1, FCC Part 15",
          AccuracyStability:
            "Repeatability <2% FSD; Zero Drift <2% FSD per Month",
        },
      },
      {
        id: "LAG-13 KR",
        name: "Tank Bund Leak Detection Sensor",
        manufacturerPartNumber: "LAG-13 KR",
        AGPPartNumber: "AGP-ACC-004",
        Make: "Afriso",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Afriso_Tank_Bund_Leak_Detection_mq9ekl.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Afriso_Tank_Bund_Leak_Detection_mq9ekl.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Afriso_Tank_Bund_Leak_Detection_mq9ekl.png",
        ],
        shortDescription:
          "Float-type sensor for immediate detection of liquid accumulation in tank bunds.",
        description:
          "The Afriso Leak Detection Sensor is a float-type device designed for the interstice or bund of fuel tanks. Featuring a standard 0.5-inch or 1-inch BSPT/NPT connection, it provides immediate alerts if fuel or water accumulates in the containment area, preventing environmental contamination and ensuring regulatory compliance.",
        uses: [
          "Double-wall tank interstitial monitoring",
          "Generator drip tray leak detection",
          "Sumps and containment bund monitoring",
          "Environmental compliance for fuel storage",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/afriso-leak-detection.pdf" },
        ],
        details: {
          SensorType: "Float Switch (NO/NC)",
          Output: "Potential-free contact",
          Connection: "1-inch NPT Male",
          OperatingFluids: "Diesel, Oil, Water",
          Material: "Polypropylene (PP)",
          MaxPressure: "1 bar",
        },
      },
      {
        id: "TH109-009",
        name: "Multi-Use Industrial Thermostat",
        manufacturerPartNumber: "TH109-009",
        AGPPartNumber: "AGP-ACC-005",
        Make: "PECO",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716274/PECO_Multi-Use_Industrial_Thermostat_ufbshm.png",
        ],
        shortDescription:
          "Rugged NEMA 4X line-voltage mechanical thermostat for high-capacity industrial heating or cooling.",
        description:
          "The PECO TH109-009 is a heavy-duty line-voltage mechanical thermostat housed in a gray NEMA 4X plastic enclosure, suitable for both indoor and outdoor surface mounting. It features automatic changeover for heat or cool applications with a fixed 3°F differential. Designed for harsh environments, it handles high resistive loads up to 25A and provides reliable temperature regulation in plant rooms and generator enclosures.",
        uses: [
          "Industrial heating or cooling control",
          "Indoor and outdoor enclosure temperature regulation",
          "Frost protection and HVAC in mechanical rooms",
          "High-capacity resistive and motor load switching",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767218814/Datasheet_-_TH109-009t_kobbbs.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767218814/Manual_-_TH109-009_jnggct.pdf",
          },
        ],
        details: {
          ControlRange: "40°F to 100°F",
          Differential: "3°F (Fixed)",
          SwitchAction: "SPDT (Heat or Cool)",
          ContactRatingResistive: "25A @ 120V/240V/277V AC",
          FullLoadAmps: "16A @ 120V, 12A @ 240V AC",
          LockedRotorAmps: "80A @ 120V, 60A @ 240V",
          Enclosure: "NEMA 4X (Gray Plastic)",
          Mounting: "Surface Mount (Indoor/Outdoor)",
          Height: "13.21 cm",
          Width: "21.08 cm",
          Depth: "9.65 cm",
        },
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 2 — ELECTRICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Electrical Items and Accessories",
    slug: "electrical-items-accessories",
    categoryId: "CAT-ELEC",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767037624/AGP_Electrical_Items_and_Accessories_aopze4.png",
      alt: "Interior view of an industrial electrical panel with circuit breakers and wires.",
    },
    description:
      "High-current switches, transformers, heaters, and lighting solutions for industrial power distribution and enclosure management.",
    items: [
      {
        id: "DURITE-0-605-53",
        name: "Battery Isolator Switch (Heavy-Duty)",
        manufacturerPartNumber: "0-605-53",
        AGPPartNumber: "AGP-ELEC-001",
        Make: "Durite",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767374753/0-605-53_Durite_01_ockqxl.png",
        ],
        shortDescription:
          "Weatherproof IP66-rated 400A battery isolator with 4000A surge capacity and removable safety key.",
        description:
          "The Durite 0-605-53 is a professional-grade battery disconnect designed for 12V-24V systems. It supports a 400A continuous load and a massive 4000A peak surge for 10 seconds. Engineered with solid copper contacts and an IP66 rating, it is built for extreme environments. The design includes a removable key and an 8mm lockout hole to ensure safety during maintenance or to prevent unauthorized use.",
        uses: [
          "Main battery disconnect for heavy-duty diesel generators",
          "Safety lockout for construction and agricultural machinery",
          "Marine-grade battery isolation (IP66 compliant)",
          "Emergency power termination for industrial vehicles",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767373873/Datasheet_-_0-605-53_Durite_l6nk8j.pdf",
          },
        ],
        details: {
          SwitchType: "Heavy-Duty Battery Isolator (Normally Open)",
          OperatingVoltage: "12V to 24V DC (24V Max)",
          RatedContinuousLoad: "400A @ 24V",
          PeakSurgeCapacity: "4000A for 10 seconds",
          Hardware: "Dual M10 Threaded Bolts",
          ContactMaterial: "Solid Copper",
          ThermalRange: "-40°C to +85°C",
          TerminalTorque: "24Nm",
          Polarity: "Non-Polarised",
          MountingCutout: "22.5mm Diameter",
          IngressProtection: "IP66 (Dust/Water Jet Proof)",
          UnitWeight: "640g",
        },
      },
      {
        id: "LITTELFUSE-880175-0002",
        name: "Switch Master TR 2 Pole 500A. YELLOW | Series: TR",
        manufacturerPartNumber: "880175-0002",
        AGPPartNumber: "AGP-ELEC-002",
        Make: "Littelfuse",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375329/880175-0002_Littlefuse_01_oj3wh1.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375329/880175-0002_Littlefuse_02_cfrsvs.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375329/880175-0002_Littlefuse_04_twnl7o.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375330/880175-0002_Littlefuse_03_tqezc8.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375472/880175-0002_Littlefuse_05_ilhstm.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375781/880175-0002_Littlefuse_07_gdfmjo.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375781/880175-0002_Littlefuse_06_xujfgb.png",
        ],
        shortDescription:
          "IP67/IPX9K rated 500A dual-pole battery disconnect switch with yellow knob and integrated LOTO.",
        description:
          "The Littelfuse 880175-0002 is a heavy-duty, dual-pole single-throw (DPST) master battery disconnect switch featuring a yellow knob. Rated at IP67 and IPX9K, it is designed for high-vibration and high-shock environments, allowing for the simultaneous switching of two circuits or both positive and negative lines.",
        uses: [
          "Heavy Trucks and Construction equipment",
          "Emergency Vehicles and Military applications",
          "Bus and Transit systems",
          "Agricultural equipment requiring high vibration tolerance",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375087/Datasheet_-_880175-0002_Littlefuse_peo0vz.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375088/Manual_-_880175-0002_Littlefuse_z6cz4e.pdf",
          },
          {
            name: "Installation Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767376084/Installation_Instruction_-_880175-0002_kcevua.pdf",
          },
        ],
        details: {
          VoltageRating: "32V DC",
          ContinuousCurrent: "500A per circuit (with 2x 4/0 cables)",
          InrushRating: "2250A (30 seconds)",
          ProtectionRating: "IP67 / IPX9K",
          Operation: "DPST Rotary Switch (Lock-out/Tag-out)",
          TerminalSize: "Four M12 x 25mm Tin-Plated Copper Studs",
          OperatingTemperature: "-40°C to +85°C",
          Mounting: 'Flange; 2x M8 or 5/16" holes',
        },
      },
      {
        id: "FRICO-C5N",
        name: "CAT C5N Industrial Fan Heater (5kW)",
        manufacturerPartNumber: "C5N",
        AGPPartNumber: "AGP-ELEC-003",
        Make: "Frico",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767376780/C5N_Frico_01_mgird2.png",
        ],
        shortDescription:
          "Compact 5kW industrial fan heater with IP44 rating and 480 m³/h airflow.",
        description:
          "The Frico CAT C5N is a fixed-mounting industrial fan heater designed for small warehouses, garages, and workshops. It features a traffic white (RAL 9016) galvanized steel casing and telegrey (RAL 7046) outlet grilles. The unit includes a wall bracket allowing for 10° rotation to optimize heat distribution.",
        uses: [
          "Small warehouse heating",
          "Garage and workshop climate control",
          "Retail shop heating",
          "Plant room frost protection",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767377220/Datasheet_-_C5N_Frico_vxjedg.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767377221/Manual_-_C5N_Frico_qb2yfh.pdf",
          },
        ],
        details: {
          HeatOutput: "5kW / 2.5kW (Adjustable)",
          Voltage: "400V 3N~ (Electric Heat)",
          ControlMotorVoltage: "230V",
          Airflow: "480 m³/h",
          ProtectionRating: "IP44",
          Dimensions: "335mm (W) x 255mm (H) x 276mm (D)",
          Weight: "6.4 kg",
          FanSpeed: "1350 rpm",
          HeatAmperage: "7.3A / 6.3A",
          AmbientTempRange: "-20°C to +30°C",
          TemperatureRise: "31°C (at max output)",
        },
      },
      {
        id: "SCHNEIDER-EXN30T3H",
        name: "Dry Type Transformer (30kVA)",
        manufacturerPartNumber: "EXN30T3H",
        AGPPartNumber: "AGP-ELEC-004",
        Make: "Schneider",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767377921/EXN30T3H_Schneider_01_wtb1ku.png",
        ],
        shortDescription:
          "High-efficiency 30kVA DOE 2016 compliant transformer, 480V Delta to 208Y/120V with 150°C rise.",
        description:
          "The Schneider EXN30T3H is a Square D low-voltage dry-type distribution transformer fully compliant with DOE 2016 and NRCan energy standards. Featuring aluminum windings and a 220°C insulation system, it achieves 98.23% efficiency at 35% load. The unit is designed for space-saving floor mounting with front-only exhaust vents, allowing for a tight 1/2-inch rear clearance. It is shipped as a Type 2 indoor unit but is field-convertible to Type 3R for outdoor applications using a weathershield.",
        uses: [
          "Energy-efficient low voltage power distribution",
          "Indoor and outdoor industrial electrical systems",
          "Seismic-rated installations (ICS ES AC 156 tested)",
          "Square D coordinated breaker and panelboard systems",
          "Space-constrained utility and plant rooms",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767377919/Datasheet_-_EXN30T3H_Schneider_gfq7er.pdf",
          },
        ],
        details: {
          kVARating: "30 kVA",
          PrimaryVoltage: "480V Delta (3-wire)",
          SecondaryVoltage: "208Y/120V (4-wire)",
          Phase: "Three-Phase",
          TemperatureRise: "150°C",
          Efficiency: "98.23% (DOE 2016/NRCan compliant)",
          EnclosureType: "Type 2 (Field convertible to Type 3R)",
          Cooling: "Natural Air (Front exhaust)",
          WindingMaterial: "Aluminum",
          SoundLevel: "3dB below NEMA ST-20",
          Mounting: "Floor (Optional wall/trapeze accessories available)",
        },
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 3 — MECHANICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Mechanical Items and Accessories",
    slug: "mechanical-items-accessories",
    categoryId: "CAT-MECH",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767036691/AGP_Mechanical_Items_and_Accessories_hobdam.png",
      alt: "Industrial pipes and valves with red handwheels.",
    },
    description:
      "Valves, flame arrestors, and actuators for safe and precise control of fuel, water, and air flow in fluid handling systems.",
    items: [
      {
        id: "RIS-STOP-2SF-R",
        name: "RIS-STOP-2SF-R Overfill Prevention Valve (2-inch)",
        manufacturerPartNumber: "RIS-STOP-2SF-R",
        AGPPartNumber: "AGP-ELEC-003",
        Make: "Risbridger",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767380052/RIS-STOP-2SF-R-AF_Risbridger_01_wnklpj.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767380414/RIS-STOP-2SF-R-AF_Risbridger_02_vouspq.png"
        ],
        shortDescription:
          '2" high-flow overfill prevention valve with 4-bolt flanged inlet and anti-syphon capability.',
        description:
          "The Risbridger RIS-STOP-2SF-R is designed for above-ground commercial diesel storage and pressure deliveries. It features a compact 4-bolt flanged inlet allowing for greater maximum tank fluid levels. Its cartridge construction ensures easy installation via the provided 2” tank lid socket, while the normally closed position enables it to function as an anti-syphon valve. The design excludes dynamic seals to promote a longer service life and allows for on-site inspection via an access cap without disassembling pipework.",
        uses: [
          "Above ground commercial diesel storage installations",
          "Pressure delivery systems (up to 8 bar)",
          "Anti-syphon protection for fuel lines",
          "Applications requiring high-level fluid maintenance",
          "Manned filling operations with high flow rates",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379486/Datasheet_-_RIS-STOP-2SF-R-AF_Risbridger_qy5hhw.pdf",
          },
          {
            name: "Installation Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379498/Installation_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_kok3rl.pdf",
          },
          {
            name: "Maintenance Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379499/Maintenance_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_spjeys.pdf",
          },
          {
            name: "Adjustable Float Kit Installation",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379486/Adjustable_Float_Kit_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_tqdom3.pdf",
          },
        ],
        details: {
          NominalSize: "2-inch",
          InletDesign: "Compact 4-bolt flanged body",
          FlowRateRange: "10 - 600 L/min",
          MaximumPressure: "8 bar",
          ShutOff: "Two-stage (warning over last 15mm)",
          Viscosity: "Suitable for SAE10 or lower",
          Materials:
            "Anodised Aluminium, Viton A (FKM), Stainless Steel, HDPE Closed cell foam",
          Compatibility: "Diesel, Bio-Diesel, FAME Blends, Waste Oil",
          Features: "Anti-syphon, No dynamic seals, Cartridge construction",
          SafetyConstraint:
            "Not suitable for true shut-off or continuously pressurised systems",
        },
      },
      {
        id: "ELMAC-ERB050",
        name: "Deflagration Flame Arrestor (2-inch)",
        manufacturerPartNumber: "ERB-050FS-125(W)",
        AGPPartNumber: "AGP-MECH-002",
        Make: "Elmac",
        images: [
          "https://elmactechnologies.com/wp-content/uploads/2017/11/ERB-1.png",
          "https://elmactechnologies.com/wp-content/uploads/2017/11/ERB-1.png",
          "https://elmactechnologies.com/wp-content/uploads/2017/11/ERB-1.png",
        ],
        shortDescription:
          "2-inch End-of-Line deflagration flame arrestor for tank vent protection.",
        description:
          "The Elmac ERB-050FS is a high-specification deflagration flame arrestor with 2-inch NPT connections. Installed on tank vent lines, it uses a precision-crimped metal ribbon element to extinguish subsonic flames, preventing external fires from propagating into the fuel storage tank and causing explosions.",
        uses: [
          "Vent line protection for flammable liquid tanks",
          "Oil & Gas refinery storage safety",
          "Diesel generator fuel tank venting",
          "Chemical processing tank safety",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://elmactechnologies.com/wp-content/uploads/2021/07/ERB-Series-Datasheet-1.pdf",
          },
        ],
        details: {
          NominalSize: "2-inch NPT",
          ArrestorType: "End-of-Line Deflagration",
          Material: "Carbon Steel / Stainless Steel 316",
          ElementType: "Crimped Metal Ribbon (Removable)",
          Certifications: "ISO 16852 (ATEX)",
          MaxOperatingTemperature: "+60°C",
        },
      },
      {
        id: "LK-FIRE-VALVE",
        name: "Free Fall Fire Valve Kit",
        manufacturerPartNumber: "10903709H",
        AGPPartNumber: "AGP-MECH-003",
        Make: "Landon Kingsway",
        images: [
          "https://www.landonkingsway.com/wordpress/wp-content/uploads/2020/02/freefall-fire-valve.png",
          "https://www.landonkingsway.com/wordpress/wp-content/uploads/2020/02/freefall-fire-valve.png",
          "https://www.landonkingsway.com/wordpress/wp-content/uploads/2020/02/freefall-fire-valve.png",
        ],
        shortDescription:
          "Gravity-operated fire safety valve kit with fusible link activation.",
        description:
          "The Landon Kingsway Free Fall Fire Valve is a gravity-actuated safety device. It is installed in fuel supply lines and held open by a tension cable connected to a fusible link (typically rated at 72°C or 145°C). In the event of a fire, the link melts, releasing the tension and allowing the valve to snap shut instantly, isolating the fuel supply to the generator.",
        uses: [
          "Emergency fuel isolation for boiler rooms",
          "Diesel generator fire safety systems",
          "Burner fuel line protection",
          "Compliance with building fire safety codes",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.landonkingsway.com/wordpress/wp-content/uploads/2021/08/109037XX-FREEFALL-FIRE-VALVE-MKII-1.pdf",
          },
        ],
        details: {
          ValveSize: "1/2 inch",
          Actuation: "Gravity-Free Fall",
          FusibleLinkRating: "72°C Standard (Optional 145°C)",
          BodyMaterial: "Brass",
          MaxOperatingPressure: "10 bar",
          InletOutlet: "BSP Female",
        },
      },
      {
        id: "RIDART-197VA",
        name: "Vent Valve & Flame Arrester (Combined)",
        manufacturerPartNumber: "197VA-50-AL",
        AGPPartNumber: "AGP-MECH-004",
        Make: "Ridart",
        images: [
          "https://www.ridart.it/images/CAT-197OLD.jpg",
          "https://www.ridart.it/images/CAT-197OLD.jpg",
          "https://www.ridart.it/images/CAT-197OLD.jpg",
        ],
        shortDescription:
          "Combined 2-inch pressure/vacuum vent valve with integrated flame arrestor.",
        description:
          "The Ridart 197VA-50-AL combines two critical safety functions in one unit. It acts as a breather valve to regulate internal tank pressure during filling and emptying, and includes an integrated flame arrestor to block external ignition sources. The aluminium construction ensures durability and corrosion resistance.",
        uses: [
          "Atmospheric venting for above-ground tanks",
          "Combined pressure/vacuum relief",
          "Fire protection for diesel storage",
          "Vapour control in fuel systems",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.ridart.it/datasheet/vacuum_vent_197.pdf",
          },
        ],
        details: {
          NominalSize: "2-inch Flange (DN50)",
          SettingPressure: "+30 mbar",
          SettingVacuum: "-2 mbar",
          FlameArrestor: "Integrated",
          Material: "Aluminium Body",
          FlowRate: "500 m³/h",
        },
      },
      {
        id: "BELIMO-SRFA",
        name: "Spring-Return Rotary Actuator (20Nm)",
        manufacturerPartNumber: "SRFA-S2-R",
        AGPPartNumber: "AGP-MECH-005",
        Make: "Belimo",
        images: [
          "https://www.belimo.com/pim/mam/europe/pictures-and-graphics/product/water_solutions/Actuators/Rotary-Spring/PIC_EU_SRF24A-R_ZSF_4C-product.jpg",
          "https://www.belimo.com/pim/mam/europe/pictures-and-graphics/product/water_solutions/Actuators/Rotary-Spring/PIC_EU_SRF24A-R_ZSF_4C-product.jpg",
          "https://www.belimo.com/pim/mam/europe/pictures-and-graphics/product/water_solutions/Actuators/Rotary-Spring/PIC_EU_SRF24A-R_ZSF_4C-product.jpg",
        ],
        shortDescription:
          "20Nm fail-safe rotary actuator for automated damper and valve control.",
        description:
          "The Belimo SRFA-S2-R is a heavy-duty rotary actuator designed for fail-safe applications. With 20Nm of torque and a spring-return mechanism, it ensures that dampers or valves return to a safe 'closed' or 'open' position in the event of power loss. It allows for precise automated control of airflow and fluid flow in critical systems.",
        uses: [
          "Automating air intake/outlet dampers on generators",
          "Actuating large ball valves for fluid control",
          "Emergency isolation in HVAC systems",
          "Fire and smoke damper actuation",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.belimo.com/mam/general-documents/datasheets/en-gb/belimo_SRFA-S2-R_datasheet_en-gb.pdf",
          },
        ],
        details: {
          Torque: "20 Nm",
          ControlSignal: "0-10V DC Modulating",
          PowerSupply: "24V AC/DC",
          SpringReturnTime: "< 15 seconds",
          ProtectionRating: "IP54",
          OperatingTemperature: "-30°C to +50°C",
        },
      },
      {
        id: "LEENGATE-LV8635",
        name: "Carbon Steel Ball Valve (Flanged 1.5-inch)",
        manufacturerPartNumber: "LV8635",
        AGPPartNumber: "AGP-MECH-006",
        Make: "Leengate",
        images: [
          "https://www.leengatevalves.co.uk/wp-content/uploads/2016/10/LV8635-600x600.jpg",
          "https://www.leengatevalves.co.uk/wp-content/uploads/2016/10/LV8635-600x600.jpg",
          "https://www.leengatevalves.co.uk/wp-content/uploads/2016/10/LV8635-600x600.jpg",
        ],
        shortDescription:
          "Industrial 1.5-inch flanged carbon steel ball valve with ISO mounting top.",
        description:
          "The Leengate LV8635 is a robust carbon steel ball valve featuring PN16 flanges for secure pipeline connection. It includes an ISO top mounting pad, making it ready for direct actuation (electric or pneumatic). Its carbon steel body ensures high pressure and temperature resistance suitable for industrial fuel and water lines.",
        uses: [
          "Main fuel line isolation",
          "Automated fuel transfer systems",
          "Industrial water and chemical piping",
          "High-pressure fluid control",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.leengatevalves.co.uk/wp-content/uploads/LV8635.pdf",
          },
        ],
        details: {
          NominalSize: "1.5-inch",
          EndConnection: "Flanged PN16",
          BodyMaterial: "Carbon Steel A216 WCB",
          OperatingPressure: "PN16 (16 bar)",
          TemperatureRange: "-29°C to +200°C",
          ActuationMount: "ISO 5211 Pad",
        },
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 4 — GENERATOR ENCLOSURES, PUMP SKIDS, E-HOUSE / E-POD
  --------------------------------------------------------------------------- */
  {
    category: "Generator Enclosures, Pump Skids, E-House/E-POD",
    slug: "generator-systems",
    categoryId: "CAT-ENCL",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767037025/AGP_Generator_Enclosures_Pump_Skids_E-House_E-POD_ebhz4f.png", // Reusing an existing product image for context
      alt: "Heavy-duty industrial door latch and damper components.",
    },
    description:
      "Heavy-duty hardware and safety components for constructing robust, secure, and certified generator enclosures and modular buildings.",
    items: [
      {
        id: "ATEX-DAMPER",
        name: "ATEX Zone 2 Gas Retention Damper",
        manufacturerPartNumber: "Custom-ATEX-GRD",
        AGPPartNumber: "AGP-ENCL-001",
        Make: "Engineered Air Treatment",
        images: [
          "https://www.engineeredairtreatment.co.uk/wp-content/uploads/2020/10/damperopenclosed_1.gif",
          "https://www.engineeredairtreatment.co.uk/wp-content/uploads/2020/10/damperopenclosed_1.gif",
          "https://www.engineeredairtreatment.co.uk/wp-content/uploads/2020/10/damperopenclosed_1.gif",
        ],
        shortDescription:
          "Certified ATEX Zone 2 dampers for gas retention and hazardous area ventilation.",
        description:
          "These heavy-duty dampers are custom-engineered for ATEX Zone 2 hazardous environments. They provide precise airflow control for generator enclosures and feature gas retention capabilities to seal off the enclosure in case of an emergency shutdown or gas leak, preventing the spread of hazardous fumes.",
        uses: [
          "Ventilation control in Oil & Gas generator enclosures",
          "Emergency air shut-off for hazardous areas",
          "Gas retention during fire suppression release",
          "Offshore platform HVAC protection",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://engineeredairtreatment.co.uk/wp-content/uploads/2021/02/Gas-Retention-Dampers-v1.pdf",
          },
        ],
        details: {
          ATEXZone: "Zone 2 (Gas)",
          Function: "Gas Retention / Shut-off",
          BladeOperation: "Opposed Blade (Low Leakage)",
          Material: "Galvanized or Stainless Steel",
          Actuation: "Pneumatic or Electric Actuator (Sold Separately)",
          Certifications: "Ex II 3G",
        },
      },
      {
        id: "KASON-LATCH",
        name: "Door Latch & Cylinder (Stainless Steel)",
        manufacturerPartNumber: "10056CL902205",
        AGPPartNumber: "AGP-ENCL-002",
        Make: "Kason",
        images: [
          "https://www.cateringhardwaredirect.co.uk/cdn/shop/products/black-powder-coated-cylinder-locking-latch-latches-410780_800x.jpg?v=1750922891",
          "https://www.cateringhardwaredirect.co.uk/cdn/shop/products/black-powder-coated-cylinder-locking-latch-latches-410780_800x.jpg?v=1750922891",
          "https://www.cateringhardwaredirect.co.uk/cdn/shop/products/black-powder-coated-cylinder-locking-latch-latches-410780_800x.jpg?v=1750922891",
        ],
        shortDescription:
          "Polished stainless steel heavy-duty door latch with locking cylinder.",
        description:
          "The Kason 10056 series latch is a premium door locking mechanism designed for heavy insulated walk-in doors. Finished in polished stainless steel, it offers superior corrosion resistance and durability. It includes a cylinder lock for security and an inside release mechanism to prevent accidental entrapment.",
        uses: [
          "Walk-in generator enclosure doors",
          "E-House access doors",
          "Cold storage and industrial cabinets",
          "Sound-proof acoustic doors",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.kasonind.com/files/pdf/Kason_IS_0056_SafeGuardLatch.pdf",
          },
        ],
        details: {
          Finish: "Polished Stainless Steel (or Black Powder Coated)",
          Function: "Cylinder Lock with Safety Release",
          Locking: "Keyed Cylinder Lock",
          DoorThickness: "Up to 150mm (adjustable)",
          Handing: "Reversible",
          Series: "SafeGuard™ 10056",
        },
      },
      {
        id: "POMMIER-HINGE",
        name: "Stainless Steel Hinge System (300mm)",
        manufacturerPartNumber: "082005700 Series",
        AGPPartNumber: "AGP-ENCL-003",
        Make: "Pommier",
        images: [
          "https://www.pommier.eu/sites/default/files/pim/thumbs_380_380/G/0820_05700.jpg",
          "https://www.pommier.eu/sites/default/files/pim/thumbs_380_380/G/0820_05700.jpg",
          "https://www.pommier.eu/sites/default/files/pim/thumbs_380_380/G/0820_05700.jpg",
        ],
        shortDescription:
          "Heavy-duty stainless steel hinge system (blade, bracket, pin) for large industrial doors.",
        description:
          "The Pommier hinge system is a modular, high-load bearing solution for heavy industrial doors. Comprising a 300mm stainless steel blade, robust bracket, and pin, it is engineered to support the weight of acoustic and armored doors on generator enclosures and containers without sagging or corrosion.",
        uses: [
          "Containerized generator doors",
          "Heavy acoustic enclosure access points",
          "Truck body and trailer doors",
          "Marine grade external cabinetry",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.pommier.eu/sites/default/files/downloads-documentions/pdf/AGS01-Web_082005700_en.pdf",
          },
        ],
        details: {
          BladeLength: "300mm",
          Material: "Stainless Steel",
          LoadCapacity: "Heavy-Duty (Spec varies by assembly)",
          Mounting: "Weld-on or Bolt-on",
          CorrosionResistance: "Excellent (Marine Grade)",
          PinType: "Non-removable safety pin",
        },
      },
      {
        id: "BLOXWICH-GASKET",
        name: "Strike Gasket (Heavy-Duty Rubber)",
        manufacturerPartNumber: "BCP20103E",
        AGPPartNumber: "AGP-ENCL-004",
        Make: "Bloxwich",
        images: [
          "https://www.bloxwichdoorgear.com/acatalog/mzi_db45e6f10cef0f50184496a27826e5fc_162_162_ffffff_75.jpg",
          "https://www.bloxwichdoorgear.com/acatalog/mzi_db45e6f10cef0f50184496a27826e5fc_162_162_ffffff_75.jpg",
          "https://www.bloxwichdoorgear.com/acatalog/mzi_db45e6f10cef0f50184496a27826e5fc_162_162_ffffff_75.jpg",
        ],
        shortDescription:
          "Heavy-duty rubber gasket for sealing door strikes against weather and vibration.",
        description:
          "The Bloxwich BCP20103E is a specialized heavy-duty rubber gasket designed to sit behind door strikes. It provides essential cushioning to absorb the impact of heavy doors closing and ensures a watertight seal around the locking mechanism, protecting the enclosure from moisture and dust ingress.",
        uses: [
          "Weatherproofing container door locks",
          "Vibration dampening for door strikes",
          "Sealing generator enclosure access points",
          "Industrial vehicle door assemblies",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.bloxwichdoorgear.com/acatalog/BCP20103E-zoom1.jpg",
          },
        ],
        details: {
          Material: "Heavy-Duty Rubber (EPDM/Neoprene blend)",
          Function: "Seal and Vibration Dampener",
          Application: "Behind Door Strike Plates",
          Color: "Black",
          Durability: "UV and Weather Resistant",
          Dimensions: "Custom cut for standard strike plates",
        },
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 5 — TESTING AND MEASUREMENT TOOLS
  --------------------------------------------------------------------------- */
  {
    category: "Testing and Measurement Tools",
    slug: "testing-measurement-tools",
    categoryId: "CAT-TEST",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1766949563/AGP_Testing_and_Measurement_Tools_a86az2.png",
      alt: "Engineer checking voltage with a digital multimeter in an electrical panel.",
    },
    description:
      "Portable and fixed instruments for on-site quality control, inspection, calibration, and material verification.",
    items: [
      {
        id: "FLEXBAR-17295",
        name: "Portable Hardness Tester (Quick-Check)",
        manufacturerPartNumber: "17295",
        AGPPartNumber: "AGP-TEST-001",
        Make: "Flexbar",
        images: [
          "https://www.flexbar.com/cdn/shop/products/17295_trans_1800x1800.jpg?v=1549385188",
          "https://www.flexbar.com/cdn/shop/products/17295_trans_1800x1800.jpg?v=1549385188",
          "https://www.flexbar.com/cdn/shop/products/17295_trans_1800x1800.jpg?v=1549385188",
        ],
        shortDescription:
          "Portable Quick-Check instrument for verifying metal hardness on-site.",
        description:
          "The Flexbar 17295 Quick-Check is a precision handheld tool designed for the rapid testing of material hardness. It allows quality control inspectors and engineers to verify the hardness of metals (such as steel, aluminum, and brass) directly on the production floor or job site without needing heavy benchtop equipment. It aids in verifying material compliance for structural components.",
        uses: [
          "On-site material quality control",
          "Verifying hardness of pipework and structural steel",
          "Incoming goods inspection for metal parts",
          "Maintenance checks on wear components",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.tqscorp.com/docs/products/Flexbar-Catalog.pdf",
          },
        ],
        details: {
          MeasurementScale: "Rockwell C, B, HRC, HRB (Requires Conversion)",
          TestMethod: "Rebound / Impact",
          Accuracy: "±6 HRC (Dependent on Conversion)",
          Display: "Analog Dial",
          Portability: "Handheld",
          Batteries: "N/A (Mechanical)",
        },
      },
    ],
  },
];
