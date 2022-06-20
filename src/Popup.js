import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Button from '@mui/material/Button';


export default function Popup({ popupContent, setVisiblePopup }) {

    let rows = [
        {
            id: 2,
            value: 'input for numbers',
            date: new Date(Date.now()).toString(),
            user: 'unknown user',
            comment: 'any'
        },
        {
            id: 1,
            value: popupContent.formattedValue,
            date: popupContent.row.dateCreated,
            user: popupContent.row.user,
            comment: 'any'
        },

    ]
    const columns = [
        { field: 'value', width: 180, editable: true },
        { field: 'date', width: 180, editable: true },
        { field: 'user', width: 180, editable: true },
        { field: 'comment', width: 180, editable: true },
    ]


    const [newRow, setNewRow] = useState('')
    const addRow = () => console.log(newRow)

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setNewRow(updatedRow)
        return updatedRow;
    };

    return (
        <div style={{ width: '900px', height: '300px' }}>
            <div style={{ height: '20px', margin: '10px 0'}}>{popupContent.row.name}</div>
            <DataGrid
                editMode="row"
                processRowUpdate={processRowUpdate}
                experimentalFeatures={{ newEditingApi: true }}
                isCellEditable={(params) => params.row.value === 'input for numbers'}
                rows={rows}
                columns={columns}

            />
            <Button onClick={() => addRow()}>Add</Button>
            <Button onClick={() => setVisiblePopup(false)}>Close</Button>
        </div>
    )
}
