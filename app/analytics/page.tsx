'use client';
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ArrowUp, ArrowDown, ChartLine, DollarSign, Percent } from "lucide-react";
import { format, subDays } from "date-fns";

// Mock data for the overview chart
const generateOverviewData = () => {
  const data = [];
  const today = new Date();

  for (let i = 13; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, "MMM dd"),
      profit: Math.floor(Math.random() * 500) + 500,
      revenue: Math.floor(Math.random() * 1000) + 1000,
      fees: Math.floor(Math.random() * 100) + 50,
      costs: Math.floor(Math.random() * 300) + 200,
      adSpend: Math.floor(Math.random() * 200) + 100,
      acos: ((Math.floor(Math.random() * 200) + 100) / (Math.floor(Math.random() * 1000) + 1000) * 100).toFixed(2),
    });
  }
  return data;
};

// Mock data for the SKU performance table
const generateSkuData = () => {
  const skus = [
    "AMZN-123456",
    "AMZN-789012",
    "AMZN-345678",
    "AMZN-901234",
    "AMZN-567890",
  ];

  return skus.map((sku) => {
    const currentProfit = Math.floor(Math.random() * 1000) - 200;
    const previousProfit = Math.floor(Math.random() * 1000) - 200;
    const change = currentProfit - previousProfit;
    const percentChange = ((change / Math.abs(previousProfit)) * 100).toFixed(2);

    return {
      sku,
      currentProfit,
      previousProfit,
      change,
      percentChange,
    };
  }).sort((a, b) => b.change - a.change);
};

// Mock data for the ad campaigns comparison table
const generateAdCampaignsData = () => {
  const campaigns = [
    "Summer Sale",
    "Back to School",
    "Holiday Special",
    "New Product Launch",
    "Clearance Event",
  ];

  return campaigns.map((campaign) => {
    const adSpend = Math.floor(Math.random() * 500) + 100;
    const revenue = Math.floor(Math.random() * 2000) + 500;
    const acos = ((adSpend / revenue) * 100).toFixed(2);
    const impressions = Math.floor(Math.random() * 10000) + 1000;
    const clicks = Math.floor(Math.random() * 500) + 50;
    const ctr = ((clicks / impressions) * 100).toFixed(2);
    const conversions = Math.floor(Math.random() * 50) + 5;
    const convRate = ((conversions / clicks) * 100).toFixed(2);
    
    // Previous period data
    const prevAdSpend = Math.floor(Math.random() * 500) + 100;
    const prevRevenue = Math.floor(Math.random() * 2000) + 500;
    const prevAcos = ((prevAdSpend / prevRevenue) * 100).toFixed(2);
    
    // Calculate changes
    const acosChange = (Number(acos) - Number(prevAcos)).toFixed(2);

    return {
      campaign,
      adSpend,
      revenue,
      acos,
      impressions,
      clicks,
      ctr,
      conversions,
      convRate,
      prevAcos,
      acosChange,
    };
  }).sort((a, b) => Number(a.acos) - Number(b.acos)); // Sort by ACOS (lower is better)
};

