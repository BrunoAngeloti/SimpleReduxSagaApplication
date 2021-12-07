import { freteGratis } from './sagas'

test('freteGratis é verdadeiro para 200', () => {
  expect(freteGratis(200)).toBeTruthy()
})