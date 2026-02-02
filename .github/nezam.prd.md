# 📋 TRAINING MANAGEMENT SYSTEM - Product Requirements Document (PRD)

**Version:** 2.0 - Final Simplified  
**Date:** December 6, 2025  
**Status:** ✅ Ready for Development

---

## 🎯 Executive Summary

A comprehensive Training Management System designed for organizing and tracking training programs with focus on attendance management (daily and per-lesson), violation tracking with type-based system, and automated grade calculation.

**Key Features:**
- Program and group management
- Simplified lesson scheduling (name, day, order 1-7) there will be maximum 7 lessons per day for each group
- Dual attendance tracking (daily + per-lesson)
- Violation types system (مواظبة/سلوك)
- Automated grade calculation
- Comprehensive reporting

**Tech Stack:** Laravel 12 | React 19 + Inertia | TailwindCSS 4 | MySQL 8

---

## 📊 System Overview

### Database Architecture (12 Tables)

1. **users** - System users (5 roles)
2. **programs** - Training programs
3. **groups** - Groups within programs (instructor as name string)
4. **trainees** - Trainees in groups (no user account)
5. **lessons** - Lessons per group (name, day, order 1-7)
6. **daily_attendances** - Daily presence tracking (present/absent)
7. **lesson_attendances** - Per-lesson attendance (present/absent)
8. **violation_types** - Violation types (مواظبة/سلوك)
9. **violations** - Recorded violations
10. **grades** - Calculated grades
11. **attendance_summaries** - Attendance metrics cache
12. **audit_logs** - System audit trail

---

## 👥 User Roles

### 1. System Admin
**Permissions:**
- Full system access
- Manage all programs
- Manage all users
- View all reports
- System configuration

### 2. Program Manager
**Permissions:**
- Create and manage programs
- Create and manage groups
- Register trainees
- View program reports
- Manage violation types

### 3. Group Supervisor
**Permissions:**
- Manage group (view only)
- Register trainees in group
- Record daily attendance
- View group attendance reports
- View trainee details

### 4. Instructor
**Permissions:**
- View assigned group
- Record lesson attendance
- Record violations
- View attendance reports
- View grades

### 5. View-Only User
**Permissions:**
- View reports (read-only)
- View dashboards (read-only)
- Export data (read-only)

---

## 📋 Core Features

### 1. Program Management

**Features:**
- Create training programs
- Define program duration (start/end dates)
- Set total training hours
- Manage program status (draft → active → completed/cancelled)
- Add program description

**Fields:**
- Program Name
- Program Code (unique)
- Description
- Program Manager (FK to users)
- Start Date
- End Date
- Total Training Hours
- Status

**Workflow:**
```
Program Manager creates Program → active status → completed
```

---

### 2. Group Management

**Features:**
- Create groups within programs
- Assign supervisor and instructor (as name string)
- Set group capacity
- Manage group status

**Fields:**
- Group Name
- Group Number (unique per program)
- Capacity (default 30)
- Group Supervisor (FK to users)
- Instructor Name (VARCHAR, not FK)
- Status

**Workflow:**
```
Program Manager creates Group → assigns supervisor & instructor
```

---

### 3. Trainee Management

**Features:**
- Register trainees in groups
- Store trainee information
- Track enrollment date
- No user account for trainees

**Fields:**
- First Name
- Last Name
- Email
- Phone
- National ID (unique identifier)
- Date of Birth
- Enrollment Date
- Status (active/inactive/graduated/dropped)

**Constraints:**
- Unique per group (national_id, group_id, program_id)
- No login capability
- Managed by supervisors/admins only

---

### 4. Lesson Management (SIMPLIFIED)

**Features:**
- Schedule lessons per group
- Max 7 lessons per group (ordered 1-7)
- Simple structure (name, day, order)
- Track lesson status

**Fields:**
- Lesson Name
- Lesson Day (DATE)
- Lesson Order (1-7, unique per day/group)
- Status (scheduled/completed/cancelled)
- Notes (optional)

