import { Card, Results, Theory } from "@/core/public";
import { CardLayout } from "@/layouts/CardLayout";
import Task1 from "./Tasks/1";
import Task2 from "./Tasks/2";
import Task3 from "./Tasks/3";

const Card3 = () => {
    return (
        <CardLayout>
            <Card>
                <Theory>
                    Физическая активность - вид деятельности человеческого организма, при котором активация обменных процессов в скелетных (поперечно-полосатых) мышцах обеспечивает их сокращение и перемещение человеческого тела или его частей в пространстве. Как физиологический процесс физическая активность присуща любому человеку. Она может быть низкой, если человек осознанно или вынужденно ведет малоподвижный образ жизни и, наоборот, высокой, например, у спортсмена. Низкая физическая активность (гиподинамия) может быть причиной развития мышечной атрофии. Если гиподинамия сочетается с погрешностями в пищевом рационе (прием высококалорийной пищи в большом количестве) это неминуемо приведет к развитию ожирения. Высокая – сопровождается увеличением мышечной массы (гипертрофией), укреплением костей скелета, повышением подвижности суставов. Следует говорить и об оптимальной физической активности, которая позволяет человеку сохранять или улучшать свое здоровье, снижать риск возникновения заболеваний, в том числе и фатальных. Оптимальная физическая активность может быть достигнута за счет ходьбы, бега, занятия подвижными видами спорта, танцами, а также выполнением гимнастических упражнений.
                </Theory>
                <Task1 />
                <Task2 />
                <Task3 />
                <Results maxScore={300} />
            </Card>
        </CardLayout>
    )
}

export default Card3;