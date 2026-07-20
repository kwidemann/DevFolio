'use client';

import { icons, type LucideProps } from 'lucide-react';
import { memo } from 'react';

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon = memo(({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon {...props} />;
});

Icon.displayName = 'Icon';

export { Icon, type IconProps };
