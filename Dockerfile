# DevFolio Web - Next.js 14 + Tailwind
# Development Dockerfile (installs from monorepo root)

FROM node:20-alpine as base

WORKDIR /app

# Install pnpm v9
RUN corepack enable && corepack prepare pnpm@9 --activate

# Copy all package files for workspace resolution
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages/shared-types/package.json ./packages/shared-types/
COPY packages/shared-types/tsconfig.json ./packages/shared-types/
COPY tooling/typescript-config/package.json ./tooling/typescript-config/

# Development stage
FROM base as development

# Install all workspace dependencies
RUN pnpm install --no-frozen-lockfile

# Copy source code
COPY apps/web ./apps/web
COPY packages/shared-types ./packages/shared-types
COPY tooling/typescript-config ./tooling/typescript-config

WORKDIR /app/apps/web

# Expose port
EXPOSE 3000

# Run with hot reload (Turbopack)
CMD ["pnpm", "dev"]

# Builder stage
FROM base as builder

# Install all dependencies
RUN pnpm install --no-frozen-lockfile

# Copy source code
COPY apps/web ./apps/web
COPY packages/shared-types ./packages/shared-types
COPY tooling/typescript-config ./tooling/typescript-config

WORKDIR /app/apps/web

# Build application
RUN pnpm build

# Production stage
FROM node:20-alpine as production

WORKDIR /app

ENV NODE_ENV=production

# Copy built application
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./.next/static

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]