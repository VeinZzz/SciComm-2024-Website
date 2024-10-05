const topics = [
    {
        "title": "Seeing the Unseen: Uncover the Bulk Heterogeneous Deformation Processes in Metallic Glasses Through Surface Temperature Decoding",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702116302383"
    },
    {
        "title": "Host Guest Recognition on Photo-Responsive Cell Surfaces Directs Cell Cell Contacts",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702116302164"
    },
    {
        "title": "Characterization and Distribution of Mechanically Competent Mineralized Tissue in Micropores of β-tricalcium Phosphate Bone Substitutes",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702116303546"
    },
    {
        "title": "Metallic Glass Nanotube Arrays: Preparation and Surface Characterizations",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702117306089"
    },
    {
        "title": "Application of Graphene-Based Flexible Antennas in Consumer Electronic Devices",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702117307836"
    },
    {
        "title": "Full-Thickness Human Skin-On-Chip With Enhanced Epidermal Morphogenesis and Barrier Function",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702117304844"
    },
    {
        "title": "Microfluidic Generation of Transient Cell Volume Exchange for Convectively Driven Intracellular Delivery of Large Macromolecules",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702117308052"
    },
    {
        "title": "Temperature-Responsive Tungsten Doped Vanadium Dioxide Thin Film Starves Bacteria to Death",
        "url": "https://www.sciencedirect.com/science/article/pii/S13697021183014"
    },
    {
        "title": "Compositionally and Structurally Redesigned High-Energy Ni-Rich Layered Cathode for Next-Generation Lithium Batteries",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702118309477"
    },
    {
        "title": "Advancing Knowledge of Electrochemically Generated Lithium Microstructure and Performance Decay of Lithium Ion Battery by Synchrotron X-ray Tomography",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702118311131"
    },
    {
        "title": "Flash Infrared Annealing as a Cost-Effective and Low Environmental Impact Processing Method for Planar Perovskite Solar Cells",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702119302196"
    },
    {
        "title": "Four-Dimensional Direct Laser Writing of Reconfigurable Compound Micromachines",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702119303451"
    },
    {
        "title": "Kirigami-Enabled Self-Folding Origami",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702119307394"
    },
    {
        "title": "Highly Efficient and Rapid Manufactured Perovskite Solar Cells Via Flash InfraRed Annealing",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702119308661"
    },
    {
        "title": "Thermal Stress-Induced Charge and Structure Heterogeneity in Emerging Cathode Materials",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702119308727"
    },
    {
        "title": "Thermally Drawn Advanced Functional Fibers: New Frontier of Flexible Electronics",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702119308697"
    },
    {
        "title": "Comparative Studies Of Optoelectrical Properties Of Prominent Pv Materials: Halide Perovskite, Cdte, And Gaas",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120300158"
    },
    {
        "title": "Activation And Stabilization Mechanisms Of Anionic Redox For Li Storage Applications: Joint Experimental And Theoretical Study On Li2Tio3 Limno2 Binary System",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120300754"
    },
    {
        "title": "Porous Nanocellulose Gels And Foams: Breakthrough Status In The Development Of Scaffolds For Tissue Engineering",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120300766"
    },
    {
        "title": "Sputter Coating Of Lithium Metal Electrodes With Lithiophilic Metals For Homogeneous And Reversible Lithium Electrodeposition And Electrodissolution",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120301048"
    },
    {
        "title": "Engineered Spider Silk-Based 2D And 3D Materials Prevent Microbial Infestation",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120302236"
    },
    {
        "title": "Multistage Work Hardening Assisted By Multi-Type Twinning In Ultrafine-Grained Heterostructural Eutectic High-Entropy Alloys",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120303321"
    },
    {
        "title": "On The Origin Of Kinking In Layered Crystalline Solids",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120304223"
    },
    {
        "title": "Design Of Multi-Scale Textured Surfaces For Unconventional Liquid Harnessing",
        "url": "https://www.sciencedirect.com/science/article/pii/S136970212030273X"
    },
    {
        "title": "Polymer Architecture As Key To Unprecedented High-Resolution 3D-Printing Performance: The Case Of Biodegradable Hexa-Functional Telechelic Urethane-Based Poly-Ε-Caprolactone",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120303606"
    },
    {
        "title": "3D-Printing Of A Complete Modular Ion Mobility Spectrometer",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120304065"
    },
    {
        "title": "Distributed Sensor And Actuator Networks For Closed-Loop Bioelectronic Medicine",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702120304806"
    },
    {
        "title": "Al-Pha Beads: Bioplastic-Based Protease Biosensors For Global Health Applications",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121000663"
    },
    {
        "title": "Stimuli-Responsive Transdermal Microneedle Patches",
        "url": "https://www.sciencedirect.com/science/article/pii/S136970212100105X"
    },
    {
        "title": "In-Situ Tem Investigation Of Toughening In Silicon At Small Scales",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121001024"
    },
    {
        "title": "Hierarchical Build-Up Of Bio-Based Nanofibrous Materials With Tunable Metal Organic Framework Biofunctionality",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121001425"
    },
    {
        "title": "New Insights Into Sono-Exfoliation Mechanisms Of Graphite: In Situ High-Speed Imaging Studies And Acoustic Measurements",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121001644"
    },
    {
        "title": "Exciton Versus Free Carrier Emission: Implications For Photoluminescence Efficiency And Amplified Spontaneous Emission Thresholds In Quasi-2D And 3D Perovskites",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121001619"
    },
    {
        "title": "High-Yield Production Of A Super-Soluble Miniature Spidroin For Biomimetic High-Performance Materials",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121002546"
    },
    {
        "title": "Highly Stretchable Self-Sensing Actuator Based On Conductive Photothermally-Responsive Hydrogel",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121001772"
    },
    {
        "title": "Combinatorial Growth Of Multinary Nanostructured Thin Functional Films",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121002042"
    },
    {
        "title": "Toward Multiscale Simulations Of Tailored Microstructure Formation In Metal Additive Manufacturing",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121003370"
    },
    {
        "title": "Low Temperature Activation Of Inert Hexagonal Boron Nitride For Metal Deposition And Single Atom Catalysis",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121003242"
    },
    {
        "title": "Intrinsically Disordered Peptides Enhance Regenerative Capacities Of Bone Composite Xenografts",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121004521"
    },
    {
        "title": "Correlative Analysis Of Structure And Chemistry Of Lixfepo4 Platelets Using 4D-Stem And X-Ray Ptychography",
        "url": "https://www.sciencedirect.com/science/article/pii/S136970212100362X"
    },
    {
        "title": "Supramolecular Polymer Materials Bring Restorative Heart Valve Therapy To Patients",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702121004545"
    },
    {
        "title": "Physical, Mechanical, And Microstructural Characterization Of Novel, 3D-Printed, Tunable, Lab-Grown Plant Materials Generated From Zinnia Elegans Cell Cultures",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122000451"
    },
    {
        "title": "Self-Assembly Enables Simple Structure Organic Photovoltaics Via Green-Solvent And Open-Air-Printing: Closing The Lab-To-Fab Gap",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122000918"
    },
    {
        "title": "Parts-Per-Billion (Ppb) Selective Iodine Sensors Leveraging Metal Organic Framework Nanoenvironment",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122001821"
    },
    {
        "title": "Pedot:Pss-Modified Cotton Conductive Thread For Mass Manufacturing Of Textile-Based Electrical Wearable Sensors By Computerized Embroidery",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122002085"
    },
    {
        "title": "Porous Liquids as Solvents for the Economical Separation of Carbon Dioxide from Methane",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122002334"
    },
    {
        "title": "A Covalent Organic Framework Onion Structure",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122002310"
    },
    {
        "title": "Internet-of-Nano-Things (IoNT) Driven Intelligent Face Masks to Combat Airborne Health Hazard",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122002280"
    },
    {
        "title": "Introducing C Phase in Additively Manufactured Ti-6Al-4V: A New Oxygen-Stabilized Face-Centred Cubic Solid solution with Improved Mechanical Properties",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122002875"
    },
    {
        "title": "Washable, Stretchable, and Reusable Core Shell Metal Nanowire Network-Based Electronics on a Breathable Polymer Nanomesh Substrate",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122002759"
    },
    {
        "title": "Multiplexed Biosensor for Point-Of-Care COVID-19 Monitoring: CRISPR-Powered Unamplified RNA Diagnostics and Protein-Based Therapeutic Drug Management",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122002887"
    },
    {
        "title": "3D Printing of Living Structural Biocomposites",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702123000214"
    },
    {
        "title": "Electrodeposition-enabled, Electrically-Transduced Sensors and Biosensors",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122003212"
    },
    {
        "title": "Plasmonic Nanomaterials: A Versatile Phototheranostic Platform of Cancers",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702122003091"
    },
    {
        "title": "Hydrogel-Enabled, Local Administration and Combinatorial Delivery of Immunotherapies for Cancer Treatment",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702123000688"
    },
    {
        "title": "Electroactive Biomaterials Synergizing with Electrostimulation for Cardiac Tissue Regeneration and Function-Monitoring",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702123002997"
    },
    {
        "title": "Bioinspired, Heredity-Derived Hierarchical Bulk Multifunctional Copper Alloys",
        "url": "https://www.sciencedirect.com/science/article/pii/S1369702123003504"
    }
];
