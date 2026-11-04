import { projectImages } from "@/config/imageConfig";
import { ProjectItem } from "@/types/projects";




export const projectData: ProjectItem[] = [
  {
    id: "proj-01",
    slug: "abs-system-inspection-service-downtown-dubai",
    title: "ABS System Inspection & Calibration",
    service: "ABS System Repair",
    category: "Brake & Safety Systems",
    area: "Downtown Dubai",
    image: projectImages.absSystem,
    seo: {
      metaTitle: "ABS System Inspection & Repair in Downtown Dubai | Diagnostics",
      metaDescription: "Professional ABS system diagnostic, wheel speed sensor calibration, and module repair in Downtown Dubai. Rapid onsite diagnostic and emergency fix.",
      keywords: ["ABS repair Downtown Dubai", "brake warning light fix Dubai", "anti-lock brake system diagnostic"]
    },
    clientOverview: {
      carModel: "2021 BMW 5 Series",
      issueReported: "ABS light illuminated, traction control disabled during sudden braking",
      responseTimeMinutes: 25,
      completionTimeHours: "2.5 Hours"
    },
    problemAnalysis: "The vehicle presented an active ABS warning light on the dashboard. Computer scanning retrieved code C0035 (Left Front Wheel Speed Sensor Circuit Malfunction). Dust accumulation and wiring wear caused signal interruption to the ABS control module.",
    diagnosticSteps: [
      "OBD-II full-system computer scan to pull historical and active fault codes",
      "Live data stream analysis of individual wheel speed readings during test roll",
      "Oscilloscope resistance test on the left front wheel sensor harness",
      "Inspection of the tone ring for missing teeth or magnetic surface contamination"
    ],
    solutionDetails: "Replaced the degraded left front wheel speed sensor, cleared air gap debris around the tone ring, re-secured the harness, and performed dynamic ECU recalibration via OEM diagnostic software.",
    partsReplaced: ["OEM Left Front Wheel Speed Sensor", "Sensor Harness Clip Retainers"],
    resultsSummary: "ABS warning lights were cleared, full traction control functionality was restored, and live telemetry confirmed equal wheel speed signal output across all four hubs.",
    faqs: [
      {
        question: "Is it safe to drive with the ABS light on in Dubai?",
        answer: "Standard mechanical braking remains operational, but automatic anti-skid functions and emergency electronic stability controls are disabled, increasing skid risk on sandy or wet roads."
      }
    ]
  },
  {
    id: "proj-02",
    slug: "abs-brake-pad-replacement-business-bay",
    title: "ABS System & Ceramic Brake Pad Replacement",
    service: "Brake Pad Repair",
    category: "Brake & Safety Systems",
    area: "Business Bay",
    image: projectImages.absSystemBreakpadRepair,
    seo: {
      metaTitle: "Emergency ABS Brake Pad Repair Business Bay | High Performance Ceramic",
      metaDescription: "Low-noise ceramic brake pad replacement and ABS system checks in Business Bay, Dubai. Onsite mobile technician dispatched within 30 minutes.",
      keywords: ["brake pad replacement Business Bay", "car brake repair Dubai", "ceramic brake pads Dubai"]
    },
    clientOverview: {
      carModel: "2020 Audi Q7",
      issueReported: "High-pitched screeching noise upon applying brakes, extended stopping distance",
      responseTimeMinutes: 20,
      completionTimeHours: "1.5 Hours"
    },
    problemAnalysis: "Inspection revealed front brake pad wear down to 2mm remaining thickness, triggering the electronic brake wear sensor. Extreme heat friction had caused light glaze build-up on the brake rotors.",
    diagnosticSteps: [
      "Digital caliper measurement of rotor thickness and pad wear levels",
      "Thermal check for uneven caliper piston expansion",
      "Brake fluid moisture percentage testing using electronic tester",
      "ABS hydraulic module pressure test during manual pad depression"
    ],
    solutionDetails: "Installed premium heat-resistant ceramic brake pads, resurfaced front rotors within safety tolerance, replaced electronic wear sensors, and flushed old brake fluid with high-boiling-point DOT 4 fluid.",
    partsReplaced: ["Front Ceramic Brake Pad Set", "Electronic Brake Wear Sensor", "DOT 4 Synthetic Brake Fluid"],
    resultsSummary: "Screeching eliminated, pedal firmness restored to factory specification, and emergency braking stopping distance reduced by 18%.",
    faqs: [
      {
        question: "How long do ceramic brake pads last under Dubai driving conditions?",
        answer: "Ceramic pads typically last between 40,000 to 60,000 KM depending on stop-and-go city traffic and high summer temperatures."
      }
    ]
  },
  {
    id: "proj-03",
    slug: "abs-module-overhaul-al-barsha",
    title: "Complete ABS Control Module Overhaul",
    service: "ABS System Repair",
    category: "Brake & Safety Systems",
    area: "Al Barsha",
    image: projectImages.absSystemRepair,
    seo: {
      metaTitle: "ABS Control Module Repair & Overhaul in Al Barsha | Precision Diagnostics",
      metaDescription: "Expert ABS hydraulic unit and electronic control module repair in Al Barsha. Certified technicians, OEM coding, and complete safety audits.",
      keywords: ["ABS module repair Al Barsha", "car electronic brake controller fix", "ABS pump replacement Dubai"]
    },
    clientOverview: {
      carModel: "2019 Mercedes-Benz E-Class",
      issueReported: "Brake pedal felt soft/spongy, warning light on dashboard with internal relay error code",
      responseTimeMinutes: 30,
      completionTimeHours: "4.0 Hours"
    },
    problemAnalysis: "The ABS pump motor relay suffered internal solder ring degradation caused by prolonged exposure to under-hood heat cycles. Hydraulic pressure drops were detected inside the solenoid block.",
    diagnosticSteps: [
      "CAN-bus network signal integrity test",
      "Actuator test sequence to manually trigger ABS pump motor",
      "Hydraulic pressure reading at individual caliper supply ports",
      "Micro-soldering inspection of the internal control module circuit board"
    ],
    solutionDetails: "Replaced damaged internal relays, reflowed micro-circuit connections, re-sealed the module casing, replaced internal seals on the hydraulic block, and bleed-flushed the system using automated pressure bleeders.",
    partsReplaced: ["ABS Module Internal Relay Assembly", "High-Temperature Hydraulic Seals", "OEM Brake Fluid"],
    resultsSummary: "Hydrostatic pressure fully restored across all four brake channels with zero CAN-bus communication drops detected during extended road testing.",
    faqs: [
      {
        question: "What causes ABS modules to fail in hot climates?",
        answer: "Excessive engine bay temperatures combine with vehicle vibration to degrade internal circuit solder joints and dry out rubber seals in the hydraulic block."
      }
    ]
  },
  {
    id: "proj-04",
    slug: "mobile-battery-replacement-dubai-marina",
    title: "On-Site Mobile Battery Replacement & AGM Setup",
    service: "Car Battery Replacement",
    category: "Electrical & Battery",
    area: "Dubai Marina",
    image: projectImages.batterReplacement2,
    seo: {
      metaTitle: "24/7 Mobile Battery Replacement Dubai Marina | 30-Min Onsite Delivery",
      metaDescription: "Fast on-site car battery replacement in Dubai Marina. Premium AGM/EFB batteries installed with full BMS reset and warranty.",
      keywords: ["battery replacement Dubai Marina", "car battery emergency Dubai", "AGM battery installation"]
    },
    clientOverview: {
      carModel: "2022 Porsche Macan",
      issueReported: "Engine failed to turn over in apartment parking basement, battery clicking sound",
      responseTimeMinutes: 18,
      completionTimeHours: "45 Minutes"
    },
    problemAnalysis: "Battery voltage dropped to 9.6V under load test. Heat degradation accelerated internal plate sulfation, rendering the 4-year-old original factory battery incapable of cranking the starter.",
    diagnosticSteps: [
      "Midtronics digital battery conductance test",
      "Alternator charging voltage output check (tested 14.1V idling)",
      "Parasitic draw scan to ensure no background electronics leak power"
    ],
    solutionDetails: "Delivered and installed a high-capacity Varta AGM battery onsite. Executed modern Battery Management System (BMS) registration to ensure correct charging profiles from the alternator.",
    partsReplaced: ["Varta AGM 95Ah Heavy-Duty Battery"],
    resultsSummary: "Instant engine start achieved, BMS re-coded to avoid overcharging, and electrical voltage stabilized across all vehicle control units.",
    faqs: [
      {
        question: "Why is BMS registration required after changing a battery in modern cars?",
        answer: "BMS registration resets the ECU's battery aging algorithm so the alternator charges the new battery at the correct voltage, preventing premature failure."
      }
    ]
  },
  {
    id: "proj-05",
    slug: "new-battery-installation-jumeirah-village-circle",
    title: "Heavy-Duty Battery Installation & Charging System Check",
    service: "Car Battery Installation",
    category: "Electrical & Battery",
    area: "Jumeirah Village Circle",
    image: projectImages.batteryInstallation,
    seo: {
      metaTitle: "Car Battery Installation in JVC Dubai | Free Onsite Diagnostic & Warranty",
      metaDescription: "Top-rated car battery installation service in Jumeirah Village Circle (JVC). Genuine batteries, voltage checks, and terminal protection included.",
      keywords: ["car battery JVC", "battery change Jumeirah Village Circle", "mobile mechanic Dubai"]
    },
    clientOverview: {
      carModel: "2018 Nissan Patrol 5.6L V8",
      issueReported: "Sluggish crank in the morning, dashboard lights flickering",
      responseTimeMinutes: 22,
      completionTimeHours: "35 Minutes"
    },
    problemAnalysis: "The existing flooded battery showed severe terminal corrosion and internal cell imbalance. High ambient heat caused electrolyte evaporation.",
    diagnosticSteps: [
      "Cranking voltage test during ignition cycle",
      "Diode ripple test to evaluate alternator rectifier performance",
      "Terminal resistance check"
    ],
    solutionDetails: "Cleaned terminal connectors with anti-corrosion solution, installed a tropicalized maintenance-free battery, applied anti-corrosion protective sealant to post terminals.",
    partsReplaced: ["Solite 100Ah Maintenance-Free Battery", "Anti-Corrosion Terminal Washers"],
    resultsSummary: "Cranking speed returned to instant startup performance; steady 13.8V reading logged during heavy accessory usage.",
    faqs: [
      {
        question: "How long does a car battery typically last in Dubai?",
        answer: "Due to extreme summer road heat, standard car batteries in Dubai usually last between 1.5 to 2.5 years."
      }
    ]
  },
  {
    id: "proj-06",
    slug: "emergency-battery-replacement-business-bay",
    title: "Roadside Emergency Battery Swap & Starter Check",
    service: "Car Battery Replacement",
    category: "Electrical & Battery",
    area: "Business Bay",
    image: projectImages.batteryInstallation,
    seo: {
      metaTitle: "Emergency Car Battery Replacement Business Bay | Express Onsite Service",
      metaDescription: "Stranded in Business Bay? Immediate onsite car battery replacement with diagnostic test. 18-Month Warranty included on all batteries.",
      keywords: ["emergency battery replacement Business Bay", "car battery delivery Dubai", "24h car battery jumpstart"]
    },
    clientOverview: {
      carModel: "2021 Toyota RAV4",
      issueReported: "Vehicle non-responsive after parking for 30 minutes in commercial lot",
      responseTimeMinutes: 15,
      completionTimeHours: "30 Minutes"
    },
    problemAnalysis: "Internal cell short circuit caused immediate total voltage loss (dead cell), dropping baseline voltage to 8.2V under load.",
    diagnosticSteps: [
      "Automated battery analyzer testing cold cranking amps (CCA)",
      "Starter motor current draw inspection",
      "Key-off drain current test"
    ],
    solutionDetails: "Rapid delivery of high-CCA maintenance-free battery, swapped out failed unit, verified starter motor amperage draw was within 120A nominal range.",
    partsReplaced: ["Amaron PRO 70Ah Maintenance-Free Battery"],
    resultsSummary: "Full power restored to all ECU accessories; vehicle started on first turn of the key.",
    faqs: [
      {
        question: "How fast can a mobile battery technician arrive in Business Bay?",
        answer: "Our mobile vans are stationed across Business Bay with average response times under 20 to 30 minutes."
      }
    ]
  },
  {
    id: "proj-07",
    slug: "ac-system-overhaul-jumeirah-village-circle",
    title: "Complete Car AC Compressor & System Overhaul",
    service: "Car AC Repair",
    category: "Climate Control",
    area: "Jumeirah Village Circle",
    image: projectImages.carAcRepair,
    seo: {
      metaTitle: "Car AC Repair & Compressor Replacement in JVC | Chill Guarantee",
      metaDescription: "Is your car AC blowing hot air in JVC? Complete auto air conditioning diagnosis, compressor replacement, and refrigerant vacuum flush.",
      keywords: ["car AC repair JVC", "auto AC cooling fix Dubai", "car compressor replacement"]
    },
    clientOverview: {
      carModel: "2017 Lexus ES350",
      issueReported: "AC blowing warm air while idling, cooling slightly only while driving",
      responseTimeMinutes: 30,
      completionTimeHours: "3.5 Hours"
    },
    problemAnalysis: "Low-pressure side reading was excessive while high-pressure side remained low, signaling internal compressor valve plate slippage and refrigerant contamination.",
    diagnosticSteps: [
      "Dual manifold gauge pressure analysis",
      "UV dye injection leak check on condenser coils and evaporator expansion valve",
      "Infrared thermographic temperature mapping of AC vents"
    ],
    solutionDetails: "Flushed AC lines with solvent, replaced internal AC compressor unit, installed new receiver drier and expansion valve, performed deep 30-minute vacuum, and refilled exact factory spec R134a gas.",
    partsReplaced: ["OEM Denso AC Compressor", "Expansion Valve", "Receiver Drier", "R134a Refrigerant & PAG Oil"],
    resultsSummary: "Vent outlet temperature dropped from 24°C down to 4.5°C under ambient 42°C testing conditions.",
    faqs: [
      {
        question: "Why does my car AC stop cooling when idling at traffic lights?",
        answer: "This is usually caused by weak condenser fan airflow, a failing compressor control valve, or low refrigerant pressure."
      }
    ]
  },
  {
    id: "proj-08",
    slug: "car-not-starting-diagnostic-dubai-silicon-oasis",
    title: "Advanced Engine No-Start & Computer Diagnostics",
    service: "Car Computer Diagnostic",
    category: "Engine Diagnostics",
    area: "Dubai Silicon Oasis",
    image: projectImages.carNotStartingFix,
    seo: {
      metaTitle: "Car Not Starting Diagnostic in Dubai Silicon Oasis | Mobile Mechanic",
      metaDescription: "Expert mobile auto diagnostic for cars not starting in DSO. Spark, fuel pressure, starter relay, and ECU trouble code isolation.",
      keywords: ["car not starting Dubai Silicon Oasis", "mobile auto electrician Dubai", "car diagnostic scanner DSO"]
    },
    clientOverview: {
      carModel: "2019 Ford Mustang 2.3L EcoBoost",
      issueReported: "Engine cranks smoothly but fails to ignite or start",
      responseTimeMinutes: 25,
      completionTimeHours: "1.5 Hours"
    },
    problemAnalysis: "Zero fuel line pressure detected at the high-pressure fuel rail. Diagnostic code P0627 (Fuel Pump Control Circuit Open) was active.",
    diagnosticSteps: [
      "Fuel pressure sensor live telematics log during crank cycle",
      "Fuel pump relay circuit resistance measurement using digital multimeter",
      "Spark plug pulse validation using inline spark tester",
      "ECU ignition voltage verification"
    ],
    solutionDetails: "Replaced burnt fuel pump driver module, cleaned fuse box relay terminal contacts, and reprogrammed the pump control parameter in the ECU.",
    partsReplaced: ["Fuel Pump Driver Module", "Heavy Duty Ignition Relay"],
    resultsSummary: "Fuel rail pressure returned to 55 PSI static / 1,500 PSI direct injection operational rating; engine starts instantly.",
    faqs: [
      {
        question: "What are the top reasons a car cranks but won't start?",
        answer: "The most common causes are fuel pump failure, a blown fuel relay, bad crankshaft position sensors, or failed ignition coils."
      }
    ]
  },
  {
    id: "proj-09",
    slug: "general-mechanical-car-maintenance-al-karama",
    title: "Major Service & Mechanical Maintenance Package",
    service: "Car Repair & Maintenance",
    category: "Preventative Maintenance",
    area: "Al Karama",
    image: projectImages.carRepair,
    seo: {
      metaTitle: "Full Car Service & Mechanical Maintenance in Al Karama | OEM Parts",
      metaDescription: "Comprehensive major service maintenance in Al Karama, Dubai. Engine oil flush, spark plugs, filter replacements, and 50-point inspection.",
      keywords: ["car maintenance Al Karama", "major service Dubai", "car repair garage Karama"]
    },
    clientOverview: {
      carModel: "2018 Honda Accord 2.4L",
      issueReported: "Routine 100,000 KM major maintenance due, rough idling engine baseline",
      responseTimeMinutes: 35,
      completionTimeHours: "3.0 Hours"
    },
    problemAnalysis: "Spark plugs were worn beyond gap tolerances (1.4mm vs 1.1mm spec), engine air filter heavily clogged with micro-sand, throttle body showed carbon deposits.",
    diagnosticSteps: [
      "50-point safety and fluid degradation check",
      "Bore scope camera inspection of intake manifold carbon buildup",
      "Suspension bushing visual check and power steering line audit"
    ],
    solutionDetails: "Replaced oil with 100% Fully Synthetic 5W-30 oil, installed laser iridium spark plugs, replaced engine air/cabin filters, cleaned throttle valve assembly, and completed 4-wheel rotation.",
    partsReplaced: ["Fully Synthetic Oil 5W-30", "OEM Oil Filter", "Laser Iridium Spark Plugs (x4)", "Engine Air & Cabin Filters"],
    resultsSummary: "Idle RPM stabilized smoothly at 750 RPM with zero vibration; fuel efficiency improved by an estimated 12%.",
    faqs: [
      {
        question: "How often should I do a major service on my car in Dubai?",
        answer: "We recommend a major service every 20,000 KM or 12 months due to harsh heat and dust conditions."
      }
    ]
  },
  {
    id: "proj-10",
    slug: "body-dent-paint-scratch-repair-deira",
    title: "Precision Smart Dent Repair & Scratch Touch-Up",
    service: "Dent & Paint",
    category: "Bodywork & Paint",
    area: "Deira",
    image: projectImages.dentPaint,
    seo: {
      metaTitle: "Car Dent & Scratch Paint Repair Deira | Factory Color Match Guaranteed",
      metaDescription: "Affordable and fast car dent repair and paint scratch touch-up in Deira, Dubai. Computerized color matching and clear coat protection.",
      keywords: ["dent repair Deira", "car paint scratch touchup Dubai", "smart dent repair"]
    },
    clientOverview: {
      carModel: "2020 Hyundai Tucson",
      issueReported: "Side passenger door dented with clear coat paint scratches from parking collision",
      responseTimeMinutes: 40,
      completionTimeHours: "1 Day"
    },
    problemAnalysis: "Creased metal impression on lower door panel with deep clear coat scoring that did not penetrate the primer layer.",
    diagnosticSteps: [
      "Paint thickness gauge reading to verify original factory clear coat levels",
      "Spectrophotometer computer color code reading (Code: WW8 White)",
      "Panel alignment measurement"
    ],
    solutionDetails: "Extracted panel crease using paintless dent repair (PDR) rods, feathered scratched clear coat, applied color-matched base paint, and finished with 2K high-gloss anti-UV clear coat.",
    partsReplaced: ["PPG Automotive Paint & 2K Anti-Scratch Clear Coat"],
    resultsSummary: "Panel line contours restored to 100% original shape with zero paint line blending marks under booth inspection.",
    faqs: [
      {
        question: "Can dent repair be done without repainting the entire panel?",
        answer: "Yes! If the paint isn't cracked, Paintless Dent Repair (PDR) can pop out the dent while preserving the original factory finish."
      }
    ]
  },
  {
    id: "proj-11",
    slug: "complete-body-denting-painting-downtown-dubai",
    title: "Luxury Body Panel Repair & Full Painting",
    service: "Body Repair",
    category: "Bodywork & Paint",
    area: "Downtown Dubai",
    image: projectImages.dentPaintRepair,
    seo: {
      metaTitle: "Luxury Car Body Denting & Painting Downtown Dubai | Oven Baked Finish",
      metaDescription: "High-end auto body repair, collision restoration, and spray booth painting in Downtown Dubai. 3-Year Paint Warranty provided.",
      keywords: ["car body repair Downtown Dubai", "luxury car painting Dubai", "car accident body shop"]
    },
    clientOverview: {
      carModel: "2021 BMW X6",
      issueReported: "Rear bumper and quarter panel dented from pillar scrape in parking basement",
      responseTimeMinutes: 30,
      completionTimeHours: "2 Days"
    },
    problemAnalysis: "Deformed rear aluminum quarter panel section with structural paint cracking down to raw metal.",
    diagnosticSteps: [
      "Laser chassis alignment check to ensure zero frame deviation",
      "Metal substrate pull test",
      "Automotive paint gauge scanning"
    ],
    solutionDetails: "Pushed and reshaped aluminum panel using hydraulic body equipment, applied lightweight fiber filler, sealed with epoxy primer, and baked paint in a dust-free Italian spray booth.",
    partsReplaced: ["Epoxy Primer", "OEM OEM Metal Basecoat", "Ultra-Gloss UV Clearcoat"],
    resultsSummary: "Factory-grade metallic paint match achieved with smooth reflective gloss matching surrounding body panels.",
    faqs: [
      {
        question: "How long does auto paint baking take in a professional booth?",
        answer: "Oven curing typically takes 45 to 60 minutes at 60°C to ensure full clear coat hardness and paint bonding."
      }
    ]
  },
  {
    id: "proj-12",
    slug: "full-engine-diagnostics-overhaul-al-barsha",
    title: "Complete Engine Overhaul & Head Gasket Replacement",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "Al Barsha",
    image: projectImages.engineRepair,
    seo: {
      metaTitle: "Full Engine Diagnostic & Overhaul in Al Barsha | Cylinder Head Repair",
      metaDescription: "Professional engine rebuild, head gasket replacement, and timing chain repair in Al Barsha, Dubai. Expert engine specialists.",
      keywords: ["engine repair Al Barsha", "car engine rebuild Dubai", "head gasket repair Dubai"]
    },
    clientOverview: {
      carModel: "2016 Nissan Pathfinder 3.5L",
      issueReported: "Engine overheating, white exhaust smoke, coolant level constantly dropping",
      responseTimeMinutes: 30,
      completionTimeHours: "3 Days"
    },
    problemAnalysis: "Cylinder head gasket breached between cylinders 3 and 5, causing engine coolant to leak directly into combustion chambers.",
    diagnosticSteps: [
      "Chemical combustion leak test (block test) in radiator neck",
      "Cylinder compression test (Cylinder 3 logged 65 PSI vs 150 PSI standard)",
      "Cooling system pressure decay test"
    ],
    solutionDetails: "Dismantled cylinder head, skimmed and pressure-tested head surface at machine shop, replaced head gaskets, valve stem seals, timing chain kit, and filled with fresh engine coolant.",
    partsReplaced: ["OEM Multi-Layer Steel Head Gasket Set", "Timing Chain Kit", "Valve Stem Seals", "Nissan Long-Life Coolant"],
    resultsSummary: "Equal 152 PSI compression achieved across all 6 cylinders; engine runs cool at steady operating temperatures.",
    faqs: [
      {
        question: "What are the main warning signs of a blown head gasket?",
        answer: "White smoke from the exhaust, milky oil residue under the oil cap, bubbling in the coolant reservoir, and rapid engine overheating."
      }
    ]
  },
  {
    id: "proj-13",
    slug: "full-service-workshop-car-repair-al-quoz",
    title: "Complete Workshop Comprehensive Repair & Fleet Service",
    service: "Garage Car Repair",
    category: "Preventative Maintenance",
    area: "Al Quoz",
    image: projectImages.garageCarRepair,
    seo: {
      metaTitle: "Full-Service Workshop Car Repair Al Quoz | Modern Repair Center",
      metaDescription: "State-of-the-art auto repair garage in Al Quoz, Dubai. Full mechanical, electrical, suspension, and engine diagnostic capabilities under one roof.",
      keywords: ["car garage Al Quoz", "auto repair shop Dubai", "car workshop Al Quoz"]
    },
    clientOverview: {
      carModel: "2019 Land Rover Range Rover Sport",
      issueReported: "Suspension warning light active, steering wheel vibration above 80 km/h, brake noise",
      responseTimeMinutes: 20,
      completionTimeHours: "1 Day"
    },
    problemAnalysis: "Air suspension compressor pressure low due to valve block leaking; front lower control arm bushings worn out.",
    diagnosticSteps: [
      "Land Rover Pathfinder OEM software scan",
      "3D laser wheel alignment diagnostic",
      "Pneumatic air suspension pressure hold test"
    ],
    solutionDetails: "Replaced air suspension solenoid valve block, swapped front lower control arms, replaced front rotors/pads, and completed 3D laser wheel alignment.",
    partsReplaced: ["Air Suspension Valve Block", "Front Lower Control Arms (x2)", "Brake Rotors & Pads"],
    resultsSummary: "Air ride height holds steadily overnight with zero drop; steering tracking runs true at highway speeds without wheel vibration.",
    faqs: [
      {
        question: "Can I bring any car make to your workshop in Al Quoz?",
        answer: "Yes, our workshop is fully equipped with OEM diagnostic tools for European, Japanese, American, and Korean vehicles."
      }
    ]
  },
  {
    id: "proj-14",
    slug: "ac-gas-refill-leak-check-jumeirah",
    title: "Precision AC Gas Refill & Dye Leak Test",
    service: "Car AC Gas Refill",
    category: "Climate Control",
    area: "Jumeirah",
    image: projectImages.refillGas,
    seo: {
      metaTitle: "Car AC Gas Refill Jumeirah | Computerized Gas Recharge & Leak Fix",
      metaDescription: "Fast car AC gas topping and vacuum leak test in Jumeirah, Dubai. Instant cabin cooling recovery using genuine R134a/R1234yf refrigerant.",
      keywords: ["car AC gas refill Jumeirah", "auto refrigerant recharge Dubai", "car AC gas price Dubai"]
    },
    clientOverview: {
      carModel: "2020 Mitsubishi Pajero 3.8L",
      issueReported: "Air conditioner blowing mild air, fan speed functioning normally",
      responseTimeMinutes: 25,
      completionTimeHours: "45 Minutes"
    },
    problemAnalysis: "Refrigerant charge was low (180g remaining out of 850g capacity) caused by micro-seep at Schrader service valve cores.",
    diagnosticSteps: [
      "Automated recovery machine evacuation and weight measurement",
      "Nitrogen high-pressure hold test at 250 PSI",
      "UV fluorescent dye injection and halogen leak detector sweep"
    ],
    solutionDetails: "Replaced high/low side Schrader valve cores, vacuumed system down to -29 inHg for 20 minutes to eliminate internal moisture, and recharged precise weight of R134a refrigerant.",
    partsReplaced: ["AC Service Valve Cores", "R134a Refrigerant Gas", "PAG 46 Synthetic Compressor Oil"],
    resultsSummary: "System holds vacuum pressure under load; AC output vents blow cold air at 5.1°C.",
    faqs: [
      {
        question: "How long does a car AC gas top-up take?",
        answer: "A complete recovery, vacuum, leak check, and refill process takes approximately 30 to 45 minutes."
      }
    ]
  },
  {
    id: "proj-15",
    slug: "headlight-repair-polishing-mirdif",
    title: "Headlight Lens Restoration & LED Repair",
    service: "Electrical Repair",
    category: "Electrical & Battery",
    area: "Mirdif",
    image: projectImages.headlightRepair,
    seo: {
      metaTitle: "Car Headlight Repair & Lens Restoration Mirdif | UV Sealant Protected",
      metaDescription: "Oxidized or dim headlights in Mirdif? Professional headlight lens restoration, LED repair, and ceramic clear coat protection.",
      keywords: ["headlight restoration Mirdif", "car headlight repair Dubai", "dim headlight fix"]
    },
    clientOverview: {
      carModel: "2015 Toyota Camry",
      issueReported: "Severely oxidized yellow headlights causing poor night driving visibility",
      responseTimeMinutes: 30,
      completionTimeHours: "1 Hour"
    },
    problemAnalysis: "Polycarbonate headlight lenses oxidized from UV exposure, reducing total forward light beam output by an estimated 60%.",
    diagnosticSteps: [
      "Lux meter light output measurement",
      "Internal reflector moisture check",
      "Electrical bulb socket voltage delivery check"
    ],
    solutionDetails: "Wet-sanded lenses across progressive grits (800 to 3000 grit), machine-compounded lens clarity, and sealed polycarbonate with ceramic UV-blocking coat.",
    partsReplaced: ["Ceramic UV Polycarbonate Sealant Coat"],
    resultsSummary: "Headlight lens glass restored to 100% optical clarity; beam lux output improved by 250%.",
    faqs: [
      {
        question: "How long does headlight restoration last in Dubai heat?",
        answer: "With our ceramic UV seal coat applied, restored headlights stay clear for 18 to 24 months."
      }
    ]
  },
  {
    id: "proj-16",
    slug: "onsite-roadside-assistance-repair-dubailand",
    title: "24/7 Mobile Roadside Emergency Repair",
    service: "Onsite Car Repair",
    category: "Emergency Roadside",
    area: "Dubailand",
    image: projectImages.onsiteCarRepair,
    seo: {
      metaTitle: "24/7 Onsite Mobile Car Repair Dubailand | Emergency Roadside Assistance",
      metaDescription: "Stranded with car trouble in Dubailand? Fast mobile mechanic dispatch for onsite battery, belt, starter, or fuel repairs.",
      keywords: ["mobile mechanic Dubailand", "roadside assistance Dubai", "onsite car repair Dubailand"]
    },
    clientOverview: {
      carModel: "2018 Chevrolet Tahoe",
      issueReported: "Serpentine accessory drive belt snapped on highway, power steering lost and alternator battery light lit",
      responseTimeMinutes: 20,
      completionTimeHours: "1 Hour"
    },
    problemAnalysis: "Serpentine belt snapped due to a seized AC tensioner pulley, causing immediate loss of power steering assist and battery charging.",
    diagnosticSteps: [
      "Pulley rotation check to verify drive accessories turn freely",
      "Water pump shaft play check to ensure no overheat damage occurred"
    ],
    solutionDetails: "Replaced seized accessory drive belt tensioner assembly on location and routed new heavy-duty multi-rib serpentine belt.",
    partsReplaced: ["Drive Belt Tensioner Assembly", "Gates Micro-V Serpentine Belt"],
    resultsSummary: "Power steering assist and alternator charging function fully restored onsite without requiring flatbed towing.",
    faqs: [
      {
        question: "Can major car repairs be done on the side of the road in Dubai?",
        answer: "Yes, our mobile vans carry emergency parts, diagnostic scanners, and tools for batteries, belts, alternators, starters, and fuel systems."
      }
    ]
  },
  {
    id: "proj-17",
    slug: "parking-lot-emergency-repair-dubai-mall",
    title: "Basement Parking Emergency Mechanical Service",
    service: "Mobile Car Repair",
    category: "Emergency Roadside",
    area: "Dubai Mall Parking",
    image: projectImages.parkingCarRepair,
    seo: {
      metaTitle: "Emergency Car Repair in Dubai Mall Parking | Low Clearance Van Service",
      metaDescription: "Stuck in a low-clearance basement parking garage? Mobile mechanics equipped for underground parking repairs in Dubai Mall.",
      keywords: ["basement parking car repair Dubai", "Dubai Mall mobile mechanic", "car starter repair parking"]
    },
    clientOverview: {
      carModel: "2019 Kia Optima",
      issueReported: "Starter motor non-responsive in Level P2 basement parking",
      responseTimeMinutes: 15,
      completionTimeHours: "1.5 Hours"
    },
    problemAnalysis: "Starter solenoid motor failed internally; key start signal was received at starter terminal but solenoid failed to extend drive gear pin.",
    diagnosticSteps: [
      "Ignition switch trigger voltage check at starter relay",
      "Direct 12V bypass test to starter solenoid terminal"
    ],
    solutionDetails: "Dispatched low-clearance service unit into basement P2, unbolted starter motor on-site, and fitted replacement OEM unit.",
    partsReplaced: ["Denso Starter Motor Assembly"],
    resultsSummary: "Engine cranked smoothly and vehicle successfully driven out of basement level without towing.",
    faqs: [
      {
        question: "Can tow trucks pull cars out of low-clearance underground parkings in Dubai?",
        answer: "Most standard tow trucks cannot enter low-clearance parking garages, which is why our mobile mechanics fix the vehicle directly inside the spot."
      }
    ]
  },
  {
    id: "proj-18",
    slug: "radiator-cooling-system-repair-dubailand",
    title: "Radiator Repair & Engine Cooling Overhaul",
    service: "Cooling System Repair",
    category: "Preventative Maintenance",
    area: "Dubailand",
    image: projectImages.raditorRepair,
    seo: {
      metaTitle: "Radiator Repair & Overheating Fix Dubailand | Leak Test & Flush",
      metaDescription: "Prevent engine damage from overheating. Fast radiator replacement, hose repairs, and coolant pressure tests in Dubailand.",
      keywords: ["radiator repair Dubailand", "car overheating fix Dubai", "coolant leak repair"]
    },
    clientOverview: {
      carModel: "2017 Jeep Grand Cherokee V6",
      issueReported: "Engine temperature spike during heavy driving, coolant puddle spotted under front bumper",
      responseTimeMinutes: 25,
      completionTimeHours: "2.5 Hours"
    },
    problemAnalysis: "Plastic end tank seam of aluminum radiator cracked under system pressure from aging thermal cycles.",
    diagnosticSteps: [
      "Cooling system pressure test at 18 PSI (revealed pressure drop at upper tank seam)",
      "Thermostat opening temperature check",
      "Radiator fan high-speed operation verification"
    ],
    solutionDetails: "Replaced cracked aluminum radiator core unit, installed new upper/lower radiator hoses, fitted low-temp thermostat, and vacuum-refilled system with pre-mixed coolant.",
    partsReplaced: ["Heavy Duty Aluminum Core Radiator", "Thermostat", "Coolant Hoses", "HOAT Coolant Fluid"],
    resultsSummary: "Cooling system holds static pressure at 20 PSI; engine operating temperatures stay steady at 90°C under load.",
    faqs: [
      {
        question: "Why should tap water never be used in a car radiator in Dubai?",
        answer: "Tap water causes rapid internal metal corrosion, mineral scaling, and boils at lower temperatures compared to specialized automotive coolant."
      }
    ]
  },
  {
    id: "proj-19",
    slug: "advanced-engine-mechanical-repair-international-city",
    title: "Precision Engine Valve & Cylinder Head Repair",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "International City",
    image: projectImages.repairEngine,
    seo: {
      metaTitle: "Engine Repair & Mechanical Overhaul in International City Dubai",
      metaDescription: "Advanced engine diagnostic, misfire isolation, valve replacement, and timing adjustment in International City. Certified auto mechanics.",
      keywords: ["engine repair International City", "car misfire fix Dubai", "cylinder head repair"]
    },
    clientOverview: {
      carModel: "2018 Volkswagen Golf GTI 2.0 TSI",
      issueReported: "Check engine light flashing, engine shaking severely on acceleration",
      responseTimeMinutes: 30,
      completionTimeHours: "4.0 Hours"
    },
    problemAnalysis: "P0302 code (Cylinder 2 Misfire). Intake valve ports severely choked with carbon deposits, preventing full intake air volume entry.",
    diagnosticSteps: [
      "VAG-COM diagnostic computer scan",
      "Ignition coil swap test across cylinders to rule out electrical fault",
      "Borescope inspection showing heavy carbon buildup on intake valves"
    ],
    solutionDetails: "Executed media blasting clean on intake valves using walnut shell media, replaced fuel injector seals, fitted new OEM double-iridium spark plugs, and cleared adaptation tables.",
    partsReplaced: ["Double Iridium Spark Plugs", "TSI Injector Seal Repair Kits"],
    resultsSummary: "Equal combustion balance restored across all cylinders; idle smooth with full horsepower output under boost.",
    faqs: [
      {
        question: "Why do direct-injection engines need valve carbon cleaning?",
        answer: "Direct injection sprays fuel directly into the cylinder, meaning fuel never washes over intake valves to clean off baked-on oil carbon deposits."
      }
    ]
  },
  {
    id: "proj-20",
    slug: "quick-car-battery-swap-dubai-hills",
    title: "Express Onsite Battery Swap & Voltage Audit",
    service: "Battery Replacement",
    category: "Electrical & Battery",
    area: "Dubai Hills",
    image: projectImages.replaceBattery,
    seo: {
      metaTitle: "Express Car Battery Swap Dubai Hills | Mobile Delivery & Fitment",
      metaDescription: "Fast car battery swap in Dubai Hills. Premium sealed maintenance-free batteries delivered to your door with voltage stability audits.",
      keywords: ["car battery swap Dubai Hills", "battery delivery Dubai Hills", "on call car battery"]
    },
    clientOverview: {
      carModel: "2021 Volvo XC90",
      issueReported: "Dashboard start/stop warning message, low auxiliary battery indication",
      responseTimeMinutes: 20,
      completionTimeHours: "35 Minutes"
    },
    problemAnalysis: "Auxiliary support battery voltage degraded to 10.2V, disabling key safety start/stop functions.",
    diagnosticSteps: [
      "Dual battery diagnostic check (Main AGM + Auxiliary battery)",
      "Alternator charge rate scan under full electrical accessory load"
    ],
    solutionDetails: "Swapped out depleted auxiliary battery unit, calibrated battery state-of-charge tracking via OBD-II, and inspected main terminal connections.",
    partsReplaced: ["OEM Spec Auxiliary 12V Support Battery"],
    resultsSummary: "Start/Stop and safety features fully reactivated; charging voltage stabilized across both battery loops.",
    faqs: [
      {
        question: "Do modern luxury cars have more than one battery?",
        answer: "Yes, many modern vehicles feature a main battery for engine cranking and an auxiliary battery to power onboard electronics and safety systems."
      }
    ]
  }
];

