import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

export interface TableData {
  title: string;
  headers: string[];
  rows: string[][];
}

export function LessonTable({ table }: { table: TableData }) {
  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm">📋</span>
        {table.title}
      </h3>
      <div className="overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              {table.headers.map((header, i) => (
                <TableHead key={i} className="font-semibold text-foreground whitespace-nowrap text-xs sm:text-sm">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row, i) => (
              <TableRow key={i} className="border-border hover:bg-muted/50">
                {row.map((cell, j) => (
                  <TableCell key={j} className={`text-xs sm:text-sm ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
