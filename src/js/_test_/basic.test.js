import ErrorRepository from '../app';

const errorRepository = new ErrorRepository();

errorRepository.errors.set('404', 'Not Found');
errorRepository.errors.set('414', 'Request-URL Too Long');
errorRepository.errors.set('502', 'Bad Gateway');

test('has code', () => {
  expect(errorRepository.translate('404')).toBe('Not Found');
});

test('no code', () => {
  expect(errorRepository.translate('500')).toBe('Unknown error');
});
