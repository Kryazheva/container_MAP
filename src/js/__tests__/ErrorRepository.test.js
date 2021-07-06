import ErrorRepository from '../ErrorRepository';

test('Код ошибки 500', () => {
  const error = new ErrorRepository();
  expect(error.translate(500)).toBe('Внутренняя ошибка сервера');
});

test('Код ошибки 404', () => {
  const error = new ErrorRepository();
  expect(error.translate(404)).toBe('Не найден. Сервер не может найти запрашиваемый ресурс');
});

test('Код ошибки 405', () => {
  const error = new ErrorRepository();
  expect(error.translate(405)).toBe('Unknown error');
});