**Constraints:**
- Unique per group: (group_id, lesson_day, lesson_order)
- No start/end times
- No specific instructor assignment
- No location tracking

**Example:**
```
Group A - Dec 6, 2025
  - Order 1: Math (9:00-10:00)
  - Order 2: History (10:00-11:00)
  - Order 3: Science (11:00-12:00)
```

---

### 5. Attendance Management (DUAL SYSTEM)

#### 5a. Daily Attendance

**Purpose:** Track overall presence for the day

**Fields:**
- Trainee ID (FK)
- Group ID (FK)
- Program ID (FK)
- Attendance Date
- Status: `present` or `absent`
- Recorded By (FK to users)

**Workflow:**
```
Supervisor/Instructor marks daily attendance
→ Once per trainee per day
→ Simple present/absent
```

**Use Cases:**
- Morning roll call
- End-of-day attendance
- Overall daily presence

#### 5b. Lesson Attendance

**Purpose:** Track attendance for each specific lesson

**Fields:**
- Lesson ID (FK)
- Trainee ID (FK)
- Group ID (FK)
- Program ID (FK)
- Status: `present` or `absent`

**Workflow:**
```
Instructor marks lesson attendance
→ After each lesson
→ Per lesson per trainee
```

**Use Cases:**
- Per-lesson tracking
- Detailed attendance breakdown
- Lesson-specific analytics

---

### 6. Violation Management (TYPE-BASED SYSTEM)

#### 6a. Violation Types

**Purpose:** Define violation categories with value rules

**Fields:**
- Name (e.g., "Absence", "Rude Behavior")
- Type: `مواظبة` (Attendance) OR `سلوك` (Behavior)
- For مواظبة: `fixed_value` (e.g., -5, -10)
- For سلوك: `min_value` to `max_value` range (e.g., -10 to -1)
- Description (optional)

**Setup Examples:**

```
مواظبة (Attendance - Fixed Values):
├── "Absence" → fixed_value = -5
├── "Late Arrival" → fixed_value = -3
└── "Early Leave" → fixed_value = -2

سلوك (Behavior - Range Values):
├── "Rude Behavior" → min = -10, max = -1
├── "Not Following Rules" → min = -5, max = -1
└── "Disrespect" → min = -8, max = -2
```

#### 6b. Violations Recording

**Fields:**
- Trainee ID (FK)
- Group ID (FK)
- Program ID (FK)
- Violation Type ID (FK)
- Value (points deducted)
- Violation Date
- Description (details of violation)
- Action Taken (optional)
- Recorded By (FK to users)

**Recording Process:**

```
مواظبة (Fixed):
  Instructor selects "Absence"
  → System automatically uses fixed_value (-5)
  → Records violation

سلوك (Range):
  Instructor selects "Rude Behavior"
  → Instructor enters value (e.g., -7)
  → Must be within min (-10) to max (-1)
  → Records violation
```

---

### 7. Grade System

**Calculation Formula:**

```
Attendance Grade:
  attended_lessons = count(lesson_attendances where status = 'present')
  total_lessons = count(lessons in program)
  attendance_grade = (attended_lessons / total_lessons) * 100

Behavior Grade:
  violations = all violations for trainee in program
  total_deduction = sum(violation.value)
  behavior_grade = 100 + total_deduction
  (Note: Will be <100 if violations exist)

Final Grade:
  final_grade = (attendance_grade + behavior_grade) / 2

Status Determination:
  final_grade >= 90: excellent
  final_grade >= 80: good
  final_grade >= 70: fair
  final_grade >= 60: satisfactory
  final_grade < 60: needs_improvement
```

**Example Calculation:**

```
Trainee: Ahmed Ali
Program: Advanced English

Attendance:
  Total lessons: 50
  Attended: 48
  Attendance Grade = (48/50) × 100 = 96

Violations:
  Absence: -5
  Late Arrival: -3
  Rude Behavior: -7
  Total Deduction: -15
  Behavior Grade = 100 + (-15) = 85

Final Grade:
  Final Grade = (96 + 85) / 2 = 90.5
  Status: Excellent
```

