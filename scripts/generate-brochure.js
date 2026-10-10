const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../public/downloads/DDTSDI-School-of-Skills-Brochure.pdf');
const campusImagePath = path.join(__dirname, '../public/images/DDTSDI_Campus_image.jpeg');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
  bufferPages: true,
  autoFirstPage: false
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const NAVY = '#0B2545';
const ORANGE = '#F4791F';
const DARK_SLATE = '#1E293B';
const SLATE_GRAY = '#475569';
const LIGHT_BG = '#F8FAFC';
const BORDER_COLOR = '#CBD5E1';
const WHITE = '#FFFFFF';

function drawHeader(doc, pageTitle) {
  doc.rect(45, 30, 505, 35).fill(NAVY);
  doc.fontSize(10).fillColor(WHITE).font('Helvetica-Bold')
    .text('DURGA DULARI TEXTILE SKILL DEVELOPMENT INSTITUTE (DDTSDI)', 55, 38, { width: 340, lineBreak: false });
  doc.fontSize(8).fillColor(ORANGE).font('Helvetica-Bold')
    .text('BHOPAL (M.P.) • SKILL MISSION', 55, 51, { width: 340, lineBreak: false });
  doc.fontSize(9).fillColor(WHITE).font('Helvetica-Bold')
    .text(pageTitle, 350, 43, { width: 190, align: 'right' });
  doc.y = 80;
}

function drawFooter(doc, pageNum) {
  doc.rect(45, 785, 505, 25).fill('#F1F5F9');
  doc.fontSize(7.5).fillColor(SLATE_GRAY).font('Helvetica')
    .text('Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential & CSR Aligned', 55, 792, { width: 380 });
  doc.fontSize(8).fillColor(NAVY).font('Helvetica-Bold')
    .text(`Page ${pageNum}`, 450, 792, { width: 90, align: 'right' });
}

// ══════════════════════════════════════════════════════════════════════════
// PAGE 1: COVER PAGE
// ══════════════════════════════════════════════════════════════════════════
doc.addPage();

// Background Header Bar
doc.rect(45, 40, 505, 120).fill(NAVY);

// Small Tag
doc.rect(55, 52, 180, 16).fill(ORANGE);
doc.fontSize(8).fillColor(WHITE).font('Helvetica-Bold')
  .text('OFFICIAL INSTITUTIONAL BROCHURE', 60, 56);

// Main Cover Title
doc.fontSize(18).fillColor(WHITE).font('Helvetica-Bold')
  .text('DURGA DULARI TEXTILE SKILL', 55, 76);
doc.fontSize(18).fillColor(ORANGE).font('Helvetica-Bold')
  .text('DEVELOPMENT INSTITUTE (DDTSDI)', 55, 98);
doc.fontSize(9).fillColor('#94A3B8').font('Helvetica')
  .text('Comprehensive Campus Infrastructure, Master Blueprint & Vocational Training Curriculum', 55, 122);

// Subtitle Box
doc.rect(45, 165, 505, 26).fill('#F1F5F9');
doc.fontSize(8.5).fillColor(NAVY).font('Helvetica-Bold')
  .text('PROMOTED BY DURGA DULARI ENTERPRISES • BHOPAL, MADHYA PRADESH', 55, 173);
doc.fontSize(8.5).fillColor(ORANGE).font('Helvetica-Bold')
  .text('2025–26 CSR EDITION', 430, 173, { align: 'right', width: 110 });

// Embedded Campus Image
let imageY = 200;
if (fs.existsSync(campusImagePath)) {
  doc.rect(45, imageY, 505, 275).fill('#030E1C');
  doc.image(campusImagePath, 47, imageY + 2, { fit: [501, 271], align: 'center', valign: 'center' });
  doc.rect(45, imageY, 505, 275).lineWidth(1.5).stroke(BORDER_COLOR);
}

// Key Institutional Statistics Grid
const statY = 485;
const statBoxWidth = 120;
const statGap = 8;

