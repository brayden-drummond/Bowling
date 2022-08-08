// new file for code
module.exports = {
  scoreFrame,
  scoreGame,
}

function scoreFrame(frame, nextFrame, thirdFrame) {
  //score single frames
  let score = frame[0] + frame[1]
  // scores perfect game
  if (frame[0] + frame[1] === 20) {
    score += frame[2]
    //score double strike
  } else if (
    frame[0] === 10 &&
    nextFrame[0] === 10 &&
    thirdFrame !== undefined
  ) {
    score += nextFrame[0] + thirdFrame[0] + thirdFrame[1]
    //score strike
  } else if (frame[0] === 10) {
    score += nextFrame[0] + nextFrame[1]
    //score spare
  } else if (frame[0] + frame[1] === 10) {
    score += nextFrame[0]
  }

  return score
}

//loop through array and assign each index to frame, nextframe and thirdframe
function scoreGame(frames) {
  let total = 0
  for (let i = 0; i < frames.length; i++) {
    total += scoreFrame(frames[i], frames[i + 1], frames[i + 2])
  }
  return total
}