---

### 8. Reporting System

#### 8a. Daily Attendance Report
- Trainees present/absent per day
- Attendance percentage by day
- Trends and patterns

#### 8b. Lesson Attendance Report
- Per-lesson attendance breakdown
- Attendance by lesson
- Lesson-specific metrics

#### 8c. Attendance Analysis
- Attendance percentage (daily vs lesson)
- Attendance trends over time
- Trainee comparison

#### 8d. Violation Report
- Violations recorded per trainee
- Violations by type (مواظبة/سلوك)
- Violation frequency

#### 8e. Grade Report
- Final grades per trainee
- Grade distribution
- Performance analysis

#### 8f. Export Options
- Excel export
- PDF export
- CSV export

---

## 🗂️ UI Pages Structure

### Admin/Manager Pages

**Authentication:**
- Login page
- User registration (admin only)

**Dashboard:**
- System overview
- Quick statistics
- Recent activities

**Program Management:**
- Programs list (index)
- Program details (show)
- Create program
- Edit program

**Group Management:**
- Groups list (index)
- Group details (show)
- Create group
- Edit group

**Trainee Management:**
- Trainees list (index)
- Trainee details (show)
- Register trainee (create)
- Edit trainee (edit)

**Lesson Management:**
- Lessons list (index)
- Create lesson
- Edit lesson

**Attendance Recording:**
- Daily Roll Call page (record daily attendance)
- Lesson Attendance page (record per-lesson attendance)

**Attendance Reports:**
- Daily Attendance Report
- Lesson Attendance Report
- Attendance History

**Violation Management:**
- Violation Types list (create, edit, delete)
- Violations list (view all)
- Record violation (create)
- Violation Report

**Grade Management:**
- Grades list (view all)
- Grade Report

**General Reports:**
- Dashboard with key metrics
- Export options (Excel, PDF)

---

## 📊 Data Models

### Users Model
```
- id (UUID)
- name
- email (unique)
- password
- phone
- avatar
- role (enum)
- email_verified_at
- deleted_at (soft delete)
- timestamps
```

### Programs Model
```
- id (UUID)
- name
- code (unique)
- description
- program_manager_id (FK)
- start_date
- end_date
- total_training_hours
- status (enum)
- deleted_at
- timestamps
```

### Groups Model
```
- id (UUID)
- program_id (FK)
- group_name
- group_number
- capacity
- group_supervisor_id (FK)
- instructor_name (VARCHAR)
- status (enum)
- deleted_at
- timestamps
```

### Trainees Model
```
- id (UUID)
- group_id (FK)
- program_id (FK)
- first_name
- last_name
- email
- phone
- national_id
- date_of_birth
- enrollment_date
- status (enum)
- deleted_at
- timestamps
```

### Lessons Model
```
- id (UUID)
- group_id (FK)
- program_id (FK)
- lesson_name
- lesson_day (DATE)
- lesson_order (1-7)
- status (enum)
- notes
- deleted_at
- timestamps
```

### Daily Attendances Model
```
- id (UUID)
- trainee_id (FK)
- group_id (FK)
- program_id (FK)
- attendance_date (DATE)
- status (enum: present/absent)
- recorded_by (FK)
- created_at
```

### Lesson Attendances Model
```
- id (UUID)
- lesson_id (FK)
- trainee_id (FK)
- group_id (FK)
- program_id (FK)
- status (enum: present/absent)
- created_at
```

### Violation Types Model
```
- id (UUID)
- name
- type (enum: مواظبة/سلوك)
- min_value
- max_value
- fixed_value
- description
- timestamps
```

### Violations Model
```
- id (UUID)
- trainee_id (FK)
- group_id (FK)
- program_id (FK)
- violation_type_id (FK)
- value (INT)
- violation_date (DATE)
- description
- action_taken
- recorded_by (FK)
- timestamps
```

### Grades Model
```
- id (UUID)
- trainee_id (FK)
- group_id (FK)
- program_id (FK)
- attendance_grade (DECIMAL)
- behavior_grade (DECIMAL)
- final_grade (DECIMAL)
- status (enum)
- calculated_at
- updated_at
```

