// ═══════════════════════════════════════════════════════════════════════════
//  SSC-R Attendance System — Login Page Logic
//  Depends on: students-data.js (SSCR_STUDENTS, DB, getAllStudents)
// ═══════════════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────────────
//  CREDENTIAL STORE
//  Students  — username = "S" + student ID  (e.g. S2026-0031)
//  Faculty   — username = "F-" + surname    (e.g. F-Doneza)
//  Admin     — username = "A-Gonzaga"
//  NOTE: In production these must NEVER live client-side.
// ───────────────────────────────────────────────────────────────────────────
const CREDENTIALS = {
    // Admin
    'A-Gonzaga':  { password: 'admin2026',  role: 'admin',   redirect: 'admin.html',   displayName: 'Julliana Louisse Gonzaga' },

    // Faculty
    'F-Doneza':   { password: 'math',       role: 'faculty', redirect: 'faculty.html', displayName: 'Rheymard Doneza'  },
    'F-Soriano':  { password: 'english',    role: 'faculty', redirect: 'faculty.html', displayName: 'Gary Soriano'     },
    'F-Bernal':   { password: 'science',    role: 'faculty', redirect: 'faculty.html', displayName: 'Agnes Bernal'     },
    'F-Carpio':   { password: 'filipino',   role: 'faculty', redirect: 'faculty.html', displayName: 'Gerome Carpio'    },

    // Students — Sec A
    'S2026-0001': { password: 'gonzaga',    role: 'student', redirect: 'student.html', displayName: 'GONZAGA, Krystine Ember M.'     },
    'S2026-0002': { password: 'serrano',    role: 'student', redirect: 'student.html', displayName: 'SERRANO, Grace Angel G.'        },
    'S2026-0003': { password: 'villanes',   role: 'student', redirect: 'student.html', displayName: 'VILLANES, Stephen'              },
    'S2026-0004': { password: 'fernandez',  role: 'student', redirect: 'student.html', displayName: 'FERNANDEZ, Kenneth Clein T.'    },
    'S2026-0005': { password: 'baguisa',    role: 'student', redirect: 'student.html', displayName: 'BAGUISA, Gerald Andrei P.'      },
    'S2026-0006': { password: 'miranda',    role: 'student', redirect: 'student.html', displayName: 'MIRANDA, Marvin A.'             },
    'S2026-0007': { password: 'leyco',      role: 'student', redirect: 'student.html', displayName: 'LEYCO, Jose Raphael A.'         },
    'S2026-0008': { password: 'maglinte',   role: 'student', redirect: 'student.html', displayName: 'MAGLINTE, Jheniel B.'           },
    'S2026-0009': { password: 'reyes',      role: 'student', redirect: 'student.html', displayName: 'REYES, Bean James V.'           },
    'S2026-0010': { password: 'cagitla',    role: 'student', redirect: 'student.html', displayName: 'CAGITLA, Adrian S.'             },
    'S2026-0011': { password: 'coladilla',  role: 'student', redirect: 'student.html', displayName: 'COLADILLA, Andre P.'            },
    'S2026-0012': { password: 'honoras',    role: 'student', redirect: 'student.html', displayName: 'HONORAS, Christian Benedict'    },
    'S2026-0013': { password: 'llanza',     role: 'student', redirect: 'student.html', displayName: 'LLANZA, Lawrence Angelo K.'     },
    'S2026-0014': { password: 'yanquiling', role: 'student', redirect: 'student.html', displayName: 'YANQUILING, Augustine Dave'     },

    // Students — Sec B
    'S2026-0015': { password: 'ciceron',      role: 'student', redirect: 'student.html', displayName: 'CICERON, Keith Czimonne Anderson'    },
    'S2026-0016': { password: 'benedicto',    role: 'student', redirect: 'student.html', displayName: 'BENEDICTO, Kar Tristan Chino'        },
    'S2026-0017': { password: 'rapay',        role: 'student', redirect: 'student.html', displayName: 'RAPAY, Dann Anthony'                 },
    'S2026-0018': { password: 'timkang',      role: 'student', redirect: 'student.html', displayName: 'TIMKANG, Khemuel Rosh'               },
    'S2026-0019': { password: 'suero',        role: 'student', redirect: 'student.html', displayName: 'SUERO, Rick'                         },
    'S2026-0020': { password: 'arche',        role: 'student', redirect: 'student.html', displayName: 'ARCHE, John Carl'                    },
    'S2026-0021': { password: 'book',         role: 'student', redirect: 'student.html', displayName: 'BOOK, Vincent'                       },
    'S2026-0022': { password: 'dupay',        role: 'student', redirect: 'student.html', displayName: 'DUPAY, Xyrus'                        },
    'S2026-0023': { password: 'olanga',       role: 'student', redirect: 'student.html', displayName: 'OLANGA, Rhinehart L.'                },
    'S2026-0024': { password: 'lagbas',       role: 'student', redirect: 'student.html', displayName: 'LAGBAS, Arjie'                       },
    'S2026-0025': { password: 'carreon',      role: 'student', redirect: 'student.html', displayName: 'CARREON, Aaron'                      },
    'S2026-0026': { password: 'pagkatipunan', role: 'student', redirect: 'student.html', displayName: 'PAGKATIPUNAN, JD'                    },
    'S2026-0027': { password: 'puspus',       role: 'student', redirect: 'student.html', displayName: 'PUSPUS, Rafael'                      },
    'S2026-0028': { password: 'gregorio',     role: 'student', redirect: 'student.html', displayName: 'GREGORIO, Kenneth'                   },
    'S2026-0029': { password: 'espiritu',     role: 'student', redirect: 'student.html', displayName: 'ESPIRITU, Iubilaeum C.'              },
    'S2026-0030': { password: 'gonzaga',      role: 'student', redirect: 'student.html', displayName: 'GONZAGA, Julliana Louisse M.'        },
    'S2026-0031': { password: 'malacas',      role: 'student', redirect: 'student.html', displayName: 'MALACAS, Mel Reynald L.'             },
    'S2026-0032': { password: 'tulabing',     role: 'student', redirect: 'student.html', displayName: 'TULABING, Jhon Raven'                },
    'S2026-0033': { password: 'alba',         role: 'student', redirect: 'student.html', displayName: 'ALBA, Rhenmart Christian C.'         },
    'S2026-0034': { password: 'arano',        role: 'student', redirect: 'student.html', displayName: 'ARANO, Jan Kerk C.'                  },
    'S2026-0035': { password: 'binondo',      role: 'student', redirect: 'student.html', displayName: 'BINONDO, Frants Einstene Aaron F.'   },
    'S2026-0036': { password: 'dimaculangan', role: 'student', redirect: 'student.html', displayName: 'DIMACULANGAN, Von Aleina P.'         },
    'S2026-0037': { password: 'ramos',        role: 'student', redirect: 'student.html', displayName: 'RAMOS, Margaret Armi Clarisse B.'    },

    // Students — Sec C
    'S2026-0038': { password: 'basaysay',    role: 'student', redirect: 'student.html', displayName: 'BASAYSAY, John Matthew V.'       },
    'S2026-0039': { password: 'egana',       role: 'student', redirect: 'student.html', displayName: 'EGANA, Sean M.'                  },
    'S2026-0040': { password: 'pujalte',     role: 'student', redirect: 'student.html', displayName: 'PUJALTE, Joanne Mae'             },
    'S2026-0041': { password: 'rodriguez',   role: 'student', redirect: 'student.html', displayName: 'RODRIGUEZ, Richard Matthew A.'  },
    'S2026-0042': { password: 'valenzuela',  role: 'student', redirect: 'student.html', displayName: 'VALENZUELA, Dillon Ira M.'      },
    'S2026-0043': { password: 'villamin',    role: 'student', redirect: 'student.html', displayName: 'VILLAMIN, Robin Gabriel B.'     },
    'S2026-0044': { password: 'maralit',     role: 'student', redirect: 'student.html', displayName: 'MARALIT, John Marco S.'         },
    'S2026-0045': { password: 'jalos',       role: 'student', redirect: 'student.html', displayName: 'JALOS, Kim Albert G.'           },
    'S2026-0046': { password: 'patag',       role: 'student', redirect: 'student.html', displayName: 'PATAG, Francis Gerard P.'       },
    'S2026-0047': { password: 'canuto',      role: 'student', redirect: 'student.html', displayName: 'CANUTO, Jared Rafael D.'        },
    'S2026-0048': { password: 'contante',    role: 'student', redirect: 'student.html', displayName: 'CONTANTE, Raymond C.'           },
};