const stats = [
  { val: '2-Acre', lbl: 'Campus Land Area', sub: '8,094 sq.m. Total' },
  { val: '2,400 sq.m.', lbl: 'Built-up Infrastructure', sub: 'Admin + Academic + Labs' },
  { val: '12 Labs', lbl: 'Specialized Training', sub: 'Spinning, PLC, Electrical' },
  { val: '600+', lbl: 'Annual Trainees', sub: '100% Mill Placements' }
];

stats.forEach((s, idx) => {
  const x = 45 + idx * (statBoxWidth + statGap);
  doc.rect(x, statY, statBoxWidth, 65).fill(LIGHT_BG);
  doc.rect(x, statY, statBoxWidth, 65).lineWidth(1).stroke(BORDER_COLOR);
  doc.rect(x, statY, statBoxWidth, 3).fill(ORANGE);

  doc.fontSize(13).fillColor(NAVY).font('Helvetica-Bold').text(s.val, x + 6, statY + 12, { width: statBoxWidth - 12, align: 'center' });
  doc.fontSize(8).fillColor(DARK_SLATE).font('Helvetica-Bold').text(s.lbl, x + 6, statY + 30, { width: statBoxWidth - 12, align: 'center' });
  doc.fontSize(7).fillColor(SLATE_GRAY).font('Helvetica').text(s.sub, x + 6, statY + 44, { width: statBoxWidth - 12, align: 'center' });
});

// Overview Brief on Cover
doc.rect(45, 560, 505, 145).fill('#F8FAFC');
doc.rect(45, 560, 505, 145).lineWidth(1).stroke(BORDER_COLOR);

doc.fontSize(11).fillColor(NAVY).font('Helvetica-Bold')
  .text('Executive Summary & Institutional Vision', 58, 572);
doc.fontSize(8.5).fillColor(DARK_SLATE).font('Helvetica').lineGap(3)
  .text('Durga Dulari Textile Skill Development Institute (DDTSDI) is an advanced vocational institution established to resolve the critical manpower and operational bottlenecks faced by India\'s textile mills. Founded under the leadership of Vijay Kumar Ojha (20+ years of industrial floor expertise), DDTSDI delivers ready-to-deploy, certified operators, mechanical fitters, and electrical automation technicians directly to top-tier manufacturing plants.', 58, 592, { width: 480 });

doc.fontSize(8.5).fillColor(DARK_SLATE).font('Helvetica').lineGap(3)
  .text('The campus combines classroom pedagogy with hands-on, live machinery training across ring spinning, automation, PLC drives, industrial boilers, and garmenting. Supported by complete residential hostels, modern dining, and athletic amenities, the institute fosters technical excellence, safety culture, and socio-economic empowerment for rural youth.', 58, 646, { width: 480 });

// Statutory Strip
doc.rect(45, 715, 505, 55).fill(NAVY);
doc.fontSize(9).fillColor(WHITE).font('Helvetica-Bold')
  .text('Key Highlights & Statutory Approvals:', 58, 725);
doc.fontSize(8).fillColor('#E2E8F0').font('Helvetica')
  .text('• 100% Industry Placement Pipeline with 150+ Partner Mills across India', 58, 740)
  .text('• Aligned with NSDC, PMKVY Standards • 80G CSR Tax Exemption Clearances', 58, 753);

drawFooter(doc, 1);

// ══════════════════════════════════════════════════════════════════════════
// PAGE 2: SOCIAL IMPACT & CSR DONATION MISSION
// ══════════════════════════════════════════════════════════════════════════
doc.addPage();
drawHeader(doc, 'School Services(CSR)');

doc.fontSize(18).fillColor(NAVY).font('Helvetica-Bold')
  .text('Skill a child. Shape a future.', 45, 80);
doc.fontSize(11).fillColor(ORANGE).font('Helvetica-Bold')
  .text('SUPPORT THE DURGA DULARI SKILL DEVELOPMENT MISSION', 45, 104);

doc.fontSize(9).fillColor(DARK_SLATE).font('Helvetica').lineGap(3.5)
  .text('Your CSR partnership directly empowers underserved rural youth with machine-heavy technical vocational training in spinning, weaving, automation, and electrical maintenance. Our structured training curriculum bridges the gap between potential and dignified, high-retention employment in India\'s foremost textile clusters.', 45, 122, { width: 505 });

// 3 CSR Contribution Slabs
const slabWidth = 162;
const slabGap = 9;
const slabY = 175;

