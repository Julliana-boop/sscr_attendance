// ─────────────────────────────────────────────────────────────────
//  SSC-R Attendance System — Student Data
//  Grade 7 · Section B · February 2026
// ─────────────────────────────────────────────────────────────────

const STUDENTS = [
  { id: '2026-0015', name: 'CICERON, Keith Czimonne Anderson', grade: 7, section: 'B' },
  { id: '2026-0016', name: 'BENEDICTO, Kar Tristan Chino',     grade: 7, section: 'B' },
  { id: '2026-0017', name: 'RAPAY, Dann Anthony',              grade: 7, section: 'B' },
  { id: '2026-0018', name: 'TIMKANG, Khemuel Rosh',            grade: 7, section: 'B' },
  { id: '2026-0019', name: 'SUERO, Rick',                      grade: 7, section: 'B' },
  { id: '2026-0020', name: 'ARCHE, John Carl',                 grade: 7, section: 'B' },
  { id: '2026-0021', name: 'BOOK, Vincent',                    grade: 7, section: 'B' },
  { id: '2026-0022', name: 'DUPAY, Xyrus',                     grade: 7, section: 'B' },
  { id: '2026-0023', name: 'OLANGA, Rhinehart L.',             grade: 7, section: 'B' },
  { id: '2026-0024', name: 'LAGBAS, Arjie',                    grade: 7, section: 'B' },
  { id: '2026-0025', name: 'CARREON, Aaron',                   grade: 7, section: 'B' },
  { id: '2026-0026', name: 'PAGKATIPUNAN, JD',                 grade: 7, section: 'B' },
  { id: '2026-0027', name: 'PUSPUS, Rafael',                   grade: 7, section: 'B' },
  { id: '2026-0028', name: 'GREGORIO, Kenneth',                grade: 7, section: 'B' },
  { id: '2026-0029', name: 'ESPIRITU, Iubilaeum C.',           grade: 7, section: 'B' },
  { id: '2026-0030', name: 'GONZAGA, Julliana Louisse M.',     grade: 7, section: 'B' },
  { id: '2026-0031', name: 'MALACAS, Mel Reynald L.',          grade: 7, section: 'B' },
  { id: '2026-0032', name: 'TULABING, Jhon Raven',             grade: 7, section: 'B' },
  { id: '2026-0033', name: 'ALBA, Rhenmart Christian C.',      grade: 7, section: 'B' },
  { id: '2026-0034', name: 'ARANO, Jan Kerk C.',               grade: 7, section: 'B' },
  { id: '2026-0035', name: 'BINONDO, Frants Einstene Aaron F.',grade: 7, section: 'B' },
  { id: '2026-0036', name: 'DIMACULANGAN, Von Aleina P.',      grade: 7, section: 'B' },
  { id: '2026-0037', name: 'RAMOS, Margaret Armi Clarisse B.', grade: 7, section: 'B' },
];

// ─────────────────────────────────────────────────────────────────
//  Mel Reynald Malacas (2026-0031) — February 2026 Attendance
//  Status: P = Present | L = Late | A = Absent
// ─────────────────────────────────────────────────────────────────

