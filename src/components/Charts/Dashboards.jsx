import {
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
    BarChart, Bar,
    PieChart, Pie, Cell, Legend
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function Dashboard() {
    return (
        <div style={{ padding: 20 }}>
            <h2>📊 Analytics Dashboard</h2>

            {/* GRID */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20
            }}>

                {/* LINE CHART */}
                <div style={{ height: 300, background: "#fff", padding: 10 }}>
                    <h4>Revenue Trend</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* BAR CHART */}
                <div style={{ height: 300, background: "#fff", padding: 10 }}>
                    <h4>User Growth</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="users" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* PIE CHART */}
                <div style={{
                    height: 300,
                    background: "#fff",
                    padding: 10,
                    gridColumn: "span 2"
                }}>
                    <h4>Traffic Source</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                outerRadius={100}
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}