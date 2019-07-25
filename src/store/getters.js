const getters = {
  menuList: state => state.sidebar.menuList,
  opened: state => state.sidebar.opened,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}

export default getters