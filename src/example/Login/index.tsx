import { Button, Input, Text } from '@src/components';
import { Box } from '@src/components/Layouts/Box';
import { Stack } from '@src/components/Layouts/Stack';

const Login = () => {
  return (
    <Box className='w-80 p-4 rounded-md border border-gray-300'>
      <Stack className='p-2'>
        <Text
          as='label'
          className='text-lg text-gray-700 font-bold'
          children='Login'
        />
        <Text
          as='label'
          className='text-sm text-gray-600 font-thin'
          children='Login into your account'
        />
      </Stack>
      <Stack className='p-2 gap-2'>
        <Text
          as='label'
          className='text-base text-gray-600 font-semibold'
          children='Email'
          align={'left'}
        />
        <Input type='email' placeholder='Email' required />
        <Text
          as='label'
          className='text-base text-gray-600 font-semibold'
          align={'left'}
          children='Password'
        />
        <Input type='password' placeholder='Password' required />
      </Stack>
      <Stack className='p-2 gap-2'>
        <Button children='Login' variant={'solid'} />
      </Stack>
    </Box>
  );
};

export default Login;
