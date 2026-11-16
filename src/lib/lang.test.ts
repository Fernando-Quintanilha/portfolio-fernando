import { expect, test } from 'vitest';
import { detectLang, searchWithLang } from './lang';

test('trocar de idioma atualiza o ?lang= que já está na URL', () => {
  expect(searchWithLang('?lang=en', 'pt')).toBe('?lang=pt');
  expect(searchWithLang('?x=1&lang=en', 'pt')).toBe('?x=1&lang=pt');
});

test('sem ?lang= na URL, o endereço não muda', () => {
  expect(searchWithLang('', 'en')).toBeNull();
  expect(searchWithLang('?x=1', 'en')).toBeNull();
});

test('parâmetro ?lang= na URL vence tudo', () => {
  expect(detectLang({ search: '?lang=en', stored: 'pt', languages: ['pt-BR'] })).toBe('en');
  expect(detectLang({ search: '?x=1&lang=pt', stored: 'en', languages: ['en-US'] })).toBe('pt');
});

test('escolha salva vence o navegador', () => {
  expect(detectLang({ search: '', stored: 'en', languages: ['pt-BR'] })).toBe('en');
});

test('navegador em português abre em português', () => {
  expect(detectLang({ search: '', stored: null, languages: ['pt-BR', 'en'] })).toBe('pt');
  expect(detectLang({ search: '', stored: null, languages: ['en-US', 'pt'] })).toBe('pt');
});

test('navegador em outro idioma abre em inglês', () => {
  expect(detectLang({ search: '', stored: null, languages: ['de-DE', 'en'] })).toBe('en');
});

test('valores inválidos são ignorados e o padrão é português', () => {
  expect(detectLang({ search: '?lang=fr', stored: 'xx', languages: [] })).toBe('pt');
});
