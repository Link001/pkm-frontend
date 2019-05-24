export function required(title) {
    return value => !!value || `Поле ${title} обов'язкове`
}

export function minLength(title, length) {
    return value => {
        if (value.length < length) {
            return `Довжина поля ${title} повинна бути гне коротшую ніж ${length} символів`
        }
        return false;
    }
}