const MEL_ATTENDANCE = {
  Math: {
    'Feb 01':'P','Feb 02':'P','Feb 03':'P','Feb 04':'L','Feb 05':'L',
    'Feb 06':'L','Feb 07':'P','Feb 08':'P','Feb 09':'P','Feb 10':'P',
    'Feb 11':'L','Feb 12':'P','Feb 13':'P','Feb 14':'P','Feb 15':'L',
    'Feb 16':'A','Feb 17':'P','Feb 18':'P','Feb 19':'P','Feb 20':'P',
    'Feb 21':'L','Feb 22':'P','Feb 23':'P','Feb 24':'L','Feb 25':'P',
    'Feb 26':'P','Feb 27':'P','Feb 28':'P',
  },
  English: {
    'Feb 01':'P','Feb 02':'L','Feb 03':'P','Feb 04':'P','Feb 05':'P',
    'Feb 06':'A','Feb 07':'P','Feb 08':'P','Feb 09':'A','Feb 10':'P',
    'Feb 11':'P','Feb 12':'L','Feb 13':'P','Feb 14':'P','Feb 15':'A',
    'Feb 16':'P','Feb 17':'P','Feb 18':'P','Feb 19':'P','Feb 20':'A',
    'Feb 21':'P','Feb 22':'P','Feb 23':'L','Feb 24':'P','Feb 25':'P',
    'Feb 26':'P','Feb 27':'P','Feb 28':'P',
  },
  Science: {
    'Feb 01':'P','Feb 02':'P','Feb 03':'P','Feb 04':'P','Feb 05':'P',
    'Feb 06':'P','Feb 07':'P','Feb 08':'P','Feb 09':'P','Feb 10':'P',
    'Feb 11':'P','Feb 12':'L','Feb 13':'A','Feb 14':'P','Feb 15':'P',
    'Feb 16':'P','Feb 17':'P','Feb 18':'P','Feb 19':'P','Feb 20':'P',
    'Feb 21':'P','Feb 22':'P','Feb 23':'P','Feb 24':'P','Feb 25':'L',
    'Feb 26':'P','Feb 27':'P','Feb 28':'P',
  },
  Filipino: {
    'Feb 01':'P','Feb 02':'P','Feb 03':'P','Feb 04':'P','Feb 05':'P',
    'Feb 06':'P','Feb 07':'L','Feb 08':'P','Feb 09':'P','Feb 10':'P',
    'Feb 11':'P','Feb 12':'P','Feb 13':'P','Feb 14':'L','Feb 15':'P',
    'Feb 16':'P','Feb 17':'P','Feb 18':'P','Feb 19':'L','Feb 20':'P',
    'Feb 21':'P','Feb 22':'P','Feb 23':'P','Feb 24':'P','Feb 25':'P',
    'Feb 26':'P','Feb 27':'P','Feb 28':'P',
  },
};

// ─────────────────────────────────────────────────────────────────
//  Computed Stats for Mel
//  Overall: 106/112 attended (P+L) | 6 Absent | 15 Late | 94.6%
// ─────────────────────────────────────────────────────────────────

const MEL_STATS = {
  overallRate:    94.6,
  totalClasses:   112,
  attended:       106,   // Present + Late
  absences:        6,
  lateThisMonth:  15,
  bySubject: {
    Math:    { present: 20, late: 7, absent: 1, total: 28, rate: 96.4 },
    English: { present: 21, late: 3, absent: 4, total: 28, rate: 85.7 },
    Science: { present: 25, late: 2, absent: 1, total: 28, rate: 96.4 },
    Filipino:{ present: 25, late: 3, absent: 0, total: 28, rate: 100.0 },
  },
};

// ─────────────────────────────────────────────────────────────────
//  Calendar: worst-case daily status across all subjects
// ─────────────────────────────────────────────────────────────────

const MEL_CALENDAR = {
  '2026-02-01': 'present',
  '2026-02-02': 'late',
  '2026-02-03': 'present',
  '2026-02-04': 'late',
  '2026-02-05': 'late',
  '2026-02-06': 'absent',
  '2026-02-07': 'late',
  '2026-02-08': 'present',
  '2026-02-09': 'absent',
  '2026-02-10': 'present',
  '2026-02-11': 'late',
  '2026-02-12': 'late',
  '2026-02-13': 'absent',
  '2026-02-14': 'late',
  '2026-02-15': 'absent',
  '2026-02-16': 'absent',
  '2026-02-17': 'present',
  '2026-02-18': 'present',
  '2026-02-19': 'late',
  '2026-02-20': 'absent',
  '2026-02-21': 'late',
  '2026-02-22': 'present',
  '2026-02-23': 'late',
  '2026-02-24': 'late',
  '2026-02-25': 'late',
  '2026-02-26': 'present',
  '2026-02-27': 'present',
  '2026-02-28': 'present',
};

