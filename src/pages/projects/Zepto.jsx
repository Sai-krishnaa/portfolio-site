import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import zeptoImage from "../../assets/zepto.png";
import python from "../../assets/python.svg";
import powerbi from "../../assets/power-bi.svg";
import CodeImplementation from "../../components/codeImplementation";
import DatasetPreview from "../../components/DatasetPreview";

export default function Zepto() {
  const tech = [
    { icon: python, name: "Python" },
    { icon: powerbi, name: "Power BI" },
  ];

  const faqItems = [
    {
      question: "What forecasting models were used?",
      answer:
        "ARIMA and Prophet models were implemented for demand forecasting with seasonal pattern detection and anomaly handling.",
    },
    {
      question: "How accurate is the forecasting?",
      answer:
        "The models achieve 85%+ accuracy for short-term forecasts with regular retraining for improved performance.",
    },
    {
      question: "What KPIs are tracked?",
      answer:
        "Key metrics include inventory turnover rate, stockout incidents, overstock percentage, and replenishment cycle efficiency.",
    },
    {
      question: "How are replenishment decisions triggered?",
      answer:
        "Automated triggers based on demand forecasts, current inventory levels, and lead times ensure optimal stock levels.",
    },
  ];

  const files = [
    "datasets/zepto_analysis.csv"
  ];

  const codeSnippets = {
    python: `from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_percentage_error

def forecast_demand(historical_data, periods=30):
    """Forecast inventory demand using ARIMA"""
    model = ARIMA(historical_data, order=(1,1,1))
    fitted_model = model.fit()
    
    forecast = fitted_model.get_forecast(steps=periods)
    forecast_df = forecast.conf_int()
    
    return forecast_df`,

    sql: `SELECT 
    product_id,
    DATE(order_date) as date,
    SUM(quantity) as daily_demand,
    AVG(quantity) OVER (PARTITION BY product_id ORDER BY DATE(order_date) ROWS BETWEEN 7 PRECEDING AND CURRENT ROW) as moving_avg_7d
FROM orders
GROUP BY product_id, DATE(order_date)
ORDER BY date DESC`,

    dax: `Inventory Turnover = 
DIVIDE(
    SUM(Sales[Cost of Goods Sold]),
    AVERAGE(Inventory[Quantity])
)

Stockout Rate = 
DIVIDE(
    COUNTROWS(FILTER(Orders, [Status] = "STOCKOUT")),
    COUNTROWS(Orders)
) * 100`,

    excel: `=SUM(C2:C31)/AVERAGE(D2:D31)

=COUNTIF(E:E,"OUT")/COUNTA(E:E)*100

=IF(F2<G2,"REORDER","")`
  };

  const heroNode = (
    <div className="w-full">
      <div className="w-full">
        <img
          src={zeptoImage}
          alt="Zepto Inventory Analysis"
          className="w-full h-[360px] sm:h-[420px] md:h-[520px] object-cover object-center"
        />
      </div>

      <div className="pt-6 space-y-3 max-w-4xl mx-auto text-center pb-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-[1.1] tracking-tight">
          Zepto Inventory Analysis System
        </h1>

        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Real-time inventory analytics with demand forecasting and automated replenishment
        </p>
      </div>
    </div>
  );

  return (
    <ProjectLayout 
      hero={heroNode} 
      image={zeptoImage} 
      tech={tech}
      projectTitle="Zepto Real-Time Inventory Intelligence"
      projectDescription="Advanced inventory management system powered by machine learning forecasting models and automated replenishment triggers for optimized stock levels."
      faqItems={faqItems}
      files={files}
    >
      <DatasetPreview files={files} />
      <CodeImplementation codeSnippets={codeSnippets}/>
    </ProjectLayout>
  );
}
