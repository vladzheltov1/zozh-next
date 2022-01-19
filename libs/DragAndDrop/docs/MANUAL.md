# DragAndDrop - MANUAL

Данная библиотека является абстракцией над библиотекой [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd). Она нужна, чтобы упростить стандартную реализацию системы **drag-and-drop**.

Концепция библиотеки строится на системе перетаскивания элементов из общего блока **(root container)** в множество других одиночных блоков **(gaps)**.


```
<div className="root">
    <div>item 1</div>
    <div>item 2</div>
    <div>item 3</div>
</div>

<div className="gap1">...</div>
<div className="gap2">...</div>
<div className="gap3">...</div>
```

### Использование

Данная библиотека использует стандартный контекст из [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd).

```
import { DragDropContext } from "react-beautiful-dnd";
```

В данный контекст должны быть помещены все элементы, которые используют систему **drag-and-drop**.

**DropArea** - элемент, который является контейнером.
**DropItem** - переносимый между контейнерами элемент.

#### Пример кода

```
import { DragItem, DropArea, reorder } from "@/libs/DragAndDrop";
```