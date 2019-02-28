# Stacks Database Model

Stacks uses Google Firebase simple document database. We integrate it with Firebase authentication to store and retrieve user specific documents.

## Units (Collections & Documents)

- Users (application top-level collection)
- Pages (user top-level collection)
- Columns (user second-level collection)
- Cards (user base-level collection)

## Relations

1. `users` has all users as `user`.
2. Users collection may have zero or more members.
3. Each `user` has the collection `pages`.
4. Pages has all pages for this user as `page`.
5. Pages collection may have zero or more members.
6. Each `page` has the collection `columns`.
7. `columns` has all columns for this page as `column`.
8. Columns collection for this page may have one or more members.
9. Each `column` has the collection `cards`.
10. Cards has all cards under this column on this page as `card`.
11. Cards collection may have zero or more members.

## Definitions

Users (`user`)

- `userID`: string
- `pages`: collection [`pages`]

Pages (`page`)

- `name`: string
- `columns`: collection [`columns`]

Columns (`column`)

- `cards`: collection [`cards`]
