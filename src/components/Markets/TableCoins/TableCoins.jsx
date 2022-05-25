/* eslint-disable quote-props */
import React, {useState} from 'react'
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
import {Box, Container} from '@mui/material'
import {columns} from './Columns'
import {sxColumn, sxGrid} from './Styles'

export const TableCoins = ({coins = []}) => {
    const [pageSize, setPageSize] = useState(25)
    const rowsPerPageOptions = [5, 10, 20, 25, 50, 100]
    const [pinnedColumns, setPinnedColumns] =useState({
        left: ['image'],
    })
    return (
        <Container>
            <br></br>
            <Box sx={sxColumn}>
                <DataGrid
                    autoHeight={true}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    columns={columns}
                    disableColumnMenu={true}
                    onPageSizeChange={(e) => setPageSize(e)}
                    pagination
                    pageSize={pageSize}
                    pinnedColumns={pinnedColumns}
                    rows={coins}
                    rowsPerPageOptions={rowsPerPageOptions}
                    sx={sxGrid}
                />
            </Box>
        </Container>
    )
}
