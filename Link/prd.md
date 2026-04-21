---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-02b-vision
  - step-02c-executive-summary
  - step-03-success
  - step-04-journeys
  - step-05-domain
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
  - step-12-complete
classification:
  projectType: "Mobile App (iOS + Android)"
  domain: "Lifestyle / Astrology + AI (Personalized Content + Subscription)"
  complexity: "Medium-High"
  projectContext: "Brownfield — V1.0 complete, PRD focuses on V1.5 Subscription"
inputDocuments:
  - BA Flow Documentation (Flow_Overview.html)
  - Pricing Strategy Proposal (Price.html)
  - Subscription User Flows (DailyMu_Subscription_UserFlow.html)
  - Subscription Wireframe Prototype (DailyMu_Subscription_Wireframe.html)
documentCounts:
  briefs: 0
  research: 0
  projectDocs: 4
  projectContext: 0
workflowType: 'prd'
---

# Product Requirements Document - DailyMu Calendar

**Author:** Pim
**Date:** 2026-04-21

## Executive Summary

DailyMu Calendar คือแอปมือถือ (iOS + Android) ที่เปลี่ยนประสบการณ์การดูดวงรายวันให้กลายเป็น "เพื่อนฮีลใจ" สำหรับคนวัยทำงานที่เผชิญความเครียด แอปผสาน Thai Astrology กับ AI เพื่อสร้างคำทำนายที่ไม่เพียงแม่นยำ แต่ใช้ภาษาเชิงบวกที่ให้กำลังใจ — แม้ในวันที่ดวงไม่ดี ผู้ใช้จะไม่รู้สึกกังวล แต่รู้สึกว่ามีคนเข้าใจ

กลุ่มเป้าหมายหลักคือคนวัยทำงานไทยที่ต้องการแอปที่ฮีลใจในชีวิตประจำวัน สามารถดูดวง สีมงคล และรับกำลังใจไปพร้อมกันในที่เดียว

**PRD Scope:** เอกสารฉบับนี้โฟกัสที่ **V1.5 — Subscription System** เพื่อสร้างรายได้จากฐานผู้ใช้ V1.0 ที่เสร็จแล้วและกำลังขึ้น App Store / Google Play ระบบ subscription ครอบคลุม 3 Tiers (Free/Plus/Premium), Feature Gating, Quota Management, External Web Payment Flow และ Subscription State Management

### สิ่งที่ทำให้ DailyMu พิเศษ

- **Tone ฮีลใจ ไม่ใช่ทำนาย** — ใช้ภาษาเชิงบวกเสมอ เปลี่ยนดวงจาก "สิ่งที่น่ากลัว" เป็น "สิ่งที่ให้กำลังใจ"
- **AI ตีความอย่างมีเหตุผล** — สรุปดวงได้ละเอียดและมี logic อธิบายได้
- **2 ระบบดวงในแอปเดียว** — Thai Astrology + BaZi (ปาจื่อ) ในขณะที่คู่แข่งรองรับเพียงระบบเดียว

### V1.5 Monetization Strategy

V1.5 เพิ่มระบบ Subscription 3 Tiers (Free/Plus ฿99/Premium ฿299) บน V1.0 ที่มีอยู่ ผ่าน External Web Payment (Apple guideline compliance) พร้อม Feature Gating, Quota Management และ Subscription State Management เต็มรูปแบบ

## Project Classification

| หมวด | รายละเอียด |
|------|-----------|
| **Project Type** | Mobile App (iOS + Android) |
| **Domain** | Lifestyle / Astrology + AI (Personalized Content + Subscription) |
| **Complexity** | Medium-High |
| **Project Context** | Brownfield — V1.0 เสร็จแล้ว, PRD นี้โฟกัส V1.5 Subscription System |

## Success Criteria (V1.5)

### User Success

- ผู้ใช้ Free รู้สึกว่า upgrade คุ้มค่า — ไม่รู้สึกถูกบังคับ แต่อยาก unlock เพิ่มเอง
- Feature Gate messaging ชัดเจน ไม่ทำให้ผู้ใช้สับสนหรือหงุดหงิด
- Subscription flow (app → web → app) ราบรื่น ไม่มี user หลุดระหว่างทาง

### Business Success

- Free → Paid conversion rate **2-5%** (อ้างอิง industry benchmark lifestyle app)
- Revenue target: **฿148K-670K/เดือน** ขึ้นอยู่กับ conversion rate และจำนวน subscribers
- Churn rate ต่ำกว่า **10%/เดือน** สำหรับ subscribers

