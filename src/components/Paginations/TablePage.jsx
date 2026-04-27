import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function TablePage() {
    const [params, setParams] = useSearchParams();

    // ✅ URL state
    const page = parseInt(params.get("page")) || 1;
    const limit = parseInt(params.get("limit")) || 5;
    const sort = params.get("sort") || "id";
    const order = params.get("order") || "asc";
    const q = params.get("q") || "";

    const [search, setSearch] = useState(q);
    const debouncedSearch = useDebounce(search, 500);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // ✅ Update URL
    const updateParams = (newParams) => {
        setParams({
            page,
            limit,
            sort,
            order,
            q,
            ...newParams,
        });
    };

    // ✅ Sync debounce → URL
    useEffect(() => {
        updateParams({ q: debouncedSearch, page: 1 });
    }, [debouncedSearch]);

    // ✅ Fetch with AbortController
    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://dummyjson.com/users/search?q=${q}&limit=${limit}&skip=${(page - 1) * limit}&sortBy=${sort}&order=${order}`,
                    { signal: controller.signal }
                );

                const result = await res.json();
                setData(result.users || []);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort(); // 🚀 cancel previous request
    }, [page, limit, sort, order, q]);

    // ✅ Sort handler
    const handleSort = (column) => {
        const newOrder =
            sort === column && order === "asc" ? "desc" : "asc";

        updateParams({
            sort: column,
            order: newOrder,
            page: 1,
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>🔍 Search + Table</h2>

            {/* SEARCH INPUT */}
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: 10, padding: 8, width: "300px" }}
            />

            {/* LOADING */}
            {loading && <p>Loading...</p>}

            {/* TABLE */}
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th onClick={() => handleSort("id")}>ID</th>
                        <th onClick={() => handleSort("firstName")}>Name</th>
                        <th onClick={() => handleSort("age")}>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* PAGINATION */}
            <div style={{ marginTop: 20 }}>
                <button
                    disabled={page === 1}
                    onClick={() => updateParams({ page: page - 1 })}
                >
                    Prev
                </button>

                <span style={{ margin: "0 10px" }}>
                    Page {page}
                </span>

                <button
                    onClick={() => updateParams({ page: page + 1 })}
                >
                    Next
                </button>
            </div>
        </div>
    );
}