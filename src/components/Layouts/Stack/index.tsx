import { cn } from '@src/utils';
import { Box, BoxProps } from '../Box';

type StackProps = BoxProps;

export const Stack = ({ className, ...props }: StackProps) => (
  <Box className={cn('flex flex-col items-start', className)} {...props} />
);
