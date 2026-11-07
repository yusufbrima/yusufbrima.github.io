// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, conference papers, preprints and datasets, newest first. Links lead to the published version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Invited talks, conference presentations and posters.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses and seminars I have taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-mentorship",
          title: "mentorship",
          description: "Guides and advice on scholarships and graduate study.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mentorship/";
          },
        },{id: "post-the-pursuit-of-abstraction",
        
          title: "The Pursuit of Abstraction",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2026/08/the-pursuit-of-abstraction/";
          
        },
      },{id: "post-tech-stack-for-deep-learning-explanability-medical-imaging",
        
          title: "Tech Stack for Deep Learning Explanability Medical Imaging",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/02/blog-post-1/";
          
        },
      },{id: "post-k-nearest-neighbors-from-first-principles",
        
          title: "K-Nearest Neighbors from First Principles",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2023/10/blog-post-1/";
          
        },
      },{id: "post-k-means-clustering-from-first-principles",
        
          title: "K-Means Clustering from First Principles",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2023/05/blog-post-2/";
          
        },
      },{id: "post-seminar-on-representation-learning",
        
          title: "Seminar on Representation Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2023/05/blog-post-1/";
          
        },
      },{id: "post-understanding-sound-from-first-principles-part-6",
        
          title: "Understanding Sound from First Principles: Part 6",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2022/09/blog-post-6/";
          
        },
      },{id: "post-understanding-sound-from-first-principles-part-5",
        
          title: "Understanding Sound from First Principles: Part 5",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2022/07/blog-post-5/";
          
        },
      },{id: "post-understanding-sound-from-first-principles-part-4",
        
          title: "Understanding Sound from First Principles: Part 4",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2022/04/blog-post-4/";
          
        },
      },{id: "post-understanding-sound-from-first-principles-part-3",
        
          title: "Understanding Sound from First Principles: Part 3",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2022/04/blog-post-3/";
          
        },
      },{id: "post-understanding-sound-from-first-principles-part-2",
        
          title: "Understanding Sound from First Principles: Part 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2022/02/blog-post-2/";
          
        },
      },{id: "post-understanding-sound-from-first-principles",
        
          title: "Understanding Sound from First Principles",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2022/02/blog-post-1/";
          
        },
      },{id: "post-dynamical-systems-modelling-part-ii-applications",
        
          title: "Dynamical Systems Modelling Part II: Applications",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2021/12/blog-post-2/";
          
        },
      },{id: "post-dynamical-systems-modelling-part-i-fundamentals",
        
          title: "Dynamical Systems Modelling Part I: Fundamentals",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2021/10/blog-post-1/";
          
        },
      },{id: "post-earthlings",
        
          title: "Earthlings",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2021/09/blog-post-1/";
          
        },
      },{id: "post-climatology-analysis-over-the-eastern-african-region",
        
          title: "Climatology Analysis Over the Eastern African Region",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2021/07/blog-post-1/";
          
        },
      },{id: "post-role-of-digital-learning-on-student-of-tertiary-institutions-in-sierra-leone-sylvanus-koroma-campus",
        
          title: "Role of Digital Learning on Student of Tertiary Institutions in Sierra Leone Sylvanus...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2017/07/blog-post/";
          
        },
      },{id: "post-applications-and-services-of-the-internet",
        
          title: "Applications and services of the Internet",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2015/07/blog-post-2/";
          
        },
      },{id: "post-brief-history-of-the-internet",
        
          title: "Brief History of the Internet",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2015/06/blog-post-1/";
          
        },
      },{id: "mentorship-guides-to-securing-scholarships-overseas",
          title: 'Guides to Securing Scholarships Overseas',
          description: "Mentorship · Virtual Event · Anywhere on Earth (AoE) · 2022",
          section: "Mentorship",handler: () => {
              window.location.href = "/mentorship/2022-03-18";
            },},{id: "mentorship-advice-to-new-queen-elizabeth-commonwealth-scholars-at-dhaka-university",
          title: 'Advice to new Queen Elizabeth Commonwealth Scholars at Dhaka University',
          description: "Mentorship · Online · Anywhere on Earth (AoE) · 2022",
          section: "Mentorship",handler: () => {
              window.location.href = "/mentorship/2022-04-14";
            },},{id: "mentorship-sample-documents-and-general-instructions-for-scholarship-application",
          title: 'Sample documents and general instructions for scholarship application',
          description: "Mentorship · Online · Anywhere on Earth (AoE) · 2022",
          section: "Mentorship",handler: () => {
              window.location.href = "/mentorship/2022-05-08";
            },},{id: "news-published-a-dataset-that-was-curated-in-collaboration-between-the-computer-science-and-engineering-department-university-of-dhaka-and-the-national-institute-of-neuroscience-bangladesh-it-comprises-5-285-t1-weighted-contrast-enhanced-brain-mri-images-belonging-to-38-categories-available-here-brain-mri-dataset",
          title: 'Published a dataset that was curated in collaboration between the Computer Science and...',
          description: "",
          section: "News",},{id: "news-transfer-learning-for-the-detection-and-diagnosis-of-types-of-pneumonia-including-pneumonia-induced-by-the-covid-19-from-chest-x-ray-images-published-in-mdpi-special-issue-on-machine-learning-applications-for-covid-19-and-its-complications-screening-diagnosis-treatment-and-prognosis",
          title: 'Transfer Learning for the Detection and Diagnosis of Types of Pneumonia Including Pneumonia...',
          description: "",
          section: "News",},{id: "news-participated-in-the-neuromatch-academy-deep-learning-intensive-hands-on-training",
          title: 'Participated in the Neuromatch Academy: Deep Learning intensive hands-on training.',
          description: "",
          section: "News",},{id: "news-attended-and-presented-a-poster-at-the-bridging-the-technological-gap-spreading-technological-innovations-in-the-study-of-the-human-and-non-human-mind-at-the-german-primate-center-in-göttingen-germany",
          title: 'Attended and presented a poster at the Bridging the technological gap – spreading...',
          description: "",
          section: "News",},{id: "news-co-organized-with-viktoria-zemliak-the-bridging-the-gap-between-biological-and-artificial-neural-networks-at-the-research-training-group-rtg-in-computational-cognition",
          title: 'Co-organized with Viktoria Zemliak the “Bridging the Gap between Biological and Artificial Neural...',
          description: "",
          section: "News",},{id: "news-attended-mediterranean-machine-learning-school-università-milano-bicocca-milan-italy",
          title: 'Attended Mediterranean Machine Learning school, Università Milano Bicocca, Milan, Italy.',
          description: "",
          section: "News",},{id: "news-launched-the-graduate-assistance-initiative-network-gain-globally-with-130-attendees",
          title: 'Launched the Graduate Assistance Initiative Network (GAIN) globally with 130+ attendees.',
          description: "",
          section: "News",},{id: "news-submitted-a-manuscript-to-plos-one-a-mathematical-framework-for-understanding-recognition-systems",
          title: 'submitted a manuscript to PLOS One A Mathematical Framework for Understanding Recognition Systems....',
          description: "",
          section: "News",},{id: "news-self-supervised-learning-of-speech-representation-via-redundancy-reduction-accepted-for-oral-presentation-at-ki-2023-46th-german-conference-on-artificial-intelligence-berlin-germany",
          title: 'Self-Supervised Learning of Speech Representation via Redundancy Reduction” accepted for oral presentation at...',
          description: "",
          section: "News",},{id: "news-visual-interpretable-and-explainable-deep-learning-models-for-brain-tumor-mri-and-covid-19-chest-x-ray-images-published-in-arxiv-preprint-arxiv-2208-00953",
          title: 'Visual Interpretable and Explainable Deep Learning Models for Brain Tumor MRI and COVID-19...',
          description: "",
          section: "News",},{id: "news-self-supervised-learning-of-speech-representation-via-redundancy-reduction-extended-abstract-published-at-gesellschaft-für-informatik-e-v",
          title: 'Self-Supervised Learning of Speech Representation via Redundancy Reduction” extended abstract published at Gesellschaft...',
          description: "",
          section: "News",},{id: "news-co-organizing-with-ulf-krumnack-and-lukas-niehaus-a-seminar-deep-representation-learning-winter-2023-24-at-osnabrück-university",
          title: 'Co-organizing with Ulf Krumnack and Lukas Niehaus a Seminar: Deep Representation Learning (Winter...',
          description: "",
          section: "News",},{id: "news-learning-disentangled-speech-representations-accepted-for-poster-presentation-at-new-in-ml-neurips-2023",
          title: 'Learning Disentangled Speech Representations” accepted for poster presentation at New in ML, NeurIPS...',
          description: "",
          section: "News",},{id: "news-attended-neurips-2023-in-new-orleans-usa-where-presented-research-poster-on-disentangled-speech-representation-learning-via-self-supervision-sharing-novel-techniques-for-learning-interpretable-and-robust-speech-representations",
          title: 'Attended NeurIPS 2023 in New Orleans, USA where Presented research poster on disentangled...',
          description: "",
          section: "News",},{id: "news-bridging-the-gap-exploring-interpretability-in-deep-learning-models-for-brain-tumor-classification-from-mri-images-submitted-to-mdpi-information-special-issue-deep-learning-in-medical-image-analysis-foundations-techniques-and-applications",
          title: 'Bridging the Gap: Exploring Interpretability in Deep Learning Models for Brain Tumor Classification...',
          description: "",
          section: "News",},{id: "news-understanding-self-supervised-learning-of-speech-representation-via-invariance-and-redundancy-reduction-accepted-for-oral-presentation-at-mdpi-information-2024-15-2-114",
          title: 'Understanding Self-Supervised Learning of Speech Representation via Invariance and Redundancy Reduction” accepted for...',
          description: "",
          section: "News",},{id: "news-learning-disentangled-audio-representations-through-controlled-synthesis-accepted-for-oral-presentation-at-iclr-tiny-papers-2024",
          title: 'Learning Disentangled Audio Representations through Controlled Synthesis” accepted for oral presentation at ICLR...',
          description: "",
          section: "News",},{id: "news-talk-on-causal-representation-learning-at-the-computer-vision-colloquium-osnabrueck-university",
          title: 'Talk on “Causal Representation Learning” at the Computer Vision Colloquium, Osnabrueck University.',
          description: "",
          section: "News",},{id: "news-got-accepted-to-attend-in-person-the-deep-learning-reinforcement-learning-dlrl-summer-school-2024-by-cifar-and-the-vector-institute-in-toronto-canada",
          title: 'Got accepted to attend in-person the Deep Learning + Reinforcement Learning (DLRL) Summer...',
          description: "",
          section: "News",},{id: "news-bridging-the-gap-exploring-interpretability-in-deep-learning-models-for-brain-tumor-detection-and-diagnosis-from-mri-images-published-in-mdpi-information-2024-15-4-182",
          title: 'Bridging the Gap: Exploring Interpretability in Deep Learning Models for Brain Tumor Detection...',
          description: "",
          section: "News",},{id: "news-saliency-driven-explainable-deep-learning-in-medical-imaging-bridging-visual-explainability-and-statistical-quantitative-analysis-published-in-biodata-mining-17-18",
          title: 'Saliency-driven explainable deep learning in medical imaging: bridging visual explainability and statistical quantitative...',
          description: "",
          section: "News",},{id: "news-talk-on-assessing-fusarium-oxysporum-disease-severity-in-cotton-using-unmanned-aerial-system-images-and-a-hybrid-domain-adaptation-deep-learning-time-series-model-at-the-leibniz-institute-for-agricultural-engineering-and-bioeconomy",
          title: 'Talk on “Assessing fusarium oxysporum disease severity in cotton using unmanned aerial system...',
          description: "",
          section: "News",},{id: "news-launched-syncspeech-datasets-a-large-scale-collection-of-synthetic-speech-datasets-for-speech-representation-learning-available-at-syncspeech-datasets",
          title: 'Launched SyncSpeech Datasets: A large-scale collection of synthetic speech datasets for speech representation...',
          description: "",
          section: "News",},{id: "news-talk-on-assessing-explainability-in-deep-learning-for-medical-image-analysis-at-the-fraunhofer-institute-for-algorithms-and-scientific-computing-scai",
          title: 'Talk on “Assessing Explainability in Deep Learning for Medical Image Analysis” at the...',
          description: "",
          section: "News",},{id: "news-talk-on-trustworthy-healthcare-ai-for-mental-health-risk-prediction-at-the-neurobiology-research-unit-copenhagen-university-hospital",
          title: 'Talk on “Trustworthy Healthcare AI for Mental Health Risk Prediction” at the Neurobiology...',
          description: "",
          section: "News",},{id: "news-learning-disentangled-speech-representations-preprint-published-in-arxiv-2311-03389v4",
          title: 'Learning Disentangled Speech Representations” preprint published in arXiv:2311.03389v4.',
          description: "",
          section: "News",},{id: "news-the-association-of-commonwealth-universities-case-study-on-advancing-artificial-intelligence-for-healthcare-and-developing-human-capital-in-low-resource-settings-published-in-acu-research",
          title: 'The Association of Commonwealth Universities Case Study on “Advancing artificial intelligence for healthcare...',
          description: "",
          section: "News",},{id: "news-phd-dissertation-submitted-and-approved-for-examination-and-graduation-disentangled-representation-learning-in-speech-and-vocalization",
          title: 'PhD Dissertation Submitted and approved for examination and graduation: “Disentangled Representation Learning in...',
          description: "",
          section: "News",},{id: "news-completed-the-must-deep-learning-bootcamp-north-west-university-south-africa-must-deep-learning-bootcamp-2025",
          title: 'Completed the MUST Deep Learning Bootcamp, North-West University, South Africa MUST Deep Learning...',
          description: "",
          section: "News",},{id: "news-talk-on-multimodal-federated-learning-for-robust-lung-cancer-prognosis-at-the-fraunhofer-institute-for-algorithms-and-scientific-computing-scai",
          title: 'Talk on “Multimodal Federated Learning for Robust Lung Cancer Prognosis” at the Fraunhofer...',
          description: "",
          section: "News",},{id: "news-a-systematic-review-of-low-rank-and-local-low-rank-matrix-approximation-in-big-data-medical-imaging-published-for-publication-in-springer-nature-neural-computing-and-applications",
          title: 'A systematic review of low-rank and local low-rank matrix approximation in big data...',
          description: "",
          section: "News",},{id: "news-made-a-first-commit-to-a-pytorch-based-xai-for-dementia-using-3d-cnn-and-nifti-data",
          title: 'Made a first commit to a Pytorch-based XAI for Dementia using 3D CNN...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-phd-thesis-at-the-institute-of-cognitive-science-osnabrück-university",
          title: 'Successfully defended my PhD thesis at the Institute of Cognitive Science, Osnabrück University....',
          description: "",
          section: "News",},{id: "news-gave-a-talk-on-artificial-intelligence-and-its-role-in-shaping-our-future-at-the-university-of-makeni-computer-science-alumni-forum",
          title: 'Gave a talk on Artificial Intelligence and Its Role in Shaping Our Future...',
          description: "",
          section: "News",},{id: "news-phd-thesis-published-in-the-collection-fb08-e-dissertations-disentangled-representation-learning-in-speech-and-vocalization",
          title: 'PhD Thesis Published in the collection: FB08 - E-Dissertations: “Disentangled Representation Learning in...',
          description: "",
          section: "News",},{id: "news-completed-introduction-to-healthcare-by-stanford-online-with-a-focus-on-healthcare-systems-quality-improvement-and-patient-safety-certificate-available-at-here",
          title: 'Completed “Introduction to Healthcare by Stanford Online” with a focus on healthcare systems,...',
          description: "",
          section: "News",},{id: "news-completed-introduction-to-clinical-data-by-stanford-online-with-a-focus-on-clinical-data-types-sources-and-applications-in-healthcare-certificate-available-at-here",
          title: 'Completed “Introduction to Clinical Data by Stanford Online” with a focus on clinical...',
          description: "",
          section: "News",},{id: "news-completed-fundamentals-of-machine-learning-for-healthcare-by-stanford-online-with-a-focus-on-machine-learning-techniques-and-their-applications-in-healthcare-certificate-available-at-here",
          title: 'Completed “Fundamentals of Machine Learning for Healthcare by Stanford Online” with a focus...',
          description: "",
          section: "News",},{id: "news-completed-ai-applications-in-healthcare-specialization-by-stanford-online-with-a-focus-on-ai-techniques-and-their-applications-in-biomedicine-certificate-available-at-here",
          title: 'Completed “ AI Applications in Healthcare Specialization by Stanford Online” with a focus...',
          description: "",
          section: "News",},{id: "news-completed-evaluations-of-ai-applications-in-healthcare-by-stanford-online-with-a-focus-on-ai-techniques-and-their-applications-in-medical-diagnosis-certificate-available-at-here",
          title: 'Completed “ Evaluations of AI Applications in Healthcare by Stanford Online” with a...',
          description: "",
          section: "News",},{id: "news-our-ai-in-ntd-consortium-manuscript-titled-artificial-intelligence-in-neglected-tropical-diseases-current-applications-challenges-and-opportunities-submitted-to-npj-digital-medicine",
          title: 'Our AI in NTD Consortium manuscript titled “Artificial Intelligence in Neglected Tropical Diseases:...',
          description: "",
          section: "News",},{id: "news-our-llm-guided-xai-for-medical-image-diagnostics-manuscript-titled-bridging-visual-saliency-and-large-language-models-for-self-explainable-deep-learning-in-medical-imaging-submitted-to-biodata-mining",
          title: 'Our LLM-Guided XAI for Medical Image Diagnostics manuscript titled “Bridging Visual Saliency and...',
          description: "",
          section: "News",},{id: "news-our-systematic-review-title-transformers-for-3d-medical-image-analysis-a-systematic-review-of-architectural-innovations-performance-and-clinical-applications-got-accepted-at-artificial-intelligence-review",
          title: 'Our systematic review title “Transformers for 3D Medical Image Analysis: A Systematic Review...',
          description: "",
          section: "News",},{id: "news-our-tabular-foundation-model-manuscript-titled-few-shot-learning-with-cross-country-generalization-of-tabular-machine-learning-and-foundation-models-for-childhood-anemia-prediction-under-distribution-shift-submitted-to-biodata-mining",
          title: 'Our Tabular Foundation Model manuscript titled “Few-shot Learning with Cross-country Generalization of Tabular...',
          description: "",
          section: "News",},{id: "news-my-research-project-was-awarded-a-google-cloud-research-grant-to-fully-fund-our-high-performance-academic-computing-storage-and-data-analytics-infrastructure-for-the-next-year",
          title: 'My research project was awarded a Google Cloud Research Grant to fully fund...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-be-serving-as-program-chair-of-the-pan-african-artificial-intelligence-and-smart-systems-conference-pa-aiss-2026-taking-place-at-the-university-of-technology-kingston-jamaica-october-13-16-2026",
          title: 'I am excited to be serving as program chair of the Pan-African Artificial...',
          description: "",
          section: "News",},{id: "news-our-manuscript-titled-from-visual-saliency-to-anatomical-explanation-generating-textual-diagnostic-reports-from-brain-mris-with-saliency-grounded-llms-got-accepted-for-publication-in-springer-nature-biodata-mining",
          title: 'Our manuscript titled “From Visual Saliency to Anatomical Explanation: Generating Textual Diagnostic Reports...',
          description: "",
          section: "News",},{id: "news-our-manuscript-titled-a-multimodal-explainable-deep-learning-framework-for-alzheimer-s-disease-diagnosis-using-3d-magnetic-resonance-imaging-and-clinical-data-got-accepted-for-publication-in-springer-nature-cognitive-computation",
          title: 'Our manuscript titled “A Multimodal Explainable Deep Learning Framework for Alzheimer’s Disease Diagnosis...',
          description: "",
          section: "News",},{id: "news-received-the-lambda-ai-research-grant-for-supporting-large-scale-multimodal-biomedical-ai-research-for-infectious-diseases",
          title: 'Received the Lambda AI Research Grant for supporting large-scale multimodal biomedical AI research...',
          description: "",
          section: "News",},{id: "teaching-principles-of-programming-languages",
          title: 'Principles of Programming Languages',
          description: "Undergraduate courses · University of Makeni, Department of Computer Science · Makeni, Sierra Leone · 2017",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2017-ppp";
            },},{id: "teaching-data-mining-and-warehousing",
          title: 'Data Mining and Warehousing',
          description: "Undergraduate courses · University of Makeni, Department of Computer Science · Makeni, Sierra Leone · 2017",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2017-dmw";
            },},{id: "teaching-server-side-programming-with-php",
          title: 'Server-side programming with PHP',
          description: "Undergraduate courses · University of Makeni, Department of Computer Science · Makeni, Sierra Leone · 2017",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2017-php";
            },},{id: "teaching-relational-database-management-systems",
          title: 'Relational Database Management Systems',
          description: "Undergraduate courses · University of Makeni, Department of Computer Science · Makeni, Sierra Leone · 2017",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2017-rdbms";
            },},{id: "teaching-principles-of-programming-logic-and-design",
          title: 'Principles of Programming Logic and Design',
          description: "Undergraduate courses · Limkokwing University of Creative Technology, Faculty of Information and Communication Technology · Freetown, Sierra Leone · 2018",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2018-ppp";
            },},{id: "teaching-deep-representation-learning-seminar",
          title: 'Deep Representation Learning Seminar',
          description: "Graduate/Undergraduate Seminar · University of Osnabrück, Institute of Cognitive Science · Osnabrück, Germany · 2023",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2023-deep-representation-learning";
            },},{id: "teaching-introduction-to-computer-vision",
          title: 'Introduction to Computer Vision',
          description: "Graduate course, Structured Master&#39;s in Data Science · African Institute for Mathematical Sciences (AIMS) Cameroon · Limbe, Cameroon · 2027",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2027-aims-computer-vision";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%62%72%69%6D%61@%75%6F%73.%64%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fT2b7UwAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9975-8676", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yusufbrima", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yusufbrima", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/_yusufbrima", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'Researchgate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Yusuf_Brima", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