const slabs = [
  { amount: '₹25,000', title: 'Trainee Starter Kit', desc: 'Provides one student with complete industrial PPE, specialized tool kit, training uniform, safety gear, and instructional course material.' },
  { amount: '₹1,00,000', title: 'Full Student Sponsorship', desc: 'Fully funds one student for 6 months of comprehensive residential training, fooding, machine consumable costs, and B2B mill placement.' },
  { amount: '₹5,00,000+', title: 'Enterprise Lab Partner', desc: 'Institutional CSR partnership to fund laboratory upgrades, high-end PLC training panels, or modern ring-frame machinery maintenance.' }
];

slabs.forEach((sl, idx) => {
  const x = 45 + idx * (slabWidth + slabGap);
  doc.rect(x, slabY, slabWidth, 130).fill(LIGHT_BG);
  doc.rect(x, slabY, slabWidth, 130).lineWidth(1).stroke(BORDER_COLOR);
  doc.rect(x, slabY, slabWidth, 24).fill(NAVY);

  doc.fontSize(10).fillColor(WHITE).font('Helvetica-Bold').text(sl.amount, x + 8, slabY + 6);
  doc.fontSize(9).fillColor(ORANGE).font('Helvetica-Bold').text(sl.title, x + 8, slabY + 32, { width: slabWidth - 16 });
  doc.fontSize(7.5).fillColor(DARK_SLATE).font('Helvetica').lineGap(2.5).text(sl.desc, x + 8, slabY + 48, { width: slabWidth - 16 });
});

// Impact Areas Box
doc.rect(45, 320, 505, 170).fill('#081D30');
doc.fontSize(12).fillColor(WHITE).font('Helvetica-Bold').text('Core Impact & Socio-Economic Goals', 60, 335);

const impactPoints = [
  { title: 'Vocational Livelihood Creation', desc: 'Transforming semi-skilled rural candidates into certified ring frame operators, autoconer fitters, and electrical technicians with immediate earning capacity.' },
  { title: 'Safe Residential Environment', desc: 'Separate, highly secure hostel campuses for boys and girls with 24x7 security, warden supervision, nutritious dining, clean drinking RO water, and daily physical fitness.' },
  { title: 'Standardized Mill Compliance', desc: '100% adherence to labor laws, PF, ESI, minimum wages, and safety protocols from day one of placement, creating sustainable corporate partnerships.' },
  { title: 'Sustained Client Retention', desc: 'Over 98% client retention rate across 150+ operational spinning and weaving mills in Gujarat, Madhya Pradesh, Maharashtra, Rajasthan, and Tamil Nadu.' }
];

let currY = 358;
impactPoints.forEach((ip) => {
  doc.circle(65, currY + 4, 3).fill(ORANGE);
  doc.fontSize(9).fillColor(WHITE).font('Helvetica-Bold').text(ip.title + ': ', 75, currY, { continued: true });
  doc.fontSize(8).fillColor('#CBD5E1').font('Helvetica').text(ip.desc, { width: 450 });
  currY += 26;
});

// Student Lifecycle Timeline
doc.rect(45, 505, 505, 160).fill(LIGHT_BG);
doc.rect(45, 505, 505, 160).lineWidth(1).stroke(BORDER_COLOR);
doc.fontSize(11).fillColor(NAVY).font('Helvetica-Bold').text('6-Month Trainee Development Lifecycle', 60, 520);

const steps = [
  { step: 'Phase 01', title: 'Mobilization & Screening', desc: 'Aptitude screening, physical fitness assessment, background verification.' },
  { step: 'Phase 02', title: 'Foundational Mechanical', desc: 'Hand tools, bearing inspection, electrical safety, machine safety protocols.' },
  { step: 'Phase 03', title: 'Live Machine Operation', desc: 'Operating ring frames, carding machines, PLC panels, and utility boilers.' },
  { step: 'Phase 04', title: 'Mill Internship & Placement', desc: 'On-floor shift trials, immediate B2B placement, statutory PF/ESI registration.' }
];

