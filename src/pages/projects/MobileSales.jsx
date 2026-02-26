import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import mobileImage from "../../assets/motorola.png";
import git from "../../assets/git.svg";
import CodeImplementation from "../../components/CodeImplementation";
import DatasetPreview from "../../components/DatasetPreview";

export default function MobileSales() {
  const tech = [{ icon: git, name: "Git" }];

  const faqItems = [
    {
      question: "What data sources were used?",
      answer:
        "Data was ingested from mobile CRM systems with daily synchronization and validation checks.",
    },
    {
      question: "How is the sales funnel calculated?",
      answer:
        "The funnel tracks customer journey from lead generation to conversion with abandonment analysis at each stage.",
    },
    {
      question: "What insights were discovered?",
      answer:
        "Analysis revealed key drop-off points in the sales process and identified high-performing sales regions.",
    },
    {
      question: "How are campaigns triggered?",
      answer:
        "Automated email campaigns are triggered based on customer segment and behavioral metrics using marketing automation.",
    },
  ];

  const files = [
    "datasets/Mobile_Sales_Data.csv"
  ];

  const codeSnippets = {
    python: `import pandas as pd
import numpy as np

def calculate_sales_funnel(crm_data):
    """Analyze customer journey through sales funnel"""
    stages = ['leads', 'qualified', 'proposal', 'closed']
    funnel = {}
    
    for i, stage in enumerate(stages):
        count = len(crm_data[crm_data['stage'] == stage])
        percentage = count / len(crm_data) * 100
        funnel[stage] = {'count': count, 'conversion': percentage}
    
    return funnel`,

    sql: `SELECT 
    MONTH(created_date) as month,
    COUNT(*) as total_leads,
    SUM(CASE WHEN status = 'CONVERTED' THEN 1 ELSE 0 END) as conversions,
    ROUND(SUM(CASE WHEN status = 'CONVERTED' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as conversion_rate
FROM leads
GROUP BY MONTH(created_date)
ORDER BY month DESC`,

    dax: `Conversion Rate = 
DIVIDE(
    COUNTROWS(FILTER(Leads, [Status] = "CONVERTED")),
    COUNTROWS(Leads)
) * 100

MoM Growth = 
DIVIDE([Current_Month_Sales] - [Previous_Month_Sales], [Previous_Month_Sales]) * 100`,

    excel: `=COUNTIF(F:F,"CONVERTED")/COUNTA(F:F)*100

=(C2-C1)/C1*100

=IF(ISNUMBER(D2),D2,0)`
  };

  const heroNode = (
    <div className="w-full">
      <div className="w-full">
        <img
          src={mobileImage}
          alt="Mobile Sales Performance"
          className="w-full h-[360px] sm:h-[420px] md:h-[520px] object-cover object-center"
        />
      </div>

      <div className="pt-6 space-y-3 max-w-4xl mx-auto text-center pb-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-[1.1] tracking-tight">
          Mobile Sales Performance Analytics
        </h1>

        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Data-driven insights for mobile product sales and customer engagement
        </p>
      </div>
    </div>
  );

  return (
    <ProjectLayout 
      hero={heroNode} 
      image={mobileImage} 
      tech={tech}
      projectTitle="Mobile Sales Performance Dashboard"
      projectDescription="Comprehensive analytics platform for tracking mobile product sales, customer cohorts, and campaign performance with real-time insights."
      faqItems={faqItems}
      files={files}
    >
      <DatasetPreview files={files} />
      <CodeImplementation codeSnippets={codeSnippets}/>
    </ProjectLayout>
  );
}
