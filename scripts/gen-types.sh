npx kysely-codegen --dialect postgres --camel-case --include-pattern 'app.*' --out-file ./db/types/db.app.d.ts

npx kysely-codegen --dialect postgres  --camel-case --include-pattern 'todo.*' --out-file ./db/types/db.todo.d.ts

npx kysely-codegen --dialect postgres  --camel-case --include-pattern 'msg.*' --out-file ./db/types/db.msg.d.ts

npx kysely-codegen --dialect postgres  --camel-case --include-pattern 'loc.*' --out-file ./db/types/db.loc.d.ts
