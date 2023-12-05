'use client';

import { Select as AntdSelect, Flex, type SelectProps as AntdSelectProps } from 'antd';
import colors from 'tailwindcss/colors';
import type { componentsThemesMap } from '@/theme/main';
import SelectIcon from 'public/svg/select.svg';
import { useState } from 'react';
import { poppins } from '@/styles/fonts';

export interface SelectProps extends AntdSelectProps {}

export const selectTheme: componentsThemesMap['Select'] = {
  selectorBg: colors.transparent,
  colorBgElevated: colors.transparent,
  colorText: colors.white,
  colorTextPlaceholder: colors.gray[500],
}

export function Select({ onDropdownVisibleChange, showSearch, ...props }: AntdSelectProps) {
  const [open, setOpen] = useState(false);
  return (
    <AntdSelect
      popupClassName={`${poppins.variable} ${props.popupClassName}`}
      onDropdownVisibleChange={(e) => {
        if (onDropdownVisibleChange) {
          onDropdownVisibleChange(e);
        }
        setOpen(e);
      }}
      className={`min-w-[160px] ${props.className}`}
      suffixIcon={
        <Flex justify="center" align="center">
          <SelectIcon className={`duration-300 ${open ? "rotate-x-180" : ""}`} />
        </Flex>
      }
      {...props}
    >
    </AntdSelect>
  );
}