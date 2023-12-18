const formatTime = (value: number, arrayString: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return `${value} ${arrayString[value % 100 > 4 && value % 100 < 20 ? 2 : cases[value % 10 < 5 ? value % 10 : 5]]}`
}

const preparedTime = (value: number) => {
    const hoursEnd = ['час', 'часа', 'часов']
    const minutesEnd = ['минута', 'минуты', 'минут']
    let valueFormat = []

    if (value >= 60) {
        const hours = Math.floor(value / 60)
        const minutes = value % 60
        valueFormat.push(hours)
        valueFormat.push(minutes)

        return valueFormat
            .reverse()
            .map((time: any, index: number) => {
                return Number(time) === 0 ? undefined : index === 0 ? formatTime(Number(time), minutesEnd) : formatTime(Number(time), hoursEnd)
            })
            .reverse()
            .filter((time: any) => !!time)
            .join(' ')
    } else {
        return formatTime(value, minutesEnd)
    }
}

export { preparedTime }