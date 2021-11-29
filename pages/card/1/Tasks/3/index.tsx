import { Table, TableColumn, TableRow } from "@/components/UI";
import { Task } from "@/core/index";

export const Task3 = () => {

    const checkTask = () => { }

    return (
        <Task title="3. Заполните таблицу" action={checkTask}>
            <Table accentColor="green">
                <thead>
                    <TableRow>
                        <TableColumn mode="th">Вид активности</TableColumn>
                        <TableColumn mode="th">Время</TableColumn>
                    </TableRow>
                </thead>
                <tbody>
                    <TableRow>
                        <TableColumn mode="td">Пропуск</TableColumn>
                        <TableColumn mode="td">Пропуск</TableColumn>
                    </TableRow>
                </tbody>
            </Table>
        </Task>
    )
}