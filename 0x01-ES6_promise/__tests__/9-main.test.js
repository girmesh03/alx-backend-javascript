import guardrail from '../9-try';
import divideFunction from '../8-try';

test('guardrail should return an array with value and "Guardrail was processed"', () => {
    const mathFunction = () => divideFunction(10, 2);
    const result = guardrail(mathFunction);
    expect(result).toEqual([5, 'Guardrail was processed']);
});

test('guardrail should return an array with error message and "Guardrail was processed"', () => {
    const mathFunction = () => divideFunction(10, 0);
    const result = guardrail(mathFunction);
    expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
});