// ───────────────────────────────────────────────────────────────────────────
//  SUBJECT QR CODE REGISTRY
// ───────────────────────────────────────────────────────────────────────────
const SUBJECT_QR_CODES = {
    'SSCR-MATH-SECA-DONEZA':    { subject: 'Math',    section: 'Sec A', faculty: 'Rheymard Doneza', subjectFull: 'Mathematics' },
    'SSCR-MATH-SECB-DONEZA':    { subject: 'Math',    section: 'Sec B', faculty: 'Rheymard Doneza', subjectFull: 'Mathematics' },
    'SSCR-MATH-SECC-DONEZA':    { subject: 'Math',    section: 'Sec C', faculty: 'Rheymard Doneza', subjectFull: 'Mathematics' },
    'SSCR-ENGLISH-SECA-SORIANO':{ subject: 'English', section: 'Sec A', faculty: 'Gary Soriano',    subjectFull: 'English' },
    'SSCR-ENGLISH-SECB-SORIANO':{ subject: 'English', section: 'Sec B', faculty: 'Gary Soriano',    subjectFull: 'English' },
    'SSCR-ENGLISH-SECC-SORIANO':{ subject: 'English', section: 'Sec C', faculty: 'Gary Soriano',    subjectFull: 'English' },
    'SSCR-SCIENCE-SECA-BERNAL': { subject: 'Science', section: 'Sec A', faculty: 'Agnes Bernal',    subjectFull: 'Science' },
    'SSCR-SCIENCE-SECB-BERNAL': { subject: 'Science', section: 'Sec B', faculty: 'Agnes Bernal',    subjectFull: 'Science' },
    'SSCR-SCIENCE-SECC-BERNAL': { subject: 'Science', section: 'Sec C', faculty: 'Agnes Bernal',    subjectFull: 'Science' },
    'SSCR-FILIPINO-SECA-CARPIO':{ subject: 'Filipino',section: 'Sec A', faculty: 'Gerome Carpio',   subjectFull: 'Filipino' },
    'SSCR-FILIPINO-SECB-CARPIO':{ subject: 'Filipino',section: 'Sec B', faculty: 'Gerome Carpio',   subjectFull: 'Filipino' },
    'SSCR-FILIPINO-SECC-CARPIO':{ subject: 'Filipino',section: 'Sec C', faculty: 'Gerome Carpio',   subjectFull: 'Filipino' },
};

