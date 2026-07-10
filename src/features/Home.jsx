import { FaArrowRight, FaFeatherAlt, FaLeaf, FaSearch, FaTree } from "react-icons/fa";

const craftSteps = [
    {
        icon: <FaSearch />,
        title: "Choose the grain",
        desc: "We start with character—texture, knots, and warmth that feel alive.",
    },
    {
        icon: <FaFeatherAlt />,
        title: "Shape the story",
        desc: "Every cut is intentional. Details become scenes, not just surfaces.",
    },
    {
        icon: <FaLeaf />,
        title: "Finish with care",
        desc: "A final touch that brings out glow, protection, and lasting presence.",
    },
];

const HomeDetail = () => {
    return (
        <main>
            <section className="home-showcase home-showcase-creative">
                <div className="grain" aria-hidden="true" />
                <div className="grain grain--soft" aria-hidden="true" />

                <div className="showcase-copy">
                    <span className="showcase-badge showcase-badge--creative">
                        <FaTree /> Handcrafted heritage • digital storytelling
                    </span>

                    <h1>
                        WOODWORKING AS ART.
                        <span className="headline-accent"> STORIES CARVED IN TIME.</span>
                    </h1>

                    <p>
                        Discover timeless wooden pieces—crafted with care and presented with elegant, story-first
                        design.
                    </p>

                    <div className="feature-chips" role="list" aria-label="Home features">
                        <span className="chip" role="listitem">Curated grains</span>
                        <span className="chip" role="listitem">Artisan detail</span>
                        <span className="chip" role="listitem">Warm modern UI</span>
                    </div>

                    <div className="hero-cta-row">
                        <a href="/woods" className="hero-btn">
                            Explore Stories <FaArrowRight />
                        </a>
                        <a href="/about" className="hero-btn hero-btn--ghost">
                            Our Process <FaArrowRight />
                        </a>
                    </div>
                </div>

                <div className="laptop-shell">
                    <div className="laptop-screen">
                        <div className="browser-bar">
                            <div className="browser-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="browser-address">mywoods.com</div>
                        </div>

                        <div className="hero-media hero-media--creative">
                            <header className="mock-nav">
                                <div className="mock-brand">
                                    <FaTree /> <span>MYWOODS</span>
                                </div>
                                <nav className="mock-links">
                                    <a href="/">Home</a>
                                    <a href="/about">About</a>
                                    <a href="/woods">Woods</a>
                                    <a href="/contact">Contact</a>
                                    <a href="/login">Login</a>
                                </nav>
                            </header>

                            <div className="hero-overlay hero-overlay--creative">
                                <span className="hero-tag">
                                    <FaLeaf /> Made to feel timeless
                                </span>
                                <h2>
                                    CARVE • POLISH • SHARE
                                    <span className="hero-overlay-sub">a new kind of craft gallery</span>
                                </h2>
                                <a href="/woods" className="hero-btn light">
                                    EXPLORE STORIES <FaArrowRight />
                                </a>
                            </div>

                            <div className="micro-panels" aria-hidden="true">
                                <div className="micro-panel micro-panel--a" />
                                <div className="micro-panel micro-panel--b" />
                                <div className="micro-panel micro-panel--c" />
                            </div>
                        </div>
                    </div>
                    <div className="laptop-base"></div>
                </div>
            </section>

            <section className="craft-journey">
                <div className="craft-inner">
                    <div className="craft-head">
                        <span className="craft-kicker">The craft journey</span>
                        <h2>From raw grain to a story you can feel.</h2>
                        <p>
                            A simple 3-step flow that turns timber character into a warm digital experience.
                        </p>
                    </div>

                    <div className="craft-steps" role="list">
                        {craftSteps.map((s) => (
                            <article className="craft-step" key={s.title} role="listitem">
                                <div className="craft-step-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-highlights home-highlights--cards">
                <div className="highlight-card highlight-card--big">
                    <h3>Curated woods</h3>
                    <p>Each piece is carefully chosen for its grain, warmth, and story.</p>
                    <div className="highlight-mini">
                        <span className="mini-dot" /><span>Design-led selection</span>
                        <span className="mini-dot" /><span>Story-first presentation</span>
                    </div>
                </div>

                <div className="highlight-card highlight-card--big">
                    <h3>Crafted detail</h3>
                    <p>From design to finish, every experience is shaped with care.</p>
                    <div className="highlight-mini">
                        <span className="mini-dot" /><span>Micro-interactions</span>
                        <span className="mini-dot" /><span>Warm, readable UI</span>
                    </div>
                </div>
            </section>

            <section className="home-cta">
                <div className="home-cta-inner">
                    <div className="home-cta-copy">
                        <h2>Ready to explore?</h2>
                        <p>Open the gallery and meet the woods behind the stories.</p>
                    </div>
                    <div className="home-cta-actions">
                        <a href="/woods" className="btn">Browse Woods</a>
                        <a href="/contact" className="btn btn--secondary">Talk to Us</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomeDetail;
