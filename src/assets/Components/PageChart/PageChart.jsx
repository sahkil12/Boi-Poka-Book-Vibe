import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "skyblue",
  "purple",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageChart = () => {
  const allData = useLoaderData([]);
  return (
    <div className="my-25">
      <Helmet>
        <title>Boi Poka | Page Chart</title>
      </Helmet>
      <h2 className="text-center mb-20 mt-5 text-5xl font-bold">Page Chart</h2>

      <div className="flex justify-center">
        <BarChart width={950} height={450} data={allData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
           dataKey="bookName"
            angle={-30}
            textAnchor="end"
            interval={0}
            className="text-[12px]"
            />
          <YAxis />
          <Tooltip></Tooltip>
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {allData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PageChart;
