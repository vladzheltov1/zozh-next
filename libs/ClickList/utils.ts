import { List } from ".";

/**
 * Проверяет, соответствуют ли выбранные элементы правильным
 * @param options все элементы задания
 * @param correctOptions список правильных элементов
 * @returns `true` если списки совпадают
 */
export const isChosenCorrect = (options: List[], correctOptions: Array<string>) => {
    const chosenOptions = options.filter(option => option.isSelected);

    if (chosenOptions.length !== correctOptions.length) {
        return false;
    }

    for (let i = 0; i < chosenOptions.length; i++) {
        if (correctOptions.indexOf(chosenOptions[i].value) == -1) {
            return false;
        }
    }

    return true;
}