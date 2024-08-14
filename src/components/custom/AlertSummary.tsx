import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";

function AlertSummary() {
  return (
    <Card className="flex flex-col bg-custom-white">
      <CardHeader className="pb-0">
        <CardTitle className="text-custom-blue">Alert Summary</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex-1 pb-0 mt-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" font-bold text-black">Alert</TableHead>
              <TableHead className="text-right font-bold text-black">
                count
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-sm font-light">Power cuts</TableCell>
              <TableCell className="text-right">15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm font-light">Antenna cuts</TableCell>
              <TableCell className="text-right">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm font-light">Panic</TableCell>
              <TableCell className="text-right">0</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-xl font-bold">Totals:</TableCell>
              <TableCell className="text-right text-xl">19</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AlertSummary;
