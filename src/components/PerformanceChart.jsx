
import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ students }) => {
  const chartData = useMemo(() => {
    const subjectScores = {};
    students.forEach((s) => {
      if (!subjectScores[s.subject]) {
        subjectScores[s.subject] = { total: 0, count: 0 };
      }
      subjectScores[s.subject].total += s.score;
      subjectScores[s.subject].count += 1;
    });

    return Object.keys(subjectScores).map((subject) => ({
      subject,
      average: Math.round(
        subjectScores[subject].total / subjectScores[subject].count
      ),
    }));
  }, [students]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Average Scores per Subject
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="average" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
