npx supabase gen types typescript --local --schema app > ./src/database/types/db.app.d.ts
npx supabase gen types typescript --local --schema app_api > ./src/database/types/db.app_api.d.ts

npx supabase gen types typescript --local --schema todo > ./src/database/types/db.todo.d.ts
npx supabase gen types typescript --local --schema todo_api > ./src/database/types/db.todo_api.d.ts

npx supabase gen types typescript --local --schema msg > ./src/database/types/db.msg.d.ts
npx supabase gen types typescript --local --schema msg_api > ./src/database/types/db.msg_api.d.ts

npx supabase gen types typescript --local --schema loc > ./src/database/types/db.loc.d.ts
npx supabase gen types typescript --local --schema loc_api > ./src/database/types/db.loc_api.d.ts