steps.forEach((st, idx) => {
  const yPos = 542 + idx * 28;
  doc.rect(60, yPos, 55, 18).fill(ORANGE);
  doc.fontSize(7.5).fillColor(WHITE).font('Helvetica-Bold').text(st.step, 63, yPos + 4, { align: 'center', width: 50 });
  doc.fontSize(8.5).fillColor(NAVY).font('Helvetica-Bold').text(st.title + ' — ', 125, yPos + 4, { continued: true });
  doc.fontSize(8).fillColor(DARK_SLATE).font('Helvetica').text(st.desc);
});

// CSR Tax Note
doc.rect(45, 680, 505, 80).fill('#FFFBEB');
doc.rect(45, 680, 505, 80).lineWidth(1).stroke('#FDE68A');
doc.fontSize(9).fillColor('#92400E').font('Helvetica-Bold').text('Statutory CSR Compliance & Partnership Clearances', 60, 692);
doc.fontSize(8).fillColor('#78350F').font('Helvetica').lineGap(3)
  .text('Durga Dulari Enterprises facilitates verified CSR projects adhering to Schedule VII of the Companies Act, 2013 (Skill Development & Rural Employment). Comprehensive financial audits, biometric student attendance logs, and job placement verification reports are furnished to corporate CSR committees annually.', 60, 708, { width: 475 });

drawFooter(doc, 2);

// ══════════════════════════════════════════════════════════════════════════
// PAGE 3: 2-ACRE MASTER CAMPUS BLUEPRINT & INFRASTRUCTURE
// ══════════════════════════════════════════════════════════════════════════
doc.addPage();
drawHeader(doc, '2-ACRE MASTER CAMPUS BLUEPRINT');

doc.fontSize(16).fillColor(NAVY).font('Helvetica-Bold')
  .text('2-Acre Standard Campus Master Layout Plan', 45, 80);
doc.fontSize(9).fillColor(ORANGE).font('Helvetica-Bold')
  .text('SCALE: APPROX 1:500 • TOTAL LAND: 8,094 SQ.M. • BUILT-UP: 2,400 SQ.M.', 45, 102);

// Summary Table Header
const tY = 120;
doc.rect(45, tY, 505, 20).fill(NAVY);
doc.fontSize(8).fillColor(WHITE).font('Helvetica-Bold');
doc.text('BLOCK / INFRASTRUCTURE', 55, tY + 6, { width: 140 });
doc.text('FLOORS', 205, tY + 6, { width: 45 });
doc.text('AREA (SQ.M.)', 260, tY + 6, { width: 60 });
doc.text('CAPACITY', 330, tY + 6, { width: 75 });
doc.text('KEY FACILITIES / AMENITIES', 415, tY + 6, { width: 130 });

const blocks = [
  { block: 'Administrative Block', floors: 'G', area: '250', cap: '25 Staff', fac: 'Director Office, Placement Cell, Reception, Accounts' },
  { block: 'Academic Block', floors: 'G+1', area: '600', cap: '300 Trainees', fac: '4 Smart Classrooms, Seminar Hall, Library, IT Lab' },
  { block: '12-Lab Complex', floors: 'G', area: '700', cap: '150 / batch', fac: 'Spinning, Mechanical, Electrical, PLC, Utility Labs' },
  { block: 'Boys Hostel', floors: 'G+1', area: '250', cap: '150 Beds', fac: '38 Rooms (4-bed), Warden, Study Room, Solar Geyser' },
  { block: 'Girls Hostel', floors: 'G+1', area: '250', cap: '150 Beds', fac: '38 Rooms (4-bed), Lady Warden, CCTV, Private Access' },
  { block: 'Dining & Kitchen', floors: 'G', area: '150', cap: '200 Diners', fac: 'Commercial Steam Kitchen, 200-seat Hall, Storage' },
  { block: 'Power Load & Water Utility', floors: 'G', area: '40', cap: '62.5 KVA DG', fac: '62.5 KVA DG + 25KW Solar, Borewell, RO Unit, OHT' },
  { block: 'Internal Road & Parking', floors: '–', area: '300', cap: '30 Vehicles', fac: 'Car & 2-Wheeler Parking, 5m wide Concrete Road' },
  { block: 'Open Ground & Playground', floors: '–', area: '1,000', cap: 'All Students', fac: 'Football, Volleyball, Morning Drill, Running Track' },
  { block: 'Expansion Reserve', floors: '–', area: '500', cap: 'Future Growth', fac: 'Reserved for Advanced COE Labs & Additional Wings' }
];

