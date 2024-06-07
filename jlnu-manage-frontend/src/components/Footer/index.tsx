import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'Mar1f';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'codeNav',
          title: '吉林师范大学',
          href: 'https://www.jlnu.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '和作者联系',
          href: 'https://marone-1326817243.cos.ap-beijing.myqcloud.com/wx.jpg',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> Mar1f
            </>
          ),
          href: 'https://github.com/Mar1f',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
