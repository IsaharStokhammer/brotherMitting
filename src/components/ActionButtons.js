export const ActionButtons = () => {
    const carLink = "https://www.google.com/maps/dir/Champion+Tower,+Derech+Sheshet+HaYamim+30,+Bnei+Brak,+Israel/%D7%9E%D7%A6%D7%93%D7%94+9,+%D7%91%D7%A0%D7%99+%D7%91%D7%A8%D7%A7,+%D7%99%D7%A9%D7%A8%D7%90%D7%9C%E2%80%AD/data=!4m14!4m13!1m5!1m1!19sChIJAQAByYdJHRUR_DkaHt071Yc!2m2!1d34.8280556!2d32.0983333!1m5!1m1!19sChIJpVmsQilKHRURTlLc65KIbto!2m2!1d34.824481999999996!2d32.093707699999996!3e0";
    const walkLink = "https://www.google.com/maps/dir/Champion+Tower,+Derech+Sheshet+HaYamim+30,+Bnei+Brak,+Israel/%D7%9E%D7%A6%D7%93%D7%94+9,+%D7%91%D7%A0%D7%99+%D7%91%D7%A8%D7%A7,+%D7%99%D7%A9%D7%A8%D7%90%D7%9C%E2%80%AD/data=!4m14!4m13!1m5!1m1!19sChIJAQAByYdJHRUR_DkaHt071Yc!2m2!1d34.8280556!2d32.0983333!1m5!1m1!19sChIJpVmsQilKHRURTlLc65KIbto!2m2!1d34.824481999999996!2d32.093707699999996!3e2";

    return `
        <div class="btn-group animate-fade-in delay-300" style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 1rem;
        ">
            <a href="${carLink}" target="_blank" class="btn btn-primary hover-subtle">
                אני בא ברכב
            </a>
            <a href="${walkLink}" target="_blank" class="btn btn-outline hover-subtle">
                אני בא ברגל
            </a>
            
            <style>
                .btn {
                    padding: 0.8rem 1.5rem;
                    border-radius: 6px;
                    font-size: 0.95rem;
                    font-weight: 500;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .btn-primary {
                    background: var(--primary-color);
                    color: #ffffff;
                    border: 1px solid var(--primary-color);
                }
                .btn-primary:hover {
                    background: #333333;
                }
                .btn-outline {
                    background: transparent;
                    color: var(--primary-color);
                    border: 1px solid #dddddd;
                }
                .btn-outline:hover {
                    border-color: var(--primary-color);
                    background: #f9f9f9;
                }
            </style>
        </div>
    `;
};
