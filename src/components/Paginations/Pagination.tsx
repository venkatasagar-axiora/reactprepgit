import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

// Dummy Data (replace with API later)
const data = [
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 28 },
    { id: 5, name: "Eve", age: 35 },
    { id: 6, name: "Frank", age: 27 },
    { id: 7, name: "Grace", age: 29 },
    { id: 8, name: "Helen", age: 31 },
    { id: 9, name: "Ivy", age: 26 },
    { id: 10, name: "Jack", age: 33 },
];

export default function TablePage() {
    const [params, setParams] = useSearchParams();

    // ✅ Read from URL
    const page = parseInt(params.get("page")) || 1;
    const limit = parseInt(params.get("limit")) || 5;
    const sort = params.get("sort") || "id";
    const order = params.get("order") || "asc";

    // ✅ Update URL
    const updateParams = (newParams) => {
        setParams({
            page,
            limit,
            sort,
            order,
            ...newParams,
        });
    };

    // ✅ Sorting
    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => {
            if (typeof a[sort] === "string") {
                return order === "asc"
                    ? a[sort].localeCompare(b[sort])
                    : b[sort].localeCompare(a[sort]);
            }

            return order === "asc"
                ? a[sort] - b[sort]
                : b[sort] - a[sort];
        });
    }, [sort, order]);

    // ✅ Pagination
    const paginatedData = useMemo(() => {
        const start = (page - 1) * limit;
        return sortedData.slice(start, start + limit);
    }, [page, limit, sortedData]);

    const totalPages = Math.ceil(data.length / limit);

    // ✅ Sorting handler
    const handleSort = (column) => {
        const newOrder =
            sort === column && order === "asc" ? "desc" : "asc";

        updateParams({
            sort: column,
            order: newOrder,
            page: 1, // reset page
        });
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>📊 Data Table</h2>

            {/* LIMIT SELECT */}
            <div style={{ marginBottom: 10 }}>
                <label>Rows per page: </label>
                <select
                    value={limit}
                    onChange={(e) =>
                        updateParams({
                            limit: e.target.value,
                            page: 1,
                        })
                    }
                >
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
            </div>

            {/* TABLE */}
            <table
                border="1"
                cellPadding="10"
                style={{ borderCollapse: "collapse", width: "100%" }}
            >
                <thead style={{ cursor: "pointer", background: "#eee" }}>
                    <tr>
                        <th onClick={() => handleSort("id")}>
                            ID {sort === "id" ? (order === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th onClick={() => handleSort("name")}>
                            Name {sort === "name" ? (order === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th onClick={() => handleSort("age")}>
                            Age {sort === "age" ? (order === "asc" ? "↑" : "↓") : ""}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {paginatedData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* PAGINATION */}
            <div
                style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                <button
                    disabled={page === 1}
                    onClick={() => updateParams({ page: page - 1 })}
                >
                    ⬅ Prev
                </button>

                <span>
                    Page <b>{page}</b> of <b>{totalPages}</b>
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => updateParams({ page: page + 1 })}
                >
                    Next ➡
                </button>
            </div>
        </div>
    );
}