// ─────────────────────────────────────────────────────────────────
//  Grade 7 · Section B — Weekly Schedule
//  Based on faculty schedule image (Section B classes only)
// ─────────────────────────────────────────────────────────────────

const SCHEDULE_SEC_B = [
  { time: '07:00 AM', subject: 'MATH', name: 'Mathematics',      room: 'Room 101', days: ['Monday', 'Wednesday', 'Friday'] },
  { time: '08:30 AM', subject: 'ENG',  name: 'English',          room: 'Room 102', days: ['Monday', 'Wednesday', 'Thursday'] },
  { time: '08:30 AM', subject: 'SCI',  name: 'Science',          room: 'Lab 201',  days: ['Tuesday', 'Friday'] },
  { time: '10:00 AM', subject: 'FIL',  name: 'Filipino',         room: 'Room 103', days: ['Tuesday'] },
  { time: '01:00 PM', subject: 'MATH', name: 'Mathematics',      room: 'Room 101', days: ['Tuesday', 'Thursday'] },
  { time: '02:30 PM', subject: 'ENG',  name: 'English',          room: 'Room 102', days: ['Tuesday', 'Thursday'] },
];
// ─────────────────────────────────────────────────────────────────
//  GLOBAL LOOKUP TABLES
//  Required by admin.html, faculty.js, faculty.html
// ─────────────────────────────────────────────────────────────────

const SSCR_SUBJECTS = ['Math', 'English', 'Science', 'Filipino'];
const SSCR_SECTIONS = ['Sec A', 'Sec B', 'Sec C'];

// Section A — Grade 7 Section A roster
const SEC_A_STUDENTS = [
  { id: '2026-0001', name: 'GONZAGA, Krystine Ember M.',    grade: 7, section: 'Sec A' },
  { id: '2026-0002', name: 'SERRANO, Grace Angel G.',       grade: 7, section: 'Sec A' },
  { id: '2026-0003', name: 'VILLANES, Stephen',             grade: 7, section: 'Sec A' },
  { id: '2026-0004', name: 'FERNANDEZ, Kenneth Clein T.',   grade: 7, section: 'Sec A' },
  { id: '2026-0005', name: 'BAGUISA, Gerald Andrei P.',     grade: 7, section: 'Sec A' },
  { id: '2026-0006', name: 'MIRANDA, Marvin A.',            grade: 7, section: 'Sec A' },
  { id: '2026-0007', name: 'LEYCO, Jose Raphael A.',        grade: 7, section: 'Sec A' },
  { id: '2026-0008', name: 'MAGLINTE, Jheniel B.',          grade: 7, section: 'Sec A' },
  { id: '2026-0009', name: 'REYES, Bean James V.',          grade: 7, section: 'Sec A' },
  { id: '2026-0010', name: 'CAGITLA, Adrian S.',            grade: 7, section: 'Sec A' },
  { id: '2026-0011', name: 'COLADILLA, Andre P.',           grade: 7, section: 'Sec A' },
  { id: '2026-0012', name: 'HONORAS, Christian Benedict',   grade: 7, section: 'Sec A' },
  { id: '2026-0013', name: 'LLANZA, Lawrence Angelo K.',    grade: 7, section: 'Sec A' },
  { id: '2026-0014', name: 'YANQUILING, Augustine Dave',    grade: 7, section: 'Sec A' },
];

// Section B — reuse the existing STUDENTS array with section key corrected
const SEC_B_STUDENTS = STUDENTS.map(s => ({ ...s, section: 'Sec B' }));