const Dashboard = () => {
  const [overviewData] = useState(generateOverviewData());
  const [skuData] = useState(generateSkuData());
  const [adCampaignsData] = useState(generateAdCampaignsData());
  const [selectedPeriod, setSelectedPeriod] = useState("2w");

  // Calculate total profits/losses
  const totalCurrentProfit = skuData.reduce((sum, item) => sum + item.currentProfit, 0);
  const totalPreviousProfit = skuData.reduce((sum, item) => sum + item.previousProfit, 0);
  const totalChange = totalCurrentProfit - totalPreviousProfit;
  const totalChangePercent = ((totalChange / Math.abs(totalPreviousProfit)) * 100).toFixed(2);

  // Calculate ACOS
  const latestData = overviewData[overviewData.length - 1];
  const adSpend = latestData.adSpend || 150;
  const acos = ((adSpend / latestData.revenue) * 100).toFixed(2);
  const previousAcos = ((adSpend * 0.9) / (latestData.revenue * 0.95) * 100).toFixed(2);
  const acosChange = (Number(acos) - Number(previousAcos)).toFixed(2);

  // Calculate average campaign metrics
  const avgAcos = (adCampaignsData.reduce((sum, item) => sum + Number(item.acos), 0) / adCampaignsData.length).toFixed(2);
  const avgCtr = (adCampaignsData.reduce((sum, item) => sum + Number(item.ctr), 0) / adCampaignsData.length).toFixed(2);
  const avgConvRate = (adCampaignsData.reduce((sum, item) => sum + Number(item.convRate), 0) / adCampaignsData.length).toFixed(2);

  const chartConfig = {
    profit: { label: "Profit", theme: { light: "#46B560", dark: "#46B560" } },
    revenue: { label: "Revenue", theme: { light: "#2567EA", dark: "#2567EA" } },
    fees: { label: "Fees", theme: { light: "#F1CA2F", dark: "#F1CA2F" } },
    costs: { label: "Costs", theme: { light: "#DA252D", dark: "#DA252D" } },
    acos: { label: "ACOS", theme: { light: "#9b87f5", dark: "#9b87f5" } }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-[var(--static-text-strong)]">Analytics Dashboard</h1>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant={selectedPeriod === "1w" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("1w")}
            >
              1W
            </Button>
            <Button 
              size="sm" 
              variant={selectedPeriod === "2w" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("2w")}
            >
              2W
            </Button>
            <Button 
              size="sm" 
              variant={selectedPeriod === "1m" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("1m")}
            >
              1M
            </Button>
            <Button 
              size="sm" 
              variant={selectedPeriod === "3m" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("3m")}
            >
              3M
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>ACOS</CardDescription>
              <CardTitle className="text-2xl">
                {acos}%
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center">
                {Number(acosChange) <= 0 ? (
                  <span className="text-[var(--sentiment-text-positive)] flex items-center gap-1">
                    <ArrowDown size={14} />
                    {Math.abs(Number(acosChange))}%
                  </span>
                ) : (
                  <span className="text-[var(--sentiment-text-negative)] flex items-center gap-1">
                    <ArrowUp size={14} />
                    {acosChange}%
                  </span>
                )}
                <span className="text-[var(--static-text-weak)] text-sm ml-2">vs previous period</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Profit</CardDescription>
              <CardTitle className="text-2xl">
                ${totalCurrentProfit.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center">
                {totalChange >= 0 ? (
                  <span className="text-[var(--sentiment-text-positive)] flex items-center gap-1">
                    <ArrowUp size={14} />
                    {totalChangePercent}%
                  </span>
                ) : (
                  <span className="text-[var(--sentiment-text-negative)] flex items-center gap-1">
                    <ArrowDown size={14} />
                    {Math.abs(parseFloat(totalChangePercent))}%
                  </span>
                )}
                <span className="text-[var(--static-text-weak)] text-sm ml-2">vs previous period</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Revenue</CardDescription>
              <CardTitle className="text-2xl">
                ${overviewData[overviewData.length - 1].revenue.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center">
                <span className="text-[var(--sentiment-text-positive)] flex items-center gap-1">
                  <ArrowUp size={14} />
                  8.2%
                </span>
                <span className="text-[var(--static-text-weak)] text-sm ml-2">vs previous period</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Fees</CardDescription>
              <CardTitle className="text-2xl">
                ${overviewData[overviewData.length - 1].fees.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center">
                <span className="text-[var(--sentiment-text-negative)] flex items-center gap-1">
                  <ArrowUp size={14} />
                  12.4%
                </span>
                <span className="text-[var(--static-text-weak)] text-sm ml-2">vs previous period</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Costs</CardDescription>
              <CardTitle className="text-2xl">
                ${overviewData[overviewData.length - 1].costs.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center">
                <span className="text-[var(--sentiment-text-negative)] flex items-center gap-1">
                  <ArrowUp size={14} />
                  5.3%
                </span>
                <span className="text-[var(--static-text-weak)] text-sm ml-2">vs previous period</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Section */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Last two weeks of activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ChartContainer
                config={chartConfig}
                className="h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={overviewData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--static-divider-standard)" />
                    <XAxis 
                      dataKey="date" 
                      stroke="var(--static-text-weak)"
                      tick={{ fill: 'var(--static-text-weak)', fontSize: 12 }}
                    />
                    <YAxis 
                      stroke="var(--static-text-weak)"
                      tick={{ fill: 'var(--static-text-weak)', fontSize: 12 }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                    />
                    <Legend 
                      iconType="circle" 
                      wrapperStyle={{ paddingTop: 20 }} 
                    />
                    <Line
                      type="monotone"
                      dataKey="profit"
                      name="Profit"
                      stroke="var(--sentiment-text-positive)"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      name="Revenue"
                      stroke="var(--sentiment-text-info)"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="fees"
                      name="Fees"
                      stroke="var(--sentiment-text-notice)"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="costs"
                      name="Costs"
                      stroke="var(--sentiment-text-negative)"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="acos"
                      name="ACOS %"
                      stroke="#9b87f5"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* SKU Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle>SKU Performance</CardTitle>
            <CardDescription>Comparing current period to previous</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>SKU profit comparison between periods</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead className="text-right">Current Period</TableHead>
                  <TableHead className="text-right">Previous Period</TableHead>
                  <TableHead className="text-right">Change</TableHead>
                  <TableHead className="text-right">% Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skuData.map((item) => (
                  <TableRow key={item.sku}>
                    <TableCell className="font-medium">{item.sku}</TableCell>
                    <TableCell className="text-right">
                      ${item.currentProfit.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.previousProfit.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.change.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        {item.change >= 0 ? (
                          <span className="text-[var(--sentiment-text-positive)] flex items-center gap-1">
                            <ArrowUp size={14} />
                            {item.percentChange}%
                          </span>
                        ) : (
                          <span className="text-[var(--sentiment-text-negative)] flex items-center gap-1">
                            <ArrowDown size={14} />
                            {Math.abs(parseFloat(item.percentChange))}%
                          </span>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Ad Campaigns Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Ad Campaigns Performance</CardTitle>
            <CardDescription>Comparing advertising campaigns performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="py-3">
                  <CardDescription>Average ACOS</CardDescription>
                  <CardTitle className="text-xl">{avgAcos}%</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardDescription>Average CTR</CardDescription>
                  <CardTitle className="text-xl">{avgCtr}%</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardDescription>Average Conversion Rate</CardDescription>
                  <CardTitle className="text-xl">{avgConvRate}%</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <Table>
              <TableCaption>Ad campaign performance metrics</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead className="text-right">Ad Spend</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                  <TableHead className="text-right">ACOS</TableHead>
                  <TableHead className="text-right">Impressions</TableHead>
                  <TableHead className="text-right">Clicks</TableHead>
                  <TableHead className="text-right">CTR</TableHead>
                  <TableHead className="text-right">Conversions</TableHead>
                  <TableHead className="text-right">Conv. Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adCampaignsData.map((item) => (
                  <TableRow key={item.campaign}>
                    <TableCell className="font-medium">{item.campaign}</TableCell>
                    <TableCell className="text-right">
                      ${item.adSpend.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.revenue.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        <span className={Number(item.acosChange) <= 0 
                          ? "text-[var(--sentiment-text-positive)]" 
                          : "text-[var(--sentiment-text-negative)]"}
                        >
                          {item.acos}%
                        </span>
                        <span className="ml-1">
                          {Number(item.acosChange) <= 0 ? (
                            <span className="text-[var(--sentiment-text-positive)] flex items-center">
                              <ArrowDown size={12} />
                            </span>
                          ) : (
                            <span className="text-[var(--sentiment-text-negative)] flex items-center">
                              <ArrowUp size={12} />
                            </span>
                          )}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {item.impressions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.clicks.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.ctr}%
                    </TableCell>
                    <TableCell className="text-right">
                      {item.conversions}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.convRate}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;