### Technical Success

- Subscription state machine ทำงานถูกต้อง — ไม่มีผู้ใช้เสียสิทธิ์โดยไม่ถูกต้อง
- Payment sync สำเร็จ **≥ 95%** ใน attempt แรก (auto-sync)
- Feature gate ตรวจสอบ tier/quota ถูกต้อง **100%** — ไม่มี free user เข้าถึงฟีเจอร์ paid และไม่มี paid user ถูก lock ผิด

### Measurable Outcomes

| ตัวชี้วัด | เป้าหมาย | ระยะเวลา |
|----------|---------|---------|
| Free → Paid Conversion | 2-5% | 3 เดือนหลัง V1.5 |
| Monthly Revenue | ฿148K-670K | 3 เดือนหลัง V1.5 |
| Subscriber Churn Rate | < 10%/เดือน | V1.5 |
| Payment Sync Success (1st attempt) | ≥ 95% | V1.5 |
| Feature Gate Accuracy | 100% | V1.5 |
| Subscription Flow Completion | ≥ 80% | V1.5 |

## User Journeys (V1.5 Subscription)

### Journey 1: มิ้นท์ — Free User ที่เจอ Feature Gate และตัดสินใจ Upgrade (Primary User)

**Opening Scene:** มิ้นท์เปิดแอปตอนเช้าตามปกติ แต่วันนี้ดวงสถานะ "ระวัง" (สีแดง) ในหลายด้าน

**Rising Action:** แทนที่จะเห็นข้อความน่ากลัว มิ้นท์เห็น "วันนี้ดวงโดยรวมอยู่ในช่วงพักฟื้น เหมาะกับการทำสิ่งเล็ก ๆ ที่ให้ความสุข หลีกเลี่ยงการตัดสินใจใหญ่ สีมงคลคือสีเขียวอ่อน ช่วยเสริมความสงบ" → เธอรู้สึกโอเค ไม่กังวล

มิ้นท์อยากลองเปิดไพ่ทาโรต์เพิ่ม แต่วันนี้เปิดเซียมซีไปแล้ว 1 ครั้ง → กดไพ่ทาโรต์ → เลือกหัวข้อ "การงาน" → เลือก 3 ใบ → เห็นคำตีความที่เชื่อมกับดวงวันนี้ → รู้สึกดีขึ้น

จากนั้นเธออยากเปิดทำนายฝัน แต่ใช้ครบ 1 ครั้งแล้ว → **Feature Gate ขึ้น**: "คุณใช้ทำนายฝันครบ 1 ครั้งแล้ววันนี้" พร้อมปุ่ม "ดูแพลนทั้งหมด"

**Climax:** มิ้นท์กดดู Plan Comparison → เห็นว่า Plus ได้ 3 ครั้ง/วัน → คิดว่าน่าสนใจ แต่ยังไม่พร้อมจ่าย → กดปิด → กลับมาใช้ฟรีต่อ

**Resolution:** มิ้นท์ยังคงใช้แอปฟรีทุกวัน แต่เริ่มรู้สึกว่า quota ไม่พอ → 2 สัปดาห์ต่อมาตัดสินใจอัปเกรด Plus

**Requirements ที่เปิดเผย:** AI tone เชิงบวกแม้ดวงไม่ดี, Quota management, Feature Gate (Variant B), Plan Comparison (ไม่แสดงราคาใน app), Upgrade conversion flow

---

### Journey 3: เจ้หน่อย — Admin ที่ดูแลระบบและ Content (Admin/Operations)

**เจ้หน่อย** อายุ 35 ปี เป็น Operations Manager ของทีม DailyMu รับผิดชอบดูแลคุณภาพ AI output, จัดการ subscription issues, และ monitor ระบบ

**Opening Scene:** เจ้หน่อยเปิด Admin Dashboard ตอนเช้า เห็นรายงานสรุปว่าเมื่อวาน AI สร้าง Daily Summary ให้ผู้ใช้ 15,000 คน มี 3 cases ที่ AI ใช้คำพูดที่ไม่เข้ากับ tone "ฮีลใจ"

**Rising Action:** เจ้หน่อยเข้าไปตรวจสอบ AI output ที่ถูก flag → แก้ไข prompt template ให้ AI → ทดสอบ output ใหม่ → ยืนยันว่า tone ถูกต้อง → จากนั้นตรวจสอบ subscription dashboard: มี 5 users ที่ payment failed อยู่ใน grace period → ส่ง notification เตือนอัตโนมัติ

