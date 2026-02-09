import { Header } from './components/Header.js';
import { InvitationContent } from './components/InvitationContent.js';
import { RestaurantCard } from './components/RestaurantCard.js';
import { ActionButtons } from './components/ActionButtons.js';
import { Countdown, initCountdown } from './components/Countdown.js';
import { RSVP, initRSVP } from './components/RSVP.js';

const render = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container">
            ${Header()}
            ${InvitationContent()}
            ${RSVP()}
            ${Countdown()}
            ${RestaurantCard()}
            ${ActionButtons()}
            
            <p class="animate-fade-in delay-500" style="text-align: center; margin-top: 2rem; font-size: 1.1rem; font-weight: 500; color: var(--accent-color);">
                יאללה בתיאבון! 🍽️
            </p>
        </div>
    `;

    // Initialize interactive parts
    initCountdown();
    initRSVP();
};

document.addEventListener('DOMContentLoaded', render);
