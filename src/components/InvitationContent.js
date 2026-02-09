export const InvitationContent = () => {
    const getDynamicText = () => {
        const actualNow = new Date();
        // Shift time by -6 hours so the day "starts" at 06:00 AM
        const now = new Date(actualNow.getTime() - (6 * 60 * 60 * 1000));

        const targetDay = 3; // Wednesday
        let daysUntil = (targetDay - now.getDay() + 7) % 7;

        // If it's Wednesday but past 12:00, target next Wednesday
        // Note: we use actualNow here to check the real time for the meeting itself
        if (daysUntil === 0 && actualNow.getDay() === 3 && actualNow.getHours() >= 12) {
            daysUntil = 7;
        }

        if (daysUntil === 0) return "זה קורה <span style='color: var(--primary-color); font-weight: 700; border-bottom: 1px solid var(--accent-color);'>היום!</span>";
        if (daysUntil === 1) return "זה בדיוק <span style='color: var(--primary-color); font-weight: 700; border-bottom: 1px solid var(--accent-color);'>מחר!</span>";
        if (daysUntil === 2) return "זה כבר <span style='color: var(--primary-color); font-weight: 700; border-bottom: 1px solid var(--accent-color);'>מחרתיים!</span>";
        return `זה בעוד <span style='color: var(--primary-color); font-weight: 700; border-bottom: 1px solid var(--accent-color);'>${daysUntil} ימים</span>`;
    };


    return `
        <div class="invitation-text" style="
            color: var(--text-muted);
            margin-bottom: 2.5rem;
        ">
            <p class="animate-fade-in delay-100" style="margin-bottom: 0.5rem;">זוכרים את הסיכום לגבי יום רביעי?</p>
            <p class="animate-fade-in delay-200" style="margin-bottom: 0.5rem; font-size: 1.1rem;">
                אז איכשהו יצא ש${getDynamicText()}
            </p>
            <p class="animate-fade-in delay-300" style="margin-bottom: 0.5rem;">אני כבר רעב ומחכה לראות אתכם.</p>
            <p class="animate-fade-in delay-400" style="font-style: italic;">תהיה אחלה פגישה!</p>
        </div>
    `;
};