// Section C — Grade 7 Section C roster
const SEC_C_STUDENTS = [
  { id: '2026-0038', name: 'BASAYSAY, John Matthew V.',         grade: 7, section: 'Sec C' },
  { id: '2026-0039', name: 'EGANA, Sean M.',                    grade: 7, section: 'Sec C' },
  { id: '2026-0040', name: 'PUJALTE, Joanne Mae',               grade: 7, section: 'Sec C' },
  { id: '2026-0041', name: 'RODRIGUEZ, Richard Matthew A.',     grade: 7, section: 'Sec C' },
  { id: '2026-0042', name: 'VALENZUELA, Dillon Ira M.',         grade: 7, section: 'Sec C' },
  { id: '2026-0043', name: 'VILLAMIN, Robin Gabriel B.',        grade: 7, section: 'Sec C' },
  { id: '2026-0044', name: 'MARALIT, John Marco S.',            grade: 7, section: 'Sec C' },
  { id: '2026-0045', name: 'JALOS, Kim Albert G.',              grade: 7, section: 'Sec C' },
  { id: '2026-0046', name: 'PATAG, Francis Gerard P.',          grade: 7, section: 'Sec C' },
  { id: '2026-0047', name: 'CANUTO, Jared Rafael D.',           grade: 7, section: 'Sec C' },
  { id: '2026-0048', name: 'CONTANTE, Raymond C.',              grade: 7, section: 'Sec C' },
];

// Master map keyed by section label — used by admin.html & faculty.js
const SSCR_STUDENTS = {
  'Sec A': SEC_A_STUDENTS,
  'Sec B': SEC_B_STUDENTS,
  'Sec C': SEC_C_STUDENTS,
};

// Flat list helper — used by faculty.js openStudentListModal()
function getAllStudents() {
  return SSCR_SECTIONS.flatMap(sec => SSCR_STUDENTS[sec]);
}

// ─────────────────────────────────────────────────────────────────
//  DB  —  localStorage-backed attendance store
//
//  Shape in localStorage (key: 'sscr_attendance'):
//    { [subject]: { [section]: { [studentId]: { status, timeIn, date } } } }
//
//  Public API (used by admin.html, faculty.js):
//    DB.init()                          — load from storage or seed demo data
//    DB.get(subj, sec, id)              — { status, timeIn, date }
//    DB.set(subj, sec, id, status, timeIn) — write one record + persist
//    DB.reset()                         — wipe storage and re-seed demo data
//    DB.snapshot()                      — return deep copy of whole store
//
//  The legacy `attendanceDB` reference is kept as an alias so pages that
//  read attendanceDB[subj][sec][id] directly continue to work unchanged.
// ─────────────────────────────────────────────────────────────────