let rowY = tY + 20;
blocks.forEach((b, i) => {
  const bg = i % 2 === 0 ? LIGHT_BG : WHITE;
  doc.rect(45, rowY, 505, 18).fill(bg);
  doc.rect(45, rowY, 505, 18).lineWidth(0.5).stroke(BORDER_COLOR);

  doc.fontSize(7.5).fillColor(NAVY).font('Helvetica-Bold').text(b.block, 55, rowY + 5, { width: 140, lineBreak: false });
  doc.fontSize(7.5).fillColor(DARK_SLATE).font('Helvetica').text(b.floors, 205, rowY + 5, { width: 45 });
  doc.fontSize(7.5).fillColor(DARK_SLATE).font('Helvetica-Bold').text(b.area, 260, rowY + 5, { width: 60 });
  doc.fontSize(7.5).fillColor(DARK_SLATE).font('Helvetica').text(b.cap, 330, rowY + 5, { width: 75 });
  doc.fontSize(7).fillColor(SLATE_GRAY).font('Helvetica').text(b.fac, 415, rowY + 5, { width: 130, lineBreak: false });
  rowY += 18;
});

// Detailed Blueprint Breakdown (Visual layout map description)
doc.rect(45, 335, 505, 235).fill('#F8FAFC');
doc.rect(45, 335, 505, 235).lineWidth(1).stroke(BORDER_COLOR);

doc.fontSize(11).fillColor(NAVY).font('Helvetica-Bold')
  .text('Campus Zoning & Master Traffic Engineering', 58, 350);

const zones = [
  { zone: 'Academic & Training Zone', desc: 'Strategically isolated from residential wings to ensure focused learning. Houses the 4 smart classrooms, technical library, and seminar amphitheatre with dedicated fibre optic connectivity.' },
  { zone: 'Heavy Machinery & Lab Zone', desc: 'Ground-floor heavy vibration-damped concrete flooring designed to hold 10-spindle spinning ring frames, heavy lathe machines, Atlas Copco air compressors, and electrical testing panels.' },
  { zone: 'Residential & Hostel Quarter', desc: 'Independent access for Girls Hostel with dedicated lady warden residence, biometric access gate, and complete CCTV perimeter surveillance. Boys hostel situated on northern perimeter.' },
  { zone: 'Utility & Power Infrastructure', desc: 'Equipped with a 62.5 KVA industrial diesel generator set supporting instantaneous auto-switchover during power cuts, backed by a 25 KW rooftop solar power installation.' },
  { zone: 'Safety, Fire & Water Management', desc: 'Borewell integration with Overhead Water Tanks (OHT), industrial Reverse Osmosis (RO) drinking purification system, fire hydrants, and localized Effluent Treatment Plant (ETP).' }
];

let zY = 372;
zones.forEach((z) => {
  doc.circle(65, zY + 4, 2.5).fill(ORANGE);
  doc.fontSize(8.5).fillColor(NAVY).font('Helvetica-Bold').text(z.zone + ': ', 74, zY, { continued: true });
  doc.fontSize(8).fillColor(DARK_SLATE).font('Helvetica').text(z.desc, { width: 455 });
  zY += 34;
});

// Architectural Parameters Box
doc.rect(45, 585, 505, 175).fill(NAVY);
doc.fontSize(10.5).fillColor(WHITE).font('Helvetica-Bold')
  .text('Standard Institutional Compliance Matrix', 58, 600);

const matrix = [
  { item: 'Total Land Parcel', val: '2.00 Acres (8,094 sq.m. / 87,120 sq.ft.) Freehold Land' },
  { item: 'Permissible Ground Coverage', val: '35% (Current Ground Built-up: ~1,800 sq.m.)' },
  { item: 'Fire & Life Safety Clearance', val: 'Meets National Building Code (NBC) Part IV Fire Standards' },
  { item: 'Sanitation Ratio', val: '1 Toilet per 10 Residents; Dedicated disability access ramps' },
  { item: 'Power Connected Load', val: '45 KW Grid Supply + 62.5 KVA Captive DG + 25 KW Solar' },
  { item: 'Perimeter Security', val: '8 ft Boundary Wall with Concertina wire & 32 IP CCTV Cameras' }
];

