/**
 * Created by y115 on 11/16/2016.
 */
export default function (state = { leftMenuOpen: false }, action) {
  switch (action.type) {
    case 'TOGGLE_LEFT_MENU':
      return { ...state, leftMenuOpen: !state.leftMenuOpen };
    default:
      return state;
  }
}