import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import zeptoImage from "../../assets/zepto.png";
import python from "../../assets/python.svg";
import powerbi from "../../assets/power-bi.svg";

export default function Zepto() {
  const tech = [
    { icon: python, name: "Python" },
    { icon: powerbi, name: "Power BI" },
  ];

  return (
    <ProjectLayout title="Zepto Inventory Analysis" header="Real-time inventory analytics and dashboard" image={zeptoImage} tech={tech}>
      <section className="bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">Key Deliverables</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Ingested POS data with hourly batches</li>
          <li>Built demand forecasting models</li>
          <li>Interactive dashboard for inventory KPIs</li>
          <li>Automated replenishment triggers</li>
        </ul>
      </section>
    </ProjectLayout>
  );
}
