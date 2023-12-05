import SearchIcon from 'public/svg/search.svg';
import { Input, type InputProps } from '../Input';
import Image from 'next/image';
import CloseIcon from 'public/close.png';
import { Flex } from 'antd';

export interface SearchProps extends InputProps {}

export function Search({ ...props }: SearchProps) {
  return (
    <Input
      prefix={<SearchIcon className="mr-2" />}
      allowClear={{ clearIcon:
        <Flex justify="center" align="center">
          <Image src={CloseIcon} alt="clear field" width={24} height={24} />
        </Flex>
      }}
      {...props}
    />
  )
}
