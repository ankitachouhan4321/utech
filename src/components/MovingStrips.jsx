
import React from "react";

const navyItems = [
    "PRECISION",
    "TRADITION",
    "HYDRAULIC ENGINEERING",
    "QUALITY",
    "INNOVATION",
    "U-TECH HYDRAULIC",
];

const redItems = [
    "HEAT TREATMENT",
    "MACHINING",
    "FABRICATION",
    "HYDRAULIC MACHINES",
    "INDUSTRIAL SOLUTIONS",
    "MANUFACTURING",
];

const StripContent = ({ items }) => (
    <div className="uh-strip-group">
        {items.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
                <span
                    className={`uh-strip-text ${index % 2 === 0 ? "outline" : "solid"
                        }`}
                >
                    {item}
                </span>

                <span className="uh-strip-star" aria-hidden="true">
                    ✦
                </span>
            </React.Fragment>
        ))}
    </div>
);

const MovingStrips = () => {
    return (
        <section
            className="uh-moving-strips"
            aria-label="U-Tech Hydraulic capabilities"
        >
            {/* Navy Strip - Left to Right */}
            <div className="uh-strip uh-strip-navy">
                <div className="uh-strip-track uh-move-right">
                    <StripContent items={navyItems} />
                    <StripContent items={navyItems} />
                </div>
            </div>

            {/* Red Strip - Right to Left */}
            <div className="uh-strip uh-strip-red">
                <div className="uh-strip-track uh-move-left">
                    <StripContent items={redItems} />
                    <StripContent items={redItems} />
                </div>
            </div>
        </section>
    );
};

export default MovingStrips;
