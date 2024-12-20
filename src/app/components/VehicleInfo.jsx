"use client"
import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const VehicleInfo = () => {

  const data = useMemo(
    () => [
      {
        vehicleId: 'V001',
        driverName: 'John Doe',
        startTime: '2024-12-20 08:00',
        stopTime: '2024-12-20 10:00',
        duration: '2 hours',
        distance: '150 km',
      },
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Vehicle ID',
        accessor: 'vehicleId',
      },
      {
        Header: 'Driver Name',
        accessor: 'driverName',
      },
      {
        Header: 'Start Time',
        accessor: 'startTime',
      },
      {
        Header: 'Stop Time',
        accessor: 'stopTime',
      },
      {
        Header: 'Duration',
        accessor: 'duration',
      },
      {
        Header: 'Distance',
        accessor: 'distance',
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <div className="p-4">
   
      <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left font-medium text-gray-700 border-b border-gray-200"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 border-b border-gray-200 text-gray-700"
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default VehicleInfo
