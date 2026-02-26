import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import r from "../../assets/r.png";
import sql from "../../assets/sql.svg";
import excel from "../../assets/excel.svg";
import python from "../../assets/python.svg";
import power from "../../assets/power-bi.svg";
import dashboard from "../../assets/recondash.png";
import CodeImplementation from "../../components/CodeImplementation";
import DatasetPreview from "../../components/DatasetPreview";

export default function Reconciliation() {
  const tech = [
    { icon: sql, name: "SQL" },
    { icon: excel, name: "Excel" },
    { icon: python, name: "Python" },
    { icon: power, name: "Power BI" },
  ];

  const heroNode = (
  <div className="w-full">
    <div className="w-full">
      <img
        src={r}
        alt="Transaction Reconciliation"
        className="w-full h-[360px] sm:h-[420px] md:h-[520px] object-cover object-center"
      />
    </div>

    <div className="pt-6 space-y-3 max-w-4xl mx-auto text-center pb-8 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-[1.1] tracking-tight">
        Transaction Reconciliation System
      </h1>

      <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Automated cross-platform transaction matching system
      </p>
    </div>
  </div>
);

  return (
    <ProjectLayout hero={heroNode} image={dashboard} tech={tech}>
      <DatasetPreview files={[
        "datasets/bank_settlement.csv",
        "datasets/merchant_orders.csv",
        "datasets/payment_gateway.csv",
        "datasets/refunds.csv"
      ]} />
      <CodeImplementation/>
    </ProjectLayout>
  );
}
