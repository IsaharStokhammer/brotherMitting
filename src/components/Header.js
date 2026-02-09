export const Header = () => {
    return `
        <header class="animate-fade-in">
            <h1 class="animate-title" style="
                font-family: var(--font-heading);
                font-size: 2.5rem;
                font-weight: 700;
                color: var(--primary-color);
                margin-bottom: 0.5rem;
                letter-spacing: -0.02em;
            ">
                היי אחים שלי!
            </h1>
            <div class="animate-border" style="
                height: 2px;
                background: var(--accent-gold, var(--accent-color));
                margin: 0 auto 2rem;
            "></div>
        </header>
    `;
};
