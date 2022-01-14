export default interface AppData {
    countOne: number,
    countTwo: number,
    countThree: number,
    countFour: number,
    changeState: (appData: AppData) => void
}