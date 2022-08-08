//new file for tests
const score = require('./score')

describe('scoreFrame', () => {
  test('scores a gutterball', () => {
    //arrange
    const frame = [0, 0]
    // const nextFrame = [2, 3]
    const expected = 0
    //act
    const actual = score.scoreFrame(frame)
    //asert
    expect(actual).toBe(expected)
  })

  test('scores a simple frame', () => {
    //arrange
    const frame = [5, 3]
    // const nextFrame = [2, 3]
    const expected = 8
    //act
    const actual = score.scoreFrame(frame)
    //asert
    expect(actual).toBe(expected)
  })

  test('scores a spare frame', () => {
    //arrange
    const frame = [6, 4]
    const nextFrame = [2, 3]
    // const nextFrame = [2, 3]
    const expected = 12
    //act
    const actual = score.scoreFrame(frame, nextFrame)
    //asert
    expect(actual).toBe(expected)
  })

  test('scores a strike frame', () => {
    //arrange
    const frame = [10, 0]
    const nextFrame = [2, 3]
    // const nextFrame = [2, 3]
    const expected = 15
    //act
    const actual = score.scoreFrame(frame, nextFrame)
    //asert
    expect(actual).toBe(expected)
  })

  test('scores a double strike frame', () => {
    //arrange
    const frame = [10, 0]
    const nextFrame = [10, 0]
    const thirdFrame = [6, 3]
    const expected = 29
    //act
    const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
    //asert
    expect(actual).toBe(expected)
  })
})

test('scores a game', () => {
  //arrange
  const frames = [
    [1, 2],
    [6, 4],
    [5, 4],
    [10, 0],
    [7, 2],
    [10, 0],
    [10, 0],
    [5, 2],
    [7, 0],
    [4, 4],
  ]
  const expected = 119
  //act
  const actual = score.scoreGame(frames)
  //asert
  expect(actual).toBe(expected)
})

test('scores a game with strikes on last frame', () => {
  //arrange
  const frames = [
    [1, 2],
    [6, 4],
    [5, 4],
    [10, 0],
    [7, 2],
    [10, 0],
    [10, 0],
    [5, 2],
    [7, 0],
    [10, 10, 10],
  ]
  const expected = 141
  //act
  const actual = score.scoreGame(frames)
  //asert
  expect(actual).toBe(expected)
})
