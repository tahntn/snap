import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Box } from '@radix-ui/themes';

interface AvatarUserProps {
  name: string;
  url: string;
}

const AvatarUser: React.FC<AvatarUserProps> = ({ name, url }) => {
  return (
    <Box className="relative">
      <Avatar>
        <AvatarImage src={url} />
        <AvatarFallback className="uppercase">{name[0]}</AvatarFallback>
      </Avatar>

      <Badge className="absolute bottom-0 right-0 rounded-full p-[5px] bg-green-400" />
    </Box>
  );
};

export default AvatarUser;
