import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#14b8a6",
  "#ec4899",
  "#0ea5e9",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
  return <path d={getPath(x, y, width, height)} fill={fill} />;
};

const PageChart = () => {
  const allData = useLoaderData([]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Helmet>
        <title>Boi Poka | Page Chart</title>
      </Helmet>

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold pop mb-5">
          Reading Progress Overview
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          This chart shows the total number of pages for each book you have
          listed. It helps you understand reading volume at a glance.
        </p>
      </div>

      {/* Chart Card */}
      <div className="bg-base-100 rounded-2xl shadow-md p-6 md:p-10">
        <div className="w-full h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={allData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="bookName"
                angle={-25}
                textAnchor="end"
                interval={0}
                height={100}
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
              />
              <Bar
                dataKey="totalPages"
                shape={<TriangleBar />}
                label={{ position: "top", fontSize: 12 }}
              >
                {allData.map((_, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PageChart;
