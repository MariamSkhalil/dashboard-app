import Chart from "@/components/charts";
import DataTable from "@/components/dataTable";
import Header from "@/components/header";

export default function Dashboard() {
  //console.log("Dashboard loaded");
  return(
    <div >
      <Header/>
      <DataTable/>
      <Chart/>
    </div>
  )
}