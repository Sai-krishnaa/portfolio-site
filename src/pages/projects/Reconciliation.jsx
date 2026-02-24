import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import reconciliationImage from "../../assets/reconciliation.png";
import sql from "../../assets/sql.svg";
import excel from "../../assets/excel.svg";

export default function Reconciliation() {
  const tech = [
    { icon: sql, name: "SQL" },
    { icon: excel, name: "Excel" },
  ];

  return (
    <ProjectLayout title="Transaction Reconciliation System" header="Automated cross-platform transaction matching system" image={reconciliationImage} tech={tech}>
      <section className="bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">Reconciliation Process - Steps</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Load transaction streams from source A</li>
          <li>Load transaction streams from source B</li>
          <li>Normalize timestamps & currencies</li>
          <li>Apply fuzzy matching rules</li>
          <li>Flag unmatched records</li>
          <li>Run exception enrichment</li>
          <li>Generate investigation tickets</li>
          <li>Apply auto-resolution rules</li>
          <li>Audit & reporting</li>
          <li>Archive reconciled batches</li>
        </ol>
      </section>
    </ProjectLayout>
  );
}
