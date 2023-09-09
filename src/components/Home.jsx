import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'pickup',
    headerName: 'Pick Up Location',
    width: 500,
  },
  {
    field: 'dropoff',
    headerName: 'Drop Off Location',
    width: 500,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, pickup: "123 Main St, Richmond, VA 23230", dropoff: "555 Azalea Ave. Richmond, VA" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, pickup: "1401 Johnston Willis Dr, Richmond, VA 23235", dropoff: "6958 Cory Lee Ct, Mechanicsville, VA 23111" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, pickup: "5801 Bremo Rd, Richmond, VA 23226", dropoff: "1 Lexington St, Glen Allen, VA, 23221" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, pickup: "1602 Skipwith Rd, Richmond, VA 23229", dropoff: "777 Lucky Strike St, Richmond, VA 23220" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, pickup: "8260 Atlee Rd, Mechanicsville, VA 23116", dropoff: "555 Azalea Ave. Richmond, VA" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, pickup: "720 Belvedere St, Richmond, VA, 23220", dropoff: "8440 Grove Ave, Richmond, VA 23230" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, pickup: "1400 Wisconsin St, Hanover, VA 23110", dropoff: "1602 Skipwith Rd, Richmond, VA 23229" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, pickup: "40 Midlothian Tpke, Midlothian, VA 23016", dropoff: "1250 E Marshall St, Richmond, VA 23219" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, pickup: "333 Wellington Dr, Midlothian, VA 23010", dropoff: "1401 Johnston Willis Dr, Richmond, VA 23235" },
];

export default function Home() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