const DB = (function () {
  const LS_KEY      = 'sscr_attendance';
  const LS_VER_KEY  = 'sscr_attendance_ver';
  const SCHEMA_VER  = '1';          // bump to force a re-seed after schema changes

  // ── Demo seed data ────────────────────────────────────────────
  const SEED_STATUSES = ['Present', 'Present', 'Present', 'Late', 'Absent', ''];
  const SEED_TIMES    = ['07:05 AM', '07:20 AM', '07:45 AM', '08:15 AM', '08:30 AM'];
  const SEED_DATE     = '2026-03-01';

  function buildEmpty() {
    const db = {};
    SSCR_SUBJECTS.forEach(function (subj) {
      db[subj] = {};
      SSCR_SECTIONS.forEach(function (sec) {
        db[subj][sec] = {};
        SSCR_STUDENTS[sec].forEach(function (s) {
          db[subj][sec][s.id] = { status: '', timeIn: '', date: '' };
        });
      });
    });
    return db;
  }

  function buildSeed() {
    const db = buildEmpty();
    SSCR_SUBJECTS.forEach(function (subj) {
      SSCR_SECTIONS.forEach(function (sec) {
        SSCR_STUDENTS[sec].forEach(function (s, i) {
          const pick = SEED_STATUSES[i % SEED_STATUSES.length];
          if (pick === 'Present') {
            db[subj][sec][s.id] = { status: 'Present', timeIn: SEED_TIMES[i % SEED_TIMES.length], date: SEED_DATE };
          } else if (pick === 'Late') {
            db[subj][sec][s.id] = { status: 'Late',    timeIn: '08:45 AM', date: SEED_DATE };
          } else if (pick === 'Absent') {
            db[subj][sec][s.id] = { status: 'Absent',  timeIn: '',         date: SEED_DATE };
          }
        });
      });
    });
    return db;
  }

  // ── Persistence helpers ───────────────────────────────────────
  function persist(db) {
    try {
      localStorage.setItem(LS_KEY,     JSON.stringify(db));
      localStorage.setItem(LS_VER_KEY, SCHEMA_VER);
    } catch (e) {
      console.warn('DB.persist: localStorage write failed', e);
    }
  }

  function loadFromStorage() {
    try {
      const ver = localStorage.getItem(LS_VER_KEY);
      if (ver !== SCHEMA_VER) return null;   // schema changed — force re-seed
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  // ── Merge stored data onto a fresh empty structure ────────────
  // This ensures new students added to the roster get blank slots
  // even when loading an older snapshot that predates them.
  function mergeInto(base, stored) {
    SSCR_SUBJECTS.forEach(function (subj) {
      SSCR_SECTIONS.forEach(function (sec) {
        SSCR_STUDENTS[sec].forEach(function (s) {
          if (stored[subj] && stored[subj][sec] && stored[subj][sec][s.id]) {
            base[subj][sec][s.id] = stored[subj][sec][s.id];
          }
        });
      });
    });
    return base;
  }

  // ── Internal store (also exposed as legacy `attendanceDB`) ────
  let _store = buildEmpty();

  // ── Public API ────────────────────────────────────────────────
  return {
    /** Load from localStorage if available; otherwise seed demo data. */
    init: function () {
      const stored = loadFromStorage();
      if (stored) {
        _store = mergeInto(buildEmpty(), stored);
        console.info('DB.init: loaded from localStorage');
      } else {
        _store = buildSeed();
        persist(_store);
        console.info('DB.init: seeded demo data');
      }
    },

    /** Read one record. Always returns an object, never undefined. */
    get: function (subj, sec, id) {
      return (_store[subj] && _store[subj][sec] && _store[subj][sec][id])
        ? _store[subj][sec][id]
        : { status: '', timeIn: '', date: '' };
    },

    /** Write one record and immediately persist to localStorage. */
    set: function (subj, sec, id, status, timeIn, date) {
      if (!_store[subj] || !_store[subj][sec]) return;
      _store[subj][sec][id] = {
        status:  status  || '',
        timeIn:  timeIn  || '',
        date:    date    || new Date().toISOString().split('T')[0],
      };
      persist(_store);
    },

    /** Wipe localStorage and re-seed with fresh demo data. */
    reset: function () {
      _store = buildSeed();
      persist(_store);
      console.info('DB.reset: demo data restored');
    },

    /** Return a deep copy of the whole store (for export / reporting). */
    snapshot: function () {
      return JSON.parse(JSON.stringify(_store));
    },

    // ── Legacy alias ─────────────────────────────────────────────
    // Pages that read attendanceDB[subj][sec][id] directly keep working
    // because _store is the same object reference they'll touch via DB.get/set.
    // The proxy below makes direct property access read-through to _store.
    get _raw() { return _store; },
  };
}());

// Legacy alias — keeps admin.html buildRows() and faculty.js renderStudentTable()
// working without changes to their attendanceDB[subj][sec][id] reads.
// Writes MUST go through DB.set() to trigger localStorage persistence.
const attendanceDB = new Proxy({}, {
  get: function (_, subj) {
    return new Proxy({}, {
      get: function (_, sec) {
        return new Proxy({}, {
          get: function (_, id) { return DB.get(subj, sec, id); },
        });
      },
    });
  },
});