const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('works with noon', () => {
    const res = timeWord("12-00");
    expect(res).toEqual("noon");
  });

  test('works with midnight', () => {
    const res = timeWord("00-00");
    expect(res).toEqual("midnight");
  });

  test('works with am times', () => {
    const res = timeWord("01-30");
    expect(res).toEqual("one thirty am");
  });

  test('works with pm times', () => {
    const res = timeWord("13-30");
    expect(res).toEqual("one thirty pm");
  });

  test('works with single digit minute times', () => {
    const res = timeWord("01-01");
    expect(res).toEqual("one oh one am");
  });

  test('works with teens minute times', () => {
    const res = timeWord("01-11");
    expect(res).toEqual("one eleven am");
  });
  
  test('works with o clock times', () => {
    const res = timeWord("01-00");
    expect(res).toEqual("one o'clock am");
  });

  test('works with flat tens minutes', () => {
    const res = timeWord("21-40");
    expect(res).toEqual("nine forty pm");
  });

  test('twelve twelve works', () => {
    const res = timeWord("00-12");
    expect(res).toEqual("twelve twelve am");
  });
});