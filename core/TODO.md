# TODO:

- Исправить баг с прохождением одной и той же карточки 2 раза: на данный момент это почему-то невозможно, к моменту нажатия на кнопку компонент не успевает маунтиться.
- Отрефакторить файл `helpers.ts`, возможно, как-то переименовать его, вынести из ядра или вовсе разделить на множество файлов, каждый из которых решал бы свою конкретную задачу: на данный момент это - лишь сборная солянка.
- Придумать способ реализовать абстракцию ядра: нельзя позволять сторонним компонентам трогать код ядра и напрямую с ним взаимодействовать. (попробовать сделать это через хука `useCore`, который совмещает весь функционал ядра, и предоставляет доступ лишь к тому, что нужно)