let mY = 620;
matrix.forEach((mx) => {
  doc.fontSize(8).fillColor(ORANGE).font('Helvetica-Bold').text(mx.item + ':', 58, mY, { width: 160 });
  doc.fontSize(8).fillColor(WHITE).font('Helvetica').text(mx.val, 220, mY, { width: 320 });
  mY += 21;
});

drawFooter(doc, 3);

// ══════════════════════════════════════════════════════════════════════════
// PAGE 4: 12 SPECIALIZED ENGINEERING & TEXTILE LABS
// ══════════════════════════════════════════════════════════════════════════
doc.addPage();
drawHeader(doc, '12 SPECIALIZED TRAINING LABORATORIES');

doc.fontSize(15).fillColor(NAVY).font('Helvetica-Bold')
  .text('Complete Laboratory Equipment & Floor Plan', 45, 80);
doc.fontSize(8.5).fillColor(ORANGE).font('Helvetica-Bold')
  .text('HANDS-ON FLOOR TRAINING • 700 SQ.M. COMPREHENSIVE LAB COMPLEX', 45, 100);

const labGrid = [
  { name: '1. Spinning Training Lab', area: '120 sq.m.', cap: '30 Trainees', eq: 'Ring Frame (10-spindle working model), Auto Coner unit, Speed Frame model, Compact spinning demo setup, Uster Tester, Yarn Wrap Reel.' },
  { name: '2. Mechanical Fitter Lab', area: '80 sq.m.', cap: '25 Trainees', eq: '50-type Bearing Display, Shaft alignment rig, Industrial gearbox cut-sections, Couplings, Heavy Lathe machine, Hydraulic & Pneumatic trainers.' },
  { name: '3. Electrical Systems Lab', area: '80 sq.m.', cap: '25 Trainees', eq: 'DOL & Star-Delta starter panels, VFD demonstration boards, Motor Control Center (MCC), LT switchgear, Motor rewinding benches.' },
  { name: '4. Electronics & PLC Lab', area: '80 sq.m.', cap: '20 Trainees', eq: '5× Siemens S7-1200 PLC trainer racks, HMI touchscreens, Servo drive benches, Optical/proximity sensor arrays, Profinet communication.' },
  { name: '5. Utility & Boiler Lab', area: '70 sq.m.', cap: '20 Trainees', eq: 'Screw Compressor (5HP), Industrial boiler cut-section model, Cooling tower demo, Multi-stage pump trainer, Water treatment RO unit.' },
  { name: '6. Garment Manufacturing Lab', area: '70 sq.m.', cap: '30 Trainees', eq: '8× JUKI Single Needle Lockstitch (SNLS), 4× Overlock machines, 2× Flatlock machines, Button attachment station, Steam pressing tables.' },
  { name: '7. Knitting Technology Lab', area: '60 sq.m.', cap: '25 Trainees', eq: '4× Circular knitting machines, 2× Flat knitting machines, GSM round cutter, Fabric inspection lightbox, Precision yarn creel.' },
  { name: '8. Computer & Soft Skills Lab', area: '60 sq.m.', cap: '50 Trainees', eq: '50× HP Core i5 desktop systems, Cisco Gigabit switch, Local server, 100 Mbps LAN, LMS training portal, English & digital skills software.' },
  { name: '9. Tool Room & Hardware', area: '30 sq.m.', cap: 'Tool Store', eq: 'Complete specialized mechanical tool sets, torque wrenches, gear pullers, digital micrometers, vernier calipers, pitch gauges.' },
  { name: '10. Safety & PPE Training Lab', area: '30 sq.m.', cap: 'Safety Wing', eq: 'Full PPE kits, fall protection harnesses, fire safety simulators, eye-wash stations, lockout-tagout (LOTO) training station, First Aid.' },
  { name: '11. Motor Rewinding Workshop', area: '20 sq.m.', cap: '10 Trainees', eq: 'Stator winding stand, copper wire spool racks, insulation paper cutters, Megger 1000V tester, varnish curing setup.' },
  { name: '12. Pneumatics & Hydraulics Lab', area: '20 sq.m.', cap: '10 Trainees', eq: 'Electro-pneumatic logic panel, solenoid valves, directional control valves, double-acting cylinders, hydraulic power unit.' }
];