// ───────────────────────────────────────────────────────────────────────────
//  BRUTE-FORCE RATE LIMITER
// ───────────────────────────────────────────────────────────────────────────
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS   = 30_000;
const failLog      = {};

function checkLockout(username) {
    const entry = failLog[username];
    if (!entry) return null;
    if (entry.lockedUntil && Date.now() < entry.lockedUntil) {
        const secsLeft = Math.ceil((entry.lockedUntil - Date.now()) / 1000);
        return `Account locked. Try again in ${secsLeft}s.`;
    }
    return null;
}

function recordFailure(username) {
    if (!failLog[username]) failLog[username] = { count: 0, lockedUntil: null };
    failLog[username].count++;
    if (failLog[username].count >= MAX_ATTEMPTS) {
        failLog[username].lockedUntil = Date.now() + LOCKOUT_MS;
        setTimeout(() => { failLog[username] = { count: 0, lockedUntil: null }; }, LOCKOUT_MS);
        return `Too many failed attempts. Account locked for ${LOCKOUT_MS / 1000}s.`;
    }
    const remaining = MAX_ATTEMPTS - failLog[username].count;
    return `Incorrect password. ${remaining} attempt${remaining !== 1 ? 's' : ''} remaining.`;
}

function clearFailures(username) { delete failLog[username]; }

// ───────────────────────────────────────────────────────────────────────────
//  SCANNER STATE
// ───────────────────────────────────────────────────────────────────────────
let loggedInUser   = null;
let html5QrScanner = null;
let cameras        = [];
let activeCameraId = null;
let scanPaused     = false;
let scannedSubject = null;

const ALL_STUDENTS = typeof getAllStudents === 'function' ? getAllStudents() : [];

// ───────────────────────────────────────────────────────────────────────────
//  STEP NAVIGATION
// ───────────────────────────────────────────────────────────────────────────
function showStep(id) {
    ['step-login', 'step-choice', 'step-scanner'].forEach(s => {
        document.getElementById(s).classList.toggle('hidden', s !== id);
    });
}

