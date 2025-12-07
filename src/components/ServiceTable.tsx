    import { useMemo, useState } from "react";

    type Row = { id: number; name: string; status: "Active" | "Inactive" };

    export default function ServiceTable({
    title,
    pageKey,
    }: {
    title: string;
    pageKey: string;
    }) {
    const [rows, setRows] = useState<Row[]>([
    { id: 1, name: "Sample Item 1", status: "Active" },
    { id: 2, name: "Sample Item 2", status: "Inactive" },
    ]);
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
        `${r.id} ${r.name} ${r.status}`.toLowerCase().includes(q)
    );
    }, [rows, query]);

    const addRow = () => {
    setRows((prev) => {
        const nextId = prev.length ? Math.max(...prev.map((r) => r.id)) + 1 : 1;
        return [...prev, { id: nextId, name: "New Item", status: "Active" }];
    });
    };

    const editRow = () => {
    // Matches your original demo behavior: edit first data row if exists
    setRows((prev) => {
        if (!prev.length) return prev;
        const copy = [...prev];
        copy[0] = { ...copy[0], name: "Edited Item" };
        return copy;
    });
    };

    const deleteRow = () => {
    setRows((prev) => prev.slice(0, Math.max(0, prev.length - 1)));
    };

    return (
    <div className="card" data-page={pageKey}>
        <div className="card-header">
        <h2 className="card-title">{title}</h2>
        </div>

        <div className="table-actions">
        <button onClick={addRow} type="button">
            Add
        </button>
        <button onClick={editRow} type="button">
            Edit
        </button>
        <button onClick={deleteRow} type="button">
            Delete
        </button>

        <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={`Search ${title}`}
        />
        </div>

        <table>
        <thead>
            <tr>
            <th style={{ width: 80 }}>ID</th>
            <th>Name</th>
            <th style={{ width: 140 }}>Status</th>
            </tr>
        </thead>
        <tbody>
            {filtered.map((r) => (
            <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.status}</td>
            </tr>
            ))}
            {!filtered.length && (
            <tr>
                <td colSpan={3} style={{ color: "#6b7280" }}>
                No results.
                </td>
            </tr>
            )}
        </tbody>
        </table>
    </div>
    );
    }
