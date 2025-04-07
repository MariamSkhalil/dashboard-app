import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Flowbite", downloads: 269000, growth: 49 },
  { name: "React", downloads: 4500000, growth: 24 },
  { name: "Angular", downloads: 2800000, growth: 17 },
  { name: "Vue", downloads: 3600000, growth: 30 },
  { name: "Svelte", downloads: 1200000, growth: 57 },
  { name: "Ember", downloads: 500000, growth: 44 },
  { name: "Backbone", downloads: 300000, growth: 9 },
];

export default function Charts() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">NPM Downloads</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(v) => `${v / 1000000}M`} />
            <Tooltip />
            <Legend />
            <Bar dataKey="downloads" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl shadow shadow-lg p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">Growth Percentage</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="growth" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
