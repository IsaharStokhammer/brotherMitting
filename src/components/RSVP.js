export const RSVP = () => {
    // Generate Google Calendar Link
    const getCalendarLink = () => {
        const now = new Date();
        let target = new Date();
        target.setDate(now.getDate() + (3 + 7 - now.getDay()) % 7);
        target.setHours(12, 0, 0, 0);
        if (now > target) target.setDate(target.getDate() + 7);

        const end = new Date(target);
        end.setHours(14, 0, 0, 0); // Assume 2 hour lunch

        const fmt = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const dates = `${fmt(target)}/${fmt(end)}`;

        const details = "מפגש אחים שבועי בגולדי'ס - אל תפספסו!";
        const location = "מצדה 9, בני ברק";
        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("ארוחת אחים בגולדי'ס 🍖")}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    };

    return `
        <div class="rsvp-section animate-fade-in delay-400" style="margin: 2rem 0; display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <button id="rsvp-btn" class="btn btn-primary hover-subtle" style="width: 100%; cursor: pointer; transition: all 0.3s ease;">
                    לאישור הגעה
                </button>
                
                <a href="${getCalendarLink()}" target="_blank" class="btn btn-outline hover-subtle" style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                ">
                    <span>📅</span> הוספה ליומן
                </a>
            </div>
            
            <style>
                #rsvp-btn.confirmed {
                    background: #28a745 !important;
                    border-color: #28a745 !important;
                    pointer-events: none;
                    grid-column: span 2;
                }
                #rsvp-btn.confirmed + a {
                    display: none;
                }
            </style>
        </div>
    `;
};


export const initRSVP = () => {
    const btn = document.getElementById('rsvp-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            btn.innerHTML = "נתראה שם! 🍖✨";
            btn.classList.add('confirmed');
            triggerConfetti();
        });
    }
};

const triggerConfetti = () => {
    const colors = ['#c5a059', '#1a1a1a', '#ffffff', '#f4f1ea'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
};
