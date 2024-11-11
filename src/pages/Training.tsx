import React from "react";
import DataTable from "../components/DataTable";

export default function Training() {
  const title = "Training";
  const header = ['Node', 'Data Blocks ID', 'Model W&Bs Hash', 'Cost', 'GPU Time Spent', 'Escrow Hash',];
  interface IData {
    item1:string,
    item2: string,
    item3: string,
    item4: string,
    item5: string,
    item6: string,
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
        item4: '1000',
        item5: '1000',
        item6: '1000',
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