import React from "react";
import DataTable from "../components/DataTable";

export default function Models() {
  const title = "PromptsTemplate";
  const header = ['Name', 'W&Bs', 'Type'];
  interface IData {
    item1:string,
    item2: string,
    item3: string
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
        item3: '1000'
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