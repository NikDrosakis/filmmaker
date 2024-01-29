import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    // Simulating a delay before hiding the loader
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {loading && <div className="loader">Loading...</div>}
            <div id="preloader" style={{ display: loading ? 'block' : 'none' }}></div>
        </div>
    );
};

export default Preloader;