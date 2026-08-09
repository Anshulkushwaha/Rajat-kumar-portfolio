/**
 * Publications & Scholar Data for Rajat Kumar
 * Ph.D. Research Scholar at IIT Indore
 */

const SCHOLAR_DATA = {
    profile: {
        name: "Rajat Kumar",
        title: "Ph.D. Research Scholar",
        institution: "Indian Institute of Technology Indore (IIT Indore)",
        verifiedEmail: "iiti.ac.in",
        scholarLink: "https://scholar.google.com/citations?user=LFQyGV4AAAAJ",
        interests: ["Heat transfer", "Fluid Flow", "Synthetic jet"],
        metrics: {
            citationsAll: 54,
            citationsSince2021: 54,
            hIndexAll: 4,
            hIndexSince2021: 4,
            i10IndexAll: 2,
            i10IndexSince2021: 2
        },
        citationHistory: [
            { year: 2024, count: 1 },
            { year: 2025, count: 23 },
            { year: 2026, count: 30 }
        ]
    },
    coAuthors: [
        {
            name: "Dr. Harekrishna Yadav",
            role: "Associate Professor",
            institution: "Indian Institute of Technology Indore",
            email: "iiti.ac.in",
            profileUrl: "https://scholar.google.com/citations?user=RcoU89oAAAAJ"
        },
        {
            name: "Dr. Dnyanesh Mirikar",
            role: "PhD Graduate",
            institution: "Indian Institute of Technology Indore",
            email: "iiti.ac.in",
            profileUrl: "https://scholar.google.com/citations?user=U2OqXO0AAAAJ"
        },
        {
            name: "Prof. Amit Agrawal",
            role: "Professor of Mechanical Engineering",
            institution: "Indian Institute of Technology Bombay",
            email: "iitb.ac.in",
            profileUrl: "https://scholar.google.com/citations?user=mZSOousAAAAJ"
        },
        {
            name: "Dr. Satyanarayan Patel",
            role: "Faculty / Researcher",
            institution: "Indian Institute of Technology Indore",
            email: "iiti.ac.in",
            profileUrl: "https://scholar.google.com/citations?user=ZyXuyHMAAAAJ"
        },
        {
            name: "Dr. Nagendra Kumar",
            role: "Associate Professor, CSE",
            institution: "Indian Institute of Technology Indore",
            email: "iiti.ac.in",
            profileUrl: "https://scholar.google.com/citations?user=lCP4ZqMAAAAJ"
        },
        {
            name: "Dr. Vijai Laxmi",
            role: "Assistant Professor",
            institution: "Indian Institute of Technology Indore",
            email: "iiti.ac.in",
            profileUrl: "https://scholar.google.com/citations?user=dQhR86EAAAAJ"
        }
    ],
    publications: [
        {
            id: "pub-2024-1",
            title: "Insights into the flow and heat transfer aspects of single and multi-orifice synthetic jets",
            authors: ["R Kumar", "D Mirikar", "A Agrawal", "H Yadav"],
            authorsFormatted: "<strong>R Kumar</strong>, D Mirikar, A Agrawal, H Yadav",
            journal: "International Journal of Heat and Mass Transfer",
            volumeDetails: "231, 125897",
            year: 2024,
            citations: 24,
            topics: ["Synthetic Jets", "Heat Transfer", "Fluid Flow"],
            doiUrl: "https://doi.org/10.1016/j.ijheatmasstransfer.2024.125897",
            scholarUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=3123794789888628211",
            abstract: "This work investigates the fundamental flow physics and convective thermal transport mechanisms of single and multi-orifice impinging synthetic jets. Comprehensive numerical and experimental analyses highlight the orifice interaction dynamics, vortex merging, and local Nusselt number distributions across target surfaces.",
            bibtex: `@article{kumar2024insights,
  title={Insights into the flow and heat transfer aspects of single and multi-orifice synthetic jets},
  author={Kumar, Rajat and Mirikar, Dnyanesh and Agrawal, Amit and Yadav, Harekrishna},
  journal={International Journal of Heat and Mass Transfer},
  volume={231},
  pages={125897},
  year={2024},
  publisher={Elsevier}
}`
        },
        {
            id: "pub-2025-1",
            title: "Flow and heat transfer behavior of asymmetric synthetic jet",
            authors: ["R Kumar", "D Mirikar", "KS Bhati", "H Yadav"],
            authorsFormatted: "<strong>R Kumar</strong>, D Mirikar, KS Bhati, H Yadav",
            journal: "Physics of Fluids",
            volumeDetails: "37 (3)",
            year: 2025,
            citations: 10,
            topics: ["Synthetic Jets", "Heat Transfer", "Fluid Flow"],
            doiUrl: "https://doi.org/10.1063/5.0251588",
            scholarUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2515883188654554542",
            abstract: "Detailed investigation of structural flow asymmetry in synthetic jet orifices and its consequence on jet breakup, shear layer instability, and boundary layer heat dissipation.",
            bibtex: `@article{kumar2025flow,
  title={Flow and heat transfer behavior of asymmetric synthetic jet},
  author={Kumar, Rajat and Mirikar, Dnyanesh and Bhati, KS and Yadav, Harekrishna},
  journal={Physics of Fluids},
  volume={37},
  number={3},
  year={2025},
  publisher={AIP Publishing}
}`
        },
        {
            id: "pub-2025-2",
            title: "Synthetic jet’s flow-induced vibrations for enhanced thermal management and energy harvesting",
            authors: ["D Mirikar", "R Kumar", "S Patel", "H Yadav"],
            authorsFormatted: "D Mirikar, <strong>R Kumar</strong>, S Patel, H Yadav",
            journal: "Applied Thermal Engineering",
            volumeDetails: "263, 125397",
            year: 2025,
            citations: 8,
            topics: ["Synthetic Jets", "Thermal Management", "Energy Harvesting"],
            doiUrl: "https://doi.org/10.1016/j.applthermaleng.2025.125397",
            scholarUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2086114653183008616",
            abstract: "Explores the dual functionality of synthetic jet excitation: exploiting self-sustained structural vibrations for fluid mixing while simultaneously recovering ambient kinetic energy using piezoelectric harvesters.",
            bibtex: `@article{mirikar2025synthetic,
  title={Synthetic jet’s flow-induced vibrations for enhanced thermal management and energy harvesting},
  author={Mirikar, Dnyanesh and Kumar, Rajat and Patel, Satyanarayan and Yadav, Harekrishna},
  journal={Applied Thermal Engineering},
  volume={263},
  pages={125397},
  year={2025},
  publisher={Elsevier}
}`
        },
        {
            id: "pub-2025-3",
            title: "A comparative study of coaxial and conventional synthetic jet heat transfer",
            authors: ["R Kumar", "Z Kapadiya", "D Mirikar", "H Yadav"],
            authorsFormatted: "<strong>R Kumar</strong>, Z Kapadiya, D Mirikar, H Yadav",
            journal: "International Communications in Heat and Mass Transfer",
            volumeDetails: "161, 108530",
            year: 2025,
            citations: 8,
            topics: ["Synthetic Jets", "Heat Transfer"],
            doiUrl: "https://doi.org/10.1016/j.icheatmasstransfer.2025.108530",
            scholarUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13058780788457452160",
            abstract: "Comparative evaluation showing performance improvements offered by coaxial dual-cavity synthetic jets over conventional single-cavity configurations under identical stroke length and frequency parameters.",
            bibtex: `@article{kumar2025comparative,
  title={A comparative study of coaxial and conventional synthetic jet heat transfer},
  author={Kumar, Rajat and Kapadiya, Z and Mirikar, Dnyanesh and Yadav, Harekrishna},
  journal={International Communications in Heat and Mass Transfer},
  volume={161},
  pages={108530},
  year={2025},
  publisher={Elsevier}
}`
        },
        {
            id: "pub-2026-1",
            title: "A numerical study on the effect of rib size and location on thermo-fluid performance of synthetic jet",
            authors: ["Z Kapadiya", "D Mirikar", "R Kumar", "H Yadav"],
            authorsFormatted: "Z Kapadiya, D Mirikar, <strong>R Kumar</strong>, H Yadav",
            journal: "Numerical Heat Transfer, Part A: Applications",
            volumeDetails: "87 (1), 2371442",
            year: 2026,
            citations: 3,
            topics: ["Numerical CFD", "Synthetic Jets", "Heat Transfer"],
            doiUrl: "https://doi.org/10.1080/10407782.2026.2371442",
            scholarUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=7489291274927333423",
            abstract: "3D unsteady CFD simulations quantifying the effect of rib geometries placed on heat sink walls, revealing localized turbulence enhancement and boundary layer renewal.",
            bibtex: `@article{kapadiya2026numerical,
  title={A numerical study on the effect of rib size and location on thermo-fluid performance of synthetic jet},
  author={Kapadiya, Z and Mirikar, Dnyanesh and Kumar, Rajat and Yadav, Harekrishna},
  journal={Numerical Heat Transfer, Part A: Applications},
  volume={87},
  number={1},
  pages={2371442},
  year={2026},
  publisher={Taylor \\& Francis}
}`
        },
        {
            id: "pub-2026-2",
            title: "Optimization of multi-orifice synthetic jet configuration using flow and heat transfer characteristics coupled with machine learning",
            authors: ["R Kumar", "D Mirikar", "MZU Rehman", "A Bhatnagar", "N Kumar", "H Yadav"],
            authorsFormatted: "<strong>R Kumar</strong>, D Mirikar, MZU Rehman, A Bhatnagar, N Kumar, H Yadav",
            journal: "International Communications in Heat and Mass Transfer",
            volumeDetails: "172, 110160",
            year: 2026,
            citations: 1,
            topics: ["Machine Learning", "Synthetic Jets", "Optimization"],
            doiUrl: "https://doi.org/10.1016/j.icheatmasstransfer.2026.110160",
            scholarUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13041514490680454585",
            abstract: "Novel integration of CFD data with machine learning surrogate models (ANN & Gaussian Process Regression) to find optimal multi-orifice geometric layouts maximizing thermal performance factor.",
            bibtex: `@article{kumar2026optimization,
  title={Optimization of multi-orifice synthetic jet configuration using flow and heat transfer characteristics coupled with machine learning},
  author={Kumar, Rajat and Mirikar, Dnyanesh and Rehman, MZU and Bhatnagar, A and Kumar, Nagendra and Yadav, Harekrishna},
  journal={International Communications in Heat and Mass Transfer},
  volume={172},
  pages={110160},
  year={2026},
  publisher={Elsevier}
}`
        },
        {
            id: "pub-2026-3",
            title: "Experimental study of the aspect ratio effect of a rectangular impinging synthetic jet on flow and heat transfer characteristics",
            authors: ["US Bhapkar", "A Mishra", "R Kumar", "H Yadav", "A Agrawal"],
            authorsFormatted: "US Bhapkar, A Mishra, <strong>R Kumar</strong>, H Yadav, A Agrawal",
            journal: "International Journal of Thermal Sciences",
            volumeDetails: "222, 110570",
            year: 2026,
            citations: 0,
            topics: ["Experimental", "Synthetic Jets", "Heat Transfer"],
            doiUrl: "https://doi.org/10.1016/j.ijthermalsci.2026.110570",
            scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&user=LFQyGV4AAAAJ&citation_for_view=LFQyGV4AAAAJ:WF5omc3nYNoC",
            abstract: "High-speed PIV and IR thermography experiments analyzing rectangular synthetic jets across aspect ratios from 1 to 8, establishing scaling laws for impinging jet cooling.",
            bibtex: `@article{bhapkar2026experimental,
  title={Experimental study of the aspect ratio effect of a rectangular impinging synthetic jet on flow and heat transfer characteristics},
  author={Bhapkar, US and Mishra, A and Kumar, Rajat and Yadav, Harekrishna and Agrawal, Amit},
  journal={International Journal of Thermal Sciences},
  volume={222},
  pages={110570},
  year={2026},
  publisher={Elsevier}
}`
        },
        {
            id: "pub-2026-4",
            title: "An experimental study on heat transfer and fluid flow of a synthetic jet impinging on a surface roughened with pin fins",
            authors: ["V Gariya", "R Kumar", "V Laxmi", "H Yadav"],
            authorsFormatted: "V Gariya, <strong>R Kumar</strong>, V Laxmi, H Yadav",
            journal: "Applied Thermal Engineering",
            volumeDetails: "130790",
            year: 2026,
            citations: 0,
            topics: ["Experimental", "Heat Transfer", "Fluid Flow"],
            doiUrl: "https://doi.org/10.1016/j.applthermaleng.2026.130790",
            scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&user=LFQyGV4AAAAJ&citation_for_view=LFQyGV4AAAAJ:kNdYIx-mwKoC",
            abstract: "Experimental evaluation combining pin-fin roughened surfaces with periodic synthetic jet impingement, achieving significant Nusselt number enhancements over smooth targets.",
            bibtex: `@article{gariya2026experimental,
  title={An experimental study on heat transfer and fluid flow of a synthetic jet impinging on a surface roughened with pin fins},
  author={Gariya, V and Kumar, Rajat and Laxmi, Vijai and Yadav, Harekrishna},
  journal={Applied Thermal Engineering},
  pages={130790},
  year={2026},
  publisher={Elsevier}
}`
        },
        {
            id: "pub-2023-1",
            title: "Effect of the Rib Size and Location on Heat Transfer Performance of the Synthetic Jet: A Numerical Study",
            authors: ["Z Kapadiya", "D Mirikar", "R Kumar", "H Yadav"],
            authorsFormatted: "Z Kapadiya, D Mirikar, <strong>R Kumar</strong>, H Yadav",
            journal: "Conference on Fluid Mechanics and Fluid Power (FMFP)",
            volumeDetails: "pp. 773-785",
            year: 2023,
            citations: 0,
            topics: ["Numerical CFD", "Synthetic Jets"],
            doiUrl: "https://scholar.google.com/citations?view_op=view_citation&user=LFQyGV4AAAAJ&citation_for_view=LFQyGV4AAAAJ:zYLM7Y9cAGgC",
            scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&user=LFQyGV4AAAAJ&citation_for_view=LFQyGV4AAAAJ:zYLM7Y9cAGgC",
            abstract: "Numerical investigation presented at FMFP conference analyzing rib height-to-hydraulic diameter ratios and their impact on synthetic jet stagnation point heat transfer.",
            bibtex: `@inproceedings{kapadiya2023effect,
  title={Effect of the Rib Size and Location on Heat Transfer Performance of the Synthetic Jet: A Numerical Study},
  author={Kapadiya, Z and Mirikar, Dnyanesh and Kumar, Rajat and Yadav, Harekrishna},
  booktitle={Conference on Fluid Mechanics and Fluid Power},
  pages={773--785},
  year={2023}
}`
        }
    ]
};
