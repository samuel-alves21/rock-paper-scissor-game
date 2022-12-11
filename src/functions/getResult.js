export const getResults = (myChoice, pcChoice) => {
  if (myChoice === pcChoice) return 'Empate!'

  if (
    (myChoice === 'rock' && pcChoice === 'scissor') ||
    (myChoice === 'paper' && pcChoice === 'rock') ||
    (myChoice === 'scissor' && pcChoice === 'paper')
  ) return 'Venceu!'
  
  return 'Perdeu!'
} 
