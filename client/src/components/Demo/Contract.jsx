import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

function Contract({ value }) {  

  return (
    <div className="contract-table">
      <Paper
        sx={{ p: 2, m: 2, width: '100%' }}
        elevation={5}
      >
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Seller</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{value.seller}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.description}</TableCell>
                <TableCell>{value.price}</TableCell>
              </TableRow>
          </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default Contract;
