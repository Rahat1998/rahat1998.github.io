/* ============================================================
   tests-data.js  —  MedLab Reference  |  v5.0
   700 medical tests across 39 categories.
   IMPORTANT: Keep this file in the same folder as index.html
   ============================================================ */

window.DATA_VERSION = 8;

window.CAT_META = {
  'Complete Blood Count':         {accent:'#E53935',icon:'🩸'},
  'Liver Function':               {accent:'#F57C00',icon:'🫀'},
  'Kidney Function':              {accent:'#2E7D32',icon:'🫘'},
  'Blood Sugar':                  {accent:'#F9A825',icon:'🍬'},
  'Lipid Profile':                {accent:'#C62828',icon:'💊'},
  'Thyroid Function':             {accent:'#6A1B9A',icon:'🦋'},
  'Electrolytes':                 {accent:'#00838F',icon:'⚡'},
  'Iron Studies':                 {accent:'#BF360C',icon:'🔬'},
  'Vitamins & Minerals':          {accent:'#558B2F',icon:'🌿'},
  'Coagulation':                  {accent:'#AD1457',icon:'🩹'},
  'Cardiac Markers':              {accent:'#B71C1C',icon:'❤️'},
  'Hormones':                     {accent:'#6A1B9A',icon:'⚗️'},
  'Pancreatic Function':          {accent:'#33691E',icon:'🫁'},
  'Autoimmune & Inflammation':    {accent:'#00695C',icon:'🛡️'},
  'Urinalysis':                   {accent:'#1565C0',icon:'🧫'},
  'Tumor Markers':                {accent:'#C62828',icon:'🔭'},
  'Infectious Disease':           {accent:'#1B5E20',icon:'🦠'},
  'Arterial Blood Gas':           {accent:'#0277BD',icon:'💨'},
  'Proteins & Immunoglobulins':   {accent:'#E65100',icon:'🧬'},
  'Bone Markers':                 {accent:'#4E342E',icon:'🦴'},
  'Nutritional Markers':          {accent:'#827717',icon:'🥗'},
  'Allergy & Sensitivity':        {accent:'#4527A0',icon:'🤧'},
  'Stool & GI Tests':             {accent:'#6D4C41',icon:'💩'},
  'Semen Analysis':               {accent:'#37474F',icon:'🔍'},
  'Pediatric Reference':          {accent:'#0288D1',icon:'👶'},
  'Drug Monitoring':              {accent:'#455A64',icon:'💉'},
  'Toxicology':                   {accent:'#263238',icon:'☠️'},
  'CSF Analysis':                 {accent:'#4A148C',icon:'🧠'},
  'Synovial Fluid':               {accent:'#1A237E',icon:'🦵'},
  'Pleural & Peritoneal Fluid':   {accent:'#01579B',icon:'💧'},
  'Metabolic & Genetic':          {accent:'#6D4C41',icon:'🧬'},
  'Respiratory & Pulmonary':      {accent:'#0277BD',icon:'🫁'},
  'Dermatology & Skin':           {accent:'#E91E63',icon:'🩺'},
  'Neurological Markers':         {accent:'#7B1FA2',icon:'🧠'},
  'Ophthalmology':                {accent:'#1976D2',icon:'👁️'},
  'Gastrointestinal':             {accent:'#795548',icon:'🫃'},
  'Reproductive & Fertility':     {accent:'#C2185B',icon:'👶'},
  'Oncology & Hematology':        {accent:'#D32F2F',icon:'🔴'},
  'Endocrinology & Metabolism':   {accent:'#388E3C',icon:'⚗️'},
};

