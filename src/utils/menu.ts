const menuArr = [
  {
    id: '0',
    title: '首页',
    icon: '',
    children: [
      {
        id: '0-1',
        title: '总览',
        routerPath: '/home/index',
        icon: '',
      }
    ]
  },
  {
    id: '1',
    title: '产品管理',
    icon: '',
    children: [
      {
        id: '1-1',
        title: '分类管理',
        routerPath: '/home/product/classification',
        icon: '',
      },{
        id: '1-2',
        title: '商品管理',
        routerPath: '/home/product/commodity',
        icon: '',
      },{
        id: '1-2',
        title: '轮播图管理',
        routerPath: '/home/product/swipersetup',
        icon: '',
      }
    ]
  },{
    id: '2',
    title: '订单管理',
    icon: '',
    children: [
      {
        id: '2-1',
        title: '订单管理',
        routerPath: '/home/order',
        icon: '',
      }
    ]
  },
  {
    id: '3',
    title: '用户管理',
    icon: '',
    children: [
      {
        id: '3-1',
        title: '会员管理',
        routerPath: '/home/users/member',
        icon: '',
      },{
        id: '3-2',
        title: '人员管理',
        routerPath: '/home/users/usersofnumber',
        icon: '',
      }
    ]
  },
  {
    id: '4',
    title: '系统设置',
    icon: '',
    children: [
      {
        id: '4-1',
        title: '系统配置',
        routerPath: '/home/system',
        icon: '',
      }
    ]
  },
]

export default menuArr