// ───────────────────────────────────────────────────────────────────────────
//  ALERT HELPERS
// ───────────────────────────────────────────────────────────────────────────
function showAlert(msg, type) {
    const activePanel = document.querySelector('.form-panel.active');
    if (!activePanel) return;
    const el = activePanel.querySelector('.alert');
    if (!el) return;
    el.className = `alert alert-${type} show`;
    el.textContent = msg;
}

function clearAlert() {
    document.querySelectorAll('.alert').forEach(el => el.classList.remove('show'));
}

function shakeCard() {
    const card = document.getElementById('step-login');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'shake 0.4s ease';
}

function disableLoginFor(btn, ms) {
    btn.disabled = true;
    const end = Date.now() + ms;
    const tick = setInterval(() => {
        const left = Math.ceil((end - Date.now()) / 1000);
        if (left <= 0) {
            clearInterval(tick);
            btn.disabled = false;
            btn.textContent = 'Log In';
            clearAlert();
        } else {
            btn.textContent = `Locked (${left}s)`;
        }
    }, 500);
}

// ───────────────────────────────────────────────────────────────────────────
//  TAB SWITCHING
// ───────────────────────────────────────────────────────────────────────────
function switchTab(tab) {
    const tabRow = document.querySelector('.tab-row');
    tabRow.style.display = (tab === 'forgot') ? 'none' : '';

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('.form-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tab}`);
    });
    clearAlert();

    if (tab !== 'forgot') {
        resetForgotForm();
    }
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ───────────────────────────────────────────────────────────────────────────
//  FORGOT PASSWORD STATE + HELPERS
// ───────────────────────────────────────────────────────────────────────────
let forgotVerified = false;

function resetForgotForm() {
    forgotVerified = false;
    const form = document.getElementById('forgot-form');
    if (form) form.reset();
    const newGrp  = document.getElementById('new-pwd-group');
    const confGrp = document.getElementById('confirm-pwd-group');
    const btn     = document.getElementById('forgotBtn');
    const succ    = document.getElementById('forgot-success');
    const err     = document.getElementById('forgot-alert');
    if (newGrp)  newGrp.classList.add('hidden');
    if (confGrp) confGrp.classList.add('hidden');
    if (btn)     btn.textContent = 'Verify Identity';
    if (btn)     btn.disabled = false;
    if (succ)    succ.classList.remove('show');
    if (err)     err.classList.remove('show');
    const userEl = document.getElementById('forgot-username');
    const ansEl  = document.getElementById('forgot-answer');
    if (userEl) userEl.disabled = false;
    if (ansEl)  ansEl.disabled = false;
}

function showForgotAlert(msg) {
    const el   = document.getElementById('forgot-alert');
    const succ = document.getElementById('forgot-success');
    if (el)   { el.className = 'alert alert-error show'; el.textContent = msg; }
    if (succ) succ.classList.remove('show');
}

function showForgotSuccess(msg) {
    const el  = document.getElementById('forgot-success');
    const err = document.getElementById('forgot-alert');
    if (el)  { el.className = 'alert alert-success show'; el.textContent = msg; }
    if (err) err.classList.remove('show');
}

