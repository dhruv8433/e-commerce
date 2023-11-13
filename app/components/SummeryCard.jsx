import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

const SummeryCard = ({ order, total }) => {
  return (
    <Card key={order.id} className="p-4 m-2 border border-gray-300 rounded my-2">
      <CardContent>
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl mb-4 text-start">
            Order Summary
          </h1>
          {/* Displaying order status */}
          <div className="mb-4 text-right">
            <p className="border border-gray-400 border-dashed p-1 rounded">
              {order.status}
            </p>
          </div>
        </div>

        {/* Displaying services */}
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2 text-start">Services:</h2>
          <ul className="text-start">
            <TableContainer>
              <Table>
                <TableBody>
                  {order.data.map((singleOrder) => {
                    total = total + singleOrder.discounted_price;
                    return (
                      <TableRow key={singleOrder.id}>
                        <TableCell>{singleOrder.title}</TableCell>
                        <TableCell align="right">
                          ${singleOrder.discounted_price}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </ul>
        </div>

        {/* Displaying total amount */}
        <div className="mb-4 text-right">
          <h2 className="font-semibold text-xl">Total Amount:</h2>
          <p className="text-blue-600 text-xl font-semibold">${total}</p>
        </div>

        {/* Displaying order date */}
        <div className="text-right text-gray-500 text-sm">
          <h2 className="font-semibold text-xl">Order Date:</h2>
          <p>{order.orderDate}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummeryCard;
