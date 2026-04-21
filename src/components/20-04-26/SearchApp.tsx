import { useState } from "react";

function SearchApp() {
    const [search, setSearch] = useState("");

    const items = [
        "Apple",
        "Banana",
        "Mango",
        "Orange",
        "Watermelon",
        "Pineapple",
        "Grapes"
    ];

    // Filter logic
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                fontFamily: "Arial",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Search Filter</h2>

            {/* Input */}
            <input
                type="text"
                placeholder="Search fruit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />

            {/* List */}
            {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            padding: "8px",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        {item}
                    </div>
                ))
            ) : (
                <p style={{ textAlign: "center", color: "red" }}>
                    No results found
                </p>
            )}
        </div>
    );
}

export default SearchApp;