// ───────────────────────────────────────────────────────────────────────────
//  DOM BINDINGS
// ───────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

    // Remember Me — restore saved username on load
    (function restoreRemembered() {
        const saved = localStorage.getItem('sscr_remembered_user');
        if (saved) {
            const usernameInput = document.getElementById('login-username');
            const rememberBox   = document.getElementById('rememberMe');
            if (usernameInput) usernameInput.value = saved;
            if (rememberBox)   rememberBox.checked = true;
        }
    })();

    // ── LOGIN FORM ────────────────────────────────────────────────────────
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        clearAlert();

        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;
        const remember = document.getElementById('rememberMe').checked;
        const btn      = document.getElementById('loginBtn');

        if (!username || !password) {
            showAlert('Please enter both username and password.', 'error');
            return;
        }

        const lockMsg = checkLockout(username);
        if (lockMsg) {
            showAlert(lockMsg, 'error');
            return;
        }

        const cred = CREDENTIALS[username];
        if (!cred) {
            showAlert('Invalid username or password.', 'error');
            shakeCard();
            return;
        }

        if (password !== cred.password) {
            const failMsg = recordFailure(username);
            if (failMsg.startsWith('Too many')) {
                showAlert(failMsg, 'error');
                disableLoginFor(btn, LOCKOUT_MS);
            } else {
                showAlert(failMsg, 'error');
                shakeCard();
            }
            document.getElementById('login-password').value = '';
            document.getElementById('login-password').focus();
            return;
        }

        // ✅ Success
        clearFailures(username);
        if (remember) {
            localStorage.setItem('sscr_remembered_user', username);
        } else {
            localStorage.removeItem('sscr_remembered_user');
        }

        loggedInUser = { username, ...cred };
        sessionStorage.setItem('sscr_user', JSON.stringify({
            username,
            role: cred.role,
            displayName: cred.displayName
        }));

        if (cred.role === 'student') {
            // ✅ FIX: safely update greeting only if the element exists
            const greetingEl = document.getElementById('choice-greeting');
            if (greetingEl) {
                const firstName = cred.displayName.split(',')[0];
                greetingEl.textContent = `Hello, ${firstName}. Choose how to proceed.`;
            }
            showStep('step-choice');
        } else {
            window.location.href = cred.redirect;
        }
    });

    document.getElementById('login-username').addEventListener('input', clearAlert);
    document.getElementById('login-password').addEventListener('input', clearAlert);

    document.getElementById('toggleLoginPwd').addEventListener('click', function() {
        const pwd = document.getElementById('login-password');
        const isHidden = pwd.type === 'password';
        pwd.type = isHidden ? 'text' : 'password';
        this.textContent = isHidden ? 'Hide' : 'Show';
    });

    // ── SIGN UP FORM ──────────────────────────────────────────────────────
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        clearAlert();

        const fullName = document.getElementById('signup-name').value.trim();
        const username = document.getElementById('signup-username').value.trim();
        const password = document.getElementById('signup-password').value;
        const confirm  = document.getElementById('signup-confirm').value;

        if (!fullName || !username || !password || !confirm) {
            showAlert('Please fill in all fields.', 'error');
            return;
        }
        if (password.length < 6) {
            showAlert('Password must be at least 6 characters.', 'error');
            return;
        }
        if (password !== confirm) {
            showAlert('Passwords do not match.', 'error');
            document.getElementById('signup-confirm').value = '';
            document.getElementById('signup-confirm').focus();
            return;
        }
        if (CREDENTIALS[username]) {
            showAlert('That username is already taken. Please choose another.', 'error');
            return;
        }

        showAlert(`Account request submitted for "${username}". An admin will approve your access.`, 'success');
        this.reset();
    });

    document.getElementById('signup-username').addEventListener('input', clearAlert);

    document.getElementById('toggleSignupPwd').addEventListener('click', function() {
        const pwd = document.getElementById('signup-password');
        const isHidden = pwd.type === 'password';
        pwd.type = isHidden ? 'text' : 'password';
        this.textContent = isHidden ? 'Hide' : 'Show';
    });

    // ── FORGOT PASSWORD FORM ──────────────────────────────────────────────
    document.getElementById('forgot-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('forgot-username').value.trim();
        const answer   = document.getElementById('forgot-answer').value.trim().toLowerCase();

        if (forgotVerified) {
            const newPwd     = document.getElementById('forgot-newpwd').value;
            const confirmPwd = document.getElementById('forgot-confirmpwd').value;

            if (!newPwd || !confirmPwd) {
                showForgotAlert('Please fill in both password fields.');
                return;
            }
            if (newPwd.length < 6) {
                showForgotAlert('Password must be at least 6 characters.');
                return;
            }
            if (newPwd !== confirmPwd) {
                showForgotAlert('Passwords do not match.');
                document.getElementById('forgot-confirmpwd').value = '';
                document.getElementById('forgot-confirmpwd').focus();
                return;
            }

            if (CREDENTIALS[username]) {
                CREDENTIALS[username].password = newPwd;
            }

            showForgotSuccess('Password updated successfully. You can now log in with your new password.');
            document.getElementById('forgotBtn').disabled = true;
            document.getElementById('forgotBtn').textContent = 'Password Reset';

            setTimeout(() => {
                switchTab('login');
                document.getElementById('login-username').value = username;
            }, 2000);
            return;
        }

        // Step 1 — verify identity
        if (!username || !answer) {
            showForgotAlert('Please enter both your username and security answer.');
            return;
        }

        const cred = CREDENTIALS[username];
        if (!cred) {
            showForgotAlert('Username not found. Please check and try again.');
            return;
        }

        if (answer !== cred.password) {
            showForgotAlert('Security answer is incorrect. Please try again.');
            return;
        }

        forgotVerified = true;
        document.getElementById('new-pwd-group').classList.remove('hidden');
        document.getElementById('confirm-pwd-group').classList.remove('hidden');
        document.getElementById('forgotBtn').textContent = 'Reset Password';
        document.getElementById('forgot-username').disabled = true;
        document.getElementById('forgot-answer').disabled = true;
        showForgotSuccess('Identity verified. Please set your new password below.');
        document.getElementById('forgot-newpwd').focus();
    });

    document.getElementById('toggleForgotPwd').addEventListener('click', function() {
        const pwd = document.getElementById('forgot-newpwd');
        const isHidden = pwd.type === 'password';
        pwd.type = isHidden ? 'text' : 'password';
        this.textContent = isHidden ? 'Hide' : 'Show';
    });

    // ── DEMO HINT PANEL ───────────────────────────────────────────────────
    document.getElementById('hintToggle').addEventListener('click', function() {
        const panel = document.getElementById('hintPanel');
        const isHidden = panel.classList.contains('hidden');
        panel.classList.toggle('hidden', !isHidden);
        this.textContent = isHidden ? 'Hide demo credentials' : 'Show demo credentials';
    });

    document.getElementById('hintPanel').addEventListener('click', function(e) {
        const row = e.target.closest('.hint-row');
        if (!row) return;
        switchTab('login');
        document.getElementById('login-username').value = row.dataset.user;
        document.getElementById('login-password').value  = row.dataset.pass;
        clearAlert();
        document.getElementById('loginBtn').focus();
    });

}); // end DOMContentLoaded

