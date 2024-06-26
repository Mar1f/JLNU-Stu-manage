export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' }
    ]
  },
  { path: '/', icon: 'home', component: './Index', name: "主页" },
  // 文件上传下载测试
  { path: '/test/file', icon: 'home', component: './Test/File', name: "文件上传下载测试" ,hideInMenu:true},
  //
  { path: '/generator/add', icon: 'plus', component: './Generator/Add', name: "创建专业" },
  { path: '/generator/update', icon: 'RetweetOutlined', component: './Generator/Add', name: "修改专业信息" ,hideInMenu:true},

  { path: '/generator/detail/:id', icon: 'RetweetOutlined', component: './Generator/Detail', name: "专业详情" ,hideInMenu:true},
  {
    path: '/admin',
    icon: 'crown',
    name: "管理页",
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user' },
      { icon: 'table', path: '/admin/user', component: './Admin/User', name: "学生管理" },
      { icon: 'tools', path: '/admin/generator', component: './Admin/Generator', name: "专业管理" },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
