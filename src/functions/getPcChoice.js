export const getPcChoice = () => {
  const choiceOptions = ['rock', 'paper', 'scissor']
  return choiceOptions[Math.floor(Math.random() * 3)]
}