let lY = 118;
labGrid.forEach((l, idx) => {
  const isLeft = idx % 2 === 0;
  const colX = isLeft ? 45 : 302;
  const cardWidth = 248;
  const cardHeight = 98;

  if (!isLeft) {
    // right column matches previous lY
  } else if (idx > 0) {
    lY += cardHeight + 8;
  }

  doc.rect(colX, lY, cardWidth, cardHeight).fill(LIGHT_BG);
  doc.rect(colX, lY, cardWidth, cardHeight).lineWidth(0.8).stroke(BORDER_COLOR);
  doc.rect(colX, lY, cardWidth, 18).fill(NAVY);

  doc.fontSize(8).fillColor(WHITE).font('Helvetica-Bold').text(l.name, colX + 6, lY + 5, { width: 165, lineBreak: false });
  doc.fontSize(7).fillColor(ORANGE).font('Helvetica-Bold').text(l.area, colX + 175, lY + 5, { width: 65, align: 'right' });

  doc.fontSize(7).fillColor(DARK_SLATE).font('Helvetica-Bold').text('Batch Capacity: ' + l.cap, colX + 6, lY + 23);
  doc.fontSize(6.8).fillColor(SLATE_GRAY).font('Helvetica').lineGap(2).text(l.eq, colX + 6, lY + 35, { width: cardWidth - 12 });
});

drawFooter(doc, 4);

// ══════════════════════════════════════════════════════════════════════════
// PAGE 5: PLACEMENT NETWORK & CONTACT INFORMATION
// ══════════════════════════════════════════════════════════════════════════
doc.addPage();
drawHeader(doc, 'INDUSTRY PLACEMENT & PARTNERSHIP');

doc.fontSize(16).fillColor(NAVY).font('Helvetica-Bold')
  .text('Industry Placement Network & B2B Mill Tie-Ups', 45, 80);
doc.fontSize(9).fillColor(ORANGE).font('Helvetica-Bold')
  .text('150+ ACTIVE SPINNING MILL CLIENTS ACROSS PAN-INDIA TEXTILE CLUSTERS', 45, 102);

doc.fontSize(8.5).fillColor(DARK_SLATE).font('Helvetica').lineGap(3)
  .text('Durga Dulari Enterprises maintains direct workforce deployment agreements with India\'s most renowned spinning, weaving, and textile conglomerate groups. Graduates undergo on-floor technical evaluation and receive immediate employment with legal PF, ESI, and housing benefits.', 45, 118, { width: 505 });

// Client Brand Logos Grid
doc.rect(45, 160, 505, 100).fill(LIGHT_BG);
doc.rect(45, 160, 505, 100).lineWidth(1).stroke(BORDER_COLOR);
doc.fontSize(9.5).fillColor(NAVY).font('Helvetica-Bold')
  .text('Prominent Textile Employers Hiring DDTSDI Graduates:', 58, 172);

const partners = [
  'VARDHMAN TEXTILE LIMITED', 'TRIDENT INDIA LIMITED', 'WELSPUN LIVING',
  'NAHAR INDUSTRIES', 'ARVIND LIMITED', 'SITARAM SPINNERS',
  'RELIANCE INDUSTRIES', 'KPR MILL LIMITED', 'GOKALDAS EXPORTS'
];

let pX = 58;
let pY = 195;
partners.forEach((p, idx) => {
  doc.rect(pX, pY, 150, 24).fill(WHITE);
  doc.rect(pX, pY, 150, 24).lineWidth(0.8).stroke(BORDER_COLOR);
  doc.fontSize(7.5).fillColor(NAVY).font('Helvetica-Bold').text(p, pX + 5, pY + 8, { width: 140, align: 'center' });

  if ((idx + 1) % 3 === 0) {
    pX = 58;
    pY += 30;
  } else {
    pX += 162;
  }
});