### Attendance Summaries Model
```
- id (UUID)
- trainee_id (FK)
- program_id (FK)
- group_id (FK)
- total_lessons
- attended_lessons
- missed_lessons
- lesson_attendance_percentage
- total_days
- present_days
- absent_days
- daily_attendance_percentage
- last_updated
```

---

## 🔐 Permissions & Access Control

### Role-Based Access Matrix

| Feature | Admin | Manager | Supervisor | Instructor | View-Only |
|---------|-------|---------|------------|-----------|-----------|
| Create Program | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Program | ✅ | ✅ | ❌ | ❌ | ❌ |
| Create Group | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Group | ✅ | ✅ | ❌ | ❌ | ❌ |
| Register Trainee | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Trainee | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Lesson | ✅ | ✅ | ✅ | ✅ | ❌ |
| Record Daily Attendance | ✅ | ✅ | ✅ | ✅ | ❌ |
| Record Lesson Attendance | ✅ | ✅ | ✅ | ✅ | ❌ |
| Record Violation | ✅ | ✅ | ✅ | ✅ | ❌ |
| Create Violation Type | ✅ | ✅ | ❌ | ❌ | ❌ |
| View Reports | ✅ | ✅ | ✅ | ✅ | ✅ |
| Export Data | ✅ | ✅ | ✅ | ✅ | ✅ |
| Manage Users | ✅ | ❌ | ❌ | ❌ | ❌ |

---

## 🔄 Business Workflows

### Workflow 1: Program Setup

```
1. System Admin creates Program
   ├── Name: "Advanced English Training"
   ├── Code: "AET-2025"
   ├── Start: 2025-01-01, End: 2025-03-31
   └── Status: draft

2. Program Manager creates Groups
   ├── Group 1: 30 trainees, Supervisor: Ali, Instructor: "Ahmed"
   ├── Group 2: 25 trainees, Supervisor: Fatma, Instructor: "Sara"
   └── Activate program (status: active)

3. Group Supervisor registers Trainees
   ├── Import or manually register trainees
   ├── Set enrollment dates
   └── Verify information

4. Instructor creates Violation Types
   ├── مواظبة: "Absence" (-5), "Late" (-3)
   └── سلوك: "Rude Behavior" (-10 to -1)
```

### Workflow 2: Daily Operations

```
1. Instructor schedules Lessons
   ├── Day: 2025-01-10
   ├── Order: 1, Name: "Math", Status: scheduled
   └── Order: 2, Name: "History", Status: scheduled

2. Supervisor records Daily Attendance (morning)
   ├── Selects date: 2025-01-10
   ├── Marks: Present, Absent, Present, ...
   └── Saves daily attendance

3. Instructor records Lesson Attendance (per lesson)
   ├── Selects Lesson 1: Math
   ├── Marks attendance per trainee
   └── Repeats for Lesson 2, 3, ...

4. Instructor records Violations
   ├── Trainee: Ahmed
   ├── Type: "Rude Behavior"
   ├── Value: -7 (within -10 to -1)
   └── Description: "Disrespected supervisor"
```

### Workflow 3: Grade Calculation

```
1. System auto-calculates grades daily
   ├── Attendance Grade = (Attended Lessons / Total) × 100
   ├── Behavior Grade = 100 + sum(violation values)
   └── Final Grade = (Attendance + Behavior) / 2

2. Grade Status updated
   ├── Excellent (≥90)
   ├── Good (≥80)
   ├── Fair (≥70)
   ├── Satisfactory (≥60)
   └── Needs Improvement (<60)

3. Triggers for updates
   ├── Lesson attendance recorded
   ├── Daily attendance recorded
   ├── Violation recorded
   └── All updates trigger grade recalculation
```

---

## 📈 Key Metrics & KPIs

### Trainee Level
- Daily attendance percentage
- Lesson attendance percentage
- Violation count (by type)
- Final grade
- Grade trend

