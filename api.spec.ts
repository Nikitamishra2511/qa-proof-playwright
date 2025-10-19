import { test, expect } from '@playwright/test';

test('list users returns expected shape', async ({ request }) => {
  const res = await request.get('https://reqres.in/api/users?page=2');
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json).toHaveProperty('page');
  expect(Array.isArray(json.data)).toBeTruthy();
});

test('create user returns id', async ({ request }) => {
  const res = await request.post('https://reqres.in/api/users', {
    data: { name: 'Nikita', job: 'QA' }
  });
  expect(res.status()).toBe(201);
  const json = await res.json();
  expect(json).toHaveProperty('id');
  expect(json).toHaveProperty('createdAt');
});
