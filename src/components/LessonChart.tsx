import {
  BarChart, Bar, PieChart, Pie, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend,
} from "recharts";

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

export interface LessonChartData {
  type: "bar" | "pie" | "line" | "area";
  title: string;
  data: ChartDataPoint[];
}

const COLORS = ["#8B5CF6", "#10B981", "#F59E0B", "#3B82F6", "#EF4444", "#6366F1", "#EC4899", "#14B8A6"];

export function LessonChart({ chart }: { chart: LessonChartData }) {
  const { type, title, data } = chart;

  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm">📊</span>
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        {type === "pie" ? (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.fill || COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : type === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.fill || COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        ) : type === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
            <Line type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4, fill: "#8B5CF6" }} />
          </LineChart>
        ) : (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
            <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.2} />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
