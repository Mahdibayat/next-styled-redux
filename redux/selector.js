import {createSelector} from 'reselect';

const siteSelector = state => state.site;

export const UserSelect = createSelector(
  [siteSelector],
  site => site.user
)

export const ThemeSelect = createSelector(
  [siteSelector],
  site => site.theme
)