**Climax:** เจ้หน่อยเห็นว่า conversion rate สัปดาห์นี้ลดลง 2% → วิเคราะห์พบว่า Feature Gate message ไม่ชัดเจนพอ → แจ้งทีม UX ให้ปรับ copy

**Resolution:** เจ้หน่อยสรุปรายงานประจำวัน: AI quality score, subscription metrics, user complaints → ส่งให้ทีม → ปิดงานวันนี้

**Requirements ที่เปิดเผย:** Admin Dashboard, AI output monitoring + content moderation, Subscription management, Analytics dashboard, Notification management, AI prompt/template management

---

### Journey 4: พี่แอน — Customer Support ที่ช่วยเหลือผู้ใช้ (Support)

**พี่แอน** อายุ 30 ปี เป็น Customer Support Lead ดูแลผู้ใช้ผ่าน LINE OA และระบบ ticket

**Opening Scene:** พี่แอนเปิดระบบ ticket เช้าวันนี้ เห็น 3 tickets ใหม่:
1. ผู้ใช้ลืม password แต่สมัครผ่าน Social Login ไม่รู้ว่าไม่มี password
2. ผู้ใช้จ่ายเงิน Plus แล้วแต่แอปยังแสดง Free
3. ผู้ใช้ต้องการลบบัญชีแต่หา menu ไม่เจอ

**Rising Action:**
- **Ticket 1:** พี่แอนค้นหาบัญชีผู้ใช้ → เห็นว่าสมัครผ่าน LINE → แนะนำให้ login ผ่าน LINE แทน → resolved
- **Ticket 2:** ตรวจสอบ subscription status → เห็นว่า payment สำเร็จแต่ app ยังไม่ sync → trigger manual sync → ผู้ใช้ได้รับสิทธิ์ Plus ทันที → resolved
- **Ticket 3:** แนะนำ path: Profile → Settings → ลบบัญชี → อธิบายว่ามี 30 วัน grace period → ผู้ใช้เข้าใจ → resolved

**Climax:** พี่แอนสังเกตว่า Ticket 2 (payment sync issue) เกิดขึ้นบ่อย → สร้าง report แจ้งทีม dev → เสนอให้เพิ่ม auto-retry sync mechanism

**Resolution:** พี่แอนปิด tickets ทั้ง 3 ภายใน 30 นาที → บันทึก FAQ ใหม่สำหรับ Social Login confusion → อัปเดต knowledge base

**Requirements ที่เปิดเผย:** Support ticket system, User account lookup, Subscription status management + manual sync, Knowledge base / FAQ, DSAR (Data Subject Access Request) workflow, Escalation to dev team

### Journey Requirements Summary

| Journey | User Type | Capabilities ที่ต้องการ |
|---------|-----------|----------------------|
| มิ้นท์ (Free → Plus) | End User | Feature Gate, Quota Management, Plan Comparison, Upgrade Flow, Payment, Subscription Sync |
| เจ้หน่อย (Admin) | Operations | Subscription Dashboard, Metrics, Payment Monitoring, Grace Period Management |
| พี่แอน (Support) | Customer Support | Account Lookup, Manual Sync, Subscription Status Management |

## Domain-Specific Requirements

### Compliance & Regulatory

- **PDPA (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล):**
  - ต้องขอ consent ก่อนเก็บข้อมูลวันเกิด/เวลาเกิด
  - Consent versioning — เมื่อ policy อัปเดต ต้องขอ consent ใหม่
  - Account deletion: 30 วัน grace period → ลบข้อมูลทั้งหมดถาวร
  - รองรับ DSAR (Data Subject Access Request) — ผู้ใช้ขอดู/ลบข้อมูลได้
  - ห้ามส่ง PII (วันเกิด, เวลาเกิด, ชื่อ) ไปยัง AI engine โดยตรง
- **DBD e-commerce registration** — ต้องจดทะเบียนพาณิชย์อิเล็กทรอนิกส์ภายใน 30 วัน
- **VAT** — จดทะเบียน VAT เมื่อรายได้เกิน ฿1.8M/ปี

### App Store Compliance

- **Apple Guidelines:** ห้ามแสดงราคา subscription ใน app → ใช้ External Web Browser (ไม่ใช่ WebView)
- **Google Play:** ปฏิบัติตาม subscription billing policies
- Deep link callback สำหรับ payment success/failure
- ทั้ง iOS และ Android ใช้ unified flow เดียวกัน

### Technical Constraints (V1.5)

