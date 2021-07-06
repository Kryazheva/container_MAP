/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(300, 'Множественный выбор')
      .set(301, 'Перемещён на постоянной основе - URI запрашиваемого ресурса был изменён')
      .set(304, 'Не модифицировано - используется для кеширования')
      .set(404, 'Не найден. Сервер не может найти запрашиваемый ресурс')
      .set(500, 'Внутренняя ошибка сервера')
      .set(502, 'Плохой шлюз, во время работы в качестве шлюза для получения ответа, нужного для обработки запроса, получил недействительный (недопустимый) ответ');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
