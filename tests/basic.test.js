import { assert, expect, test } from 'vitest'
import testdata from '../src/data/mock-db.json'

test('test-data', () => {
    const output = testdata.articles[0].author
    expect(output).toBe('James Waters')
})