- **Subscription State Machine:** Free → Active → Grace Period → Cancelled → Expired ต้อง reliable, idempotent webhook handling
- **External Payment Flow:** ต้องเปิด External Web Browser (ไม่ใช่ WebView) ตาม Apple Guidelines
- **Data Privacy:** ข้อมูล subscription เป็น per-user, payment data ต้องไม่เก็บใน DailyMu backend

## Project Scoping & Phased Development

### สถานะปัจจุบัน

**V1.0 (เสร็จแล้ว — กำลังขึ้น App Store / Google Play):**
- ลงทะเบียน/เข้าสู่ระบบ (Email + Social Login)
- PDPA Consent Flow
- Onboarding + Birth Profile Setup (1 โปรไฟล์)
- Thai Astrology — ดูดวงรายวัน/เดือน/ปี
- Today Page: Daily Summary (AI ฮีลใจ) + สีมงคล
- Calendar View + Day Detail + Weekly View
- Fortune Engines: เซียมซี + ไพ่ทาโรต์ + ทำนายฝัน (วันละ 1 ครั้ง)
- Share Card + Notification Center
- Profile Management + Account Deletion
- มีโฆษณา (Ads)

### MVP Strategy — V1.5 (Subscription System)

**MVP Approach:** Revenue MVP — เพิ่มระบบ subscription เพื่อสร้างรายได้จากฐานผู้ใช้ V1.0 โดยไม่เปลี่ยน core experience ที่มีอยู่

**เป้าหมาย V1.5:**
- สร้างรายได้จาก subscription (Free → Paid conversion 2-5%)
- เพิ่ม value ให้ผู้ใช้ที่จ่ายเงิน (เพิ่ม quota, multi-profile, ไม่มีโฆษณา)
- ไม่ทำลาย experience ของผู้ใช้ฟรีที่มีอยู่

### V1.5 Feature Set (PRD Focus)

**Core Subscription System:**
- Plan Comparison Screen (Free / Plus / Premium) — ไม่แสดงราคาใน app
- Bottom Sheet → External Web Browser สำหรับ subscribe
- External Web: Subscription Page + Payment (Credit Card / PromptPay)
- Deep link callback → Success Screen ใน app
- Subscription state machine: Free → Active → Grace Period → Cancelled → Expired

**Feature Gating & Quota:**
- Feature Lock (Variant A) — ล็อคฟีเจอร์ตาม tier
- Quota Exceeded (Variant B) — แจ้งเมื่อใช้ครบ quota
- 11 trigger points ตามตาราง Feature Gate

**Tier Benefits:**

| ฟีเจอร์ | Free | Plus (฿99/เดือน) | Premium (฿299/เดือน) |
|---------|------|-----------------|---------------------|
| โปรไฟล์ | 1 | 3 | 5 |
| Calendar | 7 วัน | 30 วัน | ไม่จำกัด |
| เซียมซี/วัน | 1 | 3 | ไม่จำกัด |
| ไพ่ทาโรต์/วัน | ไม่มี | 1 | ไม่จำกัด |
| ทำนายฝัน/วัน | ไม่มี | 3 | ไม่จำกัด |
| AI Summary + Chat | ไม่มี | ไม่มี | ✓ |
| โฆษณา | มี | ไม่มี | ไม่มี |
| Share/วัน | 2 | 3 | ไม่จำกัด + themes |

**Subscription Management:**
- "สมาชิกของฉัน" screen — แสดงสถานะ 5 states
- จัดการบนเว็บ (เปลี่ยนแพลน/ยกเลิก/อัปเดตบัตร)
- Auto-sync เมื่อเปิดแอป / resume / deep link / pull-to-refresh

**Entry Points (3 จุดเข้า):**
- Settings/Profile → ปุ่ม Upgrade
- Home → Upgrade Banner (Free users)
- Feature Gate → ปุ่ม "ดูแพลนทั้งหมด"

### Post V1.5

**V1.5.5 (Optional):**
- MuCoin virtual economy

**V2.0 (Innovation):**
- AI Mood Companion
- Duo Horoscope
- Fortune Calendar Sync
- Voice Morning Blessing
- BaZi (ปาจื่อ) — ระบบดวงที่ 2

### Risk Mitigation Strategy