### Group Level
- Total trainees
- Average attendance
- Dropout rate
- Average grade

### Program Level
- Total trainees
- Program completion rate
- Average grades by group
- Violation patterns

---

## 🔧 Technical Requirements

### Backend (Laravel 12)
- RESTful API endpoints
- Authentication & authorization
- Database migrations
- Model relationships
- Validation rules
- Error handling

### Frontend (React 19 + Inertia)
- Component-based UI
- Form handling
- Data tables
- Charts & analytics
- Responsive design
- Dark mode support

### Database (MySQL 8)
- 12 tables
- Foreign key relationships
- Proper indexing
- Soft deletes
- Audit logging

---

## 📱 System Requirements

### Hardware
- Minimum: 2GB RAM, 10GB Storage
- Recommended: 4GB RAM, 50GB Storage

### Software
- PHP 8.3+
- Node.js 20+
- MySQL 8+
- Composer
- npm/yarn

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🚀 Deployment & Hosting

### Hosting Options
- Shared hosting (cPanel)
- VPS (DigitalOcean, Linode)
- Cloud (AWS, Google Cloud, Azure)
- Docker (containerized)

### CI/CD
- GitHub Actions
- Automated testing
- Automated deployment

### Backup & Recovery
- Daily backups
- Off-site backup storage
- Recovery procedures

---

## 📅 Development Timeline

### Phase 1: Database Setup (Week 1)
- Create 12 tables
- Set up migrations
- Configure relationships

### Phase 2: API Development (Week 2)
- Create controllers
- Create routes
- API testing

### Phase 3: Frontend Development (Week 3)
- Create React components
- Create pages
- Form handling

### Phase 4: Features Implementation (Week 4)
- Attendance management
- Violation types system
- Grade calculation

### Phase 5: Reporting & Analytics (Week 5)
- Report generation
- Export functionality
- Dashboard creation

### Phase 6: Testing & Deployment (Week 6)
- Unit testing
- Integration testing
- User acceptance testing
- Production deployment

**Total: 6 weeks with GitHub Copilot acceleration**

---

## ✅ Success Criteria

### Functionality
- [x] All 12 tables created and migrated
- [x] All API endpoints working
- [x] All React pages functional
- [x] Attendance tracking (daily + lesson)
- [x] Violation types system working
- [x] Grade calculation automated
- [x] Reports generating correctly

### Performance
- [x] Page load time < 2 seconds
- [x] API response time < 500ms
- [x] Database queries optimized
- [x] Proper indexing in place

### Quality
- [x] Code follows best practices
- [x] All tests passing
- [x] Error handling comprehensive
- [x] Security measures in place

### User Experience
- [x] Intuitive interface
- [x] Responsive design
- [x] Accessibility compliant
- [x] Clear navigation

---

## 📞 Support & Maintenance

### Post-Launch Support
- Bug fixing
- Feature enhancements
- Performance optimization
- Security updates

### Documentation
- User manual
- API documentation
- Developer guide
- Admin guide

---

## 🎯 Future Enhancements

### Phase 2 Features
- Mobile app (React Native)
- SMS notifications
- Email notifications
- Advanced analytics
- Custom reports builder
- Data import/export
- Student portal

### Phase 3 Features
- Multi-language support
- Offline mode
- AI-powered insights
- Parent portal
- Real-time notifications

---

## 📝 Notes

- **Trainees:** Data records only, no user accounts, managed by admins/supervisors
- **Instructor:** Stored as name string in groups table, not as user FK
- **Lessons:** Simplified (name, day, order 1-7), no complex scheduling
- **Attendance:** Dual system (daily + per-lesson, both present/absent only)
- **Violations:** Type-based with مواظبة (fixed) and سلوك (range) values
- **Grades:** Automated calculation based on attendance and violations

---

**Document Version:** 2.0 Final Simplified  
**Last Updated:** December 6, 2025  
**Status:** ✅ Ready for Development  
**Approved By:** Development Team

---

**This PRD is complete and ready for implementation with the 12 database tables and all simplified features! 🚀**
