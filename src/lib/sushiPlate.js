export function liftPlate(card) {
  if (!card) return
  const plate = card.querySelector('.sushi-plate')
  const ui = card.querySelector('.layer-ui')
  const garnish = card.querySelector('.layer-garnish')
  const stamp = card.querySelector('.layer-stamp')
  if (!plate || !ui || !garnish || !stamp) return
  plate.style.transform = 'translateY(-8px) scale(1.02)'
  plate.style.boxShadow = '0 30px 60px -10px rgba(0,0,0,0.6)'
  ui.style.transform = 'translate(-18%, -24%) rotate(-8deg) scale(1.15)'
  ui.style.filter = 'drop-shadow(0 20px 30px rgba(0,0,0,0.45))'
  garnish.style.transform = 'translate(18%, -20%) rotate(8deg) scale(1.22)'
  garnish.style.filter = 'drop-shadow(0 16px 24px rgba(0,0,0,0.4))'
  stamp.style.transform = 'translate(-14%, 22%) rotate(-10deg) scale(1.2)'
  stamp.style.filter = 'drop-shadow(0 14px 20px rgba(0,0,0,0.45))'
}

export function resetPlate(card) {
  if (!card) return
  const plate = card.querySelector('.sushi-plate')
  const ui = card.querySelector('.layer-ui')
  const garnish = card.querySelector('.layer-garnish')
  const stamp = card.querySelector('.layer-stamp')
  if (!plate || !ui || !garnish || !stamp) return
  plate.style.transform = 'translateY(0) scale(1)'
  plate.style.boxShadow = ''
  ui.style.transform = 'translate(0, 0) rotate(-2deg) scale(1)'
  ui.style.filter = ''
  garnish.style.transform = 'translate(0, 0) rotate(4deg) scale(1)'
  garnish.style.filter = ''
  stamp.style.transform = 'translate(0, 0) scale(0.95)'
  stamp.style.filter = ''
}