window.ALL_TESTS = [

  // ─── BLOOD TESTS ─────────────────────────────────────────────

  // Complete Blood Count (18)
  {id:1,   specimen:'Blood', category:'Complete Blood Count', name:'Hemoglobin (Male)',         unit:'g/dL',           low:13.5, high:17.5, description:'Oxygen-carrying protein in red blood cells'},
  {id:2,   specimen:'Blood', category:'Complete Blood Count', name:'Hemoglobin (Female)',       unit:'g/dL',           low:12.0, high:15.5, description:'Oxygen-carrying protein in red blood cells'},
  {id:3,   specimen:'Blood', category:'Complete Blood Count', name:'WBC Count',                 unit:'×10³/μL',        low:4.5,  high:11.0, description:'White blood cells that fight infection'},
  {id:4,   specimen:'Blood', category:'Complete Blood Count', name:'Platelet Count',            unit:'×10³/μL',        low:150,  high:400,  description:'Tiny cells that help blood clot'},
  {id:5,   specimen:'Blood', category:'Complete Blood Count', name:'RBC Count (Male)',          unit:'×10⁶/μL',        low:4.5,  high:5.9,  description:'Red blood cells that carry oxygen'},
  {id:6,   specimen:'Blood', category:'Complete Blood Count', name:'RBC Count (Female)',        unit:'×10⁶/μL',        low:4.0,  high:5.2,  description:'Red blood cells that carry oxygen'},
  {id:7,   specimen:'Blood', category:'Complete Blood Count', name:'MCV',                       unit:'fL',             low:80,   high:100,  description:'Mean corpuscular volume — size of RBCs'},
  {id:8,   specimen:'Blood', category:'Complete Blood Count', name:'MCH',                       unit:'pg',             low:27,   high:33,   description:'Mean corpuscular hemoglobin per RBC'},
  {id:9,   specimen:'Blood', category:'Complete Blood Count', name:'MCHC',                      unit:'g/dL',           low:33,   high:36,   description:'Mean corpuscular hemoglobin concentration'},
  {id:10,  specimen:'Blood', category:'Complete Blood Count', name:'RDW',                       unit:'%',              low:11.5, high:14.5, description:'Red cell distribution width — RBC size variation'},
  {id:11,  specimen:'Blood', category:'Complete Blood Count', name:'Neutrophils',               unit:'%',              low:50,   high:70,   description:'Most common WBC; first responder to infection'},
  {id:12,  specimen:'Blood', category:'Complete Blood Count', name:'Lymphocytes',               unit:'%',              low:20,   high:40,   description:'White cells involved in immune response'},
  {id:13,  specimen:'Blood', category:'Complete Blood Count', name:'Monocytes',                 unit:'%',              low:2,    high:8,    description:'White cells that engulf and destroy pathogens'},
  {id:14,  specimen:'Blood', category:'Complete Blood Count', name:'Eosinophils',               unit:'%',              low:1,    high:4,    description:'White cells active in allergies and parasites'},
  {id:15,  specimen:'Blood', category:'Complete Blood Count', name:'Basophils',                 unit:'%',              low:0,    high:1,    description:'Rare white cells involved in inflammation'},
  {id:16,  specimen:'Blood', category:'Complete Blood Count', name:'Hematocrit (Male)',         unit:'%',              low:41,   high:53,   description:'Percentage of blood volume occupied by RBCs'},
  {id:17,  specimen:'Blood', category:'Complete Blood Count', name:'Hematocrit (Female)',       unit:'%',              low:36,   high:46,   description:'Percentage of blood volume occupied by RBCs'},
  {id:18,  specimen:'Blood', category:'Complete Blood Count', name:'MPV',                       unit:'fL',             low:7.5,  high:12.5, description:'Mean platelet volume — platelet activity indicator'},

  // Liver Function (16)
  {id:19,  specimen:'Blood', category:'Liver Function', name:'ALT (SGPT)',                      unit:'U/L',   low:7,    high:56,   description:'Alanine aminotransferase — liver-specific enzyme'},
  {id:20,  specimen:'Blood', category:'Liver Function', name:'AST (SGOT)',                      unit:'U/L',   low:10,   high:40,   description:'Aspartate aminotransferase — liver/heart enzyme'},
  {id:21,  specimen:'Blood', category:'Liver Function', name:'ALP',                             unit:'U/L',   low:44,   high:147,  description:'Alkaline phosphatase — liver and bone enzyme'},
  {id:22,  specimen:'Blood', category:'Liver Function', name:'GGT',                             unit:'U/L',   low:8,    high:61,   description:'Gamma-glutamyl transferase — sensitive to alcohol'},
  {id:23,  specimen:'Blood', category:'Liver Function', name:'Total Bilirubin',                 unit:'mg/dL', low:0.2,  high:1.2,  description:'Waste product from red blood cell breakdown'},
  {id:24,  specimen:'Blood', category:'Liver Function', name:'Direct Bilirubin',                unit:'mg/dL', low:0.0,  high:0.3,  description:'Conjugated bilirubin processed by liver'},
  {id:25,  specimen:'Blood', category:'Liver Function', name:'Indirect Bilirubin',              unit:'mg/dL', low:0.2,  high:0.9,  description:'Unconjugated bilirubin before liver processing'},
  {id:26,  specimen:'Blood', category:'Liver Function', name:'Albumin',                         unit:'g/dL',  low:3.5,  high:5.0,  description:'Major blood protein synthesized by liver'},
  {id:27,  specimen:'Blood', category:'Liver Function', name:'Total Protein',                   unit:'g/dL',  low:6.3,  high:8.2,  description:'Combined albumin and globulin in blood'},
  {id:28,  specimen:'Blood', category:'Liver Function', name:'Globulin',                        unit:'g/dL',  low:2.0,  high:3.5,  description:'Group of proteins including antibodies'},
  {id:29,  specimen:'Blood', category:'Liver Function', name:'A/G Ratio',                       unit:'ratio', low:1.2,  high:2.2,  description:'Albumin to globulin ratio — liver and immune indicator'},
  {id:30,  specimen:'Blood', category:'Liver Function', name:'PT (Prothrombin Time)',           unit:'sec',   low:11,   high:13.5, description:'Time for blood to clot; reflects liver synthesis'},
  {id:31,  specimen:'Blood', category:'Liver Function', name:'INR',                             unit:'ratio', low:0.8,  high:1.1,  description:'Standardized prothrombin time ratio'},
  {id:32,  specimen:'Blood', category:'Liver Function', name:'LDH',                             unit:'U/L',   low:140,  high:280,  description:'Lactate dehydrogenase — released with tissue damage'},
  {id:33,  specimen:'Blood', category:'Liver Function', name:'5-Nucleotidase',                  unit:'U/L',   low:2,    high:17,   description:'Enzyme elevated in liver and biliary disease'},
  {id:34,  specimen:'Blood', category:'Liver Function', name:'Cholinesterase (Serum)',          unit:'U/L',   low:5320, high:12920,description:'Liver synthetic marker; low in liver failure/poisoning'},

  // Kidney Function (13)
  {id:35,  specimen:'Blood', category:'Kidney Function', name:'Creatinine (Male)',              unit:'mg/dL',          low:0.74, high:1.35, description:'Waste filtered by kidneys; elevated in renal disease'},
  {id:36,  specimen:'Blood', category:'Kidney Function', name:'Creatinine (Female)',            unit:'mg/dL',          low:0.59, high:1.04, description:'Waste filtered by kidneys; elevated in renal disease'},
  {id:37,  specimen:'Blood', category:'Kidney Function', name:'BUN',                            unit:'mg/dL',          low:7,    high:20,   description:'Blood urea nitrogen from protein metabolism'},
  {id:38,  specimen:'Blood', category:'Kidney Function', name:'BUN/Creatinine Ratio',          unit:'ratio',          low:10,   high:20,   description:'Used to assess kidney function and hydration'},
  {id:39,  specimen:'Blood', category:'Kidney Function', name:'eGFR',                           unit:'mL/min/1.73m²',  low:60,   high:120,  description:'Estimated glomerular filtration rate'},
  {id:40,  specimen:'Blood', category:'Kidney Function', name:'Uric Acid (Male)',               unit:'mg/dL',          low:3.4,  high:7.0,  description:'End product of purine metabolism; elevated in gout'},
  {id:41,  specimen:'Blood', category:'Kidney Function', name:'Uric Acid (Female)',             unit:'mg/dL',          low:2.4,  high:6.0,  description:'End product of purine metabolism'},
  {id:42,  specimen:'Blood', category:'Kidney Function', name:'Cystatin C',                     unit:'mg/L',           low:0.5,  high:1.0,  description:'More accurate kidney marker than creatinine'},
  {id:43,  specimen:'Blood', category:'Kidney Function', name:'Creatinine Clearance',          unit:'mL/min',         low:88,   high:128,  description:'Rate kidneys clear creatinine from blood'},
  {id:44,  specimen:'Blood', category:'Kidney Function', name:'Osmolality (Serum)',             unit:'mOsm/kg',        low:275,  high:295,  description:'Concentration of dissolved particles in blood'},
  {id:45,  specimen:'Blood', category:'Kidney Function', name:'Beta-2 Microglobulin (Blood)',  unit:'mg/L',           low:0.8,  high:2.4,  description:'Tubular function marker elevated in kidney disease'},
  {id:46,  specimen:'Blood', category:'Kidney Function', name:'Symmetric Dimethylarginine',    unit:'ng/mL',          low:0,    high:0.5,  description:'SDMA — early GFR decline marker'},
  {id:47,  specimen:'Blood', category:'Kidney Function', name:'Phosphorus (Kidney)',            unit:'mg/dL',          low:2.5,  high:4.5,  description:'Elevated in chronic kidney disease'},

  // Blood Sugar (10)
  {id:48,  specimen:'Blood', category:'Blood Sugar', name:'Fasting Blood Glucose',              unit:'mg/dL', low:70,   high:100,  description:'Blood glucose after minimum 8 hours fasting'},
  {id:49,  specimen:'Blood', category:'Blood Sugar', name:'Random Blood Glucose',               unit:'mg/dL', low:70,   high:140,  description:'Blood glucose measured at any time of day'},
  {id:50,  specimen:'Blood', category:'Blood Sugar', name:'Post-Prandial Glucose (2h)',         unit:'mg/dL', low:70,   high:140,  description:'Blood glucose 2 hours after a meal'},
  {id:51,  specimen:'Blood', category:'Blood Sugar', name:'HbA1c',                              unit:'%',     low:4.0,  high:5.6,  description:'3-month average blood sugar — key diabetes marker'},
  {id:52,  specimen:'Blood', category:'Blood Sugar', name:'Fructosamine',                       unit:'μmol/L',low:200,  high:285,  description:'2–3 week average blood glucose level'},
  {id:53,  specimen:'Blood', category:'Blood Sugar', name:'Insulin (Fasting)',                  unit:'μIU/mL',low:2.6,  high:24.9, description:'Hormone that regulates blood glucose'},
  {id:54,  specimen:'Blood', category:'Blood Sugar', name:'C-Peptide',                          unit:'ng/mL', low:0.8,  high:3.9,  description:'Marker of insulin production by pancreatic beta cells'},
  {id:55,  specimen:'Blood', category:'Blood Sugar', name:'HOMA-IR Index',                      unit:'index', low:0,    high:2.5,  description:'Insulin resistance score'},
  {id:56,  specimen:'Blood', category:'Blood Sugar', name:'Glucagon',                           unit:'pg/mL', low:50,   high:100,  description:'Pancreatic hormone that raises blood glucose'},
  {id:57,  specimen:'Blood', category:'Blood Sugar', name:'1,5-Anhydroglucitol',               unit:'μg/mL', low:10,   high:40,   description:'Short-term glycemic control marker (1–2 week average)'},

  // Lipid Profile (13)
  {id:58,  specimen:'Blood', category:'Lipid Profile', name:'Total Cholesterol',                unit:'mg/dL', low:0,    high:200,  description:'Total cholesterol in blood — desirable below 200'},
  {id:59,  specimen:'Blood', category:'Lipid Profile', name:'LDL Cholesterol',                  unit:'mg/dL', low:0,    high:100,  description:'Bad cholesterol; major heart disease risk factor'},
  {id:60,  specimen:'Blood', category:'Lipid Profile', name:'HDL Cholesterol (Male)',           unit:'mg/dL', low:40,   high:60,   description:'Good cholesterol; higher levels are protective'},
  {id:61,  specimen:'Blood', category:'Lipid Profile', name:'HDL Cholesterol (Female)',         unit:'mg/dL', low:50,   high:60,   description:'Good cholesterol; higher levels are protective'},
  {id:62,  specimen:'Blood', category:'Lipid Profile', name:'Triglycerides',                    unit:'mg/dL', low:0,    high:150,  description:'Type of fat in blood; elevated with poor diet'},
  {id:63,  specimen:'Blood', category:'Lipid Profile', name:'VLDL Cholesterol',                 unit:'mg/dL', low:5,    high:40,   description:'Very low-density lipoprotein; precursor to LDL'},
  {id:64,  specimen:'Blood', category:'Lipid Profile', name:'Non-HDL Cholesterol',              unit:'mg/dL', low:0,    high:130,  description:'Total cholesterol minus HDL; cardiovascular risk'},
  {id:65,  specimen:'Blood', category:'Lipid Profile', name:'Cholesterol/HDL Ratio',           unit:'ratio', low:0,    high:5.0,  description:'Cardiac risk ratio; lower is better'},
  {id:66,  specimen:'Blood', category:'Lipid Profile', name:'Apo A-I',                          unit:'mg/dL', low:110,  high:205,  description:'Main protein of HDL particles'},
  {id:67,  specimen:'Blood', category:'Lipid Profile', name:'Apo B',                            unit:'mg/dL', low:50,   high:110,  description:'Main protein of LDL/VLDL; cardiovascular risk'},
  {id:68,  specimen:'Blood', category:'Lipid Profile', name:'Lipoprotein(a)',                   unit:'mg/dL', low:0,    high:30,   description:'Genetic cardiovascular risk factor'},
  {id:69,  specimen:'Blood', category:'Lipid Profile', name:'Small Dense LDL',                  unit:'mg/dL', low:0,    high:35,   description:'Most atherogenic LDL subtype; CV risk marker'},
  {id:70,  specimen:'Blood', category:'Lipid Profile', name:'Remnant Cholesterol',              unit:'mg/dL', low:0,    high:30,   description:'Triglyceride-rich lipoprotein remnants; CV risk'},

  // Thyroid (11)
  {id:71,  specimen:'Blood', category:'Thyroid Function', name:'TSH',                           unit:'mIU/L', low:0.4,  high:4.0,  description:'Thyroid stimulating hormone — master thyroid regulator'},
  {id:72,  specimen:'Blood', category:'Thyroid Function', name:'Free T3',                       unit:'pg/mL', low:2.3,  high:4.1,  description:'Active thyroid hormone affecting metabolism'},
  {id:73,  specimen:'Blood', category:'Thyroid Function', name:'Free T4',                       unit:'ng/dL', low:0.8,  high:1.8,  description:'Prohormone converted to T3 in tissues'},
  {id:74,  specimen:'Blood', category:'Thyroid Function', name:'Total T3',                      unit:'ng/dL', low:80,   high:200,  description:'Total triiodothyronine in blood'},
  {id:75,  specimen:'Blood', category:'Thyroid Function', name:'Total T4',                      unit:'μg/dL', low:5.0,  high:12.0, description:'Total thyroxine in blood'},
  {id:76,  specimen:'Blood', category:'Thyroid Function', name:'Anti-TPO Antibody',             unit:'IU/mL', low:0,    high:34,   description:'Antibody against thyroid peroxidase — Hashimoto marker'},
  {id:77,  specimen:'Blood', category:'Thyroid Function', name:'Anti-Thyroglobulin Ab',         unit:'IU/mL', low:0,    high:115,  description:'Antibody against thyroglobulin — autoimmune thyroid'},
  {id:78,  specimen:'Blood', category:'Thyroid Function', name:'Thyroglobulin',                 unit:'ng/mL', low:1.4,  high:78,   description:'Protein made by thyroid; monitors thyroid cancer'},
  {id:79,  specimen:'Blood', category:'Thyroid Function', name:'Reverse T3',                    unit:'ng/dL', low:10,   high:24,   description:'Inactive form of T3; elevated in chronic illness'},
  {id:80,  specimen:'Blood', category:'Thyroid Function', name:'TRAb (TSH Receptor Ab)',        unit:'IU/L',  low:0,    high:1.75, description:'Antibody stimulating thyroid; elevated in Graves disease'},
  {id:81,  specimen:'Blood', category:'Thyroid Function', name:'Thyroid Peroxidase Activity',   unit:'IU/mL', low:0,    high:35,   description:'TPO enzyme level; reduced in autoimmune thyroid disease'},

  // Electrolytes (10)
  {id:82,  specimen:'Blood', category:'Electrolytes', name:'Sodium',                            unit:'mEq/L', low:136,  high:145,  description:'Primary extracellular cation; regulates fluid balance'},
  {id:83,  specimen:'Blood', category:'Electrolytes', name:'Potassium',                         unit:'mEq/L', low:3.5,  high:5.0,  description:'Critical for heart rhythm and muscle contraction'},
  {id:84,  specimen:'Blood', category:'Electrolytes', name:'Chloride',                          unit:'mEq/L', low:98,   high:107,  description:'Major anion; works with sodium for fluid balance'},
  {id:85,  specimen:'Blood', category:'Electrolytes', name:'Bicarbonate (CO2)',                 unit:'mEq/L', low:22,   high:29,   description:'Regulates blood pH and acid-base balance'},
  {id:86,  specimen:'Blood', category:'Electrolytes', name:'Calcium (Total)',                   unit:'mg/dL', low:8.6,  high:10.3, description:'Essential for bone, muscle, and nerve function'},
  {id:87,  specimen:'Blood', category:'Electrolytes', name:'Calcium (Ionized)',                 unit:'mmol/L',low:1.12, high:1.32, description:'Biologically active free calcium in blood'},
  {id:88,  specimen:'Blood', category:'Electrolytes', name:'Magnesium',                         unit:'mg/dL', low:1.7,  high:2.2,  description:'Cofactor for 300+ enzymes; supports muscles and nerves'},
  {id:89,  specimen:'Blood', category:'Electrolytes', name:'Phosphorus',                        unit:'mg/dL', low:2.5,  high:4.5,  description:'Works with calcium for bone health and energy'},
  {id:90,  specimen:'Blood', category:'Electrolytes', name:'Anion Gap',                         unit:'mEq/L', low:8,    high:16,   description:'Detects acid-base disorders in blood'},
  {id:91,  specimen:'Blood', category:'Electrolytes', name:'Osmolality (Calculated)',           unit:'mOsm/kg',low:275, high:295,  description:'Calculated serum osmolality from Na, glucose, BUN'},

  // Iron Studies (10)
  {id:92,  specimen:'Blood', category:'Iron Studies', name:'Serum Iron (Male)',                 unit:'μg/dL', low:65,   high:175,  description:'Iron circulating in blood bound to transferrin'},
  {id:93,  specimen:'Blood', category:'Iron Studies', name:'Serum Iron (Female)',               unit:'μg/dL', low:50,   high:170,  description:'Iron circulating in blood bound to transferrin'},
  {id:94,  specimen:'Blood', category:'Iron Studies', name:'Ferritin (Male)',                   unit:'ng/mL', low:24,   high:336,  description:'Primary iron storage protein; best iron deficiency marker'},
  {id:95,  specimen:'Blood', category:'Iron Studies', name:'Ferritin (Female)',                 unit:'ng/mL', low:11,   high:307,  description:'Primary iron storage protein'},
  {id:96,  specimen:'Blood', category:'Iron Studies', name:'TIBC',                              unit:'μg/dL', low:250,  high:370,  description:'Total iron-binding capacity of transferrin'},
  {id:97,  specimen:'Blood', category:'Iron Studies', name:'Transferrin Saturation',            unit:'%',     low:20,   high:50,   description:'Percentage of transferrin sites occupied by iron'},
  {id:98,  specimen:'Blood', category:'Iron Studies', name:'Transferrin',                       unit:'mg/dL', low:200,  high:360,  description:'Main iron transport protein in blood'},
  {id:99,  specimen:'Blood', category:'Iron Studies', name:'Soluble Transferrin Receptor',     unit:'mg/L',  low:0.8,  high:1.8,  description:'Sensitive marker for iron deficiency at tissue level'},
  {id:100, specimen:'Blood', category:'Iron Studies', name:'Hepcidin',                          unit:'ng/mL', low:20,   high:280,  description:'Master regulator of iron absorption and distribution'},
  {id:101, specimen:'Blood', category:'Iron Studies', name:'Zinc Protoporphyrin',               unit:'μg/dL', low:0,    high:35,   description:'Elevated when iron supply is inadequate for heme synthesis'},

  // Vitamins & Minerals (16)
  {id:102, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin D (25-OH)',          unit:'ng/mL', low:20,   high:50,   description:'Bone health, immune regulation and calcium absorption'},
  {id:103, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin B12',                unit:'pg/mL', low:200,  high:900,  description:'Essential for nerve function and DNA synthesis'},
  {id:104, specimen:'Blood', category:'Vitamins & Minerals', name:'Folate (Serum)',             unit:'ng/mL', low:2.7,  high:17.0, description:'B-vitamin critical for DNA synthesis and cell division'},
  {id:105, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin A (Retinol)',        unit:'μg/dL', low:30,   high:65,   description:'Essential for vision, immune function and skin health'},
  {id:106, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin C (Ascorbic Acid)', unit:'mg/dL', low:0.4,  high:2.0,  description:'Antioxidant; essential for collagen synthesis'},
  {id:107, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin E (Alpha-Tocoph.)', unit:'mg/dL', low:0.5,  high:1.8,  description:'Fat-soluble antioxidant protecting cell membranes'},
  {id:108, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin K',                  unit:'ng/mL', low:0.1,  high:2.2,  description:'Essential for blood clotting and bone metabolism'},
  {id:109, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin B1 (Thiamine)',      unit:'nmol/L',low:70,   high:180,  description:'Needed for energy metabolism and nerve function'},
  {id:110, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin B6 (Pyridoxine)',    unit:'ng/mL', low:5,    high:50,   description:'Involved in protein metabolism and neurotransmitters'},
  {id:111, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin B2 (Riboflavin)',    unit:'μg/L',  low:100,  high:300,  description:'Required for energy production and cellular function'},
  {id:112, specimen:'Blood', category:'Vitamins & Minerals', name:'Niacin (B3)',                unit:'μg/mL', low:0.5,  high:8.45, description:'Supports energy metabolism and DNA repair'},
  {id:113, specimen:'Blood', category:'Vitamins & Minerals', name:'Zinc',                       unit:'μg/dL', low:60,   high:130,  description:'Essential for immune function and wound healing'},
  {id:114, specimen:'Blood', category:'Vitamins & Minerals', name:'Copper',                     unit:'μg/dL', low:70,   high:140,  description:'Needed for iron metabolism and enzyme activity'},
  {id:115, specimen:'Blood', category:'Vitamins & Minerals', name:'Selenium',                   unit:'μg/L',  low:70,   high:150,  description:'Antioxidant mineral supporting thyroid and immunity'},
  {id:116, specimen:'Blood', category:'Vitamins & Minerals', name:'Manganese',                  unit:'μg/L',  low:4,    high:14,   description:'Cofactor for enzymes; bone formation and metabolism'},
  {id:117, specimen:'Blood', category:'Vitamins & Minerals', name:'Chromium',                   unit:'μg/L',  low:0.1,  high:2.1,  description:'Enhances insulin action; supports glucose metabolism'},

  // Coagulation (13)
  {id:118, specimen:'Blood', category:'Coagulation', name:'Prothrombin Time (PT)',              unit:'sec',   low:11,   high:13.5, description:'Time for blood to clot via extrinsic pathway'},
  {id:119, specimen:'Blood', category:'Coagulation', name:'INR',                                unit:'ratio', low:0.8,  high:1.1,  description:'Standardized PT ratio; monitored on warfarin'},
  {id:120, specimen:'Blood', category:'Coagulation', name:'aPTT',                               unit:'sec',   low:25,   high:35,   description:'Activated partial thromboplastin time — intrinsic pathway'},
  {id:121, specimen:'Blood', category:'Coagulation', name:'Thrombin Time',                      unit:'sec',   low:12,   high:16,   description:'Measures fibrin clot formation from fibrinogen'},
  {id:122, specimen:'Blood', category:'Coagulation', name:'Fibrinogen',                         unit:'mg/dL', low:200,  high:400,  description:'Protein converted to fibrin to form blood clots'},
  {id:123, specimen:'Blood', category:'Coagulation', name:'D-Dimer',                            unit:'μg/mL', low:0,    high:0.5,  description:'Fibrin degradation product; elevated in clotting disorders'},
  {id:124, specimen:'Blood', category:'Coagulation', name:'Bleeding Time',                      unit:'min',   low:1,    high:9,    description:'Time for small wound to stop bleeding'},
  {id:125, specimen:'Blood', category:'Coagulation', name:'Factor VIII Activity',               unit:'%',     low:50,   high:150,  description:'Clotting factor; deficient in Hemophilia A'},
  {id:126, specimen:'Blood', category:'Coagulation', name:'Factor IX Activity',                 unit:'%',     low:50,   high:150,  description:'Clotting factor; deficient in Hemophilia B'},
  {id:127, specimen:'Blood', category:'Coagulation', name:'Protein C Activity',                 unit:'%',     low:70,   high:140,  description:'Natural anticoagulant; deficiency causes thrombosis'},
  {id:128, specimen:'Blood', category:'Coagulation', name:'Protein S Activity',                 unit:'%',     low:60,   high:140,  description:'Cofactor for Protein C anticoagulant function'},
  {id:129, specimen:'Blood', category:'Coagulation', name:'Antithrombin III',                   unit:'%',     low:80,   high:120,  description:'Natural anticoagulant; inhibits thrombin'},
  {id:130, specimen:'Blood', category:'Coagulation', name:'Lupus Anticoagulant',                unit:'ratio', low:0,    high:1.2,  description:'Antibody causing paradoxical thrombosis risk'},

  // Cardiac Markers (12)
  {id:131, specimen:'Blood', category:'Cardiac Markers', name:'Troponin I (cTnI)',              unit:'ng/mL', low:0,    high:0.04, description:'Gold standard marker for myocardial infarction'},
  {id:132, specimen:'Blood', category:'Cardiac Markers', name:'Troponin T (cTnT)',              unit:'ng/mL', low:0,    high:0.01, description:'Highly sensitive cardiac injury marker'},
  {id:133, specimen:'Blood', category:'Cardiac Markers', name:'CK-MB',                          unit:'ng/mL', low:0,    high:5,    description:'Creatine kinase MB — specific to heart muscle damage'},
  {id:134, specimen:'Blood', category:'Cardiac Markers', name:'Total CK',                       unit:'U/L',   low:22,   high:198,  description:'Creatine kinase — elevated with muscle or heart damage'},
  {id:135, specimen:'Blood', category:'Cardiac Markers', name:'BNP',                            unit:'pg/mL', low:0,    high:100,  description:'B-type natriuretic peptide — heart failure marker'},
  {id:136, specimen:'Blood', category:'Cardiac Markers', name:'NT-proBNP',                      unit:'pg/mL', low:0,    high:125,  description:'Precursor of BNP; heart failure and cardiac stress'},
  {id:137, specimen:'Blood', category:'Cardiac Markers', name:'Myoglobin',                      unit:'ng/mL', low:0,    high:90,   description:'Oxygen-binding protein; early marker of muscle injury'},
  {id:138, specimen:'Blood', category:'Cardiac Markers', name:'hs-CRP (Cardiac)',               unit:'mg/L',  low:0,    high:1.0,  description:'High-sensitivity CRP for cardiovascular risk'},
  {id:139, specimen:'Blood', category:'Cardiac Markers', name:'Homocysteine',                   unit:'μmol/L',low:5,    high:15,   description:'Elevated levels are cardiovascular risk factor'},
  {id:140, specimen:'Blood', category:'Cardiac Markers', name:'Lipoprotein-Associated PLA2',   unit:'ng/mL', low:0,    high:200,  description:'Enzyme linked to vascular inflammation and plaque'},
  {id:141, specimen:'Blood', category:'Cardiac Markers', name:'Heart-Type Fatty Acid BP',       unit:'ng/mL', low:0,    high:6.2,  description:'H-FABP — very early cardiac injury marker'},
  {id:142, specimen:'Blood', category:'Cardiac Markers', name:'Copeptin',                       unit:'pmol/L',low:0,    high:10,   description:'Surrogate marker for ADH; early MI rule-out marker'},

  // Hormones (30)
  {id:143, specimen:'Blood', category:'Hormones', name:'Cortisol (AM)',                         unit:'μg/dL', low:6,    high:23,   description:'Stress hormone from adrenal glands; measured in morning'},
  {id:144, specimen:'Blood', category:'Hormones', name:'Cortisol (PM)',                         unit:'μg/dL', low:2,    high:11,   description:'Stress hormone; lower in afternoon (diurnal variation)'},
  {id:145, specimen:'Blood', category:'Hormones', name:'ACTH',                                  unit:'pg/mL', low:7,    high:63,   description:'Adrenocorticotropic hormone — controls cortisol'},
  {id:146, specimen:'Blood', category:'Hormones', name:'FSH (Male)',                            unit:'mIU/mL',low:1.5,  high:12.4, description:'Follicle-stimulating hormone — controls sperm production'},
  {id:147, specimen:'Blood', category:'Hormones', name:'FSH (Female Follicular)',               unit:'mIU/mL',low:3.5,  high:12.5, description:'FSH in follicular phase of menstrual cycle'},
  {id:148, specimen:'Blood', category:'Hormones', name:'FSH (Female Menopausal)',               unit:'mIU/mL',low:25.8, high:134,  description:'FSH elevated in menopause'},
  {id:149, specimen:'Blood', category:'Hormones', name:'LH (Male)',                             unit:'mIU/mL',low:1.7,  high:8.6,  description:'Luteinizing hormone — regulates testosterone'},
  {id:150, specimen:'Blood', category:'Hormones', name:'LH (Female Follicular)',                unit:'mIU/mL',low:2.4,  high:12.6, description:'Luteinizing hormone in follicular phase'},
  {id:151, specimen:'Blood', category:'Hormones', name:'Testosterone (Male Total)',             unit:'ng/dL', low:300,  high:1000, description:'Primary male sex hormone'},
  {id:152, specimen:'Blood', category:'Hormones', name:'Testosterone (Female Total)',           unit:'ng/dL', low:15,   high:70,   description:'Testosterone in females — libido and bone health'},
  {id:153, specimen:'Blood', category:'Hormones', name:'Free Testosterone (Male)',              unit:'pg/mL', low:9,    high:30,   description:'Biologically active unbound testosterone'},
  {id:154, specimen:'Blood', category:'Hormones', name:'Estradiol (E2) Female',                unit:'pg/mL', low:30,   high:400,  description:'Primary female sex hormone — varies with cycle'},
  {id:155, specimen:'Blood', category:'Hormones', name:'Estradiol (E2) Male',                  unit:'pg/mL', low:10,   high:40,   description:'Estradiol in males; important for bone and libido'},
  {id:156, specimen:'Blood', category:'Hormones', name:'Progesterone (Follicular)',             unit:'ng/mL', low:0.1,  high:0.9,  description:'Female hormone; rises after ovulation'},
  {id:157, specimen:'Blood', category:'Hormones', name:'Progesterone (Luteal)',                 unit:'ng/mL', low:1.7,  high:27,   description:'Female hormone in luteal phase; elevated in pregnancy'},
  {id:158, specimen:'Blood', category:'Hormones', name:'Prolactin (Male)',                      unit:'ng/mL', low:2,    high:18,   description:'Hormone from pituitary; elevated causes infertility'},
  {id:159, specimen:'Blood', category:'Hormones', name:'Prolactin (Female)',                    unit:'ng/mL', low:2,    high:29,   description:'Stimulates breast milk production'},
  {id:160, specimen:'Blood', category:'Hormones', name:'DHEA-Sulfate (Male)',                   unit:'μg/dL', low:80,   high:560,  description:'Adrenal androgen precursor hormone'},
  {id:161, specimen:'Blood', category:'Hormones', name:'DHEA-Sulfate (Female)',                 unit:'μg/dL', low:35,   high:430,  description:'Adrenal androgen precursor hormone'},
  {id:162, specimen:'Blood', category:'Hormones', name:'SHBG',                                  unit:'nmol/L',low:10,   high:57,   description:'Sex hormone-binding globulin — transports sex hormones'},
  {id:163, specimen:'Blood', category:'Hormones', name:'IGF-1',                                 unit:'ng/mL', low:88,   high:246,  description:'Insulin-like growth factor 1 — marker of growth hormone'},
  {id:164, specimen:'Blood', category:'Hormones', name:'Growth Hormone (Fasting)',              unit:'ng/mL', low:0,    high:3,    description:'Pituitary hormone controlling growth and metabolism'},
  {id:165, specimen:'Blood', category:'Hormones', name:'PTH (Parathyroid Hormone)',             unit:'pg/mL', low:15,   high:65,   description:'Regulates calcium and phosphorus balance'},
  {id:166, specimen:'Blood', category:'Hormones', name:'Aldosterone (Upright)',                 unit:'ng/dL', low:7,    high:30,   description:'Adrenal hormone regulating sodium and blood pressure'},
  {id:167, specimen:'Blood', category:'Hormones', name:'Renin Activity',                        unit:'ng/mL/h',low:0.2, high:1.6,  description:'Enzyme controlling blood pressure via aldosterone'},
  {id:168, specimen:'Blood', category:'Hormones', name:'hCG (Beta-hCG)',                        unit:'mIU/mL',low:0,    high:5,    description:'Pregnancy hormone; elevated in early pregnancy'},
  {id:169, specimen:'Blood', category:'Hormones', name:'Anti-Mullerian Hormone',               unit:'ng/mL', low:1.0,  high:3.5,  description:'AMH — ovarian reserve marker; used in fertility workup'},
  {id:170, specimen:'Blood', category:'Hormones', name:'Inhibin B (Male)',                      unit:'pg/mL', low:80,   high:400,  description:'Marker of Sertoli cell function and sperm production'},
  {id:171, specimen:'Blood', category:'Hormones', name:'Melatonin (Serum)',                     unit:'pg/mL', low:10,   high:60,   description:'Sleep-regulating hormone; peaks at night'},
  {id:172, specimen:'Blood', category:'Hormones', name:'Serotonin',                             unit:'ng/mL', low:101,  high:283,  description:'Neurotransmitter; elevated in carcinoid syndrome'},

  // Pancreatic Function (7)
  {id:173, specimen:'Blood', category:'Pancreatic Function', name:'Amylase',                    unit:'U/L',   low:28,   high:100,  description:'Enzyme that digests starch; elevated in pancreatitis'},
  {id:174, specimen:'Blood', category:'Pancreatic Function', name:'Lipase',                     unit:'U/L',   low:0,    high:160,  description:'Enzyme that digests fats; specific for pancreatitis'},
  {id:175, specimen:'Blood', category:'Pancreatic Function', name:'Trypsin',                    unit:'ng/mL', low:10,   high:57,   description:'Pancreatic enzyme for protein digestion'},
  {id:176, specimen:'Blood', category:'Pancreatic Function', name:'Pancreatic Polypeptide',     unit:'pg/mL', low:0,    high:300,  description:'Hormone regulating pancreatic enzyme secretion'},
  {id:177, specimen:'Blood', category:'Pancreatic Function', name:'Vasoactive Intestinal Pep.', unit:'pg/mL', low:0,    high:60,   description:'VIP — regulates smooth muscle and secretion'},
  {id:178, specimen:'Blood', category:'Pancreatic Function', name:'Gastrin',                    unit:'pg/mL', low:0,    high:100,  description:'Stimulates gastric acid secretion; elevated in ZE syndrome'},
  {id:179, specimen:'Blood', category:'Pancreatic Function', name:'Secretin',                   unit:'pg/mL', low:10,   high:75,   description:'Pancreatic secretion stimulator; low in chronic pancreatitis'},

  // Autoimmune (16)
  {id:180, specimen:'Blood', category:'Autoimmune & Inflammation', name:'CRP',                  unit:'mg/L',  low:0,    high:10,   description:'C-reactive protein — general inflammation marker'},
  {id:181, specimen:'Blood', category:'Autoimmune & Inflammation', name:'ESR',                  unit:'mm/hr', low:0,    high:20,   description:'Erythrocyte sedimentation rate — inflammation indicator'},
  {id:182, specimen:'Blood', category:'Autoimmune & Inflammation', name:'ANA Titer',            unit:'titer', low:0,    high:0,    description:'Antinuclear antibody — elevated in autoimmune diseases'},
  {id:183, specimen:'Blood', category:'Autoimmune & Inflammation', name:'RF (Rheumatoid Factor)',unit:'IU/mL',low:0,    high:14,   description:'Antibody associated with rheumatoid arthritis'},
  {id:184, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-CCP',             unit:'U/mL',  low:0,    high:20,   description:'Anti-cyclic citrullinated peptide — specific for RA'},
  {id:185, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Complement C3',        unit:'mg/dL', low:90,   high:180,  description:'Complement protein; consumed in autoimmune activity'},
  {id:186, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Complement C4',        unit:'mg/dL', low:16,   high:47,   description:'Complement protein; low in lupus'},
  {id:187, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-6',                 unit:'pg/mL', low:0,    high:7,    description:'Interleukin-6 — pro-inflammatory cytokine'},
  {id:188, specimen:'Blood', category:'Autoimmune & Inflammation', name:'TNF-alpha',            unit:'pg/mL', low:0,    high:8.1,  description:'Tumor necrosis factor; key inflammatory mediator'},
  {id:189, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Procalcitonin',        unit:'ng/mL', low:0,    high:0.1,  description:'Marker for bacterial infection and sepsis severity'},
  {id:190, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-dsDNA',           unit:'IU/mL', low:0,    high:30,   description:'Antibody against double-stranded DNA — specific for lupus'},
  {id:191, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Smith Antibody',  unit:'U/mL',  low:0,    high:7,    description:'Highly specific marker for systemic lupus erythematosus'},
  {id:192, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Ro (SSA)',        unit:'U/mL',  low:0,    high:7,    description:'Antibody in Sjogrens syndrome and lupus'},
  {id:193, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-La (SSB)',        unit:'U/mL',  low:0,    high:7,    description:'Antibody in Sjogrens syndrome'},
  {id:194, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Scl-70',          unit:'U/mL',  low:0,    high:7,    description:'Antibody specific for diffuse systemic sclerosis'},
  {id:195, specimen:'Blood', category:'Autoimmune & Inflammation', name:'ANCA (c-ANCA/p-ANCA)', unit:'titer', low:0,    high:0,    description:'Anti-neutrophil cytoplasmic antibody; vasculitis marker'},

  // Tumor Markers (15)
  {id:196, specimen:'Blood', category:'Tumor Markers', name:'PSA (Total)',                      unit:'ng/mL', low:0,    high:4.0,  description:'Prostate-specific antigen — prostate cancer screening'},
  {id:197, specimen:'Blood', category:'Tumor Markers', name:'Free PSA',                         unit:'ng/mL', low:0,    high:2.0,  description:'Unbound PSA; ratio helps differentiate cancer from BPH'},
  {id:198, specimen:'Blood', category:'Tumor Markers', name:'CEA',                              unit:'ng/mL', low:0,    high:2.5,  description:'Carcinoembryonic antigen — colorectal cancer marker'},
  {id:199, specimen:'Blood', category:'Tumor Markers', name:'CA 125',                           unit:'U/mL',  low:0,    high:35,   description:'Cancer antigen 125 — ovarian cancer marker'},
  {id:200, specimen:'Blood', category:'Tumor Markers', name:'CA 19-9',                          unit:'U/mL',  low:0,    high:37,   description:'Pancreatic and biliary cancer marker'},
  {id:201, specimen:'Blood', category:'Tumor Markers', name:'CA 15-3',                          unit:'U/mL',  low:0,    high:31,   description:'Breast cancer marker used to monitor treatment'},
  {id:202, specimen:'Blood', category:'Tumor Markers', name:'AFP (Alpha-Fetoprotein)',          unit:'ng/mL', low:0,    high:8.1,  description:'Liver and testicular germ cell tumor marker'},
  {id:203, specimen:'Blood', category:'Tumor Markers', name:'Beta-hCG (Tumor)',                 unit:'mIU/mL',low:0,    high:2.5,  description:'Testicular and gestational trophoblastic tumor'},
  {id:204, specimen:'Blood', category:'Tumor Markers', name:'Calcitonin',                       unit:'pg/mL', low:0,    high:10,   description:'Elevated in medullary thyroid cancer'},
  {id:205, specimen:'Blood', category:'Tumor Markers', name:'Chromogranin A',                   unit:'ng/mL', low:0,    high:100,  description:'Neuroendocrine tumor marker'},
  {id:206, specimen:'Blood', category:'Tumor Markers', name:'Neuron-Specific Enolase',          unit:'ng/mL', low:0,    high:12.5, description:'Small cell lung cancer and neuroblastoma marker'},
  {id:207, specimen:'Blood', category:'Tumor Markers', name:'CA 72-4',                          unit:'U/mL',  low:0,    high:6.9,  description:'Gastric and mucinous ovarian cancer marker'},
  {id:208, specimen:'Blood', category:'Tumor Markers', name:'CYFRA 21-1',                       unit:'ng/mL', low:0,    high:3.3,  description:'Non-small cell lung cancer marker'},
  {id:209, specimen:'Blood', category:'Tumor Markers', name:'HE4 (Human Epididymis 4)',         unit:'pmol/L',low:0,    high:70,   description:'Ovarian cancer marker; used with CA-125'},
  {id:210, specimen:'Blood', category:'Tumor Markers', name:'S100B',                            unit:'μg/L',  low:0,    high:0.1,  description:'Melanoma and brain damage marker'},

  // Infectious Disease (15)
  {id:211, specimen:'Blood', category:'Infectious Disease', name:'HBsAg (Hepatitis B)',         unit:'',      low:0,    high:0,    description:'Hepatitis B surface antigen — active HBV infection'},
  {id:212, specimen:'Blood', category:'Infectious Disease', name:'Anti-HBs',                    unit:'mIU/mL',low:10,   high:999,  description:'Hepatitis B surface antibody — immunity marker'},
  {id:213, specimen:'Blood', category:'Infectious Disease', name:'HBeAg',                       unit:'',      low:0,    high:0,    description:'Hepatitis B e-antigen — high viral replication marker'},
  {id:214, specimen:'Blood', category:'Infectious Disease', name:'Anti-HCV',                    unit:'',      low:0,    high:0,    description:'Hepatitis C antibody — HCV exposure marker'},
  {id:215, specimen:'Blood', category:'Infectious Disease', name:'HCV RNA (Viral Load)',        unit:'IU/mL', low:0,    high:0,    description:'Quantitative hepatitis C viral load'},
  {id:216, specimen:'Blood', category:'Infectious Disease', name:'HIV Ag/Ab Combo',             unit:'',      low:0,    high:0,    description:'4th generation HIV screening test'},
  {id:217, specimen:'Blood', category:'Infectious Disease', name:'HIV Viral Load',              unit:'copies/mL',low:0, high:0,    description:'Quantitative HIV RNA; monitors treatment efficacy'},
  {id:218, specimen:'Blood', category:'Infectious Disease', name:'VDRL / RPR (Syphilis)',       unit:'',      low:0,    high:0,    description:'Non-specific syphilis screening test'},
  {id:219, specimen:'Blood', category:'Infectious Disease', name:'TPHA (Syphilis Confirm.)',    unit:'titer', low:0,    high:0,    description:'Treponema pallidum hemagglutination — syphilis confirmation'},
  {id:220, specimen:'Blood', category:'Infectious Disease', name:'Widal Test (Typhoid)',        unit:'titer', low:0,    high:80,   description:'Antibody test for Salmonella typhi infection'},
  {id:221, specimen:'Blood', category:'Infectious Disease', name:'Dengue NS1 Antigen',          unit:'',      low:0,    high:0,    description:'Early dengue fever detection antigen test'},
  {id:222, specimen:'Blood', category:'Infectious Disease', name:'Malaria Antigen (RDT)',       unit:'',      low:0,    high:0,    description:'Rapid antigen test for malaria parasite detection'},
  {id:223, specimen:'Blood', category:'Infectious Disease', name:'COVID-19 Antibody (IgG)',     unit:'',      low:0,    high:0,    description:'Serology test for past SARS-CoV-2 exposure'},
  {id:224, specimen:'Blood', category:'Infectious Disease', name:'TB QuantiFERON Gold',         unit:'IU/mL', low:0,    high:0.35, description:'Interferon-gamma release assay for TB infection'},
  {id:225, specimen:'Blood', category:'Infectious Disease', name:'Toxoplasma IgG',              unit:'IU/mL', low:0,    high:8,    description:'Toxoplasmosis antibody; important in pregnancy'},

  // Arterial Blood Gas (7)
  {id:226, specimen:'Blood', category:'Arterial Blood Gas', name:'pH (Arterial)',               unit:'',      low:7.35, high:7.45, description:'Acidity of arterial blood; tightly regulated'},
  {id:227, specimen:'Blood', category:'Arterial Blood Gas', name:'pCO2',                        unit:'mmHg',  low:35,   high:45,   description:'Partial pressure of CO2; reflects ventilation'},
  {id:228, specimen:'Blood', category:'Arterial Blood Gas', name:'pO2',                         unit:'mmHg',  low:80,   high:100,  description:'Partial pressure of O2; reflects oxygenation'},
  {id:229, specimen:'Blood', category:'Arterial Blood Gas', name:'HCO3 (Arterial)',             unit:'mEq/L', low:22,   high:26,   description:'Bicarbonate; metabolic component of acid-base balance'},
  {id:230, specimen:'Blood', category:'Arterial Blood Gas', name:'SaO2 (O2 Saturation)',        unit:'%',     low:95,   high:100,  description:'Percentage of hemoglobin saturated with oxygen'},
  {id:231, specimen:'Blood', category:'Arterial Blood Gas', name:'Base Excess',                 unit:'mEq/L', low:-2,   high:2,    description:'Indicates metabolic acid-base deviation'},
  {id:232, specimen:'Blood', category:'Arterial Blood Gas', name:'Lactate (Arterial)',          unit:'mmol/L',low:0.5,  high:2.0,  description:'Elevated in tissue hypoxia and sepsis'},

  // Proteins & Immunoglobulins (13)
  {id:233, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgG',                 unit:'mg/dL', low:700,  high:1600, description:'Most abundant immunoglobulin; long-term immunity'},
  {id:234, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgA',                 unit:'mg/dL', low:70,   high:400,  description:'Immunoglobulin in mucosal secretions'},
  {id:235, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgM',                 unit:'mg/dL', low:40,   high:230,  description:'First antibody produced in acute infection'},
  {id:236, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgE (Total)',         unit:'IU/mL', low:0,    high:100,  description:'Elevated in allergic diseases and parasitic infections'},
  {id:237, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Alpha-1 Antitrypsin', unit:'mg/dL', low:100,  high:200,  description:'Protease inhibitor; deficiency causes lung and liver disease'},
  {id:238, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Haptoglobin',         unit:'mg/dL', low:30,   high:200,  description:'Binds free hemoglobin; low in hemolytic anemia'},
  {id:239, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Beta-2 Microglobulin',unit:'mg/L',  low:0.8,  high:2.4,  description:'Marker for lymphoma, myeloma and kidney disease'},
  {id:240, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Ceruloplasmin',       unit:'mg/dL', low:20,   high:60,   description:'Copper-carrying protein; low in Wilsons disease'},
  {id:241, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Prealbumin',          unit:'mg/dL', low:18,   high:40,   description:'Short-lived protein; sensitive nutritional status marker'},
  {id:242, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'C-Reactive Protein',  unit:'mg/dL', low:0,    high:1.0,  description:'Acute phase protein; rises with inflammation or infection'},
  {id:243, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Fibronectin',         unit:'mg/dL', low:22,   high:56,   description:'Glycoprotein involved in wound healing'},
  {id:244, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Alpha-2 Macroglobulin',unit:'mg/dL',low:150, high:350,  description:'Large plasma protein; inhibits multiple proteases'},
  {id:245, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Orosomucoid (AGP)',   unit:'mg/dL', low:50,   high:120,  description:'Acute phase protein; elevated in inflammation and cancer'},

  // Bone Markers (9)
  {id:246, specimen:'Blood', category:'Bone Markers', name:'Bone ALP',                          unit:'U/L',   low:11,   high:43,   description:'Bone-specific alkaline phosphatase — bone formation'},
  {id:247, specimen:'Blood', category:'Bone Markers', name:'Osteocalcin',                       unit:'ng/mL', low:11,   high:48,   description:'Protein secreted by osteoblasts; bone formation marker'},
  {id:248, specimen:'Blood', category:'Bone Markers', name:'CTx (Beta-CrossLaps)',              unit:'pg/mL', low:0,    high:573,  description:'Collagen breakdown marker — bone resorption'},
  {id:249, specimen:'Blood', category:'Bone Markers', name:'NTx (N-Telopeptide)',               unit:'nM BCE',low:5,    high:65,   description:'Bone collagen crosslink; marker of bone resorption'},
  {id:250, specimen:'Blood', category:'Bone Markers', name:'RANKL',                             unit:'pmol/L',low:0,    high:0.2,  description:'Cytokine that stimulates osteoclast bone resorption'},
  {id:251, specimen:'Blood', category:'Bone Markers', name:'Sclerostin',                        unit:'pmol/L',low:0,    high:60,   description:'Inhibitor of bone formation; marker of bone turnover'},
  {id:252, specimen:'Blood', category:'Bone Markers', name:'Osteoprotegerin',                   unit:'pmol/L',low:1.6,  high:6.0,  description:'Decoy receptor inhibiting osteoclast activation'},
  {id:253, specimen:'Blood', category:'Bone Markers', name:'1,25-Dihydroxyvitamin D',           unit:'pg/mL', low:18,   high:72,   description:'Active form of vitamin D; regulates calcium absorption'},
  {id:254, specimen:'Blood', category:'Bone Markers', name:'PTH-related Peptide',               unit:'pmol/L',low:0,    high:1.3,  description:'PTHrP — elevated in hypercalcemia of malignancy'},

  // Nutritional Markers (11)
  {id:255, specimen:'Blood', category:'Nutritional Markers', name:'Transferrin',                unit:'mg/dL', low:200,  high:360,  description:'Iron transport protein; marker of protein nutritional status'},
  {id:256, specimen:'Blood', category:'Nutritional Markers', name:'Retinol Binding Protein',    unit:'mg/dL', low:3,    high:6,    description:'Transports vitamin A; short-term nutritional marker'},
  {id:257, specimen:'Blood', category:'Nutritional Markers', name:'Homocysteine',               unit:'μmol/L',low:5,    high:15,   description:'Elevated with B12/folate deficiency and CV risk'},
  {id:258, specimen:'Blood', category:'Nutritional Markers', name:'Methylmalonic Acid',         unit:'nmol/L',low:73,   high:376,  description:'Elevated in B12 deficiency — more specific than serum B12'},
  {id:259, specimen:'Blood', category:'Nutritional Markers', name:'Coenzyme Q10',               unit:'μg/mL', low:0.4,  high:1.91, description:'Antioxidant vital for energy production in cells'},
  {id:260, specimen:'Blood', category:'Nutritional Markers', name:'Carnitine (Total)',          unit:'μmol/L',low:30,   high:70,   description:'Essential for fatty acid transport into mitochondria'},
  {id:261, specimen:'Blood', category:'Nutritional Markers', name:'Omega-3 Index',              unit:'%',     low:8,    high:12,   description:'Percentage of EPA+DHA in red blood cell membranes'},
  {id:262, specimen:'Blood', category:'Nutritional Markers', name:'Total Antioxidant Capacity', unit:'mmol/L',low:1.13, high:1.57, description:'Overall antioxidant defense level of the blood'},
  {id:263, specimen:'Blood', category:'Nutritional Markers', name:'Inositol',                   unit:'μg/mL', low:25,   high:70,   description:'Involved in cell signaling and lipid metabolism'},
  {id:264, specimen:'Blood', category:'Nutritional Markers', name:'Biotin (B7)',                unit:'ng/mL', low:0.4,  high:1.2,  description:'B vitamin needed for fatty acid and glucose metabolism'},
  {id:265, specimen:'Blood', category:'Nutritional Markers', name:'Taurine',                    unit:'nmol/mL',low:40,  high:120,  description:'Amino acid supporting heart, eyes and bile production'},

  // Allergy & Sensitivity (10)
  {id:266, specimen:'Blood', category:'Allergy & Sensitivity', name:'Total IgE',                unit:'IU/mL', low:0,    high:100,  description:'Master allergy antibody; elevated in allergic disease'},
  {id:267, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Pollen)',    unit:'kU/L',  low:0,    high:0.35, description:'Allergy-specific antibody for pollen sensitivity'},
  {id:268, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Dust Mite)', unit:'kU/L',  low:0,    high:0.35, description:'Allergy-specific antibody for dust mite sensitivity'},
  {id:269, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Mold)',      unit:'kU/L',  low:0,    high:0.35, description:'Allergy-specific antibody for mold sensitivity'},
  {id:270, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Peanut)',    unit:'kU/L',  low:0,    high:0.35, description:'Allergy-specific antibody for peanut sensitivity'},
  {id:271, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Shellfish)', unit:'kU/L',  low:0,    high:0.35, description:'Allergy-specific antibody for shellfish sensitivity'},
  {id:272, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Latex)',     unit:'kU/L',  low:0,    high:0.35, description:'Allergy-specific antibody for latex sensitivity'},
  {id:273, specimen:'Blood', category:'Allergy & Sensitivity', name:'Eosinophil Cationic Prot.',unit:'μg/L',  low:2,    high:24,   description:'Marker of eosinophil activity in allergic inflammation'},
  {id:274, specimen:'Blood', category:'Allergy & Sensitivity', name:'Anti-gliadin IgA',         unit:'U/mL',  low:0,    high:20,   description:'Marker for gluten sensitivity and celiac disease'},
  {id:275, specimen:'Blood', category:'Allergy & Sensitivity', name:'Anti-tTG IgA',             unit:'U/mL',  low:0,    high:4,    description:'Tissue transglutaminase antibody — celiac disease marker'},

  // Pediatric Reference (12)
  {id:276, specimen:'Blood', category:'Pediatric Reference', name:'Hemoglobin (Newborn)',       unit:'g/dL',  low:14,   high:24,   description:'Normal hemoglobin range for newborns at birth'},
  {id:277, specimen:'Blood', category:'Pediatric Reference', name:'Hemoglobin (1–6 months)',    unit:'g/dL',  low:9.5,  high:14,   description:'Normal hemoglobin range for infants 1–6 months'},
  {id:278, specimen:'Blood', category:'Pediatric Reference', name:'Hemoglobin (6m–5 years)',    unit:'g/dL',  low:10.5, high:13.5, description:'Normal hemoglobin range for young children'},
  {id:279, specimen:'Blood', category:'Pediatric Reference', name:'WBC (Newborn)',              unit:'×10³/μL',low:9,   high:30,   description:'Normal WBC range for newborns (higher than adults)'},
  {id:280, specimen:'Blood', category:'Pediatric Reference', name:'WBC (1–3 years)',            unit:'×10³/μL',low:6,   high:17,   description:'Normal WBC range for toddlers 1–3 years'},
  {id:281, specimen:'Blood', category:'Pediatric Reference', name:'Platelets (Newborn)',        unit:'×10³/μL',low:150, high:400,  description:'Normal platelet range for newborns'},
  {id:282, specimen:'Blood', category:'Pediatric Reference', name:'Glucose (Newborn)',          unit:'mg/dL', low:40,   high:110,  description:'Normal blood glucose range for newborns'},
  {id:283, specimen:'Blood', category:'Pediatric Reference', name:'TSH (Newborn Screening)',    unit:'mIU/L', low:1,    high:20,   description:'TSH range for congenital hypothyroidism screening'},
  {id:284, specimen:'Blood', category:'Pediatric Reference', name:'ALP (Pediatric)',            unit:'U/L',   low:100,  high:350,  description:'Higher ALP in children due to active bone growth'},
  {id:285, specimen:'Blood', category:'Pediatric Reference', name:'Creatinine (Child 2–12y)',   unit:'mg/dL', low:0.3,  high:0.7,  description:'Lower creatinine in children due to smaller muscle mass'},
  {id:286, specimen:'Blood', category:'Pediatric Reference', name:'Calcium (Newborn)',          unit:'mg/dL', low:7.0,  high:11.5, description:'Calcium range in newborns; hypocalcemia is common'},
  {id:287, specimen:'Blood', category:'Pediatric Reference', name:'Total Bilirubin (Newborn)',  unit:'mg/dL', low:0,    high:12,   description:'Physiological jaundice range in newborns under 7 days'},

  // Drug Monitoring (10)
  {id:288, specimen:'Blood', category:'Drug Monitoring', name:'Digoxin',                        unit:'ng/mL', low:0.8,  high:2.0,  description:'Cardiac glycoside; therapeutic range for heart failure'},
  {id:289, specimen:'Blood', category:'Drug Monitoring', name:'Phenytoin (Diphenylhydantoin)',  unit:'μg/mL', low:10,   high:20,   description:'Antiepileptic drug therapeutic range'},
  {id:290, specimen:'Blood', category:'Drug Monitoring', name:'Lithium',                        unit:'mEq/L', low:0.6,  high:1.2,  description:'Mood stabilizer therapeutic range for bipolar disorder'},
  {id:291, specimen:'Blood', category:'Drug Monitoring', name:'Valproic Acid',                  unit:'μg/mL', low:50,   high:100,  description:'Antiepileptic/mood stabilizer therapeutic range'},
  {id:292, specimen:'Blood', category:'Drug Monitoring', name:'Carbamazepine',                  unit:'μg/mL', low:4,    high:12,   description:'Antiepileptic drug therapeutic range'},
  {id:293, specimen:'Blood', category:'Drug Monitoring', name:'Vancomycin (Trough)',            unit:'μg/mL', low:10,   high:20,   description:'Antibiotic trough level for serious infections'},
  {id:294, specimen:'Blood', category:'Drug Monitoring', name:'Cyclosporine (Trough)',          unit:'ng/mL', low:100,  high:400,  description:'Immunosuppressant trough level post-transplant'},
  {id:295, specimen:'Blood', category:'Drug Monitoring', name:'Tacrolimus (Trough)',            unit:'ng/mL', low:5,    high:20,   description:'Immunosuppressant trough level post-transplant'},
  {id:296, specimen:'Blood', category:'Drug Monitoring', name:'Phenobarbital',                  unit:'μg/mL', low:15,   high:40,   description:'Antiepileptic / sedative therapeutic range'},
  {id:297, specimen:'Blood', category:'Drug Monitoring', name:'Methotrexate (24h)',             unit:'μmol/L',low:0,    high:10,   description:'Chemotherapy drug; toxic above 10 at 24h post-dose'},

  // Toxicology (8)
  {id:298, specimen:'Blood', category:'Toxicology', name:'Lead (Blood)',                        unit:'μg/dL', low:0,    high:5,    description:'Blood lead level; elevated indicates lead poisoning'},
  {id:299, specimen:'Blood', category:'Toxicology', name:'Mercury (Blood)',                     unit:'μg/L',  low:0,    high:10,   description:'Mercury level; elevated in seafood overconsumption'},
  {id:300, specimen:'Blood', category:'Toxicology', name:'Arsenic (Blood)',                     unit:'μg/L',  low:0,    high:23,   description:'Arsenic level; elevated in industrial exposure'},
  {id:301, specimen:'Blood', category:'Toxicology', name:'Carbon Monoxide (COHb)',              unit:'%',     low:0,    high:2,    description:'Carboxyhemoglobin; elevated in CO poisoning'},
  {id:302, specimen:'Blood', category:'Toxicology', name:'Acetaminophen (Paracetamol)',         unit:'μg/mL', low:0,    high:10,   description:'Toxic levels in overdose; liver damage risk above 200'},
  {id:303, specimen:'Blood', category:'Toxicology', name:'Salicylate (Aspirin)',                unit:'mg/dL', low:0,    high:30,   description:'Therapeutic aspirin level; toxic above 30 mg/dL'},
  {id:304, specimen:'Blood', category:'Toxicology', name:'Ethanol (Blood Alcohol)',             unit:'mg/dL', low:0,    high:0,    description:'Blood alcohol level; legal limit 0–80 mg/dL varies'},
  {id:305, specimen:'Blood', category:'Toxicology', name:'Cadmium (Blood)',                     unit:'μg/L',  low:0,    high:5,    description:'Heavy metal; elevated in smoking and industrial exposure'},

  // ─── URINE TESTS ─────────────────────────────────────────────

  // Urinalysis (14)
  {id:306, specimen:'Urine', category:'Urinalysis', name:'Urine pH',                            unit:'pH',    low:4.5,  high:8.0,  description:'Acidity of urine; reflects kidney acid-base regulation'},
  {id:307, specimen:'Urine', category:'Urinalysis', name:'Urine Specific Gravity',              unit:'',      low:1.005,high:1.030, description:'Concentration of urine; reflects hydration status'},
  {id:308, specimen:'Urine', category:'Urinalysis', name:'Urine Protein',                       unit:'mg/dL', low:0,    high:8,    description:'Protein in urine; elevated indicates kidney damage'},
  {id:309, specimen:'Urine', category:'Urinalysis', name:'Urine Glucose',                       unit:'mg/dL', low:0,    high:15,   description:'Glucose in urine; elevated in uncontrolled diabetes'},
  {id:310, specimen:'Urine', category:'Urinalysis', name:'Urine Ketones',                       unit:'mg/dL', low:0,    high:5,    description:'Fat breakdown products; elevated in DKA or fasting'},
  {id:311, specimen:'Urine', category:'Urinalysis', name:'Urine RBC',                           unit:'/hpf',  low:0,    high:2,    description:'Red blood cells in urine; elevated indicates hematuria'},
  {id:312, specimen:'Urine', category:'Urinalysis', name:'Urine WBC',                           unit:'/hpf',  low:0,    high:5,    description:'White blood cells in urine; elevated in UTI'},
  {id:313, specimen:'Urine', category:'Urinalysis', name:'Urine Creatinine',                    unit:'mg/dL', low:20,   high:370,  description:'Urinary creatinine to normalize other urine markers'},
  {id:314, specimen:'Urine', category:'Urinalysis', name:'24hr Urine Protein',                  unit:'mg/24h',low:0,    high:150,  description:'Total protein excreted in 24 hours'},
  {id:315, specimen:'Urine', category:'Urinalysis', name:'Urine Sodium',                        unit:'mEq/L', low:20,   high:220,  description:'Urinary sodium; reflects dietary intake and kidney function'},
  {id:316, specimen:'Urine', category:'Urinalysis', name:'Urine Osmolality',                    unit:'mOsm/kg',low:300, high:900,  description:'Urine concentration; reflects ADH activity'},
  {id:317, specimen:'Urine', category:'Urinalysis', name:'Microalbumin (Urine)',                unit:'mg/g',  low:0,    high:30,   description:'Early marker of kidney damage in diabetics'},
  {id:318, specimen:'Urine', category:'Urinalysis', name:'Urine Uric Acid (24h)',               unit:'mg/24h',low:250,  high:750,  description:'24hr urine uric acid; elevated in gout risk'},
  {id:319, specimen:'Urine', category:'Urinalysis', name:'Urine Calcium (24h)',                 unit:'mg/24h',low:100,  high:300,  description:'24-hour urinary calcium for bone and dietary status'},

  // Urinary Hormone Markers (7)
  {id:320, specimen:'Urine', category:'Bone Markers', name:'DPD (Deoxypyridinoline)',           unit:'nmol/mmol',low:2.3,high:5.4, description:'Urinary bone resorption marker'},
  {id:321, specimen:'Urine', category:'Bone Markers', name:'NTx Urine (N-Telopeptide)',         unit:'nmol BCE/mmol creat',low:5,high:65,description:'Urinary bone resorption marker'},
  {id:322, specimen:'Urine', category:'Hormones', name:'Cortisol (24h Urine)',                  unit:'μg/24h',low:4,   high:50,   description:'24-hour urinary cortisol; elevated in Cushings syndrome'},
  {id:323, specimen:'Urine', category:'Hormones', name:'Metanephrines (Urine)',                 unit:'μg/24h',low:0,   high:400,  description:'Catecholamine metabolites; elevated in pheochromocytoma'},
  {id:324, specimen:'Urine', category:'Hormones', name:'VMA (Vanillylmandelic Acid)',           unit:'mg/24h',low:1.4, high:6.5,  description:'Adrenaline metabolite; elevated in pheochromocytoma'},
  {id:325, specimen:'Urine', category:'Hormones', name:'Aldosterone (Urine 24h)',               unit:'μg/24h',low:6,   high:25,   description:'24h urinary aldosterone; elevated in hyperaldosteronism'},
  {id:326, specimen:'Urine', category:'Hormones', name:'Estrogen (Urine 24h)',                  unit:'μg/24h',low:5,   high:80,   description:'24h urinary estrogens; varies with menstrual phase'},

  // ─── STOOL TESTS ─────────────────────────────────────────────
  {id:327, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Occult Blood (FOB)',      unit:'',      low:0,    high:0,    description:'Detects hidden blood in stool; colorectal cancer screen'},
  {id:328, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Calprotectin',            unit:'μg/g',  low:0,    high:50,   description:'Marker of intestinal inflammation; elevated in IBD'},
  {id:329, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Elastase-1',              unit:'μg/g',  low:200,  high:500,  description:'Pancreatic exocrine function marker in stool'},
  {id:330, specimen:'Stool', category:'Stool & GI Tests', name:'Stool pH',                      unit:'pH',    low:6.0,  high:7.2,  description:'Acidity of stool; abnormal in malabsorption'},
  {id:331, specimen:'Stool', category:'Stool & GI Tests', name:'H. pylori Stool Antigen',       unit:'',      low:0,    high:0,    description:'Detects active H. pylori infection from stool'},
  {id:332, specimen:'Stool', category:'Stool & GI Tests', name:'Ova & Parasites (Stool)',       unit:'',      low:0,    high:0,    description:'Microscopic exam for parasites in stool'},
  {id:333, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Lactoferrin',             unit:'μg/mL', low:0,    high:7.2,  description:'Marker of intestinal inflammation from neutrophils'},
  {id:334, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Culture',                 unit:'',      low:0,    high:0,    description:'Culture to identify bacterial pathogens in stool'},
  {id:335, specimen:'Stool', category:'Stool & GI Tests', name:'C. difficile Toxin',            unit:'',      low:0,    high:0,    description:'Toxin from Clostridioides difficile; causes antibiotic-related diarrhea'},
  {id:336, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Fat (72h)',               unit:'g/24h', low:0,    high:7,    description:'72-hour fecal fat; elevated in fat malabsorption'},
  {id:337, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Chymotrypsin',            unit:'U/g',   low:6,    high:60,   description:'Pancreatic enzyme in stool; low in EPI'},
  {id:338, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Alpha-1 Antitrypsin',     unit:'mg/dL', low:0,    high:54,   description:'Protein loss marker; elevated in protein-losing enteropathy'},

  // ─── SEMEN ───────────────────────────────────────────────────
  {id:339, specimen:'Semen', category:'Semen Analysis', name:'Sperm Count',                     unit:'×10⁶/mL',low:15,  high:300,  description:'Number of sperm per milliliter of semen'},
  {id:340, specimen:'Semen', category:'Semen Analysis', name:'Semen Volume',                    unit:'mL',    low:1.5,  high:6.0,  description:'Total volume of ejaculate'},
  {id:341, specimen:'Semen', category:'Semen Analysis', name:'Sperm Motility (Total)',          unit:'%',     low:40,   high:100,  description:'Percentage of sperm showing any movement'},
  {id:342, specimen:'Semen', category:'Semen Analysis', name:'Sperm Motility (Progressive)',    unit:'%',     low:32,   high:100,  description:'Percentage of sperm moving forward progressively'},
  {id:343, specimen:'Semen', category:'Semen Analysis', name:'Sperm Morphology (Normal)',       unit:'%',     low:4,    high:100,  description:'Percentage of sperm with normal shape (Kruger criteria)'},
  {id:344, specimen:'Semen', category:'Semen Analysis', name:'Semen pH',                        unit:'pH',    low:7.2,  high:8.0,  description:'Acidity of semen; low pH may impair sperm function'},
  {id:345, specimen:'Semen', category:'Semen Analysis', name:'Sperm Vitality',                  unit:'%',     low:58,   high:100,  description:'Percentage of live sperm in ejaculate'},
  {id:346, specimen:'Semen', category:'Semen Analysis', name:'Total Motile Sperm Count',        unit:'×10⁶',  low:9,    high:999,  description:'Total number of motile sperm — fertility predictor'},
  {id:347, specimen:'Semen', category:'Semen Analysis', name:'Sperm DNA Fragmentation',        unit:'%',     low:0,    high:15,   description:'Percentage of sperm with fragmented DNA; affects fertility'},
  {id:348, specimen:'Semen', category:'Semen Analysis', name:'Fructose (Semen)',                unit:'μmol/ejac',low:13,high:999,  description:'Energy source for sperm; low suggests seminal vesicle issue'},
  {id:349, specimen:'Semen', category:'Semen Analysis', name:'Zinc (Semen)',                    unit:'μmol/ejac',low:2.4,high:999, description:'Prostate-derived; important for sperm chromatin stability'},

  // ─── CSF ─────────────────────────────────────────────────────
  {id:350, specimen:'CSF', category:'CSF Analysis', name:'CSF Pressure (Opening)',              unit:'cmH2O', low:10,   high:20,   description:'Normal cerebrospinal fluid opening pressure'},
  {id:351, specimen:'CSF', category:'CSF Analysis', name:'CSF Glucose',                         unit:'mg/dL', low:50,   high:80,   description:'CSF glucose; should be 60-70% of serum glucose'},
  {id:352, specimen:'CSF', category:'CSF Analysis', name:'CSF Protein (Lumbar)',                unit:'mg/dL', low:15,   high:45,   description:'Protein in CSF; elevated in infection and inflammation'},
  {id:353, specimen:'CSF', category:'CSF Analysis', name:'CSF WBC',                             unit:'/μL',   low:0,    high:5,    description:'White cells in CSF; elevated in meningitis'},
  {id:354, specimen:'CSF', category:'CSF Analysis', name:'CSF RBC',                             unit:'/μL',   low:0,    high:0,    description:'Red cells in CSF; should be zero (unless traumatic tap)'},
  {id:355, specimen:'CSF', category:'CSF Analysis', name:'CSF Chloride',                        unit:'mEq/L', low:120,  high:130,  description:'Chloride in CSF; low in bacterial meningitis'},
  {id:356, specimen:'CSF', category:'CSF Analysis', name:'CSF Lactate',                         unit:'mmol/L',low:1.1,  high:2.4,  description:'CSF lactate; elevated in bacterial and fungal meningitis'},
  {id:357, specimen:'CSF', category:'CSF Analysis', name:'CSF IgG Index',                       unit:'ratio', low:0,    high:0.65, description:'IgG synthesis rate in CNS; elevated in MS'},
  {id:358, specimen:'CSF', category:'CSF Analysis', name:'CSF Xanthochromia',                   unit:'',      low:0,    high:0,    description:'Yellow discoloration of CSF; indicates subarachnoid hemorrhage'},
  {id:359, specimen:'CSF', category:'CSF Analysis', name:'CSF Beta-2 Transferrin',              unit:'',      low:0,    high:0,    description:'Identifies CSF leaks from nose or ear'},

  // ─── JOINT FLUID ─────────────────────────────────────────────
  {id:360, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial WBC',              unit:'/μL',   low:0,    high:200,  description:'WBC in joint fluid; elevated in arthritis and infection'},
  {id:361, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Glucose',          unit:'mg/dL', low:70,   high:110,  description:'Joint fluid glucose; low in septic arthritis'},
  {id:362, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Protein',          unit:'g/dL',  low:1,    high:3,    description:'Protein in joint fluid; elevated in inflammatory arthritis'},
  {id:363, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Uric Acid Crystals (Joint)',unit:'',      low:0,    high:0,    description:'Monosodium urate crystals; diagnostic for gout'},
  {id:364, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Viscosity',        unit:'',      low:0,    high:0,    description:'Viscosity of joint fluid; low in inflammatory conditions'},
  {id:365, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial LDH',              unit:'U/L',   low:100,  high:250,  description:'LDH in joint fluid; elevated in septic arthritis'},
  {id:366, specimen:'Joint Fluid', category:'Synovial Fluid', name:'CPPD Crystals (Pseudogout)',unit:'',      low:0,    high:0,    description:'Calcium pyrophosphate crystals; diagnostic for pseudogout'},

  // ─── BODY FLUID ──────────────────────────────────────────────
  {id:367, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Protein', unit:'g/dL',  low:0,    high:3,    description:'Protein in pleural fluid; >3 suggests exudate'},
  {id:368, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural LDH',     unit:'U/L',   low:0,    high:200,  description:'LDH in pleural fluid; elevated in exudates'},
  {id:369, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Glucose', unit:'mg/dL', low:60,   high:100,  description:'Glucose in pleural fluid; low in infection or malignancy'},
  {id:370, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural pH',      unit:'pH',    low:7.30, high:7.45, description:'pH of pleural fluid; low suggests empyema or esophageal rupture'},
  {id:371, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Ascitic WBC',     unit:'/μL',   low:0,    high:250,  description:'WBC in peritoneal fluid; >250 PMN suggests peritonitis'},
  {id:372, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'SAAG',            unit:'g/dL',  low:1.1,  high:9,    description:'Serum-ascites albumin gradient; >1.1 suggests portal HTN'},
  {id:373, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Ascitic Protein', unit:'g/dL',  low:0,    high:2.5,  description:'Protein in ascitic fluid; low in cirrhosis-related ascites'},
  {id:374, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pericardial Fluid Protein',unit:'g/dL',low:0,high:3,description:'Protein in fluid around the heart; exudate vs transudate'},
  {id:375, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Amylase (Pleural)',unit:'U/L',  low:0,    high:160,  description:'Elevated in pancreatitis-related pleural effusion'},


  // ─── ADDITIONAL TESTS (376–520) ─────────────────────────────

  // ── Liver Function (extras) ──────────────────────────────────
  {id:376, specimen:'Blood', category:'Liver Function', name:'Alpha-Fetoprotein (AFP) Liver',   unit:'ng/mL',  low:0,    high:8.1,  description:'Liver tumor marker; elevated in hepatocellular carcinoma'},
  {id:377, specimen:'Blood', category:'Liver Function', name:'PIIINP (Pro-collagen III)',        unit:'μg/L',   low:1.7,  high:4.2,  description:'Marker of liver fibrosis and collagen synthesis'},
  {id:378, specimen:'Blood', category:'Liver Function', name:'Fibroscan Score (kPa)',            unit:'kPa',    low:2,    high:7,    description:'Liver stiffness score; >7 suggests fibrosis'},
  {id:379, specimen:'Blood', category:'Liver Function', name:'Ammonia (Serum)',                  unit:'μmol/L', low:11,   high:51,   description:'Elevated in liver failure and hepatic encephalopathy'},
  {id:380, specimen:'Blood', category:'Liver Function', name:'Bile Acids (Total)',               unit:'μmol/L', low:0,    high:10,   description:'Elevated in cholestatic liver disease'},

  // ── Kidney Function (extras) ─────────────────────────────────
  {id:381, specimen:'Blood', category:'Kidney Function', name:'Renin (Plasma Active)',           unit:'pg/mL',  low:2.5,  high:37,   description:'Elevated in renovascular hypertension and Addisons'},
  {id:382, specimen:'Urine', category:'Kidney Function', name:'NAG Enzyme (Urine)',              unit:'U/mmol creat', low:0, high:3, description:'N-acetyl glucosaminidase; tubular injury marker'},
  {id:383, specimen:'Urine', category:'Kidney Function', name:'Urine Alpha-1 Microglobulin',    unit:'mg/L',   low:0,    high:12,   description:'Tubular damage marker; elevated before proteinuria'},
  {id:384, specimen:'Blood', category:'Kidney Function', name:'FGF-23',                          unit:'RU/mL',  low:0,    high:180,  description:'Fibroblast growth factor; regulates phosphate and vitamin D'},
  {id:385, specimen:'Blood', category:'Kidney Function', name:'Klotho (Serum)',                  unit:'pg/mL',  low:312,  high:1130, description:'Anti-aging hormone; reduced in chronic kidney disease'},

  // ── Cardiac Markers (extras) ─────────────────────────────────
  {id:386, specimen:'Blood', category:'Cardiac Markers', name:'Galectin-3',                      unit:'ng/mL',  low:0,    high:17.8, description:'Cardiac fibrosis marker; heart failure prognosis'},
  {id:387, specimen:'Blood', category:'Cardiac Markers', name:'ST2 (Soluble)',                   unit:'ng/mL',  low:0,    high:35,   description:'Cardiac stress marker; elevated in heart failure'},
  {id:388, specimen:'Blood', category:'Cardiac Markers', name:'Myeloperoxidase (MPO)',           unit:'pmol/L', low:0,    high:470,  description:'Oxidative stress enzyme; cardiovascular risk marker'},
  {id:389, specimen:'Blood', category:'Cardiac Markers', name:'Pentraxin-3 (PTX3)',              unit:'ng/mL',  low:0,    high:3,    description:'Acute phase protein; cardiac and vascular inflammation'},
  {id:390, specimen:'Blood', category:'Cardiac Markers', name:'ADMA (Asymmetric Dimethylarginine)',unit:'μmol/L',low:0.3, high:0.7,  description:'Nitric oxide inhibitor; endothelial dysfunction marker'},

  // ── Hormones (extras) ────────────────────────────────────────
  {id:391, specimen:'Blood', category:'Hormones', name:'AMH (Anti-Mullerian Hormone)',           unit:'ng/mL',  low:1.0,  high:3.5,  description:'Ovarian reserve marker; used in fertility assessment'},
  {id:392, specimen:'Blood', category:'Hormones', name:'Inhibin A',                              unit:'pg/mL',  low:0,    high:16,   description:'Ovarian hormone; marker for Down syndrome screening'},
  {id:393, specimen:'Blood', category:'Hormones', name:'PAPP-A',                                 unit:'mIU/L',  low:0,    high:5,    description:'Pregnancy-associated plasma protein; prenatal screening'},
  {id:394, specimen:'Blood', category:'Hormones', name:'Leptin (Male)',                          unit:'ng/mL',  low:1.2,  high:9.5,  description:'Satiety hormone secreted by adipose tissue'},
  {id:395, specimen:'Blood', category:'Hormones', name:'Leptin (Female)',                        unit:'ng/mL',  low:4.1,  high:25,   description:'Satiety hormone secreted by adipose tissue'},
  {id:396, specimen:'Blood', category:'Hormones', name:'Adiponectin',                            unit:'μg/mL',  low:5,    high:30,   description:'Insulin-sensitizing hormone; low in obesity and diabetes'},
  {id:397, specimen:'Blood', category:'Hormones', name:'Ghrelin (Fasting)',                      unit:'pg/mL',  low:150,  high:550,  description:'Hunger hormone secreted by stomach'},
  {id:398, specimen:'Blood', category:'Hormones', name:'Insulin-like GF BP-1 (IGFBP-1)',        unit:'ng/mL',  low:3,    high:75,   description:'IGF-1 binding protein; elevated in fasting and liver disease'},
  {id:399, specimen:'Blood', category:'Hormones', name:'Dehydroepiandrosterone (DHEA)',          unit:'ng/mL',  low:2,    high:18,   description:'Adrenal androgen; precursor to testosterone and estrogen'},
  {id:400, specimen:'Blood', category:'Hormones', name:'Androstenedione',                        unit:'ng/dL',  low:50,   high:220,  description:'Androgen precursor; elevated in PCOS and CAH'},

  // ── Autoimmune & Inflammation (extras) ───────────────────────
  {id:401, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Phospholipid Ab (IgG)', unit:'GPL',low:0, high:15,  description:'Antibody causing antiphospholipid syndrome and thrombosis'},
  {id:402, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Phospholipid Ab (IgM)', unit:'MPL',low:0, high:12,  description:'IgM antiphospholipid antibody; thrombosis risk'},
  {id:403, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Beta-2 Glycoprotein I', unit:'U/mL',low:0, high:20, description:'Antibody in antiphospholipid syndrome'},
  {id:404, specimen:'Blood', category:'Autoimmune & Inflammation', name:'HLA-B27',                    unit:'',   low:0,    high:0,    description:'Genetic marker strongly associated with ankylosing spondylitis'},
  {id:405, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-1 Beta',                  unit:'pg/mL',low:0, high:5,   description:'Pro-inflammatory cytokine; elevated in autoinflammatory diseases'},
  {id:406, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-10',                      unit:'pg/mL',low:0, high:9,   description:'Anti-inflammatory cytokine; regulates immune response'},
  {id:407, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-17',                      unit:'pg/mL',low:0, high:35,  description:'Cytokine elevated in psoriasis and rheumatoid arthritis'},
  {id:408, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Serum Amyloid A (SAA)',       unit:'mg/L', low:0, high:6.4, description:'Acute phase protein; more sensitive than CRP in some conditions'},

  // ── Nutritional Markers (extras) ─────────────────────────────
  {id:409, specimen:'Blood', category:'Nutritional Markers', name:'Iodine (Serum)',               unit:'μg/L',   low:45,   high:90,   description:'Essential for thyroid hormone synthesis'},
  {id:410, specimen:'Blood', category:'Nutritional Markers', name:'Molybdenum (Serum)',            unit:'nmol/L', low:5,    high:50,   description:'Trace element; cofactor for enzyme systems'},
  {id:411, specimen:'Blood', category:'Nutritional Markers', name:'Boron (Serum)',                 unit:'μg/L',   low:15,   high:350,  description:'Trace mineral; roles in bone and hormone metabolism'},
  {id:412, specimen:'Blood', category:'Nutritional Markers', name:'Vanadium (Serum)',              unit:'nmol/L', low:0.1,  high:1.0,  description:'Trace element; insulin-mimetic properties'},
  {id:413, specimen:'Blood', category:'Nutritional Markers', name:'Silicon (Serum)',               unit:'μmol/L', low:10,   high:40,   description:'Trace element involved in bone and connective tissue'},
  {id:414, specimen:'Urine', category:'Nutritional Markers', name:'Iodine (Urine)',                unit:'μg/L',   low:100,  high:300,  description:'Best indicator of recent iodine intake'},

  // ── Blood Sugar (extras) ─────────────────────────────────────
  {id:415, specimen:'Blood', category:'Blood Sugar', name:'Glucose-6-Phosphate Dehydrogenase',    unit:'U/g Hb', low:7,    high:20,   description:'G6PD enzyme; deficiency causes hemolytic anemia'},
  {id:416, specimen:'Blood', category:'Blood Sugar', name:'Pyruvate (Pyruvic Acid)',               unit:'mg/dL',  low:0.3,  high:0.9,  description:'Glycolysis intermediate; elevated in thiamine deficiency'},
  {id:417, specimen:'Blood', category:'Blood Sugar', name:'Lactic Acid (Venous)',                  unit:'mmol/L', low:0.5,  high:2.2,  description:'Anaerobic metabolism product; elevated in hypoperfusion'},

  // ── Infectious Disease (extras) ──────────────────────────────
  {id:418, specimen:'Blood', category:'Infectious Disease', name:'Leptospira IgM',                 unit:'titer',  low:0,    high:0,    description:'Antibody for Leptospirosis; waterborne bacterial infection'},
  {id:419, specimen:'Blood', category:'Infectious Disease', name:'Brucella IgG',                   unit:'titer',  low:0,    high:0,    description:'Antibody for Brucellosis; zoonotic bacterial infection'},
  {id:420, specimen:'Blood', category:'Infectious Disease', name:'Rickettsia IgG',                 unit:'titer',  low:0,    high:128,  description:'Antibody for Rickettsia; tick-borne disease'},
  {id:421, specimen:'Blood', category:'Infectious Disease', name:'Bartonella IgG',                 unit:'titer',  low:0,    high:64,   description:'Cat scratch disease and Carrion disease antibody'},
  {id:422, specimen:'Blood', category:'Infectious Disease', name:'Parvovirus B19 IgM',             unit:'U/mL',   low:0,    high:0.9,  description:'Acute parvovirus infection; fifth disease in children'},
  {id:423, specimen:'Blood', category:'Infectious Disease', name:'Rubella IgG',                    unit:'IU/mL',  low:10,   high:999,  description:'Rubella immunity marker; important in pregnancy'},
  {id:424, specimen:'Blood', category:'Infectious Disease', name:'Varicella Zoster IgG (VZV)',     unit:'mIU/mL', low:100,  high:999,  description:'Chickenpox/shingles immunity marker'},
  {id:425, specimen:'Blood', category:'Infectious Disease', name:'Measles IgG',                    unit:'mIU/mL', low:120,  high:999,  description:'Measles immunity marker; required for travel'},
  {id:426, specimen:'Blood', category:'Infectious Disease', name:'Mumps IgG',                      unit:'AU/mL',  low:135,  high:999,  description:'Mumps immunity marker'},
  {id:427, specimen:'Blood', category:'Infectious Disease', name:'HTLV I/II Antibody',             unit:'',       low:0,    high:0,    description:'Human T-lymphotropic virus; causes leukemia/lymphoma'},
  {id:428, specimen:'Blood', category:'Infectious Disease', name:'West Nile Virus IgM',            unit:'',       low:0,    high:0,    description:'Mosquito-borne encephalitis virus antibody'},
  {id:429, specimen:'Blood', category:'Infectious Disease', name:'Chlamydia IgG',                  unit:'U/mL',   low:0,    high:10,   description:'Intracellular bacterial infection; STI and respiratory'},

  // ── Tumor Markers (extras) ───────────────────────────────────
  {id:430, specimen:'Blood', category:'Tumor Markers', name:'SCC Antigen',                        unit:'ng/mL',  low:0,    high:1.5,  description:'Squamous cell carcinoma antigen; cervical/lung cancer'},
  {id:431, specimen:'Blood', category:'Tumor Markers', name:'CA 50',                               unit:'U/mL',   low:0,    high:25,   description:'Pancreatic and gastrointestinal cancer marker'},
  {id:432, specimen:'Blood', category:'Tumor Markers', name:'TPA (Tissue Polypeptide Antigen)',    unit:'U/L',    low:0,    high:75,   description:'Proliferation marker in various cancers'},
  {id:433, specimen:'Blood', category:'Tumor Markers', name:'Beta-2 Microglobulin (Tumor)',        unit:'mg/L',   low:0,    high:2.4,  description:'Lymphoma and myeloma marker; also renal function'},
  {id:434, specimen:'Blood', category:'Tumor Markers', name:'LDH Isoenzyme 1 (LDH1)',             unit:'%',      low:14,   high:26,   description:'Heart and RBC-specific LDH; elevated in MI and hemolysis'},
  {id:435, specimen:'Blood', category:'Tumor Markers', name:'Thymidine Kinase 1 (TK1)',            unit:'Du/L',   low:0,    high:2,    description:'Cell proliferation marker; lymphoma and leukemia'},

  // ── Bone Markers (extras) ────────────────────────────────────
  {id:436, specimen:'Blood', category:'Bone Markers', name:'Tartrate-Resistant Acid Phosphatase', unit:'U/L',    low:0,    high:4.2,  description:'TRAP-5b; osteoclast activity and bone resorption marker'},
  {id:437, specimen:'Blood', category:'Bone Markers', name:'Cathepsin K',                         unit:'pmol/L', low:0,    high:0.6,  description:'Bone-resorbing protease; target for osteoporosis therapy'},
  {id:438, specimen:'Blood', category:'Bone Markers', name:'Dickkopf-1 (DKK-1)',                  unit:'pmol/L', low:10,   high:40,   description:'Wnt signaling inhibitor; myeloma bone disease marker'},

  // ── Coagulation (extras) ─────────────────────────────────────
  {id:439, specimen:'Blood', category:'Coagulation', name:'Factor V (Leiden Mutation)',           unit:'%',      low:70,   high:130,  description:'Clotting factor; Factor V Leiden mutation causes thrombosis'},
  {id:440, specimen:'Blood', category:'Coagulation', name:'Factor VII Activity',                  unit:'%',      low:60,   high:150,  description:'Extrinsic pathway clotting factor; low in warfarin therapy'},
  {id:441, specimen:'Blood', category:'Coagulation', name:'Factor X Activity',                    unit:'%',      low:60,   high:130,  description:'Common pathway clotting factor'},
  {id:442, specimen:'Blood', category:'Coagulation', name:'Factor XI Activity',                   unit:'%',      low:60,   high:130,  description:'Intrinsic pathway factor; deficiency causes Hemophilia C'},
  {id:443, specimen:'Blood', category:'Coagulation', name:'Factor XII Activity',                  unit:'%',      low:50,   high:150,  description:'Contact activation factor; Hageman factor'},
  {id:444, specimen:'Blood', category:'Coagulation', name:'Thrombomodulin',                       unit:'ng/mL',  low:0,    high:4,    description:'Endothelial anticoagulant protein; elevated in endothelial injury'},
  {id:445, specimen:'Blood', category:'Coagulation', name:'ADAMTS13 Activity',                    unit:'%',      low:60,   high:130,  description:'Von Willebrand factor-cleaving protease; deficient in TTP'},
  {id:446, specimen:'Blood', category:'Coagulation', name:'Von Willebrand Factor (vWF) Ag',       unit:'%',      low:50,   high:150,  description:'Platelet adhesion protein; elevated in stress and inflammation'},

  // ── Proteins & Immunoglobulins (extras) ──────────────────────
  {id:447, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgG Subclass 1',        unit:'mg/dL',  low:422,  high:1292, description:'Most abundant IgG subclass; viral and bacterial immunity'},
  {id:448, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgG Subclass 2',        unit:'mg/dL',  low:117,  high:747,  description:'IgG2 subclass; polysaccharide antigen response'},
  {id:449, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgG Subclass 3',        unit:'mg/dL',  low:41,   high:129,  description:'IgG3 subclass; strong complement activator'},
  {id:450, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'IgG Subclass 4',        unit:'mg/dL',  low:1,    high:291,  description:'IgG4 subclass; related to IgG4-related disease'},
  {id:451, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Free Kappa Light Chains',unit:'mg/L',  low:3.3,  high:19.4, description:'Immunoglobulin light chains; elevated in multiple myeloma'},
  {id:452, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Free Lambda Light Chains',unit:'mg/L', low:5.7,  high:26.3, description:'Immunoglobulin light chains; myeloma and lymphoma marker'},
  {id:453, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Kappa/Lambda Ratio',    unit:'ratio',  low:0.26, high:1.65, description:'Abnormal ratio indicates monoclonal gammopathy'},
  {id:454, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Serum Protein Electrophoresis', unit:'g/dL', low:0, high:0, description:'Separates serum proteins; detects myeloma M-band'},

  // ── Urinalysis (extras) ──────────────────────────────────────
  {id:455, specimen:'Urine', category:'Urinalysis', name:'Urine Bilirubin',                       unit:'mg/dL',  low:0,    high:0,    description:'Normally absent; positive in hepatitis and biliary obstruction'},
  {id:456, specimen:'Urine', category:'Urinalysis', name:'Urine Urobilinogen',                    unit:'EU/dL',  low:0.1,  high:1.0,  description:'Bilirubin breakdown product; elevated in hemolysis/hepatitis'},
  {id:457, specimen:'Urine', category:'Urinalysis', name:'Urine Leukocyte Esterase',              unit:'',       low:0,    high:0,    description:'Enzyme from WBCs; positive indicates pyuria/UTI'},
  {id:458, specimen:'Urine', category:'Urinalysis', name:'Urine Nitrite',                         unit:'',       low:0,    high:0,    description:'Bacterial metabolite; positive in gram-negative UTI'},
  {id:459, specimen:'Urine', category:'Urinalysis', name:'Urine Casts (Hyaline)',                 unit:'/lpf',   low:0,    high:2,    description:'Protein casts in urine; mild proteinuria or exercise'},
  {id:460, specimen:'Urine', category:'Urinalysis', name:'Urine Casts (Granular)',                unit:'/lpf',   low:0,    high:0,    description:'Cellular debris casts; indicate kidney tubule damage'},
  {id:461, specimen:'Urine', category:'Urinalysis', name:'Urine Potassium (24h)',                 unit:'mEq/24h',low:25,   high:125,  description:'24h urine potassium; kidney potassium handling'},
  {id:462, specimen:'Urine', category:'Urinalysis', name:'Urine Phosphorus (24h)',                unit:'mg/24h', low:400,  high:1300, description:'24h urine phosphorus; bone and kidney disorders'},
  {id:463, specimen:'Urine', category:'Urinalysis', name:'Urine Magnesium (24h)',                 unit:'mg/24h', low:72,   high:120,  description:'24h urinary magnesium; magnesium balance assessment'},
  {id:464, specimen:'Urine', category:'Urinalysis', name:'Urine Oxalate (24h)',                   unit:'mg/24h', low:0,    high:40,   description:'Elevated in hyperoxaluria; kidney stone risk factor'},
  {id:465, specimen:'Urine', category:'Urinalysis', name:'Urine Citrate (24h)',                   unit:'mg/24h', low:320,  high:1240, description:'Stone inhibitor; low levels increase kidney stone risk'},
  {id:466, specimen:'Urine', category:'Urinalysis', name:'Urine Urea (24h)',                      unit:'g/24h',  low:12,   high:20,   description:'24h urine urea; reflects dietary protein intake'},

  // ── Stool & GI Tests (extras) ────────────────────────────────
  {id:467, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Alpha-1 Antitrypsin',       unit:'mg/dL',  low:0,    high:54,   description:'Protein loss marker for protein-losing enteropathy'},
  {id:468, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Zonulin',                   unit:'ng/mL',  low:0,    high:30,   description:'Intestinal permeability marker; elevated in leaky gut'},
  {id:469, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Secretory IgA',             unit:'mg/g',   low:510,  high:2040, description:'Mucosal immunity marker; low in gut immune deficiency'},
  {id:470, specimen:'Stool', category:'Stool & GI Tests', name:'Microbiome Diversity (Shannon Index)', unit:'index', low:3.0, high:5.0, description:'Gut microbiome diversity index; lower in dysbiosis'},
  {id:471, specimen:'Stool', category:'Stool & GI Tests', name:'Butyrate (Fecal)',                unit:'μmol/g', low:10,   high:50,   description:'Short-chain fatty acid; colon health and anti-inflammatory'},
  {id:472, specimen:'Stool', category:'Stool & GI Tests', name:'Stool M2-PK (Pyruvate Kinase)',   unit:'U/mL',   low:0,    high:4,    description:'Colorectal cancer screening stool marker'},

  // ── CSF (extras) ─────────────────────────────────────────────
  {id:473, specimen:'CSF', category:'CSF Analysis', name:'CSF Cytology',                          unit:'',       low:0,    high:0,    description:'Microscopic cell examination; detects malignant cells'},
  {id:474, specimen:'CSF', category:'CSF Analysis', name:'CSF Oligoclonal Bands',                 unit:'',       low:0,    high:0,    description:'Immunoglobulin bands; present in >90% of multiple sclerosis'},
  {id:475, specimen:'CSF', category:'CSF Analysis', name:'CSF Adenosine Deaminase (ADA)',         unit:'U/L',    low:0,    high:10,   description:'Elevated in tuberculous meningitis'},
  {id:476, specimen:'CSF', category:'CSF Analysis', name:'CSF Total Cells',                       unit:'/μL',    low:0,    high:5,    description:'Total nucleated cells in CSF; elevated in meningitis'},
  {id:477, specimen:'CSF', category:'CSF Analysis', name:'CSF Gram Stain',                        unit:'',       low:0,    high:0,    description:'Rapid bacterial identification in CSF'},

  // ── Semen Analysis (extras) ──────────────────────────────────
  {id:478, specimen:'Semen', category:'Semen Analysis', name:'Semen Leukocytes',                  unit:'×10⁶/mL',low:0,   high:1,    description:'WBCs in semen; elevated indicates infection'},
  {id:479, specimen:'Semen', category:'Semen Analysis', name:'Semen Antisperm Antibodies',       unit:'%',      low:0,    high:50,   description:'Antibodies against sperm; can impair fertility'},
  {id:480, specimen:'Semen', category:'Semen Analysis', name:'Semen Liquefaction Time',          unit:'min',    low:0,    high:60,   description:'Time for semen to liquefy; delayed suggests prostate issue'},

  // ── Pediatric Reference (extras) ─────────────────────────────
  {id:481, specimen:'Blood', category:'Pediatric Reference', name:'HbF (Fetal Hemoglobin)',       unit:'%',      low:0,    high:2,    description:'Fetal hemoglobin; elevated in thalassemia and HbF disorders'},
  {id:482, specimen:'Blood', category:'Pediatric Reference', name:'Neonatal TSH',                 unit:'μIU/mL', low:0.5,  high:5,    description:'Thyroid function in neonates; screened at birth'},
  {id:483, specimen:'Blood', category:'Pediatric Reference', name:'17-OH Progesterone (Newborn)', unit:'ng/dL',  low:0,    high:100,  description:'Congenital adrenal hyperplasia (CAH) screening marker'},
  {id:484, specimen:'Blood', category:'Pediatric Reference', name:'Galactose (Neonatal)',         unit:'mg/dL',  low:0,    high:20,   description:'Galactosemia screening in newborns'},
  {id:485, specimen:'Blood', category:'Pediatric Reference', name:'Phenylalanine (Neonatal PKU)', unit:'mg/dL',  low:0,    high:2,    description:'PKU screening; elevated in phenylketonuria'},
  {id:486, specimen:'Blood', category:'Pediatric Reference', name:'Biotinidase (Newborn)',        unit:'nmol/min/mL',low:5, high:12,  description:'Biotinidase deficiency screening in newborns'},
  {id:487, specimen:'Blood', category:'Pediatric Reference', name:'Growth Hormone (Child)',       unit:'ng/mL',  low:0,    high:10,   description:'GH levels in children; varies with age and stimulation test'},

  // ── Drug Monitoring (extras) ─────────────────────────────────
  {id:488, specimen:'Blood', category:'Drug Monitoring', name:'Lamotrigine',                      unit:'μg/mL',  low:3,    high:14,   description:'Antiepileptic drug; therapeutic monitoring range'},
  {id:489, specimen:'Blood', category:'Drug Monitoring', name:'Levetiracetam',                    unit:'μg/mL',  low:12,   high:46,   description:'Antiepileptic drug therapeutic range'},
  {id:490, specimen:'Blood', category:'Drug Monitoring', name:'Topiramate',                       unit:'μg/mL',  low:5,    high:20,   description:'Antiepileptic/migraine drug therapeutic range'},
  {id:491, specimen:'Blood', category:'Drug Monitoring', name:'Clonazepam',                       unit:'ng/mL',  low:20,   high:70,   description:'Benzodiazepine antiepileptic therapeutic range'},
  {id:492, specimen:'Blood', category:'Drug Monitoring', name:'Amikacin (Peak)',                  unit:'μg/mL',  low:20,   high:35,   description:'Aminoglycoside antibiotic peak level'},
  {id:493, specimen:'Blood', category:'Drug Monitoring', name:'Amikacin (Trough)',                unit:'μg/mL',  low:0,    high:8,    description:'Aminoglycoside antibiotic trough level'},
  {id:494, specimen:'Blood', category:'Drug Monitoring', name:'Gentamicin (Peak)',                unit:'μg/mL',  low:5,    high:10,   description:'Aminoglycoside antibiotic peak level'},
  {id:495, specimen:'Blood', category:'Drug Monitoring', name:'Gentamicin (Trough)',              unit:'μg/mL',  low:0,    high:2,    description:'Aminoglycoside antibiotic trough level'},
  {id:496, specimen:'Blood', category:'Drug Monitoring', name:'Sirolimus (Rapamycin)',            unit:'ng/mL',  low:4,    high:12,   description:'mTOR inhibitor; trough level post-transplant'},
  {id:497, specimen:'Blood', category:'Drug Monitoring', name:'Mycophenolate (MPA)',              unit:'μg/mL',  low:1,    high:3.5,  description:'Immunosuppressant; MPA trough level monitoring'},

  // ── Toxicology (extras) ──────────────────────────────────────
  {id:498, specimen:'Blood', category:'Toxicology', name:'Thallium (Blood)',                      unit:'μg/L',   low:0,    high:0.5,  description:'Heavy metal; elevated in industrial/homicidal poisoning'},
  {id:499, specimen:'Blood', category:'Toxicology', name:'Manganese (Toxic)',                     unit:'μg/L',   low:0,    high:10,   description:'Elevated in welders and liver failure; causes Parkinsonism'},
  {id:500, specimen:'Blood', category:'Toxicology', name:'Aluminum (Serum)',                      unit:'μg/L',   low:0,    high:10,   description:'Elevated in dialysis patients; causes encephalopathy'},
  {id:501, specimen:'Blood', category:'Toxicology', name:'Nickel (Serum)',                        unit:'μg/L',   low:0,    high:1,    description:'Elevated with implant corrosion or occupational exposure'},
  {id:502, specimen:'Blood', category:'Toxicology', name:'Chromium (Toxic)',                      unit:'μg/L',   low:0,    high:0.5,  description:'Hexavalent chromium; carcinogenic; occupational exposure'},
  {id:503, specimen:'Urine', category:'Toxicology', name:'Arsenic (24h Urine)',                   unit:'μg/24h', low:0,    high:50,   description:'24-hour urine arsenic; better than blood for chronic exposure'},
  {id:504, specimen:'Urine', category:'Toxicology', name:'Mercury (24h Urine)',                   unit:'μg/24h', low:0,    high:20,   description:'24-hour urine mercury; chronic mercury exposure assessment'},

  // ── New Category: Metabolic & Genetic Markers ────────────────
  {id:505, specimen:'Blood', category:'Metabolic & Genetic', name:'Lactate Dehydrogenase (Tissue)', unit:'U/L', low:140, high:280, description:'Tissue damage marker; elevated in hemolysis, cancer, MI'},
  {id:506, specimen:'Blood', category:'Metabolic & Genetic', name:'Pyruvate Kinase',               unit:'U/g Hb', low:6.9, high:13.8,description:'RBC enzyme; deficiency causes hereditary hemolytic anemia'},
  {id:507, specimen:'Blood', category:'Metabolic & Genetic', name:'BRCA1/BRCA2 Mutation Screen',  unit:'',       low:0,    high:0,    description:'Genetic test for hereditary breast/ovarian cancer risk'},
  {id:508, specimen:'Blood', category:'Metabolic & Genetic', name:'HbA2 (Hemoglobin A2)',         unit:'%',      low:1.5,  high:3.5,  description:'Elevated in beta-thalassemia trait'},
  {id:509, specimen:'Blood', category:'Metabolic & Genetic', name:'Lactate (Venous, Resting)',    unit:'mmol/L', low:0.5,  high:2.2,  description:'Anaerobic metabolism product; elevated in tissue hypoxia'},
  {id:510, specimen:'Blood', category:'Metabolic & Genetic', name:'Ammonia (Neonatal)',           unit:'μmol/L', low:21,   high:95,   description:'Elevated in urea cycle disorders and liver disease'},
  {id:511, specimen:'Blood', category:'Metabolic & Genetic', name:'Organic Acids (Plasma)',       unit:'μmol/L', low:0,    high:0,    description:'Screening for organic acidurias; metabolic panel'},
  {id:512, specimen:'Blood', category:'Metabolic & Genetic', name:'Amino Acids (Plasma)',         unit:'μmol/L', low:0,    high:0,    description:'Amino acid panel for metabolic disorders'},
  {id:513, specimen:'Blood', category:'Metabolic & Genetic', name:'Acylcarnitine Profile',        unit:'μmol/L', low:0,    high:0,    description:'Fatty acid oxidation disorders screening panel'},
  {id:514, specimen:'Blood', category:'Metabolic & Genetic', name:'Very Long Chain Fatty Acids',  unit:'μg/mL',  low:0,    high:1.3,  description:'VLCFA; elevated in peroxisomal disorders like ALD'},

  // ── New Category: Respiratory / Pulmonary ────────────────────
  {id:515, specimen:'Blood', category:'Respiratory & Pulmonary', name:'ACE (Angiotensin Converting Enzyme)', unit:'U/L', low:8, high:52, description:'Elevated in sarcoidosis; also regulates blood pressure'},
  {id:516, specimen:'Blood', category:'Respiratory & Pulmonary', name:'KL-6 (Krebs von den Lungen)',         unit:'U/mL',low:0, high:500, description:'Interstitial lung disease marker; elevated in ILD and IPF'},
  {id:517, specimen:'Blood', category:'Respiratory & Pulmonary', name:'SP-D (Surfactant Protein D)',         unit:'ng/mL',low:0, high:110, description:'Pulmonary surfactant protein; marker of lung injury'},
  {id:518, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Anti-Neutrophil Cytoplasmic Ab',      unit:'titer',low:0, high:0,  description:'ANCA; elevated in Wegener granulomatosis and vasculitis'},
  {id:519, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Soluble Mesothelin (SMRP)',           unit:'nM',   low:0, high:1.0, description:'Mesothelioma tumor marker; asbestos-related cancer'},
  {id:520, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Exhaled Nitric Oxide (FeNO)',         unit:'ppb',  low:0, high:25,  description:'Airway inflammation marker; elevated in eosinophilic asthma'},

  // ─── NEW TESTS (521–700) ─────────────────────────────────────

  // ── Dermatology & Skin ───────────────────────────────────────
  {id:521, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-Desmoglein 1 IgG',        unit:'U/mL',   low:0,    high:20,   description:'Antibody in pemphigus foliaceus; blistering skin disease'},
  {id:522, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-Desmoglein 3 IgG',        unit:'U/mL',   low:0,    high:20,   description:'Antibody in pemphigus vulgaris; mucous membrane blistering'},
  {id:523, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-BP180 (Bullous Pemph.)',  unit:'U/mL',   low:0,    high:9,    description:'Antibody in bullous pemphigoid; subepidermal blistering'},
  {id:524, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-BP230',                   unit:'U/mL',   low:0,    high:9,    description:'Antibody in bullous pemphigoid; hemidesmosome component'},
  {id:525, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-Transglutaminase IgA',    unit:'U/mL',   low:0,    high:4,    description:'Dermatitis herpetiformis and celiac disease marker'},
  {id:526, specimen:'Blood', category:'Dermatology & Skin', name:'Immunoglobulin IgE (Atopy)',   unit:'kU/L',   low:0,    high:100,  description:'Elevated in atopic dermatitis, eczema, allergic conditions'},
  {id:527, specimen:'Blood', category:'Dermatology & Skin', name:'Porphyrins (Erythrocyte)',     unit:'μg/dL',  low:0,    high:77,   description:'Elevated in erythropoietic porphyria and iron deficiency'},
  {id:528, specimen:'Urine', category:'Dermatology & Skin', name:'Uroporphyrin (Urine)',         unit:'μg/24h', low:0,    high:46,   description:'Elevated in porphyria cutanea tarda'},
  {id:529, specimen:'Urine', category:'Dermatology & Skin', name:'Coproporphyrin (Urine)',       unit:'μg/24h', low:0,    high:200,  description:'Elevated in porphyrias and lead poisoning'},

  // ── Neurological Markers ──────────────────────────────────────
  {id:530, specimen:'Blood', category:'Neurological Markers', name:'Neuron Specific Enolase (NSE)', unit:'ng/mL', low:0,  high:12,   description:'Brain damage marker; elevated in stroke and hypoxia'},
  {id:531, specimen:'Blood', category:'Neurological Markers', name:'S100B Protein',               unit:'μg/L',   low:0,    high:0.1,  description:'Brain injury marker; elevated in stroke, TBI, melanoma'},
  {id:532, specimen:'Blood', category:'Neurological Markers', name:'GFAP (Glial Fibrillary AP)', unit:'pg/mL',  low:0,    high:1000, description:'Astrocyte marker; elevated in traumatic brain injury'},
  {id:533, specimen:'Blood', category:'Neurological Markers', name:'UCH-L1',                      unit:'pg/mL',  low:0,    high:327,  description:'Neuronal injury marker; elevated in TBI within 12 hours'},
  {id:534, specimen:'Blood', category:'Neurological Markers', name:'Anti-NMDA Receptor Ab',       unit:'',       low:0,    high:0,    description:'Antibody causing anti-NMDA receptor encephalitis'},
  {id:535, specimen:'Blood', category:'Neurological Markers', name:'Anti-VGKC Complex Ab',        unit:'pM',     low:0,    high:100,  description:'Voltage-gated potassium channel antibody; encephalitis'},
  {id:536, specimen:'Blood', category:'Neurological Markers', name:'Anti-Hu (ANNA-1)',             unit:'',       low:0,    high:0,    description:'Paraneoplastic neurological syndrome marker; small cell lung Ca'},
  {id:537, specimen:'Blood', category:'Neurological Markers', name:'Anti-Yo (PCA-1)',              unit:'',       low:0,    high:0,    description:'Paraneoplastic cerebellar degeneration marker; ovarian cancer'},
  {id:538, specimen:'Blood', category:'Neurological Markers', name:'14-3-3 Protein (CSF)',        unit:'',       low:0,    high:0,    description:'Prion disease (CJD) marker in CSF; high sensitivity'},
  {id:539, specimen:'Blood', category:'Neurological Markers', name:'Tau Protein (Plasma)',        unit:'pg/mL',  low:0,    high:404,  description:'Microtubule protein; elevated in neurodegeneration and TBI'},
  {id:540, specimen:'Blood', category:'Neurological Markers', name:'Amyloid Beta 42 (Plasma)',    unit:'pg/mL',  low:200,  high:1000, description:'Alzheimers disease marker; low in brain amyloid deposition'},
  {id:541, specimen:'Blood', category:'Neurological Markers', name:'Neurofilament Light (NfL)',   unit:'pg/mL',  low:0,    high:10,   description:'Axonal injury marker; elevated in MS, ALS, Alzheimers'},

  // ── Ophthalmology / Eye ───────────────────────────────────────
  {id:542, specimen:'Blood', category:'Ophthalmology', name:'Anti-Aquaporin 4 Ab (AQP4)',        unit:'',       low:0,    high:0,    description:'Neuromyelitis optica spectrum disorder (NMOSD) marker'},
  {id:543, specimen:'Blood', category:'Ophthalmology', name:'Anti-MOG Antibody',                 unit:'',       low:0,    high:0,    description:'Myelin oligodendrocyte glycoprotein Ab; optic neuritis'},
  {id:544, specimen:'Blood', category:'Ophthalmology', name:'VEGF (Vascular Endothelial GF)',    unit:'pg/mL',  low:31,   high:86,   description:'Angiogenesis marker; elevated in wet AMD and diabetic retinopathy'},
  {id:545, specimen:'Blood', category:'Ophthalmology', name:'Anti-Retinal Ab (ARAs)',            unit:'',       low:0,    high:0,    description:'Antibodies against retinal antigens; autoimmune retinopathy'},

  // ── Gastrointestinal & Hepatic ────────────────────────────────
  {id:546, specimen:'Blood', category:'Gastrointestinal', name:'Gastrin (Serum)',                unit:'pg/mL',  low:0,    high:100,  description:'Stomach acid stimulator; elevated in Zollinger-Ellison syndrome'},
  {id:547, specimen:'Blood', category:'Gastrointestinal', name:'Pepsinogen I',                   unit:'μg/L',   low:30,   high:165,  description:'Gastric chief cell marker; low in gastric atrophy'},
  {id:548, specimen:'Blood', category:'Gastrointestinal', name:'Pepsinogen II',                  unit:'μg/L',   low:3,    high:15,   description:'Gastric and duodenal marker; helps screen for gastric disease'},
  {id:549, specimen:'Blood', category:'Gastrointestinal', name:'PGI/PGII Ratio',                 unit:'ratio',  low:3,    high:20,   description:'Low ratio indicates gastric atrophy; H. pylori marker'},
  {id:550, specimen:'Blood', category:'Gastrointestinal', name:'Intrinsic Factor Antibody',      unit:'U/mL',   low:0,    high:1.1,  description:'Specific for pernicious anemia; blocks B12 absorption'},
  {id:551, specimen:'Blood', category:'Gastrointestinal', name:'Parietal Cell Antibody (PCA)',   unit:'titer',  low:0,    high:0,    description:'Autoimmune gastritis marker; associated with pernicious anemia'},
  {id:552, specimen:'Blood', category:'Gastrointestinal', name:'Anti-Saccharomyces (ASCA IgA)', unit:'U/mL',   low:0,    high:25,   description:'Crohns disease marker; differentiates from UC'},
  {id:553, specimen:'Blood', category:'Gastrointestinal', name:'p-ANCA (pANCA)',                 unit:'',       low:0,    high:0,    description:'Ulcerative colitis marker; perinuclear ANCA pattern'},
  {id:554, specimen:'Blood', category:'Gastrointestinal', name:'Vasoactive Intestinal Peptide',  unit:'pg/mL',  low:0,    high:60,   description:'VIPoma tumor marker; causes watery diarrhea syndrome'},
  {id:555, specimen:'Blood', category:'Gastrointestinal', name:'Somatostatin',                   unit:'pg/mL',  low:0,    high:25,   description:'Inhibitory GI hormone; elevated in somatostatinoma'},
  {id:556, specimen:'Stool', category:'Gastrointestinal', name:'Stool Transferrin',              unit:'μg/g',   low:0,    high:0.1,  description:'Lower GI bleeding marker; complements FOB test'},
  {id:557, specimen:'Stool', category:'Gastrointestinal', name:'Lactulose/Mannitol Ratio',       unit:'ratio',  low:0,    high:0.03, description:'Intestinal permeability test; elevated in leaky gut'},
  {id:558, specimen:'Blood', category:'Gastrointestinal', name:'Chromogranin B',                 unit:'ng/mL',  low:0,    high:150,  description:'Neuroendocrine marker; elevated in carcinoid tumors'},

  // ── Reproductive & Fertility ──────────────────────────────────
  {id:559, specimen:'Blood', category:'Reproductive & Fertility', name:'Estrone (E1)',            unit:'pg/mL',  low:17,   high:200,  description:'Weak estrogen; primary form in postmenopausal women'},
  {id:560, specimen:'Blood', category:'Reproductive & Fertility', name:'Estriol (E3)',            unit:'ng/mL',  low:0,    high:0.08, description:'Weak estrogen; elevated in pregnancy (maternal-fetal marker)'},
  {id:561, specimen:'Blood', category:'Reproductive & Fertility', name:'Sex Hormone Binding G.', unit:'nmol/L', low:10,   high:57,   description:'Carrier protein for estrogen and testosterone'},
  {id:562, specimen:'Blood', category:'Reproductive & Fertility', name:'17-OH Progesterone',      unit:'ng/dL',  low:15,   high:70,   description:'Elevated in congenital adrenal hyperplasia (CAH)'},
  {id:563, specimen:'Blood', category:'Reproductive & Fertility', name:'Free Androgen Index (FAI)',unit:'ratio', low:0.5,  high:5,    description:'Testosterone/SHBG ratio; PCOS and hirsutism marker'},
  {id:564, specimen:'Blood', category:'Reproductive & Fertility', name:'Inhibin B (Female)',      unit:'pg/mL',  low:10,   high:285,  description:'Ovarian reserve marker; low in premature ovarian failure'},
  {id:565, specimen:'Blood', category:'Reproductive & Fertility', name:'Pregnancy Zone Protein',  unit:'mg/L',   low:0,    high:10,   description:'Marker of placental function in pregnancy'},
  {id:566, specimen:'Blood', category:'Reproductive & Fertility', name:'Placental Growth Factor', unit:'pg/mL',  low:0,    high:270,  description:'Angiogenic factor; low in pre-eclampsia'},
  {id:567, specimen:'Blood', category:'Reproductive & Fertility', name:'sFlt-1 (Preeclampsia)',   unit:'pg/mL',  low:0,    high:2000, description:'Anti-angiogenic; elevated in pre-eclampsia'},
  {id:568, specimen:'Blood', category:'Reproductive & Fertility', name:'Cell-Free Fetal DNA',     unit:'%',      low:0,    high:0,    description:'Prenatal screening for chromosomal abnormalities (NIPT)'},
  {id:569, specimen:'Blood', category:'Reproductive & Fertility', name:'Progesterone (Pregnancy)',unit:'ng/mL',  low:9,    high:47,   description:'First trimester progesterone; low suggests miscarriage risk'},

  // ── Oncology & Hematology ─────────────────────────────────────
  {id:570, specimen:'Blood', category:'Oncology & Hematology', name:'BCR-ABL (Philadelphia Chr)',unit:'%IS',    low:0,    high:0,    description:'CML leukemia marker; t(9;22) translocation product'},
  {id:571, specimen:'Blood', category:'Oncology & Hematology', name:'JAK2 V617F Mutation',       unit:'%',      low:0,    high:0,    description:'Myeloproliferative neoplasm (PV, ET, MF) mutation marker'},
  {id:572, specimen:'Blood', category:'Oncology & Hematology', name:'FLT3 Mutation (AML)',       unit:'',       low:0,    high:0,    description:'Internal tandem duplication in acute myeloid leukemia'},
  {id:573, specimen:'Blood', category:'Oncology & Hematology', name:'NPM1 Mutation',             unit:'',       low:0,    high:0,    description:'Favorable prognosis AML mutation'},
  {id:574, specimen:'Blood', category:'Oncology & Hematology', name:'EGFR Mutation (Blood)',     unit:'',       low:0,    high:0,    description:'Lung adenocarcinoma driver mutation; guides TKI therapy'},
  {id:575, specimen:'Blood', category:'Oncology & Hematology', name:'KRAS Mutation (ctDNA)',     unit:'',       low:0,    high:0,    description:'Colorectal/pancreatic cancer mutation; liquid biopsy'},
  {id:576, specimen:'Blood', category:'Oncology & Hematology', name:'Circulating Tumor Cells',   unit:'cells/7.5mL', low:0, high:0, description:'CTCs in blood; metastatic cancer prognosis marker'},
  {id:577, specimen:'Blood', category:'Oncology & Hematology', name:'Lactate Dehydrogenase 5',   unit:'%',      low:0,    high:4,    description:'LDH5 isoenzyme; elevated in liver metastases'},
  {id:578, specimen:'Blood', category:'Oncology & Hematology', name:'Paraprotein (M-Band)',       unit:'g/L',    low:0,    high:0,    description:'Monoclonal immunoglobulin; multiple myeloma marker'},
  {id:579, specimen:'Blood', category:'Oncology & Hematology', name:'Urine BJP (Bence Jones)',    unit:'',       low:0,    high:0,    description:'Monoclonal light chains in urine; myeloma marker'},
  {id:580, specimen:'Blood', category:'Oncology & Hematology', name:'Heparin-Induced Ab (HIT)',  unit:'',       low:0,    high:0,    description:'Platelet factor 4 antibody; heparin-induced thrombocytopenia'},
  {id:581, specimen:'Blood', category:'Oncology & Hematology', name:'Cryoglobulins',              unit:'%',      low:0,    high:0.5,  description:'Cold-precipitating proteins; associated with HCV and B-cell disorders'},

  // ── Endocrinology & Metabolism ────────────────────────────────
  {id:582, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Insulin-like GF BP-2', unit:'ng/mL',  low:87,   high:391,  description:'IGFBP-2; elevated in liver disease and nutritional deficiency'},
  {id:583, specimen:'Blood', category:'Endocrinology & Metabolism', name:'C-Terminal Telopeptide',unit:'ng/mL', low:0.02, high:0.57, description:'Bone resorption marker; suppressed by bisphosphonates'},
  {id:584, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Fibroblast GF-21 (FGF21)',unit:'pg/mL',low:0,  high:278,  description:'Metabolic hormone; elevated in fatty liver and obesity'},
  {id:585, specimen:'Blood', category:'Endocrinology & Metabolism', name:'GLP-1 (Glucagon-like P.)',unit:'pmol/L',low:0, high:20,   description:'Incretin hormone; stimulates insulin secretion after meals'},
  {id:586, specimen:'Blood', category:'Endocrinology & Metabolism', name:'GIP (Gastric Inhibitory P)',unit:'pmol/L',low:0,high:140, description:'Incretin hormone; stimulates insulin and inhibits acid'},
  {id:587, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Peptide YY (PYY)',       unit:'pg/mL',  low:44,   high:150,  description:'Satiety peptide released after meals from gut L-cells'},
  {id:588, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Resistin',               unit:'ng/mL',  low:0.7,  high:14,   description:'Adipokine linked to insulin resistance and inflammation'},
  {id:589, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Visfatin (NAMPT)',       unit:'ng/mL',  low:0,    high:20,   description:'Adipokine with insulin-mimetic properties; elevated in obesity'},
  {id:590, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Irisin',                 unit:'ng/mL',  low:100,  high:250,  description:'Exercise-induced myokine; promotes fat browning'},
  {id:591, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Osteopontin',            unit:'ng/mL',  low:0,    high:66,   description:'Multi-functional protein; elevated in inflammation and cancer'},
  {id:592, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Vaspin',                 unit:'ng/mL',  low:0,    high:0.5,  description:'Visceral adipose tissue-derived serpin; insulin sensitizer'},
  {id:593, specimen:'Urine', category:'Endocrinology & Metabolism', name:'5-HIAA (24h Urine)',     unit:'mg/24h', low:2,    high:9,    description:'Serotonin metabolite; elevated in carcinoid tumor'},
  {id:594, specimen:'Urine', category:'Endocrinology & Metabolism', name:'Homovanillic Acid (HVA)',unit:'mg/24h', low:1.4,  high:8.8,  description:'Dopamine metabolite; elevated in neuroblastoma and pheo'},

  // ── Vitamins & Minerals (extended) ───────────────────────────
  {id:595, specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin B3 (NAD)',             unit:'μmol/L', low:20,   high:60,   description:'NAD+ level; important for energy metabolism and DNA repair'},
  {id:596, specimen:'Blood', category:'Vitamins & Minerals', name:'Choline',                      unit:'μmol/L', low:7,    high:20,   description:'Precursor for acetylcholine and phosphatidylcholine'},
  {id:597, specimen:'Blood', category:'Vitamins & Minerals', name:'Alpha Lipoic Acid',            unit:'ng/mL',  low:0,    high:3,    description:'Universal antioxidant; regenerates other antioxidants'},
  {id:598, specimen:'Blood', category:'Vitamins & Minerals', name:'Glutathione (GSH)',            unit:'μmol/L', low:800,  high:1200, description:'Master cellular antioxidant; reduced in oxidative stress'},
  {id:599, specimen:'Blood', category:'Vitamins & Minerals', name:'Superoxide Dismutase (SOD)',   unit:'U/gHb',  low:1102, high:2192, description:'Primary antioxidant enzyme; protects against free radicals'},
  {id:600, specimen:'Blood', category:'Vitamins & Minerals', name:'Catalase',                     unit:'kU/L',   low:43,   high:115,  description:'Antioxidant enzyme; converts H2O2 to water and oxygen'},

  // ── Immunology (extended) ─────────────────────────────────────
  {id:601, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-2 Receptor (sCD25)',  unit:'U/mL',   low:158,  high:623,  description:'Soluble IL-2 receptor; elevated in lymphoma and sarcoidosis'},
  {id:602, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-4',                   unit:'pg/mL',  low:0,    high:60,   description:'Pro-allergic cytokine; drives Th2 and IgE responses'},
  {id:603, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-8 (CXCL8)',           unit:'pg/mL',  low:0,    high:62,   description:'Neutrophil chemoattractant; elevated in infection and cancer'},
  {id:604, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-12',                  unit:'pg/mL',  low:0,    high:3.4,  description:'Th1-promoting cytokine; elevated in autoimmune disease'},
  {id:605, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-18',                  unit:'pg/mL',  low:33,   high:239,  description:'Interferon-gamma inducer; elevated in macrophage activation'},
  {id:606, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Interferon-Alpha',       unit:'IU/mL',  low:0,    high:10,   description:'Antiviral cytokine; elevated in lupus and viral infections'},
  {id:607, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Interferon-Gamma',       unit:'pg/mL',  low:0,    high:8,    description:'Th1 cytokine; antimicrobial and antitumor activity'},
  {id:608, specimen:'Blood', category:'Autoimmune & Inflammation', name:'HLA-DR (Monocyte)',      unit:'%',      low:55,   high:95,   description:'MHC class II expression; reduced in immunosuppression/sepsis'},
  {id:609, specimen:'Blood', category:'Autoimmune & Inflammation', name:'T-cell Subsets (CD4/CD8)',unit:'ratio', low:1.0,  high:3.5,  description:'CD4/CD8 T-cell ratio; inverted in HIV, autoimmune disease'},
  {id:610, specimen:'Blood', category:'Autoimmune & Inflammation', name:'NK Cell Count (CD56)',   unit:'cells/μL',low:90, high:590,  description:'Natural killer cells; low in NK cell deficiency syndromes'},

  // ── Trace Elements & Heavy Metals ────────────────────────────
  {id:611, specimen:'Blood', category:'Toxicology', name:'Cobalt (Blood)',                        unit:'μg/L',   low:0,    high:1,    description:'Elevated with metal-on-metal hip implant corrosion'},
  {id:612, specimen:'Blood', category:'Toxicology', name:'Barium (Blood)',                        unit:'μg/L',   low:0,    high:2,    description:'Industrial exposure; causes hypokalemia and muscle weakness'},
  {id:613, specimen:'Blood', category:'Toxicology', name:'Tin (Serum)',                           unit:'μg/L',   low:0,    high:20,   description:'Occupational exposure marker; canned food contamination'},
  {id:614, specimen:'Urine', category:'Toxicology', name:'Creatinine-Adjusted Metals',            unit:'μg/g creat',low:0, high:0,   description:'Normalizes urinary metal excretion for renal function'},
  {id:615, specimen:'Blood', category:'Toxicology', name:'Organophosphate Screen',                unit:'%',      low:70,   high:130,  description:'RBC cholinesterase activity; inhibited by organophosphates'},

  // ── Cardiac (extended) ───────────────────────────────────────
  {id:616, specimen:'Blood', category:'Cardiac Markers', name:'Aldosterone/Renin Ratio (ARR)',   unit:'',       low:0,    high:30,   description:'Screening ratio for primary hyperaldosteronism'},
  {id:617, specimen:'Blood', category:'Cardiac Markers', name:'Endothelin-1',                    unit:'pg/mL',  low:0,    high:1.0,  description:'Potent vasoconstrictor; elevated in pulmonary hypertension'},
  {id:618, specimen:'Blood', category:'Cardiac Markers', name:'Asymmetric Dimethylarginine',     unit:'μmol/L', low:0.3,  high:0.7,  description:'Endogenous NOS inhibitor; cardiovascular risk biomarker'},
  {id:619, specimen:'Blood', category:'Cardiac Markers', name:'High-Sensitivity Troponin I',     unit:'ng/L',   low:0,    high:6,    description:'Ultra-sensitive cardiac injury marker for early rule-out'},
  {id:620, specimen:'Blood', category:'Cardiac Markers', name:'Soluble ST2 (sST2)',              unit:'ng/mL',  low:0,    high:35,   description:'IL-33 receptor; cardiac fibrosis and heart failure marker'},

  // ── Urinalysis (extended) ────────────────────────────────────
  {id:621, specimen:'Urine', category:'Urinalysis', name:'Urine Albumin/Creatinine Ratio',       unit:'mg/g',   low:0,    high:30,   description:'ACR; gold standard for early diabetic kidney disease'},
  {id:622, specimen:'Urine', category:'Urinalysis', name:'Urine Protein/Creatinine Ratio',       unit:'mg/mg',  low:0,    high:0.2,  description:'Spot urine for significant proteinuria (>0.3 suspicious)'},
  {id:623, specimen:'Urine', category:'Urinalysis', name:'Urine Casts (RBC)',                    unit:'/lpf',   low:0,    high:0,    description:'Red cell casts indicate glomerulonephritis'},
  {id:624, specimen:'Urine', category:'Urinalysis', name:'Urine Casts (WBC)',                    unit:'/lpf',   low:0,    high:0,    description:'WBC casts indicate pyelonephritis or interstitial nephritis'},
  {id:625, specimen:'Urine', category:'Urinalysis', name:'Urine Casts (Waxy)',                   unit:'/lpf',   low:0,    high:0,    description:'Waxy casts indicate severe chronic kidney disease'},
  {id:626, specimen:'Urine', category:'Urinalysis', name:'Urine Amylase',                        unit:'U/L',    low:0,    high:600,  description:'Elevated in pancreatitis and parotitis'},
  {id:627, specimen:'Urine', category:'Urinalysis', name:'Urine Lipase',                         unit:'U/L',    low:0,    high:80,   description:'Elevated in acute pancreatitis'},
  {id:628, specimen:'Urine', category:'Urinalysis', name:'Urine Beta-HCG',                       unit:'mIU/mL', low:0,    high:5,    description:'Urine pregnancy test; detects hCG from implantation'},
  {id:629, specimen:'Urine', category:'Urinalysis', name:'Urine Culture & Sensitivity',          unit:'CFU/mL', low:0,    high:1000, description:'Bacterial growth in urine; >100,000 CFU/mL significant'},
  {id:630, specimen:'Urine', category:'Urinalysis', name:'Urine Electrolyte FE Sodium',          unit:'%',      low:1,    high:3,    description:'Fractional excretion of sodium; distinguishes prerenal AKI'},

  // ── Pediatric (extended) ─────────────────────────────────────
  {id:631, specimen:'Blood', category:'Pediatric Reference', name:'Alkaline Phosphatase (Infant)',unit:'U/L',    low:110,  high:700,  description:'Very high ALP is normal in rapidly growing infants'},
  {id:632, specimen:'Blood', category:'Pediatric Reference', name:'Bilirubin Direct (Newborn)',   unit:'mg/dL',  low:0,    high:1,    description:'Direct (conjugated) bilirubin in neonates; elevated = pathologic'},
  {id:633, specimen:'Blood', category:'Pediatric Reference', name:'Ferritin (Infant 1–5 mo)',    unit:'ng/mL',  low:50,   high:200,  description:'Iron stores in early infancy; naturally elevated then declines'},
  {id:634, specimen:'Blood', category:'Pediatric Reference', name:'IgG (Newborn)',               unit:'mg/dL',  low:700,  high:1480, description:'Maternal IgG transferred via placenta; protective in neonates'},
  {id:635, specimen:'Blood', category:'Pediatric Reference', name:'IgM (Newborn)',               unit:'mg/dL',  low:5,    high:30,   description:'IgM at birth; elevated in congenital infection (TORCH)'},
  {id:636, specimen:'Blood', category:'Pediatric Reference', name:'Glucose (Premature Infant)',  unit:'mg/dL',  low:45,   high:120,  description:'Blood glucose reference for premature newborns'},
  {id:637, specimen:'Blood', category:'Pediatric Reference', name:'CRP (Neonatal)',              unit:'mg/L',   low:0,    high:10,   description:'Neonatal sepsis marker; rises within 12–24 hours of infection'},
  {id:638, specimen:'Blood', category:'Pediatric Reference', name:'Ammonia (Pediatric)',         unit:'μmol/L', low:11,   high:48,   description:'Normal ammonia in children; elevated in urea cycle disorders'},

  // ── Drug Monitoring (extended) ────────────────────────────────
  {id:639, specimen:'Blood', category:'Drug Monitoring', name:'Itraconazole (Trough)',           unit:'μg/mL',  low:0.5,  high:2,    description:'Antifungal therapeutic level monitoring'},
  {id:640, specimen:'Blood', category:'Drug Monitoring', name:'Voriconazole (Trough)',           unit:'μg/mL',  low:1,    high:5.5,  description:'Broad-spectrum antifungal TDM; narrow therapeutic window'},
  {id:641, specimen:'Blood', category:'Drug Monitoring', name:'Posaconazole (Trough)',           unit:'μg/mL',  low:0.7,  high:3.75, description:'Antifungal prophylaxis in immunocompromised patients'},
  {id:642, specimen:'Blood', category:'Drug Monitoring', name:'Linezolid (Trough)',              unit:'μg/mL',  low:2,    high:8,    description:'Oxazolidinone antibiotic; monitor for toxicity at high levels'},
  {id:643, specimen:'Blood', category:'Drug Monitoring', name:'Daptomycin (Trough)',             unit:'μg/mL',  low:0,    high:24.3, description:'Lipopeptide antibiotic; watch for myopathy above 24.3'},
  {id:644, specimen:'Blood', category:'Drug Monitoring', name:'Clopidogrel Response (P2Y12)',    unit:'%',      low:30,   high:70,   description:'Platelet inhibition assay; monitors antiplatelet therapy'},
  {id:645, specimen:'Blood', category:'Drug Monitoring', name:'Warfarin Sensitivity (VKORC1)',   unit:'',       low:0,    high:0,    description:'Genetic test for warfarin dose prediction'},
  {id:646, specimen:'Blood', category:'Drug Monitoring', name:'Heparin Anti-Xa Level',           unit:'IU/mL',  low:0.3,  high:0.7,  description:'LMWH therapeutic monitoring (prophylactic: 0.2–0.5)'},

  // ── Allergy (extended) ───────────────────────────────────────
  {id:647, specimen:'Blood', category:'Allergy & Sensitivity', name:'Tryptase (Serum)',          unit:'μg/L',   low:0,    high:11.4, description:'Mast cell marker; elevated in anaphylaxis and mastocytosis'},
  {id:648, specimen:'Blood', category:'Allergy & Sensitivity', name:'Histamine (Plasma)',        unit:'nmol/L', low:0,    high:10,   description:'Inflammatory mediator; elevated in anaphylaxis and allergies'},
  {id:649, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Milk)',       unit:'kU/L',   low:0,    high:0.35, description:'Cow milk protein allergy IgE antibody'},
  {id:650, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Egg White)',  unit:'kU/L',   low:0,    high:0.35, description:'Egg white allergy IgE (mainly ovalbumin)'},
  {id:651, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Wheat)',      unit:'kU/L',   low:0,    high:0.35, description:'Wheat/gluten allergy IgE antibody'},
  {id:652, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Cat Dander)', unit:'kU/L',   low:0,    high:0.35, description:'Cat allergen Fel d 1 IgE sensitivity'},
  {id:653, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Dog Dander)', unit:'kU/L',   low:0,    high:0.35, description:'Dog allergen Can f 1 IgE sensitivity'},
  {id:654, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Cockroach)',  unit:'kU/L',   low:0,    high:0.35, description:'Cockroach allergen IgE; significant indoor aeroallergen'},
  {id:655, specimen:'Blood', category:'Allergy & Sensitivity', name:'Allergen Component Test',   unit:'ISU',    low:0,    high:0.35, description:'Molecular allergy testing; identifies specific allergen proteins'},

  // ── Bone Markers (extended) ───────────────────────────────────
  {id:656, specimen:'Blood', category:'Bone Markers', name:'Collagen Type I C-peptide (ICTP)',   unit:'μg/L',   low:1.5,  high:5.5,  description:'Type I collagen degradation product; bone resorption marker'},
  {id:657, specimen:'Blood', category:'Bone Markers', name:'Wnt Signaling (Dickkopf-2)',         unit:'ng/mL',  low:0,    high:80,   description:'Bone formation regulator; altered in metabolic bone disease'},
  {id:658, specimen:'Urine', category:'Bone Markers', name:'Hydroxyproline (Urine)',             unit:'mg/24h', low:7,    high:30,   description:'Collagen breakdown product; elevated in Pagets disease'},
  {id:659, specimen:'Blood', category:'Bone Markers', name:'Soluble RANKL',                      unit:'pmol/L', low:0,    high:0.2,  description:'Osteoclast activation signal; therapeutic target in osteoporosis'},
  {id:660, specimen:'Blood', category:'Bone Markers', name:'FGF-23 (Intact)',                    unit:'pg/mL',  low:0,    high:100,  description:'Phosphate regulator; elevated in CKD and X-linked hypophosphatemia'},

  // ── Metabolic & Genetic (extended) ───────────────────────────
  {id:661, specimen:'Blood', category:'Metabolic & Genetic', name:'Homocystinuria Screen',       unit:'μmol/L', low:0,    high:15,   description:'Elevated homocysteine; CBS enzyme deficiency screening'},
  {id:662, specimen:'Blood', category:'Metabolic & Genetic', name:'Biotinidase Activity',        unit:'nmol/min/mL',low:5,high:12,  description:'Biotinidase enzyme; deficiency causes seizures and hair loss'},
  {id:663, specimen:'Blood', category:'Metabolic & Genetic', name:'MCAD Deficiency Screen',      unit:'',       low:0,    high:0,    description:'Medium-chain acyl-CoA dehydrogenase; common fatty acid disorder'},
  {id:664, specimen:'Blood', category:'Metabolic & Genetic', name:'Propionylcarnitine (C3)',      unit:'μmol/L', low:0,    high:0.6,  description:'Elevated in propionic acidemia and methylmalonic acidemia'},
  {id:665, specimen:'Blood', category:'Metabolic & Genetic', name:'Isovalerylcarnitine (C5)',     unit:'μmol/L', low:0,    high:0.1,  description:'Elevated in isovaleric acidemia'},
  {id:666, specimen:'Blood', category:'Metabolic & Genetic', name:'Glutarylcarnitine (C5DC)',     unit:'μmol/L', low:0,    high:0.09, description:'Elevated in glutaric aciduria type 1'},
  {id:667, specimen:'Blood', category:'Metabolic & Genetic', name:'CFTR Mutation (Cystic F.)',   unit:'',       low:0,    high:0,    description:'Cystic fibrosis gene mutation screening (>2000 variants)'},
  {id:668, specimen:'Blood', category:'Metabolic & Genetic', name:'Alpha-Galactosidase A (GLA)', unit:'nmol/h/mg',low:3.5,high:10.5,description:'Enzyme deficient in Fabry disease; lysosomal storage disorder'},
  {id:669, specimen:'Blood', category:'Metabolic & Genetic', name:'Glucocerebrosidase (GBA)',     unit:'nmol/h/mg',low:2.8,high:10, description:'Enzyme deficient in Gaucher disease; most common LSD'},
  {id:670, specimen:'Blood', category:'Metabolic & Genetic', name:'Acid Sphingomyelinase',       unit:'nmol/h/mL',low:0.5,high:3, description:'Enzyme deficient in Niemann-Pick disease type A/B'},

  // ── Respiratory & Pulmonary (extended) ───────────────────────
  {id:671, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Alpha-1 Antitrypsin (Pi Z)',unit:'mg/dL',low:20,  high:53,   description:'Deficiency allele; markedly low levels cause lung and liver disease'},
  {id:672, specimen:'Blood', category:'Respiratory & Pulmonary', name:'IgG4 (Sarcoidosis)',       unit:'mg/dL',  low:1,    high:291,  description:'Elevated in IgG4-related disease and atypical sarcoidosis'},
  {id:673, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Anti-Jo-1 Ab',             unit:'U/mL',   low:0,    high:7,    description:'Antisynthetase antibody; interstitial lung disease + myositis'},
  {id:674, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Anti-MDA5 Ab',             unit:'U/mL',   low:0,    high:7,    description:'Rapidly progressive ILD marker in dermatomyositis'},
  {id:675, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Surfactant Protein A (SP-A)',unit:'ng/mL',low:0,  high:100,  description:'Pulmonary surfactant protein; lung injury and ILD marker'},
  {id:676, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Soluble CD163',            unit:'μg/L',   low:400,  high:1200, description:'Macrophage activation marker; elevated in MAS and IPF'},
  {id:677, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Pleiotrophin',             unit:'ng/mL',  low:0,    high:7.5,  description:'Growth factor elevated in mesothelioma and lung cancer'},

  // ── CSF (extended) ───────────────────────────────────────────
  {id:678, specimen:'CSF', category:'CSF Analysis', name:'CSF Neopterin',                        unit:'nmol/L', low:0,    high:10,   description:'Macrophage activation in CNS; elevated in MS and encephalitis'},
  {id:679, specimen:'CSF', category:'CSF Analysis', name:'CSF Ferritin',                         unit:'ng/mL',  low:0,    high:12,   description:'Iron storage in CSF; elevated in CNS iron disorders'},
  {id:680, specimen:'CSF', category:'CSF Analysis', name:'CSF Myelin Basic Protein (MBP)',       unit:'ng/mL',  low:0,    high:4,    description:'Myelin breakdown marker; elevated in active MS and TBI'},
  {id:681, specimen:'CSF', category:'CSF Analysis', name:'CSF CXCL13',                           unit:'pg/mL',  low:0,    high:8,    description:'B-cell chemoattractant; elevated in Lyme neuroborreliosis'},
  {id:682, specimen:'CSF', category:'CSF Analysis', name:'CSF Adenylate Cyclase (cAMP)',         unit:'pmol/mL',low:0,    high:30,   description:'Second messenger; elevated in some CNS infections'},
  {id:683, specimen:'CSF', category:'CSF Analysis', name:'CSF Cytokine Panel',                   unit:'pg/mL',  low:0,    high:0,    description:'Multi-cytokine panel for CNS inflammation characterization'},

  // ── Synovial & Body Fluids (extended) ────────────────────────
  {id:684, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Complement C3',      unit:'mg/dL',  low:40,   high:100,  description:'Low in inflammatory and septic arthritis'},
  {id:685, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Neutrophils (%)',    unit:'%',      low:0,    high:25,   description:'Elevated >75% strongly suggests septic arthritis'},
  {id:686, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Culture',            unit:'',       low:0,    high:0,    description:'Bacterial culture for septic arthritis diagnosis'},
  {id:687, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural ADA',      unit:'U/L',    low:0,    high:40,   description:'Adenosine deaminase in pleural fluid; elevated in TB pleuritis'},
  {id:688, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural CEA',      unit:'ng/mL',  low:0,    high:5,    description:'Carcinoembryonic antigen in pleural fluid; malignant effusion'},
  {id:689, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pericardial ADA',  unit:'U/L',    low:0,    high:40,   description:'Tuberculous pericarditis marker'},
  {id:690, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Ascitic Amylase',  unit:'U/L',    low:0,    high:100,  description:'Elevated in pancreatic ascites and gut perforation'},

  // ── Stool (extended) ─────────────────────────────────────────
  {id:691, specimen:'Stool', category:'Stool & GI Tests', name:'Norovirus Antigen (Stool)',       unit:'',       low:0,    high:0,    description:'Rapid detection of norovirus in acute gastroenteritis'},
  {id:692, specimen:'Stool', category:'Stool & GI Tests', name:'Rotavirus Antigen (Stool)',       unit:'',       low:0,    high:0,    description:'Most common viral gastroenteritis in children'},
  {id:693, specimen:'Stool', category:'Stool & GI Tests', name:'Adenovirus Antigen (Stool)',      unit:'',       low:0,    high:0,    description:'Enteric adenovirus; common cause of pediatric diarrhea'},
  {id:694, specimen:'Stool', category:'Stool & GI Tests', name:'GI Pathogen PCR Panel',           unit:'',       low:0,    high:0,    description:'Multiplex PCR for bacterial, viral and parasitic GI pathogens'},
  {id:695, specimen:'Stool', category:'Stool & GI Tests', name:'Bile Acids (Fecal)',              unit:'μmol/g', low:0,    high:1.8,  description:'Primary and secondary bile acids; altered in bile acid diarrhea'},

  // ── Infectious Disease (extended) ────────────────────────────
  {id:696, specimen:'Blood', category:'Infectious Disease', name:'Epstein-Barr DNA (PCR)',        unit:'copies/mL',low:0, high:0,   description:'Quantitative EBV viral load; lymphoma and post-transplant monitor'},
  {id:697, specimen:'Blood', category:'Infectious Disease', name:'CMV DNA (PCR)',                  unit:'IU/mL',  low:0,    high:0,    description:'Quantitative CMV viral load; critical in immunosuppressed'},
  {id:698, specimen:'Blood', category:'Infectious Disease', name:'BK Virus (PCR)',                 unit:'copies/mL',low:0, high:0,   description:'BK virus replication; causes nephropathy in kidney transplant'},
  {id:699, specimen:'Blood', category:'Infectious Disease', name:'Aspergillus Galactomannan',      unit:'index',  low:0,    high:0.5,  description:'Invasive aspergillosis antigen; fungal infection in immunocomp.'},
  {id:700, specimen:'Blood', category:'Infectious Disease', name:'Beta-D-Glucan (Fungal)',         unit:'pg/mL',  low:0,    high:60,   description:'Pan-fungal marker; invasive fungal infection in ICU/transplant'},

  // ─── NEW TESTS (701–900) ─────────────────────────────────────

  // ── Complete Blood Count (extended) ──────────────────────────
  {id:701, specimen:'Blood', category:'Complete Blood Count', name:'Reticulocyte Count',             unit:'%',       low:0.5,  high:2.5,  description:'Immature RBCs released from bone marrow; activity marker'},
  {id:702, specimen:'Blood', category:'Complete Blood Count', name:'Reticulocyte Production Index',  unit:'index',   low:1.0,  high:3.0,  description:'RPI corrects reticulocyte count for degree of anemia'},
  {id:703, specimen:'Blood', category:'Complete Blood Count', name:'Absolute Neutrophil Count',      unit:'cells/μL',low:1500, high:8000, description:'ANC; below 500 is severe neutropenia requiring precautions'},
  {id:704, specimen:'Blood', category:'Complete Blood Count', name:'Absolute Lymphocyte Count',      unit:'cells/μL',low:1000, high:4800, description:'ALC; low in HIV, immunodeficiency and post-chemotherapy'},
  {id:705, specimen:'Blood', category:'Complete Blood Count', name:'Absolute Eosinophil Count',      unit:'cells/μL',low:0,    high:500,  description:'AEC; elevated in parasites, asthma and eosinophilic disorders'},
  {id:706, specimen:'Blood', category:'Complete Blood Count', name:'Platelet Distribution Width',    unit:'%',       low:9,    high:17,   description:'PDW; reflects platelet size variation; elevated in ITP'},
  {id:707, specimen:'Blood', category:'Complete Blood Count', name:'Immature Platelet Fraction',     unit:'%',       low:1.1,  high:6.1,  description:'IPF; newly released platelets; elevated in immune thrombocytopenia'},
  {id:708, specimen:'Blood', category:'Complete Blood Count', name:'NRBC (Nucleated RBC)',           unit:'/100 WBC',low:0,    high:0,    description:'Normally absent; elevated in severe hemolytic anemia and sepsis'},
  {id:709, specimen:'Blood', category:'Complete Blood Count', name:'Hypochromic RBC Percentage',     unit:'%',       low:0,    high:2.5,  description:'Hypochromic red cells; functional iron deficiency marker'},
  {id:710, specimen:'Blood', category:'Complete Blood Count', name:'Large Unstained Cells',          unit:'%',       low:0,    high:4,    description:'LUC; atypical lymphocytes or blasts on automated CBC'},

  // ── Liver Function (extended) ─────────────────────────────────
  {id:711, specimen:'Blood', category:'Liver Function', name:'APRI Score',                           unit:'score',   low:0,    high:0.5,  description:'AST-to-Platelet Ratio Index; non-invasive liver fibrosis score'},
  {id:712, specimen:'Blood', category:'Liver Function', name:'FIB-4 Index',                          unit:'index',   low:0,    high:1.3,  description:'Fibrosis-4 using AST, ALT, age and platelets; fibrosis screen'},
  {id:713, specimen:'Blood', category:'Liver Function', name:'FibroTest Score',                      unit:'score',   low:0,    high:0.21, description:'Non-invasive liver fibrosis assessment combining 5 biomarkers'},
  {id:714, specimen:'Blood', category:'Liver Function', name:'Ammonia (Serum)',                      unit:'μmol/L',  low:11,   high:51,   description:'Elevated in liver failure and hepatic encephalopathy'},
  {id:715, specimen:'Blood', category:'Liver Function', name:'Bile Acids (Total Serum)',             unit:'μmol/L',  low:0,    high:10,   description:'Elevated in cholestatic liver disease and ICP of pregnancy'},
  {id:716, specimen:'Blood', category:'Liver Function', name:'Glypican-3 (GPC3)',                    unit:'ng/mL',   low:0,    high:2,    description:'Hepatocellular carcinoma marker; elevated in HCC'},
  {id:717, specimen:'Blood', category:'Liver Function', name:'Des-gamma-carboxyprothrombin (DCP)',   unit:'mAU/mL',  low:0,    high:40,   description:'PIVKA-II; HCC marker complementary to AFP'},

  // ── Kidney Function (extended) ────────────────────────────────
  {id:718, specimen:'Blood', category:'Kidney Function', name:'NGAL (Neutrophil Gel. Lipocalin)',    unit:'ng/mL',   low:0,    high:150,  description:'Acute kidney injury biomarker; rises within 2 hours of insult'},
  {id:719, specimen:'Urine', category:'Kidney Function', name:'NGAL (Urine)',                        unit:'ng/mL',   low:0,    high:130,  description:'Urinary NGAL; early and sensitive AKI biomarker'},
  {id:720, specimen:'Blood', category:'Kidney Function', name:'KIM-1 (Kidney Injury Molecule-1)',    unit:'pg/mL',   low:0,    high:200,  description:'Proximal tubule injury marker; AKI and CKD progression'},
  {id:721, specimen:'Blood', category:'Kidney Function', name:'Proenkephalin (PENK)',                unit:'pmol/L',  low:33,   high:98,   description:'Novel stable GFR biomarker; less affected by muscle mass'},
  {id:722, specimen:'Urine', category:'Kidney Function', name:'L-FABP (Liver-Fatty Acid BP)',        unit:'μg/g creat',low:0,  high:7,    description:'Proximal tubular stress marker; early AKI detection'},
  {id:723, specimen:'Urine', category:'Kidney Function', name:'Urine Retinol Binding Protein',       unit:'mg/L',    low:0,    high:0.5,  description:'Low-molecular-weight tubular reabsorption marker'},
  {id:724, specimen:'Urine', category:'Kidney Function', name:'Urine Cystatin C',                    unit:'mg/L',    low:0,    high:0.28, description:'Urinary cystatin C; sensitive tubular dysfunction marker'},

  // ── Cardiac Markers (extended) ────────────────────────────────
  {id:725, specimen:'Blood', category:'Cardiac Markers', name:'Growth Differentiation Factor-15',    unit:'pg/mL',   low:0,    high:1200, description:'GDF-15; cardiac and metabolic stress; HF risk stratification'},
  {id:726, specimen:'Blood', category:'Cardiac Markers', name:'Placental Growth Factor (PlGF)',       unit:'pg/mL',   low:0,    high:62,   description:'Angiogenic marker; elevated in ACS and unstable angina'},
  {id:727, specimen:'Blood', category:'Cardiac Markers', name:'Soluble ST2 (sST2)',                   unit:'ng/mL',   low:0,    high:35,   description:'IL-33 receptor; cardiac fibrosis and HF prognosis marker'},
  {id:728, specimen:'Blood', category:'Cardiac Markers', name:'Endothelin-1',                         unit:'pg/mL',   low:0,    high:1.0,  description:'Potent vasoconstrictor; elevated in pulmonary hypertension'},
  {id:729, specimen:'Blood', category:'Cardiac Markers', name:'High-Sensitivity Troponin I (0h)',     unit:'ng/L',    low:0,    high:6,    description:'Ultra-sensitive cTnI; rapid AMI rule-out at 0 and 1 hour'},
  {id:730, specimen:'Blood', category:'Cardiac Markers', name:'PAPP-A (Plaque Instability)',          unit:'mIU/L',   low:0,    high:5,    description:'Pregnancy-associated plasma protein A; coronary plaque marker'},

  // ── Thyroid (extended) ────────────────────────────────────────
  {id:731, specimen:'Blood', category:'Thyroid Function', name:'Thyroid Stimulating Immunoglobulin', unit:'%',       low:0,    high:140,  description:'TSI; stimulates thyroid; diagnostic for Graves disease'},
  {id:732, specimen:'Blood', category:'Thyroid Function', name:'Thyroid Volume (Ultrasound)',         unit:'mL',      low:6,    high:19,   description:'Normal thyroid gland volume; enlarged in goiter'},
  {id:733, specimen:'Blood', category:'Thyroid Function', name:'Free T3/Free T4 Ratio',              unit:'ratio',   low:0.2,  high:0.4,  description:'Low ratio suggests impaired T4 to T3 conversion'},
  {id:734, specimen:'Blood', category:'Thyroid Function', name:'Thyroglobulin Antibody (Anti-Tg)',   unit:'IU/mL',   low:0,    high:115,  description:'Interferes with thyroglobulin measurement; Hashimotos marker'},
  {id:735, specimen:'Blood', category:'Thyroid Function', name:'Basal Calcitonin',                   unit:'pg/mL',   low:0,    high:10,   description:'C-cell hormone; elevated in medullary thyroid carcinoma'},

  // ── Hormones (extended) ───────────────────────────────────────
  {id:736, specimen:'Blood', category:'Hormones', name:'Kisspeptin',                                  unit:'pmol/L',  low:0,    high:5,    description:'Hypothalamic neuropeptide; regulates GnRH and puberty onset'},
  {id:737, specimen:'Blood', category:'Hormones', name:'Adrenomedullin',                              unit:'pmol/L',  low:0,    high:10,   description:'Vasodilatory hormone; elevated in sepsis and heart failure'},
  {id:738, specimen:'Blood', category:'Hormones', name:'Pro-Adrenomedullin (MR-proADM)',              unit:'nmol/L',  low:0,    high:0.75, description:'Stable ADM surrogate; sepsis severity and organ failure marker'},
  {id:739, specimen:'Blood', category:'Hormones', name:'Neuropeptide Y',                              unit:'pmol/L',  low:55,   high:180,  description:'Appetite-stimulating neuropeptide; stress and BP regulation'},
  {id:740, specimen:'Blood', category:'Hormones', name:'Oxytocin',                                    unit:'pg/mL',   low:1,    high:79,   description:'Bonding hormone; involved in parturition and social behavior'},
  {id:741, specimen:'Blood', category:'Hormones', name:'Vasopressin (ADH)',                           unit:'pg/mL',   low:0,    high:6.7,  description:'Antidiuretic hormone; regulates water balance and osmolality'},
  {id:742, specimen:'Blood', category:'Hormones', name:'Copeptin (ADH Surrogate)',                    unit:'pmol/L',  low:1,    high:13,   description:'Stable surrogate for vasopressin; polyuria and diabetes insipidus'},
  {id:743, specimen:'Blood', category:'Hormones', name:'Activin A',                                   unit:'pg/mL',   low:0,    high:400,  description:'TGF-beta family member; elevated in pre-eclampsia and liver disease'},
  {id:744, specimen:'Blood', category:'Hormones', name:'Nesfatin-1',                                  unit:'ng/mL',   low:1,    high:4,    description:'Satiety peptide; reduced in obesity and type 2 diabetes'},
  {id:745, specimen:'Blood', category:'Hormones', name:'Spexin',                                      unit:'ng/mL',   low:0.2,  high:1.5,  description:'Neuropeptide regulating energy balance; low in obesity'},

  // ── Autoimmune (extended) ─────────────────────────────────────
  {id:746, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-MCV (Mutated Citrull. Vimentin)', unit:'U/mL', low:0, high:20, description:'Highly specific rheumatoid arthritis antibody'},
  {id:747, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-GBM (Goodpasture)',     unit:'U/mL',    low:0,    high:7,    description:'Anti-glomerular basement membrane Ab; Goodpasture syndrome'},
  {id:748, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-MPO (p-ANCA)',           unit:'U/mL',    low:0,    high:7,    description:'Myeloperoxidase antibody; MPA and eosinophilic granulomatosis'},
  {id:749, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-PR3 (c-ANCA)',           unit:'U/mL',    low:0,    high:7,    description:'Proteinase-3 antibody; granulomatosis with polyangiitis (GPA)'},
  {id:750, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Mi-2 Antibody',          unit:'U/mL',    low:0,    high:7,    description:'Specific for classic dermatomyositis with V-sign and shawl sign'},
  {id:751, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-PM-Scl Antibody',        unit:'U/mL',    low:0,    high:7,    description:'Polymyositis-scleroderma overlap syndrome antibody'},
  {id:752, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-SRP Antibody',           unit:'U/mL',    low:0,    high:7,    description:'Signal recognition particle Ab; necrotizing immune myopathy'},
  {id:753, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-2 Receptor (sCD25)',       unit:'U/mL',    low:158,  high:623,  description:'Soluble IL-2R; elevated in lymphoma, HLH and sarcoidosis'},
  {id:754, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-4',                        unit:'pg/mL',   low:0,    high:60,   description:'Pro-allergic cytokine; drives Th2 and IgE class switching'},
  {id:755, specimen:'Blood', category:'Autoimmune & Inflammation', name:'IL-12',                       unit:'pg/mL',   low:0,    high:3.4,  description:'Th1-promoting cytokine; elevated in autoimmune disease'},

  // ── Infectious Disease (extended) ────────────────────────────
  {id:756, specimen:'Blood', category:'Infectious Disease', name:'Hepatitis A IgM',                   unit:'',        low:0,    high:0,    description:'Acute hepatitis A infection marker; positive for 3–6 months'},
  {id:757, specimen:'Blood', category:'Infectious Disease', name:'Hepatitis A IgG',                   unit:'',        low:0,    high:0,    description:'Past HAV infection or vaccination; confers immunity'},
  {id:758, specimen:'Blood', category:'Infectious Disease', name:'Hepatitis D Antibody',              unit:'',        low:0,    high:0,    description:'HDV co-infection with HBV; superinfection worsens prognosis'},
  {id:759, specimen:'Blood', category:'Infectious Disease', name:'Hepatitis E IgM',                   unit:'',        low:0,    high:0,    description:'Acute HEV; waterborne; dangerous in pregnancy'},
  {id:760, specimen:'Blood', category:'Infectious Disease', name:'HBV DNA Viral Load',               unit:'IU/mL',   low:0,    high:0,    description:'Quantitative HBV DNA; guides antiviral treatment decisions'},
  {id:761, specimen:'Blood', category:'Infectious Disease', name:'Chikungunya IgM',                   unit:'',        low:0,    high:0,    description:'Acute chikungunya; mosquito-borne alphavirus with joint pain'},
  {id:762, specimen:'Blood', category:'Infectious Disease', name:'Zika Virus IgM',                    unit:'',        low:0,    high:0,    description:'Acute Zika infection; teratogenic causing microcephaly'},
  {id:763, specimen:'Blood', category:'Infectious Disease', name:'Scrub Typhus IgM',                  unit:'titer',   low:0,    high:80,   description:'Orientia tsutsugamushi; mite-borne; eschar and fever'},
  {id:764, specimen:'Blood', category:'Infectious Disease', name:'Leishmaniasis rK39 Antibody',       unit:'',        low:0,    high:0,    description:'Visceral leishmaniasis (Kala-azar) rapid diagnostic test'},
  {id:765, specimen:'Blood', category:'Infectious Disease', name:'Cryptococcal Antigen (CrAg)',       unit:'',        low:0,    high:0,    description:'Cryptococcal meningitis antigen in serum and CSF'},
  {id:766, specimen:'Blood', category:'Infectious Disease', name:'Aspergillus Galactomannan',         unit:'index',   low:0,    high:0.5,  description:'Invasive aspergillosis antigen; sensitivity in immunocomp.'},
  {id:767, specimen:'Blood', category:'Infectious Disease', name:'Beta-D-Glucan (Fungal)',            unit:'pg/mL',   low:0,    high:60,   description:'Pan-fungal marker; invasive candida and aspergillus screen'},
  {id:768, specimen:'Blood', category:'Infectious Disease', name:'EBV DNA (Quantitative PCR)',        unit:'copies/mL',low:0,   high:0,    description:'EBV viral load; lymphoma and post-transplant monitoring'},
  {id:769, specimen:'Blood', category:'Infectious Disease', name:'CMV DNA (Quantitative PCR)',        unit:'IU/mL',   low:0,    high:0,    description:'CMV viral load; critical monitoring in immunosuppressed'},
  {id:770, specimen:'Blood', category:'Infectious Disease', name:'BK Virus DNA (Blood)',              unit:'copies/mL',low:0,   high:0,    description:'BK virus replication; nephropathy in kidney transplant'},

  // ── Tumor Markers (extended) ──────────────────────────────────
  {id:771, specimen:'Blood', category:'Tumor Markers', name:'Mesothelin (SMRP)',                      unit:'nM',      low:0,    high:1.0,  description:'Mesothelioma tumor marker; asbestos-related cancer'},
  {id:772, specimen:'Blood', category:'Tumor Markers', name:'Fibulin-3 (Plasma)',                     unit:'ng/mL',   low:0,    high:52,   description:'Mesothelioma marker; higher specificity than mesothelin'},
  {id:773, specimen:'Blood', category:'Tumor Markers', name:'PSMA (Prostate-Specific Membrane Ag)',   unit:'pg/mL',   low:0,    high:0,    description:'PSMA; prostate cancer marker; PSMA PET imaging target'},
  {id:774, specimen:'Blood', category:'Tumor Markers', name:'Inhibin B (Granulosa Cell)',             unit:'pg/mL',   low:0,    high:285,  description:'Granulosa cell and mucinous ovarian tumor marker'},
  {id:775, specimen:'Blood', category:'Tumor Markers', name:'Osteopontin (Cancer)',                   unit:'ng/mL',   low:0,    high:66,   description:'Elevated in mesothelioma, HCC and various solid tumors'},
  {id:776, specimen:'Blood', category:'Tumor Markers', name:'DCP/PIVKA-II',                           unit:'mAU/mL',  low:0,    high:40,   description:'Des-gamma-carboxyprothrombin; HCC marker complementary to AFP'},
  {id:777, specimen:'Blood', category:'Tumor Markers', name:'Thymidine Kinase 1 (TK1)',               unit:'Du/L',    low:0,    high:2,    description:'Cell proliferation marker; elevated in lymphoma and leukemia'},
  {id:778, specimen:'Blood', category:'Tumor Markers', name:'Circulating Tumor DNA (ctDNA)',          unit:'',        low:0,    high:0,    description:'Liquid biopsy; cancer mutation detection without tissue biopsy'},
  {id:779, specimen:'Blood', category:'Tumor Markers', name:'Circulating Tumor Cells (CTC)',          unit:'cells/7.5mL',low:0,high:0,   description:'CTCs; prognostic in metastatic breast, prostate and colon cancer'},
  {id:780, specimen:'Blood', category:'Tumor Markers', name:'SCC Antigen (Squamous Cell)',            unit:'ng/mL',   low:0,    high:1.5,  description:'Squamous cell carcinoma antigen; cervical and lung cancer'},

  // ── Nutritional Markers (extended) ───────────────────────────
  {id:781, specimen:'Blood', category:'Nutritional Markers', name:'Pyridoxal-5-Phosphate (PLP)',      unit:'nmol/L',  low:20,   high:100,  description:'Active vitamin B6; low in peripheral neuropathy and IBD'},
  {id:782, specimen:'Blood', category:'Nutritional Markers', name:'Pantothenic Acid (B5)',             unit:'μg/L',    low:200,  high:900,  description:'Coenzyme A precursor; involved in fatty acid metabolism'},
  {id:783, specimen:'Blood', category:'Nutritional Markers', name:'RBC Folate',                        unit:'ng/mL',   low:140,  high:628,  description:'Long-term folate status; reflects tissue stores better than serum'},
  {id:784, specimen:'Blood', category:'Nutritional Markers', name:'Whole Blood Thiamine',              unit:'nmol/L',  low:70,   high:180,  description:'Active thiamine (B1); deficiency causes Wernicke encephalopathy'},
  {id:785, specimen:'Blood', category:'Nutritional Markers', name:'Erythrocyte Selenium',              unit:'μg/L',    low:90,   high:190,  description:'Long-term selenium status; reflects 3-month average intake'},
  {id:786, specimen:'Urine', category:'Nutritional Markers', name:'Urinary Iodine (Spot)',             unit:'μg/L',    low:100,  high:199,  description:'Population-level iodine status; WHO adequacy range'},
  {id:787, specimen:'Blood', category:'Nutritional Markers', name:'Plasma Manganese',                  unit:'μg/L',    low:4,    high:14,   description:'Manganese status; excess causes Parkinsonism (welders)'},
  {id:788, specimen:'Blood', category:'Nutritional Markers', name:'Glutathione (Reduced)',             unit:'μmol/L',  low:800,  high:1200, description:'Master cellular antioxidant; depleted in oxidative stress'},
  {id:789, specimen:'Blood', category:'Nutritional Markers', name:'Superoxide Dismutase (SOD)',        unit:'U/gHb',   low:1102, high:2192, description:'Primary antioxidant enzyme; protects against free radical damage'},
  {id:790, specimen:'Blood', category:'Nutritional Markers', name:'Coenzyme Q10 (Ubiquinol)',          unit:'μg/mL',   low:0.4,  high:1.91, description:'Mitochondrial antioxidant; low in statin use and HF'},

  // ── Allergy (extended) ───────────────────────────────────────
  {id:791, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Tree Nuts)',       unit:'kU/L',    low:0,    high:0.35, description:'Panel for walnut, cashew, hazelnut, pistachio IgE sensitivity'},
  {id:792, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Soy)',             unit:'kU/L',    low:0,    high:0.35, description:'Soy protein allergy IgE antibody'},
  {id:793, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Fish)',            unit:'kU/L',    low:0,    high:0.35, description:'Fish allergen (cod, salmon, tuna) IgE sensitivity'},
  {id:794, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Bee Venom)',       unit:'kU/L',    low:0,    high:0.35, description:'Hymenoptera bee venom allergy; anaphylaxis risk'},
  {id:795, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Wasp Venom)',      unit:'kU/L',    low:0,    high:0.35, description:'Wasp venom allergy IgE; systemic reaction risk'},
  {id:796, specimen:'Blood', category:'Allergy & Sensitivity', name:'Chymase (Mast Cell)',            unit:'ng/mL',   low:0,    high:5,    description:'Mast cell serine protease; marker of mast cell activation'},
  {id:797, specimen:'Blood', category:'Allergy & Sensitivity', name:'Prostaglandin D2 (Urine)',       unit:'ng/mg creat',low:0,high:200,  description:'Mast cell mediator; elevated in mastocytosis and MCAS'},
  {id:798, specimen:'Blood', category:'Allergy & Sensitivity', name:'Serum Tryptase (Baseline)',      unit:'μg/L',    low:0,    high:11.4, description:'Resting mast cell burden; persistently elevated in mastocytosis'},

  // ── Endocrinology & Metabolism (extended) ─────────────────────
  {id:799, specimen:'Blood', category:'Endocrinology & Metabolism', name:'GLP-1 (Glucagon-like P-1)',  unit:'pmol/L',  low:0,    high:20,   description:'Incretin hormone; stimulates insulin secretion after meals'},
  {id:800, specimen:'Blood', category:'Endocrinology & Metabolism', name:'GIP (Gastric Inhibitory P)', unit:'pmol/L',  low:0,    high:140,  description:'Incretin hormone; released from duodenum after fat ingestion'},
  {id:801, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Peptide YY (PYY)',            unit:'pg/mL',   low:44,   high:150,  description:'Gut satiety peptide; released after meals from ileal L-cells'},
  {id:802, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Atrial Natriuretic Peptide', unit:'pg/mL',   low:0,    high:100,  description:'ANP; volume overload and heart failure biomarker'},
  {id:803, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Fasting Ghrelin',             unit:'pg/mL',   low:150,  high:550,  description:'Hunger hormone from stomach; peaks before meals'},
  {id:804, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Irisin',                      unit:'ng/mL',   low:100,  high:250,  description:'Exercise-induced myokine; promotes fat browning and bone health'},
  {id:805, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Resistin',                    unit:'ng/mL',   low:0.7,  high:14,   description:'Adipokine linked to insulin resistance and metabolic syndrome'},
  {id:806, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Visfatin (NAMPT)',             unit:'ng/mL',   low:0,    high:20,   description:'Visceral fat adipokine; insulin-mimetic; elevated in obesity'},
  {id:807, specimen:'Urine', category:'Endocrinology & Metabolism', name:'5-HIAA (24h Urine)',          unit:'mg/24h',  low:2,    high:9,    description:'Serotonin metabolite; elevated in carcinoid tumor (NETs)'},
  {id:808, specimen:'Urine', category:'Endocrinology & Metabolism', name:'Homovanillic Acid (HVA)',     unit:'mg/24h',  low:1.4,  high:8.8,  description:'Dopamine metabolite; elevated in neuroblastoma'},

  // ── Reproductive & Fertility (extended) ───────────────────────
  {id:809, specimen:'Blood', category:'Reproductive & Fertility', name:'Dihydrotestosterone (DHT)',    unit:'ng/dL',   low:25,   high:75,   description:'Potent androgen; elevated in male pattern baldness and BPH'},
  {id:810, specimen:'Blood', category:'Reproductive & Fertility', name:'Estriol (E3) Pregnancy',       unit:'ng/mL',   low:0,    high:0.08, description:'Weak estrogen; elevated in pregnancy; low suggests fetal problem'},
  {id:811, specimen:'Blood', category:'Reproductive & Fertility', name:'Free Beta-hCG (Prenatal)',     unit:'ng/mL',   low:0,    high:30,   description:'Second trimester Down syndrome and trisomy 18 screening marker'},
  {id:812, specimen:'Blood', category:'Reproductive & Fertility', name:'Placental Growth Factor (PlGF)',unit:'pg/mL',  low:0,    high:270,  description:'Angiogenic; low in pre-eclampsia weeks before symptoms'},
  {id:813, specimen:'Blood', category:'Reproductive & Fertility', name:'sFlt-1 (Anti-angiogenic)',      unit:'pg/mL',  low:0,    high:2000, description:'Soluble FLT-1; markedly elevated in pre-eclampsia'},
  {id:814, specimen:'Blood', category:'Reproductive & Fertility', name:'sFlt-1/PlGF Ratio',             unit:'ratio',  low:0,    high:38,   description:'Ratio >38 confirms high pre-eclampsia risk within 4 weeks'},
  {id:815, specimen:'Blood', category:'Reproductive & Fertility', name:'Pregnancy Zone Protein',        unit:'mg/L',   low:0,    high:10,   description:'Placental marker; elevated in pregnancy and immunosuppression'},
  {id:816, specimen:'Blood', category:'Reproductive & Fertility', name:'Cell-Free Fetal DNA (cfDNA)',   unit:'%',      low:0,    high:0,    description:'NIPT; prenatal screening for trisomies 21, 18, 13 and sex'},

  // ── Neurological Markers (extended) ──────────────────────────
  {id:817, specimen:'Blood', category:'Neurological Markers', name:'Phospho-Tau 181 (Plasma)',         unit:'pg/mL',   low:0,    high:20,   description:'p-Tau181; plasma Alzheimers biomarker; reflects tau pathology'},
  {id:818, specimen:'Blood', category:'Neurological Markers', name:'Amyloid Beta 40/42 Ratio',         unit:'ratio',   low:0.08, high:0.15, description:'Low ratio indicates amyloid plaque accumulation in brain'},
  {id:819, specimen:'Blood', category:'Neurological Markers', name:'Plasma Neurofilament Light',       unit:'pg/mL',   low:0,    high:10,   description:'NfL; axonal damage in ALS, MS, frontotemporal dementia'},
  {id:820, specimen:'Blood', category:'Neurological Markers', name:'Anti-LGI1 Antibody',               unit:'',        low:0,    high:0,    description:'Leucine-rich glioma-inactivated 1 Ab; limbic encephalitis'},
  {id:821, specimen:'Blood', category:'Neurological Markers', name:'Anti-CASPR2 Antibody',             unit:'',        low:0,    high:0,    description:'Contactin-associated protein-like 2; Morvan syndrome'},
  {id:822, specimen:'Blood', category:'Neurological Markers', name:'Anti-GFAP Antibody',               unit:'',        low:0,    high:0,    description:'Glial fibrillary acidic protein Ab; autoimmune astrocytopathy'},
  {id:823, specimen:'Blood', category:'Neurological Markers', name:'Protein 14-3-3 (CSF)',             unit:'',        low:0,    high:0,    description:'Prion disease (CJD) CSF marker; high sensitivity for CJD'},
  {id:824, specimen:'Blood', category:'Neurological Markers', name:'Serum Xanthochromia Screen',       unit:'',        low:0,    high:0,    description:'Bilirubin and oxyhemoglobin in CSF; subarachnoid hemorrhage'},

  // ── Dermatology (extended) ────────────────────────────────────
  {id:825, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-Collagen VII IgG',              unit:'U/mL',    low:0,    high:20,   description:'Epidermolysis bullosa acquisita antibody; subdermal blistering'},
  {id:826, specimen:'Urine', category:'Dermatology & Skin', name:'Porphobilinogen (Urine)',             unit:'mg/L',    low:0,    high:1.5,  description:'Elevated during acute porphyria attacks; red/dark urine'},
  {id:827, specimen:'Urine', category:'Dermatology & Skin', name:'Delta-Aminolevulinic Acid (Urine)',  unit:'mg/24h',  low:0,    high:7,    description:'Elevated in lead poisoning and acute porphyria'},
  {id:828, specimen:'Blood', category:'Dermatology & Skin', name:'IgE (Atopic Dermatitis)',            unit:'IU/mL',   low:0,    high:100,  description:'Total IgE; markedly elevated in severe atopic dermatitis'},
  {id:829, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-p200 Antibody',                unit:'U/mL',    low:0,    high:7,    description:'Linear IgA dermatosis and BP overlap syndrome antibody'},

  // ── Gastrointestinal (extended) ───────────────────────────────
  {id:830, specimen:'Blood', category:'Gastrointestinal', name:'Pepsinogen I',                          unit:'μg/L',    low:30,   high:165,  description:'Gastric chief cell marker; low in gastric atrophy and H. pylori'},
  {id:831, specimen:'Blood', category:'Gastrointestinal', name:'Pepsinogen II',                         unit:'μg/L',    low:3,    high:15,   description:'Gastric and duodenal marker; ratio with PGI important'},
  {id:832, specimen:'Blood', category:'Gastrointestinal', name:'PGI/PGII Ratio',                        unit:'ratio',   low:3,    high:20,   description:'Low ratio strongly predicts gastric atrophy and H. pylori'},
  {id:833, specimen:'Blood', category:'Gastrointestinal', name:'Serum Citrulline',                      unit:'μmol/L',  low:20,   high:40,   description:'Enterocyte function marker; low in short bowel syndrome'},
  {id:834, specimen:'Blood', category:'Gastrointestinal', name:'Intestinal FABP (I-FABP)',              unit:'pg/mL',   low:0,    high:150,  description:'Enterocyte damage; elevated in mesenteric ischemia and NEC'},
  {id:835, specimen:'Stool', category:'Gastrointestinal', name:'Fecal Immunochemical Test (FIT)',       unit:'μg Hb/g', low:0,    high:10,   description:'Quantitative colorectal cancer screening; detects lower GI blood'},

  // ── Oncology & Hematology (extended) ─────────────────────────
  {id:836, specimen:'Blood', category:'Oncology & Hematology', name:'Minimal Residual Disease (MRD)',  unit:'%',       low:0,    high:0.01, description:'MRD below 0.01% indicates deep remission in leukemia/lymphoma'},
  {id:837, specimen:'Blood', category:'Oncology & Hematology', name:'CD34+ Stem Cell Count',           unit:'cells/μL',low:0,   high:0,    description:'Hematopoietic progenitors; monitored during stem cell harvest'},
  {id:838, specimen:'Blood', category:'Oncology & Hematology', name:'CD4 Absolute Count',              unit:'cells/μL',low:500, high:1500, description:'CD4 T-helper cells; below 200 defines AIDS-defining illness'},
  {id:839, specimen:'Blood', category:'Oncology & Hematology', name:'CD8 Absolute Count',              unit:'cells/μL',low:180, high:1000, description:'Cytotoxic T-cells; elevated in CMV, EBV and viral infections'},
  {id:840, specimen:'Blood', category:'Oncology & Hematology', name:'CD4/CD8 Ratio',                   unit:'ratio',   low:1.0,  high:3.5,  description:'Inverted below 1.0 in HIV, immunosenescence and autoimmune'},
  {id:841, specimen:'Blood', category:'Oncology & Hematology', name:'Direct Antiglobulin Test (DAT)',   unit:'',        low:0,    high:0,    description:'Direct Coombs; detects IgG or complement on RBC surface'},
  {id:842, specimen:'Blood', category:'Oncology & Hematology', name:'Cold Agglutinin Titer',            unit:'titer',   low:0,    high:40,   description:'Cold antibody; elevated in mycoplasma pneumonia and lymphoma'},
  {id:843, specimen:'Blood', category:'Oncology & Hematology', name:'Serum Viscosity',                  unit:'cP',      low:1.4,  high:1.8,  description:'Hyperviscosity syndrome; elevated in myeloma and macroglobulinemia'},
  {id:844, specimen:'Blood', category:'Oncology & Hematology', name:'JAK2 V617F Mutation Screen',       unit:'%',       low:0,    high:0,    description:'Myeloproliferative neoplasm mutation; polycythemia vera marker'},
  {id:845, specimen:'Blood', category:'Oncology & Hematology', name:'BCR-ABL1 Transcript (IS)',         unit:'%IS',     low:0,    high:0,    description:'Philadelphia chromosome CML marker; monitored during TKI therapy'},

  // ── Bone Markers (extended) ───────────────────────────────────
  {id:846, specimen:'Blood', category:'Bone Markers', name:'P1NP (Procollagen Type I N-Propeptide)',   unit:'ng/mL',   low:15,   high:74,   description:'Best single bone formation marker; monitors anti-resorptive Tx'},
  {id:847, specimen:'Blood', category:'Bone Markers', name:'Bone Sialoprotein (BSP)',                  unit:'ng/mL',   low:0,    high:15,   description:'Bone matrix protein; elevated in bone metastases and Pagets'},
  {id:848, specimen:'Urine', category:'Bone Markers', name:'Pyridinoline Crosslinks',                  unit:'nmol/mmol creat',low:22,high:89, description:'Pyridinoline and deoxypyridinoline; bone resorption markers'},
  {id:849, specimen:'Blood', category:'Bone Markers', name:'Tartrate-Resistant Acid Phosphatase',      unit:'U/L',     low:0,    high:4.2,  description:'TRAP-5b; osteoclast activity; elevated in bone resorption'},
  {id:850, specimen:'Blood', category:'Bone Markers', name:'Soluble RANKL',                            unit:'pmol/L',  low:0,    high:0.2,  description:'Osteoclast activation signal; therapeutic target in osteoporosis'},

  // ── Metabolic & Genetic (extended) ───────────────────────────
  {id:851, specimen:'Blood', category:'Metabolic & Genetic', name:'Arylsulfatase A (MLD)',              unit:'nmol/h/mg',low:25, high:200,  description:'Enzyme deficient in metachromatic leukodystrophy (MLD)'},
  {id:852, specimen:'Blood', category:'Metabolic & Genetic', name:'Hexosaminidase A (Tay-Sachs)',       unit:'nmol/h/mg',low:10, high:140,  description:'Enzyme deficient in Tay-Sachs disease; GM2 gangliosidosis'},
  {id:853, specimen:'Blood', category:'Metabolic & Genetic', name:'Iduronate-2-Sulfatase (Hunter Sx)',  unit:'nmol/h/mg',low:10, high:200,  description:'IDS enzyme; deficient in Hunters syndrome (MPS II)'},
  {id:854, specimen:'Blood', category:'Metabolic & Genetic', name:'Alpha-L-Iduronidase (Hurler Sx)',    unit:'nmol/h/mg',low:10, high:200,  description:'IDUA enzyme; deficient in Hurler syndrome (MPS I)'},
  {id:855, specimen:'Blood', category:'Metabolic & Genetic', name:'Acid Alpha-Glucosidase (Pompe)',     unit:'nmol/h/mg',low:1,  high:10,   description:'GAA enzyme; deficient in Pompe disease (glycogen storage II)'},
  {id:856, specimen:'Blood', category:'Metabolic & Genetic', name:'VLCFA C26:0 (Zellweger)',           unit:'μg/mL',   low:0,    high:1.3,  description:'Very long chain fatty acid; peroxisomal disease screening'},
  {id:857, specimen:'Blood', category:'Metabolic & Genetic', name:'Plasma Amino Acids Panel',          unit:'μmol/L',  low:0,    high:0,    description:'Quantitative amino acid panel for inborn errors of metabolism'},
  {id:858, specimen:'Blood', category:'Metabolic & Genetic', name:'Acylcarnitine Profile (MS/MS)',     unit:'μmol/L',  low:0,    high:0,    description:'Fatty acid oxidation disorder screening; C0–C26 acylcarnitines'},
  {id:859, specimen:'Urine', category:'Metabolic & Genetic', name:'Organic Acids (Urine GC-MS)',       unit:'',        low:0,    high:0,    description:'Comprehensive urine organic acid panel for metabolic disorders'},
  {id:860, specimen:'Blood', category:'Metabolic & Genetic', name:'Biotinidase Activity',              unit:'nmol/min/mL',low:5,high:12,   description:'Biotinidase enzyme; deficiency causes seizures and alopecia'},

  // ── Respiratory & Pulmonary (extended) ───────────────────────
  {id:861, specimen:'Blood', category:'Respiratory & Pulmonary', name:'MMP-7 (Matrix Metalloprotease)', unit:'ng/mL',  low:0,    high:5.5,  description:'Fibrosis remodeling enzyme; elevated in IPF and lung adenoCa'},
  {id:862, specimen:'Blood', category:'Respiratory & Pulmonary', name:'CC-16 (Clara Cell Protein)',     unit:'ng/mL',  low:8,    high:30,   description:'Club cell protein; early pulmonary epithelial damage marker'},
  {id:863, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Periostin',                      unit:'ng/mL',  low:0,    high:25,   description:'Eosinophilic asthma biomarker; predicts response to dupilumab'},
  {id:864, specimen:'Blood', category:'Respiratory & Pulmonary', name:'YKL-40 (Chitinase-3-like-1)',   unit:'ng/mL',  low:0,    high:40,   description:'Macrophage marker; elevated in asthma, COPD, IPF and sarcoidosis'},
  {id:865, specimen:'Blood', category:'Respiratory & Pulmonary', name:'SP-D (Surfactant Protein D)',    unit:'ng/mL',  low:0,    high:110,  description:'Pulmonary surfactant protein; lung injury and ILD severity'},
  {id:866, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Anti-Jo-1 (tRNA Synthetase)',   unit:'U/mL',   low:0,    high:7,    description:'Antisynthetase antibody; ILD and inflammatory myopathy overlap'},

  // ── Ophthalmology (extended) ──────────────────────────────────
  {id:867, specimen:'Blood', category:'Ophthalmology', name:'Anti-Recoverin Antibody',                 unit:'',        low:0,    high:0,    description:'Paraneoplastic retinopathy; SCLC-associated photoreceptor loss'},
  {id:868, specimen:'Blood', category:'Ophthalmology', name:'Anti-Arrestin (S-Antigen) Ab',            unit:'',        low:0,    high:0,    description:'Autoimmune uveitis and paraneoplastic retinopathy marker'},
  {id:869, specimen:'Blood', category:'Ophthalmology', name:'Serum Lysozyme (Uveitis/Sarcoid)',        unit:'μg/mL',   low:5,    high:11,   description:'Elevated in ocular sarcoidosis and granulomatous uveitis'},
  {id:870, specimen:'Blood', category:'Ophthalmology', name:'VEGF (Wet AMD/DR)',                        unit:'pg/mL',   low:31,   high:86,   description:'Angiogenesis; target for anti-VEGF therapy in wet AMD and DR'},

  // ── Drug Monitoring (extended) ────────────────────────────────
  {id:871, specimen:'Blood', category:'Drug Monitoring', name:'Everolimus (Trough)',                    unit:'ng/mL',   low:3,    high:8,    description:'mTOR inhibitor; transplant and oncology TDM'},
  {id:872, specimen:'Blood', category:'Drug Monitoring', name:'Busulfan (AUC)',                         unit:'μM·min',  low:900,  high:1350, description:'Alkylating agent TDM; marrow conditioning before transplant'},
  {id:873, specimen:'Blood', category:'Drug Monitoring', name:'5-Fluorouracil (AUC)',                  unit:'mg·h/L',  low:20,   high:30,   description:'Chemotherapy TDM; AUC-guided dosing reduces toxicity/improves efficacy'},
  {id:874, specimen:'Blood', category:'Drug Monitoring', name:'Imatinib (Trough Level)',               unit:'ng/mL',   low:1002, high:3000, description:'TKI for CML/GIST; trough above 1000 predicts molecular response'},
  {id:875, specimen:'Blood', category:'Drug Monitoring', name:'Thiopurine Metabolites (6-TGN)',        unit:'pmol/8×10⁸ RBC',low:230,high:450,description:'6-thioguanine nucleotides; IBD and leukemia treatment monitoring'},

  // ── Toxicology (extended) ─────────────────────────────────────
  {id:876, specimen:'Blood', category:'Toxicology', name:'Methemoglobin (MetHb)',                       unit:'%',       low:0,    high:1,    description:'Ferric hemoglobin; elevated in nitrite, dapsone and primaquine'},
  {id:877, specimen:'Blood', category:'Toxicology', name:'Sulfhemoglobin',                              unit:'%',       low:0,    high:0,    description:'Normally absent; irreversible; sulfonamide and H2S exposure'},
  {id:878, specimen:'Urine', category:'Toxicology', name:'Amphetamine Screen',                          unit:'',        low:0,    high:0,    description:'Amphetamine and methamphetamine immunoassay; cutoff 1000 ng/mL'},
  {id:879, specimen:'Urine', category:'Toxicology', name:'Cocaine Metabolite (Benzoylecgonine)',        unit:'ng/mL',   low:0,    high:300,  description:'Urinary cocaine metabolite; detectable 2–4 days post-use'},
  {id:880, specimen:'Urine', category:'Toxicology', name:'Cannabis (THC-COOH) Screen',                  unit:'ng/mL',   low:0,    high:50,   description:'THC metabolite urine screen; detectable up to 30 days chronic use'},
  {id:881, specimen:'Urine', category:'Toxicology', name:'Opiate Screen (Morphine)',                    unit:'ng/mL',   low:0,    high:300,  description:'Opiate immunoassay; morphine, codeine and heroin metabolites'},
  {id:882, specimen:'Urine', category:'Toxicology', name:'Benzodiazepine Screen',                       unit:'ng/mL',   low:0,    high:200,  description:'BZD class screening; cutoff 200 ng/mL for diazepam equivalents'},
  {id:883, specimen:'Blood', category:'Toxicology', name:'Iron (Toxic Level)',                          unit:'μg/dL',   low:0,    high:300,  description:'Serum iron; above 500 causes severe GI and systemic toxicity'},
  {id:884, specimen:'Blood', category:'Toxicology', name:'Organophosphate Screen (AChE)',               unit:'%',       low:70,   high:130,  description:'RBC acetylcholinesterase; inhibited by organophosphate pesticides'},
  {id:885, specimen:'Blood', category:'Toxicology', name:'Cyanide (Whole Blood)',                       unit:'μg/mL',   low:0,    high:0.2,  description:'Cyanide poisoning; smoke inhalation and industrial exposure'},

  // ── CSF (extended) ───────────────────────────────────────────
  {id:886, specimen:'CSF', category:'CSF Analysis', name:'CSF Procalcitonin',                           unit:'ng/mL',   low:0,    high:0.5,  description:'PCT in CSF; elevated in bacterial meningitis; high sensitivity'},
  {id:887, specimen:'CSF', category:'CSF Analysis', name:'CSF ACE (Angiotensin Conver. Enz.)',          unit:'U/L',     low:0,    high:2,    description:'ACE in CSF; elevated in neurosarcoidosis and CNS granulomas'},
  {id:888, specimen:'CSF', category:'CSF Analysis', name:'CSF IgG Level',                               unit:'mg/dL',   low:0,    high:4,    description:'CSF IgG; elevated in multiple sclerosis and CNS vasculitis'},
  {id:889, specimen:'CSF', category:'CSF Analysis', name:'CSF Albumin Level',                           unit:'mg/dL',   low:15,   high:45,   description:'CSF albumin; elevated with blood-brain barrier disruption'},
  {id:890, specimen:'CSF', category:'CSF Analysis', name:'CSF/Serum Albumin Ratio',                    unit:'×10⁻³',   low:0,    high:9,    description:'Quantifies BBB integrity; elevated in vasculitis, meningitis'},

  // ── Pediatric (extended) ─────────────────────────────────────
  {id:891, specimen:'Blood', category:'Pediatric Reference', name:'Hemoglobin Electrophoresis',         unit:'',        low:0,    high:0,    description:'Separates Hb types; diagnoses sickle cell disease and thalassemia'},
  {id:892, specimen:'Blood', category:'Pediatric Reference', name:'Sickle Cell Screen (HbS)',           unit:'%',       low:0,    high:0,    description:'Hemoglobin S fraction; >90% in sickle cell disease (HbSS)'},
  {id:893, specimen:'Blood', category:'Pediatric Reference', name:'G6PD Activity (Pediatric)',          unit:'U/g Hb',  low:7,    high:20,   description:'G6PD enzyme; deficiency causes hemolysis with oxidant drugs'},
  {id:894, specimen:'Blood', category:'Pediatric Reference', name:'17-OH Progesterone (CAH Screen)',   unit:'ng/dL',   low:0,    high:100,  description:'Congenital adrenal hyperplasia screening in neonates'},
  {id:895, specimen:'Blood', category:'Pediatric Reference', name:'Galactose (Galactosemia Screen)',   unit:'mg/dL',   low:0,    high:20,   description:'Neonatal galactosemia screening; cataracts and liver failure'},
  {id:896, specimen:'Blood', category:'Pediatric Reference', name:'LCAD Deficiency Screen',            unit:'',        low:0,    high:0,    description:'Long-chain acyl-CoA dehydrogenase; fatty acid oxidation disorder'},

  // ── Synovial Fluid (extended) ─────────────────────────────────
  {id:897, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial IL-6',                   unit:'pg/mL',   low:0,    high:200,  description:'Joint interleukin-6; markedly elevated in septic and RA flares'},
  {id:898, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Calprotectin',           unit:'mg/kg',   low:0,    high:17,   description:'Neutrophil marker in joint fluid; inflammatory arthritis screen'},

  // ── Pleural & Peritoneal Fluid (extended) ─────────────────────
  {id:899, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Cholesterol',   unit:'mg/dL',   low:0,    high:60,   description:'Elevated cholesterol effusion; chronic tuberculosis or malignancy'},
  {id:900, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Peritoneal Lactate',    unit:'mmol/L',  low:0,    high:2.5,  description:'Peritoneal lactate; elevated in gut ischemia and peritonitis'},

  // ─── NEW TESTS (901–1100) ────────────────────────────────────

  // ── Blood Sugar & Insulin Resistance (extended) ───────────────
  {id:901,  specimen:'Blood', category:'Blood Sugar', name:'Insulin Resistance Score (HOMA2)',    unit:'score',   low:0,    high:1.0,  description:'HOMA2-IR computed model; more accurate than basic HOMA-IR'},
  {id:902,  specimen:'Blood', category:'Blood Sugar', name:'Adiponectin/Leptin Ratio',            unit:'ratio',   low:1.0,  high:6.0,  description:'A/L ratio; low in metabolic syndrome and insulin resistance'},
  {id:903,  specimen:'Blood', category:'Blood Sugar', name:'Triglyceride/HDL Ratio',              unit:'ratio',   low:0,    high:2.0,  description:'Surrogate marker for insulin resistance; >3 suggests IR'},
  {id:904,  specimen:'Blood', category:'Blood Sugar', name:'Postprandial Insulin (2h)',            unit:'μIU/mL',  low:0,    high:60,   description:'Insulin 2 hours after glucose load; insulin secretion capacity'},
  {id:905,  specimen:'Blood', category:'Blood Sugar', name:'Glucose/Insulin Ratio',               unit:'ratio',   low:7,    high:30,   description:'Low ratio suggests insulin resistance'},
  {id:906,  specimen:'Blood', category:'Blood Sugar', name:'Glycated Albumin',                    unit:'%',       low:11,   high:16,   description:'2-week average glucose marker; useful in dialysis patients'},
  {id:907,  specimen:'Blood', category:'Blood Sugar', name:'1,5-Anhydroglucitol (1,5-AG)',        unit:'μg/mL',   low:10,   high:40,   description:'Glycemic excursion marker; reflects 1-2 week glucose control'},
  {id:908,  specimen:'Blood', category:'Blood Sugar', name:'Continuous Glucose Mean (CGM Est.)',  unit:'mg/dL',   low:70,   high:140,  description:'Estimated average glucose from CGM device data'},

  // ── Lipid Profile (extended) ──────────────────────────────────
  {id:909,  specimen:'Blood', category:'Lipid Profile', name:'Omega-3 Index (EPA+DHA)',           unit:'%',       low:8,    high:12,   description:'EPA+DHA as % of RBC fatty acids; cardiovascular risk marker'},
  {id:910,  specimen:'Blood', category:'Lipid Profile', name:'Lipoprotein(a) Isoform apo(a)',     unit:'mg/dL',   low:0,    high:30,   description:'Lp(a) particle; genetic CV risk; not reduced by statins'},
  {id:911,  specimen:'Blood', category:'Lipid Profile', name:'LDL Particle Number (LDL-P)',       unit:'nmol/L',  low:0,    high:1000, description:'Total LDL particles; better CV predictor than LDL-C'},
  {id:912,  specimen:'Blood', category:'Lipid Profile', name:'Small Dense LDL-III (sdLDL)',       unit:'mg/dL',   low:0,    high:35,   description:'Most atherogenic LDL subfraction; increases with TG'},
  {id:913,  specimen:'Blood', category:'Lipid Profile', name:'HDL Particle Number (HDL-P)',       unit:'μmol/L',  low:30,   high:40,   description:'Total HDL particles; large HDL more protective'},
  {id:914,  specimen:'Blood', category:'Lipid Profile', name:'HDL2b Cholesterol',                 unit:'mg/dL',   low:5,    high:25,   description:'Large buoyant HDL subclass; most cardioprotective HDL'},
  {id:915,  specimen:'Blood', category:'Lipid Profile', name:'Oxidized LDL (oxLDL)',              unit:'U/L',     low:0,    high:60,   description:'Oxidatively modified LDL; direct atherosclerosis driver'},
  {id:916,  specimen:'Blood', category:'Lipid Profile', name:'Phospholipid Transfer Protein',     unit:'μg/mL',   low:0.5,  high:3.0,  description:'PLTP; HDL remodeling enzyme; elevated in metabolic syndrome'},

  // ── Electrolytes (extended) ───────────────────────────────────
  {id:917,  specimen:'Blood', category:'Electrolytes', name:'Lithium (Therapeutic)',              unit:'mEq/L',   low:0.6,  high:1.2,  description:'Mood stabilizer serum level; toxicity above 1.5'},
  {id:918,  specimen:'Urine', category:'Electrolytes', name:'Urine Sodium/Creatinine Ratio',     unit:'mEq/g',   low:40,   high:220,  description:'Spot urine sodium corrected for creatinine; dietary intake'},
  {id:919,  specimen:'Blood', category:'Electrolytes', name:'Bicarbonate (Venous)',               unit:'mEq/L',   low:22,   high:29,   description:'Venous bicarbonate; metabolic acid-base status screen'},
  {id:920,  specimen:'Blood', category:'Electrolytes', name:'Phosphate Excretion (TmP/GFR)',     unit:'mmol/L',  low:0.8,  high:1.35, description:'Tubular maximum phosphate reabsorption; FGF-23 and PTH effect'},
  {id:921,  specimen:'Urine', category:'Electrolytes', name:'Urinary Chloride',                  unit:'mEq/L',   low:110,  high:250,  description:'Urine Cl; low in metabolic alkalosis with vomiting (<25)'},
  {id:922,  specimen:'Blood', category:'Electrolytes', name:'Zinc (Plasma)',                     unit:'μg/dL',   low:60,   high:130,  description:'Plasma zinc; immune function and wound healing support'},
  {id:923,  specimen:'Blood', category:'Electrolytes', name:'Copper (Serum)',                    unit:'μg/dL',   low:70,   high:140,  description:'Serum copper; elevated in OCP use, pregnancy and inflammation'},

  // ── Iron Studies (extended) ───────────────────────────────────
  {id:924,  specimen:'Blood', category:'Iron Studies', name:'Erythropoietin (EPO)',               unit:'mIU/mL',  low:4,    high:26,   description:'Kidney hormone stimulating RBC production; low in CKD anemia'},
  {id:925,  specimen:'Blood', category:'Iron Studies', name:'Soluble Transferrin Receptor/Log F', unit:'ratio',   low:0,    high:1.5,  description:'sTfR/log ferritin ratio; functional iron deficiency vs anemia of inflammation'},
  {id:926,  specimen:'Blood', category:'Iron Studies', name:'Reticulocyte Hemoglobin Content',   unit:'pg',      low:28,   high:35,   description:'CHr or Ret-He; functional iron for RBC production; early ID marker'},
  {id:927,  specimen:'Blood', category:'Iron Studies', name:'Iron Absorption (Oral)',             unit:'%',       low:10,   high:35,   description:'Percentage of oral iron absorbed; low in celiac and achlorhydria'},
  {id:928,  specimen:'Blood', category:'Iron Studies', name:'Hepcidin-25 (Serum)',               unit:'ng/mL',   low:20,   high:280,  description:'Master iron regulator; high in anemia of inflammation, low in IDA'},

  // ── Coagulation (extended) ────────────────────────────────────
  {id:929,  specimen:'Blood', category:'Coagulation', name:'Heparin Anti-Xa (LMWH)',             unit:'IU/mL',   low:0.3,  high:0.7,  description:'LMWH therapeutic monitoring (prophylactic: 0.2–0.5)'},
  {id:930,  specimen:'Blood', category:'Coagulation', name:'Heparin Anti-Xa (UFH)',               unit:'IU/mL',   low:0.3,  high:0.7,  description:'Unfractionated heparin monitoring; alternative to aPTT'},
  {id:931,  specimen:'Blood', category:'Coagulation', name:'Fibrin Degradation Products (FDP)',   unit:'μg/mL',   low:0,    high:5,    description:'Overall clot breakdown marker; elevated in DIC and PE'},
  {id:932,  specimen:'Blood', category:'Coagulation', name:'Euglobulin Clot Lysis Time',         unit:'min',     low:120,  high:300,  description:'Fibrinolytic activity; shortened in hyperfibrinolysis'},
  {id:933,  specimen:'Blood', category:'Coagulation', name:'Reptilase Time',                     unit:'sec',     low:16,   high:22,   description:'Thrombin-independent clotting; differentiates heparin effect'},
  {id:934,  specimen:'Blood', category:'Coagulation', name:'Anti-Cardiolipin IgG',               unit:'GPL',     low:0,    high:15,   description:'Antiphospholipid antibody; arterial and venous thrombosis risk'},
  {id:935,  specimen:'Blood', category:'Coagulation', name:'Anti-Cardiolipin IgM',               unit:'MPL',     low:0,    high:12,   description:'IgM anticardiolipin; antiphospholipid syndrome marker'},
  {id:936,  specimen:'Blood', category:'Coagulation', name:'Viscoelastic Test (TEG/ROTEM)',      unit:'',        low:0,    high:0,    description:'Point-of-care global hemostasis; surgical bleeding management'},

  // ── Vitamins & Minerals (extended) ───────────────────────────
  {id:937,  specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin D 1,25-OH (Active)',  unit:'pg/mL',   low:18,   high:72,   description:'Calcitriol; active form of vitamin D; regulates calcium absorption'},
  {id:938,  specimen:'Blood', category:'Vitamins & Minerals', name:'Vitamin K2 (MK-7)',           unit:'ng/mL',   low:0.1,  high:2.2,  description:'Menaquinone-7; bone and cardiovascular calcification protection'},
  {id:939,  specimen:'Blood', category:'Vitamins & Minerals', name:'Beta-Carotene',              unit:'μg/dL',   low:10,   high:85,   description:'Pro-vitamin A; antioxidant carotenoid; reflects dietary intake'},
  {id:940,  specimen:'Blood', category:'Vitamins & Minerals', name:'Lycopene',                   unit:'μg/dL',   low:0,    high:60,   description:'Carotenoid antioxidant; highest in tomatoes; prostate cancer protection'},
  {id:941,  specimen:'Blood', category:'Vitamins & Minerals', name:'Lutein + Zeaxanthin',        unit:'μg/dL',   low:0.6,  high:3.5,  description:'Macular carotenoids; protective against AMD and cataracts'},
  {id:942,  specimen:'Blood', category:'Vitamins & Minerals', name:'Astaxanthin',                unit:'ng/mL',   low:0,    high:0.5,  description:'Potent marine carotenoid antioxidant; anti-inflammatory'},
  {id:943,  specimen:'Blood', category:'Vitamins & Minerals', name:'Chromium (Nutritional)',     unit:'μg/L',    low:0.1,  high:2.1,  description:'Trace mineral enhancing insulin sensitivity; depleted in diabetes'},
  {id:944,  specimen:'Blood', category:'Vitamins & Minerals', name:'Iodine (Blood)',             unit:'μg/L',    low:45,   high:90,   description:'Serum iodine; essential for thyroid hormone synthesis'},
  {id:945,  specimen:'Blood', category:'Vitamins & Minerals', name:'Molybdenum (Serum)',         unit:'nmol/L',  low:5,    high:50,   description:'Trace element; cofactor for xanthine oxidase and sulfite oxidase'},
  {id:946,  specimen:'Blood', category:'Vitamins & Minerals', name:'Boron (Serum)',              unit:'μg/L',    low:15,   high:350,  description:'Trace mineral; roles in bone metabolism and hormone regulation'},

  // ── Proteins & Immunoglobulins (extended) ─────────────────────
  {id:947,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Transthyretin (TTR)', unit:'mg/dL',   low:20,   high:40,   description:'Prealbumin; short half-life nutritional and inflammation marker'},
  {id:948,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Fibronectin (Plasma)',unit:'mg/dL',   low:22,   high:56,   description:'Extracellular matrix glycoprotein; wound healing and inflammation'},
  {id:949,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Clusterin (CLU)',     unit:'μg/mL',   low:35,   high:105,  description:'Molecular chaperone; linked to Alzheimers and atherosclerosis'},
  {id:950,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Serum Amyloid P',    unit:'mg/L',    low:0,    high:10,   description:'Acute phase protein; component of amyloid deposits in amyloidosis'},
  {id:951,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Inter-alpha Inhibitor',unit:'mg/dL',  low:20,   high:50,   description:'Anti-inflammatory protease inhibitor; low in sepsis'},
  {id:952,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Vitronectin',         unit:'mg/dL',   low:20,   high:40,   description:'Multifunctional adhesive protein; complement regulation'},
  {id:953,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Gelsolin (Plasma)',   unit:'μg/mL',   low:150,  high:300,  description:'Actin-scavenging protein; low in sepsis and trauma'},
  {id:954,  specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Serum Amyloid A (SAA)',unit:'mg/L',   low:0,    high:6.4,  description:'Sensitive acute phase protein; better than CRP in some conditions'},

  // ── Nutritional Markers (extended) ───────────────────────────
  {id:955,  specimen:'Blood', category:'Nutritional Markers', name:'Phosphatidylcholine',        unit:'mg/dL',   low:130,  high:250,  description:'Major phospholipid; cell membrane integrity and liver function'},
  {id:956,  specimen:'Blood', category:'Nutritional Markers', name:'Sphingomyelin',              unit:'mg/dL',   low:15,   high:50,   description:'Structural phospholipid; altered in Niemann-Pick and CVD'},
  {id:957,  specimen:'Blood', category:'Nutritional Markers', name:'Phosphatidylserine',         unit:'μg/mL',   low:0,    high:20,   description:'Brain-enriched phospholipid; cognitive function and inflammation'},
  {id:958,  specimen:'Blood', category:'Nutritional Markers', name:'Stearidonic Acid (SDA)',     unit:'%',       low:0,    high:0.1,  description:'Omega-3 precursor; marker of fatty acid desaturase activity'},
  {id:959,  specimen:'Blood', category:'Nutritional Markers', name:'Arachidonic Acid (AA)',      unit:'%',       low:7,    high:15,   description:'Omega-6 fatty acid; pro-inflammatory eicosanoid precursor'},
  {id:960,  specimen:'Blood', category:'Nutritional Markers', name:'AA/EPA Ratio',              unit:'ratio',   low:0,    high:11,   description:'Inflammatory balance marker; high ratio = pro-inflammatory state'},

  // ── Autoimmune (extended) ─────────────────────────────────────
  {id:961,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Centromere Ab (ACA)',  unit:'U/mL', low:0, high:7,    description:'Limited cutaneous scleroderma (CREST syndrome) specific'},
  {id:962,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Topoisomerase I (Scl-70)',unit:'U/mL',low:0,high:7,  description:'Diffuse systemic sclerosis antibody; ILD risk'},
  {id:963,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-RNA Polymerase III',   unit:'U/mL', low:0, high:7,    description:'Diffuse scleroderma with renal crisis risk'},
  {id:964,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Fibrillarin (U3-RNP)', unit:'U/mL', low:0, high:7,    description:'Scleroderma with pulmonary arterial hypertension marker'},
  {id:965,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Th/To Antibody',      unit:'U/mL', low:0, high:7,    description:'Limited scleroderma with ILD and PAH overlap'},
  {id:966,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-PmScl-100 Ab',        unit:'U/mL', low:0, high:7,    description:'Polymyositis-scleroderma overlap antibody'},
  {id:967,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-NXP-2 Antibody',      unit:'U/mL', low:0, high:7,    description:'Dermatomyositis with calcinosis and cancer risk'},
  {id:968,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-TIF-1γ Antibody',     unit:'U/mL', low:0, high:7,    description:'Cancer-associated dermatomyositis; paraneoplastic myositis'},
  {id:969,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-SAE Antibody',        unit:'U/mL', low:0, high:7,    description:'Dermatomyositis-specific; associated with dysphagia'},
  {id:970,  specimen:'Blood', category:'Autoimmune & Inflammation', name:'Serum Ferritin (MAS)',     unit:'ng/mL', low:0, high:500,  description:'Markedly elevated (>10,000) in macrophage activation syndrome'},

  // ── Infectious Disease (extended) ────────────────────────────
  {id:971,  specimen:'Blood', category:'Infectious Disease', name:'Legionella Antibody (IFA)',   unit:'titer',   low:0,    high:128,  description:'Legionnaires disease antibody; respiratory illness from water'},
  {id:972,  specimen:'Blood', category:'Infectious Disease', name:'Mycoplasma IgM',              unit:'titer',   low:0,    high:320,  description:'Mycoplasma pneumoniae acute infection; atypical pneumonia'},
  {id:973,  specimen:'Blood', category:'Infectious Disease', name:'Chlamydia Pneumoniae IgG',   unit:'titer',   low:0,    high:16,   description:'Past or chronic Chlamydia pneumoniae respiratory infection'},
  {id:974,  specimen:'Blood', category:'Infectious Disease', name:'Coxsackievirus A IgM',       unit:'',        low:0,    high:0,    description:'Hand-foot-mouth disease and herpangina; enterovirus group'},
  {id:975,  specimen:'Blood', category:'Infectious Disease', name:'Adenovirus IgG',             unit:'',        low:0,    high:0,    description:'Past adenovirus infection; respiratory, GI and eye infections'},
  {id:976,  specimen:'Blood', category:'Infectious Disease', name:'Influenza A/B Antibody',     unit:'titer',   low:0,    high:40,   description:'Influenza immunity; protective titer generally >40'},
  {id:977,  specimen:'Blood', category:'Infectious Disease', name:'Respiratory Syncytial Virus IgG',unit:'',    low:0,    high:0,    description:'RSV antibody; most common severe lower respiratory in infants'},
  {id:978,  specimen:'Blood', category:'Infectious Disease', name:'SARS-CoV-2 Anti-S IgG',     unit:'BAU/mL',  low:0,    high:0,    description:'COVID-19 spike protein antibody; vaccine or infection immunity'},
  {id:979,  specimen:'Blood', category:'Infectious Disease', name:'SARS-CoV-2 Anti-N IgG',     unit:'',        low:0,    high:0,    description:'Nucleocapsid antibody; natural infection only (not vaccine)'},
  {id:980,  specimen:'Blood', category:'Infectious Disease', name:'Lyme Disease IgG (ELISA)',  unit:'',        low:0,    high:0,    description:'Borrelia burgdorferi antibody; Lyme disease screening'},

  // ── Pancreatic Function (extended) ────────────────────────────
  {id:981,  specimen:'Blood', category:'Pancreatic Function', name:'Pancreatic Lipase (Specific)',  unit:'U/L',   low:0,    high:160,  description:'Pancreatic-specific lipase; more specific than total lipase'},
  {id:982,  specimen:'Blood', category:'Pancreatic Function', name:'Trypsinogen-2 (Urine)',         unit:'μg/L',  low:0,    high:50,   description:'Urine trypsinogen-2; rapid bedside pancreatitis test'},
  {id:983,  specimen:'Blood', category:'Pancreatic Function', name:'Chromogranin A (Pancreatic NETs)',unit:'ng/mL',low:0,   high:100,  description:'Neuroendocrine tumor marker; elevated in pancreatic NETs'},
  {id:984,  specimen:'Blood', category:'Pancreatic Function', name:'Glucagon-Like Peptide 2 (GLP-2)',unit:'pmol/L',low:0,   high:50,   description:'Intestinal growth factor; elevated in short bowel syndrome Tx'},
  {id:985,  specimen:'Blood', category:'Pancreatic Function', name:'Motilin',                       unit:'pg/mL', low:0,    high:150,  description:'GI motility hormone; elevated in functional dyspepsia'},

  // ── CSF Analysis (extended) ───────────────────────────────────
  {id:986,  specimen:'CSF', category:'CSF Analysis', name:'CSF Adenosine Deaminase (ADA)',        unit:'U/L',    low:0,    high:10,   description:'Elevated in TB meningitis and lymphomatous meningitis'},
  {id:987,  specimen:'CSF', category:'CSF Analysis', name:'CSF CXCL13',                           unit:'pg/mL',  low:0,    high:8,    description:'B-cell chemokine; elevated in Lyme neuroborreliosis'},
  {id:988,  specimen:'CSF', category:'CSF Analysis', name:'CSF Ferritin',                         unit:'ng/mL',  low:0,    high:12,   description:'Iron storage in CSF; elevated in CNS hemorrhage and iron disorders'},
  {id:989,  specimen:'CSF', category:'CSF Analysis', name:'CSF Neopterin',                        unit:'nmol/L', low:0,    high:10,   description:'CNS macrophage activation; elevated in MS relapse and encephalitis'},
  {id:990,  specimen:'CSF', category:'CSF Analysis', name:'CSF Myelin Basic Protein (MBP)',       unit:'ng/mL',  low:0,    high:4,    description:'Myelin breakdown marker; elevated in active MS and TBI'},

  // ── Reproductive & Fertility (extended) ───────────────────────
  {id:991,  specimen:'Blood', category:'Reproductive & Fertility', name:'Total Estrogen (Serum)',  unit:'pg/mL',  low:60,   high:400,  description:'Total estrogen (E1+E2+E3); fluctuates with menstrual cycle'},
  {id:992,  specimen:'Blood', category:'Reproductive & Fertility', name:'Androstenedione',         unit:'ng/dL',  low:50,   high:220,  description:'Androgen precursor; elevated in PCOS and CAH'},
  {id:993,  specimen:'Blood', category:'Reproductive & Fertility', name:'3-alpha Androstanediol G',unit:'ng/dL',  low:0,    high:75,   description:'Peripheral androgen metabolite; reflects 5-alpha reductase activity'},
  {id:994,  specimen:'Blood', category:'Reproductive & Fertility', name:'Prolactin (Macro-prolactin)',unit:'ng/mL',low:0,   high:5,    description:'Biologically inactive bound prolactin; elevated in macroprolactinemia'},
  {id:995,  specimen:'Blood', category:'Reproductive & Fertility', name:'Relaxin (Pregnancy)',     unit:'pg/mL',  low:0,    high:300,  description:'Pregnancy hormone relaxing ligaments and cervix; corpus luteum'},
  {id:996,  specimen:'Blood', category:'Reproductive & Fertility', name:'Anti-Zona Pellucida Ab',  unit:'',       low:0,    high:0,    description:'Antibody against egg coat; premature ovarian failure cause'},
  {id:997,  specimen:'Blood', category:'Reproductive & Fertility', name:'Anti-Sperm Antibody (Female)',unit:'%',  low:0,    high:10,   description:'Female serum antisperm antibodies; immunological infertility'},

  // ── Pediatric Reference (extended) ───────────────────────────
  {id:998,  specimen:'Blood', category:'Pediatric Reference', name:'Newborn Bilirubin (Direct)',   unit:'mg/dL',  low:0,    high:1,    description:'Direct bilirubin in newborns; elevated = pathologic jaundice'},
  {id:999,  specimen:'Blood', category:'Pediatric Reference', name:'Neonatal Calcium (Ionized)',   unit:'mmol/L', low:1.10, high:1.40, description:'Ionized calcium in neonates; hypocalcemia common in premature'},
  {id:1000, specimen:'Blood', category:'Pediatric Reference', name:'Alkaline Phosphatase (Infant)',unit:'U/L',    low:110,  high:700,  description:'High ALP normal in rapidly growing infants; bone formation'},

  // ── Drug Monitoring (extended) ────────────────────────────────
  {id:1001, specimen:'Blood', category:'Drug Monitoring', name:'Metformin (Plasma)',              unit:'μg/mL',  low:0.1,  high:2.0,  description:'Biguanide diabetes drug; toxicity causes lactic acidosis'},
  {id:1002, specimen:'Blood', category:'Drug Monitoring', name:'Sulfasalazine (Plasma)',          unit:'μg/mL',  low:0,    high:50,   description:'IBD and RA drug; monitor for GI and hematological toxicity'},
  {id:1003, specimen:'Blood', category:'Drug Monitoring', name:'Azathioprine (6-MP Metabolites)', unit:'pmol/8×10⁸ RBC',low:230,high:450,description:'Thiopurine metabolites; IBD and autoimmune disease TDM'},
  {id:1004, specimen:'Blood', category:'Drug Monitoring', name:'Infliximab (Trough Level)',       unit:'μg/mL',  low:3,    high:7,    description:'Anti-TNF biologic trough; predicts mucosal healing in IBD'},
  {id:1005, specimen:'Blood', category:'Drug Monitoring', name:'Adalimumab (Trough Level)',       unit:'μg/mL',  low:5,    high:12,   description:'Anti-TNF biologic trough level; guides dose optimization'},
  {id:1006, specimen:'Blood', category:'Drug Monitoring', name:'Vedolizumab (Trough)',            unit:'μg/mL',  low:10,   high:40,   description:'Gut-selective integrin inhibitor; IBD biologic TDM'},
  {id:1007, specimen:'Blood', category:'Drug Monitoring', name:'Ustekinumab (Trough)',            unit:'μg/mL',  low:1,    high:5,    description:'IL-12/23 inhibitor; IBD and psoriasis therapeutic monitoring'},
  {id:1008, specimen:'Blood', category:'Drug Monitoring', name:'Clozapine (Plasma)',              unit:'ng/mL',  low:250,  high:600,  description:'Antipsychotic TDM; agranulocytosis risk requires WBC monitoring'},
  {id:1009, specimen:'Blood', category:'Drug Monitoring', name:'Risperidone + Active Metabolite', unit:'ng/mL',  low:20,   high:60,   description:'Antipsychotic combined level; therapeutic monitoring range'},
  {id:1010, specimen:'Blood', category:'Drug Monitoring', name:'Olanzapine (Plasma)',             unit:'ng/mL',  low:20,   high:80,   description:'Atypical antipsychotic; metabolic side effects monitoring'},

  // ── Gastrointestinal (extended) ───────────────────────────────
  {id:1011, specimen:'Blood', category:'Gastrointestinal', name:'Calprotectin (Serum)',           unit:'μg/L',   low:0,    high:100,  description:'Neutrophil marker; elevated in systemic and gut inflammation'},
  {id:1012, specimen:'Blood', category:'Gastrointestinal', name:'Lactoferrin (Serum)',            unit:'μg/L',   low:0,    high:3500, description:'Antimicrobial iron-binding protein; acute phase reactant'},
  {id:1013, specimen:'Stool', category:'Gastrointestinal', name:'Stool Pancreatic Lipase',       unit:'U/g',    low:0,    high:7500, description:'Stool lipase; marker of exocrine pancreatic insufficiency'},
  {id:1014, specimen:'Stool', category:'Gastrointestinal', name:'Stool H. pylori PCR',            unit:'',       low:0,    high:0,    description:'Molecular detection of H. pylori and antibiotic resistance genes'},
  {id:1015, specimen:'Blood', category:'Gastrointestinal', name:'Intestinal Alkaline Phosphatase',unit:'U/L',    low:0,    high:4,    description:'Gut ALP isoenzyme; protective role in gut microbiome regulation'},

  // ── Neurological Markers (extended) ──────────────────────────
  {id:1016, specimen:'Blood', category:'Neurological Markers', name:'Alpha-Synuclein (Plasma)',   unit:'pg/mL',  low:0,    high:50,   description:'Misfolded protein; Parkinson disease and Lewy body dementia'},
  {id:1017, specimen:'Blood', category:'Neurological Markers', name:'Prion Protein (PrP) Screen', unit:'',       low:0,    high:0,    description:'PrP scrapie screening; Creutzfeldt-Jakob disease workup'},
  {id:1018, specimen:'Blood', category:'Neurological Markers', name:'NMDA Receptor Antibody',     unit:'',       low:0,    high:0,    description:'Anti-NMDAR encephalitis; young females with behavioral changes'},
  {id:1019, specimen:'Blood', category:'Neurological Markers', name:'Anti-AMPA Receptor Ab',      unit:'',       low:0,    high:0,    description:'AMPA receptor encephalitis; limbic symptoms and frequent relapses'},
  {id:1020, specimen:'Blood', category:'Neurological Markers', name:'Anti-GABA-B Receptor Ab',    unit:'',       low:0,    high:0,    description:'GABA-B encephalitis; refractory seizures and lung cancer association'},
  {id:1021, specimen:'Blood', category:'Neurological Markers', name:'Anti-DPPX Antibody',         unit:'',       low:0,    high:0,    description:'Dipeptidyl-peptidase-like protein 6 Ab; hyperekplexia and encephalitis'},
  {id:1022, specimen:'Blood', category:'Neurological Markers', name:'Anti-IgLON5 Antibody',       unit:'',       low:0,    high:0,    description:'Sleep disorder with tauopathy and brainstem involvement'},
  {id:1023, specimen:'CSF',   category:'Neurological Markers', name:'RT-QuIC (Prion Assay)',       unit:'',       low:0,    high:0,    description:'Real-time quaking-induced conversion; CJD confirmatory test'},

  // ── Oncology & Hematology (extended) ─────────────────────────
  {id:1024, specimen:'Blood', category:'Oncology & Hematology', name:'NPM1 Mutation (AML)',       unit:'',       low:0,    high:0,    description:'Favorable AML mutation; found in ~30% of adult AML cases'},
  {id:1025, specimen:'Blood', category:'Oncology & Hematology', name:'FLT3 ITD Mutation (AML)',   unit:'%',      low:0,    high:0,    description:'Poor prognosis AML; internal tandem duplication of FLT3'},
  {id:1026, specimen:'Blood', category:'Oncology & Hematology', name:'IDH1/IDH2 Mutation',        unit:'',       low:0,    high:0,    description:'AML and glioma mutation; targetable by IDH inhibitors'},
  {id:1027, specimen:'Blood', category:'Oncology & Hematology', name:'TP53 Mutation (Liquid Bx)', unit:'%',      low:0,    high:0,    description:'Tumor suppressor; poor prognosis in CLL, AML and solid tumors'},
  {id:1028, specimen:'Blood', category:'Oncology & Hematology', name:'Immunophenotype (Flow)',     unit:'',       low:0,    high:0,    description:'Flow cytometry panel; lymphoma and leukemia classification'},
  {id:1029, specimen:'Blood', category:'Oncology & Hematology', name:'Erythropoietin (Tumor EPO)', unit:'mIU/mL',low:4,   high:26,   description:'EPO in polycythemia vera is suppressed; paraneoplastic elevation'},
  {id:1030, specimen:'Blood', category:'Oncology & Hematology', name:'Bone Marrow Cellularity',   unit:'%',      low:30,   high:70,   description:'Age-adjusted bone marrow cellularity; aplasia vs. hyperplasia'},

  // ── Endocrinology & Metabolism (extended) ─────────────────────
  {id:1031, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Klotho (Anti-aging)',    unit:'pg/mL',  low:312,  high:1130, description:'Anti-aging hormone; declines with CKD, aging and vitamin D deficiency'},
  {id:1032, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Fibroblast GF-21 (FGF21)',unit:'pg/mL', low:0,   high:278,  description:'Hepatokine; elevated in NAFLD, obesity and mitochondrial disease'},
  {id:1033, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Angiopoietin-like 3',   unit:'ng/mL',  low:0,    high:120,  description:'ANGPTL3; regulates TG and HDL; loss-of-function = low LDL'},
  {id:1034, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Angiopoietin-like 4',   unit:'ng/mL',  low:0,    high:80,   description:'ANGPTL4; LPL inhibitor; elevated in fasting and diabetes'},
  {id:1035, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Fetuin-A',              unit:'g/L',    low:0.4,  high:0.8,  description:'Liver-derived inhibitor; vascular calcification protector'},
  {id:1036, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Osteocalcin (Hormonal)', unit:'ng/mL',  low:11,   high:48,   description:'Bone hormone regulating insulin secretion and energy metabolism'},
  {id:1037, specimen:'Blood', category:'Endocrinology & Metabolism', name:'VEGF-A (Serum)',        unit:'pg/mL',  low:31,   high:86,   description:'Vascular growth factor; elevated in hypoxia, tumors and diabetic retinopathy'},
  {id:1038, specimen:'Urine', category:'Endocrinology & Metabolism', name:'Normetanephrine (Urine)',unit:'μg/24h', low:0,   high:340,  description:'Norepinephrine metabolite; pheochromocytoma screening'},
  {id:1039, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Plasma Metanephrine',   unit:'pmol/L', low:0,    high:90,   description:'Free metanephrine; best screening test for pheochromocytoma'},
  {id:1040, specimen:'Blood', category:'Endocrinology & Metabolism', name:'Plasma Normetanephrine', unit:'pmol/L',low:0,   high:180,  description:'Free normetanephrine; pheochromocytoma and paraganglioma'},

  // ── Dermatology (extended) ────────────────────────────────────
  {id:1041, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-Envoplakin/Periplakin Ab', unit:'U/mL',   low:0,    high:7,    description:'Paraneoplastic pemphigus antibody; tumor-associated blistering'},
  {id:1042, specimen:'Blood', category:'Dermatology & Skin', name:'Anti-Laminin 332 Ab',           unit:'U/mL',   low:0,    high:7,    description:'Mucous membrane pemphigoid antibody; ocular involvement risk'},
  {id:1043, specimen:'Blood', category:'Dermatology & Skin', name:'Sclerostin (Systemic Sclerosis)',unit:'pmol/L', low:0,   high:60,   description:'Wnt inhibitor; elevated in scleroderma and osteoporosis'},
  {id:1044, specimen:'Blood', category:'Dermatology & Skin', name:'Skin Prick Test (SPT) Wheal',   unit:'mm',     low:0,    high:3,    description:'Cutaneous immediate hypersensitivity; wheal >3mm positive'},
  {id:1045, specimen:'Blood', category:'Dermatology & Skin', name:'Melanoma Biomarker (BRAF V600E)',unit:'',       low:0,    high:0,    description:'BRAF mutation in melanoma; targetable by vemurafenib'},

  // ── Ophthalmology (extended) ──────────────────────────────────
  {id:1046, specimen:'Blood', category:'Ophthalmology', name:'Carbonic Anhydrase Ab (Uveitis)',   unit:'',        low:0,    high:0,    description:'Autoimmune marker in uveitis; associated with MS and IBD'},
  {id:1047, specimen:'Blood', category:'Ophthalmology', name:'Anti-Bestrophin Antibody',          unit:'',        low:0,    high:0,    description:'Best vitelliform macular dystrophy marker; chloride channel Ab'},
  {id:1048, specimen:'Blood', category:'Ophthalmology', name:'IgG4 (Orbital Disease)',            unit:'mg/dL',   low:1,    high:291,  description:'Elevated in IgG4-related orbital disease and dacryoadenitis'},
  {id:1049, specimen:'Blood', category:'Ophthalmology', name:'HLA-A29 (Birdshot Chorioretinopathy)',unit:'',      low:0,    high:0,    description:'Genetic marker strongly associated with birdshot chorioretinopathy'},
  {id:1050, specimen:'Blood', category:'Ophthalmology', name:'Toxoplasma Retinochoroiditis IgG',  unit:'IU/mL',  low:0,    high:8,    description:'Ocular toxoplasmosis; most common cause of posterior uveitis'},

  // ── Bone Markers (extended) ───────────────────────────────────
  {id:1051, specimen:'Blood', category:'Bone Markers', name:'Intact PTH (iPTH)',                  unit:'pg/mL',  low:15,   high:65,   description:'Intact PTH; regulates calcium, phosphorus and bone remodeling'},
  {id:1052, specimen:'Blood', category:'Bone Markers', name:'PTH-rP (PTH-related Peptide)',       unit:'pmol/L', low:0,    high:1.3,  description:'PTHrP; elevated in hypercalcemia of malignancy'},
  {id:1053, specimen:'Blood', category:'Bone Markers', name:'24-hour Urine Calcium',              unit:'mg/24h', low:100,  high:300,  description:'Total urinary calcium; elevated in hyperparathyroidism and VDT'},
  {id:1054, specimen:'Blood', category:'Bone Markers', name:'Fibroblast GF-23 (FGF-23 Bone)',    unit:'RU/mL',  low:0,    high:180,  description:'Phosphate regulator made by osteocytes; elevated in CKD and XLH'},
  {id:1055, specimen:'Blood', category:'Bone Markers', name:'Bone Collagen Crosslinks (u-CTx)',   unit:'ng/mmol creat',low:52,high:327,description:'Urinary CTx; bone resorption in postmenopausal osteoporosis'},

  // ── Metabolic & Genetic (extended) ───────────────────────────
  {id:1056, specimen:'Blood', category:'Metabolic & Genetic', name:'Urine Mucopolysaccharides (GAG)',unit:'mg/g creat',low:0,high:100,description:'Glycosaminoglycans screen for MPS (Hunter, Hurler, Morquio)'},
  {id:1057, specimen:'Blood', category:'Metabolic & Genetic', name:'Oligosaccharide Screen (Urine)',unit:'',       low:0,    high:0,    description:'Urine oligosaccharide pattern; glycoprotein storage diseases'},
  {id:1058, specimen:'Blood', category:'Metabolic & Genetic', name:'Phytanic Acid',               unit:'μmol/L',  low:0,    high:10,   description:'Elevated in Refsum disease; peroxisomal fatty acid oxidation defect'},
  {id:1059, specimen:'Blood', category:'Metabolic & Genetic', name:'Pristanic Acid',              unit:'μmol/L',  low:0,    high:2,    description:'Branched-chain fatty acid; peroxisomal biogenesis disorder marker'},
  {id:1060, specimen:'Blood', category:'Metabolic & Genetic', name:'Succinylacetone (Tyrosinemia)',unit:'μmol/L', low:0,    high:0.3,  description:'Pathognomonic for tyrosinemia type 1; NTBC monitoring'},

  // ── Respiratory & Pulmonary (extended) ───────────────────────
  {id:1061, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Osteopontin (Pulmonary)',  unit:'ng/mL',  low:0,    high:66,   description:'Elevated in sarcoidosis, mesothelioma and IPF'},
  {id:1062, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Soluble CD163 (sCD163)',   unit:'μg/L',   low:400,  high:1200, description:'Macrophage activation; elevated in MAS, IPF and ARDS'},
  {id:1063, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Pleiotrophin (PTN)',        unit:'ng/mL',  low:0,    high:7.5,  description:'Heparin-binding growth factor; elevated in mesothelioma and NSCLC'},
  {id:1064, specimen:'Blood', category:'Respiratory & Pulmonary', name:'HMGB1 (Alarmin)',          unit:'ng/mL',  low:0,    high:3,    description:'Damage-associated molecular pattern; elevated in ARDS and sepsis'},
  {id:1065, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Surfactant Protein A (SP-A)',unit:'ng/mL', low:0,   high:100,  description:'Innate immune protein; reduced in ARDS and surfactant deficiency'},

  // ── Allergy (extended) ───────────────────────────────────────
  {id:1066, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Aspergillus)', unit:'kU/L',  low:0,    high:0.35, description:'Aspergillus fumigatus IgE; allergic bronchopulmonary aspergillosis'},
  {id:1067, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Alternaria)',   unit:'kU/L',  low:0,    high:0.35, description:'Mold allergen IgE; asthma severity and hospitalisation risk'},
  {id:1068, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Birch Pollen)', unit:'kU/L', low:0,    high:0.35, description:'Birch Bet v 1 IgE; causes oral allergy syndrome with fruits'},
  {id:1069, specimen:'Blood', category:'Allergy & Sensitivity', name:'Basophil Activation Test',    unit:'%',     low:0,    high:5,    description:'CD63/CD203c expression after allergen stimulation; functional allergy test'},
  {id:1070, specimen:'Blood', category:'Allergy & Sensitivity', name:'Allergen-Specific IgG4',      unit:'mg/L',  low:0,    high:5,    description:'Blocking antibody; rises during successful immunotherapy'},

  // ── Urinalysis (extended) ─────────────────────────────────────
  {id:1071, specimen:'Urine', category:'Urinalysis', name:'Urine Glucose/Creatinine Ratio',       unit:'mg/g',   low:0,    high:15,   description:'Spot urine glucose corrected for creatinine concentration'},
  {id:1072, specimen:'Urine', category:'Urinalysis', name:'Urine Electrolyte Panel',              unit:'mEq/L',  low:0,    high:0,    description:'Na, K, Cl, phosphate in urine; nephrology acid-base workup'},
  {id:1073, specimen:'Urine', category:'Urinalysis', name:'Urine Urea Nitrogen (24h)',            unit:'g/24h',  low:12,   high:20,   description:'Urinary UN; dietary protein intake and nitrogen balance'},
  {id:1074, specimen:'Urine', category:'Urinalysis', name:'Urine Protein Electrophoresis (UPEP)', unit:'',       low:0,    high:0,    description:'Separates urinary proteins; detects Bence Jones protein'},
  {id:1075, specimen:'Urine', category:'Urinalysis', name:'Urine Immunofixation (UIFE)',          unit:'',       low:0,    high:0,    description:'Identifies monoclonal light chains; multiple myeloma diagnosis'},

  // ── Stool & GI Tests (extended) ───────────────────────────────
  {id:1076, specimen:'Stool', category:'Stool & GI Tests', name:'GI PCR Pathogen Panel',          unit:'',       low:0,    high:0,    description:'Multiplex PCR for 20+ bacterial, viral and parasitic pathogens'},
  {id:1077, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Short-Chain Fatty Acids',  unit:'μmol/g', low:60,   high:140,  description:'SCFA (butyrate, propionate, acetate); gut microbiome health marker'},
  {id:1078, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Microbiome Alpha Diversity',unit:'Shannon',low:3.0, high:5.0, description:'Gut microbial diversity index; lower in dysbiosis and IBD'},
  {id:1079, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Bile Acid Composition',    unit:'%',      low:0,    high:0,    description:'Primary vs secondary bile acids; altered in bile acid diarrhea'},
  {id:1080, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Cryptosporidium Antigen',  unit:'',       low:0,    high:0,    description:'Rapid antigen test for Cryptosporidium parvum; waterborne parasite'},

  // ── Semen Analysis (extended) ─────────────────────────────────
  {id:1081, specimen:'Semen', category:'Semen Analysis', name:'Acrosome Integrity (%)',           unit:'%',      low:80,   high:100,  description:'Acrosome-intact sperm percentage; required for egg penetration'},
  {id:1082, specimen:'Semen', category:'Semen Analysis', name:'Sperm Reactive Oxygen Species',    unit:'RLU',    low:0,    high:20,   description:'Sperm oxidative stress; elevated ROS causes DNA fragmentation'},
  {id:1083, specimen:'Semen', category:'Semen Analysis', name:'Seminal Carnitine',                unit:'μmol/ejac',low:0.8,high:28,  description:'Epididymal function marker; low in epididymal obstruction'},
  {id:1084, specimen:'Semen', category:'Semen Analysis', name:'Seminal Alpha-Glucosidase',        unit:'mU/ejac',low:11,  high:88,   description:'Epididymal function marker; low in obstructive azoospermia'},
  {id:1085, specimen:'Semen', category:'Semen Analysis', name:'Seminal Citric Acid',              unit:'μmol/ejac',low:10, high:40,  description:'Prostate-derived; marker of prostate secretory function'},

  // ── Synovial Fluid (extended) ─────────────────────────────────
  {id:1086, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Hyaluronic Acid',   unit:'mg/mL',  low:1,    high:4,    description:'Provides viscosity; markedly reduced in inflammatory arthritis'},
  {id:1087, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Lactic Acid',       unit:'mmol/L', low:1,    high:3,    description:'Elevated in septic arthritis; helps distinguish bacterial etiology'},
  {id:1088, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Complement (CH50)', unit:'%',      low:30,   high:70,   description:'Total complement in joint fluid; consumed in RA and lupus'},
  {id:1089, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Apatite Crystal Screen',     unit:'',       low:0,    high:0,    description:'Basic calcium phosphate crystals; destructive arthropathy'},
  {id:1090, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Biopsy (Cell Types)',unit:'',      low:0,    high:0,    description:'Histological classification of synovitis; pauci/fibro/diffuse types'},

  // ── Pleural & Peritoneal Fluid (extended) ─────────────────────
  {id:1091, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural NT-proBNP', unit:'pg/mL', low:0,   high:1500, description:'Elevated in cardiac pleural effusion; helps distinguish cause'},
  {id:1092, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Mesothelin', unit:'nM',   low:0,    high:1.0,  description:'Pleural mesothelin; mesothelioma pleural effusion marker'},
  {id:1093, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Triglycerides',unit:'mg/dL',low:0, high:50,   description:'Elevated >110 in chylothorax from lymphatic disruption'},
  {id:1094, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Creatinine', unit:'mg/dL', low:0,   high:1.5,  description:'Elevated in urinothorax (urine in pleural space)'},
  {id:1095, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Peritoneal CEA',    unit:'ng/mL',  low:0,    high:5,    description:'CEA in ascitic fluid; elevated in GI malignancy with peritoneal spread'},

  // ── Cardiac (extended additional) ────────────────────────────
  {id:1096, specimen:'Blood', category:'Cardiac Markers', name:'Aldosterone/Renin Ratio (ARR)',   unit:'ratio',  low:0,    high:30,   description:'Screening ratio for primary aldosteronism; >30 warrants workup'},
  {id:1097, specimen:'Blood', category:'Cardiac Markers', name:'Galectin-3 (Cardiac Fibrosis)',   unit:'ng/mL',  low:0,    high:17.8, description:'Macrophage-derived lectin; cardiac fibrosis and HF prognosis'},
  {id:1098, specimen:'Blood', category:'Cardiac Markers', name:'Suppression of Tumorigenicity 2', unit:'ng/mL',  low:0,    high:35,   description:'sST2; decoy receptor for IL-33; prognostic in heart failure'},
  {id:1099, specimen:'Blood', category:'Cardiac Markers', name:'Myeloperoxidase (MPO Cardiac)',   unit:'pmol/L', low:0,    high:470,  description:'Oxidative enzyme; unstable plaque and CV inflammation marker'},
  {id:1100, specimen:'Blood', category:'Cardiac Markers', name:'GDF-15 Cardiac Risk',             unit:'pg/mL',  low:0,    high:1200, description:'Growth differentiation factor-15; AF, HF and mortality risk'},

  // ─── NEW TESTS (1101–1300) ───────────────────────────────────

  // ── Advanced Lipid / Cardiovascular ──────────────────────────
  {id:1101, specimen:'Blood', category:'Lipid Profile', name:'ApoC-III (Apolipoprotein C-III)',   unit:'mg/dL',  low:6,    high:14,   description:'TG-rich lipoprotein regulator; elevated in hypertriglyceridemia'},
  {id:1102, specimen:'Blood', category:'Lipid Profile', name:'ApoE Genotype',                    unit:'',       low:0,    high:0,    description:'APOE2/3/4 alleles; APOE4 major Alzheimers and CVD risk factor'},
  {id:1103, specimen:'Blood', category:'Lipid Profile', name:'LDL Direct Measurement',           unit:'mg/dL',  low:0,    high:100,  description:'Directly measured LDL; accurate even with high triglycerides'},
  {id:1104, specimen:'Blood', category:'Lipid Profile', name:'Total/HDL Cholesterol Ratio',      unit:'ratio',  low:0,    high:4.0,  description:'Atherogenic index; below 4 is desirable for CVD risk'},
  {id:1105, specimen:'Blood', category:'Lipid Profile', name:'Cholesterol Absorption Markers',   unit:'μg/mL',  low:0,    high:3.5,  description:'Campesterol/sitosterol; assess cholesterol absorption efficiency'},
  {id:1106, specimen:'Blood', category:'Lipid Profile', name:'Cholesterol Synthesis Markers',    unit:'μg/mL',  low:0,    high:4.0,  description:'Lathosterol/desmosterol; assess endogenous cholesterol synthesis'},

  // ── Cardiac (advanced) ────────────────────────────────────────
  {id:1107, specimen:'Blood', category:'Cardiac Markers', name:'Troponin T (High Sensitivity)',  unit:'ng/L',   low:0,    high:14,   description:'hs-TnT; detects sub-clinical myocardial injury at very low levels'},
  {id:1108, specimen:'Blood', category:'Cardiac Markers', name:'Cardiac Troponin I (Chronic)',   unit:'ng/L',   low:0,    high:6,    description:'Chronic cTnI elevation in HF, CKD and extreme exercise'},
  {id:1109, specimen:'Blood', category:'Cardiac Markers', name:'Angiopoietin-2',                 unit:'ng/mL',  low:0,    high:3,    description:'Vascular destabilization marker; elevated in HF and sepsis'},
  {id:1110, specimen:'Blood', category:'Cardiac Markers', name:'Pregnancy-Associated Plasma P-B',unit:'ng/mL',  low:0,    high:10,   description:'PAPP-B; novel cardiac biomarker in ACS beyond PAPP-A'},
  {id:1111, specimen:'Blood', category:'Cardiac Markers', name:'Cardiac Biomarker Index (GRACE)',unit:'score',  low:0,    high:108,  description:'GRACE score risk stratification in ACS; predicts in-hospital mortality'},
  {id:1112, specimen:'Blood', category:'Cardiac Markers', name:'Fibroblast Activation Protein',  unit:'ng/mL',  low:0,    high:40,   description:'FAP; cardiac fibroblast activation; fibrosis and HF marker'},

  // ── Kidney (advanced) ─────────────────────────────────────────
  {id:1113, specimen:'Blood', category:'Kidney Function', name:'Uromodulin (Tamm-Horsfall)',     unit:'ng/mL',  low:100,  high:300,  description:'Most abundant urinary protein; tubular health and stone protection'},
  {id:1114, specimen:'Urine', category:'Kidney Function', name:'Uromodulin Excretion (Urine)',   unit:'mg/24h', low:20,   high:100,  description:'Low uromodulin predicts CKD progression and kidney stone risk'},
  {id:1115, specimen:'Blood', category:'Kidney Function', name:'Soluble Klotho (Kidney)',        unit:'pg/mL',  low:312,  high:1130, description:'Renal anti-aging hormone; sharply reduced in CKD stages 2-5'},
  {id:1116, specimen:'Blood', category:'Kidney Function', name:'Neutrophil Gelatinase NGAL x2',  unit:'ng/mL',  low:0,    high:150,  description:'Repeat NGAL for AKI confirmation; rising level confirms injury'},
  {id:1117, specimen:'Urine', category:'Kidney Function', name:'Kidney Injury Molecule-1 (Urine)',unit:'ng/mg creat',low:0,high:0.5,description:'Urinary KIM-1; sustained elevation confirms tubular AKI'},
  {id:1118, specimen:'Blood', category:'Kidney Function', name:'Chitinase-3-like Protein 1 (YKL)',unit:'ng/mL', low:0,   high:40,   description:'Renal inflammation marker; elevated in AKI and CKD fibrosis'},

  // ── Liver (advanced) ──────────────────────────────────────────
  {id:1119, specimen:'Blood', category:'Liver Function', name:'ELF Score (Enhanced Liver F.)',   unit:'score',  low:0,    high:7.7,  description:'HA + PIIINP + TIMP-1 composite; liver fibrosis risk staging'},
  {id:1120, specimen:'Blood', category:'Liver Function', name:'Hyaluronic Acid (HA)',            unit:'ng/mL',  low:0,    high:75,   description:'Liver sinusoidal function; ELF score component; elevated in cirrhosis'},
  {id:1121, specimen:'Blood', category:'Liver Function', name:'TIMP-1 (ELF Component)',          unit:'ng/mL',  low:0,    high:400,  description:'Tissue inhibitor of metalloproteinase-1; fibrosis marker in ELF'},
  {id:1122, specimen:'Blood', category:'Liver Function', name:'Mac-2 Binding Protein (M2BPGi)',  unit:'COI',    low:0,    high:1.0,  description:'Glycan biomarker; liver fibrosis staging; elevated in cirrhosis'},
  {id:1123, specimen:'Blood', category:'Liver Function', name:'Autotaxin (ATX)',                 unit:'mg/L',   low:0,    high:1.4,  description:'Lysophosphatidic acid producer; liver fibrosis and ICP in pregnancy'},
  {id:1124, specimen:'Blood', category:'Liver Function', name:'Cytokeratin-18 (M30/M65)',        unit:'U/L',    low:0,    high:200,  description:'Hepatocyte apoptosis marker; elevated in NASH and drug-induced liver injury'},

  // ── Hormones (advanced) ───────────────────────────────────────
  {id:1125, specimen:'Blood', category:'Hormones', name:'Cortisol (Random)',                     unit:'μg/dL',  low:5,    high:25,   description:'Random cortisol; useful for adrenal crisis assessment'},
  {id:1126, specimen:'Blood', category:'Hormones', name:'ACTH Stimulation Test (Post)',          unit:'μg/dL',  low:18,   high:30,   description:'Cortisol 30 min after Synacthen; >18 rules out adrenal insufficiency'},
  {id:1127, specimen:'Blood', category:'Hormones', name:'Low-Dose Dexamethasone Suppression',   unit:'μg/dL',  low:0,    high:1.8,  description:'Overnight DST; failure to suppress suggests Cushings syndrome'},
  {id:1128, specimen:'Blood', category:'Hormones', name:'11-Deoxycortisol',                     unit:'ng/dL',  low:0,    high:120,  description:'Cortisol precursor; elevated in CAH (11β-hydroxylase deficiency)'},
  {id:1129, specimen:'Blood', category:'Hormones', name:'Deoxycorticosterone (DOC)',             unit:'ng/dL',  low:2,    high:19,   description:'Mineralocorticoid precursor; elevated in CAH and adrenocortical tumors'},
  {id:1130, specimen:'Blood', category:'Hormones', name:'Aldosterone-to-Renin Ratio (Supine)',  unit:'ratio',  low:0,    high:20,   description:'Supine ARR; primary aldosteronism screening; >20 suspicious'},
  {id:1131, specimen:'Blood', category:'Hormones', name:'Salivary Cortisol (Midnight)',          unit:'nmol/L', low:0,    high:5,    description:'Late-night salivary cortisol; Cushings syndrome screening'},
  {id:1132, specimen:'Blood', category:'Hormones', name:'Chromogranin A (Adrenal)',              unit:'ng/mL',  low:0,    high:100,  description:'Pheochromocytoma and NET marker; elevated in adrenal tumors'},
  {id:1133, specimen:'Blood', category:'Hormones', name:'Catecholamines (Plasma)',               unit:'pg/mL',  low:0,    high:500,  description:'Epinephrine + norepinephrine; pheochromocytoma gold standard'},
  {id:1134, specimen:'Blood', category:'Hormones', name:'Free Metanephrines (Plasma)',           unit:'pmol/L', low:0,    high:90,   description:'Most sensitive test for pheochromocytoma; >3× ULN diagnostic'},

  // ── Autoimmune (advanced) ─────────────────────────────────────
  {id:1135, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Ribosomal P Ab',  unit:'U/mL',   low:0,    high:7,    description:'Lupus-specific; neuropsychiatric lupus and lupus hepatitis marker'},
  {id:1136, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Nucleosome Ab',   unit:'U/mL',   low:0,    high:20,   description:'SLE marker; correlates with disease activity and lupus nephritis'},
  {id:1137, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-C1q Antibody',    unit:'U/mL',   low:0,    high:15,   description:'Lupus nephritis activity marker; correlates with complement depletion'},
  {id:1138, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-PL-7 Antibody',   unit:'U/mL',   low:0,    high:7,    description:'Antisynthetase antibody; ILD-predominant inflammatory myopathy'},
  {id:1139, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-PL-12 Antibody',  unit:'U/mL',   low:0,    high:7,    description:'Antisynthetase Ab; ILD often without myositis; good prognosis'},
  {id:1140, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-OJ Antibody',     unit:'U/mL',   low:0,    high:7,    description:'Antisynthetase Ab; severe ILD with minimal myositis'},
  {id:1141, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-EJ Antibody',     unit:'U/mL',   low:0,    high:7,    description:'Antisynthetase Ab; myositis and ILD overlap syndrome'},
  {id:1142, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-Ku Antibody',     unit:'U/mL',   low:0,    high:7,    description:'PM/SSc overlap; inflammatory myopathy with scleroderma features'},
  {id:1143, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Anti-U1-RNP Antibody', unit:'U/mL',   low:0,    high:7,    description:'Mixed connective tissue disease (MCTD) hallmark antibody'},
  {id:1144, specimen:'Blood', category:'Autoimmune & Inflammation', name:'BAFF (B-cell Activating Factor)',unit:'pg/mL',low:0,high:500,description:'B-cell survival factor; elevated in SLE and Sjogrens syndrome'},

  // ── Oncology (advanced) ───────────────────────────────────────
  {id:1145, specimen:'Blood', category:'Oncology & Hematology', name:'PD-L1 Expression (Liquid)',unit:'%',      low:0,    high:0,    description:'PD-L1 on circulating tumor cells; immunotherapy response predictor'},
  {id:1146, specimen:'Blood', category:'Oncology & Hematology', name:'Tumor Mutational Burden',  unit:'mut/Mb', low:0,    high:0,    description:'TMB; high TMB (>10 mut/Mb) predicts immunotherapy response'},
  {id:1147, specimen:'Blood', category:'Oncology & Hematology', name:'Microsatellite Instability',unit:'',      low:0,    high:0,    description:'MSI-H; predicts response to pembrolizumab across tumor types'},
  {id:1148, specimen:'Blood', category:'Oncology & Hematology', name:'BRCA1 Methylation',        unit:'%',      low:0,    high:0,    description:'Epigenetic BRCA1 silencing; hereditary breast cancer alternative'},
  {id:1149, specimen:'Blood', category:'Oncology & Hematology', name:'Cell-Free RNA (cfRNA)',     unit:'',       low:0,    high:0,    description:'Liquid biopsy RNA; multi-cancer early detection research tool'},
  {id:1150, specimen:'Blood', category:'Oncology & Hematology', name:'Methylation-Based Cancer Screen',unit:'',  low:0,    high:0,    description:'cfDNA methylation patterns; multi-cancer early detection (e.g. Galleri)'},
  {id:1151, specimen:'Blood', category:'Oncology & Hematology', name:'CALR Mutation (MPN)',       unit:'',       low:0,    high:0,    description:'Calreticulin mutation; ET and MF when JAK2-negative'},
  {id:1152, specimen:'Blood', category:'Oncology & Hematology', name:'MPL Mutation (MPN)',        unit:'',       low:0,    high:0,    description:'Thrombopoietin receptor mutation; ET and MF when JAK2/CALR-negative'},
  {id:1153, specimen:'Blood', category:'Oncology & Hematology', name:'SF3B1 Mutation (MDS)',      unit:'',       low:0,    high:0,    description:'Spliceosome mutation in MDS with ring sideroblasts; good prognosis'},
  {id:1154, specimen:'Blood', category:'Oncology & Hematology', name:'ASXL1 Mutation (MDS/MPN)', unit:'',       low:0,    high:0,    description:'Chromatin regulator; adverse prognosis in MDS and MPN'},

  // ── Neurological (advanced) ───────────────────────────────────
  {id:1155, specimen:'CSF',   category:'Neurological Markers', name:'CSF p-Tau 217',              unit:'pg/mL',  low:0,    high:30,   description:'More specific Alzheimers CSF tau; superior to p-Tau181'},
  {id:1156, specimen:'Blood', category:'Neurological Markers', name:'Plasma p-Tau 217',           unit:'pg/mL',  low:0,    high:2.5,  description:'Blood p-Tau217; highest accuracy plasma Alzheimers biomarker'},
  {id:1157, specimen:'Blood', category:'Neurological Markers', name:'GFAP (Blood, Acute TBI)',    unit:'pg/mL',  low:0,    high:1000, description:'GFAP rises within 1h of TBI; FDA-cleared for head CT decision'},
  {id:1158, specimen:'Blood', category:'Neurological Markers', name:'UCH-L1 (Blood, Acute TBI)',  unit:'pg/mL',  low:0,    high:327,  description:'Neuronal marker; FDA-cleared with GFAP for concussion triage'},
  {id:1159, specimen:'Blood', category:'Neurological Markers', name:'Anti-VGCC Antibody',         unit:'pmol/L', low:0,    high:30,   description:'Voltage-gated calcium channel Ab; Lambert-Eaton myasthenic syndrome'},
  {id:1160, specimen:'Blood', category:'Neurological Markers', name:'Anti-AChR Antibody',         unit:'nmol/L', low:0,    high:0.4,  description:'Acetylcholine receptor Ab; positive in 85% of generalised MG'},
  {id:1161, specimen:'Blood', category:'Neurological Markers', name:'Anti-MuSK Antibody',         unit:'nmol/L', low:0,    high:0.05, description:'Muscle-specific kinase Ab; seronegative MG when AChR-negative'},
  {id:1162, specimen:'Blood', category:'Neurological Markers', name:'Anti-LRP4 Antibody',         unit:'',       low:0,    high:0,    description:'LDL receptor-related protein 4 Ab; double-seronegative MG'},
  {id:1163, specimen:'Blood', category:'Neurological Markers', name:'Anti-Titin Antibody',        unit:'',       low:0,    high:0,    description:'Titin Ab in MG; thymoma association and late-onset MG marker'},
  {id:1164, specimen:'Blood', category:'Neurological Markers', name:'CSF Biomarkers (AD Panel)',  unit:'',       low:0,    high:0,    description:'Amyloid 42, Tau, p-Tau combined CSF panel for Alzheimers diagnosis'},

  // ── Reproductive & Fertility (advanced) ───────────────────────
  {id:1165, specimen:'Blood', category:'Reproductive & Fertility', name:'Estradiol (IVF Monitoring)',unit:'pg/mL',low:200,high:3000, description:'E2 during IVF stimulation; rising levels confirm follicular response'},
  {id:1166, specimen:'Blood', category:'Reproductive & Fertility', name:'LH Surge Detection',     unit:'mIU/mL', low:25,   high:200,  description:'LH peak at ovulation; >25 indicates imminent ovulation (24-36h)'},
  {id:1167, specimen:'Blood', category:'Reproductive & Fertility', name:'Progesterone Day 21',     unit:'ng/mL',  low:7,    high:30,   description:'Mid-luteal confirmation of ovulation; >7 ng/mL confirms ovulation'},
  {id:1168, specimen:'Blood', category:'Reproductive & Fertility', name:'Testosterone (PCOS Screen)',unit:'ng/dL',low:15,  high:70,   description:'Total testosterone in females; elevated in PCOS and CAH'},
  {id:1169, specimen:'Blood', category:'Reproductive & Fertility', name:'AMH (Ovarian Reserve)',  unit:'ng/mL',  low:1.0,  high:3.5,  description:'AMH; best marker of ovarian reserve; low in DOR, high in PCOS'},
  {id:1170, specimen:'Blood', category:'Reproductive & Fertility', name:'AFC Estimate (Antral F.)',unit:'follicles',low:5, high:15,   description:'Antral follicle count surrogate; predicted from AFC sonography'},

  // ── Gastrointestinal (advanced) ───────────────────────────────
  {id:1171, specimen:'Stool', category:'Gastrointestinal', name:'Zonulin (Intestinal Permeability)',unit:'ng/mL', low:0,   high:30,   description:'Tight junction regulator; elevated in leaky gut and celiac disease'},
  {id:1172, specimen:'Blood', category:'Gastrointestinal', name:'Diamine Oxidase (DAO)',           unit:'U/mL',   low:3,    high:10,   description:'Histamine-degrading enzyme; low activity = histamine intolerance'},
  {id:1173, specimen:'Blood', category:'Gastrointestinal', name:'Histamine (Serum)',               unit:'nmol/L', low:0,    high:10,   description:'Biogenic amine; elevated in histamine intolerance and mastocytosis'},
  {id:1174, specimen:'Blood', category:'Gastrointestinal', name:'Tryptase (Post-Meal)',            unit:'μg/L',   low:0,    high:11.4, description:'Post-meal tryptase; mast cell activation in MCAS after eating'},
  {id:1175, specimen:'Stool', category:'Gastrointestinal', name:'Stool Lactoferrin (IBD)',        unit:'μg/g',   low:0,    high:7.2,  description:'Neutrophil marker; differentiates IBD from IBS (>7.2 = IBD)'},
  {id:1176, specimen:'Blood', category:'Gastrointestinal', name:'Anti-Saccharomyces IgG (ASCA)',  unit:'U/mL',   low:0,    high:25,   description:'ASCA IgG; Crohns disease marker; combined ASCA/pANCA improves accuracy'},
  {id:1177, specimen:'Blood', category:'Gastrointestinal', name:'Serum Gastrin-17',               unit:'pmol/L', low:0,    high:10,   description:'Antral function marker; low in gastric atrophy of the antrum'},
  {id:1178, specimen:'Blood', category:'Gastrointestinal', name:'Motilin (GI Motility)',           unit:'pg/mL',  low:0,    high:150,  description:'GI motility hormone; elevated in functional dyspepsia'},
  {id:1179, specimen:'Stool', category:'Gastrointestinal', name:'Pancreatic Exocrine Function (FE1)',unit:'μg/g', low:200,  high:500,  description:'Fecal elastase-1; <100 confirms severe exocrine pancreatic insufficiency'},
  {id:1180, specimen:'Blood', category:'Gastrointestinal', name:'Secretory IgA (Blood)',           unit:'mg/dL',  low:7,    high:40,   description:'Serum sIgA; mucosal immunity indicator; low in selective IgA deficiency'},

  // ── Infectious Disease (advanced) ────────────────────────────
  {id:1181, specimen:'Blood', category:'Infectious Disease', name:'Procalcitonin (Serial)',        unit:'ng/mL',  low:0,    high:0.1,  description:'Serial PCT; guides antibiotic de-escalation in sepsis (decline >80%)'},
  {id:1182, specimen:'Blood', category:'Infectious Disease', name:'Presepsin (sCD14-ST)',          unit:'pg/mL',  low:0,    high:317,  description:'Novel sepsis biomarker; rises before PCT and CRP'},
  {id:1183, specimen:'Blood', category:'Infectious Disease', name:'Supar (Soluble uPAR)',          unit:'ng/mL',  low:1,    high:3,    description:'Immune activation marker; elevated in sepsis and HIV; predicts mortality'},
  {id:1184, specimen:'Blood', category:'Infectious Disease', name:'Endotoxin (LPS) Assay',        unit:'EU/mL',  low:0,    high:0.06, description:'Gram-negative bacterial endotoxin; LAL assay for sepsis confirmation'},
  {id:1185, specimen:'Blood', category:'Infectious Disease', name:'Mannose-Binding Lectin (MBL)',  unit:'ng/mL',  low:1000, high:3000, description:'Innate immunity protein; deficiency increases susceptibility to infection'},
  {id:1186, specimen:'Blood', category:'Infectious Disease', name:'HHV-6 DNA (PCR)',               unit:'copies/mL',low:0,  high:0,    description:'Human Herpesvirus 6; encephalitis in transplant recipients'},
  {id:1187, specimen:'Blood', category:'Infectious Disease', name:'JC Virus Antibody Index',       unit:'index',  low:0,    high:0.9,  description:'JCV index; >0.9 with natalizumab = high PML risk in MS'},
  {id:1188, specimen:'Blood', category:'Infectious Disease', name:'Coccidioides IgM/IgG',         unit:'titer',  low:0,    high:4,    description:'Coccidioidomycosis (Valley Fever) antibody; endemic fungal infection'},
  {id:1189, specimen:'Blood', category:'Infectious Disease', name:'Histoplasma Antigen',           unit:'ng/mL',  low:0,    high:0,    description:'Histoplasma capsulatum urine/serum antigen; endemic fungal infection'},
  {id:1190, specimen:'Blood', category:'Infectious Disease', name:'Blastomyces Antigen (Urine)',   unit:'ng/mL',  low:0,    high:0.9,  description:'Blastomyces antigen for pulmonary and disseminated blastomycosis'},

  // ── Metabolic & Genetic (advanced) ───────────────────────────
  {id:1191, specimen:'Blood', category:'Metabolic & Genetic', name:'Tandem Mass Spectrometry Panel',unit:'',      low:0,    high:0,    description:'MS/MS newborn screen; detects 30+ inborn errors of metabolism'},
  {id:1192, specimen:'Blood', category:'Metabolic & Genetic', name:'Lysosomal Enzyme Panel (6)',   unit:'nmol/h/mg',low:0, high:0,    description:'6-enzyme panel: GBA, GLA, GALC, ASAH, NPC1, HEXA'},
  {id:1193, specimen:'Blood', category:'Metabolic & Genetic', name:'Whole Exome Sequencing (WES)', unit:'',       low:0,    high:0,    description:'Sequencing all protein-coding genes; rare disease genetic diagnosis'},
  {id:1194, specimen:'Blood', category:'Metabolic & Genetic', name:'Chromosomal Microarray (CMA)',  unit:'',       low:0,    high:0,    description:'CNV detection; intellectual disability and congenital anomalies'},
  {id:1195, specimen:'Blood', category:'Metabolic & Genetic', name:'Fragile X (FMR1) CGG Repeat',  unit:'repeats',low:6,   high:44,   description:'FMR1 CGG repeats; >200 diagnostic for Fragile X syndrome'},
  {id:1196, specimen:'Blood', category:'Metabolic & Genetic', name:'Telomere Length (qPCR)',        unit:'T/S ratio',low:0.6,high:1.5, description:'Relative telomere length; short telomeres in dyskeratosis congenita'},
  {id:1197, specimen:'Blood', category:'Metabolic & Genetic', name:'mtDNA Copy Number',             unit:'copies/cell',low:200,high:800,description:'Mitochondrial DNA quantity; low in mitochondrial depletion syndromes'},
  {id:1198, specimen:'Blood', category:'Metabolic & Genetic', name:'Lactate/Pyruvate Ratio',        unit:'ratio',  low:10,   high:20,   description:'L/P ratio; >20 suggests mitochondrial disease (OXPHOS defect)'},
  {id:1199, specimen:'Blood', category:'Metabolic & Genetic', name:'Coenzyme Q10 (Reduced)',        unit:'μg/mL',  low:0.4,  high:1.91, description:'Ubiquinol; mitochondrial electron transport; low in primary CoQ10 deficiency'},
  {id:1200, specimen:'Blood', category:'Metabolic & Genetic', name:'Fatty Acid Oxidation (In vitro)',unit:'',      low:0,    high:0,    description:'In vitro probe assay for MCAD, LCHAD, VLCAD deficiencies'},

  // ── Nutritional (advanced) ────────────────────────────────────
  {id:1201, specimen:'Blood', category:'Nutritional Markers', name:'Phosphatidylcholine (PC)',     unit:'mg/dL',  low:130,  high:250,  description:'Major cell membrane phospholipid; liver function and bile secretion'},
  {id:1202, specimen:'Blood', category:'Nutritional Markers', name:'Linoleic Acid (LA, Omega-6)',  unit:'%',      low:18,   high:32,   description:'Most abundant dietary polyunsaturated fatty acid in cell membranes'},
  {id:1203, specimen:'Blood', category:'Nutritional Markers', name:'Alpha-Linolenic Acid (ALA)',   unit:'%',      low:0.2,  high:0.8,  description:'Plant-derived omega-3; precursor to EPA and DHA'},
  {id:1204, specimen:'Blood', category:'Nutritional Markers', name:'DHA (Docosahexaenoic Acid)',   unit:'%',      low:2,    high:6,    description:'Marine omega-3; brain and retinal development; anti-inflammatory'},
  {id:1205, specimen:'Blood', category:'Nutritional Markers', name:'EPA (Eicosapentaenoic Acid)',  unit:'%',      low:0.5,  high:2,    description:'Marine omega-3; anti-inflammatory; reduces TG levels'},
  {id:1206, specimen:'Blood', category:'Nutritional Markers', name:'Trans Fatty Acid Level',       unit:'%',      low:0,    high:1,    description:'Industrial trans fats; elevated with processed food consumption'},
  {id:1207, specimen:'Blood', category:'Nutritional Markers', name:'Myristic Acid (C14:0)',        unit:'%',      low:0.4,  high:1.2,  description:'Saturated fatty acid; coconut and dairy source; raises LDL'},
  {id:1208, specimen:'Blood', category:'Nutritional Markers', name:'Palmitic Acid (C16:0)',        unit:'%',      low:20,   high:30,   description:'Most abundant saturated FA; elevated in high-carbohydrate diets'},
  {id:1209, specimen:'Blood', category:'Nutritional Markers', name:'Oleic Acid (C18:1, Omega-9)', unit:'%',      low:18,   high:28,   description:'Monounsaturated FA; Mediterranean diet marker; cardioprotective'},
  {id:1210, specimen:'Blood', category:'Nutritional Markers', name:'Arachidic Acid (C20:0)',       unit:'%',      low:0.1,  high:0.3,  description:'Very long chain saturated FA; peanut and fish oil source'},

  // ── Dermatology (advanced) ────────────────────────────────────
  {id:1211, specimen:'Blood', category:'Dermatology & Skin', name:'Serum Tryptase (Mastocytosis)', unit:'μg/L',  low:0,    high:11.4, description:'Persistently elevated baseline tryptase; systemic mastocytosis marker'},
  {id:1212, specimen:'Blood', category:'Dermatology & Skin', name:'KIT D816V Mutation (c-KIT)',    unit:'%',      low:0,    high:0,    description:'Activating mutation in systemic mastocytosis; sensitive detection by NGS'},
  {id:1213, specimen:'Blood', category:'Dermatology & Skin', name:'IL-31 (Atopic Dermatitis)',     unit:'pg/mL',  low:0,    high:15,   description:'Itch-inducing cytokine; elevated in atopic dermatitis; dupilumab target'},
  {id:1214, specimen:'Blood', category:'Dermatology & Skin', name:'TARC/CCL17 (Atopic Derm.)',     unit:'pg/mL',  low:0,    high:450,  description:'Thymus and activation-regulated chemokine; AD disease activity marker'},
  {id:1215, specimen:'Blood', category:'Dermatology & Skin', name:'Periostin (Eosinophilic Skin)', unit:'ng/mL',  low:0,    high:25,   description:'Th2 biomarker in atopic dermatitis and eosinophilic conditions'},
  {id:1216, specimen:'Blood', category:'Dermatology & Skin', name:'Eotaxin-3 (CCL26)',             unit:'pg/mL',  low:0,    high:100,  description:'Eosinophil chemoattractant; elevated in eosinophilic esophagitis'},
  {id:1217, specimen:'Blood', category:'Dermatology & Skin', name:'IgE (Hyper-IgE Syndrome)',      unit:'IU/mL',  low:0,    high:2000, description:'Markedly elevated (>2000) in Job syndrome / Hyper-IgE syndrome'},
  {id:1218, specimen:'Blood', category:'Dermatology & Skin', name:'Angioedema Screen (C4/C1-INH)', unit:'mg/dL',  low:0,    high:0,    description:'Low C4 + C1-INH level or function diagnostic for HAE'},

  // ── Drug Monitoring (advanced) ────────────────────────────────
  {id:1219, specimen:'Blood', category:'Drug Monitoring', name:'Secukinumab (Trough Level)',       unit:'μg/mL',  low:10,   high:30,   description:'IL-17A inhibitor; trough level for psoriasis and AS monitoring'},
  {id:1220, specimen:'Blood', category:'Drug Monitoring', name:'Ixekizumab (Anti-Drug Ab)',        unit:'',       low:0,    high:0,    description:'Anti-drug antibody to ixekizumab; secondary treatment failure cause'},
  {id:1221, specimen:'Blood', category:'Drug Monitoring', name:'Rituximab Serum Level',            unit:'μg/mL',  low:0,    high:25,   description:'Anti-CD20 level; guides re-dosing in ANCA vasculitis and lymphoma'},
  {id:1222, specimen:'Blood', category:'Drug Monitoring', name:'Belimumab (Trough)',               unit:'μg/mL',  low:5,    high:20,   description:'Anti-BAFF; lupus biologic; trough level monitoring'},
  {id:1223, specimen:'Blood', category:'Drug Monitoring', name:'Tofacitinib (JAK inhibitor)',      unit:'ng/mL',  low:0,    high:50,   description:'JAK1/3 inhibitor; RA and IBD TDM; monitor CBC and infection risk'},
  {id:1224, specimen:'Blood', category:'Drug Monitoring', name:'Baricitinib (Plasma Level)',       unit:'ng/mL',  low:0,    high:40,   description:'JAK1/2 inhibitor; RA and alopecia areata treatment monitoring'},
  {id:1225, specimen:'Blood', category:'Drug Monitoring', name:'Upadacitinib (Plasma)',            unit:'ng/mL',  low:0,    high:80,   description:'Selective JAK1 inhibitor; RA, PsA, and UC TDM'},
  {id:1226, specimen:'Blood', category:'Drug Monitoring', name:'Apixaban (Anti-Xa Calibrated)',    unit:'ng/mL',  low:0,    high:171,  description:'DOAC level; peak 2-4h post-dose; trough before next dose'},
  {id:1227, specimen:'Blood', category:'Drug Monitoring', name:'Rivaroxaban (Anti-Xa Calibrated)', unit:'ng/mL',  low:0,    high:270,  description:'DOAC level; useful in bleeding, thrombosis or renal failure'},
  {id:1228, specimen:'Blood', category:'Drug Monitoring', name:'Dabigatran (Plasma Level)',        unit:'ng/mL',  low:0,    high:180,  description:'Direct thrombin inhibitor level; Hemoclot or LC-MS/MS method'},

  // ── Allergy (advanced) ────────────────────────────────────────
  {id:1229, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Peach Pru p 3)',unit:'kU/L',  low:0,   high:0.35, description:'LTP allergen; systemic reaction risk from peach and tree fruits'},
  {id:1230, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Apple Mal d 1)',unit:'kU/L',  low:0,   high:0.35, description:'PR-10 allergen; oral allergy syndrome in birch-sensitised patients'},
  {id:1231, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Peanut Ara h 2)',unit:'kU/L', low:0,  high:0.35, description:'Peanut storage protein; high risk for systemic anaphylaxis'},
  {id:1232, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Walnut Jug r 1)',unit:'kU/L', low:0,  high:0.35, description:'Walnut 2S albumin; systemic anaphylaxis risk from tree nuts'},
  {id:1233, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Shrimp Pen a 1)',unit:'kU/L', low:0,  high:0.35, description:'Tropomyosin allergen in shrimp; cross-reactive with dust mite'},
  {id:1234, specimen:'Blood', category:'Allergy & Sensitivity', name:'Specific IgE (Latex Hev b 5)',unit:'kU/L',  low:0,  high:0.35, description:'Major latex allergen; risk of intraoperative anaphylaxis'},
  {id:1235, specimen:'Blood', category:'Allergy & Sensitivity', name:'Aeroallergen IgE Panel',     unit:'kU/L',   low:0,  high:0.35, description:'Comprehensive panel: pollen, mold, dust mite, pet dander, cockroach'},
  {id:1236, specimen:'Blood', category:'Allergy & Sensitivity', name:'Food Allergy IgE Panel',     unit:'kU/L',   low:0,  high:0.35, description:'Standard food panel: milk, egg, peanut, wheat, soy, fish, shellfish'},

  // ── Bone Markers (advanced) ───────────────────────────────────
  {id:1237, specimen:'Blood', category:'Bone Markers', name:'Sclerostin (Osteocyte Marker)',       unit:'pmol/L', low:0,   high:60,   description:'Wnt inhibitor from osteocytes; elevated with immobility and osteoporosis'},
  {id:1238, specimen:'Blood', category:'Bone Markers', name:'Wnt Inhibitor (Dickkopf-1)',          unit:'ng/mL',  low:0,   high:80,   description:'DKK-1; elevated in multiple myeloma bone disease and aging'},
  {id:1239, specimen:'Blood', category:'Bone Markers', name:'Collagen Type I Alpha-1 (COL1A1)',    unit:'',       low:0,   high:0,    description:'Genetic testing for COL1A1/COL1A2 variants; osteogenesis imperfecta'},
  {id:1240, specimen:'Blood', category:'Bone Markers', name:'Bone Alkaline Phosphatase (BAP)',     unit:'U/L',    low:11,  high:43,   description:'Bone-specific ALP isoenzyme; osteoblast activity and bone formation'},
  {id:1241, specimen:'Blood', category:'Bone Markers', name:'Osteocalcin (Mid-Molecule)',          unit:'ng/mL',  low:11,  high:48,   description:'Bone Gla protein; secreted by osteoblasts; bone formation marker'},
  {id:1242, specimen:'Blood', category:'Bone Markers', name:'TRAP-5b (Osteoclast)',                unit:'U/L',    low:0,   high:4.2,  description:'Tartrate-resistant acid phosphatase-5b; osteoclast bone resorption marker'},

  // ── Respiratory (advanced) ────────────────────────────────────
  {id:1243, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Anti-Synthetase Antibody Panel',unit:'U/mL',low:0,high:7,  description:'Full panel: Jo-1, PL-7, PL-12, EJ, OJ, KS, Ha, Zo; ILD myositis'},
  {id:1244, specimen:'Blood', category:'Respiratory & Pulmonary', name:'KL-6 (ILD Severity)',       unit:'U/mL',   low:0,  high:500,  description:'Mucin KL-6; severity and monitoring of ILD including SSc-ILD'},
  {id:1245, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Anti-MDA5 (ILD-Myositis)', unit:'U/mL',   low:0,  high:7,    description:'Rapidly progressive ILD in dermatomyositis; high mortality risk'},
  {id:1246, specimen:'Blood', category:'Respiratory & Pulmonary', name:'IL-33 (Type 2 Inflammation)',unit:'pg/mL', low:0,  high:3,    description:'Alarmin cytokine; initiates eosinophilic airway inflammation in asthma'},
  {id:1247, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Fractalkine (CX3CL1)',      unit:'pg/mL',  low:0,  high:500,  description:'Chemokine; elevated in pulmonary hypertension and ILD'},
  {id:1248, specimen:'Blood', category:'Respiratory & Pulmonary', name:'Exhaled NO (FeNO) Prediction',unit:'ppb',  low:0, high:25,   description:'Surrogate FeNO estimate from blood IL-13/IgE; asthma phenotyping'},

  // ── Stool (advanced) ──────────────────────────────────────────
  {id:1249, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Calprotectin Serial',      unit:'μg/g',   low:0,   high:50,   description:'Serial calprotectin; monitoring IBD remission and flare prediction'},
  {id:1250, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Human DNA (colon cancer)', unit:'',       low:0,   high:0,    description:'Cologuard component; hypermethylated BMP3/NDRG4 for CRC screening'},
  {id:1251, specimen:'Stool', category:'Stool & GI Tests', name:'Stool KRAS Mutation',            unit:'',       low:0,   high:0,    description:'Cologuard component; KRAS mutations in shed colorectal cancer cells'},
  {id:1252, specimen:'Stool', category:'Stool & GI Tests', name:'Stool Heme / Haemoglobin',       unit:'ng/mL',  low:0,   high:50,   description:'Quantitative haemoglobin; improved sensitivity over guaiac FOB'},
  {id:1253, specimen:'Stool', category:'Stool & GI Tests', name:'Mucosal Healing Score (Calp.)',  unit:'μg/g',   low:0,   high:50,   description:'Calprotectin <50 strongly predicts endoscopic mucosal healing in IBD'},
  {id:1254, specimen:'Stool', category:'Stool & GI Tests', name:'Fecal Lysozyme',                 unit:'μg/g',   low:0,   high:12,   description:'Macrophage enzyme in stool; complements calprotectin in IBD assessment'},

  // ── Synovial (advanced) ───────────────────────────────────────
  {id:1255, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Anti-CCP',          unit:'U/mL',   low:0,   high:7,    description:'Anti-CCP in synovial fluid; localised RA autoimmunity marker'},
  {id:1256, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial IL-17',             unit:'pg/mL',  low:0,   high:30,   description:'IL-17 in synovial fluid; elevated in ankylosing spondylitis and PsA'},
  {id:1257, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial TNF-alpha',         unit:'pg/mL',  low:0,   high:20,   description:'TNF-alpha in joint fluid; drives synovitis in RA and PsA'},
  {id:1258, specimen:'Joint Fluid', category:'Synovial Fluid', name:'Synovial Adenosine Deaminase',unit:'U/L',   low:0,   high:30,   description:'ADA in joint fluid; elevated in tuberculous arthritis'},

  // ── Body Fluid (advanced) ─────────────────────────────────────
  {id:1259, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Hematocrit',unit:'%',     low:0,   high:2,    description:'Pleural blood content; >50% of serum Hct = haemothorax'},
  {id:1260, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pleural Amylase (Oesophageal)',unit:'U/L',low:0,high:160,description:'Pleural amylase; markedly elevated in oesophageal rupture (salivary type)'},
  {id:1261, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Ascites Bilirubin',unit:'mg/dL',  low:0,   high:6,    description:'Ascitic bilirubin; elevated >6 in bilious ascites from bile leak'},
  {id:1262, specimen:'Body Fluid', category:'Pleural & Peritoneal Fluid', name:'Pericardial Glucose',unit:'mg/dL',low:60,  high:110,  description:'Pericardial fluid glucose; low in bacterial and rheumatoid pericarditis'},

  // ── CSF (advanced) ────────────────────────────────────────────
  {id:1263, specimen:'CSF', category:'CSF Analysis', name:'CSF Visinin-like Protein (VILIP-1)',   unit:'pg/mL',  low:0,   high:200,  description:'Neuronal calcium sensor; Alzheimers and CJD marker in CSF'},
  {id:1264, specimen:'CSF', category:'CSF Analysis', name:'CSF Chitinase-1 (CHIT1)',              unit:'ng/mL',  low:0,   high:30,   description:'Macrophage/microglia activation; ALS and CNS infection marker'},
  {id:1265, specimen:'CSF', category:'CSF Analysis', name:'CSF S100B Level',                      unit:'ng/L',   low:0,   high:40,   description:'CSF S100B; astrocyte damage; elevated in bacterial meningitis and TBI'},
  {id:1266, specimen:'CSF', category:'CSF Analysis', name:'CSF Osteopontin',                      unit:'ng/mL',  low:0,   high:80,   description:'Elevated in MS, NMO and CNS lymphoma; helps differential diagnosis'},
  {id:1267, specimen:'CSF', category:'CSF Analysis', name:'CSF CHI3L1 (YKL-40)',                  unit:'ng/mL',  low:0,   high:100,  description:'Microglial marker; predicts MS conversion in clinically isolated syndrome'},

  // ── Semen (advanced) ──────────────────────────────────────────
  {id:1268, specimen:'Semen', category:'Semen Analysis', name:'Hyaluronan Binding Assay (HBA)',   unit:'%',      low:65,  high:100,  description:'Mature sperm selection; HBA >65% predicts better ICSI outcome'},
  {id:1269, specimen:'Semen', category:'Semen Analysis', name:'Sperm Chromatin Structure (SCSA)', unit:'DFI%',   low:0,   high:15,   description:'DNA fragmentation by flow cytometry; DFI >25% predicts IVF failure'},
  {id:1270, specimen:'Semen', category:'Semen Analysis', name:'Sperm Mitochondrial Function',    unit:'ATP ratio',low:0.8,high:1.2, description:'MMP membrane potential; low ATP indicates mitochondrial dysfunction'},

  // ── Pediatric (advanced) ──────────────────────────────────────
  {id:1271, specimen:'Blood', category:'Pediatric Reference', name:'IgA (Infant 3-12 months)',    unit:'mg/dL',  low:3,   high:66,   description:'Normal IgA range for infants; low initially due to mucosal immaturity'},
  {id:1272, specimen:'Blood', category:'Pediatric Reference', name:'IgG (Child 1-5 years)',       unit:'mg/dL',  low:345, high:1236, description:'IgG range for toddlers and preschool children'},
  {id:1273, specimen:'Blood', category:'Pediatric Reference', name:'IgM (Child 2-12 years)',      unit:'mg/dL',  low:43,  high:207,  description:'IgM range for school-age children'},
  {id:1274, specimen:'Blood', category:'Pediatric Reference', name:'Complement C3 (Pediatric)',   unit:'mg/dL',  low:77,  high:195,  description:'C3 complement in children; lower than adults; rises to adult levels by ~12'},
  {id:1275, specimen:'Blood', category:'Pediatric Reference', name:'Ferritin (Child 5-12 years)', unit:'ng/mL',  low:7,   high:84,   description:'Iron stores in school-age children; lower than adults'},
  {id:1276, specimen:'Blood', category:'Pediatric Reference', name:'Uric Acid (Pediatric)',       unit:'mg/dL',  low:2.0, high:5.5,  description:'Uric acid in children; lower than adults; elevated in Lesch-Nyhan'},
  {id:1277, specimen:'Blood', category:'Pediatric Reference', name:'LDH (Pediatric)',             unit:'U/L',    low:170, high:580,  description:'LDH in children; higher than adults due to rapid cell turnover'},
  {id:1278, specimen:'Blood', category:'Pediatric Reference', name:'CK (Pediatric)',              unit:'U/L',    low:30,  high:220,  description:'Creatine kinase in children; slightly higher than adults'},

  // ── Blood Sugar (advanced) ────────────────────────────────────
  {id:1279, specimen:'Blood', category:'Blood Sugar', name:'Oral Glucose Tolerance Test (2h)',    unit:'mg/dL',  low:0,   high:140,  description:'OGTT 2-hour glucose; >200 diagnostic for diabetes; 140-199 = IGT'},
  {id:1280, specimen:'Blood', category:'Blood Sugar', name:'OGTT 1-hour Glucose',                unit:'mg/dL',  low:0,   high:155,  description:'1-hour OGTT; >155 mg/dL identifies high T2DM conversion risk'},
  {id:1281, specimen:'Blood', category:'Blood Sugar', name:'Gestational Diabetes Screen (GDM)',  unit:'mg/dL',  low:0,   high:140,  description:'1-hour 50g GCT; >140 requires 3-hour OGTT confirmation'},
  {id:1282, specimen:'Blood', category:'Blood Sugar', name:'Beta-Hydroxybutyrate (Ketones)',      unit:'mmol/L', low:0,   high:0.6,  description:'Primary ketone body; >3 mmol/L with hyperglycaemia = DKA'},
  {id:1283, specimen:'Blood', category:'Blood Sugar', name:'Insulin Antibody (IAA)',              unit:'nU/mL',  low:0,   high:0.4,  description:'Insulin autoantibody; first appearing Ab in pre-type 1 diabetes'},
  {id:1284, specimen:'Blood', category:'Blood Sugar', name:'GAD65 Antibody (Type 1 DM)',         unit:'U/mL',   low:0,   high:10,   description:'Glutamic acid decarboxylase Ab; most sensitive type 1 diabetes marker'},
  {id:1285, specimen:'Blood', category:'Blood Sugar', name:'IA-2 Antibody (Islet Antigen)',       unit:'U/mL',   low:0,   high:7.5,  description:'Protein tyrosine phosphatase Ab; type 1 diabetes auto-antigen'},
  {id:1286, specimen:'Blood', category:'Blood Sugar', name:'ZnT8 Antibody',                       unit:'U/mL',   low:0,   high:15,   description:'Zinc transporter 8 Ab; type 1 diabetes; negative in T2DM and MODY'},

  // ── Toxicology (advanced) ─────────────────────────────────────
  {id:1287, specimen:'Blood', category:'Toxicology', name:'Valproic Acid (Free Level)',           unit:'μg/mL',  low:6,   high:22,   description:'Free (unbound) valproic acid; important in hypoalbuminaemia'},
  {id:1288, specimen:'Blood', category:'Toxicology', name:'Phenytoin (Free Level)',               unit:'μg/mL',  low:1,   high:2,    description:'Free phenytoin; essential in patients with altered protein binding'},
  {id:1289, specimen:'Urine', category:'Toxicology', name:'Synthetic Cannabinoid Screen',         unit:'',       low:0,   high:0,    description:'K2/Spice; synthetic CB1 agonists; not detected by standard THC screen'},
  {id:1290, specimen:'Urine', category:'Toxicology', name:'Fentanyl and Analogues Screen',        unit:'ng/mL',  low:0,   high:0,    description:'Fentanyl; not detected by standard opiate screen; requires LC-MS/MS'},
  {id:1291, specimen:'Blood', category:'Toxicology', name:'Paraquat (Herbicide)',                 unit:'mg/L',   low:0,   high:0.1,  description:'Paraquat poisoning; acute lung injury; >0.1 mg/L poor prognosis'},
  {id:1292, specimen:'Blood', category:'Toxicology', name:'Methotrexate (Toxic Level 48h)',       unit:'μmol/L', low:0,   high:1,    description:'MTX at 48h; >1 μmol/L requires leucovorin rescue therapy'},
  {id:1293, specimen:'Blood', category:'Toxicology', name:'Digoxin (Toxic Level)',                unit:'ng/mL',  low:0,   high:2.0,  description:'Digoxin level; >2.0 ng/mL with symptoms = toxicity; >4 = severe'},

  // ── Miscellaneous ─────────────────────────────────────────────
  {id:1294, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Leptin (Obesity Screen)',unit:'ng/mL', low:4,   high:25,   description:'Adipokine; high in obesity; predicts metabolic syndrome risk'},
  {id:1295, specimen:'Blood', category:'Proteins & Immunoglobulins', name:'Adiponectin (Cardio)',  unit:'μg/mL',  low:5,   high:30,   description:'Insulin-sensitising adipokine; low in obesity and type 2 diabetes'},
  {id:1296, specimen:'Blood', category:'Autoimmune & Inflammation', name:'CRP/Albumin Ratio',      unit:'ratio',  low:0,   high:0.4,  description:'Inflammation-nutrition index; >0.4 predicts complications in ICU'},
  {id:1297, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Neutrophil/Lymphocyte Ratio',unit:'ratio',low:1, high:3,    description:'NLR; >5 indicates systemic inflammation; >10 = sepsis or cancer'},
  {id:1298, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Platelet/Lymphocyte Ratio',unit:'ratio',low:50, high:150,  description:'PLR; >200 associated with poor prognosis in cancer and inflammation'},
  {id:1299, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Monocyte/Lymphocyte Ratio',unit:'ratio',low:0.1,high:0.4, description:'MLR; elevated in systemic inflammation and malignancy workup'},
  {id:1300, specimen:'Blood', category:'Autoimmune & Inflammation', name:'Lymphocyte/CRP Ratio',   unit:'ratio',  low:10,  high:50,   description:'LCR; lower values indicate higher inflammation burden in ICU patients'},
];

// Notify app that data is ready
window._dataReady = true;
document.dispatchEvent(new Event('dataReady'));
console.log('tests-data.js v' + window.DATA_VERSION + ' loaded: ' + window.ALL_TESTS.length + ' tests across ' + Object.keys(window.CAT_META).length + ' categories');
