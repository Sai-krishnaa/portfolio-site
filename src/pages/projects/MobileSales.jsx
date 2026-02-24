import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import mobileImage from "../../assets/motorola.png";
import git from "../../assets/git.svg";

export default function MobileSales() {
  const tech = [{ icon: git, name: "Git" }];

  return (
    <ProjectLayout title="Mobile Sales Performance" header="Sales analytics for mobile products" image={mobileImage} tech={tech}>
      <section className="bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">Project Outline</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Data ingestion from mobile CRM</li>
          <li>Monthly cohort analysis</li>
          <li>Build sales funnel visualizations</li>
          <li>Trigger email campaigns for top prospects</li>
        </ol>
      </section>
    </ProjectLayout>
  );
}