| ประเภท | ความเสี่ยง | การป้องกัน |
|--------|-----------|----------|
| **Technical** | Payment sync ไม่ stable | Auto-retry + manual sync + idempotent webhooks |
| **Technical** | Deep link ไม่ทำงานบางเครื่อง | Fallback: auto-sync เมื่อเปิดแอปครั้งถัดไป |
| **Market** | ผู้ใช้ไม่ยอมจ่าย | A/B test pricing + ปรับ feature gate messaging |
| **Market** | Free users รู้สึกถูกบังคับจ่าย | ฟรียังใช้ core features ได้ครบ แค่จำกัด quota |
| **Legal** | Apple reject เพราะ external payment | ปฏิบัติตาม Apple guidelines อย่างเคร่งครัด (ไม่แสดงราคา, ใช้ external browser) |

## Functional Requirements

### Subscription Plan Display

- FR1: ผู้ใช้สามารถดูตารางเปรียบเทียบฟีเจอร์ระหว่าง Free / Plus / Premium ได้
- FR2: ระบบแสดง badge "แพลนปัจจุบัน" และ "แนะนำ" บน Plan Comparison Screen ตาม role ของผู้ใช้
- FR3: ผู้ใช้ Free เห็นปุ่ม "Subscribe Plus" และ "Subscribe Premium"
- FR4: ผู้ใช้ Plus เห็นปุ่ม "Upgrade Premium" เท่านั้น
- FR5: ผู้ใช้ Premium เห็นหน้า Plan Comparison แบบ info-only (ไม่มีปุ่ม action)

### Subscription Entry Points

- FR6: ผู้ใช้ Free สามารถเข้าสู่ Plan Comparison จากปุ่ม Upgrade ใน Settings/Profile
- FR7: ผู้ใช้ Free เห็น Upgrade Banner บน Home Page ที่ dismiss ได้ แต่กลับมาแสดงวันถัดไป
- FR8: ผู้ใช้สามารถเข้าสู่ Plan Comparison จากปุ่ม "ดูแพลนทั้งหมด" ใน Feature Gate

### Subscription Purchase Flow

- FR9: ระบบแสดง Bottom Sheet ยืนยันก่อนพาผู้ใช้ออกไปเว็บ
- FR10: ระบบเปิด External Web Browser (ไม่ใช่ WebView) สำหรับหน้า Subscription
- FR11: ผู้ใช้สามารถเลือกแพลนและรอบการชำระ (รายเดือน/รายปี) บนเว็บ
- FR12: ผู้ใช้สามารถชำระเงินผ่าน Credit Card หรือ PromptPay บนเว็บ
- FR13: ระบบแสดงหน้า Success บนเว็บพร้อมปุ่ม Deep Link กลับเข้าแอป
- FR14: ระบบแสดง Success Screen ในแอป พร้อมแสดงแพลนที่ได้รับและฟีเจอร์ที่ปลดล็อค
- FR15: ระบบ fallback auto-sync สถานะ subscription เมื่อผู้ใช้เปิดแอปครั้งถัดไป กรณี deep link ไม่ทำงาน

### Feature Gating & Quota Management

- FR16: ระบบล็อคฟีเจอร์ที่ต้องการ tier สูงกว่า และแสดง Feature Lock screen (Variant A)
- FR17: ระบบนับและจำกัด quota การใช้งานรายวันตาม tier และแสดง Quota Exceeded screen (Variant B)
- FR18: ระบบรีเซ็ต quota ทุกวันอัตโนมัติ
- FR19: ผู้ใช้ Plus สามารถสร้างโปรไฟล์ได้สูงสุด 3 โปรไฟล์
- FR20: ผู้ใช้ Premium สามารถสร้างโปรไฟล์ได้สูงสุด 5 โปรไฟล์
- FR21: ผู้ใช้ Plus/Premium ไม่เห็นโฆษณา
- FR22: ผู้ใช้ Premium สามารถใช้ AI Summary และ AI Chat ได้
- FR23: ผู้ใช้ Premium สามารถดู Weekly/Monthly Reports ได้
- FR24: ผู้ใช้ Premium สามารถแชร์ด้วย special themes ได้

### Subscription State Management

- FR25: ระบบจัดการสถานะ subscription 5 states: Free / Active / Grace Period / Cancelled / Expired
- FR26: ผู้ใช้สามารถดูสถานะ subscription ปัจจุบันและวันหมดอายุใน "สมาชิกของฉัน"
- FR27: ผู้ใช้สามารถกดไปจัดการ subscription บนเว็บ (เปลี่ยนแพลน/ยกเลิก/อัปเดตบัตร)
- FR28: ระบบแสดง warning banner เมื่อ subscription อยู่ใน Grace Period พร้อมปุ่มต่ออายุ
- FR29: ระบบแสดงวันหมดอายุเมื่อผู้ใช้ยกเลิก subscription แต่ยังไม่หมดอายุ
- FR30: ระบบ downgrade ผู้ใช้กลับเป็น Free เมื่อ subscription หมดอายุ โดยเก็บข้อมูลเดิมไว้

