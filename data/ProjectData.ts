import { projectImages } from "@/config/imageConfig";
import { ProjectItem } from "@/types/project";

export const projectData: ProjectItem[] = [
  {
    id: "proj-01",
    slug: "porsche-front-bumper-sensor-repair-dubai-marina",
    title: "Porsche Front Bumper & Electrical Harness Repair",
    service: "Body Repair",
    category: "Bodywork & Paint",
    area: "Dubai Marina",
    image: projectImages.project1,
    seo: {
      metaTitle: "Porsche Front Bumper Repair in Dubai Marina | Specialist Fix",
      metaDescription: "Professional Porsche front bumper disassembly, sensor wiring check, and headlight alignment in Dubai Marina. Expert mobile technician service.",
      keywords: ["Porsche repair Dubai Marina", "car bumper fixing Dubai", "luxury car electrical repair"]
    },
    clientOverview: {
      carModel: "2020 Porsche Panamera",
      issueReported: "Loose front bumper clips, parking sensor malfunction after low-speed scrape",
      responseTimeMinutes: 25,
      completionTimeHours: "2.0 Hours"
    },
    problemAnalysis: "Lower bumper brackets and electrical clips were dislodged, causing intermittent sensor disconnection and panel misalignment.",
    diagnosticSteps: [
      "Diagnostic scan of parking assistance module and front radar sensors",
      "Inspection of front bumper locking tabs and internal wiring harness",
      "Headlight bracket stability check"
    ],
    solutionDetails: "Carefully dismounted front fascia, realigned mounting brackets, secured broken clip retainers, and tested all front-end electronic sensors.",
    partsReplaced: ["OEM Bumper Clip Fasteners", "Sensor Harness Retainer"],
    resultsSummary: "Bumper alignment restored to factory flush fit; parking sensors and camera calibration fully operational.",
    faqs: [
      {
        question: "Can luxury car bumpers be repaired onsite in Dubai?",
        answer: "Yes, our mobile technicians handle minor bumper realignment, sensor checks, and clip replacements directly at your location."
      }
    ]
  },
  {
    id: "proj-02",
    slug: "honda-major-service-engine-bay-inspection-al-karama",
    title: "Honda Comprehensive Engine Bay Tune-Up & Check",
    service: "Car Repair & Maintenance",
    category: "Preventative Maintenance",
    area: "Al Karama",
    image: projectImages.project2,
    seo: {
      metaTitle: "Honda Major Service & Engine Diagnostics in Al Karama | Expert Care",
      metaDescription: "Complete Honda engine tune-up, fluid check, and filter replacements in Al Karama, Dubai. Certified mechanics and genuine parts.",
      keywords: ["Honda service Al Karama", "car engine tune up Dubai", "Honda maintenance garage"]
    },
    clientOverview: {
      carModel: "2017 Honda Accord",
      issueReported: "Scheduled 80,000 KM major maintenance and sluggish acceleration response",
      responseTimeMinutes: 30,
      completionTimeHours: "2.5 Hours"
    },
    problemAnalysis: "Air filter clogged with road dust, spark plugs firing unevenly under load, and old engine oil viscosity broken down.",
    diagnosticSteps: [
      "OBD-II live parameter check for fuel trim and air-fuel ratio",
      "Ignition coil spark output inspection",
      "Fluid level and belt condition audit"
    ],
    solutionDetails: "Replaced engine oil and filter, installed new air and cabin filters, cleaned throttle body, and checked all fluid reservoirs.",
    partsReplaced: ["Fully Synthetic 5W-30 Oil", "OEM Oil Filter", "Engine Air Filter"],
    resultsSummary: "Smooth idle performance achieved; throttle response improved significantly during test drive.",
    faqs: [
      {
        question: "What is included in a standard Honda major service?",
        answer: "It includes oil and filter changes, spark plug inspection, air/cabin filter replacements, brake checks, and a full 50-point safety inspection."
      }
    ]
  },
  {
    id: "proj-03",
    slug: "hyundai-radiator-cooling-system-overhaul-al-barsha",
    title: "Hyundai Radiator & Front Cooling Overhaul",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "Al Barsha",
    image: projectImages.project3,
    seo: {
      metaTitle: "Hyundai Radiator & Cooling Repair in Al Barsha | Overheat Fix",
      metaDescription: "Expert Hyundai radiator replacement, condenser check, and cooling system flush in Al Barsha, Dubai. Mobile and garage support.",
      keywords: ["Hyundai radiator repair Al Barsha", "car overheating fix Dubai", "cooling system service"]
    },
    clientOverview: {
      carModel: "2019 Hyundai Tucson",
      issueReported: "Engine temperature rising in heavy traffic, coolant leakage near front grille",
      responseTimeMinutes: 20,
      completionTimeHours: "3.5 Hours"
    },
    problemAnalysis: "Stonewash impact on the lower radiator core caused a pinhole leak, draining coolant pressure and triggering temperature spikes.",
    diagnosticSteps: [
      "Cooling system pressure test at 15 PSI",
      "Radiator core visual leak and damage inspection",
      "Thermostat and cooling fan relay operation test"
    ],
    solutionDetails: "Removed front bumper assembly, replaced damaged radiator core, flushed cooling lines, and refilled with long-life coolant.",
    partsReplaced: ["OEM Radiator Assembly", "Long-Life Coolant / Antifreeze", "Hose Clamps"],
    resultsSummary: "Cooling system holds stable pressure; operating temperature remains locked at normal midpoint during idle and highway runs.",
    faqs: [
      {
        question: "Why do car radiators fail frequently in Dubai?",
        answer: "High ambient summer temperatures combined with flying road debris and sand accumulation cause core corrosion and physical punctures."
      }
    ]
  },
  {
    id: "proj-04",
    slug: "jeep-suspension-brake-overhaul-business-bay",
    title: "Jeep Front Suspension & Caliper Overhaul",
    service: "Suspension & Brakes",
    category: "Brake & Safety Systems",
    area: "Business Bay",
    image: projectImages.project4,
    seo: {
      metaTitle: "Jeep Suspension & Brake Repair in Business Bay | Expert Mechanics",
      metaDescription: "Professional Jeep suspension arm replacement, brake service, and wheel alignment in Business Bay, Dubai. Onsite tools and mobile service.",
      keywords: ["Jeep suspension repair Business Bay", "car brake and suspension fix Dubai", "control arm replacement"]
    },
    clientOverview: {
      carModel: "2021 Jeep Grand Cherokee",
      issueReported: "Clunking noise over speed bumps, steering pull to the right",
      responseTimeMinutes: 20,
      completionTimeHours: "3.0 Hours"
    },
    problemAnalysis: "Upper control arm ball joint boot ruptured, causing excessive play and uneven tire wear on the front right axle.",
    diagnosticSteps: [
      "Suspension play test using hydraulic jack and pry bar",
      "Brake rotor thickness and caliper sliding pin inspection",
      "3D alignment pre-check"
    ],
    solutionDetails: "Replaced front upper control arm assembly, greased suspension pivot points, and performed precision wheel alignment.",
    partsReplaced: ["OEM Front Upper Control Arm", "Ball Joint Assembly", "Alignment Shims"],
    resultsSummary: "Clunking noises completely eliminated; vehicle tracks straight with firm steering feedback.",
    faqs: [
      {
        question: "How do I know if my car suspension needs replacement?",
        answer: "Signs include knocking sounds over bumps, excessive bouncing, uneven tire wear, and steering wheel pulling to one side."
      }
    ]
  },
  {
    id: "proj-05",
    slug: "nissan-engine-timing-valve-inspection-deira",
    title: "Nissan Engine Valve Cover & Timing Check",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "Deira",
    image: projectImages.project5,
    seo: {
      metaTitle: "Nissan Engine Valve & Timing Service in Deira | Expert Diagnostics",
      metaDescription: "Professional Nissan engine valve cover gasket replacement and timing chain inspection in Deira, Dubai. Certified workshop mechanics.",
      keywords: ["Nissan engine repair Deira", "valve cover gasket Dubai", "car engine check Deira"]
    },
    clientOverview: {
      carModel: "2016 Nissan Sunny",
      issueReported: "Engine oil burning smell inside cabin, oil seepage around cylinder head",
      responseTimeMinutes: 30,
      completionTimeHours: "2.0 Hours"
    },
    problemAnalysis: "Rubber valve cover gasket hardened and cracked due to engine heat exposure, allowing oil to leak onto the exhaust manifold.",
    diagnosticSteps: [
      "Visual inspection of cylinder head perimeter",
      "Timing chain tension and guide wear assessment",
      "Spark plug tube seal leak check"
    ],
    solutionDetails: "Removed valve cover, cleaned mating surfaces, installed a new OEM gasket set and spark plug tube seals, and resealed with high-temp RTV silicone.",
    partsReplaced: ["OEM Valve Cover Gasket", "Spark Plug Tube Seals", "High-Temp Gasket Sealant"],
    resultsSummary: "Oil leaks completely resolved; cabin odor eliminated and engine bay clean.",
    faqs: [
      {
        question: "What causes valve cover gaskets to leak?",
        answer: "Continuous exposure to high engine temperatures causes the rubber material to lose flexibility, harden, and crack over time."
      }
    ]
  },
  {
    id: "proj-06",
    slug: "ev-hybrid-front-fascia-electrical-repair-jvc",
    title: "Hybrid/EV Front Fascia & Electrical Component Fix",
    service: "Onsite Car Repair",
    category: "Electrical & Battery",
    area: "Jumeirah Village Circle",
    image: projectImages.project6,
    seo: {
      metaTitle: "Hybrid Car Front Repair & Electrical Service JVC | Mobile Tech",
      metaDescription: "Specialist hybrid and modern car front bumper and electrical component repair in Jumeirah Village Circle (JVC), Dubai.",
      keywords: ["hybrid car repair JVC", "electric car service Dubai", "mobile mechanic Jumeirah Village Circle"]
    },
    clientOverview: {
      carModel: "2022 Hyundai Tucson Hybrid",
      issueReported: "Front bumper detachment and auxiliary battery charging warning after parking incident",
      responseTimeMinutes: 20,
      completionTimeHours: "2.0 Hours"
    },
    problemAnalysis: "Impact on the lower bumper assembly dislodged clips and pinched a low-voltage auxiliary wiring harness near the battery tray.",
    diagnosticSteps: [
      "12V auxiliary battery load and charging test",
      "Wiring harness continuity check for short circuits",
      "Bumper structural mount inspection"
    ],
    solutionDetails: "Repaired pinched wiring harness with heat-shrink insulation, re-secured electrical routing, and remounted front bumper fascia using secure clips.",
    partsReplaced: ["Wiring Harness Connectors", "Bumper Fastener Clips"],
    resultsSummary: "Electrical warning lights cleared, auxiliary charging system operating at 14.2V, and body panels correctly aligned.",
    faqs: [
      {
        question: "Are your technicians certified to work on hybrid vehicles?",
        answer: "Yes, our technicians are trained in hybrid and modern electrical systems to safely perform diagnostics and repairs."
      }
    ]
  },
  {
    id: "proj-07",
    slug: "audi-q7-engine-overhaul-al-quoz",
    title: "Audi Q7 V6 Engine Diagnostics & Overhaul",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "Al Quoz",
    image: projectImages.project7,
    seo: {
      metaTitle: "Audi Engine Repair & Diagnostics in Al Quoz | Specialist Workshop",
      metaDescription: "Advanced Audi Q7 engine diagnostics, cooling repairs, and mechanical overhaul in Al Quoz, Dubai. Factory-trained specialists.",
      keywords: ["Audi engine repair Al Quoz", "Audi Q7 mechanic Dubai", "luxury car engine diagnostic"]
    },
    clientOverview: {
      carModel: "2018 Audi Q7 3.0T",
      issueReported: "Check engine light active, rough idle, and coolant level warning",
      responseTimeMinutes: 20,
      completionTimeHours: "4.0 Hours"
    },
    problemAnalysis: "Coolant crossover pipe developed a thermal fracture, leaking fluid near the supercharger housing and triggering misfire codes.",
    diagnosticSteps: [
      "VAG-COM computer diagnostic scan",
      "Smoke test for vacuum and coolant leaks",
      "Compression and leak-down test"
    ],
    solutionDetails: "Removed intake manifold assembly, replaced cracked coolant crossover pipe, changed spark plugs, and cleared adaptation values.",
    partsReplaced: ["OEM Coolant Crossover Pipe", "Intake Manifold Gaskets", "Bosch Spark Plugs"],
    resultsSummary: "Misfires eliminated, coolant system sealed, and smooth idle restored across all cylinders.",
    faqs: [
      {
        question: "Do you use OEM parts for Audi repairs?",
        answer: "Yes, we exclusively use OEM or approved high-performance aftermarket parts for all European luxury vehicles."
      }
    ]
  },
  {
    id: "proj-08",
    slug: "jeep-cooling-system-maintenance-downtown-dubai",
    title: "Jeep Wrangler Cooling Reservoir & Hose Overhaul",
    service: "Car Repair & Maintenance",
    category: "Preventative Maintenance",
    area: "Downtown Dubai",
    image: projectImages.project8,
    seo: {
      metaTitle: "Jeep Cooling System Repair Downtown Dubai | Overheat Prevention",
      metaDescription: "Professional Jeep coolant reservoir replacement and hose flushing in Downtown Dubai. Rapid mobile service and workshop support.",
      keywords: ["Jeep cooling repair Downtown Dubai", "car coolant flush Dubai", "radiator hose replacement"]
    },
    clientOverview: {
      carModel: "2020 Jeep Wrangler",
      issueReported: "Discolored coolant overflow tank, minor vapor smell after long drives",
      responseTimeMinutes: 25,
      completionTimeHours: "1.5 Hours"
    },
    problemAnalysis: "Plastic expansion tank became brittle from intense under-hood heat cycles, creating microscopic hairline fractures.",
    diagnosticSteps: [
      "Cooling system pressure decay test",
      "Visual check of overflow tank and hoses",
      "Thermostat opening temperature verification"
    ],
    solutionDetails: "Replaced degraded coolant expansion reservoir, installed new reinforced upper radiator hose, and refilled system with organic acid technology coolant.",
    partsReplaced: ["OEM Coolant Expansion Tank", "Upper Radiator Hose", "OAT Coolant"],
    resultsSummary: "Cooling system maintains pressure perfectly with zero vapor loss or leaks.",
    faqs: [
      {
        question: "How often should coolant hoses be inspected in Dubai?",
        answer: "We recommend inspecting coolant hoses and expansion tanks every 15,000 KM due to high ambient temperatures."
      }
    ]
  },
  {
    id: "proj-09",
    slug: "mazda-synthetic-oil-service-jumeirah",
    title: "Mazda SkyActiv Full Synthetic Oil Change",
    service: "Car Repair & Maintenance",
    category: "Preventative Maintenance",
    area: "Jumeirah",
    image: projectImages.project9,
    seo: {
      metaTitle: "Mazda Oil Change & Minor Service Jumeirah | Mobile Mechanic",
      metaDescription: "Fast mobile Mazda oil change and filter replacement in Jumeirah, Dubai. Premium SkyActiv approved oils and multi-point check.",
      keywords: ["Mazda oil change Jumeirah", "car service Dubai", "mobile oil change Dubai"]
    },
    clientOverview: {
      carModel: "2021 Mazda 6 SkyActiv",
      issueReported: "Routine 10,000 KM oil service indicator active on dashboard",
      responseTimeMinutes: 15,
      completionTimeHours: "45 Minutes"
    },
    problemAnalysis: "Engine oil viscosity degraded due to city stop-and-go driving conditions and high ambient temperatures.",
    diagnosticSteps: [
      "Oil level and condition dipstick inspection",
      "Fluid contamination and metal particle check",
      "Reset maintenance minder in infotainment system"
    ],
    solutionDetails: "Performed complete oil extraction/drain, replaced oil filter with OEM cartridge, and refilled with high-performance 0W-20 synthetic oil.",
    partsReplaced: ["OEM Oil Filter", "0W-20 Fully Synthetic Oil", "Drain Plug Crush Washer"],
    resultsSummary: "Engine running quieter and smoother with optimal oil pressure levels logged.",
    faqs: [
      {
        question: "Can you perform oil changes at my home or office in Jumeirah?",
        answer: "Yes, our mobile service vans are fully equipped to perform complete oil changes and minor maintenance wherever your car is parked."
      }
    ]
  },
  {
    id: "proj-10",
    slug: "toyota-heavy-duty-oil-service-dubai-silicon-oasis",
    title: "Toyota Heavy-Duty Motor Oil & Filter Service",
    service: "Car Repair & Maintenance",
    category: "Preventative Maintenance",
    area: "Dubai Silicon Oasis",
    image: projectImages.project10,
    seo: {
      metaTitle: "Toyota Oil Change & Maintenance in DSO | Genuine Fluids",
      metaDescription: "Reliable Toyota motor oil replacement and comprehensive filter service in Dubai Silicon Oasis. Quick onsite mobile dispatch.",
      keywords: ["Toyota oil change DSO", "car maintenance Dubai Silicon Oasis", "Toyota service Dubai"]
    },
    clientOverview: {
      carModel: "2019 Toyota Camry",
      issueReported: "Engine service due reminder on dashboard, dark oil appearance",
      responseTimeMinutes: 20,
      completionTimeHours: "45 Minutes"
    },
    problemAnalysis: "Aged engine oil accumulated carbon deposits following extended mileage in high-temperature city traffic.",
    diagnosticSteps: [
      "Oil quality and viscosity inspection",
      "Air filter and fluid check",
      "Battery health and tire pressure audit"
    ],
    solutionDetails: "Drained old lubricant, installed genuine Toyota oil filter, and filled engine with Toyota certified 5W-30 motor oil.",
    partsReplaced: ["Genuine Toyota Oil Filter", "Toyota 5W-30 Motor Oil"],
    resultsSummary: "Engine acoustics normalized and oil life monitor successfully reset.",
    faqs: [
      {
        question: "What oil weight is recommended for Toyota cars in the UAE?",
        answer: "Depending on the model and mileage, we typically recommend 5W-30 or 0W-20 genuine synthetic oils for optimal protection."
      }
    ]
  },
  {
    id: "proj-11",
    slug: "kia-engine-tuneup-diagnostic-al-barsha",
    title: "Kia Engine Ignition & Valve Check",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "Al Barsha",
    image: projectImages.project11,
    seo: {
      metaTitle: "Kia Engine Tune-Up & Diagnostic in Al Barsha | Expert Service",
      metaDescription: "Professional Kia engine ignition check, spark plug service, and diagnostic scan in Al Barsha, Dubai.",
      keywords: ["Kia engine repair Al Barsha", "car ignition check Dubai", "Kia service center"]
    },
    clientOverview: {
      carModel: "2021 Kia Sportage",
      issueReported: "Engine hesitation during acceleration, minor shudder at idle",
      responseTimeMinutes: 20,
      completionTimeHours: "2.0 Hours"
    },
    problemAnalysis: "Ignition coil pack on cylinder 3 showed intermittent spark failure under load, causing partial misfires.",
    diagnosticSteps: [
      "OBD-II computer scan for active misfire codes",
      "Secondary ignition pattern test with oscilloscope",
      "Fuel injector pulse width check"
    ],
    solutionDetails: "Replaced faulty ignition coil, installed a fresh set of laser iridium spark plugs, and cleared error logs.",
    partsReplaced: ["OEM Ignition Coil", "Laser Iridium Spark Plugs"],
    resultsSummary: "Smooth acceleration profile restored; idle vibration completely eliminated.",
    faqs: [
      {
        question: "How often should spark plugs be replaced in Kia vehicles?",
        answer: "We recommend replacing spark plugs every 30,000 to 40,000 KM to maintain fuel efficiency and engine smoothness."
      }
    ]
  },
  {
    id: "proj-12",
    slug: "mercedes-benz-brakes-electrical-service-business-bay",
    title: "Mercedes-Benz Front Brake & Electronic Diagnostic",
    service: "Brake & Safety Systems",
    category: "Brake & Safety Systems",
    area: "Business Bay",
    image: projectImages.project12,
    seo: {
      metaTitle: "Mercedes Brake Repair & Diagnostics in Business Bay | OEM Service",
      metaDescription: "Expert Mercedes-Benz brake pad replacement, electronic sensor reset, and diagnostic scan in Business Bay, Dubai.",
      keywords: ["Mercedes brake repair Business Bay", "car electronic diagnostic Dubai", "luxury car service"]
    },
    clientOverview: {
      carModel: "2020 Mercedes-Benz A-Class",
      issueReported: "Brake wear warning indicator on dashboard, reduced bite response",
      responseTimeMinutes: 25,
      completionTimeHours: "2.5 Hours"
    },
    problemAnalysis: "Front ceramic brake pads worn down to safety threshold, wearing out the electronic wear sensors.",
    diagnosticSteps: [
      "Xentry OEM computer diagnostic scan",
      "Brake pad thickness and rotor surface check",
      "ABS hydraulic module pressure test"
    ],
    solutionDetails: "Installed OEM ceramic brake pads, replaced electronic wear sensors, and reset brake life parameters via diagnostic computer.",
    partsReplaced: ["OEM Ceramic Brake Pads", "Electronic Wear Sensors"],
    resultsSummary: "Brake response fully restored with factory-spec stopping performance and zero dashboard warnings.",
    faqs: [
      {
        question: "Do you reset computer warning lights after brake service?",
        answer: "Yes, all electronic wear indicators and service intervals are reset using factory diagnostic software."
      }
    ]
  },
  {
    id: "proj-13",
    slug: "luxury-parts-warehouse-inventory-al-quoz",
    title: "Luxury Body Panels & Parts Warehouse Management",
    service: "Body Repair",
    category: "Bodywork & Paint",
    area: "Al Quoz",
    image: projectImages.project13,
    seo: {
      metaTitle: "Auto Body Parts & Luxury Car Spares Warehouse Al Quoz | Dubai",
      metaDescription: "Extensive inventory of OEM luxury car body parts, bumpers, and panels stored at our state-of-the-art facility in Al Quoz, Dubai.",
      keywords: ["car parts warehouse Al Quoz", "luxury body panels Dubai", "OEM auto spares Dubai"]
    },
    clientOverview: {
      carModel: "Multi-Brand Fleet (Range Rover, Porsche, BMW)",
      issueReported: "Urgent procurement of rare OEM body panels and front fascias for accident repairs",
      responseTimeMinutes: 15,
      completionTimeHours: "1.0 Hour"
    },
    problemAnalysis: "Accident-damaged vehicles required exact factory-matching body assemblies and structural parts to ensure rapid turnaround.",
    diagnosticSteps: [
      "Part number verification against VIN database",
      "Inventory stock and structural integrity check",
      "Quality control inspection prior to dispatch"
    ],
    solutionDetails: "Sourced and allocated genuine OEM panels, bumpers, and reinforcement bars directly from our centralized Al Quoz warehouse facility.",
    partsReplaced: ["OEM Body Panels", "Reinforcement Bars", "Grille Assemblies"],
    resultsSummary: "Parts successfully matched and dispatched to workshop teams, cutting vehicle repair downtime by 50%.",
    faqs: [
      {
        question: "Do you keep spare parts in stock for luxury vehicles?",
        answer: "Yes, our Al Quoz warehouse maintains a massive inventory of genuine body parts, bumpers, and mechanical components for fast repairs."
      }
    ]
  },
  {
    id: "proj-14",
    slug: "hyundai-engine-bay-detailing-overhaul-deira",
    title: "Hyundai Major Engine Bay Maintenance & Clean",
    service: "Car Repair & Maintenance",
    category: "Preventative Maintenance",
    area: "Deira",
    image: projectImages.project14,
    seo: {
      metaTitle: "Hyundai Major Service & Engine Bay Maintenance in Deira | Dubai",
      metaDescription: "Professional Hyundai engine bay inspection, fluid flush, and preventative maintenance service in Deira, Dubai.",
      keywords: ["Hyundai service Deira", "car engine maintenance Dubai", "auto garage Deira"]
    },
    clientOverview: {
      carModel: "2018 Hyundai Elantra",
      issueReported: "Scheduled 60,000 KM major maintenance and dusty engine compartment",
      responseTimeMinutes: 30,
      completionTimeHours: "2.5 Hours"
    },
    problemAnalysis: "Dust accumulation across engine components and degraded fluid conditions following intensive city operation.",
    diagnosticSteps: [
      "Complete 50-point safety and fluid check",
      "Battery health and alternator output test",
      "Drive belt tension and wear assessment"
    ],
    solutionDetails: "Conducted complete fluid flush, replaced air/oil filters, cleaned engine compartment, and tightened all terminal connections.",
    partsReplaced: ["Engine Oil & Filter", "Air Cabin Filter", "Coolant Fluid"],
    resultsSummary: "Engine compartment thoroughly cleaned and operational reliability verified through extensive road test.",
    faqs: [
      {
        question: "Why is regular engine bay maintenance important in Dubai?",
        answer: "Dust and sand buildup combined with high heat can degrade electrical wiring and hoses if not cleaned and inspected regularly."
      }
    ]
  },
  {
    id: "proj-15",
    slug: "alternator-charging-system-repair-jumeirah",
    title: "Car Alternator & Charging System Overhaul",
    service: "Electrical Repair",
    category: "Electrical & Battery",
    area: "Jumeirah",
    image: projectImages.project15,
    seo: {
      metaTitle: "Car Alternator Repair & Charging Service Jumeirah | Dubai",
      metaDescription: "Expert car alternator testing, diode bridge repair, and electrical charging system fix in Jumeirah, Dubai.",
      keywords: ["alternator repair Jumeirah", "car electrical fix Dubai", "battery charging problem Dubai"]
    },
    clientOverview: {
      carModel: "2017 Hyundai Tucson",
      issueReported: "Battery light blinking on dashboard, electrical accessories dimming",
      responseTimeMinutes: 20,
      completionTimeHours: "2.0 Hours"
    },
    problemAnalysis: "Alternator internal diode bridge failed due to high heat exposure, preventing proper battery charging current.",
    diagnosticSteps: [
      "Multimeter voltage output test at alternator terminals",
      "Oscilloscope ripple test for diode performance",
      "Battery load and health check"
    ],
    solutionDetails: "Disassembled charging unit, replaced faulty diode assembly and voltage regulator, and tested output under heavy electrical load.",
    partsReplaced: ["Alternator Diode Bridge", "Voltage Regulator Unit"],
    resultsSummary: "Charging voltage stabilized at a healthy 14.4V; dashboard warning light successfully cleared.",
    faqs: [
      {
        question: "What are the signs of a failing alternator?",
        answer: "Signs include a battery warning light on the dashboard, dim headlights, slow accessories, and a dead battery."
      }
    ]
  },
  {
    id: "proj-16",
    slug: "gdi-engine-fuel-system-inspection-downtown-dubai",
    title: "GDI Engine High-Pressure Fuel & Air Intake Service",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "Downtown Dubai",
    image: projectImages.project16,
    seo: {
      metaTitle: "GDI Engine Service & Fuel System Repair Downtown Dubai | Expert",
      metaDescription: "Specialist GDI engine carbon cleaning, intake inspection, and fuel system diagnostics in Downtown Dubai.",
      keywords: ["GDI engine repair Downtown Dubai", "car fuel injection service Dubai", "engine carbon clean"]
    },
    clientOverview: {
      carModel: "2020 Kia Optima GDI",
      issueReported: "Rough engine idling, decreased fuel efficiency, sluggish throttle",
      responseTimeMinutes: 25,
      completionTimeHours: "3.0 Hours"
    },
    problemAnalysis: "Heavy carbon deposits accumulated on intake valve stems due to direct injection characteristics and dusty city driving.",
    diagnosticSteps: [
      "Borescope camera inspection of intake valves",
      "High-pressure fuel rail pressure test",
      "Live OBD-II fuel trim telemetry log"
    ],
    solutionDetails: "Performed walnut shell blasting carbon clean on intake valves, replaced air filter, and tuned fuel injection parameters.",
    partsReplaced: ["Engine Air Filter", "Fuel System Additive Treatment"],
    resultsSummary: "Throttle response sharpened, idle speed stabilized at 750 RPM, and fuel economy returned to factory specs.",
    faqs: [
      {
        question: "Why do GDI engines get carbon buildup?",
        answer: "Because fuel is injected directly into the combustion chamber, detergent gasoline never washes over the intake valves, leading to carbon deposits."
      }
    ]
  },
  {
    id: "proj-17",
    slug: "mobile-ac-diagnostic-repair-dubailand",
    title: "Mobile AC Diagnostic & Refrigerant Leak Fix",
    service: "Car AC Repair",
    category: "Climate Control",
    area: "Dubailand",
    image: projectImages.project17,
    seo: {
      metaTitle: "Mobile Car AC Repair & Gas Refill Dubailand | Onsite Service",
      metaDescription: "Immediate onsite car air conditioning diagnosis, manifold gauge testing, and refrigerant recharge in Dubailand, Dubai.",
      keywords: ["mobile car AC repair Dubailand", "car AC gas refill Dubai", "onsite mechanic Dubai"]
    },
    clientOverview: {
      carModel: "2019 Chevrolet Tahoe",
      issueReported: "AC blowing warm air while parked in open sunlight",
      responseTimeMinutes: 20,
      completionTimeHours: "1.5 Hours"
    },
    problemAnalysis: "Low refrigerant level caused by a loose service valve cap and minor O-ring seepage under high summer temperatures.",
    diagnosticSteps: [
      "Manifold gauge high and low pressure analysis",
      "UV leak detector light check across AC lines",
      "Condenser fan operation audit"
    ],
    solutionDetails: "Replaced service valve O-rings, vacuumed system to remove moisture, and recharged precise weight of R134a refrigerant.",
    partsReplaced: ["AC Service Valve O-Rings", "R134a Refrigerant Gas", "PAG Oil"],
    resultsSummary: "Cabin cooling performance fully restored with vent temperatures dropping to 5°C.",
    faqs: [
      {
        question: "Can you fix car air conditioning issues onsite?",
        answer: "Yes, our mobile vans are fully equipped with recovery machines, gauges, and refrigerant gas to repair AC systems at your location."
      }
    ]
  },
  {
    id: "proj-18",
    slug: "engine-timing-belt-pulley-service-al-quoz",
    title: "Engine Timing Belt & Auxiliary Pulley Overhaul",
    service: "Engine Repair",
    category: "Preventative Maintenance",
    area: "Al Quoz",
    image: projectImages.project18,
    seo: {
      metaTitle: "Engine Timing Belt & Pulley Replacement Al Quoz | Dubai Workshop",
      metaDescription: "Professional engine timing belt kit replacement, tensioner pulley service, and mechanical check in Al Quoz, Dubai.",
      keywords: ["timing belt replacement Al Quoz", "car engine repair Dubai", "pulley service workshop"]
    },
    clientOverview: {
      carModel: "2018 Hyundai Tucson",
      issueReported: "Chirping noise from engine bay, recommended mileage for belt service reached",
      responseTimeMinutes: 30,
      completionTimeHours: "3.5 Hours"
    },
    problemAnalysis: "Accessory drive belt tensioner bearing showed wear and dry friction, while the main timing belt exhibited minor surface micro-cracks.",
    diagnosticSteps: [
      "Visual inspection of belt ribs and backing",
      "Pulley rotational smoothness and play test",
      "Engine timing alignment check"
    ],
    solutionDetails: "Replaced complete timing belt kit, water pump, and auxiliary tensioner pulley assembly to prevent sudden mechanical failure.",
    partsReplaced: ["Timing Belt Kit", "Water Pump Assembly", "Tensioner Pulley", "Drive Belt"],
    resultsSummary: "Engine operating quietly with smooth accessory drive rotation and guaranteed longevity.",
    faqs: [
      {
        question: "When should a car timing belt be replaced?",
        answer: "Typically, timing belts should be replaced every 60,000 to 100,000 KM depending on manufacturer specifications and driving conditions."
      }
    ]
  },
  {
    id: "proj-19",
    slug: "radiator-core-chemical-flush-mirdif",
    title: "Radiator Core Leak Detection & Chemical Flush",
    service: "Engine Repair",
    category: "Engine Diagnostics",
    area: "Mirdif",
    image: projectImages.project19,
    seo: {
      metaTitle: "Radiator Repair & Coolant Flush Service Mirdif | Dubai",
      metaDescription: "Professional radiator core inspection, chemical scale removal, and pressure testing in Mirdif, Dubai.",
      keywords: ["radiator repair Mirdif", "car coolant flush Dubai", "overheating prevention Dubai"]
    },
    clientOverview: {
      carModel: "2017 Nissan Pathfinder",
      issueReported: "Coolant discoloration, green residue buildup on radiator fins, minor temperature fluctuations",
      responseTimeMinutes: 25,
      completionTimeHours: "2.0 Hours"
    },
    problemAnalysis: "Mineral scale accumulation and external fin corrosion caused restricted coolant flow and localized hot spots.",
    diagnosticSteps: [
      "Cooling system pressure decay test at 18 PSI",
      "Visual audit of radiator core fins and tanks",
      "Thermostat functionality check"
    ],
    solutionDetails: "Flushed cooling system with specialized chemical cleaner to dissolve mineral deposits, cleaned external debris from radiator fins, and refilled with fresh coolant.",
    partsReplaced: ["Chemical Coolant Flush Solution", "OEM Long-Life Coolant"],
    resultsSummary: "Cooling efficiency restored; temperature gauge remains perfectly stable under heavy load testing.",
    faqs: [
      {
        question: "What causes green residue buildup on car radiators?",
        answer: "Green residue is dried coolant leaking from microscopic cracks in the core or loose hose connections, often worsened by heat and vibration."
      }
    ]
  }
];
