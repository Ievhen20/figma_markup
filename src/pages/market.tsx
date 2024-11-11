import React from "react";
import DataTable from "../components/DataTable";

export default function Market() {
  const title = "Models";
  const header = ['Name', 'Type', 'Description', 'Dimensionality', 'Hash of W&Bs', 'Inference Ask', 'Prompt Ask', 'Action Item'];

  interface IData {
    item1:string,
    item2: string,
    item3: string,
    item4: string,
    item5: string,
    item6: string,
    item7: string,
    item8: string,
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
      },
    ]
  }

  const title1 = "Data Blocks";
  const header1 = ["Name", 'Description', 'Base Model', 'Size', 'Fine-Tune Ask', 'Federated Ask', 'Action Item'];
  interface IData1 {
    item1:string,
    item2: string,
    item3: string,
    item4: string,
    item5: string,
    item6: string,
    item7: string,
  }
  interface IDatas1 {
    rows: number,
    data: IData1[]
  }
  const datas1:IDatas1 = {
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
      },
    ]
  }

  return (
    <div className="">
      <div className="mb-8">
        <DataTable 
          title = {title}
          header= {header}
          datas = {datas} 
        />
      </div>

      <DataTable 
        title = {title1}
        header= {header1}
        datas = {datas1} 
      />
    </div>
  )
}