### Subscription Sync

- FR31: ระบบ sync สถานะ subscription อัตโนมัติเมื่อเปิดแอป
- FR32: ระบบ sync สถานะ subscription อัตโนมัติเมื่อ resume จาก background
- FR33: ระบบ sync สถานะ subscription อัตโนมัติเมื่อได้รับ deep link
- FR34: ผู้ใช้สามารถ pull-to-refresh เพื่อ sync สถานะ subscription ได้

### Payment Error Handling

- FR35: ระบบแสดงข้อความ error พร้อม retry option เมื่อ payment ล้มเหลว
- FR36: ระบบแสดง loading state "กำลังตรวจสอบ" พร้อม auto-retry (ทุก 3 วินาที สูงสุด 5 ครั้ง) เมื่อรอยืนยัน
- FR37: ระบบแสดงข้อความ "กรุณาเปิดแอปใหม่" พร้อมปุ่ม retry เมื่อ verification timeout

### Admin & Support (V1.5)

- FR38: Admin สามารถดู subscription metrics (จำนวน subscribers ต่อ tier, conversion rate, churn rate)
- FR39: Admin สามารถดูรายการ payment ที่ failed และ users ใน grace period
- FR40: Support สามารถค้นหาบัญชีผู้ใช้และดูสถานะ subscription
- FR41: Support สามารถ trigger manual sync subscription สำหรับผู้ใช้ที่มีปัญหา

## Non-Functional Requirements

### Performance

- NFR1: Plan Comparison Screen โหลดเสร็จภายใน **2 วินาที**
- NFR2: Feature Gate (lock/quota screen) แสดงผลภายใน **1 วินาที** หลังผู้ใช้กดฟีเจอร์
- NFR3: Subscription sync หลังเปิดแอปหรือ resume เสร็จภายใน **3 วินาที**
- NFR4: Deep link callback จากเว็บ → Success Screen ในแอปภายใน **2 วินาที**
- NFR5: Quota check ต้องไม่ทำให้ user experience ช้าลง — ตรวจสอบภายใน **500ms**

### Security

- NFR6: การสื่อสารระหว่างแอป ↔ เว็บ ↔ payment server ต้องเข้ารหัสด้วย **HTTPS/TLS**
- NFR7: Subscription status webhook ต้อง **idempotent** — ป้องกันการ process ซ้ำ
- NFR8: Deep link ต้องมี **token validation** — ป้องกันการปลอมแปลง subscription status
- NFR9: Admin/Support access ต้องมี **role-based access control** — แยก permission ชัดเจน
- NFR10: Payment data ต้อง **ไม่เก็บในแอปหรือ backend ของ DailyMu** — ใช้ payment provider จัดการ

### Reliability

- NFR11: Subscription state machine ต้อง **ไม่มี state ค้าง** — ทุก transition ต้อง complete หรือ rollback
- NFR12: Payment sync auto-retry: **ทุก 3 วินาที สูงสุด 5 ครั้ง** ก่อนแสดง manual retry
- NFR13: ระบบ subscription ต้อง **uptime ≥ 99.5%** — downtime หมายถึงผู้ใช้เสียสิทธิ์
- NFR14: กรณี backend ล่ม ผู้ใช้ที่มี subscription อยู่ต้อง **ยังเข้าถึงฟีเจอร์ได้** (cached state)

### Scalability

- NFR15: ระบบ subscription ต้องรองรับ **20,000+ users** ใน 3 เดือนแรก
- NFR16: Feature gate check ต้องรองรับ **concurrent requests จาก peak morning usage** (DAU > 50%)
- NFR17: Quota counter ต้องรองรับ **reset ทุกเที่ยงคืน** สำหรับ users ทั้งหมดโดยไม่ส่งผลต่อ performance

### Integration

- NFR18: External Web Payment ต้องรองรับ **Credit Card + PromptPay** เป็นอย่างน้อย
- NFR19: Deep link scheme (`dailymu://`) ต้องทำงานได้ทั้ง **iOS Universal Links** และ **Android App Links**
- NFR20: Subscription webhook ต้องรองรับ **retry จาก payment provider** โดยไม่สร้าง duplicate transactions
