import type { HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'stat-ee-header-social': HTMLAttributes<HTMLElement>
      'stat-ee-header-apps': HTMLAttributes<HTMLElement>
    }
  }
}
