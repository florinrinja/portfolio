# Setup Instructions

## Initial Setup

Follow these steps **in order** to set up the project correctly:

### 1. Install Dependencies

From the **root directory** (`my-portfolio/`):

```bash
# Install all dependencies for both frontend and backend
npm install
```

This will install dependencies for:
- Root workspace
- Frontend (Next.js)
- Backend (Express)

### 2. Verify Installation

After installation completes, verify that `node_modules` exists in:
- `/my-portfolio/node_modules` (root)
- `/my-portfolio/frontend/node_modules` (symlinked by workspace)
- `/my-portfolio/backend/node_modules` (symlinked by workspace)

### 3. TypeScript Setup (Frontend)

The first time you run the dev server, Next.js will generate type definitions:

```bash
npm run dev:frontend
```

This creates:
- `frontend/.next/` directory
- Type definitions for Next.js

**Important:** If you see TypeScript errors before running the dev server, this is normal. They will resolve once Next.js generates its type files.

## Common Issues & Solutions

### TypeScript Errors in IDE

**Problem:** Red squiggly lines in VS Code for React/JSX

**Solutions:**

1. **Install dependencies first** (if not done):
   ```bash
   npm install
   ```

2. **Restart TypeScript server** in VS Code:
   - Press `Cmd/Ctrl + Shift + P`
   - Type "TypeScript: Restart TS Server"
   - Press Enter

3. **Run Next.js dev server** to generate types:
   ```bash
   npm run dev:frontend
   ```

4. **Close and reopen VS Code**

### Module Resolution Errors

If you see errors like `Cannot find module '@/components/...'`:

1. Make sure you're in the correct directory
2. Run `npm install` from root
3. Restart your IDE

### "JSX element implicitly has type 'any'"

This means React types aren't loaded. Fix:

1. Ensure `@types/react` is installed:
   ```bash
   cd frontend
   npm install --save-dev @types/react @types/react-dom
   ```

2. Restart TypeScript server (see above)

3. Make sure `next-env.d.ts` exists in `frontend/`

## Development Workflow

### Starting Development

**Option 1: Run everything**
```bash
npm run dev
```
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

**Option 2: Run individually**
```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend  
npm run dev:backend
```

### Making Changes

1. Edit files in `frontend/components/` or `frontend/app/`
2. Next.js hot-reloads automatically
3. No need to restart the server

### Adding Dependencies

**Frontend:**
```bash
npm install <package-name> --workspace=frontend
```

**Backend:**
```bash
npm install <package-name> --workspace=backend
```

## IDE Configuration

### VS Code (Recommended)

Install these extensions:
- ESLint
- Prettier
- TypeScript and JavaScript Language Features (built-in)

Recommended settings (`.vscode/settings.json`):
```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Production Build

### Frontend
```bash
npm run build:frontend
```

Output will be in `frontend/.next/`

### Backend
```bash
cd backend
npm run build
```

Output will be in `backend/dist/`

## Troubleshooting Checklist

- [ ] Node.js version >= 18.0.0 (`node --version`)
- [ ] Ran `npm install` from root directory
- [ ] `node_modules` exists in root and both workspaces
- [ ] Restarted TypeScript server in IDE
- [ ] Ran dev server at least once (`npm run dev:frontend`)
- [ ] `frontend/.next/` directory exists
- [ ] Closed and reopened IDE

## Still Having Issues?

1. **Clean install:**
   ```bash
   # Remove all node_modules and lock files
   rm -rf node_modules frontend/node_modules backend/node_modules
   rm -rf package-lock.json frontend/package-lock.json backend/package-lock.json
   
   # Reinstall
   npm install
   ```

2. **Check versions:**
   ```bash
   node --version  # Should be >= 18.0.0
   npm --version   # Should be >= 8.0.0
   ```

3. **Verify workspace setup:**
   ```bash
   npm list --workspaces
   ```

If problems persist, create an issue with:
- Node version
- npm version  
- Operating system
- Full error message
