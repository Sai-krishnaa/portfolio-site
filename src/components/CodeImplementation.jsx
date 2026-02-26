import React, { useState } from "react";

export default function CodeImplementation({ codeSnippets = {} }) {
  const defaultSnippets = {
    python: `import pandas as pd
from sqlalchemy import create_engine

def extract_sales_data(source_db):
    """Extract sales data from source database"""
    engine = create_engine(source_db)

    query = """
        SELECT 
            s.sale_id,
            s.sale_date,
            s.customer_id,
            s.product_id,
            s.quantity,
            s.revenue,
            r.region_name
        FROM sales s
        JOIN regions r ON s.region_id = r.region_id
        WHERE s.sale_date >= DATEADD(month, -12, GETDATE())
    """

    return pd.read_sql(query, engine)`,

    sql: `SELECT 
    transaction_id,
    customer_id,
    amount,
    payment_status,
    settlement_date
FROM bank_settlement
WHERE settlement_date >= DATEADD(day, -30, GETDATE())
AND payment_status = 'SUCCESS';`,

    dax: `Total Revenue = 
SUMX(
    Sales,
    Sales[Quantity] * Sales[Unit Price]
)

Reconciliation Rate =
DIVIDE(
    COUNTROWS(Reconciled),
    COUNTROWS(Transactions)
)`,

    excel: `=SUMIF(A:A,"SUCCESS",C:C)

=VLOOKUP(A2,Sheet2!A:B,2,FALSE)

=IF(B2=C2,"Matched","Mismatch")

=TEXT(TODAY(),"dd-mm-yyyy")`
  };

  // Merge provided snippets with defaults
  const finalSnippets = { ...defaultSnippets, ...codeSnippets };
  const [activeTab, setActiveTab] = useState(Object.keys(finalSnippets)[0]);

  const labels = {
    python: "PYTHON",
    sql: "SQL",
    dax: "POWER BI DAX",
    excel: "EXCEL"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(finalSnippets[activeTab]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
        <span className="text-black">&lt;/&gt;</span>
        Code Implementation
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(finalSnippets).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {labels[tab]}
          </button>
        ))}
      </div>

      {/* Code Block */}
      <div className="relative bg-[#0d1117] text-gray-200 rounded-2xl p-6 overflow-auto shadow-xl">

        {/* Language Badge */}
        <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-blue-600 text-white">
          {labels[activeTab]}
        </span>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-sm text-white px-3 py-1 rounded-lg"
        >
          Copy Code
        </button>

        <pre className="mt-10 text-sm md:text-base whitespace-pre-wrap wrap-break-word">
          <code>{finalSnippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}