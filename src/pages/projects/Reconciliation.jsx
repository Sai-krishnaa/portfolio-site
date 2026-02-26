import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import r from "../../assets/r.png";
import sql from "../../assets/sql.svg";
import excel from "../../assets/excel.svg";
import python from "../../assets/python.svg";
import power from "../../assets/power-bi.svg";
import dashboard from "../../assets/recondash.png";
import CodeImplementation from "../../components/codeImplementation";
import DatasetPreview from "../../components/DatasetPreview";

export default function Reconciliation() {
  const tech = [
    { icon: sql, name: "SQL" },
    { icon: excel, name: "Excel" },
    { icon: python, name: "Python" },
    { icon: power, name: "Power BI" },
  ];

  const faqItems = [
    {
      question: "What problem does this project solve?",
      answer:
        "It eliminates manual reconciliation by automatically matching transactions across gateways, banks, and internal ledgers.",
    },
    {
      question: "How does the matching logic work?",
      answer:
        "Transactions are validated using transaction IDs, timestamps, and amount comparisons with automated exception detection.",
    },
    {
      question: "What tools were used?",
      answer:
        "The system uses SQL, Excel, Python, and Power BI for data processing, validation, and reporting.",
    },
    {
      question: "How are unmatched records handled?",
      answer:
        "Unmatched transactions are flagged, categorized, and prepared for investigation to ensure financial accuracy.",
    },
  ];

  const files = [
    "datasets/bank_settlement.csv",
    "datasets/merchant_orders.csv",
    "datasets/payment_gateway.csv",
    "datasets/refunds.csv"
  ];

  const codeSnippets = {
    python: `import pandas as pd
from sqlalchemy import create_engine

def reconcile_transactions(gateway_db, bank_db):
    """Match transactions across payment gateway and bank"""
    gateway_engine = create_engine(gateway_db)
    bank_engine = create_engine(bank_db)
    
    gateway_df = pd.read_sql("SELECT * FROM transactions", gateway_engine)
    bank_df = pd.read_sql("SELECT * FROM settlements", bank_engine)
    
    reconciled = pd.merge(
        gateway_df, bank_df,
        left_on='transaction_id',
        right_on='settlement_id',
        how='inner'
    )
    
    return reconciled`,

    sql: `SELECT 
    g.transaction_id,
    g.amount as gateway_amount,
    b.amount as bank_amount,
    CASE WHEN g.amount = b.amount THEN 'MATCHED' ELSE 'MISMATCH' END as status
FROM payment_gateway g
LEFT JOIN bank_settlement b ON g.transaction_id = b.transaction_id
WHERE g.transaction_date >= DATEADD(day, -30, GETDATE())`,

    dax: `Reconciliation Rate = 
DIVIDE(
    COUNTROWS(FILTER(Transactions, [Status] = "MATCHED")),
    COUNTROWS(Transactions)
) * 100

Variance Amount = 
SUMX(Transactions, [Gateway_Amount] - [Bank_Amount])`,

    excel: `=COUNTIF(C:C,"MATCHED")/COUNTA(C:C)*100

=SUMPRODUCT((D:D<>E:E)*F:F)

=IF(C2=D2,"✓","✗")`
  };

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
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-[1.1] tracking-tight">
        Transaction Reconciliation System
      </h1>

      <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Automated cross-platform transaction matching system
      </p>
    </div>
  </div>
);

  return (
    <ProjectLayout 
      hero={heroNode} 
      image={dashboard} 
      tech={tech}
      projectTitle="Meet the Transaction Reconciliation Engine"
      projectDescription="This project automates complex financial reconciliation processes across multiple payment gateways and banking systems."
      faqItems={faqItems}
      files={files}
    >
      <DatasetPreview files={files} />
      <CodeImplementation codeSnippets={codeSnippets}/>
    </ProjectLayout>
  );
}
