import React, { useMemo, useState } from 'react'
import mData from '../MOCK_DATA.json'
import { ColumnsVal } from './Columns'
import { flexRender,
     useReactTable,
      getCoreRowModel ,
      getPaginationRowModel,
      getSortedRowModel,
      getFilteredRowModel,
    } from '@tanstack/react-table'
import { Table,Button, TextInput} from 'flowbite-react'


const BasicTable = () => {
       
    const data = useMemo(() => mData, [])

    // console.log(data);

    const [sorting,setSorting] = useState([])
    const [filtering,setFiltering]=useState('')

    // console.log(filtering);

    const columns = ColumnsVal
 
    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel:getCoreRowModel(),
            getPaginationRowModel:getPaginationRowModel(),
            getSortedRowModel:getSortedRowModel(),
            getFilteredRowModel:getFilteredRowModel(),
            state:{
                sorting:sorting,
                globalFilter:filtering,
            },
            onSortingChange:setSorting,
            onGlobalFilterChange:setFiltering,
        })


    return (

        <>
            <p className='text-center text-2xl'>Sample table</p>
            <TextInput type="text" placeholder='search' 
            className='w-60 mx-20'
            value={filtering} 
            onChange={(e)=>setFiltering(e.target.value)}/>
            
            <div className='p-8' >
                <Table hoverable >
                    <Table.Head>
                        {table.getHeaderGroups().map(headerGroups => (
                            <tr key={headerGroups.id}>
                                {headerGroups.headers.map(header => (
                                    <Table.HeadCell key={header.id} 
                                    onClick={header.column.getToggleSortingHandler()}
                                     >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {
                                             {asc:'⬆️',desc:'⬇️'}[header.column.getIsSorted()??null]
                                        }
                                    </Table.HeadCell>
                                ))}
                            </tr>
                        ))}
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {table.getRowModel().rows.map(row=>(
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800"
                             key={row.id}>
                                {row.getVisibleCells().map(cell=>(
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                                     key={cell.id} >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Table.Cell>
                                ))}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
            <div className='flex space-x-2 justify-center'>
               <Button onClick={()=>table.setPageIndex(0)}>first page</Button>
               <Button disabled={!table.getCanPreviousPage()} onClick={()=>table.previousPage()}>previous</Button>
               <Button disabled={!table.getCanNextPage()} onClick={()=>table.nextPage()}>next</Button>
               <Button onClick={()=>table.setPageIndex(table.getPageCount()-1)}>last page</Button>
            </div>
        </>


    )
}

export default BasicTable