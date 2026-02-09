export const Countdown = () => {
    return `
        <div id="countdown" class="animate-fade-in delay-200" style="
            margin: 1.5rem 0;
            padding: 1rem;
            background: #fbfaf8;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-light);
        ">
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.1em;">זמן נותר למפגש הבא</div>
            <div id="timer-display" style="
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                font-family: var(--font-heading);
                color: var(--accent-color);
                font-size: 1.5rem;
                font-weight: 700;
            ">
                <div class="timer-item"><span id="days">00</span><small style="display:block; font-size: 0.7rem; color: var(--text-muted); font-weight: 400;">ימים</small></div>
                <div class="timer-item"><span id="hours">00</span><small style="display:block; font-size: 0.7rem; color: var(--text-muted); font-weight: 400;">שעות</small></div>
                <div class="timer-item"><span id="minutes">00</span><small style="display:block; font-size: 0.7rem; color: var(--text-muted); font-weight: 400;">דקות</small></div>
                <div class="timer-item"><span id="seconds">00</span><small style="display:block; font-size: 0.7rem; color: var(--text-muted); font-weight: 400;">שניות</small></div>
            </div>
        </div>
    `;
};

export const initCountdown = () => {
    const updateTimer = () => {
        const now = new Date();
        let target = new Date();

        // Target: Wednesday (3) at 12:00
        target.setDate(now.getDate() + (3 + 7 - now.getDay()) % 7);
        target.setHours(12, 0, 0, 0);

        // If it's already Wednesday past 12:00, go to next Wednesday
        if (now > target) {
            target.setDate(target.getDate() + 7);
        }

        const diff = target - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minsEl = document.getElementById('minutes');
        const secsEl = document.getElementById('seconds');

        if (daysEl) {
            daysEl.textContent = String(d).padStart(2, '0');
            hoursEl.textContent = String(h).padStart(2, '0');
            minsEl.textContent = String(m).padStart(2, '0');
            secsEl.textContent = String(s).padStart(2, '0');
        }
    };

    updateTimer();
    setInterval(updateTimer, 1000);
};
