import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { randomCreatedDate, randomTraderName} from '@mui/x-data-grid-generator';
import { TableCell } from '@mui/material';
import { useState } from 'react';
import Popup from './Popup';


export default function TableComponent() {

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [popupContent, setPopupContent] = useState({})

  const clickCellHandler =(e) => {
     setVisiblePopup(true)
     setPopupContent(e)
  }

  return (
    visiblePopup 
    ? <Popup popupContent={popupContent} setVisiblePopup={setVisiblePopup}/>
    :
    <div style={{ height: 300, width: '100%' }}>
      <TableCell style={{ height: 40, width: '450px' }}></TableCell>
      <TableCell style={{ height: 40, width: '350px' }}>2017</TableCell>
      <TableCell style={{ height: 40, width: '350px' }}>2018</TableCell>
      <TableCell style={{ height: 40, width: '350px' }}>2019</TableCell>

      <DataGrid onCellClick={(e) => clickCellHandler(e)}
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'xx', width: 70, editable: true },
  { field: 'yy', width: 70, editable: true },
  { field: 'zz', width:  70, editable: true },

  { field: 'xx_18', headerName: 'xx', width: 70, editable: true },
  { field: 'yy_18', headerName: 'yy',width: 70, editable: true },
  { field: 'zz_18', headerName: 'zz', width:  70, editable: true },

  { field: 'xx_19', headerName: 'xx', width: 70, editable: true },
  { field: 'yy_19', headerName: 'yy', width: 70, editable: true },
  { field: 'zz_19', headerName: 'zz', width:  70, editable: true },

];

const rows = [
  {
    id: 1,
    name: 'Kyivska',
    xx: 150000,
    yy: 100000,
    zz: 77,
    xx_18: 160000,
    yy_18: 110000,
    zz_18: 72,
    xx_19: 130000,
    yy_19: 85500,
    zz_19: 72,

    dateCreated: randomCreatedDate(),
    user: randomTraderName()
  },
  {
    id: 2,
    name: 'Odeska',
    xx: 1000,
    yy: 5000,
    zz: 45,
    xx_19: 15000,
    yy_19: 0,
    zz_19: 0,

    dateCreated: randomCreatedDate(),
    user: randomTraderName()
    
  },
  {
    id: 3,
    name: 'Lvivska',
    xx: 640000,
    yy: 510000,
    zz: 67,
    xx_18: 15000,
    yy_18: 74000,
    zz_18: 61,

    dateCreated: randomCreatedDate(),
    user: randomTraderName()
  }
  
  
];