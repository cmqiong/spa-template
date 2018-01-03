import { ajaxGet } from './../../assets/js/tools';

/**
 * @api {get} /question/list 列表
 * @apiName 列表初始化
 * @apiDescription 页面 : /question/list
 */

export function initItemList(params) {
	return ajaxGet('/api/question/list', params);
}

export function addUser() {
	return ajaxGet('');
}

export function deleteUser() {
  return ajaxGet('');
}