// ───────────────────────────────────────────────────────────────────────────
//  CHOICE SCREEN
// ───────────────────────────────────────────────────────────────────────────
function goDashboard() { window.location.href = 'student.html'; }

function backToChoice() {
    stopScanner();
    showStep('step-choice');
}

// ───────────────────────────────────────────────────────────────────────────
//  QR SCANNER
// ───────────────────────────────────────────────────────────────────────────
async function openScanner() {
    showStep('step-scanner');
    resetScanUI();
    await startScanner();
}

function resetScanUI() {
    setStatus('scanning', 'Initialising camera...');
    document.getElementById('subjectConfirm').classList.remove('show', 'invalid');
    document.getElementById('confirmBtn').classList.add('hidden');
    document.getElementById('scanLine').style.animation = 'scanMove 2s ease-in-out infinite';
    scanPaused     = false;
    scannedSubject = null;
}

async function startScanner() {
    try {
        cameras = await Html5Qrcode.getCameras();
    } catch (err) {
        setStatus('error', 'Camera permission denied. Please allow camera access and try again.');
        return;
    }
    if (!cameras || cameras.length === 0) {
        setStatus('error', 'No camera found on this device.');
        return;
    }
    if (cameras.length > 1) {
        const sel = document.getElementById('cameraSelect');
        sel.innerHTML = '';
        cameras.forEach((cam, i) => {
            const opt = document.createElement('option');
            opt.value = cam.id;
            opt.textContent = cam.label || `Camera ${i + 1}`;
            if (cam.label && cam.label.toLowerCase().includes('back')) opt.selected = true;
            sel.appendChild(opt);
        });
        activeCameraId = sel.value;
        document.getElementById('cameraSelectWrap').classList.remove('hidden');
    } else {
        activeCameraId = cameras[0].id;
    }
    launchHtml5QrCode(activeCameraId);
}

function launchHtml5QrCode(cameraId) {
    if (html5QrScanner) {
        html5QrScanner.stop().catch(() => {}).finally(() => { html5QrScanner = null; _launch(cameraId); });
    } else {
        _launch(cameraId);
    }
}

function _launch(cameraId) {
    html5QrScanner = new Html5Qrcode('qr-reader', { verbose: false });
    html5QrScanner.start(
        cameraId,
        { fps: 10, qrbox: { width: 220, height: 220 }, aspectRatio: 1.0, disableFlip: false },
        onQrSuccess,
        () => {}
    ).then(() => {
        setStatus('scanning', 'Scanning... align the teacher\'s QR code in the frame.');
    }).catch(err => {
        setStatus('error', 'Could not start camera: ' + (err.message || err));
    });
}

