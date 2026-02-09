export const RestaurantCard = () => {
    return `
        <div class="restaurant-card animate-fade-in delay-200" style="
            background: #fdfdfd;
            border: 1px solid #eeeeee;
            border-radius: var(--radius-lg);
            padding: 1.5rem;
            margin-bottom: 2rem;
            text-align: right;
            position: relative;
        ">
            <h2 style="
                color: var(--accent-color);
                font-size: 1.25rem;
                margin-bottom: 0.75rem;
                font-family: var(--font-heading);
            ">גולדי'ס - בני ברק</h2>
            
            <div style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
                <p><strong>כתובת:</strong> מצדה 9, בני ברק</p>
            </div>

            <a href="https://www.goldys.co.il/" target="_blank" class="menu-link" style="
                display: inline-block;
                color: var(--primary-color);
                font-size: 0.9rem;
                font-weight: 500;
                transition: color 0.3s ease;
            ">
                 ראו את התפריט באתר המסעדה ←
            </a>
            
            <style>
                .menu-link:hover {
                    color: var(--accent-color);
                }
            </style>
        </div>
    `;
};