// Placement Guarantee Model
doc.rect(45, 280, 505, 150).fill('#081D30');
doc.fontSize(11).fillColor(WHITE).font('Helvetica-Bold').text('Our 100% Placement Assurance Protocol', 58, 295);

const proto = [
  { t: 'Pre-Deployment Evaluation', d: 'Trainees are tested on speed, safety reactions, ring-frame doffing speed, and mechanical troubleshooting before dispatch.' },
  { t: 'On-Site Mill Induction', d: 'Durga Dulari field supervisors accompany trainee batches to partner mills, managing plant HR onboarding, hostel check-in, and shift allocation.' },
  { t: 'Zero-Lapse Statutory Compliance', d: '100% legal coverage including PF, ESI, Contract Labour License, and Worker Compensation insurance from Day 1.' },
  { t: 'Continuous Skill Upgradation', d: 'Refresher training modules conducted bi-annually on new machinery models (Truetzschler cards, Rieter ring frames, Murata autoconers).' }
];

let prY = 320;
proto.forEach((pr) => {
  doc.circle(65, prY + 4, 2.5).fill(ORANGE);
  doc.fontSize(8.5).fillColor(WHITE).font('Helvetica-Bold').text(pr.t + ': ', 74, prY, { continued: true });
  doc.fontSize(8).fillColor('#CBD5E1').font('Helvetica').text(pr.d, { width: 455 });
  prY += 26;
});

// Official Contact & Secretariat Box
doc.rect(45, 450, 505, 230).fill(LIGHT_BG);
doc.rect(45, 450, 505, 230).lineWidth(1.5).stroke(NAVY);
doc.rect(45, 450, 505, 30).fill(NAVY);

doc.fontSize(11).fillColor(WHITE).font('Helvetica-Bold')
  .text('Institutional Secretariat & Contact Directory', 58, 460);

doc.fontSize(9.5).fillColor(NAVY).font('Helvetica-Bold').text('Durga Dulari Enterprises (Corporate Headquarters)', 58, 492);
doc.fontSize(8.5).fillColor(DARK_SLATE).font('Helvetica').lineGap(3)
  .text('Leading Indian Textile Manpower, Maintenance & Industrial Solutions Partner\nHead Office: Bhopal, Madhya Pradesh, India\nManaging Director: Vijay Kumar Ojha', 58, 508);

doc.rect(58, 555, 475, 1).fill(BORDER_COLOR);

const contacts = [
  { label: 'Technical Helpline', val: '+91 79998 04322 / +91 80859 29202' },
  { label: 'General & CSR Inquiries', val: 'info@durgadularienterprises.com' },
  { label: 'Official Web Portal', val: 'https://durgadularienterprises.com' },
  { label: 'Campus Services Page', val: 'https://durgadularienterprises.com/school-services' }
];

let cY = 568;
contacts.forEach((c) => {
  doc.fontSize(8.5).fillColor(ORANGE).font('Helvetica-Bold').text(c.label + ':', 58, cY, { width: 160 });
  doc.fontSize(8.5).fillColor(NAVY).font('Helvetica-Bold').text(c.val, 220, cY, { width: 300 });
  cY += 20;
});

// Final Confidential Notice
doc.rect(45, 700, 505, 60).fill('#FFFBEB');
doc.rect(45, 700, 505, 60).lineWidth(1).stroke('#FDE68A');
doc.fontSize(8).fillColor('#92400E').font('Helvetica-Bold').text('CONFIDENTIALITY & LEGAL NOTICE', 58, 712);
doc.fontSize(7.5).fillColor('#78350F').font('Helvetica').lineGap(2)
  .text('This institutional document, architectural blueprints, and curriculum specifications are proprietary assets of Durga Dulari Enterprises. Prepared exclusively for prospective CSR donors, banking partners, and affiliated textile manufacturing clients. Unauthorized reproduction or dissemination is strictly prohibited.', 58, 724, { width: 475 });

drawFooter(doc, 5);

// End document
doc.end();

writeStream.on('finish', () => {
  console.log('✅ Brochure PDF generated successfully at:', outputPath);
});

writeStream.on('error', (err) => {
  console.error('❌ Error generating PDF:', err);
});
