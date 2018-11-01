import assert from 'assert'
import LatexFormatter from "../../src/formatters/FormatterLatex";

describe('formatter', () => {
  let format = ast => {
    let formatter = new LatexFormatter(ast)
    return formatter.format()
  }

  it('format a general latex example', () => {
    const ast = {
      type: 'operator',
      operator: 'exponent',
      lhs: {
        type: 'variable',
        value: 'var',
      },
      rhs: {
        type: 'number',
        value: -18,
      },
    }

    assert.equal(format(ast), 'var^{-18}')
  })

})