function switchCamera() {
    activeCameraId = document.getElementById('cameraSelect').value;
    resetScanUI();
    launchHtml5QrCode(activeCameraId);
}

function stopScanner() {
    if (html5QrScanner) { html5QrScanner.stop().catch(() => {}); html5QrScanner = null; }
}

function onQrSuccess(decodedText) {
    if (scanPaused) return;
    scanPaused = true;
    document.getElementById('scanLine').style.animation = 'none';

    const code    = decodedText.trim().toUpperCase();
    const matched = SUBJECT_QR_CODES[code];
    const session = JSON.parse(sessionStorage.getItem('sscr_user') || '{}');
    const studentName = session.displayName || 'Student';

    const confirmEl = document.getElementById('subjectConfirm');
    const badgeEl   = document.getElementById('scBadge');

    if (matched) {
        const studentId = session.username ? session.username.replace(/^S/, '') : null;
        const student   = ALL_STUDENTS.find(s => s.id === studentId);
        const wrongSection = student && `Sec ${student.section}` !== matched.section
                          && student.section !== matched.section.replace('Sec ', '');

        document.getElementById('scName').textContent = `${matched.subjectFull} — ${matched.section}`;
        document.getElementById('scMeta').textContent =
            `Teacher: ${matched.faculty}` +
            (wrongSection
                ? `\nWarning: You are in ${student.section}, not ${matched.section}.`
                : `\nMarking attendance for: ${studentName}`);

        badgeEl.textContent = 'Subject QR Verified';
        badgeEl.className   = 'sc-badge';
        confirmEl.classList.remove('invalid');
        confirmEl.classList.add('show');

        scannedSubject = matched;
        setStatus('success', `Subject found: ${matched.subjectFull} (${matched.section}). Tap Confirm to mark present.`);

        document.getElementById('confirmBtn').classList.remove('hidden');
        document.getElementById('confirmBtn').disabled = false;
        document.getElementById('confirmBtn').textContent = 'Confirm Attendance';
        document.getElementById('confirmBtn').onclick = confirmAttendance;

    } else {
        document.getElementById('scName').textContent = 'Invalid QR Code';
        document.getElementById('scMeta').textContent =
            'This is not a valid subject QR code. Ask your teacher for the correct code.';

        badgeEl.textContent = 'Not Recognised';
        badgeEl.className   = 'sc-badge invalid';
        confirmEl.classList.add('show', 'invalid');

        scannedSubject = null;
        setStatus('error', 'Not a valid subject QR code. Please try again.');

        document.getElementById('confirmBtn').classList.remove('hidden');
        document.getElementById('confirmBtn').disabled = false;
        document.getElementById('confirmBtn').textContent = 'Scan Again';
        document.getElementById('confirmBtn').onclick = reScan;
    }
}

function reScan() {
    scannedSubject = null;
    document.getElementById('confirmBtn').onclick = confirmAttendance;
    resetScanUI();
    launchHtml5QrCode(activeCameraId);
}

function confirmAttendance() {
    if (!scannedSubject) { reScan(); return; }
    stopScanner();

    const session   = JSON.parse(sessionStorage.getItem('sscr_user') || '{}');
    const studentId = session.username ? session.username.replace(/^S/, '') : null;
    const time      = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const today     = new Date().toISOString().split('T')[0];

    if (studentId && typeof DB !== 'undefined') {
        DB.init();
        DB.set(scannedSubject.subject, scannedSubject.section, studentId, 'Present', time, today);
    }

    sessionStorage.setItem('sscr_last_scan', JSON.stringify({
        subject: scannedSubject.subject,
        section: scannedSubject.section,
        faculty: scannedSubject.faculty,
        timeIn:  time,
        date:    today,
    }));

    setStatus('success', `Attendance recorded for ${scannedSubject.subjectFull} at ${time}.`);
    document.getElementById('confirmBtn').disabled = true;
    document.getElementById('confirmBtn').textContent = 'Recording...';
    setTimeout(() => { window.location.href = 'student.html'; }, 1200);
}

function setStatus(type, message) {
    const el = document.getElementById('scanStatus');
    el.className = `scan-status show ${type}`;
    el.textContent = message;
}
