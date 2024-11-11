import React from "react";
import DataTable from "../components/DataTable";

export default function Inference() {
  const title = "Inference";
  const header = ['Target Model', 'Target Node', 'Cost', 'Duration', 'Completed', 'Response', 'Start Timestamp', 'Completion Timestamp', 'Escrow Hash',];
  interface IData {
    item1:string,
    item2: string,
    item3: string,
    item4: string,
    item5: string,
    item6: string,
    item7: string,
    item8: string,
    item9: string,
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
        item4: '1',
        item5: 'I find Monkey NFT.',
        item6: '1000',
        item7: '1',
        item8: 'I find Monkey NFT.',
        item9: '1000'
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