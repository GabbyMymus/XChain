// "use client"

// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

// export default function CryptoChart({ data }) {
//   return (
//     <ResponsiveContainer width="100%" height={250}>
//       <LineChart data={data}>
//         <XAxis dataKey="date" hide />
//         <YAxis />
//         <Tooltip />
//         <Line
//           type="monotone"
//           dataKey="price"
//           stroke="#3b82f6"
//           strokeWidth={2}
//           dot={false}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   )
// }

"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function CryptoChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12, fill: "#555" }}
          tickLine={false}
          axisLine={{ stroke: "#ddd" }}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#555" }}
          tickLine={false}
          axisLine={{ stroke: "#ddd" }}
        />
        <Tooltip
          contentStyle={{ fontSize: "0.85rem", borderRadius: "8px" }}
          labelStyle={{ color: "#888" }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

