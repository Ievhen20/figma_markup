import React from "react";
import DataTable from "../components/DataTable";

export default function Oracles() {
  const title = "Oracles";
  const header = ['Name', 'Service', 'Subscription-Based', 'Price'];
  interface IData {
    item1:string,
    item2: string,
    item3: string,
    item4: string,
  }
  interface IDatas {
    rows: number,
    data: IData[]
  }
  const datas:IDatas = {
    rows: 1,
    data: [
      {
        item1: '1',
        item2: 'I find Monkey NFT.',
        item3: '1000',
        item4: '1000'
      },
    ]
  }

  return (
    <>
      <DataTable 
        title = {title}
        header={header}
        datas = {datas} 
      />
    </>
  )
}