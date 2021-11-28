import { Table, TableColumn, TableRow } from "@/components/UI";
import { Task } from "@/core/index";

export const Task3 = () => {

    const checkTask = () => { }

    return (
        <Task title="3. Заполните таблицу" action={checkTask}>
            <Table accentColor="dark">
                <TableRow>
                    <TableColumn mode="th">Вид активности</TableColumn>
                    <TableColumn mode="th">Время</TableColumn>
                </TableRow>
                <TableRow>
                    <TableColumn mode="td">Просто текст</TableColumn>
                    <TableColumn mode="td">Просто текст</TableColumn>
                </TableRow>
            </Table>
        </Task>
    )
}